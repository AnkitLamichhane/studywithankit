const fs = require('fs');
const path = require('path');

const notesData = {
  class6: {
    computerScience: [
      {
        id: "class6-cs-ch1",
        chapterNumber: 1,
        title: "Introduction to Computers",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-03",
        summary: "Fundamental concepts of computers, definition, characteristics, and basic components.",
        topics: [
          {
            title: "1. What is a Computer?",
            content: `
              <p>An <strong>electronic computer</strong> is an electronic device that accepts raw data as input, processes it according to stored instructions, produces meaningful information as output, and stores the results for future use.</p>
              <p>The word <em>computer</em> comes from the Latin word <em>computare</em>, which means "to calculate". However, modern computers do far more than simple calculations.</p>
              <div class="callout callout-doyouknow">
                <div class="callout-title">💡 Did You Know?</div>
                <p>Charles Babbage is known as the <strong>Father of Computer</strong> because he designed the Analytical Engine, which laid the foundation for modern electronic computers.</p>
              </div>
            `
          },
          {
            title: "2. Basic Characteristics of Computers",
            content: `
              <p>Computers have several distinct characteristics that make them essential in daily life:</p>
              <ul>
                <li><strong>Speed:</strong> A computer performs millions of instructions per second (MIPS).</li>
                <li><strong>Accuracy:</strong> Computers produce 100% accurate results provided the input and instructions are correct (GIGO: Garbage In, Garbage Out).</li>
                <li><strong>Diligence:</strong> Unlike humans, a computer never gets tired or suffers from lack of concentration.</li>
                <li><strong>Versatility:</strong> A computer can perform completely different tasks simultaneously (e.g. playing music while typing a document).</li>
                <li><strong>Storage Capacity:</strong> Computers can store massive amounts of data in secondary storage devices.</li>
              </ul>
            `
          },
          {
            title: "3. Fundamental Components (IPO Cycle)",
            content: `
              <p>Every computer operates on the <strong>Input &rarr; Process &rarr; Output (IPO)</strong> cycle.</p>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Function</th>
                      <th>Example Devices</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Input</strong></td>
                      <td>Accepts data and commands from user</td>
                      <td>Keyboard, Mouse, Scanner, Microphone</td>
                    </tr>
                    <tr>
                      <td><strong>Processing</strong></td>
                      <td>Processes input data according to instructions</td>
                      <td>Central Processing Unit (CPU)</td>
                    </tr>
                    <tr>
                      <td><strong>Output</strong></td>
                      <td>Displays processed information to user</td>
                      <td>Monitor, Printer, Speaker</td>
                    </tr>
                    <tr>
                      <td><strong>Storage</strong></td>
                      <td>Stores data permanently or temporarily</td>
                      <td>Hard Disk, SSD, RAM, Pen Drive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `
          }
        ]
      },
      {
        id: "class6-cs-ch2",
        chapterNumber: 2,
        title: "Computer History",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-03",
        summary: "Early calculating devices from Abacus to Mark-I.",
        topics: [
          {
            title: "1. Early Calculating Devices",
            content: `
              <p>Before modern electronic computers were invented, humans developed manual calculating tools to assist with counting and math.</p>
              <ul>
                <li><strong>Abacus:</strong> First mechanical counting device invented in China over 4000 years ago.</li>
                <li><strong>Napier's Bones:</strong> Invented by John Napier in 1617 for multiplication and division.</li>
                <li><strong>Pascaline:</strong> First mechanical adding machine invented by Blaise Pascal in 1642.</li>
                <li><strong>Analytical Engine:</strong> Designed by Charles Babbage in 1837; included input, memory, processor, and output units.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "class6-cs-ch3",
        chapterNumber: 3,
        title: "Generations of Computers",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-03",
        summary: "First to fifth generation computer technology evolution.",
        topics: [
          {
            title: "1. Five Generations of Computers",
            content: `<p>Notes for Chapter 3 will be updated soon. [Add your notes here]</p>`
          }
        ]
      },
      {
        id: "class6-cs-ch4",
        chapterNumber: 4,
        title: "Types of Computers",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-03",
        summary: "Supercomputers, mainframes, minicomputers, and microcomputers.",
        topics: [
          {
            title: "1. Classification of Computers",
            content: `<p>Notes for Chapter 4 will be updated soon. [Add your notes here]</p>`
          }
        ]
      },
      {
        id: "class6-cs-ch5",
        chapterNumber: 5,
        title: "Computer Software",
        subject: "Computer Science",
        className: "Class 6",
        updated: "2026-09-03",
        summary: "System software vs application software.",
        topics: [
          {
            title: "1. Software Fundamentals",
            content: `<p>Notes for Chapter 5 will be updated soon. [Add your notes here]</p>`
          }
        ]
      }
    ]
  },

  class7: {
    computerScience: []
  },

  class8: {
    computerScience: [
      {
        id: "class8-cs-ch1",
        chapterNumber: 1,
        title: "Computer and Its Development History",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Detailed history of computing machines and pioneers.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 1 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch2",
        chapterNumber: 2,
        title: "Generation of Computer",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Detailed classification of 1st to 5th computer generations.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 2 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch3",
        chapterNumber: 3,
        title: "Types of Computers",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Analog, digital, hybrid, super, mainframe, mini & microcomputers.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 3 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch4",
        chapterNumber: 4,
        title: "Computer Software",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "System software, OS, application software, utilities.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 4 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch5",
        chapterNumber: 5,
        title: "Word Processing - Microsoft Word 2016",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Creating, editing, formatting documents in MS-Word 2016.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 5 will be added soon. [Add your notes here]</p>` }
        ]
      },

      /* ====================================================================
         CHAPTER 6: SPREADSHEET – MICROSOFT EXCEL 2016
         COMPLETE NOTES & COMPLETE TEXTBOOK EXERCISE SOLUTIONS (Q1 - Q5)
         ==================================================================== */
      {
        id: "class8-cs-ch6",
        chapterNumber: 6,
        title: "Spreadsheet - Microsoft Excel 2016",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-06",
        author: "Prepared by Er. Ankit Lamichhane",
        summary: "Complete guide to worksheets, cells, data types, formulas, built-in functions (SUM, MAX, MIN, AVERAGE, IF, OR, AND), formatting, charts & complete textbook exercise solutions.",
        topics: [
          {
            title: "Learning Objectives",
            content: `
              <p>At the end of this chapter, students will be able to:</p>
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1</span><span>Prepare a spreadsheet to store data properly in columns and rows.</span></div>
                <div class="step-card"><span class="step-badge">2</span><span>Perform mathematical, financial and logical operations on numeric data.</span></div>
                <div class="step-card"><span class="step-badge">3</span><span>Prepare different types of graphs (charts) from worksheet data.</span></div>
                <div class="step-card"><span class="step-badge">4</span><span>Enter, edit, format and organize data using rows, columns and cells.</span></div>
                <div class="step-card"><span class="step-badge">5</span><span>Use built-in functions like SUM, MAX, MIN, AVERAGE, IF, OR and AND.</span></div>
              </div>
            `
          },
          {
            title: "6.0 Introduction: What is a Spreadsheet?",
            content: `
              <p><strong>Spreadsheet (electronic spreadsheet) software</strong> is application software that lets you organize data in columns and rows.</p>
              <ul>
                <li>It sets relationships between columns and rows so it can perform mathematical, financial and logical operations easily.</li>
                <li>When data in a cell changes, values in all dependent cells update <strong>automatically</strong>.</li>
                <li>The program has all built-in functions needed for complex calculations.</li>
                <li>Used widely in financial and business sectors for salary sheets, invoices, balance sheets, mark ledgers, report cards, etc.</li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">📌 REMEMBER</div>
                <p>A worksheet is also known as a spreadsheet &mdash; the working grid of rows and columns.</p>
              </div>

              <div class="callout callout-doyouknow">
                <div class="callout-title">💡 EXAMPLES OF SPREADSHEET SOFTWARE</div>
                <p>Common spreadsheet software: Microsoft Excel, Lotus 1-2-3, OpenOffice Calc, Quattro Pro, AppleWorks.</p>
              </div>

              <div class="callout callout-quickcheck">
                <div class="callout-title">🎯 EXAM FOCUS</div>
                <p>Spreadsheet software organizes data in columns &amp; rows and auto-recalculates dependent values whenever data changes.</p>
              </div>

              <h3>Worksheets and Cells</h3>
              <p>The spreadsheet program consists of worksheets, like a paper ledger sheet, where you store data in a grid of rows and columns.</p>
              <p>The intersections of rows and columns form <strong>cells</strong> &mdash; the actual area where data is stored.</p>

              <div class="ui-figure">
                <div class="ui-figure-header">📊 Figure 6.1: Cell Grid (Intersection of Column &amp; Row)</div>
                <div class="ui-window-box">
                  <div class="table-responsive">
                    <table class="notes-table" style="text-align: center;">
                      <thead>
                        <tr><th></th><th>A</th><th>B</th><th style="background: var(--primary); color:#fff;">C</th><th>D</th><th>E</th></tr>
                      </thead>
                      <tbody>
                        <tr><td><strong>1</strong></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td><strong>2</strong></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td><strong>3</strong></td><td></td><td></td><td style="background: #0284c7; color: #fff; font-weight: 800;">Cell C3</td><td></td><td></td></tr>
                        <tr><td><strong>4</strong></td><td></td><td></td><td></td><td></td><td></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="ui-figure-caption">Cell C3 = intersection of Column C &amp; Row 3</div>
              </div>
            `
          },
          {
            title: "6.1 Basics of Spreadsheet: Column, Row & Cell",
            content: `
              <h3>COLUMN</h3>
              <ul>
                <li>The vertical space running from top to bottom is called a <strong>Column</strong>.</li>
                <li>The latest MS-Excel version has <strong>16,384 columns</strong> (from column A to XFD) in a single worksheet.</li>
                <li>Each column is labeled A to Z, AA to AZ, BA to BZ, and so on. The column label is known as the <strong>column header</strong>.</li>
              </ul>

              <h3>ROW</h3>
              <ul>
                <li>The horizontal space running from left to right is called a <strong>Row</strong>.</li>
                <li>The latest version of MS-Excel has <strong>1,048,576 rows</strong>.</li>
                <li>Rows are labeled with numbers 1, 2, 3... The row label is known as the <strong>row header</strong>.</li>
              </ul>

              <h3>CELL</h3>
              <ul>
                <li>A cell is a rectangular space formed by the intersection of a row and a column, surrounded by gridlines.</li>
                <li>Each cell is identified by its <strong>cell address</strong> = column heading + row number (e.g. <code>A1</code>, <code>B4</code>, <code>C3</code>).</li>
              </ul>
            `
          },
          {
            title: "6.2 Microsoft Excel & Starting MS-Excel 2016",
            content: `
              <p>MS-Excel is the most commonly used spreadsheet software, developed by Microsoft Corporation, USA. It lets you store, organize, perform calculations, and present data as graphs.</p>
              
              <h3>To Start MS-Excel 2016:</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div>Click the <strong>Start button</strong> &rarr; select <strong>Excel 2016</strong> in Pinned/Recommended section.</div></div>
                <div class="step-item"><span class="step-badge">2</span><div><em>OR:</em> Click <strong>Start &rarr; All Apps &rarr; scroll down &rarr; select Excel 2016</strong>.</div></div>
                <div class="step-item"><span class="step-badge">3</span><div><em>OR:</em> Click Search box on Taskbar &rarr; type <code>Excel</code> &rarr; press Enter &rarr; click Excel 2016.</div></div>
              </div>

              <div class="ui-figure">
                <div class="ui-figure-header">🖥️ Figure 6.2: Simplified MS-Excel 2016 Window</div>
                <div class="ui-window-box">
                  <div class="ui-ribbon-bar">
                    <span class="ui-tab active">File</span><span class="ui-tab">Home</span><span class="ui-tab">Insert</span><span class="ui-tab">Page Layout</span><span class="ui-tab">Formulas</span><span class="ui-tab">Data</span><span class="ui-tab">Review</span><span class="ui-tab">View</span>
                  </div>
                  <div style="padding: 0.5rem; background: var(--surface); border: 1px solid var(--border); margin-top: 0.5rem;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Book1 - Excel</div>
                  </div>
                </div>
                <div class="ui-figure-caption">MS-Excel 2016 application window</div>
              </div>
            `
          },
          {
            title: "6.3 Basic Terms Used in MS-Excel",
            content: `
              <ul>
                <li><strong>Active Cell:</strong> Each cell is surrounded by light gray gridlines. Data can be entered only in an active cell. There is only one active cell at a time &mdash; it is currently selected and surrounded by a dark border. Select a new active cell using arrow keys or clicking with mouse.</li>
                <li><strong>Worksheet:</strong> A wide sheet made up of rows and columns where we enter data and perform calculations. Also known as a spreadsheet.</li>
                <li><strong>Chart Sheet:</strong> A sheet that contains only a chart. Charts are identified by default unique names like Chart1, Chart2, etc.</li>
                <li><strong>Workbook:</strong> A file containing one or more worksheets and chart sheets, used to organize related information. Excel workbook files use the <strong>.xlsx</strong> extension (.xls in earlier versions).</li>
                <li><strong>Range of Cells:</strong> A group of adjacent cells forming a rectangle &mdash; also known as a block of cells, e.g., <code>A1:D1</code> or <code>A1..D1</code>.</li>
              </ul>

              <h3>Name Box and Formula Bar</h3>
              <ul>
                <li><strong>Name Box:</strong> Displays the address of the active cell or selected range &mdash; also known as the address bar.</li>
                <li><strong>Formula Bar:</strong> Displays the contents of the active cell: text, numbers, formulas, or functions. The content of a cell can be edited directly in the formula bar.</li>
              </ul>

              <div class="ui-figure">
                <div class="ui-figure-header">📍 Figure 6.3: Name Box &amp; Formula Bar</div>
                <div class="ui-window-box">
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    <div style="border: 1px solid var(--border); padding: 0.4rem 0.8rem; font-weight: 800; background: var(--surface); color: var(--primary);">A1</div>
                    <div style="border: 1px solid var(--border); padding: 0.4rem 0.8rem; flex: 1; font-family: monospace; background: var(--surface);">fx =SUM(C5:G5)</div>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted); margin-top: 0.3rem;">
                    <span>Name Box (Address)</span>
                    <span>Formula Bar (Contents / Formula)</span>
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "6.4 Types of Data Used in MS-Excel",
            content: `
              <h3>1. Text (Label)</h3>
              <ul>
                <li>Text is any string data made up of letters, numbers or spaces. Also known as a <strong>Label</strong>. It is not used in mathematical calculations.</li>
                <li>All text entries are aligned to the <strong>LEFT</strong> in a cell by default.</li>
                <li>If text does not fit, it extends over empty neighboring cells or gets cut off. Examples: <code>24ADP105</code>, <code>SojanThapa</code>, <code>15-Kha</code>.</li>
              </ul>

              <h3>2. Number (Value)</h3>
              <ul>
                <li>A number is numeric data, also known as a <strong>Value</strong> &mdash; digits 0-9 plus special characters (positive/negative sign, currency, commas, %, decimal, parentheses).</li>
                <li>Numeric entries can be used in calculations. By default, numbers are aligned to the <strong>RIGHT</strong> in a cell.</li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">📌 NOTE ON NUMBERS AS TEXT</div>
                <p>To store a number as text in Excel, type an apostrophe (<code>'</code>) before it, e.g., <code>'2081</code>.</p>
              </div>

              <h3>3. Formula</h3>
              <ul>
                <li>A <strong>Formula</strong> is an entry in a worksheet that defines the mathematical or logical relationship between two or more cells.</li>
                <li>A formula can contain values, operators, functions, and cell addresses.</li>
                <li>Excel performs operations according to standard order of precedence &mdash; operations inside parentheses <code>()</code> are performed first.</li>
                <li><strong>CRITICAL: Every formula in MS-Excel MUST begin with an equal sign (=).</strong></li>
              </ul>

              <div class="callout callout-quickcheck">
                <div class="callout-title">🎯 EXAM FOCUS</div>
                <p>Remember: every formula MUST start with <code>=</code>, e.g., <code>=A1*B1</code> multiplies the contents of cell A1 and cell B1.</p>
              </div>
            `
          },
          {
            title: "6.5 Working in MS-Excel",
            content: `
              <h3>6.5.1 Creating a New Workbook</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div>Click the <strong>File tab</strong> &mdash; it displays the list of options.</div></div>
                <div class="step-item"><span class="step-badge">2</span><div>Click on <strong>New</strong>.</div></div>
                <div class="step-item"><span class="step-badge">3</span><div>Click on <strong>Blank Workbook</strong> (Shortcut: <code>Ctrl + N</code>).</div></div>
              </div>

              <h3>6.5.2 &ndash; 6.5.3 Entering Text &amp; Numbers</h3>
              <ul>
                <li><strong>Entering Text:</strong> Select cell &rarr; type required text (appears in cell &amp; formula bar) &rarr; press Enter, Tab, or arrow key to accept (Esc to cancel).</li>
                <li><strong>Entering Numbers:</strong> Select cell &rarr; type number with/without decimal (use minus sign or parentheses for negative) &rarr; press Enter.</li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">📌 KEYBOARD NAVIGATION</div>
                <p>Pressing <strong>Enter</strong> moves selection DOWN one cell; pressing <strong>Tab</strong> moves selection RIGHT one cell.</p>
              </div>

              <h3>6.5.4 Entering Dates and Times</h3>
              <ul>
                <li><strong>Dates:</strong> Entered as <code>mm/dd/yyyy</code> (08/05/2010), <code>yyyy-mm-dd</code> (2012-07-29), or <code>dd-mmm-yyyy</code> (21-Sep-2012).</li>
                <li><strong>Times:</strong> Entered in 24-hour (<code>14:30:00</code>) or 12-hour (<code>2:30 p</code>) format.</li>
                <li>Excel treats dates/times as formatted numbers and aligns them to the RIGHT.</li>
                <li><strong>Shortcuts:</strong> Press <code>Ctrl + ;</code> to insert today's date. Press <code>Ctrl + Shift + ;</code> (Ctrl + :) to insert current time.</li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">⚠️ FIXING ##### DISPLAY</div>
                <p>A cell displays <code>#####</code> when data or number format is wider than column width &mdash; simply widen the column to fix it.</p>
              </div>

              <h3>6.5.5 Saving and Exiting MS-Excel</h3>
              <p>File tab &rarr; Save As &rarr; Browse &rarr; choose location &rarr; type file name &rarr; click <strong>Save</strong> (Shortcut: <code>Ctrl + S</code>). Click Close (X) to exit application.</p>
            `
          },
          {
            title: "Practical Activities 1 & 2",
            content: `
              <h3>Practical 1 &mdash; Marks Ledger</h3>
              <p>Open a worksheet, enter the data below, and save workbook as <code>ExcelPractical1.xlsx</code>:</p>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Roll No.</th><th>Student Name</th><th>Math</th><th>Science</th><th>Computer</th><th>English</th><th>Nepali</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Anjila Gurung</td><td>87</td><td>78</td><td>98</td><td>99</td><td>87</td></tr>
                    <tr><td>2</td><td>Amit Thapa</td><td>96</td><td>68</td><td>78</td><td>78</td><td>84</td></tr>
                    <tr><td>3</td><td>Sohan Prajapati</td><td>45</td><td>77</td><td>85</td><td>87</td><td>76</td></tr>
                    <tr><td>4</td><td>Roshan Karna</td><td>67</td><td>75</td><td>98</td><td>90</td><td>68</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>Practical 2 &mdash; Kirana Pasal Bill</h3>
              <p>Open a worksheet, enter the data below, and save workbook as <code>ExcelPractical2.xlsx</code>:</p>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>S.No.</th><th>Particular</th><th>Unit Price</th><th>Quantity</th><th>Unit</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1</td><td>Basmati Rice</td><td>145</td><td>25</td><td>kg</td></tr>
                    <tr><td>2</td><td>Rahar Dal</td><td>215</td><td>5</td><td>kg</td></tr>
                    <tr><td>3</td><td>Mustard Oil</td><td>225</td><td>5</td><td>lt</td></tr>
                    <tr><td>4</td><td>Washing Soap</td><td>75</td><td>4</td><td>pcs</td></tr>
                  </tbody>
                </table>
              </div>
            `
          },
          {
            title: "6.6 &ndash; 6.7 Opening Workbook &amp; Selecting Basics",
            content: `
              <h3>6.6 Opening a Workbook</h3>
              <p>File tab &rarr; Open &rarr; Browse &rarr; select Excel file &rarr; click Open.</p>

              <h3>6.7 Selecting Cells, Rows, Columns &amp; Worksheet</h3>
              <ul>
                <li><strong>Single Cell:</strong> Click left mouse button on cell or use arrow keys.</li>
                <li><strong>Range of Adjacent Cells:</strong> Click first cell &rarr; drag mouse diagonally to last cell (OR click first cell &rarr; hold <strong>SHIFT</strong> &rarr; click last cell). Example: <code>C6:D8</code>.</li>
                <li><strong>Non-Adjacent Cells:</strong> Click first cell &rarr; press and hold <strong>CTRL key</strong> &rarr; click and drag over other non-adjacent cells. Example: selecting <code>B5:B9</code> and <code>F5:F9</code> together.</li>
                <li><strong>Single Row / Column:</strong> Click row number (row header) or column letter (column header).</li>
                <li><strong>Multiple Rows / Columns:</strong> Click first header and drag over adjacent headers.</li>
                <li><strong>Entire Worksheet:</strong> Press <code>Ctrl + A</code> OR click the select-all corner box above row 1 and left of column A.</li>
              </ul>
            `
          },
          {
            title: "6.8 Editing Worksheet Contents",
            content: `
              <h3>a. Editing Cell Contents</h3>
              <ul>
                <li>Select cell and press <strong>F2 key</strong>, OR double-click cell to position text cursor.</li>
                <li>OR click cell and edit contents directly in the <strong>Formula Bar</strong>.</li>
              </ul>

              <h3>b. Deleting &amp; Clearing Cell Contents</h3>
              <ul>
                <li><strong>Delete key:</strong> Select cell/range &rarr; press <code>Delete</code> (clears data contents, keeps formatting).</li>
                <li><strong>Clear command:</strong> Home tab &rarr; Editing group &rarr; Clear &rarr; choose <em>Clear All</em> (removes both contents &amp; formatting), <em>Clear Formats</em>, or <em>Clear Contents</em>.</li>
              </ul>

              <h3>c. Copying &amp; Moving Cell Contents</h3>
              <ul>
                <li><strong>Copy:</strong> Select cell(s) &rarr; <code>Ctrl + C</code> &rarr; select destination &rarr; <code>Ctrl + V</code>.</li>
                <li><strong>Move (Cut):</strong> Select cell(s) &rarr; <code>Ctrl + X</code> &rarr; select destination &rarr; <code>Ctrl + V</code>.</li>
              </ul>
            `
          },
          {
            title: "6.9 AutoFill Feature",
            content: `
              <p><strong>AutoFill</strong> lets you copy/fill the same data, series of numbers, dates, weekdays, months or formulas across rows or columns automatically.</p>
              <p>The <strong>Fill Handle</strong> is the small black square at the lower-right corner of a selected cell. The pointer turns into a black plus (<code>+</code>) sign over it.</p>

              <h3>Steps to AutoFill:</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div>Select the cell containing data/formula to copy.</div></div>
                <div class="step-item"><span class="step-badge">2</span><div>Point to Fill Handle until cursor becomes a plus (<code>+</code>) sign.</div></div>
                <div class="step-item"><span class="step-badge">3</span><div>Click and drag down or right across adjacent cells.</div></div>
                <div class="step-item"><span class="step-badge">4</span><div>Release mouse button.</div></div>
              </div>

              <h3>Filling Serial Numbers:</h3>
              <ul>
                <li><strong>Increment of 1:</strong> Type <code>1</code> in cell &rarr; press and hold <strong>Ctrl key</strong> &rarr; drag Fill Handle down.</li>
                <li><strong>Custom Increment (e.g. 1, 3, 5...):</strong> Type <code>1</code> in A1, type <code>3</code> in A2 &rarr; select both cells (A1:A2) &rarr; drag Fill Handle down. Excel continues the pattern automatically.</li>
              </ul>
            `
          },
          {
            title: "6.10 &ndash; 6.12 Insert/Delete Cells, Rows, Columns &amp; Worksheets",
            content: `
              <h3>Inserting &amp; Deleting Rows &amp; Columns</h3>
              <ul>
                <li><strong>Insert Row:</strong> Select row/cell above where to insert &rarr; Home tab &rarr; Cells group &rarr; Insert &rarr; <strong>Insert Sheet Rows</strong>.</li>
                <li><strong>Insert Column:</strong> Select column/cell to the right &rarr; Home tab &rarr; Cells group &rarr; Insert &rarr; <strong>Insert Sheet Columns</strong>.</li>
                <li><strong>Delete Row/Column:</strong> Home tab &rarr; Cells group &rarr; Delete &rarr; Delete Sheet Rows / Delete Sheet Columns.</li>
              </ul>

              <h3>Worksheet Management</h3>
              <ul>
                <li><strong>Insert Worksheet:</strong> Click New Sheet (<code>+</code>) button on tab bar OR Home tab &rarr; Insert &rarr; Insert Sheet.</li>
                <li><strong>Delete Worksheet:</strong> Home tab &rarr; Delete &rarr; Delete Sheet (OR right-click sheet tab &rarr; Delete).</li>
                <li><strong>Rename Worksheet:</strong> Double-click sheet tab (OR right-click sheet tab &rarr; Rename &rarr; type new name).</li>
              </ul>
            `
          },
          {
            title: "6.13 &ndash; 6.14 Formatting Data &amp; Cell Borders",
            content: `
              <h3>6.13 Formatting Text &amp; Numbers</h3>
              <ul>
                <li><strong>Text Formatting:</strong> Select cell(s) &rarr; Home tab &rarr; Font group (choose Font, Size, Bold, Italic, Color, Fill Color).</li>
                <li><strong>Number Formats:</strong> Home tab &rarr; Number group &rarr; choose <em>General, Number (2 decimals), Currency ($), Date/Time, Percentage (%)</em>.</li>
                <li><strong>Alignment:</strong> Home tab &rarr; Alignment group &rarr; Left, Center, Right, Top, Middle, Bottom, <strong>Wrap Text</strong> (fits long text in cell), <strong>Merge &amp; Center</strong> (combines cells into one).</li>
              </ul>

              <h3>6.14 Adding Borders to Cells (Making Data Print-Ready)</h3>
              <p>Gridlines do NOT appear when printing a spreadsheet, so borders must be added for clarity when printing:</p>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div>Select range of cells where borders are needed.</div></div>
                <div class="step-item"><span class="step-badge">2</span><div>Home tab &rarr; Font group &rarr; click <strong>Borders dropdown</strong> &rarr; select <strong>All Borders</strong> (or Format Cells &rarr; Border tab).</div></div>
              </div>
            `
          },
          {
            title: "6.15 Working with Formulas",
            content: `
              <p>A formula is an equation that performs calculations on worksheet values. <strong>All formulas begin with equal sign (=).</strong></p>

              <h3>Task: Writing Your First Formula</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div>Select cell where result should appear (e.g. C1).</div></div>
                <div class="step-item"><span class="step-badge">2</span><div>Type <code>=</code>.</div></div>
                <div class="step-item"><span class="step-badge">3</span><div>Enter formula equation, e.g., <code>=A1*B1</code> to multiply cell A1 and B1.</div></div>
                <div class="step-item"><span class="step-badge">4</span><div>Press <strong>Enter</strong>.</div></div>
              </div>

              <h3>Practicals 3 &amp; 4:</h3>
              <ul>
                <li><strong>Practical 3 (Electric Charge Total):</strong> Select F4 &rarr; type <code>=B4+C4+D4+E4</code> &rarr; press Enter &rarr; drag Fill Handle down.</li>
                <li><strong>Practical 4 (Marks Ledger Total):</strong> Open <code>ExcelPractical1.xlsx</code> &rarr; select H5 &rarr; type <code>=C5+D5+E5+F5+G5</code> &rarr; press Enter &rarr; drag Fill Handle to H8.</li>
              </ul>
            `
          },
          {
            title: "6.16 Working with Built-in Functions",
            content: `
              <p>A <strong>Function</strong> is a predefined built-in formula that performs calculations on specific values (arguments).</p>

              <h3>i. SUM Function</h3>
              <p>Calculates the sum of all numbers in a range of cells.</p>
              <div class="callout callout-doyouknow">
                <div class="callout-title">📐 SYNTAX &amp; EXAMPLES</div>
                <p><code>=SUM(number1, number2, ...)</code><br>
                <code>=SUM(A1:E1)</code> adds all numbers from cell A1 to E1.<br>
                <code>=SUM(C5:G5)</code> adds subject marks for student.</p>
              </div>

              <h3>ii&ndash;iv. MAX, MIN &amp; AVERAGE Functions</h3>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Function</th><th>Description</th><th>Example &amp; Result</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>MAX</strong></td><td>Returns highest (maximum) value in range</td><td><code>=MAX(C5:C8)</code> &rarr; result: 89</td></tr>
                    <tr><td><strong>MIN</strong></td><td>Returns lowest (minimum) value in range</td><td><code>=MIN(C5:C8)</code> &rarr; result: 45</td></tr>
                    <tr><td><strong>AVERAGE</strong></td><td>Calculates arithmetic mean of range</td><td><code>=AVERAGE(C5:C8)</code> &rarr; result: 69.25</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>v. IF Function (Logical Test)</h3>
              <p>Tests a logical condition and returns one value if TRUE, and another if FALSE.</p>
              <p><code>=IF(logical_test, value_if_true, value_if_false)</code></p>
              <div class="callout callout-tryit">
                <div class="callout-title">✏️ PRACTICAL 7: TAX CALCULATION</div>
                <p>Calculate Tax as 15% of Salary if Salary &gt; 50,000, otherwise 12% of Salary:<br>
                Cell E3 formula: <code>=IF(D3>50000, D3*15%, D3*12%)</code> &rarr; copy down to E6.</p>
              </div>

              <h3>vi&ndash;vii. OR &amp; AND Functions</h3>
              <ul>
                <li><strong>OR Function:</strong> Returns TRUE if <em>any</em> condition is TRUE. Syntax: <code>=OR(cond1, cond2, ...)</code></li>
                <li><strong>AND Function:</strong> Returns TRUE only if <em>ALL</em> conditions are TRUE. Syntax: <code>=AND(cond1, cond2, ...)</code></li>
              </ul>

              <div class="callout callout-remember">
                <div class="callout-title">📌 PRACTICAL 8: GRADE SHEET (OR + IF)</div>
                <p>Display Result as <code>***</code> if any subject mark is below 35:<br>
                Cell C13: <code>=IF(OR(D5<35, D6<35, D7<35, D8<35, D9<35, D10<35, D11<35), "***", "Pass")</code></p>
              </div>
            `
          },
          {
            title: "6.17 Charts in Excel",
            content: `
              <p>A <strong>Chart</strong> is a graphical representation of numeric data, making it easier to compare and understand trends.</p>

              <h3>Components (Anatomy) of an Excel Chart:</h3>
              <ul>
                <li><strong>Chart Title:</strong> Title heading of chart.</li>
                <li><strong>Data Point:</strong> Single value displayed as bar, slice or point.</li>
                <li><strong>Data Series:</strong> Group of related data points plotted together.</li>
                <li><strong>Legend:</strong> Identifies each data series using color/pattern box.</li>
                <li><strong>Plot Area:</strong> Area where data series are drawn.</li>
                <li><strong>X-axis &amp; Y-axis:</strong> Category horizontal axis (X) and Value vertical axis (Y).</li>
              </ul>

              <h3>Main Types of Charts:</h3>
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1</span><span><strong>Column Chart:</strong> Vertical bars comparing values across categories.</span></div>
                <div class="step-card"><span class="step-badge">2</span><span><strong>Line Chart:</strong> Line connecting data points to show trends over time.</span></div>
                <div class="step-card"><span class="step-badge">3</span><span><strong>Pie Chart:</strong> Circular slices showing each item as percentage of whole.</span></div>
              </div>

              <h3>Creating a Column Chart (Step-by-Step):</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">a</span><div>Select data range (e.g., A10:C14).</div></div>
                <div class="step-item"><span class="step-badge">b</span><div>Insert tab &rarr; Charts group &rarr; click <strong>Column</strong> &rarr; choose chart style.</div></div>
                <div class="step-item"><span class="step-badge">c</span><div>Chart appears on worksheet. Design tab &rarr; Add Chart Element to adjust titles &amp; legend.</div></div>
              </div>
            `
          },

          /* ====================================================================
             COMPLETE TEXTBOOK EXERCISE SOLUTIONS FOR SPREADSHEET (CH 6)
             ==================================================================== */
          {
            title: "Textbook Exercise Solutions &mdash; Spreadsheet MS-Excel 2016",
            content: `
              <h2>Innovative Computer Science &mdash; Book 8, Unit 6 Complete Exercise Solutions</h2>

              <h3>1. Very Short Answer Questions</h3>
              <div class="qa-card">
                <div class="qa-card-q">a. What is spreadsheet software?</div>
                <div class="qa-card-a"><strong>Answer:</strong> Spreadsheet software is application software designed to organize, calculate, and analyze data in a grid of rows and columns.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">b. List any two spreadsheet software.</div>
                <div class="qa-card-a"><strong>Answer:</strong> Microsoft Excel and OpenOffice Calc.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">c. What is a spreadsheet?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A spreadsheet (or worksheet) is a working sheet made up of rows and columns used to enter data and perform calculations.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">d. What is the cell address of a cell which is formed by column D followed by row number 7?</div>
                <div class="qa-card-a"><strong>Answer:</strong> The cell address is <strong>D7</strong>.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">e. How is the range of cells written for cells starting from B1 to E2?</div>
                <div class="qa-card-a"><strong>Answer:</strong> It is written as <strong>B1:E2</strong>.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">f. What is a formula?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A formula is an equation that defines the relationship between two or more cells to perform calculations, always starting with an equal sign (<code>=</code>).</div>
              </div>

              <h3>2. Short Answer Questions</h3>
              <div class="qa-card">
                <div class="qa-card-q">a. What is a cell? How is it referred to?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A cell is a rectangular box formed by the intersection of a row and a column. It is referred to by its cell address combining column letter and row number (e.g. <code>A1</code>, <code>C3</code>).</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">b. Define workbook and worksheet.</div>
                <div class="qa-card-a"><strong>Answer:</strong> A <em>Workbook</em> is an Excel file containing one or more worksheets (extension <code>.xlsx</code>). A <em>Worksheet</em> is a single page grid of rows and columns inside a workbook.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">c. List the differences between a worksheet and a chartsheet.</div>
                <div class="qa-card-a">
                  <strong>Answer:</strong>
                  <ul>
                    <li><em>Worksheet:</em> Grid containing rows, columns, and data cells for calculations.</li>
                    <li><em>Chart Sheet:</em> A dedicated sheet containing only a single chart graph without cells or rows.</li>
                  </ul>
                </div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">d. What is a block of cells? How do you refer to a block of cells?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A block of cells (range) is a rectangular group of adjacent cells. It is referred to by writing the top-left cell address separated by a colon to the bottom-right cell address (e.g. <code>A1:D5</code>).</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">e. List the types of data that can be used in Excel.</div>
                <div class="qa-card-a"><strong>Answer:</strong> 1) Text (Label), 2) Number (Value), and 3) Formula.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">f. What is Auto fill? What is a fill handle?</div>
                <div class="qa-card-a"><strong>Answer:</strong> <em>AutoFill</em> is a feature to fill repetitive data, series of numbers/dates, or formulas automatically. The <em>Fill Handle</em> is the small black square at the bottom-right corner of an active cell (<code>+</code>).</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">g. What is a formula? Write the steps to enter a formula.</div>
                <div class="qa-card-a">
                  <strong>Answer:</strong> A formula is an expression that calculates values in a worksheet.
                  <br><strong>Steps:</strong> 1) Select cell, 2) Type equal sign (<code>=</code>), 3) Type equation using values, cell references and operators (e.g. <code>=A1+B1</code>), 4) Press Enter.
                </div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">h. What is a function? List any four functions that you can use in Excel.</div>
                <div class="qa-card-a"><strong>Answer:</strong> A function is a predefined built-in formula in Excel that performs calculations on arguments. Four functions: <code>SUM()</code>, <code>MIN()</code>, <code>MAX()</code>, and <code>AVERAGE()</code>.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">i. What is a chart or graph? List any four charts that you can prepare in any spreadsheet software.</div>
                <div class="qa-card-a"><strong>Answer:</strong> A chart is a graphical representation of numeric data. Four charts: Column Chart, Bar Chart, Line Chart, and Pie Chart.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">j. What do you mean by data point and data series?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A <em>Data Point</em> is a single numeric value plotted in a chart (bar, dot, or slice). A <em>Data Series</em> is a collection of related data points plotted together in a chart.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">m. What is a chart legend?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A chart legend is an informational box key that identifies each data series using a unique color, pattern, or symbol.</div>
              </div>

              <h3>3. Uses of the Following Functions</h3>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Function</th><th>Use / Purpose</th><th>Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>SUM()</code></td><td>Calculates the total sum of numbers in a range</td><td><code>=SUM(A1:A10)</code></td></tr>
                    <tr><td><code>MIN()</code></td><td>Returns the smallest (minimum) value in a range</td><td><code>=MIN(B2:B8)</code></td></tr>
                    <tr><td><code>MAX()</code></td><td>Returns the largest (maximum) value in a range</td><td><code>=MAX(C1:C20)</code></td></tr>
                    <tr><td><code>AVERAGE()</code></td><td>Calculates the arithmetic mean (average) of a range</td><td><code>=AVERAGE(D1:D5)</code></td></tr>
                    <tr><td><code>IF()</code></td><td>Tests a condition and returns one value if TRUE, another if FALSE</td><td><code>=IF(A1>=40, "Pass", "Fail")</code></td></tr>
                  </tbody>
                </table>
              </div>

              <h3>4. State Whether True or False</h3>
              <div class="qa-card"><div class="qa-card-q">a. A spreadsheet program can be used to prepare letters, classnotes, etc.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Word processors like MS-Word are used for letters and classnotes.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">b. In a spreadsheet program, when values in cells are changed, the values in all dependent cells also changed automatically.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">c. MS-Excel organizes only numeric data in columns or rows.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Excel organizes text/labels and formulas along with numeric data.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">d. A cell address is formed by the row number followed by the column heading.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Formed by column letter followed by row number, e.g. D7.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">e. An active cell is surrounded by dark gridlines.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">f. Data can be entered only in the active cell of the worksheet.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">g. A range of cells starting from A1 to A5 is referred to as A1:A5.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">h. The Delete key only deletes the contents of a cell or cells but does not delete the formats applied on the cell or cells.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">i. The Auto fill feature allows you to fill only serial numbers in cells.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(AutoFill also fills dates, weekdays, months, and formulas.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">j. All functions in MS-Excel must begin with an equal sign.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">k. A chart can be placed only on a chart sheet.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(A chart can also be embedded directly inside a worksheet alongside data.)</em></div></div>

              <h3>5. Fill in the Blanks</h3>
              <p><strong>a.</strong> A workbook is the collection of <u>worksheets</u> and <u>chartsheets</u> in MS-Excel.</p>
              <p><strong>b.</strong> A spreadsheet is also called <u>worksheet</u>.</p>
              <p><strong>c.</strong> A spreadsheet file created in MS-Excel has <u>.xlsx</u> extension.</p>
              <p><strong>d.</strong> When a data is entered in a cell, it is also appeared in the <u>Formula Bar</u>.</p>
              <p><strong>e.</strong> The group of adjacent cells that forms a rectangle area is known as <u>range of cells (or block of cells)</u>.</p>
              <p><strong>f.</strong> The entry in the worksheet that defines the relationship of two or more cells is known as <u>formula</u>.</p>
              <p><strong>g.</strong> To edit the cell contents you have to press <u>F2</u> Key.</p>
              <p><strong>h.</strong> The <u>MAX</u> function returns the highest value in a range of cells.</p>
              <p><strong>i.</strong> The X-axis of a chart contains <u>Categories (Category axis)</u> of the chart.</p>
              <p><strong>j.</strong> A <u>Legend</u> represents each data series with a unique color or pattern.</p>
            `
          }
        ]
      },

      /* ====================================================================
         CHAPTER 7: PRESENTATION SOFTWARE (MS-POWERPOINT 2016)
         ==================================================================== */
      {
        id: "class8-cs-ch7",
        chapterNumber: 7,
        title: "Presentation Software (MS-PowerPoint 2016)",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        author: "Prepared by ER Ankit Lamichhane",
        summary: "Complete guide to creating, designing, delivering slide shows, animations, transitions, printing & packaging in Microsoft PowerPoint 2016.",
        topics: [
          {
            title: "Learning Objectives",
            content: `
              <p>At the end of this chapter, students will be able to:</p>
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1</span><span>Prepare a presentation using pictures, audio and videos.</span></div>
                <div class="step-card"><span class="step-badge">2</span><span>Implement the transition feature between slides.</span></div>
                <div class="step-card"><span class="step-badge">3</span><span>Implement animation effects on slide objects.</span></div>
                <div class="step-card"><span class="step-badge">4</span><span>Prepare a package presentation for another computer.</span></div>
              </div>
            `
          },
          {
            title: "7.0 Introduction: What is a Presentation?",
            content: `
              <p>Information can be presented using traditional methods (pamphlets, posters, handouts) or digitally with a computer &amp; projector.</p>
              <ul>
                <li>A <strong>presentation program</strong> lets you create, modify, manage and display information in the form of slides.</li>
                <li>A <strong>Slide</strong> is like one page of a presentation &mdash; a brief topic shown using text, pictures, audio, video and animation.</li>
                <li>A <strong>Presentation</strong> = a collection of slides arranged in sequential order.</li>
                <li>Used widely to teach students, present business information, or share news in public places.</li>
                <li><strong>Popular presentation programs:</strong> Microsoft PowerPoint, Apple Keynote, OpenOffice Impress, Slidebean, Adobe Premiere.</li>
              </ul>
            `
          },
          {
            title: "7.1 Getting to Know MS-PowerPoint",
            content: `
              <p>MS-PowerPoint is a powerful multimedia presentation program developed by Microsoft. It lets you create, edit, organize and present presentations effectively.</p>
              <p>A presentation in MS-PowerPoint is made up of a number of slides arranged in sequential order. Think of it as a <em>digital storyboard</em> &mdash; every slide is one page of your story.</p>
              
              <h3>Task: Loading PowerPoint</h3>
              <div class="step-list">
                <div class="step-item"><span class="step-badge">1</span><div><strong>Open Run Dialog:</strong> Press the <code>Windows key + R</code> keys together.</div></div>
                <div class="step-item"><span class="step-badge">2</span><div><strong>Type Command:</strong> Type <code>POWERPNT</code> in the Run command box.</div></div>
                <div class="step-item"><span class="step-badge">3</span><div><strong>Execute:</strong> Press Enter or click on the <strong>OK</strong> button.</div></div>
                <div class="step-item"><span class="step-badge">4</span><div><strong>Alternative:</strong> Click <em>Start &rarr; All Apps &rarr; scroll down &rarr; select PowerPoint 2016</em>.</div></div>
              </div>

              <!-- UI Figure Screenshot: Run Dialog Box -->
              <div class="ui-figure">
                <div class="ui-figure-header">💻 Figure 7.1: Windows Run Dialog Box</div>
                <div class="ui-window-box">
                  <div class="ui-window-titlebar">Run</div>
                  <div class="ui-window-content">
                    <p style="font-size: 0.88rem; margin-bottom: 0.5rem;">Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.</p>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <label style="font-weight: 600; font-size: 0.9rem;">Open:</label>
                      <input type="text" value="POWERPNT" readonly style="flex: 1; padding: 0.35rem 0.5rem; border: 1px solid var(--border-focus); border-radius: 4px; font-weight: 700; background: var(--surface); color: var(--primary);">
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem;">
                      <button style="padding: 0.3rem 0.8rem; font-size: 0.85rem; font-weight: 700; background: var(--primary); color: #fff; border: none; border-radius: 4px;">OK</button>
                      <button style="padding: 0.3rem 0.8rem; font-size: 0.85rem; border: 1px solid var(--border); background: var(--background); border-radius: 4px;">Cancel</button>
                    </div>
                  </div>
                </div>
                <div class="ui-figure-caption">The Run dialog box &mdash; type POWERPNT to launch PowerPoint</div>
              </div>
            `
          }
        ]
      },

      {
        id: "class8-cs-ch8",
        chapterNumber: 8,
        title: "Computer Graphics",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Introduction to digital graphics, vector vs raster, image editing basics.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 8 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch9",
        chapterNumber: 9,
        title: "ICT & Contemporary Technology",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Information & Communication Technology, AI, Cloud, IoT basics.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 9 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch10",
        chapterNumber: 10,
        title: "Number System",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Binary, Decimal, Octal, Hexadecimal conversion rules.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 10 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch11",
        chapterNumber: 11,
        title: "Computer Virus",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Malware types, symptoms, prevention & antivirus software.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 11 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch12",
        chapterNumber: 12,
        title: "Data Communication and Computer Network",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "LAN, MAN, WAN, network topologies, transmission media.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 12 will be added soon. [Add your notes here]</p>` }
        ]
      },

      /* ====================================================================
         CHAPTER 13: WEB PAGE DESIGNING USING HTML
         COMPLETE NOTES & COMPLETE TEXTBOOK EXERCISE SOLUTIONS (Q1 - Q16)
         ==================================================================== */
      {
        id: "class8-cs-ch13",
        chapterNumber: 13,
        title: "Web Page Designing Using HTML",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-06",
        author: "Innovative Computer Science &mdash; Book 8, Unit 13",
        summary: "Comprehensive guide to HTML tags, basic elements, text formatting, images, marquee, hyperlinks, tables, framesets & complete textbook exercise solutions.",
        topics: [
          {
            title: "Unit Roadmap & What We'll Cover",
            content: `
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1.1</span><span>Introduction to HTML &amp; Why learn HTML?</span></div>
                <div class="step-card"><span class="step-badge">1.2</span><span>HTML Elements, Markup Tags &amp; Attributes</span></div>
                <div class="step-card"><span class="step-badge">1.3</span><span>Basic Elements (HTML, HEAD, BODY)</span></div>
                <div class="step-card"><span class="step-badge">1.4</span><span>Structure of an HTML Document</span></div>
                <div class="step-card"><span class="step-badge">1.5</span><span>Creating &amp; Saving an HTML Document</span></div>
                <div class="step-card"><span class="step-badge">1.6</span><span>Viewing a Document &amp; Viewing Source Code</span></div>
                <div class="step-card"><span class="step-badge">1.7</span><span>Formatting &amp; Heading Tags (&lt;H1&gt;..&lt;H6&gt;, &lt;P&gt;, &lt;BR&gt;, &lt;HR&gt;)</span></div>
                <div class="step-card"><span class="step-badge">1.8</span><span>Text Formatting (&lt;B&gt;, &lt;I&gt;, &lt;U&gt;, &lt;SUP&gt;, &lt;SUB&gt;, &lt;FONT&gt;)</span></div>
                <div class="step-card"><span class="step-badge">1.9</span><span>Images in HTML (&lt;IMG&gt; tag &amp; attributes)</span></div>
                <div class="step-card"><span class="step-badge">1.10</span><span>Marquee Text (&lt;MARQUEE&gt; tag)</span></div>
                <div class="step-card"><span class="step-badge">1.11</span><span>Hyperlinks (&lt;A&gt; anchor tag)</span></div>
                <div class="step-card"><span class="step-badge">1.12</span><span>Tables (&lt;TABLE&gt;, &lt;TR&gt;, &lt;TH&gt;, &lt;TD&gt;, &lt;CAPTION&gt;) &amp; Frames (&lt;FRAMESET&gt;, &lt;FRAME&gt;)</span></div>
              </div>
            `
          },
          {
            title: "1.1 Introduction to HTML",
            content: `
              <p><strong>HTML</strong> stands for <strong>Hyper Text Markup Language</strong>.</p>
              <ul>
                <li>It is a web-based, client-side markup language used to develop web pages and websites.</li>
                <li>Created by <strong>Tim Berners-Lee in 1991 A.D.</strong></li>
                <li>HTML documents are plain text files containing markup tags that instruct web browsers how to format and display text, images, and media.</li>
              </ul>

              <div class="ui-figure">
                <div class="ui-figure-header">📄 Simple HTML Document Example</div>
                <div class="ui-window-box" style="font-family: monospace; background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 6px;">
                  &lt;html&gt;<br>
                  &nbsp;&nbsp;&lt;p&gt;Hello, Web!&lt;/p&gt;<br>
                  &lt;/html&gt;
                </div>
              </div>
            `
          },
          {
            title: "1.2 Why Learn HTML? & Elements, Tags & Attributes",
            content: `
              <h3>Why Learn HTML?</h3>
              <div class="step-card-grid">
                <div class="step-card"><span class="step-badge">1</span><span><strong>Create a Website:</strong> Used to design websites and web templates from scratch.</span></div>
                <div class="step-card"><span class="step-badge">2</span><span><strong>Web Designer Skill:</strong> Simple to learn &mdash; starter skill for every web designer.</span></div>
                <div class="step-card"><span class="step-badge">3</span><span><strong>Understand the Web:</strong> Helps optimize websites for speed and performance.</span></div>
                <div class="step-card"><span class="step-badge">4</span><span><strong>Base of Other Languages:</strong> Makes it easy to learn JavaScript, PHP, CSS, and Python.</span></div>
              </div>

              <h3>HTML Elements &amp; Markup Tags</h3>
              <ul>
                <li>An HTML document is composed of HTML elements.</li>
                <li>Each element consists of a <strong>start tag</strong>, <strong>content</strong>, and an <strong>end tag</strong>.</li>
                <li>HTML tags are enclosed in angle brackets (e.g. <code>&lt;html&gt;</code>) and are <strong>not case-sensitive</strong> (<code>&lt;HTML&gt;</code> is same as <code>&lt;html&gt;</code>).</li>
              </ul>

              <h3>Two Kinds of Tags:</h3>
              <ul>
                <li><strong>a. Container Tag (Paired Tag):</strong> Has both a starting tag and a closing tag with a forward slash (<code>/</code>). Starting tag activates effect, closing tag ends it. Examples: <code>&lt;HTML&gt;</code>, <code>&lt;HEAD&gt;</code>, <code>&lt;TITLE&gt;</code>, <code>&lt;BODY&gt;</code>, <code>&lt;B&gt;</code>, <code>&lt;I&gt;</code>, <code>&lt;U&gt;</code>.</li>
                <li><strong>b. Empty Tag (Singular / Stand-alone Tag):</strong> Has no closing tag. Examples: <code>&lt;BR&gt;</code> (line break), <code>&lt;HR&gt;</code> (horizontal rule), <code>&lt;IMG&gt;</code> (inline image).</li>
              </ul>

              <h3>Attributes:</h3>
              <p>Attributes describe additional features or properties of an element. Specified <strong>only inside the starting tag</strong>. Syntax: <code>&lt;Tag_name Attribute1="value"&gt;</code>. Example: <code>&lt;P Align="right"&gt;</code> right aligns paragraph text.</p>
            `
          },
          {
            title: "1.3 Basic Elements & Structure of an HTML Document",
            content: `
              <p>All web pages contain three basic structural elements:</p>
              <ol>
                <li><strong>&lt;HTML&gt; element:</strong> Encloses the entire HTML document. Tells browser the file is HTML.</li>
                <li><strong>&lt;HEAD&gt; element:</strong> Appears inside HTML; contains title and metadata (e.g. <code>&lt;TITLE&gt;</code>, <code>&lt;LINK&gt;</code>, <code>&lt;STYLE&gt;</code>, <code>&lt;SCRIPT&gt;</code>).</li>
                <li><strong>&lt;BODY&gt; element:</strong> Contains all visible contents of document. Supports attributes:
                  <ul>
                    <li><code>BGCOLOR="color"</code>: sets background color (e.g. <code>BGCOLOR="Yellow"</code> or <code>#RRGGBB</code>).</li>
                    <li><code>TEXT="color"</code>: sets default text color.</li>
                    <li><code>BACKGROUND="image_file"</code>: sets a background image.</li>
                  </ul>
                </li>
              </ol>

              <div class="ui-figure">
                <div class="ui-figure-header">🏗️ Standard Structure of an HTML Document</div>
                <div class="ui-window-box" style="font-family: monospace; background: #0f172a; color: #f8fafc; padding: 1.25rem; border-radius: 6px; line-height: 1.6;">
                  &lt;HTML&gt;<br>
                  &nbsp;&nbsp;&lt;HEAD&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;TITLE&gt; The title of the page goes here &lt;/TITLE&gt;<br>
                  &nbsp;&nbsp;&lt;/HEAD&gt;<br>
                  &nbsp;&nbsp;&lt;BODY&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;Contents of the web page are kept here.<br>
                  &nbsp;&nbsp;&lt;/BODY&gt;<br>
                  &lt;/HTML&gt;
                </div>
              </div>
            `
          },
          {
            title: "1.5 Creating, Saving & Viewing HTML Documents",
            content: `
              <h3>Creating &amp; Saving:</h3>
              <ul>
                <li>HTML documents are written in plain text editors like <strong>Notepad</strong> or Textpad.</li>
                <li>Must be saved with <strong>.HTM</strong> or <strong>.HTML</strong> file extension (e.g., <code>Prac1.htm</code>).</li>
              </ul>

              <div class="ui-figure">
                <div class="ui-figure-header">📝 Example 1: Dashain Festival HTML Document</div>
                <div class="ui-window-box" style="font-family: monospace; background: #0f172a; color: #fbbf24; padding: 1rem; border-radius: 6px;">
                  &lt;HTML&gt;<br>
                  &lt;HEAD&gt;<br>
                  &nbsp;&nbsp;&lt;TITLE&gt;Dashain Festival&lt;/TITLE&gt;<br>
                  &lt;/HEAD&gt;<br>
                  &lt;BODY&gt;<br>
                  &nbsp;&nbsp;Dashain is the longest and the most important festival of Nepal.<br>
                  &nbsp;&nbsp;According to legend, Goddess Durga conquered evils on Dashain day.<br>
                  &lt;/BODY&gt;<br>
                  &lt;/HTML&gt;
                </div>
              </div>

              <h3>Viewing Document &amp; Source Code:</h3>
              <ul>
                <li><strong>Viewing Page:</strong> Open web browser &rarr; File &rarr; Open &rarr; Browse &rarr; select <code>Prac1.htm</code> &rarr; click OK.</li>
                <li><strong>Viewing Source Code:</strong>
                  <ul>
                    <li><em>Method 1:</em> Browser View menu &rarr; select <strong>Source</strong>.</li>
                    <li><em>Method 2:</em> Right-click anywhere on page &rarr; select <strong>View Source</strong> (opens code in Notepad).</li>
                  </ul>
                </li>
              </ul>
            `
          },
          {
            title: "1.7 Formatting Tags: Headings, Paragraph, Line Break & Horizontal Rule",
            content: `
              <h3>Headings (&lt;H1&gt; to &lt;H6&gt;)</h3>
              <p>Creates 6 levels of headings: <code>&lt;H1&gt;</code> is largest heading, <code>&lt;H6&gt;</code> is smallest. Syntax: <code>&lt;Hn align="Left|Right|Center"&gt;Text&lt;/Hn&gt;</code></p>

              <h3>Paragraph (&lt;P&gt;), Line Break (&lt;BR&gt;) &amp; Horizontal Rule (&lt;HR&gt;)</h3>
              <ul>
                <li><code>&lt;P ALIGN="left|right|center|justify"&gt;</code>: Container tag that creates a paragraph.</li>
                <li><code>&lt;BR&gt;</code>: Empty tag that forces a line break in text.</li>
                <li><code>&lt;HR ALIGN="..." COLOR="..." SIZE="px" WIDTH="px|%"&gt;</code>: Empty tag that inserts a horizontal line.</li>
              </ul>

              <div class="ui-figure">
                <div class="ui-figure-header">💻 Example Code: Operating System Software</div>
                <div class="ui-window-box" style="font-family: monospace; background: #0f172a; color: #38bdf8; padding: 1rem; border-radius: 6px;">
                  &lt;BODY bgcolor="purple" text="black"&gt;<br>
                  &lt;H1 align="CENTER"&gt;Operating System Software&lt;/H1&gt;&lt;HR&gt;<br>
                  &lt;P align="Justify"&gt;Operating system software coordinates and controls all hardware and software.&lt;/P&gt;<br>
                  &lt;H2 align="right"&gt;Some basic functions are:&lt;/H2&gt;<br>
                  &lt;BR&gt;It manages input/output devices.<br>
                  &lt;BR&gt;It manages computer memory (RAM, storage).<br>
                  &lt;BR&gt;It provides environment to run software.<br>
                  &lt;/BODY&gt;
                </div>
              </div>
            `
          },
          {
            title: "1.8 Text Formatting & The Font Tag",
            content: `
              <h3>Text Styling Tags:</h3>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Tag</th><th>Description</th><th>Example Code</th><th>Output</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>&lt;B&gt;</code></td><td>Bolds text</td><td><code>&lt;B&gt;Bold Text&lt;/B&gt;</code></td><td><strong>Bold Text</strong></td></tr>
                    <tr><td><code>&lt;I&gt;</code></td><td>Italicizes text</td><td><code>&lt;I&gt;Italic Text&lt;/I&gt;</code></td><td><em>Italic Text</em></td></tr>
                    <tr><td><code>&lt;U&gt;</code></td><td>Underlines text</td><td><code>&lt;U&gt;Underlined Text&lt;/U&gt;</code></td><td><u>Underlined Text</u></td></tr>
                    <tr><td><code>&lt;SUP&gt;</code></td><td>Superscript (raises text)</td><td><code>(a+b)&lt;sup&gt;2&lt;/sup&gt;</code></td><td>(a+b)<sup>2</sup></td></tr>
                    <tr><td><code>&lt;SUB&gt;</code></td><td>Subscript (lowers text)</td><td><code>H&lt;sub&gt;2&lt;/sub&gt;O</code></td><td>H<sub>2</sub>O</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>The Font Tag (&lt;FONT&gt;)</h3>
              <p>Sets text color, size (1 to 7; default 3), and font typeface name. Syntax:</p>
              <div class="ui-figure">
                <div class="ui-window-box" style="font-family: monospace; background: #0f172a; color: #4ade80; padding: 1rem; border-radius: 6px;">
                  &lt;FONT COLOR="Red" SIZE="6" FACE="Arial"&gt;Styled Text&lt;/FONT&gt;
                </div>
              </div>
            `
          },
          {
            title: "2.0 Images, Marquee Text, Hyperlinks, Tables & Frames",
            content: `
              <h3>Images (&lt;IMG&gt;)</h3>
              <p>Inline image tag (empty tag). Syntax: <code>&lt;IMG SRC="image.jpg" WIDTH="100" HEIGHT="100" ALIGN="Left" ALT="Image text"&gt;</code></p>

              <h3>Marquee Text (&lt;MARQUEE&gt;)</h3>
              <p>Creates scrolling text. Syntax: <code>&lt;MARQUEE BEHAVIOR="Alternate|Scroll|Slide" DIRECTION="Left|Right|Up|Down" BGCOLOR="yellow"&gt;Scrolling Text&lt;/MARQUEE&gt;</code></p>

              <h3>Hyperlinks (&lt;A&gt; Anchor Tag)</h3>
              <p>Links web pages together. Syntax: <code>&lt;A HREF="URL"&gt;Clickable Text&lt;/A&gt;</code>. Examples:</p>
              <ul>
                <li>Link to page: <code>&lt;A HREF="Prac2.htm"&gt;Practical Session 2&lt;/A&gt;</code></li>
                <li>Link to website: <code>&lt;A HREF="https://ankitlamichhane.com.np"&gt;Ankit Website&lt;/A&gt;</code></li>
                <li>Image as link: <code>&lt;A HREF="Pokhara.HTM"&gt;&lt;IMG SRC="pokhara.gif" WIDTH="100"&gt;&lt;/A&gt;</code></li>
              </ul>

              <h3>Tables (&lt;TABLE&gt;)</h3>
              <p>Organizes data in rows (<code>&lt;TR&gt;</code>) and cells (<code>&lt;TH&gt;</code> for heading, <code>&lt;TD&gt;</code> for data). Uses <code>&lt;CAPTION&gt;</code> for table title. Attributes: <code>BORDER</code>, <code>BGCOLOR</code>, <code>CELLPADDING</code>, <code>CELLSPACING</code>.</p>

              <h3>Frames (&lt;FRAMESET&gt; &amp; &lt;FRAME&gt;)</h3>
              <p>Splits browser window into sub-windows (frames). Note: When <code>&lt;FRAMESET&gt;</code> is used, <code>&lt;BODY&gt;</code> tag is NOT allowed! Example: <code>&lt;FRAMESET COLS="25%,75%"&gt; &lt;FRAME SRC="menu.htm"&gt; &lt;FRAME SRC="main.htm"&gt; &lt;/FRAMESET&gt;</code></p>
            `
          },

          /* ====================================================================
             COMPLETE TEXTBOOK EXERCISE SOLUTIONS (QUESTIONS 1 TO 16)
             ==================================================================== */
          {
            title: "Textbook Exercise Solutions — Complete Q1 to Q16",
            content: `
              <h2>Innovative Computer Science &mdash; Book 8, Unit 13 Complete Exercise Solutions</h2>

              <h3>1. Very Short Answer Questions</h3>
              <div class="qa-card">
                <div class="qa-card-q">a. What is HTML?</div>
                <div class="qa-card-a"><strong>Answer:</strong> HTML (Hyper Text Markup Language) is a client-side markup language used to design and develop web pages and websites.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">b. What is the HTML tag?</div>
                <div class="qa-card-a"><strong>Answer:</strong> An HTML tag is a command enclosed in angle brackets (e.g. <code>&lt;html&gt;</code>) that instructs web browsers how to format and display web page content.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">c. Define container tag.</div>
                <div class="qa-card-a"><strong>Answer:</strong> A container tag (paired tag) is an HTML tag that has both a starting tag (e.g. <code>&lt;B&gt;</code>) and an ending tag (e.g. <code>&lt;/B&gt;</code>) to enclose content.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">d. What is the attribute of an element?</div>
                <div class="qa-card-a"><strong>Answer:</strong> An attribute is a special parameter specified inside an opening tag that describes additional features or formatting properties of an HTML element.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">e. How many different colors does HTML support?</div>
                <div class="qa-card-a"><strong>Answer:</strong> HTML supports 16 standard color names by default and over 16 million colors using hexadecimal codes (<code>#RRGGBB</code>).</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">f. What is the extension of an HTML document file?</div>
                <div class="qa-card-a"><strong>Answer:</strong> An HTML document file has the file extension <strong>.HTM</strong> or <strong>.HTML</strong>.</div>
              </div>

              <h3>2. Short Answer Questions</h3>
              <div class="qa-card">
                <div class="qa-card-q">a. List the difference between container and empty tags.</div>
                <div class="qa-card-a">
                  <strong>Answer:</strong>
                  <ul>
                    <li><em>Container Tag:</em> Requires both starting tag and closing tag (e.g. <code>&lt;H1&gt;...&lt;/H1&gt;</code>, <code>&lt;B&gt;...&lt;/B&gt;</code>).</li>
                    <li><em>Empty Tag:</em> Has only a starting tag and no closing tag (e.g. <code>&lt;BR&gt;</code>, <code>&lt;HR&gt;</code>, <code>&lt;IMG&gt;</code>).</li>
                  </ul>
                </div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">b. What is the heading tag? List the largest and smallest heading tags.</div>
                <div class="qa-card-a"><strong>Answer:</strong> The heading tag <code>&lt;Hn&gt;</code> defines heading levels in an HTML document. The largest heading tag is <strong>&lt;H1&gt;</strong> and the smallest heading tag is <strong>&lt;H6&gt;</strong>.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">c. What is the formatting tag? List any four formatting tags.</div>
                <div class="qa-card-a"><strong>Answer:</strong> A formatting tag is used to change the visual appearance, size, or style of text. Four formatting tags: <code>&lt;B&gt;</code> (Bold), <code>&lt;I&gt;</code> (Italic), <code>&lt;U&gt;</code> (Underline), and <code>&lt;FONT&gt;</code>.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">d. What is the font tag? List the smallest and largest font size values.</div>
                <div class="qa-card-a"><strong>Answer:</strong> The <code>&lt;FONT&gt;</code> tag sets font color, size, and typeface face of text. The smallest font size value is <strong>1</strong> and the largest font size value is <strong>7</strong> (default size is 3).</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">e. What is hyperlink? How do you know a text is hypertext?</div>
                <div class="qa-card-a"><strong>Answer:</strong> A hyperlink (created using <code>&lt;A&gt;</code> tag) is an element that links one web page to another. We know text is hypertext because it is typically underlined, displayed in a different color, and the mouse cursor changes into a <strong>pointing hand icon</strong> when hovered over it.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">f. Mention the difference between &lt;TH&gt; and &lt;TD&gt; tags.</div>
                <div class="qa-card-a"><strong>Answer:</strong> <code>&lt;TH&gt;</code> (Table Header) defines a header cell with bold, centered text. <code>&lt;TD&gt;</code> (Table Data) defines a standard data cell with normal, left-aligned text.</div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">g. What is the use of the &lt;FRAMESET&gt; tag?</div>
                <div class="qa-card-a"><strong>Answer:</strong> The <code>&lt;FRAMESET&gt;</code> tag is used to divide a browser window into multiple independent sub-windows (frames) using <code>ROWS</code> or <code>COLS</code> attributes.</div>
              </div>

              <h3>3. Long Answer Questions</h3>
              <div class="qa-card">
                <div class="qa-card-q">a. Describe the main basic elements of a web page.</div>
                <div class="qa-card-a">
                  <strong>Answer:</strong> Every HTML document consists of three basic core elements:
                  <ol>
                    <li><code>&lt;HTML&gt;</code>: The root element that encloses all other HTML tags and tells the web browser that the file is an HTML document.</li>
                    <li><code>&lt;HEAD&gt;</code>: The header element that contains metadata, document title (<code>&lt;TITLE&gt;</code>), scripts, and stylesheet links.</li>
                    <li><code>&lt;BODY&gt;</code>: The body element that contains all visible content displayed on the web page (text, images, tables, links, audio, video).</li>
                  </ol>
                </div>
              </div>
              <div class="qa-card">
                <div class="qa-card-q">b. What is a hyperlink? Describe the methods to insert hyperlinks.</div>
                <div class="qa-card-a">
                  <strong>Answer:</strong> A hyperlink is a link that connects a web page to another document or section. It is created using the anchor tag <code>&lt;A HREF="URL"&gt;</code>.
                  <br><br><strong>Methods to insert hyperlinks:</strong>
                  <ul>
                    <li><strong>Text Hyperlink:</strong> <code>&lt;A HREF="page2.html"&gt;Go to Page 2&lt;/A&gt;</code></li>
                    <li><strong>Image Hyperlink:</strong> <code>&lt;A HREF="photo.html"&gt;&lt;IMG SRC="image.jpg"&gt;&lt;/A&gt;</code></li>
                    <li><strong>External Website Link:</strong> <code>&lt;A HREF="https://ankitlamichhane.com.np"&gt;Visit Site&lt;/A&gt;</code></li>
                    <li><strong>Email Link:</strong> <code>&lt;A HREF="mailto:ankit@example.com"&gt;Send Email&lt;/A&gt;</code></li>
                    <li><strong>Internal Section Bookmark:</strong> <code>&lt;A HREF="#top"&gt;Go to Top&lt;/A&gt;</code></li>
                  </ul>
                </div>
              </div>

              <h3>4. True or False Questions (a to j)</h3>
              <div class="qa-card"><div class="qa-card-q">a. HTML is a markup language that is used to develop web pages.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">b. Tim Berners Lee is known as the father of Web.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">c. The HTML tags are the commands in HTML.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">d. An empty tag has both starting and end tags.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(An empty tag has only a starting tag.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">e. In a web page, the &lt;BODY&gt; tag can be used more than once.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(The &lt;BODY&gt; tag can be used only once per HTML document.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">f. An HTML document file has .HTM extension.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">g. The six different levels of headings can be created by using Heading Tag.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">h. The &lt;BR&gt; tag is stand-alone tag so it does not require the closing tag &lt;/BR&gt;.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
              <div class="qa-card"><div class="qa-card-q">i. The &lt;IMAGE&gt; tag inserts a picture in a web page.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(The correct tag name for inserting an image is &lt;IMG&gt;, not &lt;IMAGE&gt;.)</em></div></div>
              <div class="qa-card"><div class="qa-card-q">j. The COLS attribute of the &lt;FRAMESET&gt; tag splits the window into horizontal sections.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(The COLS attribute splits into vertical columns; ROWS splits into horizontal sections.)</em></div></div>

              <h3>5. Fill in the Blanks (a to g)</h3>
              <p><strong>a.</strong> Every HTML document should begin with a <u>&lt;HTML&gt;</u> tag.</p>
              <p><strong>b.</strong> An HTML document is composed of <u>HTML elements</u>.</p>
              <p><strong>c.</strong> A container tag has <u>starting</u> and <u>closing</u> tags.</p>
              <p><strong>d.</strong> The <u>attribute</u> of an element describes additional features of the element.</p>
              <p><strong>e.</strong> The &lt;TITLE&gt; tag is nested inside the <u>&lt;HEAD&gt;</u> tag.</p>
              <p><strong>f.</strong> The paragraph can be aligned by using the <u>ALIGN</u> attribute.</p>
              <p><strong>g.</strong> There are <u>six (6)</u> different levels of headings.</p>

              <h3>6. Uses and Syntaxes of HTML Tags</h3>
              <div class="table-responsive">
                <table class="notes-table">
                  <thead>
                    <tr><th>Tag</th><th>Use / Function</th><th>Syntax Example</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>&lt;BODY&gt;</code></td><td>Encloses all visible content of web page</td><td><code>&lt;BODY BGCOLOR="Yellow" TEXT="Black"&gt;...&lt;/BODY&gt;</code></td></tr>
                    <tr><td><code>&lt;Hn&gt;</code></td><td>Creates heading levels 1 to 6</td><td><code>&lt;H1 ALIGN="Center"&gt;Heading Text&lt;/H1&gt;</code></td></tr>
                    <tr><td><code>&lt;P&gt;</code></td><td>Creates a formatted paragraph</td><td><code>&lt;P ALIGN="Justify"&gt;Paragraph text...&lt;/P&gt;</code></td></tr>
                    <tr><td><code>&lt;FONT&gt;</code></td><td>Sets font color, size and face</td><td><code>&lt;FONT COLOR="Red" SIZE="5" FACE="Arial"&gt;Text&lt;/FONT&gt;</code></td></tr>
                    <tr><td><code>&lt;IMG&gt;</code></td><td>Inserts an inline image</td><td><code>&lt;IMG SRC="image.jpg" WIDTH="100" ALT="Photo"&gt;</code></td></tr>
                    <tr><td><code>&lt;A&gt;</code></td><td>Creates a hyperlink to another page/site</td><td><code>&lt;A HREF="page.html"&gt;Click Here&lt;/A&gt;</code></td></tr>
                  </tbody>
                </table>
              </div>

              <h3>7 to 16. HTML Programming Solutions (Textbook Problems)</h3>

              <div class="qa-card">
                <div class="qa-card-q">7. Write HTML code to prepare a web page to describe about your school.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;About My School&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="LightYellow" TEXT="DarkSlateGray"&gt;
  &lt;H1 ALIGN="CENTER"&gt;Sun Shine Secondary School&lt;/H1&gt;&lt;HR&gt;
  &lt;P ALIGN="JUSTIFY"&gt;
    Sun Shine Secondary School is one of the premier educational institutions located in Udayapur, Nepal.
    It provides quality education with modern computer labs, science facilities, and experienced teachers.
  &lt;/P&gt;
  &lt;H3&gt;Key Features:&lt;/H3&gt;
  &lt;UL&gt;
    &lt;LI&gt;Modern Multimedia Computer Lab&lt;/LI&gt;
    &lt;LI&gt;Well-equipped Science Laboratory&lt;/LI&gt;
    &lt;LI&gt;Spacious Sports Ground and Library&lt;/LI&gt;
  &lt;/UL&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">8. Write HTML code to prepare a web page to describe about Dashain festival.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Dashain Festival&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="Linen" TEXT="Maroon"&gt;
  &lt;H1 ALIGN="CENTER"&gt;Dashain Festival of Nepal&lt;/H1&gt;&lt;HR&gt;
  &lt;P ALIGN="JUSTIFY"&gt;
    Dashain is the longest and most important festival of Nepal. According to Hindu mythology,
    Goddess Durga conquered evil forces on Dashain day.
  &lt;/P&gt;
  &lt;P&gt;
    The final 10th day is celebrated as &lt;B&gt;Tika&lt;/B&gt;, where elders put Tika and Jamara on younger relatives and offer blessings.
  &lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">9. Write HTML code to prepare a web page to describe about Tihar and Chhat festivals.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Tihar &amp; Chhath Festivals&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="LightCyan" TEXT="DarkBlue"&gt;
  &lt;H1 ALIGN="CENTER"&gt;Tihar and Chhath Festivals&lt;/H1&gt;&lt;HR&gt;
  &lt;H2&gt;1. Tihar (Festival of Lights)&lt;/H2&gt;
  &lt;P&gt;Tihar is the festival of lights where people worship Crow, Dog, Cow, Ox, and Goddess Laxmi.&lt;/P&gt;
  &lt;H2&gt;2. Chhath Festival&lt;/H2&gt;
  &lt;P&gt;Chhath is celebrated by worshipping the Sun God (Surya Dev) at river banks and ponds.&lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">10. Write HTML code to prepare a web page to describe the beautiful places of Nepal.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Beautiful Places of Nepal&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="Ivory" TEXT="DarkGreen"&gt;
  &lt;H1 ALIGN="CENTER"&gt;Beautiful Places of Nepal&lt;/H1&gt;&lt;HR&gt;
  &lt;H2&gt;1. Pokhara Valley&lt;/H2&gt;
  &lt;P&gt;Famous for Fewa Lake and breathtaking views of Annapurna mountain range.&lt;/P&gt;
  &lt;H2&gt;2. Chitwan National Park&lt;/H2&gt;
  &lt;P&gt;Famous for one-horned rhinoceros, Bengal tigers, and jungle safari.&lt;/P&gt;
  &lt;H2&gt;3. Mount Everest (Sagarmatha)&lt;/H2&gt;
  &lt;P&gt;The highest peak in the world (8,848.86 meters).&lt;/P&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">11. Write HTML code to prepare a web page having hyperlinks and images.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Hyperlinks and Images Demo&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H1&gt;Web Page with Images and Links&lt;/H1&gt;
  &lt;IMG SRC="pokhara.jpg" WIDTH="300" HEIGHT="200" ALT="Pokhara Lake"&gt;&lt;BR&gt;&lt;BR&gt;
  &lt;A HREF="http://csnotes.ankitlamichhane.com.np"&gt;Visit CS Notes Portal&lt;/A&gt;&lt;BR&gt;
  &lt;A HREF="about.html"&gt;Read About Teacher&lt;/A&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">12. Write HTML code to prepare a web page that provides information about 'POKHARA VALLEY' with marquee text, hyperlinks and images.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Pokhara Valley Tourism&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="AliceBlue"&gt;
  &lt;MARQUEE BEHAVIOR="SCROLL" DIRECTION="LEFT" BGCOLOR="Navy" COLOR="White"&gt;
    &lt;FONT COLOR="Yellow" SIZE="5"&gt;Welcome to Pokhara Valley &mdash; The Tourism Capital of Nepal!&lt;/FONT&gt;
  &lt;/MARQUEE&gt;
  &lt;H1 ALIGN="CENTER"&gt;POKHARA VALLEY&lt;/H1&gt;&lt;HR&gt;
  &lt;P ALIGN="JUSTIFY"&gt;
    Pokhara is a beautiful city in central Nepal, renowned for its serene lakes, caves, and mountain panoramas.
  &lt;/P&gt;
  &lt;IMG SRC="fewa_lake.jpg" WIDTH="350" HEIGHT="220" ALT="Fewa Lake Pokhara"&gt;&lt;BR&gt;&lt;BR&gt;
  &lt;A HREF="https://ankitlamichhane.com.np"&gt;Learn More Tourism Information&lt;/A&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">13. Write HTML code to prepare a web page having a table.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Student Marks Table&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY&gt;
  &lt;H2 ALIGN="CENTER"&gt;Class 8 Marksheet&lt;/H2&gt;
  &lt;TABLE BORDER="1" ALIGN="CENTER" CELLPADDING="8" CELLSPACING="0" BGCOLOR="LightYellow"&gt;
    &lt;CAPTION&gt;&lt;B&gt;Final Exam Results&lt;/B&gt;&lt;/CAPTION&gt;
    &lt;TR BGCOLOR="LightSteelBlue"&gt;
      &lt;TH&gt;Roll No.&lt;/TH&gt;&lt;TH&gt;Student Name&lt;/TH&gt;&lt;TH&gt;Computer Science&lt;/TH&gt;&lt;TH&gt;Status&lt;/TH&gt;
    &lt;/TR&gt;
    &lt;TR&gt;&lt;TD&gt;1&lt;/TD&gt;&lt;TD&gt;Anjila Gurung&lt;/TD&gt;&lt;TD&gt;98&lt;/TD&gt;&lt;TD&gt;Pass&lt;/TD&gt;&lt;/TR&gt;
    &lt;TR&gt;&lt;TD&gt;2&lt;/TD&gt;&lt;TD&gt;Amit Thapa&lt;/TD&gt;&lt;TD&gt;78&lt;/TD&gt;&lt;TD&gt;Pass&lt;/TD&gt;&lt;/TR&gt;
  &lt;/TABLE&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">14. Write HTML code to prepare a web page having images, links to describe about the Baishakh 12, 2072 B. S. Earthquake.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Nepal Earthquake 2072&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;BODY BGCOLOR="MistyRose"&gt;
  &lt;H1 ALIGN="CENTER"&gt;Baishakh 12, 2072 B.S. Nepal Earthquake&lt;/H1&gt;&lt;HR&gt;
  &lt;P ALIGN="JUSTIFY"&gt;
    On April 25, 2015 (Baishakh 12, 2072 B.S.), a massive 7.8 magnitude earthquake struck Nepal with epicenter in Gorkha district.
  &lt;/P&gt;
  &lt;IMG SRC="earthquake_memorial.jpg" WIDTH="300" ALT="Earthquake Memorial"&gt;&lt;BR&gt;&lt;BR&gt;
  &lt;A HREF="http://csnotes.ankitlamichhane.com.np"&gt;Read More Safety Notes&lt;/A&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">15. Write HTML code to prepare a web page having two horizontal frames. The upper horizontal frame contains the hyperlinks and the bottom frame displays the linked pages.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;!------------ Main Index Frameset File (index.html) ------------&gt;
&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Two Horizontal Frames Web Page&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;FRAMESET ROWS="30%,70%"&gt;
  &lt;FRAME NAME="TOP_FRAME" SRC="top_links.html"&gt;
  &lt;FRAME NAME="BOTTOM_FRAME" SRC="welcome.html"&gt;
&lt;/FRAMESET&gt;
&lt;/HTML&gt;

&lt;!------------ Top Links File (top_links.html) ------------&gt;
&lt;HTML&gt;
&lt;BODY BGCOLOR="LightGrey"&gt;
  &lt;H3&gt;Navigation Menu:&lt;/H3&gt;
  &lt;A HREF="school.html" TARGET="BOTTOM_FRAME"&gt;Our School&lt;/A&gt; | 
  &lt;A HREF="dashain.html" TARGET="BOTTOM_FRAME"&gt;Dashain Festival&lt;/A&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>

              <div class="qa-card">
                <div class="qa-card-q">16. Write HTML code to prepare a web page having two vertical frames. The left side frame should contain the hyperlinks and the right side frame displays the linked pages.</div>
                <div class="qa-card-a">
                  <pre style="background:#0f172a; color:#f8fafc; padding:1rem; border-radius:6px; overflow-x:auto;">&lt;!------------ Main Index Frameset File (vertical_index.html) ------------&gt;
&lt;HTML&gt;
&lt;HEAD&gt;&lt;TITLE&gt;Two Vertical Frames Web Page&lt;/TITLE&gt;&lt;/HEAD&gt;
&lt;FRAMESET COLS="25%,75%"&gt;
  &lt;FRAME NAME="LEFT_FRAME" SRC="left_menu.html"&gt;
  &lt;FRAME NAME="RIGHT_FRAME" SRC="home_content.html"&gt;
&lt;/FRAMESET&gt;
&lt;/HTML&gt;

&lt;!------------ Left Menu File (left_menu.html) ------------&gt;
&lt;HTML&gt;
&lt;BODY BGCOLOR="LightYellow"&gt;
  &lt;H3&gt;Menu Links&lt;/H3&gt;
  &lt;A HREF="practical1.html" TARGET="RIGHT_FRAME"&gt;Practical 1&lt;/A&gt;&lt;BR&gt;&lt;BR&gt;
  &lt;A HREF="practical2.html" TARGET="RIGHT_FRAME"&gt;Practical 2&lt;/A&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>
                </div>
              </div>
            `
          }
        ]
      },

      {
        id: "class8-cs-ch14",
        chapterNumber: 14,
        title: "Computer Programming Language",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Low-level vs High-level languages, compilers, interpreters.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 14 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch15",
        chapterNumber: 15,
        title: "Program Design Tools",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Algorithms, flowcharts, pseudocode symbols & construction.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 15 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch16",
        chapterNumber: 16,
        title: "Block Programming-Scratch",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Visual block coding, sprites, scripts, loops, events in Scratch.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 16 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class8-cs-ch17",
        chapterNumber: 17,
        title: "Programming Language-Python",
        subject: "Computer Science",
        className: "Class 8",
        updated: "2026-09-03",
        summary: "Python syntax, variables, data types, input/output, simple programs.",
        topics: [
          { title: "1. Introduction", content: `<p>Notes for Class 8 Chapter 17 will be added soon. [Add your notes here]</p>` }
        ]
      }
    ]
  },

  class9: {
    computerScience: [
      {
        id: "class9-cs-ch1",
        chapterNumber: 1,
        title: "System Unit & Hardware Architecture",
        subject: "Computer Science",
        className: "Class 9",
        updated: "2026-09-03",
        summary: "Detailed overview of computer hardware components, buses, and motherboard.",
        topics: [
          { title: "1. Introduction to Computer Architecture", content: `<p>Notes for Class 9 Chapter 1 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class9-cs-ch2",
        chapterNumber: 2,
        title: "Operating System Concepts",
        subject: "Computer Science",
        className: "Class 9",
        updated: "2026-09-03",
        summary: "Functions of operating systems, GUI vs CLI, process management.",
        topics: [
          { title: "1. Introduction to Operating System", content: `<p>Notes for Class 9 Chapter 2 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class9-cs-ch3",
        chapterNumber: 3,
        title: "Computer Networks & Internet",
        subject: "Computer Science",
        className: "Class 9",
        updated: "2026-09-03",
        summary: "Network models, IP addressing, web browsers, domain names.",
        topics: [
          { title: "1. Introduction to Computer Networks", content: `<p>Notes for Class 9 Chapter 3 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class9-cs-ch4",
        chapterNumber: 4,
        title: "Database Management System (DBMS)",
        subject: "Computer Science",
        className: "Class 9",
        updated: "2026-09-03",
        summary: "Tables, primary key, queries, MS-Access database basics.",
        topics: [
          { title: "1. Introduction to DBMS", content: `<p>Notes for Class 9 Chapter 4 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class9-cs-ch5",
        chapterNumber: 5,
        title: "QBASIC Programming Fundamentals",
        subject: "Computer Science",
        className: "Class 9",
        updated: "2026-09-03",
        summary: "Statements, variables, operators, control structures in QBASIC.",
        topics: [
          { title: "1. QBASIC Introduction & Basics", content: `<p>Notes for Class 9 Chapter 5 will be added soon. [Add your notes here]</p>` }
        ]
      }
    ]
  },

  class10: {
    computerScience: [
      {
        id: "class10-cs-ch1",
        chapterNumber: 1,
        title: "Networking & Cyber Law",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "Data communication, network architecture, cyber ethics, and Nepal Cyber Law.",
        topics: [
          { title: "1. Data Communication & Computer Networks", content: `<p>Notes for Class 10 Chapter 1 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class10-cs-ch2",
        chapterNumber: 2,
        title: "Computer Virus & Cyber Security",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "Computer viruses, malware detection, firewall, digital signatures.",
        topics: [
          { title: "1. Cyber Security & Threats", content: `<p>Notes for Class 10 Chapter 2 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class10-cs-ch3",
        chapterNumber: 3,
        title: "Database Management System (MS-Access)",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "Relational database concepts, queries, forms, and reports in MS-Access.",
        topics: [
          { title: "1. Relational Database & MS-Access", content: `<p>Notes for Class 10 Chapter 3 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class10-cs-ch4",
        chapterNumber: 4,
        title: "Modular Programming in QBASIC",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "SUB procedures, FUNCTION procedures, passing parameters in QBASIC.",
        topics: [
          { title: "1. Modular Programming Concepts", content: `<p>Notes for Class 10 Chapter 4 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class10-cs-ch5",
        chapterNumber: 5,
        title: "File Handling in QBASIC",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "Sequential data files, OPEN, WRITE, INPUT, CLOSE statements in QBASIC.",
        topics: [
          { title: "1. Sequential File Operations", content: `<p>Notes for Class 10 Chapter 5 will be added soon. [Add your notes here]</p>` }
        ]
      },
      {
        id: "class10-cs-ch6",
        chapterNumber: 6,
        title: "C Programming Language Fundamentals",
        subject: "Computer Science",
        className: "Class 10",
        updated: "2026-09-03",
        summary: "Introduction to C programming syntax, data types, loops, and conditional logic.",
        topics: [
          { title: "1. Introduction to C Programming", content: `<p>Notes for Class 10 Chapter 6 will be added soon. [Add your notes here]</p>` }
        ]
      }
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
console.log('Successfully generated full notes-data.js with Excel & HTML exercise solutions!');
