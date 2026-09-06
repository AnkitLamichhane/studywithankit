const fs = require('fs');
const path = require('path');

const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');

// Read existing notes-data.js
let content = fs.readFileSync(notesDataPath, 'utf8');

console.log("Current notes-data.js byte length:", content.length);
