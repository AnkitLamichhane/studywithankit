const fs = require('fs');
const jsdom = require('jsdom'); // Check if jsdom or raw evaluation works
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '..', 'css', 'style.css'), 'utf8');
const jsNotes = fs.readFileSync(path.join(__dirname, '..', 'js', 'notes-data.js'), 'utf8');
const jsApp = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

console.log('HTML size:', html.length);
console.log('CSS size:', css.length);
console.log('Notes data size:', jsNotes.length);
console.log('App JS size:', jsApp.length);
