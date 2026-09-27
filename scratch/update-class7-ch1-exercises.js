const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Identify Class 7 Chapter 1
const class7Chapters = currentNotes.class7.computerScience;
const ch1 = class7Chapters.find(ch => ch.chapterNumber === 1);

if (!ch1) {
  console.error("Error: Class 7 Chapter 1 not found!");
  process.exit(1);
}

// 3. Prepare the Comprehensive Exercise Solutions Topic
const exerciseTopic = {
  title: "Textbook Exercise Solutions &mdash; Chapter 1 (Fundamental &amp; History of Computer)",
  content: `
    <div class="callout callout-remember">
      <div class="callout-title">📚 TEXTBOOK EXERCISE SOLUTIONS &mdash; PAGES 19, 20 &amp; 21</div>
      <p>Complete, accurate, and student-friendly solutions for all exercise questions from <em>Innovative Computer Science &mdash; Book 7</em>, Chapter 1 (Fundamental &amp; History of Computer).</p>
    </div>

    <!-- 1. Answer the following questions -->
    <h3>1. Answer the Following Questions:</h3>

    <div class="qa-card">
      <div class="qa-card-q">a. What is a computer? List the areas where it is used.</div>
      <div class="qa-card-a">
        <p><strong>Definition:</strong> A <strong>computer</strong> is a programmable electronic device that accepts raw data and instructions as input, processes them according to instructions, produces meaningful information as output, and stores the results for future use.</p>
        <p><strong>Major Application Areas:</strong></p>
        <ol>
          <li><strong>Education Sector:</strong> Teaching with interactive multimedia, digital whiteboards, online research, and computer lab classes.</li>
          <li><strong>Health and Medical Sector:</strong> Maintaining patient medical records, running laboratory tests, monitoring vital signs, and assisting in surgeries.</li>
          <li><strong>Bank and Financial Sector:</strong> Managing customer accounts, transaction processing, automated interest calculations, ATMs, and fund transfers.</li>
          <li><strong>Offices &amp; E-Governance:</strong> Document drafting, payroll sheets, emails, and citizen services (e.g., Nepal Telecom, Department of Transport Management, National ID).</li>
          <li><strong>Entertainment Sector:</strong> Playing video and audio tracks, composing music, video editing, cinema VFX, and 2D/3D animated movies.</li>
          <li><strong>Home:</strong> Communication, online shopping, streaming entertainment, managing domestic budgets, and homework assignments.</li>
          <li><strong>Transportation:</strong> Vehicle GPS turn-by-turn navigation, fuel efficiency control, Anti-lock Braking Systems (ABS), traffic signal timing, and airline flight reservations/autopilot.</li>
        </ol>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">b. How does a computer work? (Explain with Diagram)</div>
      <div class="qa-card-a">
        <p>A computer operates on the principle of the <strong>Input &rarr; Process &rarr; Output (IPO) Cycle</strong>, accompanied by permanent data storage:</p>
        
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">1. INPUT</span>
            <span>Raw data and instructions are entered into the computer system by users through <strong>input devices</strong> like the keyboard, mouse, or scanner.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2. PROCESS</span>
            <span>The <strong>Central Processing Unit (CPU / Microprocessor)</strong> interprets instructions, performs calculations, and converts raw data into meaningful information.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">3. OUTPUT</span>
            <span>The processed result (information) is presented to the user through <strong>output devices</strong> like the monitor (softcopy), printer (hardcopy), or speakers (audio).</span>
          </div>
          <div class="step-card">
            <span class="step-badge">4. STORAGE</span>
            <span>Data, software programs, and final outputs are permanently preserved in <strong>secondary storage devices</strong> (Hard Disk, SSD, Pen Drive) for future access.</span>
          </div>
        </div>

        <!-- Student-Friendly Diagram of IPO Cycle -->
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--background); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center;">
          <div style="font-weight: 800; color: var(--primary); font-size: 0.95rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">
            🔄 Working Flowchart of a Computer (The IPO Cycle with Storage)
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <div style="background: var(--surface); border: 2px solid #2563eb; border-radius: var(--radius-sm); padding: 0.85rem 1.1rem; min-width: 140px; box-shadow: var(--card-shadow);">
              <div style="font-size: 1.1rem; font-weight: 800; color: #2563eb;">1. INPUT</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Keyboard, Mouse</div>
            </div>
            <div style="font-size: 1.5rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--surface); border: 2px solid #d97706; border-radius: var(--radius-sm); padding: 0.85rem 1.1rem; min-width: 150px; box-shadow: var(--card-shadow);">
              <div style="font-size: 1.1rem; font-weight: 800; color: #d97706;">2. PROCESS</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">CPU / Microprocessor</div>
            </div>
            <div style="font-size: 1.5rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--surface); border: 2px solid #16a34a; border-radius: var(--radius-sm); padding: 0.85rem 1.1rem; min-width: 140px; box-shadow: var(--card-shadow);">
              <div style="font-size: 1.1rem; font-weight: 800; color: #16a34a;">3. OUTPUT</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Monitor, Printer</div>
            </div>
          </div>
          <div style="display: flex; justify-content: center; align-items: center; margin-top: 0.75rem;">
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--text-muted);">&uarr;&darr;</div>
          </div>
          <div style="display: inline-block; background: var(--surface); border: 2px dashed #9333ea; border-radius: var(--radius-sm); padding: 0.75rem 1.75rem; margin-top: 0.25rem; box-shadow: var(--card-shadow);">
            <div style="font-size: 1rem; font-weight: 800; color: #9333ea;">4. SECONDARY STORAGE</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Hard Disk, SSD, Pen Drive</div>
          </div>
        </div>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">c. How are computers used in hospitals?</div>
      <div class="qa-card-a">
        <p>Computers are essential in modern hospitals and clinics for the following key tasks:</p>
        <ul>
          <li><strong>Patient Record Management:</strong> Safely recording and retrieving patient diagnostic histories, prescriptions, and billing.</li>
          <li><strong>Diagnostic Testing:</strong> Controlling modern biological laboratory equipment, automated blood analyzers, digital X-rays, Ultrasound, CT scans, and MRI machines.</li>
          <li><strong>Continuous Vital Monitoring:</strong> Monitoring critical Intensive Care Unit (ICU) patients by continuously tracking blood pressure, pulse rate, oxygen levels, heart rhythms (ECG), and brain signals (EEG).</li>
          <li><strong>Surgical Assistance:</strong> Guiding surgeons with computerized robotic precision instruments during delicate operations.</li>
        </ul>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">d. How are computers used in transportation?</div>
      <div class="qa-card-a">
        <p>Computers play a vital role across all forms of modern transport:</p>
        <ul>
          <li><strong>In Automobiles:</strong> Operating Engine Control Units (ECUs) to manage optimal fuel consumption and automated safety systems such as <strong>Anti-lock Braking Systems (ABS)</strong> and rapid airbag deployment.</li>
          <li><strong>Navigation:</strong> Built-in computerized <strong>GPS (Global Positioning System)</strong> devices identify real-time coordinates and display turn-by-turn route maps to destinations.</li>
          <li><strong>Traffic Management:</strong> Synchronizing municipal traffic light signals to relieve road congestion.</li>
          <li><strong>Railways:</strong> Controlling track switching, automated signaling, and safe speed limits for metro lines and high-speed bullet trains.</li>
          <li><strong>Aviation:</strong> Managing flight bookings, radar air-traffic control (ATC), collision avoidance systems, and automated airplane landing/takeoff.</li>
        </ul>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">e. What is abacus? Is it still used in the calculation?</div>
      <div class="qa-card-a">
        <p>The <strong>Abacus</strong> is the earliest mechanical counting and calculating device, invented in China approximately 3000 years ago. It consists of a rectangular wooden frame containing 11 vertical rods divided horizontally by a middle separator bar into two decks:</p>
        <ul>
          <li><strong>Upper Deck (Heaven):</strong> Features 2 beads per rod; each bead holds a value of <strong>5</strong>.</li>
          <li><strong>Lower Deck (Earth):</strong> Features 5 beads per rod; each bead holds a value of <strong>1</strong>.</li>
        </ul>
        <p>It operates on the <strong>decimal system</strong> using place-value notation (moving beads toward the middle beam) for addition, subtraction, multiplication, and division.</p>
        <p><strong>Is it still used?</strong> Yes. The abacus is still actively used for everyday trade in Asian countries like China and Japan. Moreover, mental arithmetic academies worldwide (such as <em>UCMAS Nepal</em>) teach young children to calculate rapid sums using abacus techniques.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">f. Who and when Napier's Bone was invented?</div>
      <div class="qa-card-a">
        <p><strong>Napier's Bone</strong> was invented by Scottish mathematician <strong>John Napier</strong> in the year <strong>1617 AD</strong>. It consisted of a set of 11 rods carved with multiplication tables to calculate large multiplication and division sums quickly.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">g. Who invented the first analog device, and when?</div>
      <div class="qa-card-a">
        <p>The first analog calculating device &mdash; the <strong>Slide Rule</strong> &mdash; was invented by English mathematician <strong>William Oughtred</strong> in <strong>1620 AD</strong>.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">h. Who invented the first mechanical calculator, and when?</div>
      <div class="qa-card-a">
        <p>The first mechanical calculator &mdash; the <strong>Pascaline</strong> (or <em>Pascal's Calculator</em>) &mdash; was invented by French mathematician and physicist <strong>Blaise Pascal</strong> in <strong>1642 AD</strong>.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">i. Who is known as the father of computers?</div>
      <div class="qa-card-a">
        <p>British mathematician and inventor <strong>Charles Babbage</strong> is known as the <strong>Father of Computers</strong> because his revolutionary architecture for the <em>Analytic Engine</em> (comprising input, memory store, processing mill, and print output) established the foundational design of all modern computers.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">j. List the inventions of Charles Babbage.</div>
      <div class="qa-card-a">
        <p>Charles Babbage conceptualized and designed two historic computing engines:</p>
        <ol>
          <li><strong>The Difference Engine (1822 AD):</strong> A steam-driven calculating machine designed to compute polynomial equations and print mathematical tables with accuracy up to 20 decimal places.</li>
          <li><strong>The Analytic Engine (1833 AD):</strong> The world's first design for a general-purpose, fully automatic, program-driven mechanical computer incorporating an Input Unit (punched cards), Store (memory), Mill (central processor), and Output Unit (printing).</li>
        </ol>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">k. Who was Lady Augusta Ada Lovelace?</div>
      <div class="qa-card-a">
        <p><strong>Lady Augusta Ada Lovelace</strong> was an English mathematician and close associate of Charles Babbage. She is recognized as the <strong>world's first computer programmer</strong> because she wrote the first algorithm intended to calculate Bernoulli numbers on Babbage's Analytic Engine. She also advocated for the binary number system. In 1979 AD, the US Department of Defense honored her by naming the programming language <strong>'ADA'</strong> after her.</p>
      </div>
    </div>

    <div class="qa-card">
      <div class="qa-card-q">l. Who invented the tabulating machine?</div>
      <div class="qa-card-a">
        <p>The electromechanical <strong>Tabulating Machine</strong> was invented by American statistician <strong>Herman Hollerith</strong> in <strong>1890 AD</strong> to automatically process and count the 1890 US Census data using punched cards. His venture later grew into <strong>IBM (International Business Machines)</strong> in 1924 AD.</p>
      </div>
    </div>

    <!-- 2. Write the full forms -->
    <h3>2. Write the Full Forms of the Following:</h3>
    <div class="table-responsive">
      <table class="notes-table">
        <thead>
          <tr>
            <th style="width: 25%;">Abbreviation</th>
            <th style="width: 75%;">Complete Full Form</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>a. IPO</strong></td><td>Input, Process, and Output</td></tr>
          <tr><td><strong>b. ABS</strong></td><td>Anti-lock Braking System</td></tr>
          <tr><td><strong>c. CPU</strong></td><td>Central Processing Unit</td></tr>
          <tr><td><strong>d. ATM</strong></td><td>Automated Teller Machine</td></tr>
          <tr><td><strong>e. GPS</strong></td><td>Global Positioning System</td></tr>
          <tr><td><strong>f. ASCC</strong></td><td>Automatic Sequence Controlled Calculator (Harvard Mark-I)</td></tr>
          <tr><td><strong>g. ABC</strong></td><td>Atanasoff-Berry Computer</td></tr>
          <tr><td><strong>h. ENIAC</strong></td><td>Electronic Numerical Integrator and Calculator</td></tr>
          <tr><td><strong>i. EDVAC</strong></td><td>Electronic Discrete Variable Automatic Computer</td></tr>
          <tr><td><strong>j. EDSAC</strong></td><td>Electronic Delay Storage Automatic Calculator</td></tr>
          <tr><td><strong>k. UNIVAC</strong></td><td>Universal Automatic Computer</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 3. State whether the following statements are true or false -->
    <h3>3. State Whether the Following Statements Are True or False:</h3>
    <div class="table-responsive">
      <table class="notes-table">
        <thead>
          <tr>
            <th style="width: 55%;">Statement</th>
            <th style="width: 15%;">True / False</th>
            <th style="width: 30%;">Explanatory Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>a.</strong> Abacus was the fully automatic calculating device.</td>
            <td><strong style="color: #dc2626;">False</strong></td>
            <td>The Abacus is a manual counting tool operated by hand, not automatic.</td>
          </tr>
          <tr>
            <td><strong>b.</strong> Napier's bone was the invention of William Oughtred.</td>
            <td><strong style="color: #dc2626;">False</strong></td>
            <td>Napier's Bone was invented by John Napier (1617 AD); William Oughtred invented the Slide Rule (1620 AD).</td>
          </tr>
          <tr>
            <td><strong>c.</strong> Pascaline was the first analog device.</td>
            <td><strong style="color: #dc2626;">False</strong></td>
            <td>Pascaline was the first mechanical calculator; the Slide Rule was the first analog device.</td>
          </tr>
          <tr>
            <td><strong>d.</strong> Charles Babbage had developed models of the Analytical Engine and the Difference Engine.</td>
            <td><strong style="color: #16a34a;">True</strong></td>
            <td>Charles Babbage designed both the Difference Engine (1822 AD) and Analytic Engine (1833 AD).</td>
          </tr>
          <tr>
            <td><strong>e.</strong> Howard Aiken was the founder of IBM.</td>
            <td><strong style="color: #dc2626;">False</strong></td>
            <td>Herman Hollerith founded the Tabulating Machine Company (later IBM); Howard Aiken was a Harvard professor.</td>
          </tr>
          <tr>
            <td><strong>f.</strong> MARK-I was the first automatic electromechanical computer.</td>
            <td><strong style="color: #16a34a;">True</strong></td>
            <td>Built by Howard Aiken and IBM engineers between 1937 and 1943 AD.</td>
          </tr>
          <tr>
            <td><strong>g.</strong> EDSAC was the first stored program computer.</td>
            <td><strong style="color: #dc2626;">False</strong></td>
            <td>According to the textbook (page 14), EDVAC was the first stored program computer designed; EDSAC (1949 AD) was the first practical operational one.</td>
          </tr>
          <tr>
            <td><strong>h.</strong> UNIVAC was the first general purpose electronic digital computer for commercial users.</td>
            <td><strong style="color: #16a34a;">True</strong></td>
            <td>Developed by Mauchly and Eckert in 1951 AD for commercial business applications.</td>
          </tr>
          <tr>
            <td><strong>i.</strong> Nepal had used the IBM 1401 computer for the census of 2028 B.S.</td>
            <td><strong style="color: #16a34a;">True</strong></td>
            <td>The Nepal government rented IBM 1401 for Rs. 1,25,000 per month for the 2028 B.S. census.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. Fill in the blanks -->
    <h3>4. Fill in the Blanks:</h3>
    <div class="callout callout-quickcheck">
      <ul style="margin-bottom: 0; padding-left: 1.25rem;">
        <li><strong>a.</strong> A computer is a <strong><u>programmable</u></strong> electronic device.</li>
        <li><strong>b.</strong> Each computer works on the principle of <strong><u>Input</u></strong>, <strong><u>Process</u></strong>, and <strong><u>Output</u></strong>.</li>
        <li><strong>c.</strong> The process of treating data according to the instructions is <strong><u>Processing</u></strong>.</li>
        <li><strong>d.</strong> Each bead of upper deck of Abacus represents <strong><u>5 (five)</u></strong>.</li>
        <li><strong>e.</strong> Napiers Bone consisted of <strong><u>11</u></strong> set of rods.</li>
        <li><strong>f.</strong> <strong><u>Slide Rule</u></strong> was the first analog device.</li>
        <li><strong>g.</strong> Blaise Pascal had invented <strong><u>Pascaline</u></strong> in <strong><u>1642</u></strong> AD.</li>
        <li><strong>h.</strong> Charles Babbage had developed models of <strong><u>Difference Engine</u></strong> and <strong><u>Analytic Engine</u></strong>.</li>
        <li><strong>i.</strong> The first automatic electromechanical computer was <strong><u>MARK-I (IBM ASCC)</u></strong>.</li>
        <li><strong>j.</strong> <strong><u>ENIAC</u></strong> was the first general purpose electronic digital computer.</li>
        <li><strong>k.</strong> <strong><u>Lady Augusta Ada Lovelace</u></strong> is known as the first programmer of the world.</li>
      </ul>
    </div>

    <!-- 5. Choose the correct option -->
    <h3>5. Choose the Correct Option:</h3>
    <div class="step-card-grid">
      <div class="step-card">
        <span class="step-badge">a</span>
        <span>A computer takes data and instructions through ............<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">i. keyboard</strong> (Options: i. keyboard &bull; ii. monitor &bull; iii. pen drive &bull; iv. processor)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">b</span>
        <span>Computers are used in banks for ............<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">i. keeping transactions information</strong> (Options: i. keeping transactions info &bull; ii. monitoring BP &bull; iii. entertaining customer &bull; iv. buying goods)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">c</span>
        <span>Each bead in the lower deck represents ......<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">i. 1</strong> (Options: i. 1 &bull; ii. 2 &bull; iii. 3 &bull; iv. 5)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">d</span>
        <span>John Napier invented ...... in 1617 A.D.<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">iv. Napier's Bone</strong> (Options: i. Pascaline &bull; ii. Slide Rule &bull; iii. Difference Engine &bull; iv. Napier's Bone)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">e</span>
        <span>...... is known as the father of computer.<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii. Charles Babbage</strong> (Options: i. John Napier &bull; ii. Blaise Pascal &bull; iii. Charles Babbage &bull; iv. Howard Aiken)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">f</span>
        <span>The first automatic mechanical computer was ......<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">iv. ASCC</strong> [MARK-I] (Options: i. ABC &bull; ii. ENIAC &bull; iii. UNIVAC &bull; iv. ASCC)</span>
      </div>
      <div class="step-card">
        <span class="step-badge">g</span>
        <span>...... was the first stored program computer.<br>
        <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii. EDVAC</strong> (Options: i. EDSAC &bull; ii. UNIVAC &bull; iii. EDVAC &bull; iv. ENIAC)</span>
      </div>
    </div>

    <!-- 6. Match the following -->
    <h3>6. Match the Following:</h3>
    
    <h4>a. Match Group 'A' with Group 'B':</h4>
    <div class="table-responsive">
      <table class="notes-table">
        <thead>
          <tr>
            <th style="width: 40%;">Group 'A'</th>
            <th style="width: 60%;">Correct Match from Group 'B'</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>a. Pascaline</strong></td>
            <td><strong>iii. The first mechanical calculator.</strong></td>
          </tr>
          <tr>
            <td><strong>b. Slide Rule</strong></td>
            <td><strong>v. The first analog device.</strong></td>
          </tr>
          <tr>
            <td><strong>c. ENIAC</strong></td>
            <td><strong>ii. The first general purpose computer.</strong></td>
          </tr>
          <tr>
            <td><strong>d. ABC</strong></td>
            <td><strong>iv. The first electronic digital computer.</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: -0.5rem; margin-bottom: 1.5rem;"><em>Note: Option (i) "The first stored program computer" is an extra item in Group 'B' representing EDVAC/EDSAC.</em></p>

    <h4>b. Match Group 'A' with Group 'B':</h4>
    <div class="table-responsive">
      <table class="notes-table">
        <thead>
          <tr>
            <th style="width: 40%;">Group 'A'</th>
            <th style="width: 60%;">Correct Match from Group 'B'</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>a. Difference Engine</strong></td>
            <td><strong>Charles Babbage</strong> <em>(Inventor in 1822 AD; printed alongside Herman Hollerith in textbook exercise)</em></td>
          </tr>
          <tr>
            <td><strong>b. Slide Rule</strong></td>
            <td><strong>iii. William Oughtred</strong></td>
          </tr>
          <tr>
            <td><strong>c. Pascaline</strong></td>
            <td><strong>ii. Blaise Pascal</strong></td>
          </tr>
          <tr>
            <td><strong>d. MARK-I</strong></td>
            <td><strong>v. Howard Aiken</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: -0.5rem;"><em>Note: Group 'B' listed Herman Hollerith (i) and John Napier (iv) as distractor items. Difference Engine was designed by Charles Babbage.</em></p>
  `
};

// 4. Check if exercise topic is already in topics list; if yes, replace it; if not, append it
const exIdx = ch1.topics.findIndex(t => t.title.includes("Textbook Exercise Solutions"));
if (exIdx !== -1) {
  ch1.topics[exIdx] = exerciseTopic;
} else {
  ch1.topics.push(exerciseTopic);
}

// 5. Construct updated full data object preserving ALL other classes & chapters
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (all 18 chapters intact)
  class7: currentNotes.class7, // ONLY Chapter 1 updated, all other 21 chapters intact
  class8: currentNotes.class8, // STRICTLY UNTOUCHED (all 17 chapters intact)
  class9: currentNotes.class9, // STRICTLY UNTOUCHED (all 5 chapters intact)
  class10: currentNotes.class10 // STRICTLY UNTOUCHED (all 6 chapters intact)
};

// 6. Output to js/notes-data.js
const notesDataJS = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(updatedNotesData, null, 2)};
`;

fs.writeFileSync(notesDataPath, notesDataJS, 'utf8');
console.log('Successfully updated Class 7 Chapter 1 with full Textbook Exercise Solutions while preserving all other chapters!');

// 7. Update build-data.js script
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
