/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = {
  "class6": {
    "computerScience": [
      {
        "id": "class6-cs-ch1",
        "chapterNumber": 1,
        "title": "Computer Fundamental",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "author": "Innovative Computer Science &mdash; Book 6, Chapter 1",
        "summary": "Fundamental concepts of computers, definition, IPO cycle, speed units, characteristics, application areas, and complete textbook exercise solutions.",
        "topics": [
          {
            "title": "1.0 Introduction to Computers",
            "content": "\n              <p>A <strong>computer</strong> is an electronic machine that can be programmed to perform a variety of tasks at very high speed and accurately.</p>\n              <ul>\n                <li>It accepts data and instructions from a user, processes the data according to the given instructions, and produces meaningful information as output.</li>\n                <li>Besides processing data, a computer is widely used for creating documents, spreadsheets, databases, presentations, and graphics.</li>\n                <li><strong>Internet Services:</strong> Using a computer, you can access World Wide Web (WWW), file transferring, emails, online chatting, and video conferencing.</li>\n                <li><strong>Special Applications:</strong> Computers are connected to devices for composing music, adding special effects in movies/songs, controlling Automated Teller Machines (ATM), monitoring patients in hospitals, and supporting scientific research.</li>\n              </ul>\n            "
          },
          {
            "title": "1.1 What is a Computer? & IPO Principle",
            "content": "\n              <p><strong>Definition:</strong> A computer is a programmable electronic machine that takes data and instructions, processes them, produces information, and stores information in its memory.</p>\n\n              <h3>Input-Process-Output (IPO) Principle</h3>\n              <p>A computer works on the principle of <strong>Input-Process-Output (IPO)</strong>:</p>\n              <ul>\n                <li><strong>Input:</strong> Accepts data and instructions from the user.</li>\n                <li><strong>Process:</strong> Processes data according to instructions using the Central Processing Unit (CPU).</li>\n                <li><strong>Output:</strong> Produces meaningful information as output.</li>\n              </ul>\n\n              <div class=\"ui-figure\">\n                <div class=\"ui-figure-header\">🔄 Figure 1.1: Input-Process-Output (IPO) Cycle</div>\n                <div class=\"ui-window-box\" style=\"text-align: center;\">\n                  <div style=\"display: flex; justify-content: space-around; align-items: center; gap: 0.5rem; flex-wrap: wrap;\">\n                    <div style=\"border: 2px solid var(--primary); padding: 0.8rem 1.2rem; border-radius: 8px; background: var(--surface);\">\n                      <strong style=\"color: var(--primary);\">INPUT</strong><br>\n                      <span style=\"font-size: 0.85rem; color: var(--text-muted);\">Data &amp; Instructions<br>(Keyboard &amp; Mouse)</span>\n                    </div>\n                    <div style=\"font-size: 1.5rem; color: var(--primary); font-weight: 900;\">&rarr;</div>\n                    <div style=\"border: 2px solid var(--accent); padding: 0.8rem 1.2rem; border-radius: 8px; background: var(--surface);\">\n                      <strong style=\"color: var(--accent);\">PROCESS</strong><br>\n                      <span style=\"font-size: 0.85rem; color: var(--text-muted);\">Central Processing Unit<br>(CPU)</span>\n                    </div>\n                    <div style=\"font-size: 1.5rem; color: var(--primary); font-weight: 900;\">&rarr;</div>\n                    <div style=\"border: 2px solid #16a34a; padding: 0.8rem 1.2rem; border-radius: 8px; background: var(--surface);\">\n                      <strong style=\"color: #16a34a;\">OUTPUT</strong><br>\n                      <span style=\"font-size: 0.85rem; color: var(--text-muted);\">Meaningful Information<br>(Monitor &amp; Printer)</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"ui-figure-caption\">Data is inputted, processed by CPU, and given as output information</div>\n              </div>\n\n              <div class=\"callout callout-remember\">\n                <div class=\"callout-title\">📌 PROGRAM DEFINITION</div>\n                <p>The set of instructions given to a computer to perform a task is known as a <strong>program</strong>.</p>\n              </div>\n            "
          },
          {
            "title": "1.2 Four Main Functions of Computer (IPO & Storage)",
            "content": "\n              <div class=\"step-card-grid\">\n                <div class=\"step-card\"><span class=\"step-badge\">1</span><span><strong>Input:</strong> Feeding data &amp; instructions into computer using input devices (Keyboard, Mouse, Scanner, Microphone, Camera).</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">2</span><span><strong>Process:</strong> CPU treats data according to instructions to convert it into meaningful information.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">3</span><span><strong>Output:</strong> Displaying outcome or information to user using output devices (Monitor, Printer, Speaker).</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">4</span><span><strong>Storage:</strong> Storing data permanently or temporarily on storage devices (Hard Disk, SSD, Pen Drive, Optical Disk).</span></div>\n              </div>\n            "
          },
          {
            "title": "1.3 Characteristics of Computer",
            "content": "\n              <p>Computers are useful in almost all fields because of their wonderful characteristics:</p>\n\n              <h3>a. Speed</h3>\n              <p>A computer performs tasks at very high speed (completing in seconds what humans do in days). Speed is determined by the microprocessor, measured in Hertz (Hz), Megahertz (MHz), or Gigahertz (GHz).</p>\n              \n              <div class=\"table-responsive\">\n                <table class=\"notes-table\">\n                  <thead>\n                    <tr><th>Unit of Time</th><th>Part of Second</th><th>Power of 10</th></tr>\n                  </thead>\n                  <tbody>\n                    <tr><td><strong>Millisecond (ms)</strong></td><td>1/1,000 (One Thousandth)</td><td>10<sup>-3</sup></td></tr>\n                    <tr><td><strong>Microsecond (&mu;s)</strong></td><td>1/1,000,000 (One Millionth)</td><td>10<sup>-6</sup></td></tr>\n                    <tr><td><strong>Nanosecond (ns)</strong></td><td>1/1,000,000,000 (One Billionth)</td><td>10<sup>-9</sup></td></tr>\n                    <tr><td><strong>Picosecond (ps)</strong></td><td>1/1,000,000,000,000 (One Trillionth)</td><td>10<sup>-12</sup></td></tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <div class=\"callout callout-doyouknow\">\n                <div class=\"callout-title\">💡 MEASURING COMPUTER SPEEDS</div>\n                <p>Mainframe computer speed is measured in <strong>FLOPS</strong> (Floating Point Operations Per Second), and supercomputer speed is measured in <strong>Teraflops</strong>.</p>\n              </div>\n\n              <h3>b. Accuracy</h3>\n              <p>A computer produces 100% accurate results as long as correct data and instructions are provided.</p>\n              <ul>\n                <li><strong>GIGO (Garbage In Garbage Out):</strong> If wrong data or instructions are fed to a computer, it produces wrong information.</li>\n                <li><strong>Bug:</strong> An error or fault in a software program or device is called a bug.</li>\n              </ul>\n\n              <h3>c. Diligence</h3>\n              <p>A computer can work continuously for long hours without losing speed or accuracy. It does not get tired or bored like humans.</p>\n\n              <h3>d. Versatility</h3>\n              <p>A computer can perform completely different types of tasks (typing documents, playing music, drawing, calculating payrolls, ICU monitoring).</p>\n\n              <h3>e. Storage</h3>\n              <p>A computer can store huge amounts of data on secondary storage devices. Storage capacity is measured in Bytes (1 character occupies 1 byte of memory space).</p>\n\n              <h3>f. Automatic</h3>\n              <p>A computer performs tasks automatically once the instructions are fed into it.</p>\n            "
          },
          {
            "title": "1.4 Application Areas of Computers",
            "content": "\n              <div class=\"step-card-grid\">\n                <div class=\"step-card\"><span class=\"step-badge\">🏫</span><span><strong>Education Sector:</strong> Used in school computer labs, practical training, classroom multimedia presentations, and online educational research.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">🏥</span><span><strong>Medical Sector:</strong> Used in hospitals to store patient records, conduct clinical tests, monitor heart rate, and assist surgical operations.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">🏦</span><span><strong>Financial &amp; Banking Sector:</strong> Tracks customer accounts, updates balances automatically, calculates interest, and enables online banking.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">🏢</span><span><strong>Offices:</strong> Used to prepare documents, presentations, salary sheets, and provide online government services.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">🎮</span><span><strong>Entertainment Sector:</strong> Used to play games, listen to music, watch movies, edit videos, and animate cartoon shows (e.g. Tom and Jerry).</span></div>\n              </div>\n            "
          },
          {
            "title": "Chapter Summary & Recap",
            "content": "\n              <div class=\"callout callout-remember\">\n                <div class=\"callout-title\">📚 RECAP SUMMARY</div>\n                <ul>\n                  <li>A computer works on the Input-Process-Output (IPO) principle.</li>\n                  <li>A computer is a programmable electronic machine that takes data, processes it, and stores information.</li>\n                  <li>Set of instructions given to a computer is known as a <strong>program</strong>.</li>\n                  <li>Main characteristics: Speed, Accuracy, Diligence, Versatility, Storage, and Automatic.</li>\n                  <li>GIGO stands for Garbage In Garbage Out; Bug means an error in a program or device.</li>\n                  <li>Computers are used in education, medical, banking, offices, and entertainment sectors.</li>\n                </ul>\n              </div>\n            "
          },
          {
            "title": "Textbook Exercise Solutions &mdash; Chapter 1 (Computer Fundamental)",
            "content": "\n              <h2>Innovative Computer Science &mdash; Book 6, Chapter 1 Complete Exercise Solutions</h2>\n\n              <h3>1. Answer the Following Questions</h3>\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">a. Define a computer? What are the uses of computers?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> A computer is a programmable electronic machine that accepts raw data and instructions, processes them into meaningful information, and stores them.\n                <br><em>Uses:</em> Computers are used for typing documents, making spreadsheets, playing games, browsing the internet, managing bank accounts, and storing patient records in hospitals.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">b. What is IPO? Explain it with a diagram.</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> IPO stands for Input-Process-Output. It is the fundamental principle on which a computer operates, where input data is processed by the CPU to produce output information.\n                <br><br><strong>Diagram:</strong>\n                <pre style=\"background: var(--background); color: var(--text); padding: 0.5rem 1rem; border-radius: 6px; font-weight: 700;\">INPUT (Data &amp; Instructions)  &rarr;  PROCESS (CPU)  &rarr;  OUTPUT (Information)</pre>\n                </div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">c. List the different characteristics of a computer.</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> The main characteristics of a computer are:\n                <ol>\n                  <li>Speed</li>\n                  <li>Accuracy</li>\n                  <li>Diligence</li>\n                  <li>Versatility</li>\n                  <li>Storage Capacity</li>\n                  <li>Automatic</li>\n                </ol></div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">d. What are GIGO and Bug?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong>\n                <ul>\n                  <li><strong>GIGO (Garbage In Garbage Out):</strong> It means if wrong data or instructions are fed into a computer, it will produce wrong information.</li>\n                  <li><strong>Bug:</strong> A fault or error in a computer device or software program is called a bug.</li>\n                </ul></div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">e. Why is a computer called a diligent machine?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> A computer is called a diligent machine because it can work continuously for long hours performing millions of calculations without getting tired or losing speed and accuracy.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">f. Why is a computer called a versatile machine?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> A computer is called a versatile machine because it can perform different types of tasks such as typing documents, playing music, drawing pictures, and managing examination results.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">g. Why do people use computers?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> People use computers because they perform tasks very fast, accurately, automatically, and can store massive amounts of data for future use.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">h. How are computers used in the education sector?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> In education, computers are used in computer labs for practical training, in classrooms for multimedia video lessons, and by students for educational web research.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">i. Why is a computer used in the medical sector?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> In the medical sector, computers are used to store patient medical records, conduct lab tests, monitor heart rate, and assist doctors in surgical operations.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">j. What is the use of computers in the financial sector?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> In the financial and banking sector, computers are used to track customer accounts, calculate payments and interest, and provide online banking services.</div>\n              </div>\n\n              <div class=\"qa-card\">\n                <div class=\"qa-card-q\">k. How are computers used in offices?</div>\n                <div class=\"qa-card-a\"><strong>Answer:</strong> In offices, computers are used to prepare documents, presentations, salary sheets, and provide online public services.</div>\n              </div>\n\n              <h3>2. Write the Full Form of the Following</h3>\n              <div class=\"table-responsive\">\n                <table class=\"notes-table\">\n                  <thead>\n                    <tr><th>Abbreviation</th><th>Full Form</th></tr>\n                  </thead>\n                  <tbody>\n                    <tr><td><strong>a. IPO</strong></td><td>Input-Process-Output</td></tr>\n                    <tr><td><strong>b. CPU</strong></td><td>Central Processing Unit</td></tr>\n                    <tr><td><strong>c. FLOP</strong></td><td>Floating Point Operation</td></tr>\n                    <tr><td><strong>d. GIGO</strong></td><td>Garbage In Garbage Out</td></tr>\n                    <tr><td><strong>e. ATM</strong></td><td>Automated Teller Machine</td></tr>\n                    <tr><td><strong>f. ICU</strong></td><td>Intensive Care Unit</td></tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <h3>3. State Whether the Following Statements are True or False</h3>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">a. A computer processes data and produces output as information.</div><div class=\"qa-card-a\"><strong>TRUE</strong></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">b. A computer can be used to perform any task.</div><div class=\"qa-card-a\"><strong>TRUE</strong></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">c. A mainframe computer is faster than a supercomputer.</div><div class=\"qa-card-a\"><strong>FALSE</strong> <em>(Supercomputers are the fastest computers.)</em></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">d. Even if you feed correct data and instructions, the computer will occasionally produce incorrect information.</div><div class=\"qa-card-a\"><strong>FALSE</strong> <em>(Computers produce 100% accurate output if input is correct.)</em></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">e. A computer loses its accuracy and speed when it has to perform the same calculation repeatedly.</div><div class=\"qa-card-a\"><strong>FALSE</strong> <em>(Computers maintain the exact same speed and accuracy indefinitely.)</em></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">f. You can use a computer to prepare only spreadsheets, documents and presentations.</div><div class=\"qa-card-a\"><strong>FALSE</strong> <em>(Computers are also used for games, medical research, banking, etc.)</em></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">g. The storage capacity of a storage device is measured in BIT.</div><div class=\"qa-card-a\"><strong>FALSE</strong> <em>(Storage capacity is measured in Bytes, KB, MB, GB, TB.)</em></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">h. Computers can be used to provide online services like buying and selling goods, booking tickets and rooms in hotels, etc.</div><div class=\"qa-card-a\"><strong>TRUE</strong></div></div>\n              <div class=\"qa-card\"><div class=\"qa-card-q\">i. Cartoon movies like Tom and Jerry, Ninja Hattori, etc. can be developed with the help of computers.</div><div class=\"qa-card-a\"><strong>TRUE</strong></div></div>\n\n              <h3>4. Fill in the Blanks</h3>\n              <p><strong>a.</strong> A computer performs task on the principle of Input, <u>Process</u> and <u>Output</u>.</p>\n              <p><strong>b.</strong> A set of instructions given to computer to perform tasks is known as <u>program</u>.</p>\n              <p><strong>c.</strong> The speed of mainframe computer is measured in <u>FLOPS</u>.</p>\n              <p><strong>d.</strong> <u>Bug</u> is fault in a device or error in a program.</p>\n              <p><strong>e.</strong> To store three characters a computer occupies <u>3</u> bytes memory space.</p>\n              <p><strong>f.</strong> A computer perform tasks automatically once the <u>instruction (or program)</u> is given.</p>\n\n              <h3>5. Match the Following</h3>\n\n              <h4>Match i:</h4>\n              <div class=\"table-responsive\">\n                <table class=\"notes-table\">\n                  <thead>\n                    <tr><th>Group 'A'</th><th>Matched Group 'B'</th></tr>\n                  </thead>\n                  <tbody>\n                    <tr><td>a. Data</td><td>ii. Raw facts or figures</td></tr>\n                    <tr><td>b. Information</td><td>iii. Processed data</td></tr>\n                    <tr><td>c. Program</td><td>i. A set of instructions</td></tr>\n                    <tr><td>d. GIGO</td><td>v. Wrong instructions or data</td></tr>\n                  </tbody>\n                </table>\n              </div>\n\n              <h4>Match ii:</h4>\n              <div class=\"table-responsive\">\n                <table class=\"notes-table\">\n                  <thead>\n                    <tr><th>Group 'A'</th><th>Matched Group 'B'</th></tr>\n                  </thead>\n                  <tbody>\n                    <tr><td>a. Diligence</td><td>iii. Capability of performing tasks for long time</td></tr>\n                    <tr><td>b. Versatile</td><td>ii. Capability of performing a variety of tasks</td></tr>\n                    <tr><td>c. Automatic</td><td>iv. Capability of performing tasks once the instructions are given</td></tr>\n                    <tr><td>d. Accuracy</td><td>i. Capability of producing correct information</td></tr>\n                  </tbody>\n                </table>\n              </div>\n            "
          }
        ]
      },
      {
        "id": "class6-cs-ch2",
        "chapterNumber": 2,
        "title": "Computer Hardware",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Tangible physical parts of a computer system, internal and external hardware.",
        "topics": [
          {
            "title": "1. Introduction to Hardware",
            "content": "<p>Notes for Class 6 Chapter 2 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch3",
        "chapterNumber": 3,
        "title": "Input and Output Devices",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Keyboards, mice, scanners, monitors, printers, and speakers.",
        "topics": [
          {
            "title": "1. Introduction to Input & Output Devices",
            "content": "<p>Notes for Class 6 Chapter 3 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch4",
        "chapterNumber": 4,
        "title": "Storage Devices",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Primary memory (RAM, ROM) and secondary storage (Hard Disk, SSD, Pen Drive).",
        "topics": [
          {
            "title": "1. Introduction to Storage Devices",
            "content": "<p>Notes for Class 6 Chapter 4 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch5",
        "chapterNumber": 5,
        "title": "Computer Software",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "System software vs application software and utility programs.",
        "topics": [
          {
            "title": "1. Introduction to Software",
            "content": "<p>Notes for Class 6 Chapter 5 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch6",
        "chapterNumber": 6,
        "title": "Working with Windows 11",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Windows 11 operating system basics, desktop interface, and file management.",
        "topics": [
          {
            "title": "1. Introduction to Windows 11",
            "content": "<p>Notes for Class 6 Chapter 6 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch7",
        "chapterNumber": 7,
        "title": "Programming Language and Programming Tools",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Concept of computer programming languages, translators, and logic building.",
        "topics": [
          {
            "title": "1. Introduction to Programming",
            "content": "<p>Notes for Class 6 Chapter 7 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch8",
        "chapterNumber": 8,
        "title": "Block Programming - Scratch",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Introduction to visual block coding, sprites, scripts, and animations in Scratch.",
        "topics": [
          {
            "title": "1. Introduction to Scratch",
            "content": "<p>Notes for Class 6 Chapter 8 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch9",
        "chapterNumber": 9,
        "title": "Programming Language - Python",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Basic syntax, print statements, and simple scripts in Python.",
        "topics": [
          {
            "title": "1. Introduction to Python",
            "content": "<p>Notes for Class 6 Chapter 9 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch10",
        "chapterNumber": 10,
        "title": "Word Processing",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Creating, editing, formatting, and saving documents in word processor.",
        "topics": [
          {
            "title": "1. Introduction to Word Processing",
            "content": "<p>Notes for Class 6 Chapter 10 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch11",
        "chapterNumber": 11,
        "title": "Spreadsheet",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Worksheet basics, rows, columns, cells, and simple calculations.",
        "topics": [
          {
            "title": "1. Introduction to Spreadsheet",
            "content": "<p>Notes for Class 6 Chapter 11 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch12",
        "chapterNumber": 12,
        "title": "Presentation Package",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Creating slides, adding titles, pictures, and running simple slide shows.",
        "topics": [
          {
            "title": "1. Introduction to Presentation Package",
            "content": "<p>Notes for Class 6 Chapter 12 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch13",
        "chapterNumber": 13,
        "title": "ICT, Cyber Ethics, And Cyber Law",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Information communication technology, internet safety, ethics, and cyber rules.",
        "topics": [
          {
            "title": "1. Introduction to ICT & Cyber Ethics",
            "content": "<p>Notes for Class 6 Chapter 13 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch14",
        "chapterNumber": 14,
        "title": "Computer Graphics",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Introduction to digital drawing, graphic design tools, and image formats.",
        "topics": [
          {
            "title": "1. Introduction to Computer Graphics",
            "content": "<p>Notes for Class 6 Chapter 14 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch15",
        "chapterNumber": 15,
        "title": "Multimedia",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Text, audio, video, animation, and interactive media concepts.",
        "topics": [
          {
            "title": "1. Introduction to Multimedia",
            "content": "<p>Notes for Class 6 Chapter 15 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch16",
        "chapterNumber": 16,
        "title": "Termwise Syllabus",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Term-wise curriculum breakdown and learning objectives for Class 6.",
        "topics": [
          {
            "title": "1. Syllabus Overview",
            "content": "<p>Notes for Termwise Syllabus will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch17",
        "chapterNumber": 17,
        "title": "Model Question",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Sample examination paper and model question solutions for Class 6.",
        "topics": [
          {
            "title": "1. Model Question Set",
            "content": "<p>Notes for Model Question will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class6-cs-ch18",
        "chapterNumber": 18,
        "title": "Terminology",
        "subject": "Computer Science",
        "className": "Class 6",
        "updated": "2026-09-15",
        "summary": "Glossary of computer science terms and definitions for Class 6.",
        "topics": [
          {
            "title": "1. Computer Terms Glossary",
            "content": "<p>Notes for Terminology will be added soon. [Add your notes here]</p>"
          }
        ]
      }
    ]
  },
  "class7": {
    "computerScience": []
  },
  "class8": {
    "computerScience": [
      {
        "id": "class8-cs-ch1",
        "chapterNumber": 1,
        "title": "Computer and Its Development History",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Detailed history of computing machines and pioneers.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 1 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch2",
        "chapterNumber": 2,
        "title": "Generation of Computer",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Detailed classification of 1st to 5th computer generations.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 2 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch3",
        "chapterNumber": 3,
        "title": "Types of Computers",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Analog, digital, hybrid, super, mainframe, mini & microcomputers.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 3 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch4",
        "chapterNumber": 4,
        "title": "Computer Software",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "System software, OS, application software, utilities.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 4 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch5",
        "chapterNumber": 5,
        "title": "Word Processing - Microsoft Word 2016",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Creating, editing, formatting documents in MS-Word 2016.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 5 will be added soon. [Add your notes here]</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch6",
        "chapterNumber": 6,
        "title": "Spreadsheet - Microsoft Excel 2016",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-06",
        "author": "Prepared by Er. Ankit Lamichhane",
        "summary": "Complete guide to worksheets, cells, data types, formulas, built-in functions (SUM, MAX, MIN, AVERAGE, IF, OR, AND), formatting, charts & complete textbook exercise solutions.",
        "topics": [
          {
            "title": "Learning Objectives",
            "content": "\n              <p>At the end of this chapter, students will be able to:</p>\n              <div class=\"step-card-grid\">\n                <div class=\"step-card\"><span class=\"step-badge\">1</span><span>Prepare a spreadsheet to store data properly in columns and rows.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">2</span><span>Perform mathematical, financial and logical operations on numeric data.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">3</span><span>Prepare different types of graphs (charts) from worksheet data.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">4</span><span>Enter, edit, format and organize data using rows, columns and cells.</span></div>\n                <div class=\"step-card\"><span class=\"step-badge\">5</span><span>Use built-in functions like SUM, MAX, MIN, AVERAGE, IF, OR and AND.</span></div>\n              </div>\n            "
          },
          {
            "title": "6.0 Introduction: What is a Spreadsheet?",
            "content": "\n              <p><strong>Spreadsheet (electronic spreadsheet) software</strong> is application software that lets you organize data in columns and rows.</p>\n              <ul>\n                <li>It sets relationships between columns and rows so it can perform mathematical, financial and logical operations easily.</li>\n                <li>When data in a cell changes, values in all dependent cells update <strong>automatically</strong>.</li>\n                <li>The program has all built-in functions needed for complex calculations.</li>\n                <li>Used widely in financial and business sectors for salary sheets, invoices, balance sheets, mark ledgers, report cards, etc.</li>\n              </ul>\n            "
          },
          {
            "title": "6.1 Basics of Spreadsheet: Column, Row & Cell",
            "content": "\n              <h3>COLUMN</h3>\n              <ul>\n                <li>The vertical space running from top to bottom is called a <strong>Column</strong>.</li>\n                <li>The latest MS-Excel version has <strong>16,384 columns</strong> (from column A to XFD) in a single worksheet.</li>\n              </ul>\n              <h3>ROW</h3>\n              <ul>\n                <li>The horizontal space running from left to right is called a <strong>Row</strong>.</li>\n                <li>The latest version of MS-Excel has <strong>1,048,576 rows</strong>.</li>\n              </ul>\n            "
          }
        ]
      },
      {
        "id": "class8-cs-ch7",
        "chapterNumber": 7,
        "title": "Presentation Software (MS-PowerPoint 2016)",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "author": "Prepared by ER Ankit Lamichhane",
        "summary": "Complete guide to creating, designing, delivering slide shows, animations, transitions, printing & packaging in Microsoft PowerPoint 2016.",
        "topics": [
          {
            "title": "Learning Objectives",
            "content": "<p>At the end of this chapter, students will be able to prepare presentations with media, animation, and transitions.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch8",
        "chapterNumber": 8,
        "title": "Computer Graphics",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Introduction to digital graphics, vector vs raster, image editing basics.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 8 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch9",
        "chapterNumber": 9,
        "title": "ICT & Contemporary Technology",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Information & Communication Technology, AI, Cloud, IoT basics.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 9 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch10",
        "chapterNumber": 10,
        "title": "Number System",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Binary, Decimal, Octal, Hexadecimal conversion rules.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 10 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch11",
        "chapterNumber": 11,
        "title": "Computer Virus",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Malware types, symptoms, prevention & antivirus software.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 11 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch12",
        "chapterNumber": 12,
        "title": "Data Communication and Computer Network",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "LAN, MAN, WAN, network topologies, transmission media.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 12 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch13",
        "chapterNumber": 13,
        "title": "Web Page Designing Using HTML",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-06",
        "summary": "HTML tags, structure, headings, lists, images, tables, frames & exercise solutions.",
        "topics": [
          {
            "title": "1. Introduction to HTML",
            "content": "<p>Notes for Class 8 Chapter 13 are included in full details.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch14",
        "chapterNumber": 14,
        "title": "Computer Programming Language",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Low-level vs High-level languages, compilers, interpreters.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 14 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch15",
        "chapterNumber": 15,
        "title": "Program Design Tools",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Algorithms, flowcharts, pseudocode symbols & construction.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 15 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch16",
        "chapterNumber": 16,
        "title": "Block Programming-Scratch",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Visual block coding, sprites, scripts, loops, events in Scratch.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 16 will be added soon.</p>"
          }
        ]
      },
      {
        "id": "class8-cs-ch17",
        "chapterNumber": 17,
        "title": "Programming Language-Python",
        "subject": "Computer Science",
        "className": "Class 8",
        "updated": "2026-09-03",
        "summary": "Python syntax, variables, data types, input/output, simple programs.",
        "topics": [
          {
            "title": "1. Introduction",
            "content": "<p>Notes for Class 8 Chapter 17 will be added soon.</p>"
          }
        ]
      }
    ]
  },
  "class9": {
    "computerScience": [
      {
        "id": "class9-cs-ch1",
        "chapterNumber": 1,
        "title": "System Unit & Hardware Architecture",
        "subject": "Computer Science",
        "className": "Class 9",
        "updated": "2026-09-03",
        "summary": "Detailed overview of computer hardware components, buses, and motherboard.",
        "topics": [
          {
            "title": "1. Introduction to Computer Architecture",
            "content": "<p>Notes for Class 9 Chapter 1 will be added soon.</p>"
          }
        ]
      }
    ]
  },
  "class10": {
    "computerScience": [
      {
        "id": "class10-cs-ch1",
        "chapterNumber": 1,
        "title": "Networking & Cyber Law",
        "subject": "Computer Science",
        "className": "Class 10",
        "updated": "2026-09-03",
        "summary": "Data communication, network architecture, cyber ethics, and Nepal Cyber Law.",
        "topics": [
          {
            "title": "1. Data Communication & Computer Networks",
            "content": "<p>Notes for Class 10 Chapter 1 will be added soon.</p>"
          }
        ]
      }
    ]
  }
};
