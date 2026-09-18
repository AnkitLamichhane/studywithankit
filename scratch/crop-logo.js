const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Minimal PNG Parser & Encoder in Pure Node.js
function decodePNG(buffer) {
  let offset = 8;
  let width, height, bitDepth, colorType;
  let compressedData = [];

  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const data = buffer.slice(offset + 8, offset + 8 + length);

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === 'IDAT') {
      compressedData.push(data);
    } else if (type === 'IEND') {
      break;
    }
    offset += 12 + length;
  }

  const inflated = zlib.inflateSync(Buffer.concat(compressedData));
  const pixels = Buffer.alloc(width * height * 4);

  let srcIdx = 0;
  const bpp = colorType === 6 ? 4 : (colorType === 2 ? 3 : 4);
  const prevRow = Buffer.alloc(width * bpp);
  const currRow = Buffer.alloc(width * bpp);

  for (let y = 0; y < height; y++) {
    const filterType = inflated[srcIdx++];
    for (let i = 0; i < width * bpp; i++) {
      let val = inflated[srcIdx++];
      let left = i >= bpp ? currRow[i - bpp] : 0;
      let up = prevRow[i];
      let upLeft = i >= bpp ? prevRow[i - bpp] : 0;

      if (filterType === 1) val = (val + left) & 0xff;
      else if (filterType === 2) val = (val + up) & 0xff;
      else if (filterType === 3) val = (val + Math.floor((left + up) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = left + up - upLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upLeft);
        let pr = (pa <= pb && pa <= pc) ? left : (pb <= pc ? up : upLeft);
        val = (val + pr) & 0xff;
      }
      currRow[i] = val;
    }

    for (let x = 0; x < width; x++) {
      const dstIdx = (y * width + x) * 4;
      pixels[dstIdx] = currRow[x * bpp];
      pixels[dstIdx + 1] = currRow[x * bpp + 1];
      pixels[dstIdx + 2] = currRow[x * bpp + 2];
      pixels[dstIdx + 3] = bpp === 4 ? currRow[x * bpp + 3] : 255;
    }
    currRow.copy(prevRow);
  }

  return { width, height, pixels };
}

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    let c = buf[i];
    for (let j = 0; j < 8; j++) {
      if ((crc ^ c) & 1) crc = (crc >>> 1) ^ 0xedb88320;
      else crc = crc >>> 1;
      c = c >>> 1;
    }
  }
  return (crc ^ -1) >>> 0;
}

function encodePNG(width, height, pixels) {
  const scanlines = Buffer.alloc(height * (width * 4 + 1));
  let dstIdx = 0;
  for (let y = 0; y < height; y++) {
    scanlines[dstIdx++] = 0;
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      scanlines[dstIdx++] = pixels[srcIdx];
      scanlines[dstIdx++] = pixels[srcIdx + 1];
      scanlines[dstIdx++] = pixels[srcIdx + 2];
      scanlines[dstIdx++] = pixels[srcIdx + 3];
    }
  }

  const deflated = zlib.deflateSync(scanlines);
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', deflated),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

const inputBuf = fs.readFileSync(path.join(__dirname, '..', 'assets', 'images', 'brand-logo.png'));
const img = decodePNG(inputBuf);

// Precision crop for the logo icon (x: 228 to 358, y: 224 to 340)
const minX = 228;
const maxX = 358;
const minY = 224;
const maxY = 340;

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const croppedPixels = Buffer.alloc(cropW * cropH * 4);

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcX = minX + x;
    const srcY = minY + y;
    const srcIdx = (srcY * img.width + srcX) * 4;
    const dstIdx = (y * cropW + x) * 4;

    const r = img.pixels[srcIdx];
    const g = img.pixels[srcIdx + 1];
    const b = img.pixels[srcIdx + 2];
    
    // Smooth background removal threshold
    const brightness = (r + g + b) / 3;
    let alpha = 255;
    if (brightness < 30) {
      alpha = 0;
    } else if (brightness < 60) {
      alpha = Math.floor((brightness - 30) / 30 * 255);
    }

    croppedPixels[dstIdx] = r;
    croppedPixels[dstIdx + 1] = g;
    croppedPixels[dstIdx + 2] = b;
    croppedPixels[dstIdx + 3] = alpha;
  }
}

const croppedPNG = encodePNG(cropW, cropH, croppedPixels);
const outputPath = path.join(__dirname, '..', 'assets', 'images', 'logo-icon.png');
fs.writeFileSync(outputPath, croppedPNG);
console.log('Precision cropped logo icon saved! Dimensions:', cropW, 'x', cropH);
