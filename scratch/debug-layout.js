const { spawn } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');

// Use chrome command line flag to print layout/DOM info directly
const edgeProc = spawn(chromePath, [
  '--headless=new',
  '--window-size=1280,800',
  '--dump-dom',
  htmlPath
]);

let domOutput = '';
edgeProc.stdout.on('data', (data) => {
  domOutput += data.toString();
});

edgeProc.on('close', (code) => {
  console.log('Dumped DOM length:', domOutput.length);
  // Check if main views exist in DOM
  ['view-home', 'view-class-6', 'view-class-7', 'view-class-8', 'view-class-9', 'view-class-10', 'view-about', 'view-notes'].forEach(id => {
    console.log(`View #${id} in DOM:`, domOutput.includes(`id="${id}"`));
  });
});
