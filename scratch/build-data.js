const fs = require('fs');
const path = require('path');

const notesData = {
  class6: {
    computerScience: [
      /* ====================================================================
         CHAPTER 1: COMPUTER FUNDAMENTAL
         ==================================================================== */
      {
        id: "class6-cs-ch1",
        chapterNumber: 1,
        title: "Computer Fundamental",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-15",
        author: "Innovative Computer Science &mdash; Book 6, Chapter 1",
        summary: "Fundamental concepts of computers, definition, IPO cycle, speed units, characteristics, application areas, and complete textbook exercise solutions.",
        topics: [
          {
            title: "1.0 Introduction to Computers",
            content: `
              <p>A <strong>computer</strong> is an electronic machine that can be programmed to perform a variety of tasks at very high speed and accurately.</p>
              <ul>
                <li>It accepts data and instructions from a user, processes the data according to the given instructions, and produces meaningful information as output.</li>
                <li>Besides processing data, a computer is widely used for creating documents, spreadsheets, databases, presentations, and graphics.</li>
                <li><strong>Internet Services:</strong> Using a computer, you can access World Wide Web (WWW), file transferring, emails, online chatting, and video conferencing.</li>
              </ul>
            `
          },
          {
            title: "Textbook Exercise Solutions &mdash; Chapter 1 (Computer Fundamental)",
            content: `
              <h2>Innovative Computer Science &mdash; Book 6, Chapter 1 Complete Exercise Solutions</h2>
              <h3>1. Answer the Following Questions</h3>
              <div class="qa-card"><div class="qa-card-q">a. Define a computer? What are the uses of computers?</div><div class="qa-card-a"><strong>Answer:</strong> A computer is a programmable electronic machine that accepts raw data and instructions, processes them into meaningful information, and stores them.</div></div>
            `
          }
        ]
      },
      { id: "class6-cs-ch2", chapterNumber: 2, title: "Computer Hardware", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Tangible physical parts of a computer system.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch3", chapterNumber: 3, title: "Input and output devices", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Keyboards, mice, monitors, printers.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch4", chapterNumber: 4, title: "Storage devices", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "RAM, ROM, Hard Disk, SSD, Pen Drive.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch5", chapterNumber: 5, title: "Computer Software", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "System software vs application software.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch6", chapterNumber: 6, title: "Working with Windows 11", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Windows 11 operating system basics.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch7", chapterNumber: 7, title: "Programming Language and Programming Tools", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Concept of computer programming languages.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch8", chapterNumber: 8, title: "Block Programming - Scratch", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Visual block coding in Scratch.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch9", chapterNumber: 9, title: "Programming Language - Python", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Basic syntax in Python.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch10", chapterNumber: 10, title: "Word Processing", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Formatting and saving documents.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch11", chapterNumber: 11, title: "Spread sheet", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Worksheet basics and calculations.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch12", chapterNumber: 12, title: "Presentation package", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Creating slides and slide shows.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch13", chapterNumber: 13, title: "ICT, Cyber Ethics, And Cyber Law", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Information communication technology.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch14", chapterNumber: 14, title: "Computer Graphics", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Digital drawing and design tools.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch15", chapterNumber: 15, title: "Multimedia", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Audio, video, animation concepts.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch16", chapterNumber: 16, title: "Termwise Syllabus", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Term-wise curriculum breakdown.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch17", chapterNumber: 17, title: "Model Question", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Sample examination paper.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] },
      { id: "class6-cs-ch18", chapterNumber: 18, title: "Terminology", subject: "Computer Science", className: "Class 6", updated: "2026-09-15", summary: "Glossary of computer terms.", topics: [{ title: "1. Introduction", content: "<p>Notes added soon.</p>" }] }
    ]
  },

  /* ====================================================================
     CLASS 7 CHAPTERS (TABLE OF CONTENTS MATCHING MEDIA_1789563469289.PNG)
     ==================================================================== */
  class7: {
    computerScience: [
      { id: "class7-cs-ch1", chapterNumber: 1, title: "Computer Fundamental & History of computer", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Introduction to computers, history, and development.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 1 will be added soon.</p>" }] },
      { id: "class7-cs-ch2", chapterNumber: 2, title: "Generation of Computer", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "1st to 5th generations of computers.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 2 will be added soon.</p>" }] },
      { id: "class7-cs-ch3", chapterNumber: 3, title: "Types of computer", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Analog, digital, hybrid, super, mainframe, mini & microcomputers.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 3 will be added soon.</p>" }] },
      { id: "class7-cs-ch4", chapterNumber: 4, title: "Computer Software", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "System software vs application software.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 4 will be added soon.</p>" }] },
      { id: "class7-cs-ch5", chapterNumber: 5, title: "Operating System", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Functions and types of operating systems.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 5 will be added soon.</p>" }] },
      { id: "class7-cs-ch6", chapterNumber: 6, title: "Word Processor", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Word processing concepts, formatting, and tables.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 6 will be added soon.</p>" }] },
      { id: "class7-cs-ch7", chapterNumber: 7, title: "Spreadsheet", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Spreadsheet basics, cell formatting, and formulas.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 7 will be added soon.</p>" }] },
      { id: "class7-cs-ch8", chapterNumber: 8, title: "Presentation software", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Slide design, animations, and presentation delivery.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 8 will be added soon.</p>" }] },

      /* ====================================================================
         CHAPTER 9: ICT TOOLS AND CYBER ETHICS (PDF CHAPTER 9)
         ==================================================================== */
      {
        id: "class7-cs-ch9",
        chapterNumber: 9,
        title: "ICT tools and Cyber Ethics",
        subject: "Computer Science",
        className: "Class 7",
        updated: "2026-09-16",
        author: "Innovative Computer Science &mdash; Book 7, Chapter 9",
        summary: "Detailed guide to Information and Communication Technology (ICT), ICT tools, digital cameras, scanners, projectors, eBooks, social media, cybercrime, cyber law in Nepal, computer ethics, AI, cloud computing, robotics, IoT & complete exercise solutions.",
        topics: [
          {
            title: "9.0 Introduction to Information and Communication Technology (ICT)",
            content: `
              <p>Nowadays, you can immediately and easily know what is happening in any corner of the world. You can comfortably communicate with friends, relatives, or people living anywhere globally. You can purchase goods at your door without going outside from home, buy bus, airplane, and train tickets, and book hotel rooms online.</p>
              <p>All this is possible due to <strong>Information and Communication Technology (ICT)</strong>.</p>
              
              <div class="callout callout-remember">
                <div class="callout-title">📌 ICT DEFINITION</div>
                <p>ICT is the integrated technology that stores, manages, and processes data and provides access to information for people through computers, the Internet, broadcasting, or telecommunication systems.</p>
              </div>

              <ul>
                <li>ICT consists of all technical means used to handle data and information in digital form, including computers, peripheral devices, network hardware, communication software, and necessary software.</li>
                <li>ICT uses electronic equipment, especially computers, for storing, retrieving, manipulating, or exchanging information.</li>
              </ul>

              <h3>Why ICT is Important in Our Lives:</h3>
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1</span><span>Makes life easier, faster, and more fun.</span></div>
                <div class="step-card"><span class="step-badge">2</span><span>Helps us to learn and share new things quickly.</span></div>
                <div class="step-card"><span class="step-badge">3</span><span>Enables us to talk to friends and family members far away.</span></div>
                <div class="step-card"><span class="step-badge">4</span><span>Enables us to send messages, photos, videos, and files instantly.</span></div>
                <div class="step-card"><span class="step-badge">5</span><span>Enables access to the latest global news and educational information.</span></div>
              </div>
            `
          },
          {
            title: "9.1 ICT Tools & Categories",
            content: `
              <p>All communication devices, systems, and application software that help in processing, managing, and communicating information efficiently in digital form are <strong>ICT tools</strong>.</p>

              <h3>Categories of ICT Tools:</h3>
              <ul>
                <li><strong>Main ICT Tool:</strong> The <em>computer</em> is the primary ICT tool that can store, manage, process, and transfer large volumes of data and information quickly worldwide.</li>
                <li><strong>Tools for Capturing &amp; Manipulating Images:</strong> Scanner, Digital Camera, graphics software (Photoshop, Paint), photocopy machine.</li>
                <li><strong>Tools for Exchanging Information:</strong> World Wide Web (WWW), Blog (Web log), E-mail (Electronic Mail), IRC (Internet Relay Chat), web browsers, radio, television, mobile phones, ATM, Wi-Fi devices, TV setup boxes.</li>
                <li><strong>Tools for Presenting Information:</strong> Multimedia projectors, word processors, e-books, tutorial videos.</li>
              </ul>
            `
          },
          {
            title: "9.2 Usages of Key ICT Tools",
            content: `
              <h3>1. Digital Camera (Digicam)</h3>
              <p>Captures pictures or videos and transfers them into a computer as digital image or video files stored in a memory chip. Digital photos/videos are used in websites, e-books, magazines, and tutorial videos.</p>

              <h3>2. Scanner</h3>
              <p>Converts handwritten or printed text and pictures into digital images and transfers them to a computer. Image editing software like Adobe Photoshop, CorelDraw, Paint, and Photo Editor can be used to modify scanned images.</p>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">a</span><div>Connect scanner to computer and install driver software.</div></div>
                <div class="step-item"><span class="step-badge">b</span><div>Switch on scanner, open scanner lid, and place document face down.</div></div>
                <div class="step-item"><span class="step-badge">c</span><div>Press <strong>Scan button</strong> or open scanner software (e.g., Control Center 4).</div></div>
                <div class="step-item"><span class="step-badge">d</span><div>Select Document Type (Photo, Text), Resolution, Scan Size, and file format (PDF, JPEG, PNG).</div></div>
                <div class="step-item"><span class="step-badge">e</span><div>Click <strong>Save</strong> and type file name.</div></div>
              </div>

              <h3>3. Multimedia Projector</h3>
              <p>Displays text, images, presentations, or videos to many people at a time on a big screen in classrooms, corporate meetings, or home theaters.</p>

              <h3>4. Electronic Book (eBook)</h3>
              <p>A non-editable digital version of a printed book accessed through computers, smartphones, tablets, or eBook readers. Sites offering free eBooks: <code>moecdc.gov.np</code>, <code>learning.cehrd.gov.np</code>, <code>wikibooks.org</code>, <code>gutenberg.org</code>, <code>books.google.com</code>.</p>

              <h3>5. Tutorial Videos</h3>
              <p>Provides step-by-step video instructions to perform tasks or study subjects. Educational sites: <code>nepalonlineschool.org</code>, <code>mero.school</code>, <code>dlc.dwit.edu.np</code>, <code>kullabs.com</code>.</p>
            `
          },
          {
            title: "9.3 Social Media Platforms & Safety Rules",
            content: `
              <p><strong>Social Media</strong> is digital technology that allows people to connect, share, and communicate online. Major platforms include:</p>

              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Platform</th><th>Developers / Founders &amp; Launch Date</th><th>Key Features</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Facebook</strong></td><td>Mark Zuckerberg &amp; Edward Saverin (Feb 2004)</td><td>Social networking for users 13+, share posts, photos, videos.</td></tr>
                    <tr><td><strong>Instagram</strong></td><td>Kevin Systrom &amp; Mike Krieger (Feb 2010 / Meta)</td><td>Photo and short video sharing, chat with friends.</td></tr>
                    <tr><td><strong>Twitter (X)</strong></td><td>Jack Dorsey, Noah Glass, Biz Stone, Evan Williams (July 2006)</td><td>Short text "tweets" (140 to 280 characters).</td></tr>
                    <tr><td><strong>WhatsApp</strong></td><td>Jan Koum &amp; Brian Acton (Jan 2009 / Meta)</td><td>Messaging, voice calls, video chat, media sharing.</td></tr>
                    <tr><td><strong>YouTube</strong></td><td>Chad Hurley, Steve Chen, Jawed Karim (Feb 2005)</td><td>Video uploading and streaming (First video: <em>Me at the Zoo</em>, Apr 23, 2005).</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Advantages vs Disadvantages of Social Media:</h3>
              <ul>
                <li><strong>Advantages:</strong> Talk to anyone worldwide, quick news updates, join interest groups, share creative ideas, learn skills, enjoy videos/games.</li>
                <li><strong>Disadvantages:</strong> Addiction (distraction from study), cyberbullying, privacy risks, fake news, comparison pressure, eye/health issues, time wasting.</li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">📌 SOCIAL MEDIA SAFETY RULES</div>
                <ul>
                  <li>Use polite language; don't pass negative comments.</li>
                  <li>Do not share fake news or unverified information.</li>
                  <li><strong>Never share personal information</strong> like your home address, phone number, or passwords.</li>
                  <li>Think twice before posting &mdash; once something is online, it is hard to remove.</li>
                  <li>Tell a parent or teacher immediately if something online makes you uncomfortable.</li>
                </ul>
              </div>
            `
          },
          {
            title: "9.4 Cyber Crime & Cyber Law of Nepal",
            content: `
              <p><strong>Cybercrime (Computer Crime):</strong> Any criminal activity committed using a computer, mobile device, and the Internet. Examples: software piracy (illegal copying), hacking (stealing data), spreading computer viruses, cyberbullying, online fraud.</p>

              <h3>Cyber Law of Nepal</h3>
              <p>To control cybercrimes and legalize electronic transactions, the Nepal Government enacted the <strong>Cyber Law of Nepal 2061 B.S. (30th Bhadra 2061 / 2004 A.D.)</strong>, officially known as the <strong>Electronic Transaction and Digital Signature Act-2061</strong>.</p>
              
              <div class="callout callout-quickcheck">
                <div class="callout-title">🎯 OBJECTIVES OF NEPAL CYBER LAW</div>
                <ul>
                  <li>To legalize electronic data exchange and communications.</li>
                  <li>To make electronic transactions reliable and secure.</li>
                  <li>To prevent, control, and punish cybercrimes and cybercriminals.</li>
                </ul>
              </div>
            `
          },
          {
            title: "9.5 Computer Ethics (10 Commandments)",
            content: `
              <p><strong>Computer Ethics (Cyber Ethics)</strong> is a set of moral principles that regulates the proper and lawful use of computers by users.</p>

              <h3>10 Commandments of Computer Ethics:</h3>
              <ol>
                <li>You should not use a computer to harm other people.</li>
                <li>You should not interfere with other people's computer work.</li>
                <li>You should not snoop around in other people's files.</li>
                <li>You should not use a computer to steal.</li>
                <li>You should not use a computer to bear false witness.</li>
                <li>You should not use or copy commercial software for which you have not paid (software piracy).</li>
                <li>You should not use other people's computer resources without authorization.</li>
                <li>You should not appropriate other people's intellectual output.</li>
                <li>You should think about the social consequences of the program you write.</li>
                <li>You should use a computer in ways that show consideration and respect.</li>
              </ol>
            `
          },
          {
            title: "9.6 Contemporary Technologies (AI, Cloud, Robotics, IoT)",
            content: `
              <p>Contemporary technology refers to modern systems, devices, and tools used today to make life easier, faster, and more connected.</p>

              <h3>1. Artificial Intelligence (AI)</h3>
              <p>Technology that allows machines to think, learn, recognize speech, and make decisions like humans.</p>
              <ul>
                <li><strong>Recommendation Systems:</strong> YouTube video recommendations &amp; Google search predictions.</li>
                <li><strong>Virtual Assistants:</strong> Alexa (Amazon), Siri (Apple), Cortana (Microsoft).</li>
                <li><strong>AI Chatbots:</strong> ChatGPT, DeepSeek.</li>
                <li><strong>Strategic Games &amp; Autonomous Vehicles:</strong> Chess AI, self-driving cars (Tesla).</li>
              </ul>

              <h3>2. Cloud Computing</h3>
              <p>Provides remote storage and software application services over the Internet via remote server networks instead of local hard drives. Providers: Google Drive, OneDrive, Dropbox, iCloud, Spotify.</p>

              <h3>3. Robotics</h3>
              <p>Branch of technology dealing with design and manufacturing of intelligent machines (robots) that assist humans in dangerous, dirty, or laborious tasks (factories, space, nuclear plants).</p>

              <h3>4. Internet of Things (IoT)</h3>
              <p>System connecting computing devices, smart appliances, sensors, and objects over a network without requiring human interaction (e.g. smart home lighting, smart TVs, automated thermostats).</p>
            `
          },
          {
            title: "Textbook Exercise Solutions &mdash; Chapter 9 (ICT &amp; Cyber Ethics)",
            content: `
              <h2>Innovative Computer Science &mdash; Book 7, Chapter 9 Complete Exercise Solutions</h2>

              <h3>1. Answer the Following Questions (a to l)</h3>
              <div class="qa-card"><div class="qa-card-q">a. What is Information and Communication Technology?</div><div class="qa-card-a"><strong>Answer:</strong> Information and Communication Technology (ICT) is an integrated technology that stores, manages, processes data, and provides access to information through computers, the Internet, and telecommunications.</div></div>
              <div class="qa-card"><div class="qa-card-q">b. List any two ICT tools.</div><div class="qa-card-a"><strong>Answer:</strong> Computer and Scanner (or Digital Camera, Projector).</div></div>
              <div class="qa-card"><div class="qa-card-q">c. What is the use of multimedia projector in the ICT?</div><div class="qa-card-a"><strong>Answer:</strong> A multimedia projector is used to display text, images, presentations, and videos to a large audience on a big screen in classrooms or corporate meetings.</div></div>
              <div class="qa-card"><div class="qa-card-q">d. What is cybercrime? List any two cybercrimes.</div><div class="qa-card-a"><strong>Answer:</strong> Cybercrime is any illegal criminal activity committed using a computer, mobile device, and the Internet. Two examples: Hacking and Software Piracy.</div></div>
              <div class="qa-card"><div class="qa-card-q">e. What is cyber law? Why is it necessary?</div><div class="qa-card-a"><strong>Answer:</strong> Cyber law is the legal framework dealing with computer and Internet-related issues. It is necessary to legalize electronic transactions, secure digital communications, and punish cybercriminals.</div></div>
              <div class="qa-card"><div class="qa-card-q">f. List any two reasons of formulating cyber law in Nepal.</div><div class="qa-card-a"><strong>Answer:</strong> 1) To make electronic transactions reliable and secure, and 2) To control and punish cybercrime offenses.</div></div>
              <div class="qa-card"><div class="qa-card-q">g. What is computer ethics? List any four commandments of computer ethics.</div><div class="qa-card-a"><strong>Answer:</strong> Computer ethics is a set of moral principles regulating the proper use of computers.
              <br><em>Four Commandments:</em>
              <ol>
                <li>You should not use a computer to harm other people.</li>
                <li>You should not snoop around in other people's files.</li>
                <li>You should not use a computer to steal.</li>
                <li>You should not use pirated software.</li>
              </ol></div></div>
              <div class="qa-card"><div class="qa-card-q">h. List any two commandments of computer ethics.</div><div class="qa-card-a"><strong>Answer:</strong> 1) You should not use a computer to harm other people, and 2) You should not use other people's computer resources without authorization.</div></div>
              <div class="qa-card"><div class="qa-card-q">i. What is social media? Write the safety rules for using social media.</div><div class="qa-card-a"><strong>Answer:</strong> Social media is digital technology that allows people to connect, share content, and communicate online (e.g., Facebook, YouTube).
              <br><em>Safety Rules:</em> 1) Never share personal info like address or phone number, 2) Use polite language, 3) Verify news before sharing, 4) Inform parents if uncomfortable online.</div></div>
              <div class="qa-card"><div class="qa-card-q">j. List any four advantages of social media.</div><div class="qa-card-a"><strong>Answer:</strong> 1) Talk to anyone from anywhere, 2) Stay updated with news and events, 3) Learn new skills, 4) Share thoughts and creative art.</div></div>
              <div class="qa-card"><div class="qa-card-q">k. What is AI? List any two applications of AI.</div><div class="qa-card-a"><strong>Answer:</strong> AI (Artificial Intelligence) is technology enabling machines to think, learn, and make decisions like humans.
              <br><em>Two Applications:</em> 1) Virtual Personal Assistants (Siri, Alexa), 2) AI Chatbots (ChatGPT, DeepSeek).</div></div>
              <div class="qa-card"><div class="qa-card-q">l. What is IoT?</div><div class="qa-card-a"><strong>Answer:</strong> IoT (Internet of Things) is a network system connecting smart computing devices and appliances to exchange data without human interaction.</div></div>

              <h3>2. Write the Full Forms of the Following</h3>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Abbreviation</th><th>Full Form</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>a. ICT</strong></td><td>Information and Communication Technology</td></tr>
                    <tr><td><strong>b. IRC</strong></td><td>Internet Relay Chat</td></tr>
                    <tr><td><strong>c. Blog</strong></td><td>Web Log</td></tr>
                    <tr><td><strong>d. WWW</strong></td><td>World Wide Web</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>3. Write the Technical Terms for the Following Statements</h3>
              <p><strong>a.</strong> A technology concerned with storage, retrieval, transmission or receipt of information electronically in digital form: <u>ICT (Information and Communication Technology)</u></p>
              <p><strong>b.</strong> A crime committed with the help of a computer and the Internet: <u>Cybercrime (or Computer Crime)</u></p>
              <p><strong>c.</strong> The law that deal with computer and the Internet related issues: <u>Cyber Law</u></p>
              <p><strong>d.</strong> The moral principles that should be followed by all computer users: <u>Computer Ethics (or Cyber Ethics)</u></p>
              <p><strong>e.</strong> The technology that allows machines to think and learn like humans: <u>Artificial Intelligence (AI)</u></p>

              <h3>4. State Whether the Following Statements are True or False</h3>
              <div class="qa-card"><div class="qa-card-q">a. ICT stands for Informative and Computing technology.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Stands for Information and Communication Technology)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">b. ICT uses electronic equipments especially computers for storing, retrieving and exchanging information.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">c. Computer ethics is a program that is used to steal data from a computer.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Computer ethics is a set of moral principles)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">d. The crime committed with the help of computer and internet is known as computer crime or cybercrime.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">e. Data privacy and Data backup are the examples of cybercrimes.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(They are security practices)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">f. Unauthorized accessing of other files is cybercrime.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">g. Stealing data and information of computers through the Internet is software piracy.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Software piracy is illegal copying of software)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">h. The cyber law controls the crime in a country.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">i. It is the right of a computer user to damage other files without permission.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(It is illegal and unethical)</em></div></div>

              <h3>5. Choose the Correct Option (Multiple Choice Questions)</h3>
              <div class="qa-card"><div class="qa-card-q">a. .............. is an ICT tool.</div><div class="qa-card-a">i. Computer &nbsp; ii. Book &nbsp; iii. Pen drive &nbsp; <strong>iv. All of the above</strong> &mdash; <em>Answer: iv. All of the above</em></div></div>
              <div class="qa-card"><div class="qa-card-q">b. ICT tools are the devices or systems that perform functions like ...</div><div class="qa-card-a">i. Creating information &nbsp; ii. Storing information &nbsp; iii. Exchanging information &nbsp; <strong>iv. All of the above</strong> &mdash; <em>Answer: iv. All of the above</em></div></div>
              <div class="qa-card"><div class="qa-card-q">c. Which is a social networking site?</div><div class="qa-card-a">i. Instagram &nbsp; ii. Twitter &nbsp; iii. Facebook &nbsp; <strong>iv. All of the above</strong> &mdash; <em>Answer: iv. All of the above</em></div></div>
              <div class="qa-card"><div class="qa-card-q">d. Which is cybercrime?</div><div class="qa-card-a"><strong>i. Software piracy</strong> &nbsp; ii. Data privacy &nbsp; iii. Entertaining in YouTube &nbsp; iv. None of the above &mdash; <em>Answer: i. Software piracy</em></div></div>
              <div class="qa-card"><div class="qa-card-q">e. Making duplicate of software illegally is .........</div><div class="qa-card-a">i. Software Privacy &nbsp; <strong>ii. Software piracy</strong> &nbsp; iii. Hacking &nbsp; iv. Cyber bullying &mdash; <em>Answer: ii. Software piracy</em></div></div>
              <div class="qa-card"><div class="qa-card-q">f. Hacking is .............</div><div class="qa-card-a">i. Stealing money from a home &nbsp; ii. Bank robbery &nbsp; <strong>iii. Stealing data and information on the Internet</strong> &nbsp; iv. Harassing someone &mdash; <em>Answer: iii. Stealing data and information on the Internet</em></div></div>
              <div class="qa-card"><div class="qa-card-q">g. A crime committed with the help of computer and the Internet is ......</div><div class="qa-card-a">i. Hardware crime &nbsp; ii. Software crime &nbsp; iii. Information crime &nbsp; <strong>iv. Cybercrime</strong> &mdash; <em>Answer: iv. Cybercrime</em></div></div>
              <div class="qa-card"><div class="qa-card-q">h. The cyber law of Nepal is formulated to......</div><div class="qa-card-a">i. Legalize electronic transactions &nbsp; ii. Punish cybercrime &nbsp; iii. Control cybercrimes &nbsp; <strong>iv. All of the above</strong> &mdash; <em>Answer: iv. All of the above</em></div></div>
              <div class="qa-card"><div class="qa-card-q">i. A set of moral principles that regulates the proper uses of computers is .......</div><div class="qa-card-a"><strong>i. Computer ethics</strong> &nbsp; ii. Computer literate &nbsp; iii. Internet ethics &nbsp; iv. None of the above &mdash; <em>Answer: i. Computer ethics</em></div></div>
              <div class="qa-card"><div class="qa-card-q">j. A robot can be used to perform.......?</div><div class="qa-card-a">i. Dangerous tasks &nbsp; ii. Laborious tasks &nbsp; iii. High accuracy tasks &nbsp; <strong>iv. All of the above</strong> &mdash; <em>Answer: iv. All of the above</em></div></div>
            `
          }
        ]
      },

      /* Remaining Class 7 Chapters matching Table of Contents Image */
      { id: "class7-cs-ch10", chapterNumber: 10, title: "Computer Virus and its Remedy", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Malware, virus types, computer infection symptoms, and antivirus remedies.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 10 will be added soon.</p>" }] },
      { id: "class7-cs-ch11", chapterNumber: 11, title: "Computer Network and Internet", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Network architecture, LAN, WAN, routers, and web browsers.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 11 will be added soon.</p>" }] },
      { id: "class7-cs-ch12", chapterNumber: 12, title: "Number System", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Binary, Decimal, Octal, and Hexadecimal number conversions.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 12 will be added soon.</p>" }] },
      { id: "class7-cs-ch13", chapterNumber: 13, title: "Computer Graphics", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Digital drawing, graphics editing software, raster vs vector.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 13 will be added soon.</p>" }] },
      { id: "class7-cs-ch14", chapterNumber: 14, title: "Page Layout", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Document layout, margins, page orientation, and printing preparation.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 14 will be added soon.</p>" }] },
      { id: "class7-cs-ch15", chapterNumber: 15, title: "Multimedia", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Audio, video, text, images, and interactive media components.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 15 will be added soon.</p>" }] },
      { id: "class7-cs-ch16", chapterNumber: 16, title: "Programming Tools: Algorithm and Flowchart", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Algorithm steps, flowchart symbols, and problem-solving logic.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 16 will be added soon.</p>" }] },
      { id: "class7-cs-ch17", chapterNumber: 17, title: "Block Programming - Scratch", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Visual block coding, sprites, scripts, and interactive games in Scratch.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 17 will be added soon.</p>" }] },
      { id: "class7-cs-ch18", chapterNumber: 18, title: "Programming with Python", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Python programming syntax, variables, data types, and simple programs.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 18 will be added soon.</p>" }] },
      { id: "class7-cs-ch19", chapterNumber: 19, title: "Web Page Designing Using HTML", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "HTML tags, structure, headings, links, and basic web page design.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 19 will be added soon.</p>" }] },
      { id: "class7-cs-ch20", chapterNumber: 20, title: "Model Question", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Sample examination model questions and solution guides for Class 7.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 20 will be added soon.</p>" }] },
      { id: "class7-cs-ch21", chapterNumber: 21, title: "Practical Question", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Practical examination questions and lab exercises for Class 7.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 21 will be added soon.</p>" }] },
      { id: "class7-cs-ch22", chapterNumber: 22, title: "Terminology", subject: "Computer Science", className: "Class 7", updated: "2026-09-16", summary: "Comprehensive glossary of computer science terms for Class 7.", topics: [{ title: "1. Introduction", content: "<p>Notes for Class 7 Chapter 22 will be added soon.</p>" }] }
    ]
  },

  class8: {
    computerScience: [
      { id: "class8-cs-ch1", chapterNumber: 1, title: "Computer and Its Development History", subject: "Computer Science", className: "Class 8", updated: "2026-09-03", summary: "History of computing.", topics: [{ title: "1. Intro", content: "<p>Notes added.</p>" }] },
      { id: "class8-cs-ch6", chapterNumber: 6, title: "Spreadsheet - Microsoft Excel 2016", subject: "Computer Science", className: "Class 8", updated: "2026-09-06", summary: "Full Excel guide & exercise solutions.", topics: [{ title: "1. Intro", content: "<p>Full notes added.</p>" }] },
      { id: "class8-cs-ch7", chapterNumber: 7, title: "Presentation Software (MS-PowerPoint 2016)", subject: "Computer Science", className: "Class 8", updated: "2026-09-03", summary: "Full PowerPoint guide.", topics: [{ title: "1. Intro", content: "<p>Full notes added.</p>" }] },
      { id: "class8-cs-ch13", chapterNumber: 13, title: "Web Page Designing Using HTML", subject: "Computer Science", className: "Class 8", updated: "2026-09-06", summary: "Full HTML guide & exercise solutions.", topics: [{ title: "1. Intro", content: "<p>Full notes added.</p>" }] }
    ]
  },

  class9: {
    computerScience: [
      { id: "class9-cs-ch1", chapterNumber: 1, title: "System Unit & Hardware Architecture", subject: "Computer Science", className: "Class 9", updated: "2026-09-03", summary: "Hardware architecture overview.", topics: [{ title: "1. Intro", content: "<p>Notes added.</p>" }] }
    ]
  },

  class10: {
    computerScience: [
      { id: "class10-cs-ch1", chapterNumber: 1, title: "Networking & Cyber Law", subject: "Computer Science", className: "Class 10", updated: "2026-09-03", summary: "Cyber Law & Networking.", topics: [{ title: "1. Intro", content: "<p>Notes added.</p>" }] }
    ]
  }
};

const outputContent = `/**
 * STUDY WITH ANKIT - EDUCATIONAL NOTES DATA STORE (Computer Science Focus)
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Chapter-wise structured notes for Class 6, Class 7, Class 8, Class 9, and Class 10 Computer Science.
 */

const notesData = ${JSON.stringify(notesData, null, 2)};
`;

const outputPath = path.join(__dirname, '..', 'js', 'notes-data.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log('Successfully generated full notes-data.js with Class 7 updated Table of Contents & Chapter 9 notes!');
