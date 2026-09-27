const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Build complete detailed Chapter 3 data structure for Class 7
const ch3Data = {
  id: "class7-cs-ch3",
  chapterNumber: 3,
  title: "Types of Computers",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-20",
  author: "Innovative Computer Science &mdash; Book 7, Chapter 3 (Pages 31&ndash;38)",
  summary: "Comprehensive guide to types of computers based on operation (analog, digital, hybrid) and size (supercomputer, mainframe, minicomputer, microcomputer: desktop, laptop, palmtop), analog vs. digital data, visual classification hierarchy, and complete textbook exercise solutions with Wikipedia source attributions.",
  topics: [
    {
      title: "3.0 Introduction & Classification of Computers",
      content: `
        <p>A computer can perform a variety of tasks efficiently and accurately. Modern computers are deployed across diverse sectors including schools, colleges, hospitals, government and private offices, scientific research centers, animation studios, and music composing companies.</p>

        <p>Computers used in different fields are not all identical. They differ in their <strong>processing speed, storage capacity, physical size, cost, and the specific nature of tasks</strong> they perform.</p>

        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">SPECIAL</span>
            <span><strong>Special-Purpose Computers:</strong> Designed to perform only a single specific task or function. They cannot be reprogrammed for another job. Examples: <em>ATM machines, traffic light controllers, aircraft autopilot systems, digital thermometers, and vehicle speedometers</em>.</span>
          </div>
          <div class="step-card">
            <span class="step-badge">GENERAL</span>
            <span><strong>General-Purpose Computers:</strong> Versatile computers designed to perform a wide variety of tasks. By changing the software application, the same computer can prepare documents, create spreadsheets, edit videos, browse the web, or play games. Examples: <em>Desktop PCs, laptops, and smartphones</em>.</span>
          </div>
        </div>

        <h3>Classification on the Basis of Working Principle (Nature of Task)</h3>
        <p>On the basis of how they represent data and perform tasks, computers are classified into three primary categories:</p>
        <ol>
          <li><strong>Analog Computers</strong> &mdash; measure continuous physical values.</li>
          <li><strong>Digital Computers</strong> &mdash; process discrete discontinuous data in binary form (0s and 1s).</li>
          <li><strong>Hybrid Computers</strong> &mdash; combine the best features of both analog and digital computers.</li>
        </ol>

        <!-- Student-Friendly Visual Classification Diagram -->
        <div style="margin: 2rem 0; padding: 1.5rem; background: var(--surface); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center; box-shadow: var(--card-shadow);">
          <div style="font-weight: 800; color: var(--primary); font-size: 1.05rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">
            🌳 Comprehensive Hierarchy Tree of Computer Systems
          </div>
          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
            <div style="background: var(--background); border: 2px solid #ef4444; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 180px;">
              <div style="font-weight: 800; color: #ef4444; font-size: 1rem;">1. ANALOG COMPUTERS</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">Measure Continuous Data (Voltage, Pressure, Temperature)</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">e.g., Speedometer, Seismograph</div>
            </div>
            <div style="background: var(--background); border: 2px solid #10b981; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 180px;">
              <div style="font-weight: 800; color: #10b981; font-size: 1rem;">2. HYBRID COMPUTERS</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">Analog Measurement + Digital Processing</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">e.g., ECG, Ultrasound, CT-Scan</div>
            </div>
            <div style="background: var(--background); border: 2px solid #2563eb; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 180px;">
              <div style="font-weight: 800; color: #2563eb; font-size: 1rem;">3. DIGITAL COMPUTERS</div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.25rem;">Process Discrete Binary Data (0s and 1s)</div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--text); margin-top: 0.4rem;">Classified by Size &amp; Power &darr;</div>
            </div>
          </div>

          <div style="padding-top: 0.75rem; border-top: 1px dashed var(--border);">
            <div style="font-size: 0.85rem; font-weight: 800; color: var(--text); margin-bottom: 0.75rem; text-transform: uppercase;">
              Digital Computers Classified by Size &amp; Performance:
            </div>
            <div style="display: flex; justify-content: center; gap: 0.6rem; flex-wrap: wrap;">
              <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; flex: 1; min-width: 130px;">
                <strong style="color: #7c3aed; font-size: 0.88rem;">Supercomputer</strong><br>
                <span style="font-size: 0.76rem; color: var(--text-muted);">Fastest &amp; most powerful</span>
              </div>
              <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; flex: 1; min-width: 130px;">
                <strong style="color: #2563eb; font-size: 0.88rem;">Mainframe</strong><br>
                <span style="font-size: 0.76rem; color: var(--text-muted);">Large multi-user system</span>
              </div>
              <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; flex: 1; min-width: 130px;">
                <strong style="color: #0284c7; font-size: 0.88rem;">Minicomputer</strong><br>
                <span style="font-size: 0.76rem; color: var(--text-muted);">Mid-range enterprise server</span>
              </div>
              <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.6rem 0.85rem; flex: 1; min-width: 130px;">
                <strong style="color: #16a34a; font-size: 0.88rem;">Microcomputer (PC)</strong><br>
                <span style="font-size: 0.76rem; color: var(--text-muted);">Desktop, Laptop, Palmtop</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "3.1 Analog Computers & Analog Devices",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF ANALOG COMPUTER</div>
          <p>An <strong>analog computer</strong> is a computer that performs computational tasks by measuring continuous physical quantities (continuous flow of data) such as electric current, voltage, temperature, liquid pressure, altitude, and mechanical movement.</p>
        </div>

        <p>In an analog computer, all internal physical operations are performed in <strong>parallel</strong>. The computer continuously translates physical phenomena into corresponding electrical or mechanical signals.</p>

        <h3>Everyday Analog Devices vs. Scientific Analog Computers:</h3>
        <ul>
          <li><strong>Speedometer:</strong> Measures and indicates the instantaneous mechanical rotational speed of a car or motorcycle in real time as the vehicle moves. (Note: The distance traveled is measured separately by an <em>odometer</em>).</li>
          <li><strong>Mercury Thermometer:</strong> The level of mercury in a glass tube moves continuously up or down in proportion to temperature changes.</li>
          <li><strong>Pressure Gauge:</strong> Measures gas or steam pressure inside industrial boilers and pipelines.</li>
          <li><strong>Seismograph:</strong> A highly sensitive scientific analog computer that detects and records earthquake vibrations and seismic wave patterns.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class7chapter3/Kinemetrics_seismograph.jpg" alt="Kinemetrics Seismograph - Analog Computer for Measuring Earthquake Waves" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.1: Kinemetrics Seismograph &mdash; An Analog Computing Instrument for Detecting and Measuring Earthquake Vibrations
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>Core Features of Analog Computers:</h3>
        <ol type="i">
          <li><strong>Special-Purpose Design:</strong> An analog computer is engineered for a specific physical application. An analog machine designed for one purpose cannot be adapted to another purpose.</li>
          <li><strong>Continuous Data Measurement:</strong> Operates directly on continuous, variable physical data rather than discrete numerical values.</li>
          <li><strong>Parallel Processing:</strong> Executes operations simultaneously (in parallel), providing instantaneous real-time output.</li>
          <li><strong>No Internal Storage Required:</strong> Does not require internal memory storage to retain data because results are read directly off dials, needles, or graph charts.</li>
        </ol>
      `
    },
    {
      title: "3.2 Digital Computers & Principles",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF DIGITAL COMPUTER</div>
          <p>A <strong>digital computer</strong> is a computer that performs calculations and logical operations by processing <strong>discrete (discontinuous) data</strong> such as letters, numbers, symbols, and figures represented in the form of <strong>binary digits (bits: 0 and 1)</strong>.</p>
        </div>

        <p>All operations in a digital computer are executed <strong>sequentially, one step at a time</strong>, under the control of precise software instructions. Digital computers are <strong>general-purpose machines</strong>; a single digital computer can prepare documents, create financial spreadsheets, compose and edit music, stream videos, play games, and communicate worldwide.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter3/Z3_electromechanicalprogrammabledigitalcomputer.JPG" alt="Z3 Electromechanical Programmable Digital Computer" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.2: Early Programmable Digital Computer Architecture (Historical Z3 Digital Computer)
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>Core Features of Digital Computers:</h3>
        <ol type="i">
          <li><strong>General-Purpose Capability:</strong> Can perform an endless variety of applications simply by loading different software programs.</li>
          <li><strong>Binary Representation:</strong> Converts all alphabetic text, numbers, graphics, audio, and video into binary codes (0s and 1s).</li>
          <li><strong>Sequential Processing:</strong> Executes program instructions sequentially through the CPU clock cycles.</li>
          <li><strong>High Speed, Accuracy &amp; Reliability:</strong> Performs billions of calculations per second with 100% mathematical precision.</li>
          <li><strong>Massive Storage Capacity:</strong> Possesses primary memory (RAM/ROM) and secondary storage (Hard Disks, SSDs, Flash drives) to retain information indefinitely.</li>
          <li><strong>Arithmetic &amp; Logic Processing:</strong> Contains an Arithmetic and Logic Unit (ALU) capable of addition, subtraction, multiplication, division, and logical comparisons.</li>
        </ol>
      `
    },
    {
      title: "3.3 Classification of Digital Computers (by Size, Speed & Storage)",
      content: `
        <p>Digital computers vary vastly in physical size, processing speed, memory capacity, and cost. They are classified into four major categories:</p>

        <h3>1. Supercomputer</h3>
        <p>A <strong>supercomputer</strong> is the fastest, most powerful, and most expensive type of computer on Earth. It contains thousands of interconnected processors working in parallel and can process colossal volumes of data in fractions of a second.</p>
        <ul>
          <li><strong>Applications:</strong> Weather forecasting, global climate research, space flight simulation, biomedical genetic engineering, nuclear simulation, aircraft aerodynamic design, and petroleum exploration.</li>
          <li><strong>Prominent Examples:</strong> CRAY-2, CRAY XMP, NEC SX-3, IBM Blue Gene, Roadrunner, Titan, and Sunway TaihuLight.</li>
        </ul>

        <figure class="note-figure">
          <img src="assets/images/class7chapter3/supercomputer.jpg" alt="High-Performance Supercomputer Facility" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.3: High-Performance Supercomputer System for Intensive Scientific Computations
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>2. Mainframe Computer</h3>
        <p><strong>Mainframe computers</strong> are large, high-capacity, multi-user computers that are more powerful than minicomputers and microcomputers. They feature ultra-fast I/O processors and can support hundreds or thousands of simultaneous users connected through <strong>terminals</strong>.</p>
        <ul>
          <li><strong>Applications:</strong> Central banking transaction processing, national census data analysis, airline reservations, and large government departments.</li>
          <li><strong>Prominent Examples:</strong> IBM 370, IBM 3081, ICL 2950/10, DEC systems, and T-Rex.</li>
        </ul>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 WHAT IS A TERMINAL?</div>
          <p>A <strong>terminal</strong> is a combination of an input device (keyboard) and an output device (monitor). In mainframes and minicomputers, users interact with the central computer through terminals. A terminal is a workstation that does <em>not</em> possess a CPU of its own; all processing occurs on the central host computer.</p>
        </div>

        <h3>3. Minicomputer</h3>
        <p><strong>Minicomputers</strong> (mid-range servers) are medium-sized multi-user computers that are bigger and more powerful than microcomputers, but smaller and less expensive than mainframes. They support dozens of users concurrently via terminals.</p>
        <ul>
          <li><strong>Applications:</strong> Medium-sized businesses, university departmental laboratories, manufacturing automation, and bank branches.</li>
          <li><strong>Prominent Examples:</strong> PDP-8, HP 3000 series, and IBM System/36.</li>
        </ul>

        <h3>4. Microcomputer (Personal Computer / PC)</h3>
        <p>A <strong>microcomputer</strong> is the smallest and most common digital computer. It is built around a single integrated <strong>microprocessor chip</strong> that serves as its complete CPU. It is designed to be operated by <strong>one person at a time</strong>, which is why it is universally known as a <strong>Personal Computer (PC)</strong>.</p>

        <p>Microcomputers are categorized into three physical form factors:</p>

        <h4>a. Desktop Computer</h4>
        <p>A microcomputer designed to sit permanently on a desk or table in an office, home, or classroom. It features a separate monitor, system unit (casing), keyboard, and mouse.</p>
        <figure class="note-figure">
          <img src="assets/images/class7chapter3/desktop.webp" alt="Desktop Microcomputer Workstation" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.4: Desktop Personal Computer Workstation with Separate Monitor and System Unit
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h4>b. Laptop Computer</h4>
        <p>A portable, lightweight, all-in-one microcomputer that folds shut for mobility. It can be operated while resting on the user's lap and runs on a rechargeable internal battery.</p>
        <figure class="note-figure">
          <img src="assets/images/class7chapter3/Laptop_collage.jpg" alt="Portable Laptop Computers" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.5: Portable Laptop Computers with Integrated Screen, Keyboard, and Rechargeable Battery
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h4>c. Palmtop Computer</h4>
        <p>An ultra-compact handheld microcomputer small enough to be held and operated on the palm of one's hand (e.g., Personal Digital Assistants, handheld pocket PCs, and modern smartphones).</p>
        <figure class="note-figure">
          <img src="assets/images/class7chapter3/Hewlett_Packard_200LX_Palmtop_PC_-_2.jpg" alt="Hewlett Packard 200LX Palmtop PC" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.6: Hewlett-Packard 200LX Palmtop Handheld Personal Computer
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>
      `
    },
    {
      title: "3.4 Hybrid Computers",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF HYBRID COMPUTER</div>
          <p>A <strong>hybrid computer</strong> is a specialized computer that combines the most desirable features of both <strong>analog computers</strong> (rapid measurement of continuous physical variables) and <strong>digital computers</strong> (high-speed discrete digital processing and permanent storage).</p>
        </div>

        <p>A hybrid computer accepts raw continuous input signals in analog form, converts them to discrete numerical values, processes the data digitally, and presents the output in either digital or analog format.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter3/WAT_1001_hybridcomputer.jpg" alt="WAT 1001 Hybrid Computer" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 3.7: WAT 1001 Hybrid Computing System Combining Analog Measurement with Digital Processing
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>Key Applications of Hybrid Computers:</h3>
        <ul>
          <li><strong>Hospitals &amp; Intensive Care Units (ICUs):</strong>
            <ul>
              <li><strong>Electrocardiogram (ECG):</strong> Measures continuous analog electrical impulses from the patient's heart and displays digital heart rate readouts.</li>
              <li><strong>Ultrasound Machines:</strong> Emits analog sound waves and converts reflected acoustic echoes into high-resolution digital internal organ imagery.</li>
              <li><strong>CT-Scan &amp; MRI Machines:</strong> Measures analog X-ray attenuation and magnetic resonance to generate 3D digital diagnostic images.</li>
              <li><strong>Holter Monitoring Machines:</strong> Continuously records heart rhythm data over 24&ndash;48 hours.</li>
            </ul>
          </li>
          <li><strong>Industrial Process Control:</strong> Regulating chemical reaction temperatures, pipeline pressures, and automated production valves.</li>
          <li><strong>Aviation &amp; Defense:</strong> Modern fighter jets, spacecraft, and radar tracking systems that measure continuous atmospheric airflow and execute digital fly-by-wire controls.</li>
        </ul>

        <h3>Features of Hybrid Computers:</h3>
        <ol type="i">
          <li>They can measure and process both analog and digital data.</li>
          <li>They utilize analog components for high-speed continuous physical measurement and digital components for logical analysis, storage, and visual presentation.</li>
          <li>They are special-purpose, highly efficient systems suited for critical real-time monitoring.</li>
        </ol>
      `
    },
    {
      title: "3.5 Analog Data vs. Digital Data & Summary Comparison",
      content: `
        <h3>Comparison: Analog Data vs. Digital Data</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 25%;">Parameter</th>
                <th style="width: 37.5%;">Analog Data</th>
                <th style="width: 37.5%;">Digital Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nature of Data</strong></td>
                <td>Continuous data that changes smoothly over time.</td>
                <td>Discrete, discontinuous data in distinct steps.</td>
              </tr>
              <tr>
                <td><strong>Representation</strong></td>
                <td>Continuous physical waveforms (voltage, mercury height).</td>
                <td>Binary digits &mdash; 0s and 1s (bits).</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Temperature, pressure, speed, altitude, sound waves.</td>
                <td>Letters, words, numbers, symbols, digitized audio/video.</td>
              </tr>
              <tr>
                <td><strong>Processing Mode</strong></td>
                <td>Parallel physical measurement.</td>
                <td>Sequential arithmetic and logical execution.</td>
              </tr>
              <tr>
                <td><strong>Accuracy</strong></td>
                <td>Approximate (subject to scale reading limitations).</td>
                <td>Extremely accurate and repeatable.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Comprehensive Comparison: Analog, Digital, and Hybrid Computers</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Analog Computer</th>
                <th>Digital Computer</th>
                <th>Hybrid Computer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Data Type</strong></td>
                <td>Continuous physical values</td>
                <td>Discrete binary digits (0 &amp; 1)</td>
                <td>Both continuous &amp; discrete</td>
              </tr>
              <tr>
                <td><strong>Purpose</strong></td>
                <td>Special-purpose only</td>
                <td>General-purpose (versatile)</td>
                <td>Specialized multi-domain purpose</td>
              </tr>
              <tr>
                <td><strong>Processing</strong></td>
                <td>Parallel continuous calculation</td>
                <td>Sequential step-by-step logic</td>
                <td>Analog calculation + Digital storage</td>
              </tr>
              <tr>
                <td><strong>Storage</strong></td>
                <td>No memory required</td>
                <td>Massive memory capacity</td>
                <td>Digital memory for storage</td>
              </tr>
              <tr>
                <td><strong>Typical Use</strong></td>
                <td>Speedometer, Seismograph</td>
                <td>PC, Laptop, Supercomputer</td>
                <td>ECG, Ultrasound, CT-Scan, Aircraft</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Chapter Recap &mdash; Key Summary Points:</h3>
        <div class="callout callout-quickcheck">
          <ul style="margin-bottom: 0; padding-left: 1.25rem;">
            <li>A <strong>special-purpose computer</strong> can perform only a specific dedicated task.</li>
            <li>A <strong>general-purpose computer</strong> can perform many different tasks across various fields.</li>
            <li>An <strong>analog computer</strong> performs tasks by measuring continuous physical values (voltage, temperature, pressure). All operations run in parallel.</li>
            <li>A <strong>digital computer</strong> uses discrete data (letters, numbers, symbols) converted into binary digits. Operations run sequentially.</li>
            <li>Digital computers are grouped by size and performance into: <strong>Supercomputers, Mainframe computers, Minicomputers, and Microcomputers</strong>.</li>
            <li>A <strong>supercomputer</strong> is the fastest and most powerful computer, used for complex scientific tasks like weather forecasting.</li>
            <li>A <strong>mainframe computer</strong> is a large multi-user system that provides services to users via terminals.</li>
            <li>A <strong>minicomputer</strong> is a mid-sized system more powerful than desktop PCs, used in banks and airlines.</li>
            <li>A <strong>microcomputer</strong> is a personal computer powered by a single microprocessor (Desktops, Laptops, Palmtops).</li>
            <li>A <strong>hybrid computer</strong> combines the capabilities of both analog and digital computers (e.g., ICU medical monitoring machines).</li>
          </ul>
        </div>

        <!-- Educational Asset Attributions & Source Credits -->
        <div class="callout callout-doyouknow" style="margin-top: 1.75rem;">
          <div class="callout-title">📷 Educational Image Attributions &amp; Source Credits</div>
          <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">All educational reference images in this chapter were extracted from open educational archives on <strong>Wikipedia / Wikimedia Commons</strong>:</p>
          <ul style="margin-bottom: 0; font-size: 0.88rem; padding-left: 1.25rem;">
            <li><strong>Kinemetrics Seismograph:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em> (Public Domain / CC Attribution).</li>
            <li><strong>Z3 Historical Digital Computer:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em>.</li>
            <li><strong>High-Performance Supercomputer:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em>.</li>
            <li><strong>Desktop PC, Laptop Collage &amp; HP 200LX Palmtop PC:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em>.</li>
            <li><strong>WAT 1001 Hybrid Computer:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em>.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 3 (Types of Computers)",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📚 TEXTBOOK EXERCISE SOLUTIONS &mdash; PAGES 37 &amp; 38</div>
          <p>Complete, accurate, and student-friendly solutions for all exercise questions from <em>Innovative Computer Science &mdash; Book 7</em>, Chapter 3 (Types of Computers).</p>
        </div>

        <!-- 1. Answer the following questions -->
        <h3>1. Answer the Following Questions:</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is the general-purpose computer?</div>
          <div class="qa-card-a">
            <p>A <strong>general-purpose computer</strong> is a versatile computer designed to perform many different types of tasks. By changing the software program, it can be used for preparing text documents, making financial spreadsheets, playing games, browsing the Internet, composing music, and editing movies. Examples include desktop computers and laptops.</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. What is the special-purpose computer?</div>
          <div class="qa-card-a">
            <p>A <strong>special-purpose computer</strong> is a computer designed and programmed to perform only one specific task. It cannot be used for any other purpose. Examples include vehicle speedometers, digital thermometers, seismographs, and automated teller machines (ATMs).</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. List the types of computers on the basis of task.</div>
          <div class="qa-card-a">
            <p>On the basis of task (working principle), computers are divided into three groups:</p>
            <ol>
              <li><strong>Analog Computer</strong></li>
              <li><strong>Digital Computer</strong></li>
              <li><strong>Hybrid Computer</strong></li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. Define an analog computer.</div>
          <div class="qa-card-a">
            <p>An <strong>analog computer</strong> is a special-purpose computer that performs tasks by measuring continuous physical values (continuous flow of data) such as electric current, voltage, temperature, liquid pressure, and altitude. All operations in an analog computer are performed in parallel.</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. List any four features of analog computers.</div>
          <div class="qa-card-a">
            <p>Four key features of analog computers are:</p>
            <ol>
              <li>They are <strong>special-purpose computers</strong> that can perform only a particular task.</li>
              <li>They measure <strong>analog data</strong>, i.e., continuous flow of physical variables.</li>
              <li>They perform tasks in <strong>parallel</strong>, calculating results instantaneously as physical values change.</li>
              <li>They do <strong>not require internal storage</strong> memory to store data.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. Define digital computer. List its types.</div>
          <div class="qa-card-a">
            <p><strong>Definition:</strong> A <strong>digital computer</strong> is a general-purpose computer that performs calculations and logical operations by using discrete (discontinuous) data represented in the form of binary digits (0s and 1s). All operations are performed sequentially, one step at a time.</p>
            <p><strong>Types of Digital Computers (by size and power):</strong></p>
            <ol>
              <li><strong>Supercomputers</strong></li>
              <li><strong>Mainframe Computers</strong></li>
              <li><strong>Minicomputers</strong></li>
              <li><strong>Microcomputers</strong> (Desktop, Laptop, Palmtop)</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">g. List any two differences between analog and digital computers.</div>
          <div class="qa-card-a">
            <div class="table-responsive">
              <table class="notes-table">
                <thead>
                  <tr>
                    <th style="width: 20%;">Difference</th>
                    <th style="width: 40%;">Analog Computer</th>
                    <th style="width: 40%;">Digital Computer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Nature of Data</strong></td>
                    <td>Measures continuous physical values (like voltage, temperature, pressure).</td>
                    <td>Operates on discrete discontinuous data using binary digits (0s and 1s).</td>
                  </tr>
                  <tr>
                    <td><strong>2. Execution Mode</strong></td>
                    <td>All operations are performed in parallel.</td>
                    <td>All operations are performed sequentially, one step at a time.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. What is a microcomputer? List the different types of microcomputers.</div>
          <div class="qa-card-a">
            <p><strong>Definition:</strong> A <strong>microcomputer</strong> is a small, single-user computer built around a single microprocessor chip that acts as its central processing unit (CPU). It is commonly known as a <strong>Personal Computer (PC)</strong> and is used at homes, schools, and offices.</p>
            <p><strong>Different Types of Microcomputers:</strong></p>
            <ol>
              <li><strong>Desktop Computer:</strong> Designed to be placed permanently on a desk or table.</li>
              <li><strong>Laptop Computer:</strong> Portable computer that can be kept on the lap and runs on a rechargeable battery.</li>
              <li><strong>Palmtop Computer:</strong> Small handheld computer that can be kept and operated on the palm of the hand.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">i. Define hybrid computer.</div>
          <div class="qa-card-a">
            <p>A <strong>hybrid computer</strong> is a special-purpose computer that combines the capabilities of both analog computers and digital computers. It accepts input in analog form, processes data digitally with high precision, and provides output in either digital or analog form (e.g., ECG, Ultrasound, and CT-Scan machines used in hospitals).</p>
          </div>
        </div>

        <!-- 2. Write the technical term -->
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
                <td><strong>a.</strong> A computer that can measure physical value.</td>
                <td><strong style="color: var(--primary);">Analog computer</strong></td>
              </tr>
              <tr>
                <td><strong>b.</strong> A computer that uses discrete data.</td>
                <td><strong style="color: var(--primary);">Digital computer</strong></td>
              </tr>
              <tr>
                <td><strong>c.</strong> A computer that can be kept on the palm for working.</td>
                <td><strong style="color: var(--primary);">Palmtop computer</strong></td>
              </tr>
              <tr>
                <td><strong>d.</strong> A computer that has features of both analog and digital computers.</td>
                <td><strong style="color: var(--primary);">Hybrid computer</strong></td>
              </tr>
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
                <td><strong>a.</strong> A general-purpose computer can perform only a specific task.</td>
                <td><strong style="color: #dc2626;">False</strong></td>
                <td>General-purpose computers perform a variety of tasks; special-purpose computers perform only a specific task.</td>
              </tr>
              <tr>
                <td><strong>b.</strong> An analog computer made for one purpose can be used for another purpose.</td>
                <td><strong style="color: #dc2626;">False</strong></td>
                <td>Analog computers are special-purpose; an analog machine built for one purpose cannot be adapted to another.</td>
              </tr>
              <tr>
                <td><strong>c.</strong> Digital computers work on binary digits.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Digital computers convert all data into binary digits (0s and 1s).</td>
              </tr>
              <tr>
                <td><strong>d.</strong> Digital computer can measure the altitude of a mountain.</td>
                <td><strong style="color: #dc2626;">False</strong></td>
                <td>Altitude is a continuous physical quantity measured directly by analog instruments (altimeters).</td>
              </tr>
              <tr>
                <td><strong>e.</strong> All the operations in the digital computers are performed sequentially, one step at a time.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Digital computers process program instructions sequentially, step by step.</td>
              </tr>
              <tr>
                <td><strong>f.</strong> A hybrid computer has the capability of both analog and digital computers.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Hybrid computers combine analog measurement with digital processing.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 4. Fill in the blanks -->
        <h3>4. Fill in the Blanks:</h3>
        <div class="callout callout-quickcheck">
          <ul style="margin-bottom: 0; padding-left: 1.25rem;">
            <li><strong>a.</strong> A <strong><u>special</u></strong> purpose computer can perform only a specific task.</li>
            <li><strong>b.</strong> A <strong><u>general</u></strong> purpose computer can perform many different tasks.</li>
            <li><strong>c.</strong> <strong><u>Analog</u></strong> computer performs tasks by measuring physical value.</li>
            <li><strong>d.</strong> Seismograph is an example of <strong><u>analog</u></strong> computer.</li>
            <li><strong>e.</strong> Digital computer works on <strong><u>binary digits (0s and 1s)</u></strong>.</li>
            <li><strong>f.</strong> <strong><u>Hybrid</u></strong> computer has capabilities of both analog and digital computer.</li>
          </ul>
        </div>

        <!-- 5. Match the following -->
        <h3>5. Match the Following:</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th style="width: 45%;">Group 'A'</th>
                <th style="width: 55%;">Correct Match from Group 'B'</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a. Analog device</strong></td>
                <td><strong>iii. Speedometer</strong></td>
              </tr>
              <tr>
                <td><strong>b. Analog Computer</strong></td>
                <td><strong>iv. Seismograph</strong></td>
              </tr>
              <tr>
                <td><strong>c. Digital computer</strong></td>
                <td><strong>ii. Desktop computer</strong></td>
              </tr>
              <tr>
                <td><strong>d. Hybrid computer</strong></td>
                <td><strong>i. Ultrasound machine</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: -0.5rem;"><em>Note: Option (v) "Robot" is a distractor in Group 'B'.</em></p>
      `
    }
  ]
};

// 3. Update ONLY Class 7 Chapter 3 in currentNotes
const class7Chapters = currentNotes.class7.computerScience;
const ch3Index = class7Chapters.findIndex(ch => ch.chapterNumber === 3);

if (ch3Index !== -1) {
  class7Chapters[ch3Index] = ch3Data;
} else {
  class7Chapters.push(ch3Data);
}

// 4. Construct updated full data object preserving ALL other classes & chapters
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (all 18 chapters intact)
  class7: currentNotes.class7, // ONLY Chapter 3 updated, all other 21 chapters intact
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
console.log('Successfully updated Class 7 Chapter 3 with all image assets and exercise solutions while preserving all other chapters!');

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
