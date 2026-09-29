const fs = require('fs');
const path = require('path');

const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let notesDataCode = fs.readFileSync(notesDataPath, 'utf8');

const prefix = 'const notesData = ';
const suffixIndex = notesDataCode.lastIndexOf(';');
const jsonString = notesDataCode.slice(notesDataCode.indexOf(prefix) + prefix.length, suffixIndex).trim();
const notesObj = JSON.parse(jsonString);

const c7 = notesObj.class7.computerScience;
const ch5 = c7.find(c => c.chapterNumber === 5);

const exerciseHtml = `
  <p class="lead-text">
    Complete textbook exercise solutions for <strong>Class 7 Computer Science &mdash; Chapter 5: Working with Windows 11</strong> (Textbook Pages 69&ndash;70).
  </p>

  <!-- Question 1 -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">1. Answer the following questions:</h4>

    <div class="qa-item my-3">
      <p class="question"><strong>a. What is the Desktop? List its components.</strong></p>
      <div class="answer">
        <p><strong>The Desktop:</strong> The Desktop is the primary on-screen workspace and background area that appears when the graphical user interface (GUI) operating system (Windows 11) is loaded into the computer's memory (RAM). All open windows, dialog boxes, icons, and menus appear on top of the Desktop.</p>
        <p><strong>Main Components of the Desktop:</strong></p>
        <ol>
          <li><strong>Desktop Background (Wallpaper):</strong> The graphic image, color, or picture displayed across the screen surface.</li>
          <li><strong>Desktop Icons:</strong> Small graphical symbols representing applications, files, folders, and system drives (e.g., This PC, User's Files, Recycle Bin).</li>
          <li><strong>Taskbar:</strong> The horizontal bar typically located along the bottom edge containing the Start button, pinned app shortcuts, active window buttons, system tray, and clock.</li>
          <li><strong>Start Menu:</strong> The central launchpad opened by clicking the Start button to find and launch installed applications, access settings, and control power options.</li>
          <li><strong>Application Windows:</strong> Rectangular on-screen frames that open when programs, folders, or documents are launched.</li>
        </ol>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>b. What is an icon? List any four icons.</strong></p>
      <div class="answer">
        <p>An <strong>icon</strong> is a small graphical picture or symbol on the computer screen that represents a program, file, folder, or disk drive. Double-clicking an icon opens or executes the associated item.</p>
        <p><strong>Four Common Desktop Icons:</strong></p>
        <ol>
          <li><strong>This PC:</strong> Provides access to local disk partitions, drives, and storage hardware.</li>
          <li><strong>Recycle Bin:</strong> Stores deleted files and folders temporarily.</li>
          <li><strong>User's Files folder:</strong> Contains personal user sub-folders like Documents, Downloads, Pictures, Music, and Videos.</li>
          <li><strong>Network:</strong> Displays other computers and shared devices connected to the local network.</li>
        </ol>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>c. What is Recycle Bin?</strong></p>
      <div class="answer">
        <p>The <strong>Recycle Bin</strong> is a special system folder on the Windows desktop that temporarily stores files and folders deleted from the computer's internal hard drive. It provides a safeguard against accidental data loss:</p>
        <ul>
          <li><strong>Restore:</strong> If a file or folder was deleted by mistake, it can be restored to its original storage location.</li>
          <li><strong>Empty Recycle Bin:</strong> Users can permanently remove all contents to free up storage space on the hard drive.</li>
        </ul>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>d. What is a file? What is the importance of extension of a file?</strong></p>
      <div class="answer">
        <p><strong>What is a file?</strong> A <strong>file</strong> is a collection of related data, text, information, pictures, audio, or instructions saved together on a secondary storage device (such as a hard disk, SSD, or USB drive) under a unique name.</p>
        <p><strong>Importance of a file extension:</strong></p>
        <ul>
          <li>A file extension is a 3 to 4-character suffix preceded by a period at the end of a filename (e.g., <code>.docx</code>, <code>.xlsx</code>, <code>.pptx</code>, <code>.jpg</code>, <code>.mp4</code>).</li>
          <li>It specifies the <strong>format and type</strong> of data stored inside the file.</li>
          <li>It informs the operating system <strong>which application software</strong> must be used to open, read, or edit the file.</li>
        </ul>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>e. What is a folder? What is the use of folder?</strong></p>
      <div class="answer">
        <p><strong>What is a folder?</strong> A <strong>folder</strong> (also called a <strong>directory</strong>) is a digital container or electronic cabinet used to store and organize files and other folders on a disk. A folder located inside another folder is known as a <strong>sub-folder</strong>.</p>
        <p><strong>Uses of a folder:</strong></p>
        <ol>
          <li><strong>Systematic Organization:</strong> Keeps hundreds or thousands of files organized into distinct logical categories rather than cluttering a single drive.</li>
          <li><strong>Quick Retrieval:</strong> Enables users to search, locate, and access needed documents and projects quickly.</li>
          <li><strong>Bulk Management:</strong> Allows copying, moving, backing up, or deleting an entire collection of related files at once.</li>
        </ol>
      </div>
    </div>
  </div>

  <hr>

  <!-- Question 2 -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">2. Write the technical terms of the following:</h4>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>A small graphical symbol or picture that appears on the desktop.</span>
        <span class="badge bg-primary rounded-pill">Icon</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>A collection of data, information or programs stored on a secondary storage device.</span>
        <span class="badge bg-primary rounded-pill">File</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>A folder that stores deleted files or folders temporarily.</span>
        <span class="badge bg-primary rounded-pill">Recycle Bin</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>A rectangular shaped area or box which appears on the top of the desktop.</span>
        <span class="badge bg-primary rounded-pill">Window</span>
      </li>
    </ol>
  </div>

  <hr>

  <!-- Question 3 -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">3. Choose the best options:</h4>

    <div class="mcq-item my-3">
      <p><strong>a. &hellip;&hellip;&hellip; is the special type of software that manages, maintains and controls computer resources.</strong></p>
      <ul class="list-unstyled ps-3">
        <li>i. Python &nbsp;&nbsp; <strong>ii. Windows 11 &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iii. MS-Excel &nbsp;&nbsp; iv. Revo Uninstaller</li>
      </ul>
      <p class="text-success small ms-3"><strong>Answer: ii. Windows 11</strong></p>
    </div>

    <div class="mcq-item my-3">
      <p><strong>c. &hellip;&hellip;&hellip; is the space where you see icons, start menu, taskbar, etc.</strong></p>
      <ul class="list-unstyled ps-3">
        <li>i. The Start Button &nbsp;&nbsp; ii. Status Bar &nbsp;&nbsp; iii. Task Bar &nbsp;&nbsp; <strong>iv. The Desktop &nbsp; <i class="fas fa-check-circle text-success"></i></strong></li>
      </ul>
      <p class="text-success small ms-3"><strong>Answer: iv. The Desktop</strong></p>
    </div>

    <div class="mcq-item my-3">
      <p><strong>e. To switch between OPEN programs in Windows 11, you use the:</strong></p>
      <ul class="list-unstyled ps-3">
        <li>i. Start Button &nbsp;&nbsp; ii. Status Bar &nbsp;&nbsp; <strong>iii. Task Bar &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iv. The Desktop</li>
      </ul>
      <p class="text-success small ms-3"><strong>Answer: iii. Task Bar</strong></p>
    </div>

    <div class="mcq-item my-3">
      <p><strong>f. A file deleted from a hard disk is stored temporarily in &hellip;&hellip;&hellip;</strong></p>
      <ul class="list-unstyled ps-3">
        <li>i. Document &nbsp;&nbsp; <strong>ii. Recycle Bin &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iii. My Computer &nbsp;&nbsp; iv. None of above.</li>
      </ul>
      <p class="text-success small ms-3"><strong>Answer: ii. Recycle Bin</strong></p>
    </div>

    <div class="mcq-item my-3">
      <p><strong>g. The collection of data, information and programs stored on a storage device are &hellip;&hellip;&hellip;&hellip;</strong></p>
      <ul class="list-unstyled ps-3">
        <li>i. Extension &nbsp;&nbsp; <strong>ii. File &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iii. Folder &nbsp;&nbsp; iv. Filename</li>
      </ul>
      <p class="text-success small ms-3"><strong>Answer: ii. File</strong></p>
    </div>
  </div>
`;

// Add or update Topic 3 for Chapter 5
if (ch5.topics.length === 2) {
  ch5.topics.push({
    title: "Textbook Exercise Solutions \u2014 Chapter 5 (Working with Windows 11)",
    content: exerciseHtml
  });
} else if (ch5.topics.length >= 3) {
  ch5.topics[2] = {
    title: "Textbook Exercise Solutions \u2014 Chapter 5 (Working with Windows 11)",
    content: exerciseHtml
  };
}

// Write back to js/notes-data.js
const updatedNotesCode = `const notesData = ${JSON.stringify(notesObj, null, 2)};\n`;
fs.writeFileSync(notesDataPath, updatedNotesCode, 'utf8');
console.log("Successfully added solved exercises to Class 7 Chapter 5 in js/notes-data.js!");

// Update scratch/build-data.js
const buildDataPath = path.join(__dirname, 'build-data.js');
const buildScriptContent = `const fs = require('fs');
const path = require('path');

const notesData = ${JSON.stringify(notesObj, null, 2)};

const outputContent = \`/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = \\\${JSON.stringify(notesData, null, 2)};
\\\`;

const outputPath = path.join(__dirname, '..', 'js', 'notes-data.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('Successfully generated full notes-data.js with all class notes intact!');
`;
fs.writeFileSync(buildDataPath, buildScriptContent, 'utf8');
console.log("Successfully updated scratch/build-data.js!");
