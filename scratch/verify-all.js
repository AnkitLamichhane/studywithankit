const fs = require('fs');
const path = require('path');

let code = fs.readFileSync(path.join(__dirname, '..', 'js', 'notes-data.js'), 'utf8');
code = code.replace('const notesData =', 'global.notesData =');
eval(code);
const data = global.notesData;

console.log('=== CHAPTER COUNT AUDIT ===');
const counts = {};
Object.keys(data).forEach(cls => {
  counts[cls] = data[cls].computerScience.length;
  console.log(`${cls}: ${counts[cls]} chapters`);
});

console.log('\n=== CLASS 7 CHAPTER 2 AUDIT ===');
const ch2 = data.class7.computerScience.find(c => c.chapterNumber === 2);
console.log('ID:', ch2.id);
console.log('Title:', ch2.title);
console.log('Summary:', ch2.summary);
console.log('Total Topics:', ch2.topics.length);
ch2.topics.forEach((t, i) => {
  console.log(`  [${i + 1}] ${t.title}`);
});

console.log('\n=== CLASS 7 CH 2 IMAGE REFERENCES AUDIT ===');
const imgRegex = /src="([^"]+)"/g;
let match;
const foundImgs = [];
ch2.topics.forEach(t => {
  while ((match = imgRegex.exec(t.content)) !== null) {
    foundImgs.push(match[1]);
  }
});
console.log(`Found ${foundImgs.length} image references in Class 7 Chapter 2:`);
foundImgs.forEach((src, idx) => {
  const fullPath = path.join(__dirname, '..', src);
  const exists = fs.existsSync(fullPath);
  console.log(`  (${idx + 1}) ${src} -> Exists on disk: ${exists}`);
});

console.log('\n=== CLASS 7 CHAPTER 3 AUDIT ===');
const ch3 = data.class7.computerScience.find(c => c.chapterNumber === 3);
console.log('ID:', ch3.id);
console.log('Title:', ch3.title);
console.log('Summary:', ch3.summary);
console.log('Total Topics:', ch3.topics.length);
ch3.topics.forEach((t, i) => {
  console.log(`  [${i + 1}] ${t.title}`);
});

console.log('\n=== CLASS 7 CH 3 IMAGE REFERENCES AUDIT ===');
const foundImgsCh3 = [];
ch3.topics.forEach(t => {
  let m;
  const regex = /src="([^"]+)"/g;
  while ((m = regex.exec(t.content)) !== null) {
    foundImgsCh3.push(m[1]);
  }
});
console.log(`Found ${foundImgsCh3.length} image references in Class 7 Chapter 3:`);
foundImgsCh3.forEach((src, idx) => {
  const fullPath = path.join(__dirname, '..', src);
  const exists = fs.existsSync(fullPath);
  console.log(`  (${idx + 1}) ${src} -> Exists on disk: ${exists}`);
});

console.log('\n=== CLASS 7 CHAPTER 4 AUDIT ===');
const ch4 = data.class7.computerScience.find(c => c.chapterNumber === 4);
console.log('ID:', ch4.id);
console.log('Title:', ch4.title);
console.log('Summary:', ch4.summary);
console.log('Total Topics:', ch4.topics.length);
ch4.topics.forEach((t, i) => {
  console.log(`  [${i + 1}] ${t.title}`);
});

console.log('\n=== CLASS 7 CHAPTER 5 AUDIT ===');
const ch5 = data.class7.computerScience.find(c => c.chapterNumber === 5);
console.log('ID:', ch5.id);
console.log('Title:', ch5.title);
console.log('Summary:', ch5.summary);
console.log('Total Topics:', ch5.topics.length);
ch5.topics.forEach((t, i) => {
  console.log(`  [${i + 1}] ${t.title}`);
});

console.log('\n=== CLASS 7 CH 5 IMAGE REFERENCES AUDIT ===');
const foundImgsCh5 = [];
ch5.topics.forEach(t => {
  let m;
  const regex = /src="([^"]+)"/g;
  while ((m = regex.exec(t.content)) !== null) {
    foundImgsCh5.push(m[1]);
  }
});
console.log(`Found ${foundImgsCh5.length} image references in Class 7 Chapter 5:`);
let allCh5ImgsExist = true;
foundImgsCh5.forEach((src, idx) => {
  const fullPath = path.join(__dirname, '..', src);
  const exists = fs.existsSync(fullPath);
  if (!exists) allCh5ImgsExist = false;
  console.log(`  (${idx + 1}) ${src} -> Exists on disk: ${exists}`);
});
console.log('All 20 Chapter 5 images exist on disk:', allCh5ImgsExist);

console.log('\n=== INTEGRITY CHECKS ===');
console.log('Class 6 chapters preserved (18):', counts.class6 === 18);
console.log('Class 7 chapters preserved (22):', counts.class7 === 22);
console.log('Class 8 chapters preserved (17):', counts.class8 === 17);
console.log('Class 9 chapters preserved (5):', counts.class9 === 5);
console.log('Class 10 chapters preserved (6):', counts.class10 === 6);
console.log('Total chapters across all classes:', Object.values(counts).reduce((a, b) => a + b, 0));



