const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Build complete detailed Chapter 2 data structure for Class 7 with image sources
const ch2Data = {
  id: "class7-cs-ch2",
  chapterNumber: 2,
  title: "Generation of Computer",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-20",
  author: "Innovative Computer Science &mdash; Book 7, Chapter 2 (Pages 25&ndash;30)",
  summary: "Comprehensive guide to the five generations of computers from 1946 AD to future AI systems, core electronic switching components (vacuum tubes, transistors, ICs, VLSI microprocessors, biochips), characteristics, comparative table, visual timeline, and complete textbook exercise solutions with asset attributions.",
  topics: [
    {
      title: "2.0 Introduction & Evolution of Computer Generations",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📌 DEFINITION OF GENERATION OF COMPUTER</div>
          <p>The evolution of modern computers has passed through distinct technological stages. The development of computers that took place in each major time period based on technological breakthroughs is known as a <strong>Generation of Computer</strong>.</p>
        </div>

        <p>The development of electronic computers from 1946 AD to today is classified into <strong>five major generations</strong>. In each successive generation, there have been radical advancements in computer hardware and software technologies. As a result, computers progressively became <strong>smaller in size, cheaper in cost, faster in speed, more powerful, more energy-efficient, and far more reliable</strong> than the preceding generations.</p>

        <h3>Summary of Computer Generations (1946 AD &ndash; Future)</h3>
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr>
                <th>Generation</th>
                <th>Time Period</th>
                <th>Core Electronic Component</th>
                <th>Primary Memory / Storage</th>
                <th>Operating Speed</th>
                <th>Programming Language</th>
                <th>Example Systems</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>First Generation</strong></td>
                <td>1946 &ndash; 1958 AD</td>
                <td><strong>Vacuum Tubes (Valves)</strong></td>
                <td>Magnetic drums &amp; Magnetic tapes</td>
                <td>Milliseconds (10<sup>-3</sup> s)</td>
                <td>Machine Language (0s and 1s)</td>
                <td>ENIAC, EDVAC, EDSAC, UNIVAC-I</td>
              </tr>
              <tr>
                <td><strong>Second Generation</strong></td>
                <td>1959 &ndash; 1964 AD</td>
                <td><strong>Transistors</strong></td>
                <td>Magnetic core memory &amp; Magnetic tapes</td>
                <td>Microseconds (10<sup>-6</sup> s)</td>
                <td>Assembly &amp; Early High-Level (FORTRAN, COBOL)</td>
                <td>IBM 1401, IBM 700, UNIVAC-II, NCR 300</td>
              </tr>
              <tr>
                <td><strong>Third Generation</strong></td>
                <td>1965 &ndash; 1971 AD</td>
                <td><strong>Integrated Circuits (ICs / Chips)</strong></td>
                <td>Semiconductor memory (RAM/ROM)</td>
                <td>Nanoseconds (10<sup>-9</sup> s)</td>
                <td>High-Level Languages (BASIC, Pascal, C)</td>
                <td>IBM 370, CDC 1700, ICL 2903, PDP-11/45</td>
              </tr>
              <tr>
                <td><strong>Fourth Generation</strong></td>
                <td>1971 AD &ndash; Present</td>
                <td><strong>Microprocessors (LSI / VLSI)</strong></td>
                <td>High-density Semiconductor RAM, SSD, HDD</td>
                <td>Picoseconds (10<sup>-12</sup> s)</td>
                <td>4GL, C++, Java, Python, Web Languages</td>
                <td>IBM PC, Apple Macintosh, Modern Laptops</td>
              </tr>
              <tr>
                <td><strong>Fifth Generation</strong></td>
                <td>Present &amp; Future</td>
                <td><strong>Biochips &amp; Artificial Intelligence (ULSI)</strong></td>
                <td>Massive Parallel Memory &amp; Cloud Storage</td>
                <td>Femtoseconds &amp; Quantum Speeds</td>
                <td>Natural Human Languages (PROLOG, LISP)</td>
                <td>AI Neural Networks, Robotics, Supercomputers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Student-Friendly Visual Timeline -->
        <div style="margin: 2rem 0; padding: 1.5rem; background: var(--surface); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center; box-shadow: var(--card-shadow);">
          <div style="font-weight: 800; color: var(--primary); font-size: 1.05rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em;">
            🚀 Evolution of Core Electronic Components Across Generations
          </div>
          <div style="display: flex; justify-content: center; align-items: stretch; gap: 0.75rem; flex-wrap: wrap;">
            <div style="background: var(--background); border: 2px solid #ef4444; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 130px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: #ef4444; text-transform: uppercase;">1st Generation</div>
              <div style="font-weight: 800; font-size: 0.95rem; margin: 0.35rem 0;">Vacuum Tube</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">1946 &ndash; 1958 AD</div>
            </div>
            <div style="display: flex; align-items: center; font-size: 1.25rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--background); border: 2px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 130px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: #f59e0b; text-transform: uppercase;">2nd Generation</div>
              <div style="font-weight: 800; font-size: 0.95rem; margin: 0.35rem 0;">Transistor</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">1959 &ndash; 1964 AD</div>
            </div>
            <div style="display: flex; align-items: center; font-size: 1.25rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--background); border: 2px solid #3b82f6; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 130px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: #3b82f6; text-transform: uppercase;">3rd Generation</div>
              <div style="font-weight: 800; font-size: 0.95rem; margin: 0.35rem 0;">Integrated Circuit</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">1965 &ndash; 1971 AD</div>
            </div>
            <div style="display: flex; align-items: center; font-size: 1.25rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--background); border: 2px solid #10b981; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 130px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: #10b981; text-transform: uppercase;">4th Generation</div>
              <div style="font-weight: 800; font-size: 0.95rem; margin: 0.35rem 0;">VLSI Microprocessor</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">1971 &ndash; Present</div>
            </div>
            <div style="display: flex; align-items: center; font-size: 1.25rem; font-weight: 900; color: var(--text-muted);">&rarr;</div>
            <div style="background: var(--background); border: 2px solid #8b5cf6; border-radius: var(--radius-sm); padding: 0.85rem; flex: 1; min-width: 130px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: #8b5cf6; text-transform: uppercase;">5th Generation</div>
              <div style="font-weight: 800; font-size: 0.95rem; margin: 0.35rem 0;">Biochip &amp; AI</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Present &amp; Future</div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "2.1 First Generation Computers (1946&ndash;1958 AD &mdash; Vacuum Tubes)",
      content: `
        <p>The first generation computers were developed from <strong>1946 AD to 1958 AD</strong>. The <strong>vacuum tubes</strong> (also called <em>valves</em>) were used as the primary electronic components in first generation computers. So, all computers that used vacuum tubes belong to the first generation.</p>
        
        <p>Because vacuum tubes relied on heated filaments inside glass envelopes, first generation computers were massive in physical size, consumed massive amounts of electricity, and produced tremendous heat. They required heavy air conditioning to avoid overheating. They were slow in operating speed, extremely expensive to construct, and had low reliability.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter2/vacuumtubes.jpg" alt="First Generation Computer Electronic Component - Vacuum Tubes (Valves)" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 2.1: Vacuum Tubes (Valves) &mdash; The Core Electronic Switching Component of First Generation Computers (1946&ndash;1958 AD)
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 DO YOU KNOW?</div>
          <p>A <strong>vacuum tube</strong> is an electronic device that amplifies a signal by controlling the movement of electrons in an evacuated sealed glass bulb. The vacuum tube was invented by American engineer <strong>Lee De Forest</strong> in <strong>1908 AD</strong>.</p>
        </div>

        <h3>Major Drawbacks of First Generation Computers:</h3>
        <ol type="a">
          <li><strong>Costly Components:</strong> They used thousands of vacuum tubes, which were very expensive to manufacture and replace.</li>
          <li><strong>High Power &amp; Heat Emission:</strong> They consumed vast quantities of electrical power and generated intense heat, requiring continuous air conditioning.</li>
          <li><strong>Slow Speed &amp; Low Storage:</strong> They had operating speeds measured only in milliseconds and very limited internal storage capacity (using magnetic drums).</li>
          <li><strong>Short Lifespan &amp; Poor Reliability:</strong> Filament burnout in vacuum tubes was frequent; their lifespan was short and they broke down often.</li>
          <li><strong>Gigantic Physical Dimensions:</strong> They were colossal machines that occupied entire large rooms and weighed tens of tons.</li>
          <li><strong>Complex Machine Language:</strong> They were programmed strictly in binary machine language (0s and 1s) and could only perform specific specialized numerical tasks.</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">🖥️ KEY EXAMPLES OF FIRST GENERATION COMPUTERS</div>
          <p><strong>ENIAC</strong>, <strong>EDVAC</strong>, <strong>EDSAC</strong>, and <strong>UNIVAC-I</strong>.</p>
        </div>
      `
    },
    {
      title: "2.2 Second Generation Computers (1959&ndash;1964 AD &mdash; Transistors)",
      content: `
        <p>The second generation computers were developed from <strong>1959 AD to 1964 AD</strong>. In this generation, <strong>transistors</strong> replaced bulky vacuum tubes as the main electronic switching components.</p>
        
        <p>Because transistors were solid-state semiconductor devices without filaments, second generation computers were significantly <strong>smaller in size, faster in processing, more reliable, less prone to hardware failure, generated much less heat, and were far less expensive</strong> than first generation computers.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter2/transistors.webp" alt="Second Generation Computer Electronic Component - Semiconductor Transistors" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 2.2: Discrete Semiconductor Transistor &mdash; The Breakthrough Electronic Component of Second Generation Computers (1959&ndash;1964 AD)
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 DO YOU KNOW?</div>
          <p>The <strong>transistor</strong> (short for <em>transfer resistance</em>) was invented on <strong>December 23, 1947</strong> at Bell Laboratories by <strong>John Bardeen</strong>, <strong>Walter Brattain</strong>, and <strong>William Shockley</strong>. It controls electric current or voltage and is used for signal amplification, modulation, and ultra-fast electronic switching.</p>
        </div>

        <h3>Key Features of Second Generation Computers:</h3>
        <ol type="a">
          <li><strong>Transistors as Main Component:</strong> Replaced fragile vacuum tubes with durable solid-state transistors.</li>
          <li><strong>Improved Performance:</strong> They were smaller, faster (microseconds speed), cheaper, and considerably more reliable.</li>
          <li><strong>Input &amp; Output Media:</strong> Punched cards were used for data input and paper printouts for output.</li>
          <li><strong>Lower Energy Consumption:</strong> Consumed substantially less electrical power and produced much less heat than first generation systems.</li>
          <li><strong>Assembly &amp; High-Level Languages:</strong> Enabled the use of Assembly language (using mnemonic codes like ADD, SUB) and early High-Level Languages such as <strong>FORTRAN</strong> and <strong>COBOL</strong>.</li>
          <li><strong>Expanded Storage Capacity:</strong> Utilized magnetic core memory for internal memory, offering larger storage capacity.</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">🖥️ KEY EXAMPLES OF SECOND GENERATION COMPUTERS</div>
          <p><strong>UNIVAC-II</strong>, <strong>IBM-700</strong>, <strong>IBM-1401</strong> (the first computer brought to Nepal for the 2028 B.S. Census), and <strong>NCR-300</strong>.</p>
        </div>
      `
    },
    {
      title: "2.3 Third Generation Computers (1965&ndash;1971 AD &mdash; Integrated Circuits)",
      content: `
        <p>The third generation computers were developed from <strong>1965 AD to 1971 AD</strong>. The primary electronic component of this generation was the <strong>Integrated Circuit (IC)</strong>, commonly referred to as the <strong>silicon chip</strong>.</p>
        
        <p>An Integrated Circuit embeds hundreds of miniature transistors, diodes, capacitors, and resistors onto a tiny single silicon wafer. Due to the integration of components onto microchips, third generation computers were dramatically <strong>smaller, faster, cheaper, more powerful, highly capable, and more reliable</strong> than second generation machines.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter2/Integratedcircuits.jpg" alt="Third Generation Computer Electronic Component - Integrated Circuit (IC / Silicon Chip)" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 2.3: Integrated Circuit (IC / Silicon Chip) &mdash; The Core Component of Third Generation Computers (1965&ndash;1971 AD)
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 DO YOU KNOW?</div>
          <p>The <strong>Integrated Circuit (IC)</strong> was co-invented in <strong>1958 AD</strong> by <strong>Jack Kilby</strong> of Texas Instruments and <strong>Robert Noyce</strong> of Fairchild Semiconductor.</p>
        </div>

        <h3>Key Features of Third Generation Computers:</h3>
        <ol type="a">
          <li><strong>Integrated Circuits (ICs):</strong> Used silicon IC chips containing hundreds of transistors as the core circuitry.</li>
          <li><strong>Compact &amp; Reliable:</strong> Markedly smaller, faster (operating speeds in nanoseconds), cheaper, and more dependable.</li>
          <li><strong>Energy Efficient:</strong> Consumed substantially less electricity and produced minimal heat compared to earlier generations.</li>
          <li><strong>Modern I/O Devices:</strong> Replaced clumsy punched cards with interactive <strong>keyboards</strong> for input and visual display <strong>monitors</strong> for output.</li>
          <li><strong>Introduction of Operating Systems:</strong> Utilized sophisticated operating systems capable of time-sharing and running multiple software programs simultaneously (multi-programming).</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">🖥️ KEY EXAMPLES OF THIRD GENERATION COMPUTERS</div>
          <p><strong>IBM-370</strong>, <strong>CDC-1700</strong>, <strong>NAV-7500</strong>, <strong>ICL-2903</strong>, and <strong>PDP-11/45</strong>.</p>
        </div>
      `
    },
    {
      title: "2.4 Fourth Generation Computers (1971 AD&ndash;Present &mdash; Microprocessors)",
      content: `
        <p>The development of fourth generation computers began in <strong>1971 AD</strong> and extends to the present day. The personal computers, desktop workstations, laptops, and smartphones we use everyday belong to the <strong>fourth generation</strong>.</p>
        
        <p>The defining innovation of the fourth generation is the <strong>Microprocessor</strong>, built using <strong>LSI (Large Scale Integration)</strong> and <strong>VLSI (Very Large Scale Integration)</strong> technologies. VLSI technology packs millions of microscopic transistors onto a single fingernail-sized silicon chip.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter2/lsivlsi.jpg" alt="Fourth Generation Computer Electronic Component - SSI, MSI, LSI and VLSI Microprocessor Chips" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 2.4: Scale of Integration &mdash; SSI, MSI, LSI, and VLSI Microprocessor Chips Powering Fourth Generation Computers
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: VLSI Verify (vlsiverify.com)]</span>
          </figcaption>
        </figure>

        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 DO YOU KNOW?</div>
          <p>A <strong>microprocessor</strong> (VLSI chip) integrates the entire Central Processing Unit (CPU) onto a single silicon chip. The world's first commercial microprocessor &mdash; the <strong>Intel 4004</strong> &mdash; was released in <strong>1971 AD</strong> by the American Intel Corporation.</p>
        </div>

        <h3>The Personal Computer (PC) Revolution:</h3>
        <p>In <strong>1981 AD</strong>, IBM introduced the <strong>IBM Personal Computer (IBM PC)</strong>, popularizing computers across offices, schools, and homes worldwide. In <strong>1984 AD</strong>, Apple introduced the iconic <strong>Macintosh</strong> computer featuring a graphical user interface (GUI) and mouse.</p>

        <h3>Key Features of Fourth Generation Computers:</h3>
        <ol type="a">
          <li><strong>Microprocessor Technology:</strong> Powered by VLSI and ULSI microprocessors with millions to billions of transistors.</li>
          <li><strong>Ultra-Compact &amp; Portable:</strong> Highly portable, lightweight, affordable, powerful, and exceptionally reliable.</li>
          <li><strong>Massive Storage Capacity:</strong> High-speed semiconductor internal RAM/ROM combined with massive secondary storage (Hard Disks, SSDs, Flash drives).</li>
          <li><strong>Versatile Multitasking:</strong> Capable of executing diverse complex tasks concurrently (word processing, databases, multimedia, 3D graphics, networking).</li>
          <li><strong>Advanced Peripherals:</strong> Supports optical barcode readers, scanners, digital cameras, high-resolution monitors, DVD/Blu-ray drives, sound systems, and laser plotters.</li>
          <li><strong>Global Networking:</strong> Laid the hardware foundation for the Internet, World Wide Web, and mobile broadband communications.</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">🖥️ KEY EXAMPLES OF FOURTH GENERATION COMPUTERS</div>
          <p><strong>IBM PC</strong>, <strong>Apple Macintosh</strong>, <strong>IBM Compatible PCs</strong>, Modern Laptops, Tablets, and Smartphones.</p>
        </div>
      `
    },
    {
      title: "2.5 Fifth Generation Computers (Present &amp; Future &mdash; AI &amp; Biochips)",
      content: `
        <p>Fourth generation computers are extraordinarily fast and capable, but they operate strictly by following pre-programmed human instructions. They do not possess independent thinking power, creative intuition, or common sense, and they cannot understand natural spoken human languages without specialized translation software.</p>
        
        <p>To overcome these limitations, computer scientists and engineers are actively developing <strong>Fifth Generation Computers</strong> &mdash; systems powered by <strong>Artificial Intelligence (AI)</strong>, <strong>Biochips (molecular electronics)</strong>, and <strong>Ultra Large Scale Integration (ULSI)</strong> / <strong>Quantum Computing</strong>.</p>

        <figure class="note-figure">
          <img src="assets/images/class7chapter2/biochip.jpg" alt="Fifth Generation Computer Technology - Molecular Biochip Research for Artificial Intelligence" class="note-figure-img">
          <figcaption class="note-caption">
            Figure 2.5: Biochip Research &mdash; Molecular Electronic Components for Fifth Generation Artificial Intelligence Systems
            <span style="display: block; font-size: 0.76rem; color: var(--text-muted); margin-top: 0.25rem; font-style: italic;">[Source: Wikipedia / Wikimedia Commons]</span>
          </figcaption>
        </figure>

        <h3>Anticipated Features of Fifth Generation Computers:</h3>
        <ol type="a">
          <li><strong>Independent Thinking Power:</strong> Endowed with artificial intelligence to reason and solve complex problems logically.</li>
          <li><strong>Autonomous Decision-Making:</strong> Ability to assess situations and make independent decisions without human intervention.</li>
          <li><strong>Self-Learning Capabilities:</strong> Continuously learning from experience, accumulated data patterns, and trial-and-error (Machine Learning / Deep Learning).</li>
          <li><strong>Colossal Internal Storage:</strong> Ultra-dense molecular biochip and quantum memory structures with near-limitless storage capacity.</li>
          <li><strong>Extraordinarily High Processing Speed:</strong> Ultrafast processing speeds executing trillions of operations per second.</li>
          <li><strong>Massive Parallel Processing:</strong> Simultaneous execution of millions of instructions across parallel quantum/neural processing cores.</li>
          <li><strong>Natural Language Processing (NLP):</strong> Directly understanding, interpreting, and speaking natural human languages like English, Nepali, Japanese, etc.</li>
        </ol>
      `
    },
    {
      title: "2.6 Technical Terms &amp; Chapter Recap",
      content: `
        <h3>Key Technical Terms Defined:</h3>
        <div class="qa-card">
          <div class="qa-card-q">Transistor</div>
          <div class="qa-card-a">A device composed of semiconductor material that amplifies an electronic signal or opens and closes an electric circuit. Invented in 1947 at Bell Labs, transistors are the fundamental building blocks of all modern digital circuits and microprocessors.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">Integrated Circuit (IC / Chip)</div>
          <div class="qa-card-a">A small piece of semiconducting material (usually silicon) on which an entire electronic circuit containing hundreds to thousands of transistors, diodes, and resistors is embedded. A typical chip is smaller than 1/4 square inch.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">Microprocessor</div>
          <div class="qa-card-a">A single integrated circuit chip where millions of transistors are densely fabricated. The microprocessor functions as the complete CPU of a computer and is manufactured using Very Large Scale Integration (VLSI).</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">Artificial Intelligence (AI)</div>
          <div class="qa-card-a">AI technology (also called the <em>knowledge processor</em>) refers to software programs and architectures that allow machines to think, learn, and make intelligent decisions for themselves. Specialized languages such as <strong>LISP</strong> (List Processor) and <strong>PROLOG</strong> (Programming with Logic) are used by scientists (such as at ICOT in Japan) to develop AI software.</div>
        </div>

        <h3>Chapter Recap &mdash; Key Summary Points:</h3>
        <div class="callout callout-quickcheck">
          <ul style="margin-bottom: 0; padding-left: 1.25rem;">
            <li>The development of computers that took place in each distinct time period is known as the <strong>generation of computer</strong>.</li>
            <li><strong>Vacuum tubes (valves)</strong> were the main electronic components used in the first generation computers.</li>
            <li><strong>Transistors</strong> were used as the main electronic components in the second generation computers.</li>
            <li><strong>Integrated Circuits (ICs)</strong> were used as the main electronic components in the third generation computers.</li>
            <li><strong>Microprocessors (VLSI)</strong> are used as the main electronic components in the fourth generation computers.</li>
            <li>The <strong>fifth generation computers</strong> will incorporate biochips, parallel processing, and artificial intelligence.</li>
          </ul>
        </div>

        <!-- Educational Asset Attributions & Source Credits -->
        <div class="callout callout-doyouknow" style="margin-top: 1.75rem;">
          <div class="callout-title">📷 Educational Image Attributions &amp; Source Credits</div>
          <p style="margin-bottom: 0.5rem; font-size: 0.9rem;">The educational component reference images featured in this chapter (Vacuum Tubes to Biochips) are credited to open public and educational archives:</p>
          <ul style="margin-bottom: 0; font-size: 0.88rem; padding-left: 1.25rem;">
            <li><strong>Vacuum Tubes, Semiconductor Transistors, Integrated Circuit (IC), and Biochip Microarray:</strong> Sourced from <em>Wikipedia / Wikimedia Commons</em> (Public Domain &amp; Creative Commons educational archives).</li>
            <li><strong>LSI &amp; VLSI Microprocessor Scale of Integration:</strong> Extracted from <em>VLSI Verify</em> (<a href="https://vlsiverify.com" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline; font-weight: 700;">vlsiverify.com</a>).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 2 (Generation of Computer)",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">📚 TEXTBOOK EXERCISE SOLUTIONS &mdash; PAGES 29 &amp; 30</div>
          <p>Complete, accurate, and student-friendly solutions for all exercise questions from <em>Innovative Computer Science &mdash; Book 7</em>, Chapter 2 (Generation of Computer).</p>
        </div>

        <!-- 1. Answer the following questions -->
        <h3>1. Answer the Following Questions:</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is the generation of a computer? List the different generations of computers.</div>
          <div class="qa-card-a">
            <p><strong>Definition:</strong> The development of computers that took place in each major time period based on significant advancements in computer technology is known as the <strong>generation of computer</strong>.</p>
            <p><strong>Different Generations of Computers:</strong></p>
            <ol>
              <li><strong>First Generation Computers (1946 &ndash; 1958 AD):</strong> Used <em>Vacuum Tubes (Valves)</em>.</li>
              <li><strong>Second Generation Computers (1959 &ndash; 1964 AD):</strong> Used <em>Transistors</em>.</li>
              <li><strong>Third Generation Computers (1965 &ndash; 1971 AD):</strong> Used <em>Integrated Circuits (ICs / Chips)</em>.</li>
              <li><strong>Fourth Generation Computers (1971 AD &ndash; Present):</strong> Uses <em>Microprocessors (LSI / VLSI)</em>.</li>
              <li><strong>Fifth Generation Computers (Present &amp; Future):</strong> Will use <em>Biochips &amp; Artificial Intelligence (AI)</em>.</li>
            </ol>

            <!-- Student-Friendly Diagram of Generations -->
            <div style="margin: 1.25rem 0; padding: 1rem; background: var(--background); border: 2px solid var(--primary-border); border-radius: var(--radius); text-align: center;">
              <div style="font-weight: 800; color: var(--primary); font-size: 0.92rem; margin-bottom: 0.75rem; text-transform: uppercase;">
                📊 Visual Summary: The 5 Generations of Computers
              </div>
              <div style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
                <div style="background: var(--surface); border: 2px solid #ef4444; border-radius: var(--radius-sm); padding: 0.6rem; min-width: 105px;">
                  <strong style="color: #ef4444; font-size: 0.85rem;">1st Gen</strong><br>
                  <span style="font-size: 0.8rem; font-weight: 700;">Vacuum Tube</span>
                </div>
                <div style="background: var(--surface); border: 2px solid #f59e0b; border-radius: var(--radius-sm); padding: 0.6rem; min-width: 105px;">
                  <strong style="color: #f59e0b; font-size: 0.85rem;">2nd Gen</strong><br>
                  <span style="font-size: 0.8rem; font-weight: 700;">Transistor</span>
                </div>
                <div style="background: var(--surface); border: 2px solid #3b82f6; border-radius: var(--radius-sm); padding: 0.6rem; min-width: 105px;">
                  <strong style="color: #3b82f6; font-size: 0.85rem;">3rd Gen</strong><br>
                  <span style="font-size: 0.8rem; font-weight: 700;">IC (Chip)</span>
                </div>
                <div style="background: var(--surface); border: 2px solid #10b981; border-radius: var(--radius-sm); padding: 0.6rem; min-width: 105px;">
                  <strong style="color: #10b981; font-size: 0.85rem;">4th Gen</strong><br>
                  <span style="font-size: 0.8rem; font-weight: 700;">Microprocessor</span>
                </div>
                <div style="background: var(--surface); border: 2px solid #8b5cf6; border-radius: var(--radius-sm); padding: 0.6rem; min-width: 105px;">
                  <strong style="color: #8b5cf6; font-size: 0.85rem;">5th Gen</strong><br>
                  <span style="font-size: 0.8rem; font-weight: 700;">Biochip &amp; AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. List any four major drawbacks of the first-generation computers.</div>
          <div class="qa-card-a">
            <p>Four major drawbacks of first-generation computers were:</p>
            <ol>
              <li>They consumed a vast amount of electrical power and produced huge quantities of heat, requiring continuous air conditioning.</li>
              <li>They were very large in physical size, occupying entire rooms and weighing tens of tons.</li>
              <li>They had slow processing speeds and very limited internal storage capacity.</li>
              <li>Their lifespan was short and they were not reliable because vacuum tubes frequently burned out.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. List any four features of the second-generation computers.</div>
          <div class="qa-card-a">
            <p>Four key features of second-generation computers were:</p>
            <ol>
              <li>They used <strong>transistors</strong> as their primary electronic component instead of vacuum tubes.</li>
              <li>They were smaller, faster, less expensive, and much more reliable than first generation computers.</li>
              <li>They consumed less electric power and produced substantially less heat.</li>
              <li>They supported <strong>Assembly language</strong> and early high-level programming languages such as FORTRAN and COBOL.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. List any four features of the Third Generation Computers.</div>
          <div class="qa-card-a">
            <p>Four major features of third-generation computers were:</p>
            <ol>
              <li>They used <strong>Integrated Circuits (ICs / Chips)</strong> as their main electronic component.</li>
              <li>They introduced interactive <strong>keyboards</strong> for input and <strong>monitors</strong> for visual output, replacing punched cards.</li>
              <li>They utilized <strong>operating systems</strong> capable of running multiple programs simultaneously (multiprogramming).</li>
              <li>They were substantially smaller in size, faster in speed (nanoseconds), cheaper, and consumed less electricity than second generation computers.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. List any four features that will be in the fifth generation of computers.</div>
          <div class="qa-card-a">
            <p>Four prominent features expected in fifth-generation computers are:</p>
            <ol>
              <li>Having their own <strong>independent thinking power</strong> and reasoning capability through Artificial Intelligence (AI).</li>
              <li>Ability to <strong>make autonomous decisions</strong> by themselves based on data patterns.</li>
              <li>Ability to directly <strong>understand and process natural human languages</strong> (like English, Nepali, Japanese).</li>
              <li>Having <strong>capabilities of self-learning</strong> and ultra-fast parallel processing using biochips and quantum technology.</li>
            </ol>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. List the main component used in each generation of computer.</div>
          <div class="qa-card-a">
            <div class="table-responsive">
              <table class="notes-table">
                <thead>
                  <tr>
                    <th>Generation</th>
                    <th>Main Electronic Component</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>1st Generation</strong></td><td><strong>Vacuum Tube (Valve)</strong></td></tr>
                  <tr><td><strong>2nd Generation</strong></td><td><strong>Transistor</strong></td></tr>
                  <tr><td><strong>3rd Generation</strong></td><td><strong>Integrated Circuit (IC / Silicon Chip)</strong></td></tr>
                  <tr><td><strong>4th Generation</strong></td><td><strong>Microprocessor (VLSI / ULSI)</strong></td></tr>
                  <tr><td><strong>5th Generation</strong></td><td><strong>Biochip &amp; Artificial Intelligence (AI)</strong></td></tr>
                </tbody>
              </table>
            </div>
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
              <tr><td><strong>a. IC</strong></td><td>Integrated Circuit</td></tr>
              <tr><td><strong>b. VLSI</strong></td><td>Very Large Scale Integration</td></tr>
              <tr><td><strong>c. AI</strong></td><td>Artificial Intelligence</td></tr>
              <tr><td><strong>d. PROLOG</strong></td><td>Programming with Logic</td></tr>
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
                <td><strong>a.</strong> The main electronic component used in the first-generation computer was the vacuum tube.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Vacuum tubes (valves) were the core switching component of the 1st generation (1946&ndash;1958 AD).</td>
              </tr>
              <tr>
                <td><strong>b.</strong> Punched cards were used for input and printouts for output in the first generation computers.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Both first and second generation computers utilized punched cards for data input and paper printouts for output.</td>
              </tr>
              <tr>
                <td><strong>c.</strong> The second-generation computers used keyboards and monitors for the input and output of data.</td>
                <td><strong style="color: #dc2626;">False</strong></td>
                <td>Keyboards and monitors were introduced in the <strong>third generation</strong>; the 2nd generation used punched cards and printouts.</td>
              </tr>
              <tr>
                <td><strong>d.</strong> The fourth generation of computers is based on microprocessors.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Fourth generation computers are powered by LSI and VLSI microprocessors.</td>
              </tr>
              <tr>
                <td><strong>e.</strong> The fifth-generation computer will have artificial intelligence.</td>
                <td><strong style="color: #16a34a;">True</strong></td>
                <td>Fifth generation computing aims to achieve human-like artificial intelligence (AI).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 4. Fill in the blanks -->
        <h3>4. Fill in the Blanks:</h3>
        <div class="callout callout-quickcheck">
          <ul style="margin-bottom: 0; padding-left: 1.25rem;">
            <li><strong>a.</strong> <strong><u>Vacuum tube (valve)</u></strong> was the main component in the first generation computer.</li>
            <li><strong>b.</strong> The IC is also called <strong><u>chip</u></strong>.</li>
            <li><strong>c.</strong> <strong><u>Intel 4004</u></strong> was the first microprocessor which was developed in 1971 AD.</li>
            <li><strong>d.</strong> LSI and VLSI are used in the <strong><u>fourth</u></strong> generation computers.</li>
            <li><strong>e.</strong> The fifth generation computers will have their own <strong><u>thinking</u></strong> power.</li>
          </ul>
        </div>

        <!-- 5. Choose the correct option -->
        <h3>5. Choose the Correct Option:</h3>
        <div class="step-card-grid">
          <div class="step-card">
            <span class="step-badge">a</span>
            <span>....... was used as the main electronic component of the first generation computer.<br>
            <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii) Vacuum Tube</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: i) Microprocessor &bull; ii) IC &bull; iii) Vacuum Tube &bull; iv) Transistor)</span></span>
          </div>
          <div class="step-card">
            <span class="step-badge">b</span>
            <span>......... was used as the main electronic components in the second generation computers.<br>
            <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii) Transistor</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: i) Valve &bull; ii) IC &bull; iii) Transistor &bull; iv) None of above)</span></span>
          </div>
          <div class="step-card">
            <span class="step-badge">c</span>
            <span>The main electronic component of third generation computer was.....<br>
            <strong>Correct Option:</strong> <strong style="color: var(--primary);">ii) IC</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: i) VLSI &bull; ii) IC &bull; iii) ULSI &bull; iv) Valve)</span></span>
          </div>
          <div class="step-card">
            <span class="step-badge">d</span>
            <span>The main electronic component in the circuitry of the fourth generation computers are ..........<br>
            <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii) Microprocessor</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: i) IC &bull; ii) ULSI &bull; iii) Microprocessor &bull; iv) Biochip)</span></span>
          </div>
          <div class="step-card">
            <span class="step-badge">e</span>
            <span>The ..... generation computers will have artificial intelligence.<br>
            <strong>Correct Option:</strong> <strong style="color: var(--primary);">iii) 5th</strong><br>
            <span style="font-size: 0.82rem; color: var(--text-muted);">(Options: i) 3rd &bull; ii) 4th &bull; iii) 5th &bull; iv) 6th)</span></span>
          </div>
        </div>

        <!-- 6. Match the following -->
        <h3>6. Match the Following:</h3>
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
                <td><strong>a. Valve</strong></td>
                <td><strong>iii. First Generation Computer</strong></td>
              </tr>
              <tr>
                <td><strong>b. Biochip</strong></td>
                <td><strong>iv. Fifth Generation Computer</strong></td>
              </tr>
              <tr>
                <td><strong>c. VLSI</strong></td>
                <td><strong>i. Fourth Generation Computer</strong></td>
              </tr>
              <tr>
                <td><strong>d. Transistor</strong></td>
                <td><strong>v. Second Generation Computer</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: -0.5rem;"><em>Note: Option (ii) "Third Generation Computer" is a distractor in Group 'B' (which used Integrated Circuits / ICs).</em></p>
      `
    }
  ]
};

// 3. Update ONLY Class 7 Chapter 2 in currentNotes
const class7Chapters = currentNotes.class7.computerScience;
const ch2Index = class7Chapters.findIndex(ch => ch.chapterNumber === 2);

if (ch2Index !== -1) {
  class7Chapters[ch2Index] = ch2Data;
} else {
  class7Chapters.push(ch2Data);
}

// 4. Construct updated full data object preserving ALL other classes & chapters
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (all 18 chapters intact)
  class7: currentNotes.class7, // ONLY Chapter 2 updated, all other 21 chapters intact
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
console.log('Successfully updated Class 7 Chapter 2 with image sources while preserving all other chapters!');

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
