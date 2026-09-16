const fs = require('fs');
const path = require('path');

// 1. Read restored build data (has full Class 8 Excel & HTML, Class 6 Ch 1, Class 9, Class 10)
let codeRestored = fs.readFileSync(path.join(__dirname, 'restored-build-data.js'), 'utf8');
codeRestored = codeRestored.split('const outputContent =')[0];
codeRestored = codeRestored.replace('const notesData =', 'global.restoredNotesData =');
eval(codeRestored);
const restoredData = global.restoredNotesData;

// 2. Read current build data (has Class 7 updated 22 chapters TOC & Ch 9 notes)
let codeCurrent = fs.readFileSync(path.join(__dirname, 'build-data.js'), 'utf8');
codeCurrent = codeCurrent.split('const outputContent =')[0];
codeCurrent = codeCurrent.replace('const notesData =', 'global.currentNotesData =');
eval(codeCurrent);
const currentData = global.currentNotesData;

// 3. Build merged data structure
const mergedData = {
  class6: restoredData.class6,
  class7: currentData.class7, // Uses updated 22 chapters TOC & Chapter 9 notes
  class8: restoredData.class8, // Preserves detailed Excel (Ch 6) & HTML (Ch 13) notes & exercises
  class9: restoredData.class9 || currentData.class9,
  class10: restoredData.class10 || currentData.class10
};

// 4. Generate notes-data.js content
const notesDataJSContent = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(mergedData, null, 2)};
`;

const targetNotesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
fs.writeFileSync(targetNotesDataPath, notesDataJSContent, 'utf8');
console.log('Successfully written merged notes-data.js!');

// 5. Update build-data.js script so future builds maintain everything
const buildScriptContent = `const fs = require('fs');
const path = require('path');

const notesData = ${JSON.stringify(mergedData, null, 2)};

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
