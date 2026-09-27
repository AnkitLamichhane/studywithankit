const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Build complete detailed Chapter 2 data structure for Class 6
const ch2Data = {
  id: "class6-cs-ch2",
  chapterNumber: 2,
  title: "Computer Hardware",
  subject: "Computer Science",
  className: "Class 6",
  updated: "2026-09-20",
  author: "Innovative Computer Science &mdash; Book 6, Chapter 2",
  summary: "Comprehensive guide to computer hardware, internal and external components, functional block diagram of computer system, CPU architecture (ALU, CU, MU), input/output units, secondary storage, loading a program, and complete textbook exercise solutions.",
  topics: [
    {
      title: "2.0 Introduction to Computer Hardware",
      content: `
        <p>A computer is considered a <strong>system</strong>. It is made up of two essential components: <strong>hardware</strong> and <strong>software</strong>. Both must work together for the computer to perform any task.</p>

        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF COMPUTER HARDWARE</div>
          <p><strong>Computer hardware</strong> refers to the physical parts of a computer system that can be touched, seen, and felt.</p>
        </div>

        <h3>External vs. Internal Hardware Components</h3>
        <p>A computer system contains many hardware parts. Some are connected externally, while others are located securely inside the CPU casing:</p>

        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">EXTERNAL</span>
            <span><strong>External Hardware (Peripherals):</strong> Parts located outside the system unit that you can easily see and connect &mdash; such as the <em>Keyboard, Mouse, Monitor, Printer, and External Hard Disk</em>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">INTERNAL</span>
            <span><strong>Internal Hardware (Inside CPU Casing):</strong> Crucial electronic components housed inside the system unit casing &mdash; such as the <em>Motherboard, Microprocessor (CPU), RAM, ROM, Display Card (GPU), Sound Card, and Power Supply Unit (PSU)</em>.</span>
          </div>
        </div>

        <h3>Why Does a Computer Need Hardware?</h3>
        <p>A computer requires hardware components to perform its four fundamental functions:</p>
        <ul>
          <li><strong>Accepting Data &amp; Instructions:</strong> Input hardware (Keyboard, Mouse, Scanner) takes raw data from the user.</li>
          <li><strong>Processing Data:</strong> The processor (CPU) manipulates and computes data according to program instructions.</li>
          <li><strong>Displaying Output:</strong> Output hardware (Monitor, Printer, Speaker) presents processed information to users in human-understandable language.</li>
          <li><strong>Storing Data &amp; Programs:</strong> Storage hardware (RAM, Hard Disk, SSD, Pen Drive) holds data temporarily or permanently.</li>
        </ul>
      `
    },
    {
      title: "2.1 Types of Computer Hardware (Units of Computer System)",
      content: `
        <p>A computer system consists of four primary hardware units:</p>
        
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">a</span><span><strong>Input Unit:</strong> Devices used to enter data and instructions into the computer system.</span></div>
          <div class="step-card"><span class="step-badge">b</span><span><strong>Central Processing Unit (CPU):</strong> The central processor that controls, manages, and executes instructions.</span></div>
          <div class="step-card"><span class="step-badge">c</span><span><strong>Output Unit:</strong> Devices that present the results of processing to the user.</span></div>
          <div class="step-card"><span class="step-badge">d</span><span><strong>Secondary Storage Unit:</strong> Devices that store data, information, and programs permanently.</span></div>
        </div>

        <h3>The Input Unit</h3>
        <p>The computer system needs data and instructions to perform tasks. The data and instructions are entered through the <strong>input unit</strong>. The input devices are the hardware media through which raw facts, numbers, words, sound, and commands are fed into the computer system.</p>
        
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr><th>Common Input Devices</th><th>Main Purpose / Function</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Keyboard</strong></td><td>Entering text, numbers, symbols, and shortcut commands.</td></tr>
              <tr><td><strong>Mouse</strong></td><td>Pointing, clicking, dragging, and selecting graphical objects on screen.</td></tr>
              <tr><td><strong>Microphone</strong></td><td>Entering audio, voice commands, and speech recordings.</td></tr>
              <tr><td><strong>Digital Camera</strong></td><td>Capturing still photographs and live video clips directly into digital form.</td></tr>
              <tr><td><strong>Scanner</strong></td><td>Converting printed text, photographs, and drawings into digital images.</td></tr>
              <tr><td><strong>Light Pen</strong></td><td>Directly drawing or selecting items on the display screen.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "2.2 The Central Processing Unit (CPU) & Functional Block Diagram",
      content: `
        <p>The <strong>Central Processing Unit (CPU)</strong> is the main part of the computer. It is commonly known as the <strong>brain of the computer</strong>. It interprets and executes program instructions and processes data. It controls and manages all the operations of the computer system. The CPU is built onto a single integrated silicon chip called the <strong>microprocessor</strong>.</p>

        <h3>Three Main Components of the CPU:</h3>
        <ol>
          <li><strong>Control Unit (CU):</strong> The supervisor of the computer. It controls and coordinates the entire computer system, decodes program instructions, and directs the flow of signals between all units.</li>
          <li><strong>Memory Unit (MU / Primary Memory):</strong> The part of the CPU where currently needed data and instructions are temporarily stored during processing.</li>
          <li><strong>Arithmetic and Logic Unit (ALU):</strong> The calculation engine of the CPU. It performs all mathematical calculations and decision-making comparisons.</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">📐 FUNCTIONAL BLOCK DIAGRAM OF A COMPUTER SYSTEM</div>
          <p>The diagram below illustrates how data and control signals flow between the units of a computer system:</p>
          
          <div style="background: var(--surface); border: 2px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin: 1rem 0; font-family: var(--font-main);">
            <!-- Control Unit Box -->
            <div style="text-align: center; margin-bottom: 1.25rem;">
              <div style="display: inline-block; background: #1e3a8a; color: #ffffff; font-weight: 800; padding: 0.75rem 2rem; border-radius: 8px; border: 2px solid #3b82f6; box-shadow: 0 4px 10px rgba(30,58,138,0.25);">
                CONTROL UNIT (CU)<br><span style="font-size: 0.75rem; font-weight: 600; opacity: 0.9;">Controls &amp; Coordinates All Units</span>
              </div>
              <div style="font-size: 0.8rem; color: #d97706; font-weight: 700; margin-top: 0.4rem;">
                - - - - - - - - - - [ Control Signals: Directed to All Units ] - - - - - - - - - -
              </div>
            </div>

            <!-- Central Data Flow Row -->
            <div style="display: grid; grid-template-columns: 1fr auto 1.4fr auto 1fr; gap: 0.75rem; align-items: center; text-align: center;">
              <!-- Input Unit -->
              <div style="background: var(--primary-light); border: 2px solid var(--primary-border); padding: 1rem 0.5rem; border-radius: 8px;">
                <strong style="color: var(--primary); display: block;">INPUT UNIT</strong>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Keyboard, Mouse</span>
              </div>

              <!-- Solid Arrow -->
              <div style="font-size: 1.5rem; font-weight: 900; color: #dc2626;">&rarr;</div>

              <!-- Central CPU Memory Unit -->
              <div style="background: #eff6ff; border: 2px solid #2563eb; padding: 1.25rem 0.5rem; border-radius: 8px; box-shadow: var(--card-shadow);">
                <strong style="color: #1e3a8a; font-size: 1.05rem; display: block;">MEMORY UNIT (MU)</strong>
                <span style="font-size: 0.78rem; color: var(--text-muted);">(Primary Memory - Stores Active Data)</span>
              </div>

              <!-- Solid Arrow -->
              <div style="font-size: 1.5rem; font-weight: 900; color: #dc2626;">&rarr;</div>

              <!-- Output Unit -->
              <div style="background: #ecfdf5; border: 2px solid #a7f3d0; padding: 1rem 0.5rem; border-radius: 8px;">
                <strong style="color: #047857; display: block;">OUTPUT UNIT</strong>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Monitor, Printer</span>
              </div>
            </div>

            <!-- Bottom Row: ALU and Secondary Storage -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; text-align: center;">
              <!-- Secondary Storage -->
              <div style="background: #fffbeb; border: 2px dashed #f59e0b; padding: 1rem; border-radius: 8px;">
                <div style="font-size: 1.1rem; color: #dc2626; font-weight: 900;">&uarr;&darr; (Data Flow)</div>
                <strong style="color: #b45309; display: block;">SECONDARY STORAGE</strong>
                <span style="font-size: 0.78rem; color: var(--text-muted);">Hard Disk, SSD, Optical Disk (Permanent)</span>
              </div>

              <!-- ALU -->
              <div style="background: #fdf2f8; border: 2px solid #f472b6; padding: 1rem; border-radius: 8px;">
                <div style="font-size: 1.1rem; color: #dc2626; font-weight: 900;">&uarr;&darr; (Data Flow)</div>
                <strong style="color: #be185d; display: block;">ARITHMETIC &amp; LOGIC UNIT (ALU)</strong>
                <span style="font-size: 0.78rem; color: var(--text-muted);">Arithmetic (+, -, &times;, &divide;) &amp; Logic (&lt;, &gt;, =)</span>
              </div>
            </div>

            <!-- Legend -->
            <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border); display: flex; justify-content: center; gap: 2rem; font-size: 0.82rem; font-weight: 700;">
              <span><strong style="color: #dc2626;">&mdash;&rarr;</strong> Solid Line: Data Flow</span>
              <span><strong style="color: #d97706;">- - &rarr;</strong> Dashed Line: Control Signal</span>
            </div>
          </div>
        </div>

        <h3>How Data Flows Through the CPU</h3>
        <ol>
          <li>All raw data and instructions entered through input devices are first stored in the <strong>Memory Unit (Primary Memory)</strong>.</li>
          <li>Programs stored permanently in secondary storage (hard disk) are also transferred into primary memory before execution.</li>
          <li>The data to be calculated is sent from the Memory Unit to the <strong>Arithmetic and Logic Unit (ALU)</strong>.</li>
          <li>The ALU processes the data and sends the resulting answers back to the <strong>Memory Unit</strong>.</li>
          <li>From the Memory Unit, these finished results are passed to the <strong>Output Unit</strong> (to be displayed) or to the <strong>Secondary Storage Unit</strong> (to be saved permanently).</li>
        </ol>
      `
    },
    {
      title: "2.3 Output Unit & Secondary Storage Devices",
      content: `
        <h3>The Output Unit</h3>
        <p>The <strong>output unit</strong> displays the results of processing and other information from the computer to the users in human-understandable language. Output devices translate the computer's internal binary signals into readable text, visuals, sound, or hard-copy printouts.</p>

        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr><th>Output Device</th><th>Type of Output</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Monitor</strong></td><td>Soft Copy (Visual)</td><td>Displays text, graphics, and video on a screen in real time.</td></tr>
              <tr><td><strong>Printer</strong></td><td>Hard Copy (Printed Paper)</td><td>Prints text, tables, and documents onto physical paper sheets.</td></tr>
              <tr><td><strong>Speaker</strong></td><td>Audio (Sound)</td><td>Produces music, voice narration, and sound alert effects.</td></tr>
              <tr><td><strong>Plotter</strong></td><td>Hard Copy (Vector Graphics)</td><td>Draws large architectural blueprints, engineering designs, and banners.</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Secondary Storage Devices (Permanent Storage)</h3>
        <p>The primary memory (RAM) is temporary and volatile &mdash; its contents disappear when the computer is turned off. Therefore, computers use <strong>secondary storage devices</strong> to store data, information, and software programs permanently.</p>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 WHAT IS "LOADING A PROGRAM"?</div>
          <p>Before any software or game can run, the computer must transfer its files from the secondary storage device (hard disk/SSD) into the computer's primary memory (RAM). This process of transferring program instructions from secondary storage to primary memory is known as <strong>loading a program</strong>.</p>
        </div>

        <h3>Common Secondary Storage Devices:</h3>
        <ul>
          <li><strong>Hard Disk Drive (HDD):</strong> Magnetic storage device inside the CPU case used to store operating systems, user files, and software programs permanently.</li>
          <li><strong>Solid State Drive (SSD):</strong> Modern electronic storage with no moving parts &mdash; much faster and more durable than traditional hard disks.</li>
          <li><strong>Optical Disks (CD / DVD):</strong> Circular discs read and written using laser beams. A CD typically stores 700 MB, while a DVD stores 4.7 GB.</li>
          <li><strong>Pen Drive (USB Flash Drive):</strong> Small, portable flash memory drive plugged into USB ports for easy data transfer between computers.</li>
        </ul>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 2 (Computer Hardware)",
      content: `
        <h2>Innovative Computer Science &mdash; Book 6, Chapter 2 Complete Exercise Solutions</h2>

        <h3>1. Answer the Following Questions (a to j)</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is computer hardware? List any four computer hardware.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> Computer hardware refers to the tangible physical parts of a computer system that can be seen and touched.<br>
            <em>Four Examples:</em> Keyboard, Mouse, Monitor, and Hard Disk (or CPU, RAM, Printer).
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. Why does a computer need hardware?</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> A computer needs hardware components to perform basic functions such as accepting data and instructions (Input), processing data, displaying results (Output), and storing data and programs permanently.
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. List the different units of computer system.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> The four main units of a computer system are:
            <ol>
              <li>Input Unit</li>
              <li>Central Processing Unit (CPU)</li>
              <li>Output Unit</li>
              <li>Secondary Storage Unit</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. What is an input unit? List any two input devices.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> An input unit is the collection of devices used to enter raw data and instructions into the computer system.<br>
            <em>Two Input Devices:</em> Keyboard and Mouse (or Scanner, Microphone).
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. What is an output unit? List any two output devices.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> An output unit displays the results of processing and other information from the computer to users in human-understandable language.<br>
            <em>Two Output Devices:</em> Monitor and Printer (or Speaker, Plotter).
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. What is the CPU? List its components.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> The Central Processing Unit (CPU) is the main part and the brain of the computer that interprets and executes program instructions and processes data.<br>
            <em>Three Components of CPU:</em>
            <ol>
              <li>Control Unit (CU)</li>
              <li>Memory Unit (MU / Primary Memory)</li>
              <li>Arithmetic and Logic Unit (ALU)</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">g. Mention the importance of the memory unit.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> The memory unit (primary memory) is crucial because it temporarily holds active data and instructions entered through input devices or loaded from secondary storage so the CPU can access them instantly for processing.
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. What does ALU do?</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> The Arithmetic and Logic Unit (ALU) is the component of the CPU that performs all arithmetic calculations (addition, subtraction, multiplication, division) and logical operations (comparisons like greater than, less than, equal to).
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">i. What is the function of the control unit?</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> The Control Unit (CU) acts as the supervisor of the computer. It controls and coordinates the entire computer system by decoding instructions and managing the flow of data between all other units.
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">j. What is a secondary storage device? List any two secondary storage devices.</div>
          <div class="qa-card-a">
            <strong>Answer:</strong> A secondary storage device is a permanent, non-volatile storage hardware device that stores data, information, and programs safely even when the computer is turned off.<br>
            <em>Two Secondary Storage Devices:</em> Hard Disk and Pen Drive (or Solid State Drive, DVD).
          </div>
        </div>

        <h3>2. Write the Technical Terms for the Following Statements</h3>
        <div class="qa-card"><div class="qa-card-q">a. A physical part of a computer system.</div><div class="qa-card-a"><strong>Computer Hardware</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">b. A device that is used to enter data and instructions.</div><div class="qa-card-a"><strong>Input Device (or Input Unit)</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">c. The brain of the computer.</div><div class="qa-card-a"><strong>Central Processing Unit (CPU) / Microprocessor</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">d. A part of CPU that performs calculation.</div><div class="qa-card-a"><strong>Arithmetic and Logic Unit (ALU)</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">e. A part of CPU that decodes the instructions.</div><div class="qa-card-a"><strong>Control Unit (CU)</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">f. A device that presents output in the human understandable language.</div><div class="qa-card-a"><strong>Output Device (or Output Unit)</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">g. A device that stored data permanently.</div><div class="qa-card-a"><strong>Secondary Storage Device</strong></div></div>

        <h3>3. Write the Full Form of the Following</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr><th>Abbreviation</th><th>Full Form</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>a. ROM</strong></td><td>Read Only Memory</td></tr>
              <tr><td><strong>b. RAM</strong></td><td>Random Access Memory</td></tr>
              <tr><td><strong>c. CPU</strong></td><td>Central Processing Unit</td></tr>
              <tr><td><strong>d. ALU</strong></td><td>Arithmetic and Logic Unit</td></tr>
              <tr><td><strong>e. CU</strong></td><td>Control Unit</td></tr>
            </tbody>
          </table>
        </div>

        <h3>4. State Whether the Following Statements are True or False</h3>
        <div class="qa-card"><div class="qa-card-q">a. A computer is made up of hardware and software.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">b. You can see hardware but cannot touch hardware.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Hardware can be both seen and touched)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">c. Motherboard and microprocessor are computer hardware.</div><div class="qa-card-a"><strong>TRUE</strong> <em>(They are internal hardware components)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">d. Digital camera and speaker are output devices.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Digital camera is an input device; speaker is an output device)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">e. The memory unit stores data and instructions permanently.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Memory unit / RAM stores data temporarily)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">f. Hard disk can store data only for few days.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Hard disk stores data permanently for years)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">g. ALU can perform only arithmetic operations.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(ALU performs both arithmetic and logical operations)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">h. The transferring of a program from the secondary storage device to the computer memory is known as loading a program.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">i. The control unit controls and coordinates the entire computer system.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">j. The output device displays information in the human understandable language.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>

        <h3>5. Fill in the Blanks</h3>
        <p><strong>a.</strong> Computer is a system that is made up of hardware and <u>software</u>.</p>
        <p><strong>b.</strong> The <u>input</u> devices are the media through data and instructions are fed in a computer.</p>
        <p><strong>c.</strong> <u>CPU (or Central Processing Unit)</u> is the brain of the computer.</p>
        <p><strong>d.</strong> The CPU is composed of <u>three</u> parts (Memory Unit, ALU, and Control Unit).</p>
        <p><strong>e.</strong> <u>ALU (or Arithmetic and Logic Unit)</u> part of the CPU that processes data according to instructions.</p>

        <h3>6. Match the Following</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr><th>Group 'A'</th><th>Matched Group 'B'</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>a. Memory Unit</strong></td><td>ii. Stores data temporarily.</td></tr>
              <tr><td><strong>b. Arithmetic and Logic unit</strong></td><td>i. Processes arithmetic and logical operations.</td></tr>
              <tr><td><strong>c. Control Unit</strong></td><td>iv. Decodes and executes the instructions.</td></tr>
              <tr><td><strong>d. Hard disk</strong></td><td>iii. Stores data permanently.</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};

// 3. Update ONLY Class 6 Chapter 2 in currentNotes
const class6Chapters = currentNotes.class6.computerScience;
const ch2Index = class6Chapters.findIndex(ch => ch.chapterNumber === 2);

if (ch2Index !== -1) {
  class6Chapters[ch2Index] = ch2Data;
} else {
  class6Chapters.push(ch2Data);
}

// Sort Class 6 chapters by chapter number to maintain order
class6Chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);

// 4. Construct full updated data object
const updatedNotesData = {
  class6: currentNotes.class6, // ONLY Chapter 2 updated, other 17 chapters intact
  class7: currentNotes.class7, // STRICTLY UNTOUCHED (22 chapters intact including Ch 9 & Ch 12)
  class8: currentNotes.class8, // STRICTLY UNTOUCHED (17 chapters intact including Ch 6 Excel & Ch 7 PowerPoint & Ch 13 HTML)
  class9: currentNotes.class9, // STRICTLY UNTOUCHED (5 chapters intact)
  class10: currentNotes.class10 // STRICTLY UNTOUCHED (6 chapters intact)
};

// 5. Output to js/notes-data.js
const notesDataJS = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(updatedNotesData, null, 2)};
`;

fs.writeFileSync(notesDataPath, notesDataJS, 'utf8');
console.log('Successfully updated Class 6 Chapter 2 (Computer Hardware) notes and exercises while preserving all other chapters!');

// 6. Update build-data.js script
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
