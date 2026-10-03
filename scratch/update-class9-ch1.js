const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// Verify pre-conditions
if (!currentNotes.class9 || !currentNotes.class9.computerScience) {
  throw new Error("Class 9 Computer Science not found!");
}

const ch1Index = currentNotes.class9.computerScience.findIndex(c => c.id === 'class9-cs-ch1');
if (ch1Index === -1) {
  throw new Error("Chapter class9-cs-ch1 not found!");
}

// 2. Build complete detailed Chapter 1 data structure for Class 9
const ch1Data = {
  id: "class9-cs-ch1",
  chapterNumber: 1,
  title: "Computer System",
  subject: "Computer Science",
  className: "Class 9",
  updated: "2026-10-02",
  author: "Computer Science for Grade 9 &mdash; Chapter 1: Computer System",
  summary: "Comprehensive guide to computer systems, the IPO cycle, functional block diagram and architecture (Input, CPU: ALU, CU, Registers, Primary/Secondary Storage, Output), major characteristics, application areas with verified image assets and educational attributions, and complete textbook exercise solutions.",
  topics: [
    {
      title: "1.0 Introduction to Computer System & Working Principles (IPO Cycle)",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF COMPUTER SYSTEM</div>
          <p>A <strong>computer</strong> is an electronic machine that accepts raw data and instructions as input, processes the data according to stored programs at tremendous speed, produces meaningful information as output, and stores the results for future reference.</p>
          <p>A <strong>computer system</strong> refers to the integrated collection of hardware, software, user (liveware), firmware, data, and procedural components working harmoniously together to execute information processing tasks.</p>
        </div>

        <p>The term <em>computer</em> is derived from the Latin word <strong>&ldquo;computare&rdquo;</strong>, which means &ldquo;to calculate&rdquo; or &ldquo;to reckon&rdquo;. While early computing devices were invented strictly for numerical calculations, modern computer systems process numbers, text, audio, images, video graphics, and scientific models.</p>

        <h3>Core Elements of a Computer System:</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">1</span>
            <span><strong>Hardware:</strong> The physical, tangible, and mechanical parts of the computer that can be touched and felt (e.g., CPU, keyboard, monitor, motherboard, SSD, RAM).</span>
          </div>
          <div class="step-card">
            <span class="step-badge">2</span>
            <span><strong>Software:</strong> The intangible set of electronic programs, instructions, and procedures that instruct the hardware what operations to perform (e.g., Windows 11, Linux, MS Word, Python).</span>
          </div>
          <div class="step-card">
            <span class="step-badge">3</span>
            <span><strong>Liveware (Peopleware):</strong> The human personnel who design, program, administer, maintain, and operate the computer system (e.g., system analysts, programmers, end-users).</span>
          </div>
          <div class="step-card">
            <span class="step-badge">4</span>
            <span><strong>Firmware:</strong> Specialized permanent software programmed directly into read-only memory (ROM) chips at manufacturing time (e.g., BIOS / UEFI chips).</span>
          </div>
          <div class="step-card">
            <span class="step-badge">5</span>
            <span><strong>Data &amp; Information:</strong> Data consists of raw, unorganized, and unprocessed facts (numbers, characters, symbols). Information is organized, structured, and processed data that carries contextual meaning.</span>
          </div>
        </div>

        <!-- Figure 1.1: Desktop Computer System -->
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/desktopcomputersystem.webp" alt="Desktop Computer System - Core Hardware Components" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.1: Standard Desktop Computer System Setup &mdash; Central Processing Unit Tower, Display Monitor, Keyboard, Mouse, and Audio Speakers
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>Working Principle of Computer System: The IPO Cycle</h3>
        <p>Every computer system, regardless of its size or sophistication, operates according to the fundamental <strong>Input &rarr; Process &rarr; Output &rarr; Storage (IPOS) Cycle</strong>:</p>

        <!-- Interactive Student-Friendly IPO Workflow Diagram -->
        <div style="margin: 2rem 0; padding: 1.5rem; background: var(--surface); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center; box-shadow: var(--card-shadow);">
          <div style="font-weight: 800; color: var(--primary); font-size: 1.05rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">
            🔄 The Fundamental IPO Cycle (Input &rarr; Processing &rarr; Output &amp; Storage)
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            
            <!-- Step 1: Input -->
            <div style="background: var(--background); border: 2px solid #2563eb; border-radius: var(--radius-sm); padding: 1rem; flex: 1; min-width: 160px;">
              <div style="font-weight: 800; color: #2563eb; font-size: 1rem;">1. INPUT (Data)</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">Raw facts &amp; user instructions entered into the system.</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">Keyboard, Mouse, Scanner, Mic</div>
            </div>

            <div style="font-size: 1.5rem; font-weight: 900; color: var(--primary);">&rarr;</div>

            <!-- Step 2: Processing -->
            <div style="background: var(--background); border: 2px solid #7c3aed; border-radius: var(--radius-sm); padding: 1rem; flex: 1.2; min-width: 180px;">
              <div style="font-weight: 800; color: #7c3aed; font-size: 1rem;">2. PROCESSING</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">Manipulating, calculating, and evaluating data into information.</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">CPU (CU, ALU, Registers)</div>
            </div>

            <div style="font-size: 1.5rem; font-weight: 900; color: var(--primary);">&rarr;</div>

            <!-- Step 3: Output -->
            <div style="background: var(--background); border: 2px solid #16a34a; border-radius: var(--radius-sm); padding: 1rem; flex: 1; min-width: 160px;">
              <div style="font-weight: 800; color: #16a34a; font-size: 1rem;">3. OUTPUT (Info)</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem;">Presenting useful, human-readable results to the user.</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">Monitor, Printer, Speaker, Plotter</div>
            </div>

          </div>

          <!-- Secondary Storage Step -->
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; border-top: 1px dashed var(--border); padding-top: 1rem; margin-top: 0.5rem;">
            <div style="font-size: 1.2rem; font-weight: 900; color: #0284c7;">&uarr;&darr;</div>
            <div style="background: var(--background); border: 2px dashed #0284c7; border-radius: var(--radius-sm); padding: 0.75rem 1.5rem; max-width: 450px;">
              <strong style="color: #0284c7; font-size: 0.95rem;">4. STORAGE (Memory &amp; Secondary Media)</strong><br>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Permanently saving processed information &amp; programs for future retrieval (SSD, HDD, Flash Drive).</span>
            </div>
          </div>
        </div>

        <ol>
          <li><strong>Input Stage:</strong> The user enters raw data and operational commands using input devices. The input unit converts human-understandable alphanumeric characters into machine-readable binary code (0s and 1s).</li>
          <li><strong>Processing Stage:</strong> The Central Processing Unit (CPU) receives binary data from memory, decodes instructions, carries out arithmetic calculations and logical comparisons, and generates processed results.</li>
          <li><strong>Output Stage:</strong> The output unit translates machine-processed binary data back into human-understandable text, graphics, audio, or video representations.</li>
          <li><strong>Storage Stage:</strong> Processed information is transferred to non-volatile secondary storage media so it is not lost when power is disconnected.</li>
        </ol>
      `
    },
    {
      title: "1.1 Functional Architecture & Block Diagram of Computer System",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 FUNCTIONAL UNITS OF A COMPUTER SYSTEM</div>
          <p>A computer system consists of five essential functional units: <strong>Input Unit, Central Processing Unit (ALU + Control Unit + Registers), Primary Memory (RAM/ROM), Secondary Storage Unit, and Output Unit</strong>.</p>
        </div>

        <p>The internal architecture is interconnected by communication channels known as <strong>system buses</strong> (Data Bus, Address Bus, and Control Bus). Data flows between functional units while control signals govern timing and execution.</p>

        <!-- Student-Friendly Block Diagram of Computer System -->
        <div style="margin: 2rem 0; padding: 1.5rem; background: var(--surface); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center; box-shadow: var(--card-shadow);">
          <div style="font-weight: 800; color: var(--primary); font-size: 1.15rem; margin-bottom: 0.5rem; text-transform: uppercase;">
            🏛️ Functional Block Diagram of a Computer System
          </div>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            Showing paths of <strong>Data Flow</strong> (solid lines &rarr;) and <strong>Control Signals</strong> (dashed lines ---&gt;)
          </p>

          <div style="display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 1rem; align-items: stretch; margin-bottom: 1.25rem;">
            
            <!-- Column 1: Input Unit -->
            <div style="background: var(--background); border: 2px solid #2563eb; border-radius: var(--radius-sm); padding: 1.25rem 0.75rem; display: flex; flex-direction: column; justify-content: center;">
              <div style="font-weight: 800; color: #2563eb; font-size: 1.05rem;">INPUT UNIT</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Keyboard, Mouse, Scanner, Microphone, OCR, OMR</p>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); background: var(--surface); padding: 0.4rem; border-radius: 4px; margin-top: 0.5rem;">
                Converts Data &rarr; Binary
              </div>
            </div>

            <!-- Column 2: Central Processing Unit (CPU) -->
            <div style="background: var(--surface); border: 3px solid #7c3aed; border-radius: var(--radius-sm); padding: 1rem; position: relative;">
              <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #7c3aed; color: #fff; font-size: 0.75rem; font-weight: 800; padding: 2px 10px; border-radius: 12px; text-transform: uppercase;">
                Central Processing Unit (CPU)
              </div>

              <!-- Control Unit -->
              <div style="background: var(--background); border: 2px dashed #9333ea; border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">
                <strong style="color: #9333ea; font-size: 0.95rem;">CONTROL UNIT (CU)</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                  Supervises operations, decodes instructions, generates timing &amp; control signals
                </div>
              </div>

              <!-- Arithmetic Logic Unit -->
              <div style="background: var(--background); border: 2px solid #7c3aed; border-radius: var(--radius-sm); padding: 0.75rem; margin-bottom: 0.75rem;">
                <strong style="color: #7c3aed; font-size: 0.95rem;">ARITHMETIC LOGIC UNIT (ALU)</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                  Executes arithmetic calculations (+, &minus;, &times;, &divide;) and logical decisions (&lt;, &gt;, ==, !=)
                </div>
              </div>

              <!-- Primary Memory & Registers -->
              <div style="background: var(--background); border: 2px solid #0284c7; border-radius: var(--radius-sm); padding: 0.75rem;">
                <strong style="color: #0284c7; font-size: 0.95rem;">REGISTERS &amp; PRIMARY MEMORY (RAM / ROM)</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                  High-speed internal registers (Accumulator, PC, IR) and main working storage
                </div>
              </div>
            </div>

            <!-- Column 3: Output Unit -->
            <div style="background: var(--background); border: 2px solid #16a34a; border-radius: var(--radius-sm); padding: 1.25rem 0.75rem; display: flex; flex-direction: column; justify-content: center;">
              <div style="font-weight: 800; color: #16a34a; font-size: 1.05rem;">OUTPUT UNIT</div>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Monitor, Printer, Speakers, Plotter, Projector</p>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); background: var(--surface); padding: 0.4rem; border-radius: 4px; margin-top: 0.5rem;">
                Converts Binary &rarr; Human Info
              </div>
            </div>

          </div>

          <!-- Bottom Row: Secondary Storage Unit -->
          <div style="background: var(--background); border: 2px dashed #ea580c; border-radius: var(--radius-sm); padding: 0.85rem; max-width: 600px; margin: 0 auto;">
            <div style="font-weight: 800; color: #ea580c; font-size: 0.95rem;">SECONDARY STORAGE UNIT (Auxiliary Memory)</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">
              Non-volatile long-term storage: Solid State Drive (SSD), Hard Disk Drive (HDD), Flash Memory, Optical Discs
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.35rem;">
              &harr; Two-way bulk data exchange with Primary Memory &harr;
            </div>
          </div>

          <!-- Legend -->
          <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.25rem; font-size: 0.8rem; color: var(--text-muted);">
            <div><span style="display: inline-block; width: 25px; height: 3px; background: #2563eb; vertical-align: middle; margin-right: 6px;"></span> <strong>Solid Line:</strong> Data / Instructions Flow</div>
            <div><span style="display: inline-block; width: 25px; height: 3px; border-top: 2px dashed #9333ea; vertical-align: middle; margin-right: 6px;"></span> <strong>Dashed Line:</strong> Control Flow</div>
          </div>
        </div>

        <h3>Detailed Functions of Each Unit:</h3>
        <ol>
          <li>
            <strong>Input Unit:</strong>
            <p>Accepts user data and program commands. Converts raw human alphanumeric inputs into electronic machine language (binary 0s and 1s) and supplies the converted data to the main memory for processing.</p>
          </li>
          <li>
            <strong>Central Processing Unit (CPU):</strong>
            <p>Known as the &ldquo;Brain of the Computer&rdquo;. It carries out all calculations, logical decisions, program interpretations, and device coordination. The CPU is comprised of three primary sub-units:</p>
            <ul>
              <li><strong>Control Unit (CU):</strong> Acts as the nervous system or supervisor of the computer. It fetches instructions sequentially from memory, interprets and decodes them, and dispatches electronic timing pulses to coordinate all input/output hardware and internal registers.</li>
              <li><strong>Arithmetic Logic Unit (ALU):</strong> The computational heart where arithmetic operations (Addition, Subtraction, Multiplication, Division) and Logical operations (Comparisons like &gt;, &lt;, =, and Boolean operations AND, OR, NOT) are executed.</li>
              <li><strong>Registers:</strong> Super-fast internal memory cells located directly inside the CPU chip (e.g., Accumulator, Instruction Register, Program Counter, Memory Address Register) that store active operands and immediate calculation results.</li>
            </ul>
          </li>
          <li>
            <strong>Primary Memory Unit (Main Memory):</strong>
            <p>Holds the currently executing operating system kernel, open application software programs, and the data being processed by the CPU. Divided into volatile <strong>RAM</strong> (Random Access Memory) and non-volatile <strong>ROM</strong> (Read Only Memory).</p>
          </li>
          <li>
            <strong>Secondary Storage Unit:</strong>
            <p>Auxiliary non-volatile storage media that permanently saves large volumes of data, user documents, media files, and application software packages when power is turned off (e.g., SSDs, HDDs, USB flash drives).</p>
          </li>
          <li>
            <strong>Output Unit:</strong>
            <p>Receives processed binary results from the primary memory, decodes them back into natural languages, graphics, sounds, or printed documents, and presents them clearly to human operators.</p>
          </li>
        </ol>
      `
    },
    {
      title: "1.2 Characteristics and Capabilities of Computer System",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 MAIN CHARACTERISTICS OF COMPUTERS</div>
          <p>The remarkable characteristics that make computer systems indispensable in modern civilization are <strong>High Speed, Flawless Accuracy, Diligence, Versatility, High Storage Capacity, and Complete Automation</strong>.</p>
        </div>

        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">SPEED</span>
            <span><strong>High Speed:</strong> Computers perform millions to billions of mathematical calculations in a fraction of a second. Processing speeds are measured in <strong>Gigahertz (GHz)</strong>, <strong>MIPS</strong> (Million Instructions Per Second), and <strong>FLOPS</strong> (Floating-point Operations Per Second). Operation cycles take nanoseconds (10<sup>&minus;9</sup> s) or picoseconds (10<sup>&minus;12</sup> s).</span>
          </div>

          <div class="step-card">
            <span class="step-badge">ACCURACY</span>
            <span><strong>Accuracy &amp; GIGO:</strong> Computers never make calculation mistakes on their own. Every calculation is consistently accurate. Errors occur almost exclusively due to erroneous human programming or incorrect data entry, governed by the <strong>GIGO (Garbage In, Garbage Out)</strong> principle.</span>
          </div>

          <div class="step-card">
            <span class="step-badge">DILIGENCE</span>
            <span><strong>Diligence (Tirelessness):</strong> Unlike human beings, computers never suffer from physical tiredness, fatigue, boredom, emotional distraction, or loss of concentration. A computer can repeat identical operations billions of times with the exact same accuracy.</span>
          </div>

          <div class="step-card">
            <span class="step-badge">VERSATILITY</span>
            <span><strong>Versatility:</strong> A computer is capable of executing vastly different tasks across multiple domains. In the morning it can compute complex corporate accounting, in the afternoon it can render 3D architectural models, and in the evening stream 4K video or manage hospital monitors.</span>
          </div>

          <div class="step-card">
            <span class="step-badge">STORAGE</span>
            <span><strong>Huge Storage Capacity:</strong> Computers store astronomical volumes of data, text, audio, and visual information in minimal physical space. Data is measured in bits, bytes, KB, MB, GB, TB, PB (Petabytes), and EB (Exabytes). Stored information can be retrieved almost instantaneously.</span>
          </div>

          <div class="step-card">
            <span class="step-badge">AUTO</span>
            <span><strong>Automation:</strong> Once a computer program is loaded and initiated by an operator, the computer continues to execute instructions sequentially without requiring ongoing human intervention until the final result is obtained.</span>
          </div>
        </div>

        <h3>Limitations and Weaknesses of Computer Systems:</h3>
        <p>Despite their astonishing computing power, computers are not self-sufficient beings. They possess distinct inherent limitations:</p>
        <ul>
          <li><strong>No Intelligence (No IQ):</strong> A computer cannot think, reason, or formulate independent decisions. It operates strictly according to the pre-written instructions provided by human software programmers.</li>
          <li><strong>Lack of Common Sense:</strong> A computer cannot evaluate contextual morality, common-sense judgments, or real-life situational subtleties without explicit algorithms.</li>
          <li><strong>No Feelings or Emotions:</strong> Computers do not possess feelings, compassion, empathy, taste, intuition, or personal experiences.</li>
          <li><strong>Dependency on Electricity:</strong> A computer requires a continuous, stable electric power supply to function.</li>
          <li><strong>Vulnerability to Cyber Threats:</strong> Computers are susceptible to software viruses, malware, ransomware, and unauthorized network security intrusions.</li>
        </ul>
      `
    },
    {
      title: "1.3 Major Application Areas of Computers in Modern Society",
      content: `
        <p>Computers have penetrated virtually every sphere of contemporary human life. Below are the primary application domains with illustrated examples and citations:</p>

        <!-- 1. Home & Daily Life -->
        <h3>1. Computers in the Home Environment &amp; Daily Living</h3>
        <p>In modern households, computers are used for e-learning, remote work (work-from-home), family budget tracking, online utility payments, electronic communication (email, video calls), and entertainment (streaming movies, listening to music, playing interactive games).</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computerinhome.jpg" alt="Computer in Home Environment - E-learning and Remote Work" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.2: Computer in Home Environment &mdash; Educational study, virtual classrooms, personal productivity, and family entertainment
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Veerpal Brar (https://veerpalbrar.wordpress.com/)]</span>
          </figcaption>
        </figure>

        <!-- 2. Education -->
        <h3>2. Computers in Education &amp; Research</h3>
        <p>Educational institutions deploy computers for smart interactive classrooms, multimedia presentations, automated student grading and examination management, online research libraries, virtual reality science labs, and distance learning platforms.</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computerineducation.jpg" alt="Computers in Education - Smart Learning and Robotics Labs" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.3: Computers in Education &mdash; Interactive multimedia instruction, STEM robotics training, and digital classrooms
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <!-- 3. Medicine & Healthcare -->
        <h3>3. Computers in Medicine &amp; Healthcare</h3>
        <p>In hospitals and diagnostic clinics, computer systems control patient vital-sign monitoring in Intensive Care Units (ICUs), manage electronic health records (EHR), perform diagnostic imaging (Ultrasound, CT-Scan, MRI, X-rays), and assist surgeons in high-precision laparoscopic and robotic surgeries.</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computerinmedical.jpg" alt="Computers in Medicine and Healthcare Diagnostics" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.4: Computers in Medicine &amp; Healthcare &mdash; Real-time medical telemetry, patient monitoring, and clinical diagnostic imaging
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Armagard (armagard.com)]</span>
          </figcaption>
        </figure>

        <!-- 4. Banking & Finance -->
        <h3>4. Computers in Banking &amp; Financial Services</h3>
        <p>Modern banking operates entirely on computerized transaction processing networks. Computers run 24/7 Automated Teller Machines (ATMs), facilitate real-time interbank electronic fund transfers (NEFT, RTGS, mobile wallets), maintain customer accounts, detect fraudulent transactions, and generate automated balance sheets.</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computerinbank.jpg" alt="Computers in Banking - Automated Teller Machines and Financial Processing" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.5: Computers in Banking &amp; Finance &mdash; Core banking networks, ATM automated cash disbursement, and secure financial auditing
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Livemint (livemint.com)]</span>
          </figcaption>
        </figure>

        <!-- 5. Transportation & Traffic Control -->
        <h3>5. Computers in Transportation &amp; Logistics</h3>
        <p>Transportation infrastructures depend on specialized computers for automated railway signaling, passenger ticket reservations, Air Traffic Control (ATC) radar tracking, maritime navigation, GPS satellite tracking, and real-time municipal traffic light management.</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computersintransportation.webp" alt="Computers in Transportation - Railway and Traffic Automation" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.6: Computers in Transportation &mdash; Automated railway switching, intelligent transit routing, and traffic control telematics
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: WinSystems (winsystems.com)]</span>
          </figcaption>
        </figure>

        <!-- 6. Engineering, Architecture & Manufacturing -->
        <h3>6. Computers in Engineering, Architecture &amp; Manufacturing</h3>
        <p>Engineers and architects utilize <strong>Computer-Aided Design (CAD)</strong> and <strong>Computer-Aided Manufacturing (CAM)</strong> software to draft complex 3D blueprints of buildings, bridges, aircraft, and microchips. Automated robotic assembly lines in factories manufacture cars, electronics, and precision machinery under computer supervision.</p>
        <figure class="note-figure">
          <img src="assets/images/class 9 chapter 1/computersinengineering.avif" alt="Computers in Engineering - Computer Aided Design CAD" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 1.7: Computers in Engineering &amp; Architecture &mdash; Computer-Aided Design (CAD), 3D architectural modeling, and precision drafting
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Autodesk (autodesk.com)]</span>
          </figcaption>
        </figure>

        <!-- 7. Science, Meteorology & E-Governance -->
        <h3>7. Science, Space Exploration &amp; Weather Forecasting</h3>
        <p>Supercomputers simulate astronomical phenomena, model global climate changes, predict severe hurricanes, calculate rocket trajectories for planetary exploration, and sequence biological genomes in molecular genetics.</p>
      `
    },
    {
      title: "1.4 Technical Terms, Comparison Tables & Chapter Recap",
      content: `
        <h3>Key Comparative Analyses:</h3>
        
        <!-- Table 1: Data vs Information -->
        <h4>1. Difference between Data and Information:</h4>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 20%;">Basis</th>
                <th style="width: 40%;">Data</th>
                <th style="width: 40%;">Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definition</strong></td>
                <td>Raw, unorganized, and unprocessed facts, numbers, or symbols.</td>
                <td>Processed, organized, and structured data that carries meaningful context.</td>
              </tr>
              <tr>
                <td><strong>Nature</strong></td>
                <td>Atomic, isolated, and without contextual meaning on its own.</td>
                <td>Contextual, understandable, and informative for decision-making.</td>
              </tr>
              <tr>
                <td><strong>Input / Output</strong></td>
                <td>Serves as the <em>input</em> for the computer system.</td>
                <td>Is the final <em>output</em> generated by the computer system.</td>
              </tr>
              <tr>
                <td><strong>Example</strong></td>
                <td><code>98, "Ram", 85, "Science"</code> (just scattered values).</td>
                <td><em>"Ram scored 98 in Science and 85 in Math, securing 1st rank."</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table 2: ALU vs CU -->
        <h4>2. Difference between Arithmetic Logic Unit (ALU) and Control Unit (CU):</h4>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 20%;">Feature</th>
                <th style="width: 40%;">Arithmetic Logic Unit (ALU)</th>
                <th style="width: 40%;">Control Unit (CU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary Role</strong></td>
                <td>Executes mathematical calculations and logical comparisons.</td>
                <td>Coordinates and manages the overall operations of the computer system.</td>
              </tr>
              <tr>
                <td><strong>Operations</strong></td>
                <td>Performs <code>+</code>, <code>&minus;</code>, <code>&times;</code>, <code>&divide;</code>, and <code>&lt;</code>, <code>&gt;</code>, <code>=</code>, <code>AND</code>, <code>OR</code>.</td>
                <td>Fetches, decodes, and directs instruction flow between components.</td>
              </tr>
              <tr>
                <td><strong>Data Flow</strong></td>
                <td>Directly manipulates and transforms active data values.</td>
                <td>Does not alter data directly; issues control signals to guide data paths.</td>
              </tr>
              <tr>
                <td><strong>Metaphor</strong></td>
                <td>The <em>calculation engine</em> or <em>calculator</em> of the CPU.</td>
                <td>The <em>supervisor</em>, <em>traffic director</em>, or <em>nervous system</em> of the CPU.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table 3: Hardware vs Software -->
        <h4>3. Difference between Hardware and Software:</h4>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 20%;">Feature</th>
                <th style="width: 40%;">Hardware</th>
                <th style="width: 40%;">Software</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definition</strong></td>
                <td>The physical, tangible machinery and components of a computer.</td>
                <td>The intangible set of instructions and programs that run on hardware.</td>
              </tr>
              <tr>
                <td><strong>Physical Existence</strong></td>
                <td>Tangible: Can be seen, touched, and mechanically manipulated.</td>
                <td>Intangible: Cannot be physically touched; stored as electronic bit patterns.</td>
              </tr>
              <tr>
                <td><strong>Damage / Wear</strong></td>
                <td>Can wear out, suffer physical damage, or burn out over time.</td>
                <td>Does not physically wear out; can develop software bugs or virus infections.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Processor, RAM chip, SSD, Motherboard, Monitor, Keyboard.</td>
                <td>Windows 11, MS Office 365, Python, Adobe Photoshop, Web Browser.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Chapter Technical Terms Glossary:</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">IPO</span>
            <span><strong>IPO Cycle:</strong> Input-Process-Output cycle &mdash; the universal operational workflow of all computer systems.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">GIGO</span>
            <span><strong>GIGO Principle:</strong> &ldquo;Garbage In, Garbage Out&rdquo; &mdash; the accuracy of output depends entirely upon the accuracy of input data.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">CPU</span>
            <span><strong>CPU (Central Processing Unit):</strong> The main microchip that interprets and executes program instructions.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">ALU</span>
            <span><strong>Arithmetic Logic Unit:</strong> Sub-unit of the CPU performing arithmetic calculations and logical decisions.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">CU</span>
            <span><strong>Control Unit:</strong> Sub-unit of the CPU directing execution order, timing signals, and peripheral coordination.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">FIRMWARE</span>
            <span><strong>Firmware:</strong> Low-level system software permanently embedded into non-volatile ROM chips during manufacture.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">LIVEWARE</span>
            <span><strong>Liveware (Peopleware):</strong> Human professionals and end-users who operate and maintain computer systems.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">MIPS</span>
            <span><strong>MIPS:</strong> Millions of Instructions Per Second &mdash; a standard metric measuring CPU instruction throughput.</span>
          </div>
        </div>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 1 (Computer System)",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📚 TEXTBOOK EXERCISE SOLUTIONS &mdash; CHAPTER 1: COMPUTER SYSTEM</div>
          <p>Complete, comprehensive, and student-friendly solutions for all exercise questions from Class 9 Computer Science &mdash; Chapter 1: Computer System.</p>
        </div>

        <!-- 1. Answer the Following Questions -->
        <h3>1. Answer the Following Questions:</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is a computer system? Explain its essential components.</div>
          <div class="qa-card-a">
            <p>A <strong>computer system</strong> is an integrated combination of hardware, software, liveware (peopleware), firmware, data, and procedures working cooperatively together to accept raw data, process it according to programmed instructions, and deliver useful information.</p>
            <p><strong>Essential Components:</strong></p>
            <ul>
              <li><strong>Hardware:</strong> Tangible physical equipment including input devices (keyboard, mouse), processing units (CPU), memory chips (RAM/ROM), storage media (SSD, HDD), and output devices (monitor, printer).</li>
              <li><strong>Software:</strong> Intangible sets of digital instructions, system programs (Operating Systems like Windows/Linux), and application packages (MS Word, Web Browsers) that command the hardware.</li>
              <li><strong>Liveware (Peopleware):</strong> The human personnel involved in designing, programming, administering, and operating the system.</li>
              <li><strong>Firmware:</strong> Permanent, low-level instruction sets embedded directly into hardware ROM chips (e.g., BIOS/UEFI).</li>
              <li><strong>Data and Information:</strong> The raw input facts fed into the system and the processed, meaningful results produced for human consumption.</li>
            </ul>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. Explain the working principle of a computer system with the help of the IPO cycle.</div>
          <div class="qa-card-a">
            <p>The universal working principle of any digital computer is based on the <strong>IPO (Input &rarr; Process &rarr; Output) Cycle</strong>:</p>
            <ol>
              <li><strong>Input Stage:</strong> Raw facts, figures, and operational commands are fed into the system through input devices such as the keyboard, mouse, or scanner. The input unit converts human-readable alphanumeric characters into machine-readable binary code (0s and 1s).</li>
              <li><strong>Processing Stage:</strong> The Central Processing Unit (CPU) receives the binary data, decodes program instructions, executes mathematical computations, performs logical evaluations, and transforms raw data into organized information.</li>
              <li><strong>Output Stage:</strong> The processed binary results are sent to output devices (monitors, printers, speakers), which convert machine language back into human-understandable visual, textual, or auditory forms.</li>
              <li><strong>Storage Stage:</strong> Along with IPO, processed results and software instructions are permanently recorded onto auxiliary secondary storage media (such as SSDs, HDDs, or flash drives) for ongoing future reference.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. Draw a neat functional block diagram of a computer system and explain the functions of the CPU.</div>
          <div class="qa-card-a">
            <p>The functional block diagram of a computer system depicts the interconnected architecture between the <strong>Input Unit</strong>, the <strong>Central Processing Unit (Control Unit, Arithmetic and Logical Unit, Memory Unit)</strong>, and the <strong>Output Unit</strong>:</p>

            <figure class="note-figure" style="margin: 1.25rem 0;">
              <img src="assets/images/class 9 chapter 1/block-diagram-of-computer.jpg" alt="Functional Block Diagram of a Computer System" class="note-figure-img" style="max-height: 440px; object-fit: contain; background: #ffffff; padding: 0.75rem; border-radius: var(--radius-sm); box-shadow: var(--card-shadow);">
              <figcaption class="note-caption">
                Figure: Functional Block Diagram of a Computer &mdash; Illustrating Input, CPU (Control Unit, Arithmetic and Logical Unit, Memory Unit), and Output
              </figcaption>
            </figure>

            <p><strong>Functions of the Central Processing Unit (CPU):</strong></p>
            <ul>
              <li><strong>Control Unit (CU):</strong> Acts as the nerve center and traffic manager. It fetches program instructions from memory, decodes what operations must occur, and issues precise electronic timing pulses that activate the input/output devices and internal circuits.</li>
              <li><strong>Arithmetic Logic Unit (ALU):</strong> Carries out all fundamental mathematical operations (addition, subtraction, multiplication, division) and logical decision-making tests (less than, greater than, equal to, AND, OR, NOT).</li>
              <li><strong>Registers &amp; Internal Cache:</strong> Provide ultra-high-speed temporary storage cells directly inside the microprocessor to hold immediate memory addresses, instruction codes, and intermediate calculation values during active execution.</li>
            </ul>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. Differentiate between Arithmetic Logic Unit (ALU) and Control Unit (CU).</div>
          <div class="qa-card-a">
            <p>The primary differences between ALU and CU are summarized below:</p>
            <div class="table-responsive">
              <table class="notes-table">
                <thead>
                  <tr>
                    <th style="width: 25%;">Feature</th>
                    <th style="width: 37%;">Arithmetic Logic Unit (ALU)</th>
                    <th style="width: 38%;">Control Unit (CU)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Core Function</strong></td>
                    <td>Performs arithmetic computations and logical comparison operations.</td>
                    <td>Directs, coordinates, and manages all operations across the computer.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Manipulation</strong></td>
                    <td>Directly processes and alters binary numbers and variables.</td>
                    <td>Does not manipulate or transform data; dispatches command signals.</td>
                  </tr>
                  <tr>
                    <td><strong>Key Operations</strong></td>
                    <td>Addition, Subtraction, Multiplication, Division, Comparisons (&lt;, &gt;, =).</td>
                    <td>Instruction fetch, instruction decoding, timing control, routing.</td>
                  </tr>
                  <tr>
                    <td><strong>Analogy</strong></td>
                    <td>The mathematical <em>calculator</em> of the computer system.</td>
                    <td>The <em>supervisor</em> or <em>nervous system</em> of the computer.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. Explain any four major characteristics of a modern computer system.</div>
          <div class="qa-card-a">
            <p>Four major characteristics that define modern digital computers are:</p>
            <ol>
              <li><strong>High Speed:</strong> Computers execute operations in fractions of a second, measured in nanoseconds (10<sup>&minus;9</sup> s) or picoseconds (10<sup>&minus;12</sup> s), handling billions of instructions per second (Gigahertz/MIPS).</li>
              <li><strong>Accuracy:</strong> Computers produce consistently error-free calculations. Unless incorrect data is entered by a human (GIGO principle), a computer never generates mistaken answers.</li>
              <li><strong>Diligence:</strong> Computers operate continuously without fatigue, tiredness, boredom, or loss of concentration. They can execute repetitive tasks millions of times with uniform precision.</li>
              <li><strong>Versatility:</strong> Computers can perform radically diverse applications &mdash; from playing games and typing documents to simulating rocket trajectories and processing banking transactions.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. What is the GIGO principle? Explain its significance.</div>
          <div class="qa-card-a">
            <p><strong>GIGO</strong> stands for <strong>&ldquo;Garbage In, Garbage Out&rdquo;</strong>.</p>
            <p>It is a fundamental computer science concept stating that the accuracy and validity of a computer&rsquo;s output depend entirely upon the accuracy and quality of the input data and program instructions provided to it. Because computers possess no inherent common sense or independent intelligence, if incorrect, faulty, or corrupted data (&ldquo;garbage in&rdquo;) is entered, the computer will faithfully process that faulty input and produce incorrect or misleading results (&ldquo;garbage out&rdquo;).</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">g. Mention any four major limitations of computers.</div>
          <div class="qa-card-a">
            <p>Despite their immense power, computer systems have distinct limitations:</p>
            <ol>
              <li><strong>Zero Intelligence (No IQ):</strong> A computer cannot think, invent, or make decisions on its own without pre-written programs created by human programmers.</li>
              <li><strong>Lack of Common Sense &amp; Heuristic Judgment:</strong> A computer cannot apply moral, philosophical, or situational common sense to unexpected real-world situations.</li>
              <li><strong>Absence of Feelings and Emotions:</strong> Computers have no emotions, intuition, sympathy, or psychological consciousness.</li>
              <li><strong>Total Dependency on Power and Hardware Infrastructure:</strong> A computer is entirely dependent on continuous electrical energy and is vulnerable to hardware malfunctions, malware infections, and physical damage.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. Discuss the role and application of computers in education, medicine, and banking.</div>
          <div class="qa-card-a">
            <p><strong>1. Role in Education:</strong> Computers facilitate multimedia smart-class presentations, interactive e-learning software, student examination records, online virtual labs, digital libraries, and global distance education.</p>
            <p><strong>2. Role in Medicine:</strong> In healthcare, computers monitor vital signs in ICUs, control diagnostic medical imaging instruments (CT Scans, MRI, Ultrasound), store digital patient medical histories (EHR), and assist in computer-guided surgical procedures.</p>
            <p><strong>3. Role in Banking:</strong> Computers operate round-the-clock Automated Teller Machines (ATMs), manage online Internet/mobile banking, execute real-time interbank financial fund transfers, manage customer ledgers, and prevent electronic financial fraud.</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">i. Differentiate between Data and Information with suitable examples.</div>
          <div class="qa-card-a">
            <p><strong>Data:</strong> Refers to raw, unprocessed, unorganized facts, figures, numbers, or symbols that do not convey meaningful ideas on their own.<br>
            <em>Example:</em> <code>85, 92, "Rita", "Math", "Science"</code>.</p>
            <p><strong>Information:</strong> Refers to processed, structured, and contextualized data that conveys clear meaning and helps people make decisions.<br>
            <em>Example:</em> <em>&ldquo;Rita scored 92 in Math and 85 in Science, achieving an A+ grade.&rdquo;</em></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">j. Define Firmware and Liveware.</div>
          <div class="qa-card-a">
            <p><strong>Firmware:</strong> Firmware is a specialized category of permanent, low-level software that is written directly into non-volatile read-only memory (ROM) chips at the time of hardware manufacturing (such as BIOS or UEFI chips) to bootstrap hardware components.</p>
            <p><strong>Liveware (Peopleware):</strong> Liveware refers to the human personnel involved in operating, programming, engineering, maintaining, and utilizing computer systems (e.g., system administrators, computer programmers, database managers, and everyday computer users).</p>
          </div>
        </div>

        <!-- 2. Write Technical Terms -->
        <h3>2. Write the Technical Term for Each of the Following Statements:</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 70%;">Statement</th>
                <th style="width: 30%;">Technical Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a.</strong> The physical and tangible parts of a computer system that can be touched.</td>
                <td><strong style="color: var(--primary);">Hardware</strong></td>
              </tr>
              <tr>
                <td><strong>b.</strong> The intangible set of electronic programs and instructions that govern computer operations.</td>
                <td><strong style="color: var(--primary);">Software</strong></td>
              </tr>
              <tr>
                <td><strong>c.</strong> The operational principle stating that incorrect input leads directly to incorrect output.</td>
                <td><strong style="color: var(--primary);">GIGO (Garbage In, Garbage Out)</strong></td>
              </tr>
              <tr>
                <td><strong>d.</strong> The fundamental operational cycle of Input, Processing, and Output.</td>
                <td><strong style="color: var(--primary);">IPO Cycle</strong></td>
              </tr>
              <tr>
                <td><strong>e.</strong> The component of the CPU that directs and coordinates all operations across the computer.</td>
                <td><strong style="color: var(--primary);">Control Unit (CU)</strong></td>
              </tr>
              <tr>
                <td><strong>f.</strong> The unit inside the CPU responsible for mathematical calculations and logical comparisons.</td>
                <td><strong style="color: var(--primary);">Arithmetic Logic Unit (ALU)</strong></td>
              </tr>
              <tr>
                <td><strong>g.</strong> High-speed temporary memory storage cells located inside the CPU microprocessor.</td>
                <td><strong style="color: var(--primary);">Registers</strong></td>
              </tr>
              <tr>
                <td><strong>h.</strong> Software instructions permanently recorded into read-only memory chips during manufacturing.</td>
                <td><strong style="color: var(--primary);">Firmware</strong></td>
              </tr>
              <tr>
                <td><strong>i.</strong> The human beings who design, develop, maintain, and interact with computer systems.</td>
                <td><strong style="color: var(--primary);">Liveware (Peopleware)</strong></td>
              </tr>
              <tr>
                <td><strong>j.</strong> The characteristic of a computer that enables it to perform repetitive tasks without fatigue.</td>
                <td><strong style="color: var(--primary);">Diligence</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 3. True / False -->
        <h3>3. State Whether the Following Statements are True or False with Reasons:</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 50%;">Statement</th>
                <th style="width: 15%;">True / False</th>
                <th style="width: 35%;">Reason / Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a.</strong> The CPU can execute programs without the support of the Control Unit.</td>
                <td><strong style="color: #ef4444;">False</strong></td>
                <td>The Control Unit is essential because it fetches, decodes, and directs timing signals for all instructions.</td>
              </tr>
              <tr>
                <td><strong>b.</strong> A computer possesses high intelligence and can make decisions independently without human programming.</td>
                <td><strong style="color: #ef4444;">False</strong></td>
                <td>Computers have zero IQ and operate exclusively on pre-programmed instructions provided by human developers.</td>
              </tr>
              <tr>
                <td><strong>c.</strong> GIGO means that accurate input data always guarantees faulty computer output.</td>
                <td><strong style="color: #ef4444;">False</strong></td>
                <td>GIGO means Garbage In, Garbage Out &mdash; erroneous input produces erroneous output, whereas accurate input produces accurate output.</td>
              </tr>
              <tr>
                <td><strong>d.</strong> Information refers to raw, unorganized facts and figures.</td>
                <td><strong style="color: #ef4444;">False</strong></td>
                <td>Raw unorganized facts are <em>data</em>; information is data that has been processed into a meaningful context.</td>
              </tr>
              <tr>
                <td><strong>e.</strong> Diligence refers to a computer&rsquo;s capability to perform different types of tasks.</td>
                <td><strong style="color: #ef4444;">False</strong></td>
                <td>The ability to perform different tasks is <em>versatility</em>; diligence is the ability to work tirelessly without fatigue.</td>
              </tr>
              <tr>
                <td><strong>f.</strong> Firmware is permanent software embedded into ROM chips during hardware manufacturing.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Firmware is low-level code (like BIOS/UEFI) permanently burned into ROM chips by the manufacturer.</td>
              </tr>
              <tr>
                <td><strong>g.</strong> The ALU performs both mathematical calculations and logical comparisons.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>The ALU handles arithmetic operations (+, &minus;, &times;, &divide;) and logical tests (&lt;, &gt;, =, AND, OR, NOT).</td>
              </tr>
              <tr>
                <td><strong>h.</strong> Modern computers operate according to the IPO (Input-Process-Output) cycle.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>The IPO cycle with auxiliary storage is the universal working architecture of all digital computing systems.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 4. Fill in the Blanks -->
        <h3>4. Fill in the Blanks with Appropriate Words:</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">a</span>
            <span>The word computer is derived from the Latin word <strong style="color: var(--primary);">computare</strong>, which means to calculate.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">b</span>
            <span>The fundamental working cycle of a computer system is the <strong style="color: var(--primary);">IPO (Input-Process-Output)</strong> cycle.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">c</span>
            <span>The <strong style="color: var(--primary);">Control Unit (CU)</strong> acts as the supervisor and nervous system of the computer.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">d</span>
            <span><strong style="color: var(--primary);">ALU (Arithmetic Logic Unit)</strong> is the component responsible for performing calculations and comparisons.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">e</span>
            <span>The principle that incorrect input results in incorrect output is known as <strong style="color: var(--primary);">GIGO (Garbage In, Garbage Out)</strong>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">f</span>
            <span>The physical, tangible machinery of a computer is called <strong style="color: var(--primary);">hardware</strong>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">g</span>
            <span>Software permanently stored in read-only memory chips is called <strong style="color: var(--primary);">firmware</strong>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">h</span>
            <span>The human beings who operate and program computers are termed <strong style="color: var(--primary);">liveware (peopleware)</strong>.</span>
          </div>
        </div>

        <!-- 5. Multiple Choice Questions -->
        <h3>5. Multiple Choice Questions (Choose the Correct Option):</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">1</span>
            <span>Which unit of the computer system coordinates and controls all hardware and software operations?<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">c) Control Unit</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) ALU &bull; b) Storage Unit &bull; c) Control Unit &bull; d) Output Unit)</span></span>
          </div>

          <div class="step-card">
            <span class="step-badge">2</span>
            <span>The capability of a computer to execute repetitive operations without fatigue or loss of concentration is known as:<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">b) Diligence</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) Versatility &bull; b) Diligence &bull; c) Accuracy &bull; d) Automation)</span></span>
          </div>

          <div class="step-card">
            <span class="step-badge">3</span>
            <span>Which of the following is considered raw, unorganized, and unprocessed facts?<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">a) Data</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) Data &bull; b) Information &bull; c) Knowledge &bull; d) Firmware)</span></span>
          </div>

          <div class="step-card">
            <span class="step-badge">4</span>
            <span>What does the GIGO principle stand for?<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">d) Garbage In, Garbage Out</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) General Input, General Output &bull; b) Global In, Global Out &bull; c) Greater Input, Greater Output &bull; d) Garbage In, Garbage Out)</span></span>
          </div>

          <div class="step-card">
            <span class="step-badge">5</span>
            <span>Which memory registers are located directly inside the CPU chip?<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">b) Internal Registers</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) Hard Disk &bull; b) Internal Registers &bull; c) SSD &bull; d) CD-ROM)</span></span>
          </div>

          <div class="step-card">
            <span class="step-badge">6</span>
            <span>Which component is an example of firmware?<br>
            <strong>Correct Answer:</strong> <strong style="color: var(--primary);">c) BIOS / UEFI in ROM</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: a) Windows 11 &bull; b) Microsoft Word &bull; c) BIOS / UEFI in ROM &bull; d) Antivirus)</span></span>
          </div>
        </div>
      `
    }
  ]
};

// 3. Update ONLY Chapter 1 of Class 9
currentNotes.class9.computerScience[ch1Index] = ch1Data;

// 4. Verify Integrity across ALL classes before writing
console.log('Auditing chapter counts:');
console.log('Class 6:', currentNotes.class6.computerScience.length, '(expected 18)');
console.log('Class 7:', currentNotes.class7.computerScience.length, '(expected 22)');
console.log('Class 8:', currentNotes.class8.computerScience.length, '(expected 17)');
console.log('Class 9:', currentNotes.class9.computerScience.length, '(expected 15)');
console.log('Class 10:', currentNotes.class10.computerScience.length, '(expected 6)');

const total = currentNotes.class6.computerScience.length +
              currentNotes.class7.computerScience.length +
              currentNotes.class8.computerScience.length +
              currentNotes.class9.computerScience.length +
              currentNotes.class10.computerScience.length;

console.log('Total Chapters:', total, '(expected 78)');

if (total !== 78) {
  throw new Error(`Total chapters mismatch: expected 78, got ${total}`);
}

// 5. Serialize safely back to js/notes-data.js and scratch/build-data.js
const updatedJsContent = `// Computer Science Notes Data for Classes 6, 7, 8, 9, and 10\nconst notesData = ${JSON.stringify(currentNotes, null, 2)};\n`;

fs.writeFileSync(notesDataPath, updatedJsContent, 'utf8');
console.log('Successfully updated js/notes-data.js');

const buildDataPath = path.join(__dirname, 'build-data.js');
if (fs.existsSync(buildDataPath)) {
  fs.writeFileSync(buildDataPath, updatedJsContent, 'utf8');
  console.log('Successfully synchronized scratch/build-data.js');
}

console.log('Update Class 9 Chapter 1 completed with 100% preservation of all other content!');
