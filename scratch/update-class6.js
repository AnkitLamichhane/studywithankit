const fs = require('fs');
const path = require('path');

// 1. Load current notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Define full updated Class 6 chapters matching media_1789606600967.png
const class6ComputerScience = [
  /* ====================================================================
     CHAPTER 1: COMPUTER FUNDAMENTAL (PDF PAGES 1 - 13)
     ==================================================================== */
  {
    id: "class6-cs-ch1",
    chapterNumber: 1,
    title: "Computer Fundamental",
    subject: "Computer Science",
    className: "Class 6",
    updated: "2026-09-17",
    author: "Innovative Computer Science &mdash; Book 6, Chapter 1",
    summary: "Fundamental concepts of computers, definition, IPO cycle, units of speed, characteristics, application areas in education, medicine, finance, offices, entertainment, and complete textbook exercise solutions.",
    topics: [
      {
        title: "1.0 Introduction to Computer & IPO Principle",
        content: `
          <p>A <strong>computer</strong> is an electronic machine. It can be programmed to perform a variety of tasks at very high speed and accurately. It accepts data and instructions from a user, processes the data according to the given instructions, and produces meaningful information as output.</p>
          
          <div class="callout callout-remember">
            <div class="callout-title">📌 DEFINITION OF COMPUTER</div>
            <p>A computer is a programmable electronic machine that takes data and instructions, processes them, produces information, and stores information in its memory.</p>
          </div>

          <h3>Common Applications &amp; Internet Services:</h3>
          <ul>
            <li><strong>Document &amp; Office Work:</strong> Creating documents, spreadsheets, databases, presentations, and graphics.</li>
            <li><strong>Internet Services:</strong> Accessing World Wide Web (WWW), file transferring, emails, online chatting, and video conferencing.</li>
            <li><strong>Special Applications:</strong> Composing music, adding special effects in movies and songs, operating Automated Teller Machines (ATM), monitoring patients in hospitals, and supporting scientific research.</li>
          </ul>

          <h3>The Input-Process-Output (IPO) Principle</h3>
          <p>A computer works on the principle of <strong>Input-Process-Output (IPO)</strong>. It accepts input in the form of data and instructions, processes them in the Central Processing Unit (CPU), and produces output in the form of meaningful information.</p>
          
          <div class="step-card-grid">
            <div class="step-card"><span class="step-badge">1. INPUT</span><span>Keyboard &amp; Mouse feed Data (e.g. 5 and 6) &amp; Instructions (Add these numbers).</span></div>
            <div class="step-card"><span class="step-badge">2. PROCESS</span><span>Central Processing Unit (CPU) performs calculation (5 + 6).</span></div>
            <div class="step-card"><span class="step-badge">3. OUTPUT</span><span>Monitor &amp; Printer display Information result (11).</span></div>
          </div>

          <p><strong>Program Definition:</strong> The set of instructions given to a computer is known as a <strong>program</strong>.</p>
          <p><strong>Permanent Storage:</strong> A computer can store data, information, and programs permanently on storage devices such as hard disks, solid state drives (SSD), optical disks, and pen drives.</p>
        `
      },
      {
        title: "1.1 Stages of the IPO Cycle & Components",
        content: `
          <p>The operation of a computer system is divided into four basic stages:</p>
          
          <h3>1. Input</h3>
          <p>A computer works only when it gets data and instructions. You enter data and instructions into a computer using input devices. Data and instructions fed into a computer are known as inputs. <strong>Keyboard</strong> and <strong>mouse</strong> are commonly used input devices. Other input devices include scanners, microphones, digital cameras, and light pens.</p>

          <h3>2. Process</h3>
          <p>After receiving the input, the computer processes the data with the help of the <strong>Central Processing Unit (CPU)</strong>. Treating data according to instructions is known as process. When data is treated or processed, it is converted into meaningful information.</p>

          <h3>3. Output</h3>
          <p>When data is processed, you get information. The outcome or information produced by the computer is known as output. <strong>Monitors</strong> and <strong>printers</strong> are commonly used output devices.</p>

          <h3>4. Storage</h3>
          <p>Data, information, and programs can be stored on a storage device for future use. Stored data can be retrieved and used whenever required. Commonly used storage devices include <strong>Hard Disk</strong>, <strong>Solid State Disk (SSD)</strong>, <strong>Optical Disk (CD/DVD)</strong>, and <strong>Pen Drive</strong>.</p>
        `
      },
      {
        title: "1.2 Characteristics of Computer",
        content: `
          <p>Computers are used in almost all fields due to their wonderful characteristics:</p>

          <h3>a. Speed</h3>
          <p>Computers work at a very high speed. Tasks that take hours or days to complete manually can be completed by a computer within seconds or minutes. For example, calculating the total marks and grades of 3,000 students takes only a few minutes on a computer.</p>
          
          <div class="table-responsive">
            <table class="notes-table">
              <thead>
                <tr><th>Unit of Time</th><th>Part of Second</th><th>Power of 10</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Millisecond (ms)</strong></td><td>1/1000 (One Thousandth)</td><td>10<sup>-3</sup> s</td></tr>
                <tr><td><strong>Microsecond (&mu;s)</strong></td><td>1/1000000 (One Millionth)</td><td>10<sup>-6</sup> s</td></tr>
                <tr><td><strong>Nanosecond (ns)</strong></td><td>1/1000000000 (One Billionth)</td><td>10<sup>-9</sup> s</td></tr>
                <tr><td><strong>Picosecond (ps)</strong></td><td>1/1000000000000 (One Trillionth)</td><td>10<sup>-12</sup> s</td></tr>
              </tbody>
            </table>
          </div>

          <ul>
            <li>The speed of a computer is determined by its <strong>microprocessor</strong> and measured in Hertz (Hz) / Megahertz (MHz) / Gigahertz (GHz). A 3 GHz processor performs about 3 billion operations per second (each operation takes 0.3 nanoseconds).</li>
            <li>The speed of a <strong>mainframe computer</strong> is measured in <strong>FLOPS (Floating Point Operations Per Second)</strong>.</li>
            <li>The speed of a <strong>supercomputer</strong> is measured in <strong>Teraflops</strong>.</li>
          </ul>

          <h3>b. Accuracy</h3>
          <p>Computers process data according to instructions and produce 100% accurate results as long as correct data is provided. It does not make mistakes by itself.</p>
          <ul>
            <li><strong>GIGO (Garbage In Garbage Out):</strong> When wrong data or instructions are fed into the computer, it produces wrong information. This type of error is known as GIGO.</li>
            <li><strong>Bug:</strong> An error in a program or a fault in a hardware device is known as a <strong>bug</strong>.</li>
          </ul>

          <h3>c. Diligence</h3>
          <p>A computer can work continuously for a long time without losing its accuracy and speed. Unlike humans, it does not suffer from tiredness, lack of concentration, or boredom. Therefore, it is used in quality control and process control tasks.</p>

          <h3>d. Versatility</h3>
          <p>A computer can perform many different types of tasks. It can be used to prepare salary sheets, examination results, presentations, compose songs, design automobiles, or monitor patients in the Intensive Care Unit (ICU).</p>

          <h3>e. Storage Capacity</h3>
          <p>A computer can store huge amounts of data permanently on secondary storage devices. Storage capacity is measured in <strong>Bytes</strong>. Storing one character occupies 1 byte of memory space.</p>

          <h3>f. Automatic</h3>
          <p>Since a computer is a programmable electronic machine, it performs tasks automatically once instructions are fed into it.</p>
        `
      },
      {
        title: "1.3 Application Areas of Computers",
        content: `
          <p>Computers are used in almost every sector of modern society:</p>

          <h3>a. Education Sector</h3>
          <p>Schools and colleges have computer labs where students receive practical training on application software and programming languages. Teachers use multimedia systems to display charts, diagrams, animated clips, and videos. Students use the internet to research topics and study subjects like Mathematics, Science, and Nepali.</p>

          <h3>b. Medical Sector</h3>
          <p>Computers in hospitals store patient records (diagnoses, lab test results, previous treatments). They conduct clinical laboratory tests, monitor critical patients' heart rate, pulse rate, and brain readings continuously, and assist doctors during surgical operations.</p>

          <h3>c. Financial / Banking Sector</h3>
          <p>Banks use computers to manage customer accounts, update balances automatically during cash deposit or withdrawal, calculate interest and payments, and provide 24/7 online banking and ATM services.</p>

          <h3>d. Offices</h3>
          <p>Offices use computers to prepare documents, presentations, and salary sheets. Government organizations like Nepal Doorsanchar Company Limited (NTC), Department of Transport Management, and local government offices provide online services to citizens using computers.</p>

          <h3>e. Entertainment Sector</h3>
          <p>Computers are used for playing computer games, listening to music, watching HD videos, composing songs, adding special effects to movies, and developing animated cartoon movies (e.g. <em>Tom and Jerry</em>, <em>Ninja Natori</em>).</p>
        `
      },
      {
        title: "Textbook Exercise Solutions &mdash; Chapter 1 (Computer Fundamental)",
        content: `
          <h2>Innovative Computer Science &mdash; Book 6, Chapter 1 Complete Exercise Solutions</h2>

          <h3>1. Answer the Following Questions (a to k)</h3>

          <div class="qa-card">
            <div class="qa-card-q">a. Define a computer? What are the uses of computers?</div>
            <div class="qa-card-a"><strong>Answer:</strong> A computer is a programmable electronic machine that accepts raw data and instructions, processes them into meaningful information, and stores them in memory.<br><em>Uses:</em> Creating documents, spreadsheets, presentations, browsing the internet (WWW, email, video chat), online banking, patient monitoring in hospitals, and entertainment.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">b. What is IPO? Explain it with a diagram.</div>
            <div class="qa-card-a"><strong>Answer:</strong> IPO stands for Input-Process-Output. It is the fundamental principle on which a computer operates by accepting data/instructions (Input), processing them in the CPU (Process), and producing useful information (Output).<br><em>Diagram:</em><br><code>[INPUT (Data/Instructions)] &rarr; [PROCESS (CPU)] &rarr; [OUTPUT (Information)]</code><br><em>Example: Input (5 and 6) &rarr; Process (5 + 6) &rarr; Output (11).</em></div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">c. List the different characteristics of a computer.</div>
            <div class="qa-card-a"><strong>Answer:</strong> The main characteristics of a computer are:
            <ol>
              <li>Speed</li>
              <li>Accuracy</li>
              <li>Diligence</li>
              <li>Versatility</li>
              <li>Storage capacity</li>
              <li>Automatic operation</li>
            </ol></div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">d. What are GIGO and Bug?</div>
            <div class="qa-card-a"><strong>Answer:</strong>
            <ul>
              <li><strong>GIGO (Garbage In Garbage Out):</strong> Refers to the wrong output/information produced by a computer when incorrect data or instructions are fed into it.</li>
              <li><strong>Bug:</strong> An error in a computer program or a fault in a hardware device.</li>
            </ul></div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">e. Why is a computer called a diligent machine?</div>
            <div class="qa-card-a"><strong>Answer:</strong> A computer is called a diligent machine because it can work continuously for long hours performing millions of calculations without getting tired, losing speed, or making mistakes.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">f. Why is a computer called a versatile machine?</div>
            <div class="qa-card-a"><strong>Answer:</strong> A computer is called a versatile machine because it can perform many different types of tasks, such as typing documents, preparing salary sheets, playing music, designing automobiles, and monitoring hospital patients.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">g. Why do people use computers?</div>
            <div class="qa-card-a"><strong>Answer:</strong> People use computers because they work at extremely high speed, produce 100% accurate results, operate automatically, store huge amounts of data, and make daily work fast and convenient.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">h. How are computers used in the education sector?</div>
            <div class="qa-card-a"><strong>Answer:</strong> Computers are used in education for practical training in computer labs, presenting lessons using multimedia projectors, searching educational topics on the internet, and learning subjects through interactive software.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">i. Why is a computer used in the medical sector?</div>
            <div class="qa-card-a"><strong>Answer:</strong> Computers are used in the medical sector to store patient diagnosis records, conduct laboratory tests, monitor critical patients' heart rate and pulse rate continuously, and assist doctors during surgical operations.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">j. What is the use of computers in the financial sector?</div>
            <div class="qa-card-a"><strong>Answer:</strong> Computers are used in banks to maintain customer accounts, automatically update account balances during deposits/withdrawals, calculate interest payments, and provide online banking and ATM services.</div>
          </div>

          <div class="qa-card">
            <div class="qa-card-q">k. How are computers used in offices?</div>
            <div class="qa-card-a"><strong>Answer:</strong> Computers are used in offices to prepare documents, presentations, and salary sheets, manage routine administrative tasks, and provide online services to the public.</div>
          </div>

          <h3>2. Write the Full Form of the Following</h3>
          <div class="table-responsive">
            <table class="notes-table">
              <thead>
                <tr><th>Abbreviation</th><th>Full Form</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>a. IPO</strong></td><td>Input-Process-Output</td></tr>
                <tr><td><strong>b. CPU</strong></td><td>Central Processing Unit</td></tr>
                <tr><td><strong>c. FLOP</strong></td><td>Floating Point Operation</td></tr>
                <tr><td><strong>d. GIGO</strong></td><td>Garbage In Garbage Out</td></tr>
                <tr><td><strong>e. ATM</strong></td><td>Automated Teller Machine</td></tr>
                <tr><td><strong>f. ICU</strong></td><td>Intensive Care Unit</td></tr>
              </tbody>
            </table>
          </div>

          <h3>3. State Whether the Following Statements are True or False</h3>
          <div class="qa-card"><div class="qa-card-q">a. A computer processes data and produces output as information.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
          <div class="qa-card"><div class="qa-card-q">b. A computer can be used to perform any task.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
          <div class="qa-card"><div class="qa-card-q">c. A mainframe computer is faster than a supercomputer.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Supercomputers are faster than mainframe computers)</em></div></div>
          <div class="qa-card"><div class="qa-card-q">d. Even you feed correct data and instructions, the computer will occasionally produce incorrect information.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Computers produce accurate results if input is correct)</em></div></div>
          <div class="qa-card"><div class="qa-card-q">e. A computer loses its accuracy and speed when it has to perform the same calculation repeatedly.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(A computer never loses speed or accuracy due to diligence)</em></div></div>
          <div class="qa-card"><div class="qa-card-q">f. You can use a computer to prepare only spreadsheets, documents and presentations.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Computers can perform many other versatile tasks)</em></div></div>
          <div class="qa-card"><div class="qa-card-q">g. The storage capacity of a storage device is measured in BIT.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Storage capacity is measured in Bytes)</em></div></div>
          <div class="qa-card"><div class="qa-card-q">h. Computers can be used to provide online services like buying and selling goods, booking tickets and rooms in hotels, etc.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
          <div class="qa-card"><div class="qa-card-q">i. Cartoon movies like Tom and Jerry, Ninja Natori, etc. can be developed with the help of computers.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>

          <h3>4. Fill in the Blanks</h3>
          <p><strong>a.</strong> A computer performs task on the principle of Input, <u>Process</u> and <u>Output</u>.</p>
          <p><strong>b.</strong> A set of instructions given to computer to perform tasks is known as <u>program</u>.</p>
          <p><strong>c.</strong> The speed of mainframe computer is measured in <u>flops (FLOPS)</u>.</p>
          <p><strong>d.</strong> <u>Bug</u> is fault in a device or error in a program.</p>
          <p><strong>e.</strong> To store three characters a computer occupies <u>3</u> bytes memory space.</p>
          <p><strong>f.</strong> A computer perform tasks automatically once the <u>instruction (or program)</u> is given.</p>

          <h3>5. Match the Following</h3>
          <p><strong>i. Group 'A' &rarr; Group 'B'</strong></p>
          <ul>
            <li>a. Data &rarr; ii. Raw facts or figures</li>
            <li>b. Information &rarr; iii. Processed data</li>
            <li>c. Program &rarr; i. A set of instructions</li>
            <li>d. GIGO &rarr; v. Wrong instructions or data</li>
          </ul>

          <p><strong>ii. Group 'A' &rarr; Group 'B'</strong></p>
          <ul>
            <li>a. Diligence &rarr; iii. Capability of performing tasks for long time</li>
            <li>b. Versatile &rarr; ii. Capability of performing a variety of tasks</li>
            <li>c. Automatic &rarr; iv. Capability of performing tasks once the instructions are given</li>
            <li>d. Accuracy &rarr; i. Capability of producing correct information</li>
          </ul>
        `
      }
    ]
  },

  /* Remaining Class 6 Chapters matching Table of Contents Image (media_1789606600967.png) */
  { id: "class6-cs-ch2", chapterNumber: 2, title: "Computer Hardware", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Tangible physical parts of a computer system.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch3", chapterNumber: 3, title: "Input and output devices", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Keyboards, mice, monitors, printers.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch4", chapterNumber: 4, title: "Storage devices", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "RAM, ROM, Hard Disk, SSD, Pen Drive.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch5", chapterNumber: 5, title: "Computer Software", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "System software vs application software.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch6", chapterNumber: 6, title: "Working with Windows 11", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Windows 11 operating system basics.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch7", chapterNumber: 7, title: "Programming Language and Programming Tools", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Concept of computer programming languages.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch8", chapterNumber: 8, title: "Block Programming - Scratch", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Visual block coding in Scratch.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch9", chapterNumber: 9, title: "Programming Language – Python", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Basic syntax in Python.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch10", chapterNumber: 10, title: "Word Processing", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Formatting and saving documents.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch11", chapterNumber: 11, title: "Spread sheet", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Worksheet basics and calculations.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch12", chapterNumber: 12, title: "Presentation package", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Creating slides and slide shows.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch13", chapterNumber: 13, title: "ICT, Cyber Ethics, And Cyber Law", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Information communication technology.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch14", chapterNumber: 14, title: "Computer Graphics", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Digital drawing and design tools.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch15", chapterNumber: 15, title: "Multimedia", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Audio, video, animation concepts.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch16", chapterNumber: 16, title: "Termwise Syllabus", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Term-wise curriculum breakdown.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch17", chapterNumber: 17, title: "Model Question", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Sample examination paper.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
  { id: "class6-cs-ch18", chapterNumber: 18, title: "Terminology", subject: "Computer Science", className: "Class 6", updated: "2026-09-17", summary: "Glossary of computer terms.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] }
];

// 3. Construct updated full notesData structure
const updatedNotesData = {
  class6: { computerScience: class6ComputerScience },
  class7: currentNotes.class7, // STRICTLY UNTOUCHED
  class8: currentNotes.class8, // STRICTLY UNTOUCHED (Excel & HTML intact)
  class9: currentNotes.class9, // STRICTLY UNTOUCHED
  class10: currentNotes.class10 // STRICTLY UNTOUCHED
};

// 4. Output to js/notes-data.js
const notesDataJS = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(updatedNotesData, null, 2)};
`;

fs.writeFileSync(notesDataPath, notesDataJS, 'utf8');
console.log('Successfully updated Class 6 Chapter 1 notes and TOC while preserving Class 7, 8, 9, 10!');

// 5. Update build-data.js script
const buildScriptContent = `const fs = require('fs');
const path = require('path');

const notesData = ${JSON.stringify(updatedNotesData, null, 2)};

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
