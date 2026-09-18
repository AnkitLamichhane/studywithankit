const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// Helper to generate division table HTML
function createDivTableHtml(decNum, binaryResult, steps) {
  let rowsHtml = steps.map(s => `<tr><td>2</td><td>${s.q}</td><td><strong>${s.r}</strong></td></tr>`).join('');
  rowsHtml += `<tr><td></td><td>0</td><td></td></tr>`;

  return `
    <div class="table-responsive" style="margin-top: 10px;">
      <table class="notes-table" style="max-width: 320px;">
        <thead>
          <tr><th>Divisor (2)</th><th>Number / Quotient</th><th>Remainder</th></tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
    <p style="margin-top: 8px;">Reading remainders from <strong>bottom to top</strong> (MSB to LSB):</p>
    <p><strong>&there4; (${decNum})<sub>10</sub> = (${binaryResult})<sub>2</sub></strong></p>
  `;
}

// Q3 Problems with step-by-step division arrays
const q3Problems = [
  {
    num: "a. (26)<sub>10</sub>",
    dec: 26,
    bin: "11010",
    steps: [
      { q: 26, r: 0 },
      { q: 13, r: 1 },
      { q: 6, r: 0 },
      { q: 3, r: 1 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "b. (59)<sub>10</sub>",
    dec: 59,
    bin: "111011",
    steps: [
      { q: 59, r: 1 },
      { q: 29, r: 1 },
      { q: 14, r: 0 },
      { q: 7, r: 1 },
      { q: 3, r: 1 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "c. (75)<sub>10</sub>",
    dec: 75,
    bin: "1001011",
    steps: [
      { q: 75, r: 1 },
      { q: 37, r: 1 },
      { q: 18, r: 0 },
      { q: 9, r: 1 },
      { q: 4, r: 0 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "d. (135)<sub>10</sub>",
    dec: 135,
    bin: "10000111",
    steps: [
      { q: 135, r: 1 },
      { q: 67, r: 1 },
      { q: 33, r: 1 },
      { q: 16, r: 0 },
      { q: 8, r: 0 },
      { q: 4, r: 0 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "e. (175)<sub>10</sub>",
    dec: 175,
    bin: "10101111",
    steps: [
      { q: 175, r: 1 },
      { q: 87, r: 1 },
      { q: 43, r: 1 },
      { q: 21, r: 1 },
      { q: 10, r: 0 },
      { q: 5, r: 1 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "f. (250)<sub>10</sub>",
    dec: 250,
    bin: "11111010",
    steps: [
      { q: 250, r: 0 },
      { q: 125, r: 1 },
      { q: 62, r: 0 },
      { q: 31, r: 1 },
      { q: 15, r: 1 },
      { q: 7, r: 1 },
      { q: 3, r: 1 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "g. (310)<sub>10</sub>",
    dec: 310,
    bin: "100110110",
    steps: [
      { q: 310, r: 0 },
      { q: 155, r: 1 },
      { q: 77, r: 1 },
      { q: 38, r: 0 },
      { q: 19, r: 1 },
      { q: 9, r: 1 },
      { q: 4, r: 0 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "h. (845)<sub>10</sub>",
    dec: 845,
    bin: "1101001101",
    steps: [
      { q: 845, r: 1 },
      { q: 422, r: 0 },
      { q: 211, r: 1 },
      { q: 105, r: 1 },
      { q: 52, r: 0 },
      { q: 26, r: 0 },
      { q: 13, r: 1 },
      { q: 6, r: 0 },
      { q: 3, r: 1 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "i. (521)<sub>10</sub>",
    dec: 521,
    bin: "1000001001",
    steps: [
      { q: 521, r: 1 },
      { q: 260, r: 0 },
      { q: 130, r: 0 },
      { q: 65, r: 1 },
      { q: 32, r: 0 },
      { q: 16, r: 0 },
      { q: 8, r: 0 },
      { q: 4, r: 0 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  },
  {
    num: "j. (651)<sub>10</sub>",
    dec: 651,
    bin: "1010001011",
    steps: [
      { q: 651, r: 1 },
      { q: 325, r: 1 },
      { q: 162, r: 0 },
      { q: 81, r: 1 },
      { q: 40, r: 0 },
      { q: 20, r: 0 },
      { q: 10, r: 0 },
      { q: 5, r: 1 },
      { q: 2, r: 0 },
      { q: 1, r: 1 }
    ]
  }
];

// Generate HTML string for Question 3 exercise section
const q3ExerciseHtml = `
  <h3>3. Convert the Following Decimal Numbers into Binary Numbers</h3>
  ${q3Problems.map(p => `
    <div class="qa-card">
      <div class="qa-card-q">${p.num}</div>
      <div class="qa-card-a">
        ${createDivTableHtml(p.dec, p.bin, p.steps)}
      </div>
    </div>
  `).join('')}
`;

// Find Chapter 12 in Class 7 and update Topic 4 (Textbook Exercise Solutions)
const ch12 = currentNotes.class7.computerScience.find(ch => ch.chapterNumber === 12);
if (ch12 && ch12.topics.length >= 4) {
  // Extract Q1 and Q2 from existing topic content
  let existingContent = ch12.topics[3].content;
  const q3Index = existingContent.indexOf('<h3>3. Convert the Following Decimal Numbers into Binary Numbers</h3>');
  
  if (q3Index !== -1) {
    const q1q2Part = existingContent.substring(0, q3Index);
    ch12.topics[3].content = q1q2Part + q3ExerciseHtml;
  }
}

// Output updated notesData
const notesDataJS = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(currentNotes, null, 2)};
`;

fs.writeFileSync(notesDataPath, notesDataJS, 'utf8');
console.log('Successfully updated Q3 tabular solutions in Class 7 Chapter 12!');

// Update build-data.js
const buildScriptContent = `const fs = require('fs');
const path = require('path');

const notesData = ${JSON.stringify(currentNotes, null, 2)};

const outputContent = \`/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = \${JSON.stringify(notesData, null, 2)};
\`;

const outputPath = path.join(__dirname, '..', 'js', 'notes-data.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('Successfully generated full notes-data.js with all class notes intact!');
`;

fs.writeFileSync(path.join(__dirname, 'build-data.js'), buildScriptContent, 'utf8');
console.log('Successfully updated scratch/build-data.js!');
