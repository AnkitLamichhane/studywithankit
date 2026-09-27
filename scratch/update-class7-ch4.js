const fs = require('fs');
const path = require('path');

const ch4Data = {
  id: "class7-cs-ch4",
  chapterNumber: 4,
  title: "Computer Software",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-20",
  summary: "Comprehensive guide to computer software, system software vs application software, operating systems and their functions, language processors (assembler, interpreter, compiler), utility software, packaged vs customized software, and complete textbook exercise solutions.",
  topics: [
    {
      title: "4.0 Introduction to Computer Software & Hardware",
      content: `
        <p class="lead-text">
          A computer system is composed of two primary, mutually dependent components: <strong>Computer Hardware</strong> and <strong>Computer Software</strong>. Neither can function without the other; hardware provides the physical machinery, while software provides the logical intelligence and instructions that guide the machinery.
        </p>

        <div class="note-box note-definition">
          <h4><i class="fas fa-microchip"></i> What is Computer Hardware?</h4>
          <p>
            <strong>Computer hardware</strong> is the physical, tangible part of a computer system that can be seen, touched, and manipulated. Examples include the keyboard, mouse, monitor, motherboard, microprocessor (CPU), RAM, ROM, hard disk, optical disk, scanner, and printer. Hardware is inanimate on its own &mdash; it requires explicit instructions to perform any job. For instance, a printer will only print when it receives a print command from the software.
          </p>
        </div>

        <div class="note-box note-info">
          <h4><i class="fas fa-terminal"></i> What is a Computer Program?</h4>
          <p>
            A <strong>computer program</strong> is a sequence or set of instructions given to a computer to perform a specific task. A computer cannot perform any operation or solve any problem without programs. Programs are written using programming languages by programmers.
          </p>
        </div>

        <div class="note-box note-tip">
          <h4><i class="fas fa-code"></i> What is Computer Software?</h4>
          <p>
            <strong>Computer software</strong> is the non-tangible, invisible collection of programs, procedures, and documentation that runs computer hardware to perform tasks. Software tells the computer hardware <em>what to do</em> and <em>how to do it</em>. It guides and directs hardware at every step &mdash; determining where to start, how to process data, and where to stop during a particular job.
          </p>
          <p>
            <strong>Examples of Computer Software:</strong> Windows 10, Windows 11, Linux, Android, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Adobe Photoshop, VLC Media Player, and Google Chrome.
          </p>
        </div>

        <div class="table-responsive my-4">
          <table class="table table-bordered table-hover">
            <thead class="table-primary">
              <tr>
                <th>Feature</th>
                <th>Computer Hardware</th>
                <th>Computer Software</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nature / Tangibility</strong></td>
                <td>Physical, tangible, and visible (can be seen and touched).</td>
                <td>Logical, non-tangible, and invisible (cannot be touched).</td>
              </tr>
              <tr>
                <td><strong>Definition</strong></td>
                <td>Physical machinery, electronic chips, and peripheral devices.</td>
                <td>Set of instructions, computer programs, and data.</td>
              </tr>
              <tr>
                <td><strong>Creation</strong></td>
                <td>Manufactured in factories using electronic/mechanical components.</td>
                <td>Designed, developed, and written by programmers using programming languages.</td>
              </tr>
              <tr>
                <td><strong>Function</strong></td>
                <td>Performs physical tasks when it receives commands.</td>
                <td>Instructs, directs, and guides hardware on what to do and how to do it.</td>
              </tr>
              <tr>
                <td><strong>Damage / Wear</strong></td>
                <td>Subject to physical wear, tear, and mechanical failure over time.</td>
                <td>Does not wear out physically, but can become obsolete or affected by bugs/viruses.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Keyboard, Mouse, CPU, RAM, Hard Disk, Monitor, Printer.</td>
                <td>Windows 11, Android, MS Word, Photoshop, VLC, Python.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "4.1 Classification of Computer Software (Hierarchy Tree)",
      content: `
        <p class="lead-text">
          Computer software is broadly classified into two major categories based on its function and role in the computer system: <strong>System Software</strong> and <strong>Application Software</strong>.
        </p>

        <!-- Visual Classification Hierarchy Chart -->
        <div class="card bg-light border-primary p-3 my-4 shadow-sm">
          <h4 class="text-primary text-center mb-3"><i class="fas fa-sitemap"></i> Classification of Computer Software</h4>
          
          <div class="row g-3 text-center">
            <!-- Root Card -->
            <div class="col-12">
              <div class="p-2 bg-primary text-white rounded font-weight-bold">
                <strong>COMPUTER SOFTWARE</strong><br>
                <small class="text-light">Collection of programs that controls hardware &amp; solves user problems</small>
              </div>
              <div class="text-primary my-1"><i class="fas fa-arrow-down fa-lg"></i></div>
            </div>

            <!-- Two Main Branches -->
            <div class="col-md-6">
              <div class="card h-100 border-info">
                <div class="card-header bg-info text-white font-weight-bold">
                  <strong>1. SYSTEM SOFTWARE</strong>
                </div>
                <div class="card-body p-2 text-start">
                  <p class="small text-muted mb-2">Controls, coordinates, and manages internal computer operations and hardware.</p>
                  <ul class="list-group list-group-flush small">
                    <li class="list-group-item"><strong>a. Operating System (OS):</strong> Windows, Linux, Android, macOS</li>
                    <li class="list-group-item"><strong>b. Language Processors:</strong> Assembler, Interpreter, Compiler</li>
                    <li class="list-group-item"><strong>c. Utility Software:</strong> Antivirus, WinZip, Backup, Scandisk</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card h-100 border-success">
                <div class="card-header bg-success text-white font-weight-bold">
                  <strong>2. APPLICATION SOFTWARE</strong>
                </div>
                <div class="card-body p-2 text-start">
                  <p class="small text-muted mb-2">Designed to perform specific end-user tasks, jobs, and problem-solving.</p>
                  <ul class="list-group list-group-flush small">
                    <li class="list-group-item"><strong>a. Packaged Software:</strong> Ready-made for general users (MS Office, VLC, Photoshop)</li>
                    <li class="list-group-item"><strong>b. Customized / Tailored Software:</strong> Tailor-made for specific organizations (School Management, Banking, SLC Results)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "4.2 System Software & Operating System",
      content: `
        <p class="lead-text">
          <strong>System software</strong> is the collection of programs that controls and manages the overall operation of a computer. It provides a core platform and working environment to develop and run application software, while managing and protecting the underlying hardware devices.
        </p>

        <p>There are basically three types of system software:</p>
        <ol>
          <li><strong>Operating System (OS)</strong></li>
          <li><strong>Language Processor (Translators)</strong></li>
          <li><strong>Utility Software</strong></li>
        </ol>

        <hr>

        <h3><i class="fas fa-cogs text-primary"></i> Operating System (OS)</h3>
        <p>
          An <strong>operating system</strong> is the most important system software that controls and manages the overall operation of a computer. It is the basic, indispensable requirement of all computers &mdash; without an operating system, a computer cannot work or perform any job.
        </p>
        <p>
          When a computer is powered on, the operating system is automatically loaded from the secondary storage (Hard Disk / SSD) into primary memory (RAM). This process is known as <strong>booting</strong>, and only after this is completed does the computer become ready for use.
        </p>

        <!-- OS Layer Architecture Visual Diagram -->
        <div class="card border-primary p-3 my-4 bg-light shadow-sm">
          <h5 class="text-center text-primary mb-3"><i class="fas fa-layer-group"></i> Diagram: The Operating System as an Interface</h5>
          
          <div class="d-flex flex-column align-items-center gap-2">
            <div class="p-3 bg-dark text-white rounded text-center w-75 shadow-sm">
              <i class="fas fa-user-graduate fa-lg me-2"></i> <strong>USER (Student / End User)</strong><br>
              <small class="text-light">Interacts with the computer to accomplish daily tasks</small>
            </div>
            <div class="text-secondary"><i class="fas fa-arrows-alt-v fa-lg"></i></div>

            <div class="p-3 bg-success text-white rounded text-center w-75 shadow-sm">
              <i class="fas fa-desktop fa-lg me-2"></i> <strong>APPLICATION SOFTWARE</strong><br>
              <small class="text-light">MS Word, MS Excel, Web Browser, Media Player, Games</small>
            </div>
            <div class="text-secondary"><i class="fas fa-arrows-alt-v fa-lg"></i></div>

            <div class="p-3 bg-primary text-white rounded text-center w-75 shadow-sm border border-warning border-3">
              <i class="fas fa-microchip fa-lg me-2"></i> <strong>OPERATING SYSTEM (Interface &amp; Manager)</strong><br>
              <small class="text-light">Windows 11, Linux, macOS, Android (Controls operations, manages memory &amp; devices)</small>
            </div>
            <div class="text-secondary"><i class="fas fa-arrows-alt-v fa-lg"></i></div>

            <div class="p-3 bg-secondary text-white rounded text-center w-75 shadow-sm">
              <i class="fas fa-server fa-lg me-2"></i> <strong>COMPUTER HARDWARE</strong><br>
              <small class="text-light">CPU, RAM, Hard Disk / SSD, Keyboard, Mouse, Monitor, Printer</small>
            </div>
          </div>
          <p class="text-center text-muted small mt-3 mb-0"><em>Figure 4.1: The Operating System bridges the gap between hardware, application software, and end users.</em></p>
        </div>

        <div class="note-box note-info">
          <h4><i class="fas fa-tasks"></i> Four Basic Functions of an Operating System</h4>
          <ol>
            <li><strong>Input/Output Management:</strong> It manages and controls all connected input and output devices (such as keyboards, mice, printers, and monitors).</li>
            <li><strong>Memory Management:</strong> It manages computer memory, coordinating primary memory (RAM) and secondary storage devices (Hard Disks / SSDs) to ensure programs run smoothly.</li>
            <li><strong>Environment Provision:</strong> It provides an interactive, stable platform and environment for other software (application programs) to execute.</li>
            <li><strong>Fault &amp; Error Notification:</strong> It monitors the system and alerts the user about any hardware or software faults, conflicts, or errors that occur.</li>
          </ol>
        </div>

        <p><strong>Popular Examples of Operating Systems:</strong></p>
        <ul>
          <li><strong>Desktop / Laptop:</strong> Microsoft Windows (Windows 7, 10, 11), Linux (Ubuntu, Fedora), macOS, UNIX, Chrome OS.</li>
          <li><strong>Mobile Devices:</strong> Android OS, Apple iOS.</li>
          <li><strong>Servers:</strong> Windows NT Server, Red Hat Enterprise Linux, UNIX.</li>
        </ul>
      `
    },
    {
      title: "4.3 Language Processors (Translators)",
      content: `
        <p class="lead-text">
          Computer programs are written by programmers using various programming languages (such as C, C++, Python, Java, or QBASIC). These programs written in human-readable code are known as <strong>source codes</strong>.
        </p>

        <p>
          However, computer hardware (the CPU) cannot understand human-readable languages &mdash; it can only understand instructions in <strong>machine language</strong> (binary code consisting of <code>0</code>s and <code>1</code>s). Therefore, a specialized program is required to translate the source code into machine code.
        </p>

        <div class="note-box note-definition">
          <h4><i class="fas fa-language"></i> What is a Language Processor?</h4>
          <p>
            A <strong>language processor</strong> (also called a <strong>translator</strong>) is a system software program that converts computer programs written in any programming language (source code) into machine language (object code) so that the computer can execute them.
          </p>
          <p>
            <strong>Source Code:</strong> The program written by a programmer in high-level or assembly language.<br>
            <strong>Object Code / Machine Code:</strong> The converted program in binary machine language (0s and 1s) that the CPU can execute directly.
          </p>
        </div>

        <h3>Three Types of Language Processors</h3>
        <p>There are three main types of language processors based on the language they translate and their method of execution:</p>

        <!-- 1. Assembler -->
        <div class="card border-primary p-3 my-3">
          <h5 class="text-primary"><i class="fas fa-cogs"></i> a. Assembler</h5>
          <p>
            An <strong>assembler</strong> is a language processor that translates programs written in <strong>assembly language</strong> (a low-level symbolic language using mnemonics like <code>ADD</code>, <code>MOV</code>, <code>SUB</code>) into machine language (object code).
          </p>
          <div class="p-3 bg-light rounded text-center border">
            <span class="badge bg-secondary p-2">Program in Assembly Language (Source Code)</span>
            <span class="mx-2 text-primary font-weight-bold">&rarr;</span>
            <span class="badge bg-primary p-2">[ ASSEMBLER ]</span>
            <span class="mx-2 text-primary font-weight-bold">&rarr;</span>
            <span class="badge bg-success p-2">Program in Machine Language (Object Code)</span>
            <p class="text-muted small mt-2 mb-0"><em>Fig 4.2: Conversion of Assembly Language Program into Machine Language</em></p>
          </div>
          <p class="small text-muted mt-2 mb-0"><strong>Examples of Assemblers:</strong> Netwide Assembler (NASM), GNU Assembler (GAS).</p>
        </div>

        <!-- 2. Interpreter -->
        <div class="card border-info p-3 my-3">
          <h5 class="text-info"><i class="fas fa-stream"></i> b. Interpreter</h5>
          <p>
            An <strong>interpreter</strong> is a language processor that converts programs written in high-level language into machine language <strong>statement-by-statement (one line at a time)</strong> and directs each translated statement to the CPU for immediate execution.
          </p>
          <p>
            <strong>Working Process:</strong> After translating and executing the first statement, it proceeds to the second statement, and so on. If an error is encountered in any line, execution halts immediately and an error message is displayed. The interpreter does not generate a separate permanent object code file.
          </p>
          <div class="p-3 bg-light rounded text-center border">
            <div class="d-flex flex-column align-items-center gap-1">
              <div class="d-flex align-items-center justify-content-center w-100">
                <span class="badge bg-secondary p-2 me-2">1st Statement in High-Level Language</span>
                <span class="text-info font-weight-bold">&rarr;</span>
                <span class="badge bg-info p-2 mx-2">[ INTERPRETER ]</span>
                <span class="text-info font-weight-bold">&rarr;</span>
                <span class="badge bg-success p-2 ms-2">Statement in Machine Language &rarr; CPU Executes</span>
              </div>
              <div class="d-flex align-items-center justify-content-center w-100 mt-1">
                <span class="badge bg-secondary p-2 me-2">2nd Statement in High-Level Language</span>
                <span class="text-info font-weight-bold">&rarr;</span>
                <span class="badge bg-info p-2 mx-2">[ INTERPRETER ]</span>
                <span class="text-info font-weight-bold">&rarr;</span>
                <span class="badge bg-success p-2 ms-2">Statement in Machine Language &rarr; CPU Executes</span>
              </div>
              <div class="text-muted small mt-1">&hellip; continues line by line &hellip;</div>
            </div>
            <p class="text-muted small mt-2 mb-0"><em>Fig 4.3: Step-by-Step Statement Translation by an Interpreter</em></p>
          </div>
          <p class="small text-muted mt-2 mb-0"><strong>Languages that use Interpreters:</strong> QBASIC, Python, LOGO, LISP.</p>
        </div>

        <!-- 3. Compiler -->
        <div class="card border-success p-3 my-3">
          <h5 class="text-success"><i class="fas fa-box-check"></i> c. Compiler</h5>
          <p>
            A <strong>compiler</strong> is a language processor that converts the <strong>entire program</strong> written in high-level language into machine language (object code) <strong>all at once</strong> before execution.
          </p>
          <p>
            <strong>Working Process:</strong> The compiler scans and translates the entire source code into object code. If there are syntax errors, it displays the complete list of errors at the end of compilation. Once compiled successfully, the object code can be run repeatedly without re-translating.
          </p>
          <div class="p-3 bg-light rounded text-center border">
            <span class="badge bg-secondary p-2">Program in High-Level Language (Entire Source Code)</span>
            <span class="mx-2 text-success font-weight-bold">&rarr;</span>
            <span class="badge bg-success p-2">[ COMPILER ]</span>
            <span class="mx-2 text-success font-weight-bold">&rarr;</span>
            <span class="badge bg-dark p-2">Complete Object Code / Machine Code</span>
            <p class="text-muted small mt-2 mb-0"><em>Fig 4.4: Conversion of High-Level Language Program into Machine Code by Compiler</em></p>
          </div>
          <p class="small text-muted mt-2 mb-0"><strong>Languages that use Compilers:</strong> C, C++, Java, C#, Visual Basic, FORTRAN, QB64, Swift, Ruby.</p>
        </div>

        <!-- Comparison Table: Interpreter vs Compiler -->
        <div class="table-responsive my-4">
          <table class="table table-bordered table-hover">
            <thead class="table-primary">
              <tr>
                <th>Feature</th>
                <th>Interpreter</th>
                <th>Compiler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Translation Method</strong></td>
                <td>Translates program line-by-line (one statement at a time).</td>
                <td>Translates the entire program all at once into object code.</td>
              </tr>
              <tr>
                <td><strong>Error Reporting</strong></td>
                <td>Reports errors immediately line-by-line and stops execution.</td>
                <td>Scans entire code and lists all errors together at the end.</td>
              </tr>
              <tr>
                <td><strong>Object Code Generated?</strong></td>
                <td><strong>No</strong> &mdash; does not generate a separate object code file.</td>
                <td><strong>Yes</strong> &mdash; creates a permanent executable object file (<code>.exe</code>, <code>.obj</code>).</td>
              </tr>
              <tr>
                <td><strong>Execution Speed</strong></td>
                <td>Slower execution because re-translation happens every time.</td>
                <td>Much faster execution once the object code is compiled.</td>
              </tr>
              <tr>
                <td><strong>Memory Consumption</strong></td>
                <td>Requires less memory.</td>
                <td>Requires more memory to hold the compiler and generate object code.</td>
              </tr>
              <tr>
                <td><strong>Examples of Languages</strong></td>
                <td>QBASIC, Python, LOGO, LISP.</td>
                <td>C, C++, Java, C#, Pascal, FORTRAN, QB64.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "4.4 Utility Software (System Utilities)",
      content: `
        <p class="lead-text">
          <strong>Utility software</strong> (also called <strong>system utilities</strong>) is a specialized category of system software designed to analyze, configure, optimize, protect, and maintain the computer in good working condition.
        </p>

        <p>
          While the operating system runs the computer, utilities perform essential housekeeping and maintenance tasks to keep hardware and storage healthy, fast, and free from errors.
        </p>

        <div class="row g-3 my-3">
          <div class="col-md-6">
            <div class="card h-100 border-danger">
              <div class="card-header bg-danger text-white">
                <i class="fas fa-shield-virus"></i> <strong>Virus Scanning Software (Antivirus)</strong>
              </div>
              <div class="card-body">
                <p>Designed to scan, detect, prevent, and remove malicious computer viruses, malware, and spyware. Keeps files and system safe.</p>
                <small class="text-muted"><strong>Examples:</strong> Windows Defender, Kaspersky, Norton, Avast, Quick Heal.</small>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-primary">
              <div class="card-header bg-primary text-white">
                <i class="fas fa-download"></i> <strong>Download Accelerator Plus (DAP)</strong>
              </div>
              <div class="card-body">
                <p>A utility program that accelerates and optimizes downloading files from the Internet by segmenting files and resuming broken downloads.</p>
                <small class="text-muted"><strong>Examples:</strong> DAP, Internet Download Manager (IDM).</small>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-success">
              <div class="card-header bg-success text-white">
                <i class="fas fa-hdd"></i> <strong>Scandisk &amp; Disk Defragmenter</strong>
              </div>
              <div class="card-body">
                <p><strong>Scandisk:</strong> Built-in Windows utility that scans disks to identify and repair physical or logical errors and bad sectors.<br>
                <strong>Disk Defragmenter:</strong> Reorganizes fragmented files on storage to occupy contiguous locations, speeding up read/write performance.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-warning">
              <div class="card-header bg-warning text-dark">
                <i class="fas fa-copy"></i> <strong>Backup Software</strong>
              </div>
              <div class="card-body">
                <p>Enables users to create duplicate copies of important files, databases, or entire disk drives and store them safely for disaster recovery.</p>
                <small class="text-muted"><strong>Examples:</strong> Windows Backup, Acronis True Image, Google Drive Sync.</small>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-secondary">
              <div class="card-header bg-secondary text-white">
                <i class="fas fa-file-archive"></i> <strong>File Compression Utilities</strong>
              </div>
              <div class="card-body">
                <p>Compresses large files and folders into smaller archive files (such as <code>.zip</code> or <code>.rar</code>) to conserve storage space and facilitate quick file sharing.</p>
                <small class="text-muted"><strong>Examples:</strong> WinZip, WinRAR, 7-Zip.</small>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 border-dark">
              <div class="card-header bg-dark text-white">
                <i class="fas fa-trash-alt"></i> <strong>Uninstaller &amp; Registry Cleaners</strong>
              </div>
              <div class="card-body">
                <p>Completely removes unwanted software along with leftover temporary files, invalid registry keys, and cache to free disk space and boost speed.</p>
                <small class="text-muted"><strong>Examples:</strong> Revo Uninstaller, CCleaner, Registry Cleaner.</small>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      title: "4.5 Application Software (Packaged vs. Customized)",
      content: `
        <p class="lead-text">
          <strong>Application software</strong> is a category of software designed to help end-users perform specific tasks, solve real-world problems, and handle practical applications (such as typing documents, creating spreadsheets, managing accounts, editing photos, and playing media).
        </p>

        <p>Application software is divided into two distinct types based on the target audience and development scope:</p>
        <ol>
          <li><strong>Packaged Software (Ready-Made)</strong></li>
          <li><strong>Customized or Tailored Software</strong></li>
        </ol>

        <hr>

        <h3><i class="fas fa-box text-primary"></i> 1. Packaged Software (Ready-Made Software)</h3>
        <p>
          Packaged software is standard, ready-to-use application software developed by software corporations for general users worldwide. Any person or organization can purchase or download and use it directly.
        </p>

        <div class="table-responsive my-3">
          <table class="table table-bordered table-hover">
            <thead class="table-primary">
              <tr>
                <th>Category</th>
                <th>Primary Purpose / Function</th>
                <th>Popular Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Word Processing</strong></td>
                <td>Creating, editing, formatting, and printing text documents.</td>
                <td>MS Word, Google Docs, WPS Writer, LibreOffice Writer, Adobe InDesign.</td>
              </tr>
              <tr>
                <td><strong>Spreadsheet</strong></td>
                <td>Organizing numeric data, keeping financial accounts, and performing calculations.</td>
                <td>MS Excel, Google Sheets, Quattro Pro, Zoho Sheet, Sheetgo.</td>
              </tr>
              <tr>
                <td><strong>Database Management (DBMS)</strong></td>
                <td>Creating, organizing, storing, and retrieving large collections of structured data.</td>
                <td>MS Access, Oracle, MS SQL Server, MySQL, MariaDB.</td>
              </tr>
              <tr>
                <td><strong>Presentation Software</strong></td>
                <td>Displaying information in the form of animated multimedia slide shows.</td>
                <td>MS PowerPoint, Google Slides, WPS Slides, Canva, Prezi, Tome, Pitch.</td>
              </tr>
              <tr>
                <td><strong>Multimedia Software</strong></td>
                <td>Playing and creating audio and video content.</td>
                <td>VLC Player, Windows Media Player, iTunes, KMPlayer, Real Player, Kodi.</td>
              </tr>
              <tr>
                <td><strong>Graphics Software</strong></td>
                <td>Creating, drawing, and editing digital images, photos, and visual designs.</td>
                <td>Adobe Photoshop, CorelDraw, MS Paint, Adobe Illustrator, Sketch.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr>

        <h3><i class="fas fa-user-tag text-success"></i> 2. Customized or Tailored Software</h3>
        <p>
          <strong>Customized software</strong> (also known as <strong>Tailored software</strong>) is software specifically developed by software companies and programmers to satisfy the unique requirements of a particular person, business, institution, or government organization.
        </p>
        <p>
          Because it is custom-built for one specific workflow, customized software developed for one organization cannot be directly used by another organization.
        </p>

        <div class="note-box note-tip">
          <h4><i class="fas fa-landmark"></i> Prominent Customized Software in Nepal</h4>
          <ul>
            <li><strong>SLC / SEE Result Processing Software:</strong> Custom-built to tabulate, process, and publish secondary school examination results in Nepal.</li>
            <li><strong>TU Result Processing Software:</strong> Manages university exam records, grade sheets, and transcripts for Tribhuvan University.</li>
            <li><strong>Pumori Banking Software:</strong> Specialized core banking software developed in Nepal, utilized widely across commercial and cooperative banks.</li>
            <li><strong>DocBLITZ:</strong> Specialized billing and record management software developed for and used by Nepal Telecom Corporation (NTC).</li>
            <li><strong>Air Ticket Reservation Systems:</strong> Customized flight booking and ticketing software for domestic airlines like Buddha Air and Nepal Airlines.</li>
            <li><strong>Hospital &amp; School Management Systems:</strong> Specialized systems for patient admissions, billing, medical records, and student tuition/attendance tracking.</li>
          </ul>
          <p class="mb-0">
            <strong>Key Software Development Companies in Nepal:</strong> Mercantile Communication Pvt. Ltd., MiDas Technologies Pvt. Ltd., Nepasoft Solutions Pvt. Ltd., and Javra Software Nepal Pvt. Ltd.
          </p>
        </div>

        <!-- Comparison Table: Packaged vs Customized Software -->
        <div class="table-responsive my-4">
          <table class="table table-bordered table-hover">
            <thead class="table-success">
              <tr>
                <th>Feature</th>
                <th>Packaged Software</th>
                <th>Customized (Tailored) Software</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Target Audience</strong></td>
                <td>General public and common users worldwide.</td>
                <td>Specific individual, company, or organization.</td>
              </tr>
              <tr>
                <td><strong>Development Purpose</strong></td>
                <td>General-purpose tasks (word processing, spreadsheets, media).</td>
                <td>Specific, tailored workflow requirements of an organization.</td>
              </tr>
              <tr>
                <td><strong>Cost</strong></td>
                <td>Comparatively lower cost because development cost is shared among millions of users.</td>
                <td>High development cost because a single customer pays for full design and coding.</td>
              </tr>
              <tr>
                <td><strong>Modifiability</strong></td>
                <td>Cannot be modified by end-users (fixed standard features).</td>
                <td>Easily modified and customized according to the client's needs.</td>
              </tr>
              <tr>
                <td><strong>Availability</strong></td>
                <td>Ready-made; instantly available off-the-shelf or via download.</td>
                <td>Takes weeks or months to analyze, design, code, and test.</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>MS Word, MS Excel, Adobe Photoshop, VLC Player.</td>
                <td>Pumori Banking, DocBLITZ (NTC), SLC Result Processing.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "4.6 Technical Terms & Chapter Recap",
      content: `
        <div class="note-box note-info">
          <h4><i class="fas fa-book-reader"></i> Chapter 4 Key Revision Points</h4>
          <ul>
            <li><strong>Hardware:</strong> Physical, tangible parts of the computer (microprocessor, motherboard, keyboard, mouse, RAM, monitor).</li>
            <li><strong>Computer Program:</strong> A sequence of instructions given to a computer to perform a task.</li>
            <li><strong>Computer Software:</strong> The intangible collection of programs that guides and controls hardware operations.</li>
            <li><strong>System Software:</strong> Controls and manages the internal operations of a computer and provides an environment for application software.</li>
            <li><strong>Operating System:</strong> Essential system software that manages hardware resources, provides user interface, and enables programs to run. Loaded during booting.</li>
            <li><strong>Language Processor:</strong> Translates source code written in programming languages into machine code (0s and 1s).</li>
            <li><strong>Assembler:</strong> Translates low-level assembly language into machine language.</li>
            <li><strong>Interpreter:</strong> Translates high-level language statement-by-statement, executing immediately without creating an object file.</li>
            <li><strong>Compiler:</strong> Translates the entire high-level program into object code at once, listing errors at the end.</li>
            <li><strong>Utility Software:</strong> Performs system maintenance, diagnostics, and protection (Antivirus, Scandisk, WinZip, Backup).</li>
            <li><strong>Packaged Software:</strong> Ready-made general-purpose applications (MS Word, Excel, PowerPoint, Photoshop).</li>
            <li><strong>Customized Software:</strong> Tailor-made application software built for a specific organization (Pumori Banking, DocBLITZ, TU/SLC Result software).</li>
          </ul>
        </div>
      `
    },
    {
      title: "Textbook Exercise Solutions \u2014 Chapter 4 (Computer Software)",
      content: `
        <p class="lead-text">
          Complete, unabridged textbook exercise solutions for <strong>Class 7 Computer Science &mdash; Chapter 4: Computer Software</strong> (Textbook Pages 47&ndash;50).
        </p>

        <!-- Question 1 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">1. Answer the following questions:</h4>

          <div class="qa-item my-3">
            <p class="question"><strong>a. Define computer program and software.</strong></p>
            <div class="answer">
              <p><strong>Computer Program:</strong> A computer program is a sequence or set of instructions given to a computer in a programming language to perform a specific task.</p>
              <p><strong>Computer Software:</strong> Computer software is a collection of computer programs, procedures, and documentation that tells the computer hardware what to do and how to do it, guiding and controlling operations at every step.</p>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>b. Write the differences between computer hardware and software.</strong></p>
            <div class="answer">
              <div class="table-responsive">
                <table class="table table-bordered table-sm">
                  <thead class="table-light">
                    <tr>
                      <th>Computer Hardware</th>
                      <th>Computer Software</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>It is the physical and tangible part of a computer that can be seen and touched.</td>
                      <td>It is the non-physical, intangible part of a computer that cannot be touched.</td>
                    </tr>
                    <tr>
                      <td>It consists of electronic chips, circuits, and physical machinery.</td>
                      <td>It consists of coded programs, instructions, and data.</td>
                    </tr>
                    <tr>
                      <td>Hardware cannot perform any task without software.</td>
                      <td>Software cannot run or be executed without hardware.</td>
                    </tr>
                    <tr>
                      <td>Examples: Keyboard, Mouse, CPU, RAM, Hard Disk, Monitor.</td>
                      <td>Examples: Windows 11, MS Word, Photoshop, Android, VLC Player.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>c. What is system software? List its types.</strong></p>
            <div class="answer">
              <p><strong>System software</strong> is the collection of programs that controls, coordinates, and manages the overall operation of computer hardware and provides a platform to develop and run application software.</p>
              <p>The three types of system software are:</p>
              <ol>
                <li>Operating System (OS)</li>
                <li>Language Processor (Translators)</li>
                <li>Utility Software</li>
              </ol>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>d. What is operating system software? Name any two operating system software.</strong></p>
            <div class="answer">
              <p>An <strong>operating system (OS)</strong> is special system software that controls and manages the overall operations of a computer, coordinates computer hardware, and provides an interface between the user, application software, and hardware.</p>
              <p>Two examples of operating system software are: <strong>Microsoft Windows 11</strong> and <strong>Linux</strong> (or Android OS, macOS).</p>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>e. List any four basic functions of operating system software.</strong></p>
            <div class="answer">
              <p>Four basic functions of operating system software are:</p>
              <ol>
                <li><strong>Device Management:</strong> It manages and controls input and output devices.</li>
                <li><strong>Memory Management:</strong> It manages computer primary memory (RAM) and secondary storage devices.</li>
                <li><strong>Environment Provision:</strong> It provides a stable working environment and platform to run other software.</li>
                <li><strong>Fault Notification:</strong> It monitors the system and alerts the user about any fault or error that occurs.</li>
              </ol>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>f. Why does a computer need an operating system?</strong></p>
            <div class="answer">
              <p>A computer needs an operating system because hardware on its own is an inert collection of electronic components that cannot execute tasks or communicate with the user. The operating system is the basic requirement of a computer &mdash; it boots the system into RAM, manages all hardware devices and memory, and creates an essential interface without which no application software (such as MS Word or web browsers) can load or execute.</p>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>g. What is a language processor? List the different types of language processors.</strong></p>
            <div class="answer">
              <p>A <strong>language processor</strong> (or translator) is a system program that converts programs written in human-readable programming languages (source code) into machine language (object code) that the computer CPU can understand and execute.</p>
              <p>The three different types of language processors are:</p>
              <ol>
                <li><strong>Assembler</strong></li>
                <li><strong>Interpreter</strong></li>
                <li><strong>Compiler</strong></li>
              </ol>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>h. Define assembler, interpreter and compiler.</strong></p>
            <div class="answer">
              <ul>
                <li><strong>Assembler:</strong> A language processor that converts programs written in assembly language (low-level language) into machine language (object code). Example: Netwide Assembler (NASM).</li>
                <li><strong>Interpreter:</strong> A language processor that converts programs written in high-level language into machine language statement-by-statement (line by line) and executes each statement immediately. Example: Python, QBASIC.</li>
                <li><strong>Compiler:</strong> A language processor that translates the entire program written in high-level language into machine language (object code) all at once before execution. Example: C, C++, Java.</li>
              </ul>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>i. What are source code and object code?</strong></p>
            <div class="answer">
              <p><strong>Source Code:</strong> The computer program written by a programmer using a high-level or assembly programming language. It is human-readable and cannot be executed directly by the CPU.</p>
              <p><strong>Object Code:</strong> The binary machine code (0s and 1s) produced after the source code has been translated by a compiler or assembler. It is directly understandable and executable by the computer CPU.</p>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>j. Mention the differences between an interpreter and a compiler.</strong></p>
            <div class="answer">
              <div class="table-responsive">
                <table class="table table-bordered table-sm">
                  <thead class="table-light">
                    <tr>
                      <th>Interpreter</th>
                      <th>Compiler</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Translates the program line-by-line (one statement at a time).</td>
                      <td>Translates the entire program into machine code all at once.</td>
                    </tr>
                    <tr>
                      <td>Displays errors immediately after reading each statement and stops.</td>
                      <td>Scans the entire program and lists all errors together at the end.</td>
                    </tr>
                    <tr>
                      <td>Does not generate a separate object code file.</td>
                      <td>Generates a separate, permanent object code file.</td>
                    </tr>
                    <tr>
                      <td>Execution is slower as re-translation is needed every time.</td>
                      <td>Execution is faster as the compiled object code runs directly.</td>
                    </tr>
                    <tr>
                      <td>Examples: QBASIC, Python, LOGO.</td>
                      <td>Examples: C, C++, Java, QB64.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>k. What is utility software? List any four utilities software.</strong></p>
            <div class="answer">
              <p><strong>Utility software</strong> (system utility) is a kind of system software designed to analyze, configure, optimize, protect, and maintain a computer system in good working condition.</p>
              <p>Four examples of utility software are:</p>
              <ol>
                <li>Antivirus software (e.g., Windows Defender, Kaspersky)</li>
                <li>Download Accelerator Plus (DAP)</li>
                <li>Backup software</li>
                <li>Disk repair/maintenance utility (Scandisk / Disk Defragmenter / WinZip)</li>
              </ol>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>l. What is application software? Name any four application software.</strong></p>
            <div class="answer">
              <p><strong>Application software</strong> is a category of software developed to help users perform specific, end-user tasks such as creating documents, preparing accounts, editing images, and playing multimedia.</p>
              <p>Four examples of application software are: <strong>Microsoft Word</strong>, <strong>Microsoft Excel</strong>, <strong>Adobe Photoshop</strong>, and <strong>VLC Media Player</strong>.</p>
            </div>
          </div>

          <div class="qa-item my-3">
            <p class="question"><strong>m. List any two differences between customized and packaged software.</strong></p>
            <div class="answer">
              <div class="table-responsive">
                <table class="table table-bordered table-sm">
                  <thead class="table-light">
                    <tr>
                      <th>Customized (Tailored) Software</th>
                      <th>Packaged Software</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Developed to meet the specific requirements of a particular person, company, or organization.</td>
                      <td>Ready-made software developed for all general users worldwide.</td>
                    </tr>
                    <tr>
                      <td>It cannot be directly used by other organizations because of unique design specifications.</td>
                      <td>It can be freely used by any person or organization for general tasks.</td>
                    </tr>
                    <tr>
                      <td>Examples: Pumori Banking Software, SLC Result Software.</td>
                      <td>Examples: MS Word, MS Excel, Adobe Photoshop.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <!-- Question 2 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">2. Write the appropriate technical terms for the following statements:</h4>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A set of instructions given to a computer to perform a task.</span>
              <span class="badge bg-primary rounded-pill">Computer Program</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A set of programs that tells computer hardware what to do and how to do it.</span>
              <span class="badge bg-primary rounded-pill">Computer Software</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A set of programs that controls and manages the overall operations of a computer.</span>
              <span class="badge bg-primary rounded-pill">Operating System</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A set of programs that converts programs written in any other language into machine language.</span>
              <span class="badge bg-primary rounded-pill">Language Processor (Translator)</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A language processor that converts one statement of a program at a time.</span>
              <span class="badge bg-primary rounded-pill">Interpreter</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>A language processor that converts whole programs written in high-level language into machine code at a time.</span>
              <span class="badge bg-primary rounded-pill">Compiler</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>Application software that is designed for an organisation.</span>
              <span class="badge bg-primary rounded-pill">Customized Software (Tailored Software)</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>Application software that is designed for general people.</span>
              <span class="badge bg-primary rounded-pill">Packaged Software</span>
            </li>
          </ol>
        </div>

        <hr>

        <!-- Question 3 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">3. State whether the following statements are true or false:</h4>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="table-light">
                <tr>
                  <th>#</th>
                  <th>Statement</th>
                  <th style="width: 15%;">True / False</th>
                  <th>Educational Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a.</strong></td>
                  <td>Software is the non-touchable part of a computer system.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>Software consists of electronic code, instructions, and logic that cannot be physically touched.</td>
                </tr>
                <tr>
                  <td><strong>b.</strong></td>
                  <td>A computer program is a set of instructions written in computer language.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>Programs are ordered instruction sequences coded in programming languages.</td>
                </tr>
                <tr>
                  <td><strong>c.</strong></td>
                  <td>The operating system provides an environment to run application software.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>The OS acts as the foundational layer that manages resources for application programs.</td>
                </tr>
                <tr>
                  <td><strong>d.</strong></td>
                  <td>The operating system software is used to create a document.</td>
                  <td><span class="badge bg-danger">False</span></td>
                  <td>Application software (word processor like MS Word), not the OS, is used to create documents.</td>
                </tr>
                <tr>
                  <td><strong>e.</strong></td>
                  <td>Microsoft Windows 11 and Android are application software.</td>
                  <td><span class="badge bg-danger">False</span></td>
                  <td>Windows 11 and Android are operating systems (system software), not application software.</td>
                </tr>
                <tr>
                  <td><strong>f.</strong></td>
                  <td>A language processor converts programs written in any programming language into machine language.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>Computers only understand machine language; language processors translate all source code into binary machine code.</td>
                </tr>
                <tr>
                  <td><strong>g.</strong></td>
                  <td>The compiler converts the whole program into machine code.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>A compiler translates the complete source code at once into an object code file.</td>
                </tr>
                <tr>
                  <td><strong>h.</strong></td>
                  <td>Utility software takes care of and maintains a computer.</td>
                  <td><span class="badge bg-success">True</span></td>
                  <td>Utilities perform maintenance tasks like virus scanning, disk defragmentation, and file backup.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr>

        <!-- Question 4 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">4. Choose the correct option from the given options:</h4>
          
          <div class="mcq-item my-3">
            <p><strong>a) A physical part of computer is &hellip;&hellip;</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Instruction &nbsp;&nbsp; ii. Software &nbsp;&nbsp; iii. Program &nbsp;&nbsp; <strong>iv. Hardware &nbsp; <i class="fas fa-check-circle text-success"></i></strong></li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: iv. Hardware</strong></p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>b) &hellip;&hellip; that controls and manages over all operation of a computer.</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Application software &nbsp;&nbsp; ii. Utility software &nbsp;&nbsp; <strong>iii. Operating software &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iv. Language Processor</li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: iii. Operating software</strong> (Operating System)</p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>c) Microsoft Windows 11 is an example of &hellip;&hellip;</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Application software &nbsp;&nbsp; <strong>ii. Operating software &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iii. Utility software &nbsp;&nbsp; iv. None of the above</li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: ii. Operating software</strong></p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>d) Utility Software is &hellip;&hellip;</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Antivirus &nbsp;&nbsp; ii. WinZip &nbsp;&nbsp; iii. Revo Uninstaller &nbsp;&nbsp; <strong>iv. All of the above &nbsp; <i class="fas fa-check-circle text-success"></i></strong></li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: iv. All of the above</strong></p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>e) A language processor that converts a statement of a program at a time and directs to the CPU is &hellip;&hellip;</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Translator &nbsp;&nbsp; ii. Assembler &nbsp;&nbsp; <strong>iii. Interpreter &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; iv. Compiler</li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: iii. Interpreter</strong></p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>f) &hellip;&hellip; is a translator that converts whole program written in high level language into machine language all at a time.</strong></p>
            <ul class="list-unstyled ps-3">
              <li>i. Assembler &nbsp;&nbsp; ii. Binary code &nbsp;&nbsp; iii. Interpreter &nbsp;&nbsp; <strong>iv. Compiler &nbsp; <i class="fas fa-check-circle text-success"></i></strong></li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: iv. Compiler</strong></p>
          </div>

          <div class="mcq-item my-3">
            <p><strong>g) Microsoft Word is an example of &hellip;&hellip;&hellip;&hellip; software.</strong></p>
            <ul class="list-unstyled ps-3">
              <li><strong>i. Word Processing &nbsp; <i class="fas fa-check-circle text-success"></i></strong> &nbsp;&nbsp; ii. Spreadsheet &nbsp;&nbsp; iii. DBMS &nbsp;&nbsp; iv. Graphic</li>
            </ul>
            <p class="text-success small ms-3"><strong>Answer: i. Word Processing</strong></p>
          </div>
        </div>

        <hr>

        <!-- Question 5 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">5. Fill in the blanks:</h4>
          <ol class="list-group list-group-numbered">
            <li class="list-group-item">
              <strong>Computer software</strong> guides and controls the computer hardware at every step where to start and stop during a particular job.
            </li>
            <li class="list-group-item">
              System software <strong>controls</strong> and <strong>manages</strong> the operations of computer.
            </li>
            <li class="list-group-item">
              No application software can run without <strong>operating system</strong> software.
            </li>
            <li class="list-group-item">
              A language processor is also known as <strong>translator</strong>.
            </li>
            <li class="list-group-item">
              A program written in any programming language is known as <strong>source</strong> code.
            </li>
            <li class="list-group-item">
              <strong>Object</strong> (or <strong>Machine</strong>) code is the output generated after the compilation of program.
            </li>
            <li class="list-group-item">
              <strong>Compiler</strong> converts whole programs written in high level language into machine language.
            </li>
            <li class="list-group-item">
              <strong>Packaged</strong> software is the readymade software for all general users.
            </li>
            <li class="list-group-item">
              A software program which fulfills the requirement of a particular company is known as <strong>customized</strong> (or <strong>tailored</strong>) software.
            </li>
          </ol>
        </div>

        <hr>

        <!-- Question 6 -->
        <div class="exercise-card mb-4">
          <h4 class="text-primary border-bottom pb-2">6. Match the following:</h4>

          <!-- Sub-question a -->
          <h5 class="text-secondary mt-3">a. Matching Language Processors &amp; Operating System:</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="table-light">
                <tr>
                  <th>Group A</th>
                  <th>Group B</th>
                  <th>Correct Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a. Interpreter</strong></td>
                  <td>i. Converts whole program written in low level language into object code.</td>
                  <td><strong>iv. Converts one statement of a program written in high level language into machine language</strong></td>
                </tr>
                <tr>
                  <td><strong>b. Compiler</strong></td>
                  <td>ii. Controls and manages overall operation of computer.</td>
                  <td><strong>iii. Converts whole program written in high level language into object code.</strong></td>
                </tr>
                <tr>
                  <td><strong>c. Assembler</strong></td>
                  <td>iii. Converts whole program written in high level language into object code.</td>
                  <td><strong>i. Converts whole program written in low level language into object code.</strong></td>
                </tr>
                <tr>
                  <td><strong>d. Operating System</strong></td>
                  <td>iv. Converts one statement of a program written in high level language into machine language.</td>
                  <td><strong>ii. Controls and manages overall operation of computer.</strong></td>
                </tr>
                <tr>
                  <td><em>(Distractor in Group B)</em></td>
                  <td>v. Program performs specific task.</td>
                  <td><em>(Application software definition)</em></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Sub-question b -->
          <h5 class="text-secondary mt-4">b. Matching Software Types &amp; Examples:</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="table-light">
                <tr>
                  <th>Group 'A'</th>
                  <th>Group 'B'</th>
                  <th>Correct Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a. Microsoft Windows 11</strong></td>
                  <td>i. Packaged software</td>
                  <td><strong>iii. Operating system</strong></td>
                </tr>
                <tr>
                  <td><strong>b. Python</strong></td>
                  <td>ii. Customized Software</td>
                  <td><strong>iv. Interpreter</strong> (High-level language using interpreter)</td>
                </tr>
                <tr>
                  <td><strong>c. Microsoft Word</strong></td>
                  <td>iii. Operating system</td>
                  <td><strong>i. Packaged software</strong></td>
                </tr>
                <tr>
                  <td><strong>d. Result Processing Software</strong></td>
                  <td>iv. Interpreter</td>
                  <td><strong>ii. Customized Software</strong></td>
                </tr>
                <tr>
                  <td><em>(Distractor in Group B)</em></td>
                  <td>v. Utility Software</td>
                  <td><em>(Not used in matched pairs)</em></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    }
  ]
};

// Update js/notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let notesDataCode = fs.readFileSync(notesDataPath, 'utf8');

// Parse notesData
const prefix = 'const notesData = ';
const suffixIndex = notesDataCode.lastIndexOf(';');
const jsonString = notesDataCode.slice(notesDataCode.indexOf(prefix) + prefix.length, suffixIndex).trim();
const notesObj = JSON.parse(jsonString);

// Find index of Class 7 Chapter 4
const chIndex = notesObj.class7.computerScience.findIndex(c => c.chapterNumber === 4);
if (chIndex === -1) {
  console.error("Could not find Class 7 Chapter 4!");
  process.exit(1);
}

// Replace only Chapter 4
notesObj.class7.computerScience[chIndex] = ch4Data;

// Write back to js/notes-data.js
const updatedNotesCode = `const notesData = ${JSON.stringify(notesObj, null, 2)};\n`;
fs.writeFileSync(notesDataPath, updatedNotesCode, 'utf8');
console.log("Successfully updated Class 7 Chapter 4 in js/notes-data.js!");

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
