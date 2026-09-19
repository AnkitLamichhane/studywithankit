const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const htmlPath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');

// Node script using headless edge to inspect computed styles & bounding rects of all desktop elements
async function runAudit() {
  const edgeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--window-size=1280,800',
    '--disable-gpu',
    '--no-sandbox',
    htmlPath
  ]);

  setTimeout(async () => {
    try {
      const res = await fetch('http://127.0.0.1:9223/json');
      const tabs = await res.json();
      const tab = tabs.find(t => t.url.includes('index.html'));

      if (tab) {
        // Send CDP Commands via HTTP debugger evaluation
        console.log('Found tab:', tab.title);
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
    edgeProc.kill();
  }, 2000);
}

runAudit();
