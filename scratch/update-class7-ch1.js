const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Build complete detailed Chapter 1 data structure for Class 7 with all 14 images integrated
const ch1Data = {
  id: "class7-cs-ch1",
  chapterNumber: 1,
  title: "Fundamental & History of computer",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-20",
  author: "Innovative Computer Science &mdash; Book 7, Chapter 1 (Pages 5&ndash;18)",
  summary: "Comprehensive notes for Class 7 Chapter 1 covering fundamental computer concepts, IPO principle, input/process/output units, application areas across key sectors, historical evolution from Abacus to UNIVAC-I, history of computers in Nepal, and full chapter summary with integrated textbook figures P1 1 to P1 14.",
  topics: [
    {
      title: "1.0 Fundamental of Computer & IPO Principle",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF COMPUTER</div>
          <p>A <strong>computer</strong> is a programmable electronic device. It can process raw data and produce useful information. It has a great impact on human life. It is used for preparing documents, keeping accounts, enhancing movies, playing games, watching movies, controlling missiles, and accessing Internet services like the World Wide Web, Internet Relay Chat, Video Conference, etc.</p>
        </div>

        <h3>The Input-Process-Output (IPO) Principle</h3>
        <p>Each computer works on the principle of <strong>Input, Process, and Output (IPO)</strong>.</p>
        <ul>
          <li>A computer takes data and instructions through <strong>input devices</strong>.</li>
          <li>It processes them in a <strong>processing device</strong> (i.e., microprocessor).</li>
          <li>It presents the result of processing (i.e., <strong>output</strong>) through output devices.</li>
          <li>A computer can store the output permanently in <strong>storage devices</strong> like hard disks, solid state disks, pen drives, optical disks, etc.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p1_1.png" alt="Class 7 Computer Science Chapter 1 - Fundamental of Computer and IPO Working Principle Diagram" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.1: Fundamental of Computer &amp; Input-Process-Output-Storage Flowchart (Page 5)</figcaption>
        </figure>

        <h3>Core Units of the Computer System</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">1</span>
            <span><strong>Input:</strong> The data or instruction that you enter into a computer is known as <em>Input</em>. You can enter data and instructions into a computer using input devices. The basic input devices are the <strong>keyboard</strong> and <strong>mouse</strong>. Some other input devices are scanner, microphone, digital camera, and light pen.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2</span>
            <span><strong>Processing:</strong> The process of treating data according to the instructions is known as <em>Processing</em>. The <strong>Central Processing Unit (CPU)</strong> of a computer treats (i.e., processes) data.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">3</span>
            <span><strong>Output:</strong> When data are processed, information is produced. The process of presenting information or the final outcome from a computer to you is the <em>Output</em>. The output unit displays or presents the output/information. Basic output units are <strong>monitor</strong> (displaying text &amp; picture), <strong>speaker</strong> (presenting audio/sound), and <strong>printer</strong> (presenting hardcopy).</span>
          </div>
        </div>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p2_2.png" alt="Class 7 Computer Science Chapter 1 - Processing, Output Units, and Application Areas in Smart Classroom" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.2: Processing, Output Devices &amp; Interactive Multimedia Classroom (Page 6)</figcaption>
        </figure>
      `
    },
    {
      title: "1.1 Application Areas of Computers",
      content: `
        <p>A computer helps people to perform their tasks easily, correctly, quickly, and in an organized way. So, computers are used in almost all areas for performing a variety of tasks:</p>

        <h3>a. Education Sector</h3>
        <p>Most schools, colleges, and institutes are using computers in teaching and learning processes. Teachers are using multimedia systems in classrooms to teach students by showing charts, diagrams, animated clips, and videos. Nowadays, students are learning different subjects themselves through the Internet.</p>

        <h3>b. Health and Medical Sector</h3>
        <p>Computers are used extensively in hospitals and medical sectors:</p>
        <ul>
          <li>To maintain comprehensive medical records of patients.</li>
          <li>For performing complex medical tests in hospitals, clinics, and biological laboratories.</li>
          <li>For continuously monitoring critical patients' blood pressure, heart rate, pulse rate, brain readings, etc.</li>
          <li>Doctors take the help of computerized devices to perform precision surgical operations.</li>
        </ul>

        <h3>c. Bank and Financial Sector</h3>
        <p>Computers are used in banks and financial industries. The use of computers in banks and financial institutions makes their services efficient and accurate. Computers are used for keeping all customer transaction information and calculating payments, interest, and balance amounts. Computers also power online banking facilities such as <strong>Automated Teller Machines (ATMs)</strong> and electronic fund transfers.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p3_3.png" alt="Application of Computers in Education, Healthcare Patient Monitoring, and Banking Automated Teller Machines (ATM)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.3: Computers in Education, Medical Patient Monitoring, and Banking ATMs (Page 7)</figcaption>
        </figure>

        <h3>d. Offices</h3>
        <p>Computers are used in offices to perform day-to-day activities like preparing documents and salary sheets, sending and receiving emails, etc. Modern public offices in Nepal &mdash; such as <em>Nepal Telecom (NTC)</em>, the <em>Department of Transport Management</em>, the <em>Ministry of Federal Affairs and Local Development</em>, and the <em>Department of National ID and Civil Registration</em> &mdash; provide fast online services to citizens using computer networks.</p>

        <h3>e. Entertainment Sector</h3>
        <p>Computers are used for playing videos and songs, composing music, editing movies and audio tracks, and adding visual special effects (VFX) in cinema. Computers are also used for creating 2D and 3D animated movies.</p>

        <h3>f. Home</h3>
        <p>People use computers at home for communication, listening to music, watching movies, playing games, sending/receiving emails, online shopping, banking, and preparing school presentations and family spreadsheets.</p>

        <h3>g. Transportation</h3>
        <p>Computers are used in modern vehicles for controlling fuel consumption and operating automated safety features like airbags and Anti-lock Braking Systems (ABS). Newer vehicles feature computerized <strong>Global Positioning System (GPS)</strong> navigation that informs drivers of their real-time location and guides them to destinations with turn-by-turn directions.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p4_4.png" alt="Application of Computers in Modern Offices, Entertainment, Home Computing, and Vehicle GPS Navigation" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.4: Computers in Offices, Entertainment, Home, and Vehicle Navigation Systems (Page 8)</figcaption>
        </figure>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 DO YOU KNOW?</div>
          <p><strong>Anti-lock Braking System (ABS)</strong> is a computerized braking system that prevents the vehicle wheels from locking up during abrupt braking, avoiding uncontrolled skidding and decreasing stopping distances on slippery roads.</p>
          <p>Traffic lights, metro rail networks, and bullet trains are also centrally controlled by computers. Computer systems manage the flight paths, takeoff, and automated landing of airplanes.</p>
        </div>
      `
    },
    {
      title: "1.2 History of Computer & Early Calculating Devices (Abacus, Napier's Bone, Slide Rule)",
      content: `
        <p>The history of computers describes how the modern computer was developed. The development of computers started when early humans learned how to count and calculate. In the beginning, they used stones, pebbles, sticks, and fingers for counting. Later, they developed number systems (such as decimal and binary) and began building manual calculating tools to compute faster and without errors.</p>
        <p>The history of computers starts approximately <strong>3000 years ago</strong> with the invention of the Abacus. In 1937 AD, Howard Aiken with IBM engineers built the first automatic electromechanical computer, <strong>MARK-I</strong>. The journey has passed through many remarkable milestones:</p>

        <h3>The Abacus</h3>
        <p>The <strong>Abacus</strong> was the first calculating device, invented in China around 3000 years ago. It consists of a wooden frame divided into two sections by a horizontal middle bar:</p>
        <ul>
          <li><strong>Upper Deck (Heaven):</strong> Contains 2 movable beads on each rod. Each upper bead represents a value of <strong>5</strong>.</li>
          <li><strong>Lower Deck (Earth):</strong> Contains 5 movable beads on each rod. Each lower bead represents a value of <strong>1</strong>.</li>
          <li>It contains 11 vertical rods and operates on the <strong>decimal number system</strong> and the principle of place-value notation (the position of beads determines value).</li>
          <li>It is used for addition, subtraction, multiplication, and division.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p5_5.png" alt="History of Computer and Chinese Abacus with Heaven and Earth Beads" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.5: History of Computer &amp; The Abacus with Heaven (Upper) and Earth (Lower) Beads (Page 9)</figcaption>
        </figure>

        <p>The Abacus is still widely used in countries like China and Japan. In Nepal, <em>'UCMAS Nepal'</em> trains children aged 5 to 13 years to calculate rapidly and accurately using the Abacus technique.</p>

        <h3>Napier's Bones (1617 AD)</h3>
        <p>A Scottish mathematician, <strong>John Napier</strong>, invented <em>Napier's Bones</em> in 1617 AD. It consisted of a set of 11 rods made of bone, wood, or metal:</p>
        <ul>
          <li>Ten rods were carved with multiplication tables of numbers from 0 to 9.</li>
          <li>One rod was carved with numbers from 1 to 9.</li>
          <li>It was used to perform fast multiplication and division of large numbers.</li>
        </ul>

        <h3>The Slide Rule (1620 AD)</h3>
        <p>An English mathematician, <strong>William Oughtred</strong>, invented the <em>Slide Rule</em> in 1620 AD. It was the world's <strong>first analog calculating device</strong>. It consists of two graduated logarithmic rulers and a transparent sliding cursor. The middle ruler slides over the outer ruler to compute multiplication, division, roots, and logarithms.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p6_6.png" alt="John Napier with Napier's Bones (1617 AD) and William Oughtred with Slide Rule (1620 AD)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.6: Napier's Bones (1617 AD) &amp; The First Analog Slide Rule (1620 AD) (Page 10)</figcaption>
        </figure>
      `
    },
    {
      title: "1.3 Mechanical Calculating Machines (Pascaline, Stepped Reckoner, Difference & Analytic Engine)",
      content: `
        <h3>The Pascaline (1642 AD)</h3>
        <p>A French mathematician and philosopher, <strong>Blaise Pascal</strong>, invented the <em>Pascaline</em> (also known as <em>Pascal's Calculator</em>) in 1642 AD. It was the <strong>first mechanical calculator</strong> in history.</p>
        <ul>
          <li>It consisted of a series of toothed metal wheels, gears, and dials.</li>
          <li>Each wheel had dials numbered 0 through 9 on its circumference.</li>
          <li>Calculation was performed by dialing numbers with a stylus. When a gear completed one full rotation of 10 teeth, it automatically shifted the adjacent wheel by one tooth (the carry-over mechanism).</li>
          <li>It performed addition and subtraction directly.</li>
        </ul>

        <h3>The Stepped Reckoner (1694 AD)</h3>
        <p>A German mathematician, <strong>Gottfried Wilhelm Von Leibniz</strong>, developed an advanced version of the Pascaline in 1694 AD known as the <em>Stepped Reckoner</em>. It utilized stepped cylindrical drums (Leibniz wheels) and could perform all four basic arithmetic operations: <strong>addition, subtraction, multiplication, and division</strong>.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p7_7.png" alt="Blaise Pascal with Pascaline (1642 AD) and Gottfried Wilhelm Von Leibniz with Stepped Reckoner (1694 AD)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.7: Pascaline Mechanical Calculator (1642 AD) &amp; Leibniz Stepped Reckoner (1694 AD) (Page 11)</figcaption>
        </figure>

        <h3>Charles Babbage: Difference Engine &amp; Analytic Engine</h3>
        <p>A British mathematician, <strong>Charles Babbage</strong>, is universally honored as the <strong>Father of Computers</strong> because his conceptual designs laid the architectural foundation of modern computers:</p>
        <ul>
          <li><strong>Difference Engine (1822 AD):</strong> Designed as a fully automatic steam-powered machine to calculate polynomial functions and mathematical tables up to 20 decimal digits. Due to machining limitations of the era, it remained unfinished.</li>
          <li><strong>Analytic Engine (1833 AD):</strong> Designed as a general-purpose, program-controlled, steam-powered mechanical computing engine. Crucially, its architecture incorporated the four fundamental units found in modern computers:
            <ol>
              <li><strong>Input Unit:</strong> Using punched cards for data and instructions.</li>
              <li><strong>Store (Memory Unit):</strong> To hold numbers awaiting computation.</li>
              <li><strong>Mill (Central Processing Unit):</strong> To execute arithmetic operations.</li>
              <li><strong>Output Unit:</strong> Printed results directly onto paper.</li>
            </ol>
          </li>
        </ul>

        <h3>Lady Augusta Ada Lovelace &mdash; The First Programmer</h3>
        <p><strong>Lady Augusta Ada Lovelace</strong> worked closely with Charles Babbage and wrote the world's first algorithm intended for implementation on the Analytic Engine, making her the <strong>first computer programmer in history</strong>. She also suggested using the binary number system. In her honor, the US Department of Defense named the high-level programming language <strong>'ADA'</strong> in 1979 AD.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p8_8.png" alt="Charles Babbage Difference Engine (1822 AD), Analytic Engine (1833 AD), and Lady Augusta Ada Lovelace First Computer Programmer" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.8: Difference Engine, Analytic Engine, Charles Babbage &amp; First Programmer Lady Ada Lovelace (Page 12)</figcaption>
        </figure>
      `
    },
    {
      title: "1.4 Electromechanical & Early Electronic Computers (Tabulating Machine, Mark-I, ABC, ENIAC)",
      content: `
        <h3>Herman Hollerith's Tabulating Machine (1890 AD)</h3>
        <p>An American statistician, <strong>Herman Hollerith</strong>, invented the electromechanical <em>Tabulating Machine</em> in 1890 AD:</p>
        <ul>
          <li>It automatically read census data encoded on punched cards using electrical sensing pins and counted the totals on dials.</li>
          <li>It successfully processed the 1890 US Census in just 3 years (compared to 8 years for the previous manual census).</li>
          <li>In 1896 AD, Hollerith founded the <em>Tabulating Machine Company</em>, which was merged and renamed in 1924 AD as the <strong>International Business Machines Corporation (IBM)</strong> &mdash; today one of the world's premier computing giants.</li>
        </ul>

        <h3>Harvard Mark-I (1937&ndash;1943 AD)</h3>
        <p>Harvard University Professor <strong>Howard Aiken</strong>, together with IBM engineers, designed and built the first automatic electromechanical computer in IBM laboratories between 1937 and 1943 AD:</p>
        <ul>
          <li>Official name: <strong>IBM ASCC</strong> (Automatic Sequence Controlled Calculator), popularly known as <strong>MARK-I</strong>.</li>
          <li>Physical dimensions: 51 feet long, 8 feet high, 2 feet wide, weighing 35 tons, containing over 500 miles of electrical wiring.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p9_9.png" alt="Herman Hollerith Punched Card Tabulating Machine (1890 AD) and Howard Aiken Harvard Mark-I Electromechanical Computer (1937-1943 AD)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.9: Hollerith's Tabulating Machine (1890 AD) &amp; Harvard Mark-I Computer (Page 13)</figcaption>
        </figure>

        <h3>Atanasoff-Berry Computer (ABC &mdash; 1942 AD)</h3>
        <p>In 1942 AD, Professor <strong>John Vincent Atanasoff</strong> and his graduate student <strong>Clifford Berry</strong> developed the <em>Atanasoff-Berry Computer (ABC)</em> at Iowa State College. It was the <strong>first electronic digital computer</strong> to utilize the binary number system, electronic vacuum tubes for logic gates, and regenerative capacitor memory. It weighed over 320 kg, contained 280 vacuum tubes, and 1.6 km of wiring.</p>

        <h3>ENIAC (1943&ndash;1946 AD)</h3>
        <p><strong>Dr. John William Mauchly</strong> and <strong>John Presper Eckert</strong> developed the <strong>ENIAC</strong> (<em>Electronic Numerical Integrator and Calculator</em>) at the University of Pennsylvania between 1943 and 1946 AD:</p>
        <ul>
          <li>It was the world's <strong>first general-purpose electronic digital computer</strong>.</li>
          <li>Operated on the decimal number system and contained approximately 18,000 vacuum tubes, 70,000 resistors, and 10,000 capacitors.</li>
          <li>It was roughly 1,000 times faster than electromechanical machines like Mark-I.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p10_10.png" alt="Atanasoff Berry Computer (ABC 1942 AD) by Atanasoff & Berry, and ENIAC (1943-1946 AD) by Mauchly & Eckert" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.10: Atanasoff Berry Computer (ABC) &amp; First General Purpose Computer ENIAC (Page 14)</figcaption>
        </figure>
      `
    },
    {
      title: "1.5 Stored Program Computers & Commercial Systems (EDVAC, EDSAC, UNIVAC-I & Nepal)",
      content: `
        <h3>EDVAC (1946&ndash;1952 AD)</h3>
        <p><strong>Dr. John William Mauchly</strong>, <strong>John Presper Eckert</strong>, and brilliant mathematician <strong>John Von Neumann</strong> designed the <strong>EDVAC</strong> (<em>Electronic Discrete Variable Automatic Computer</em>):</p>
        <ul>
          <li>It was the <strong>first computer designed with the Stored-Program Architecture</strong> (Von Neumann Architecture), where instructions and data are stored in the same internal memory.</li>
          <li>It operated entirely on the <strong>binary number system</strong>.</li>
          <li>Used magnetic tape for storage, contained 6,000 vacuum tubes, 12,000 diodes, and consumed 56 KW of electricity.</li>
        </ul>

        <h3>EDSAC (1949 AD)</h3>
        <p><strong>Professor Maurice Wilkes</strong> and his team at the University of Cambridge Mathematical Laboratory in England completed the <strong>EDSAC</strong> (<em>Electronic Delay Storage Automatic Calculator</em>) in 1949 AD. It became the world's <strong>first practical operational stored-program electronic computer</strong>. It contained 3,000 vacuum tubes, utilized mercury acoustic delay lines for memory, accepted paper tape input, printed output via a teleprinter, and consumed 30 KW of power.</p>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p11_11.png" alt="EDVAC Stored Program Computer with John Von Neumann and EDSAC with Professor Maurice Wilkes (1949 AD)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.11: EDVAC Stored-Program Architecture &amp; Cambridge EDSAC Computer (Page 15)</figcaption>
        </figure>

        <h3>UNIVAC-I (1951 AD)</h3>
        <p>Developed by <strong>Dr. John William Mauchly</strong> and <strong>John Presper Eckert</strong> in 1951 AD, the <strong>UNIVAC-I</strong> (<em>Universal Automatic Computer</em>) was the <strong>first commercially available general-purpose electronic computer</strong>. It handled both numeric and alphabetic text data, used magnetic tape for high-speed input/output, and contained 5,600 vacuum tubes, 18,000 crystal diodes, and 300 relays.</p>

        <h3>The History of Computers in Nepal</h3>
        <p>The introduction and adoption of computer technology in Nepal occurred through major historic census milestones:</p>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">2028 BS</span>
            <span><strong>First Computer in Nepal (IBM 1401):</strong> The Nepal government brought a second-generation mainframe computer &mdash; the <strong>IBM 1401</strong> &mdash; on monthly rent of Rs. 1,25,000 for the National Population Census of <strong>2028 B.S. (1972 AD)</strong>. It processed the census data of 1 crore 12.5 lakh citizens in 1 year, 7 months, and 15 days. Due to its success, the government purchased it permanently for the Central Bureau of Statistics.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2031 BS</span>
            <span><strong>Establishment of YSK / NCC:</strong> On <strong>15th Poush 2031 B.S.</strong>, the Nepal government established <em>Yantric Sarinikaran Kendra</em> (Electronic Data Processing Centre), which was later formally renamed as the <strong>National Computer Center (NCC)</strong>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2038 BS</span>
            <span><strong>ICL 2950/10 for Census 2038:</strong> For the census of 2038 B.S., Nepal brought a powerful fourth-generation British mainframe &mdash; the <strong>ICL 2950/10</strong> (International Computers Limited 2900 series) with 64 terminals. It completed the entire national census in 1 year and 3 months.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2039 BS+</span>
            <span><strong>Private Microcomputers:</strong> From 2039 B.S. onwards, private businesses began importing and selling personal microcomputers like <em>Apple, Vector, and Sirus</em>, leading to the rapid growth of computer institutes and computer stores across Nepal.</span>
          </div>
        </div>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p12_12.png" alt="Universal Automatic Computer (UNIVAC-I 1951 AD) and Milestones in History of Computers in Nepal" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.12: UNIVAC-I Commercial Computer &amp; History of Computers in Nepal (Page 16)</figcaption>
        </figure>
      `
    },
    {
      title: "1.6 Chapter Recap & Summary Points",
      content: `
        <h3>Chapter 1 Recap &mdash; Part 1 (Points 1 to 10)</h3>
        <ol>
          <li>A computer is a programmable electronic device. It can process raw data and produce useful information.</li>
          <li>A computer works on the principle of Input, Process, and Output (IPO).</li>
          <li>The data or instruction that you enter into a computer is known as Input. The basic input devices are the keyboard and mouse.</li>
          <li>The process of treating data according to the instructions is known as Processing. The CPU is the data processing device of a computer.</li>
          <li>The process of presenting information or the final outcome from a computer to you is the Output. The monitor is the basic output device.</li>
          <li>Computers are used in different areas like education, hospital &amp; medical sector, home, transportation, banks, offices, etc.</li>
          <li>The ABACUS was the first calculating device made up of a wooden frame having rods and divided into an upper deck and a lower deck. Each rod contains two movable beads in the upper deck and five movable beads in the lower deck.</li>
          <li>In 1617 AD, John Napier, a Scottish mathematician, invented Napier's Bones, having 10 rods carved with the multiplication of numbers from 0 to 9, and one rod carved with numbers from 1 to 9.</li>
          <li>In 1620 AD, an English mathematician, William Oughtred, invented the first analog device the 'slide rule'. It contains two rulers where the middle ruler can slide over the outer ruler and a cursor.</li>
          <li>Pascaline was the mechanical calculator invented by a French mathematician, Blaise Pascal, in 1642 AD.</li>
        </ol>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p13_13.png" alt="Class 7 Computer Science Chapter 1 Recap Summary - Points 1 to 10 (IPO, Input, Output, Abacus, Napier's Bones, Slide Rule, Pascaline)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.13: Chapter 1 Summary &amp; Key Takeaways (Part 1: Points 1 to 10) (Page 17)</figcaption>
        </figure>

        <h3>Chapter 1 Recap &mdash; Part 2 (Points 11 to 20)</h3>
        <ol start="11">
          <li>The Stepped Reckoner was the modified version of Pascaline developed by Gottfried Wilhelm Von Leibniz in 1694 AD. The modified machine could do addition, subtraction, multiplication, and division.</li>
          <li>A British mathematician, Charles Babbage, designed the 'Difference Engine' and 'Analytic Engine' in 1822 AD and 1833 AD, respectively. Both the engines were designed as fully automatic and powered by steam. But both machines were not completed.</li>
          <li>Charles Babbage is considered the father of computers. Because the concept of Charles Babbage led to the development of the first mechanical computer, 'Mark-I'.</li>
          <li>In 1890 AD, Herman Hollerith had built the 'Tabulating Machine' that could automatically read data from a punched card and count the data.</li>
          <li>In 1937 AD, Howard Aiken and IBM engineers had built the first automatic electromechanical computer, 'IBM ASCC (Automatic Sequence Controlled Calculator)'. It was also known as MARK-I.</li>
          <li>In 1942 AD, John Vincent Atanasoff and Clifford Berry developed the first electronic digital computer the 'Atanasoff Berry Computer (ABC)'.</li>
          <li>In 1943 AD-1946 AD, Dr. John William Mauchly and John Presper Eckert developed the first general purpose computer, the 'Electronic Numerical Integrator and Calculator (ENIAC)'.</li>
          <li>Dr. John William Mauchly, John Presper Eckert, and John Von Neumann had developed the first stored program computer, the 'Electronic Discrete Variable Automatic Computer (EDVAC)', in 1946 AD-1952 AD. It was based on the binary number system.</li>
          <li>Professor Maurice Wilkes had developed the first practical stored-program electronic computer, the 'Electronic Delay Storage Automatic Computer (EDSAC)', in 1949 AD.</li>
          <li>Dr. John William Mauchly and John Presper Eckert had developed the first general purpose electronic digital computer, the 'UNIVAC', for commercial users in 1951 AD. It was based on the EDVAC design. The UNIVAC could handle both numbers and alphabet characters.</li>
        </ol>

        <figure class="note-figure">
          <img src="assets/images/class 7 chapter 1/p14_14.png" alt="Class 7 Computer Science Chapter 1 Recap Summary - Points 11 to 20 (Stepped Reckoner, Charles Babbage, Hollerith, Mark-I, ABC, ENIAC, EDVAC, EDSAC, UNIVAC)" class="note-figure-img">
          <figcaption class="note-caption">Figure 1.14: Chapter 1 Summary &amp; Key Takeaways (Part 2: Points 11 to 20) (Page 18)</figcaption>
        </figure>
      `
    }
  ]
};

// 3. Update ONLY Class 7 Chapter 1 in currentNotes
const class7Chapters = currentNotes.class7.computerScience;
const ch1Index = class7Chapters.findIndex(ch => ch.chapterNumber === 1);

if (ch1Index !== -1) {
  class7Chapters[ch1Index] = ch1Data;
} else {
  class7Chapters.unshift(ch1Data);
}

// 4. Construct updated full data object preserving ALL other classes & chapters
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (all 18 chapters intact)
  class7: currentNotes.class7, // ONLY Chapter 1 updated, all other 21 chapters intact
  class8: currentNotes.class8, // STRICTLY UNTOUCHED (all 17 chapters intact)
  class9: currentNotes.class9, // STRICTLY UNTOUCHED (all 5 chapters intact)
  class10: currentNotes.class10 // STRICTLY UNTOUCHED (all 6 chapters intact)
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
console.log('Successfully updated Class 7 Chapter 1 with 14 integrated image assets while preserving all other chapters!');

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
