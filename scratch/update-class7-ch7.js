const fs = require('fs');
const path = require('path');

// 1. Build the 53 image figures in exact numerical order
let imagesHtml = '';
for (let i = 1; i <= 53; i++) {
  const padNum = i.toString().padStart(4, '0');
  const imgPath = `assets/images/class7 chapter 7/Chapter7_Spreadsheet_Excel2016grade7_page-${padNum}.jpg`;
  imagesHtml += `
    <figure class="note-figure">
      <img src="${imgPath}" alt="Class 7 Computer Science Chapter 7 - Spreadsheet Microsoft Excel 2016 - Slide ${i}" class="note-figure-img" loading="lazy">
      <figcaption class="note-caption">Slide ${i}: Spreadsheet &mdash; Microsoft Excel 2016</figcaption>
    </figure>
  `;
}

// 2. Build the text-based RECAP
const recapHtml = `
  <div class="note-box note-info">
    <h4><i class="fas fa-book-reader"></i> Chapter 7 Key Revision Points</h4>
    <ul>
      <li><strong>Spreadsheet Program:</strong> An application software designed for organizing, analyzing, formatting, and calculating numeric data arranged in a grid of horizontal rows and vertical columns. Popular examples include <em>Microsoft Excel</em> and <em>Google Sheets</em>.</li>
      <li><strong>Workbook:</strong> A workbook is an Excel file containing one or more worksheets. By default, an Excel 2016 workbook is saved with the <code>.xlsx</code> file extension.</li>
      <li><strong>Worksheet:</strong> A single grid/sheet inside a workbook where users enter and manipulate data. It consists of intersecting horizontal rows and vertical columns.</li>
      <li><strong>Rows &amp; Columns:</strong>
        <ul>
          <li><strong>Rows:</strong> Horizontal lines of cells identified by numbers (1, 2, 3...).</li>
          <li><strong>Columns:</strong> Vertical lines of cells running from top to bottom identified by letters (A, B, C... Z, AA, AB...).</li>
        </ul>
      </li>
      <li><strong>Cell &amp; Cell Address:</strong> A cell is the intersection of a row and a column. Each cell is identified by its unique <strong>cell address</strong> (column letter followed by row number, e.g., <strong>B5</strong> or <strong>A1</strong>).</li>
      <li><strong>Active Cell:</strong> The currently selected cell highlighted with a thick border. Its address appears in the <strong>Name Box</strong>, and its contents appear in the <strong>Formula Bar</strong>.</li>
      <li><strong>Data Types in Excel:</strong>
        <ul>
          <li><strong>Labels (Text):</strong> Descriptive headings and text, aligned to the <em>left</em> by default.</li>
          <li><strong>Values (Numbers):</strong> Numeric values and dates used in calculations, aligned to the <em>right</em> by default.</li>
          <li><strong>Formulas:</strong> Mathematical expressions beginning with an equal sign (<code>=</code>) that compute values dynamically.</li>
        </ul>
      </li>
      <li><strong>AutoFill &amp; Fill Handle:</strong> The <strong>Fill Handle</strong> is a small square at the bottom-right corner of the active cell. Dragging it automatically fills sequential series (such as counting numbers, weekdays, and months) into adjacent cells.</li>
      <li><strong>Formulas vs. Functions:</strong>
        <ul>
          <li><strong>Formula:</strong> A user-defined mathematical expression (e.g., <code>=A1+B1</code>). All formulas must start with <code>=</code>.</li>
          <li><strong>Function:</strong> A built-in, predefined formula in Excel (e.g., <code>=SUM(A1:A10)</code>, <code>=AVERAGE(B1:B5)</code>, <code>=MAX()</code>, <code>=MIN()</code>).</li>
        </ul>
      </li>
      <li><strong>Cell Range:</strong> A block of two or more selected cells written with a colon between the top-left and bottom-right cell addresses (e.g., <code>B2:D5</code>).</li>
      <li><strong>Charts:</strong> Graphical/visual representations of worksheet data (e.g., Column Chart, Pie Chart, Bar Chart, Line Chart) that make comparisons and patterns easy to understand.</li>
    </ul>
  </div>
`;

// 3. Build the solved exercises HTML
const exerciseHtml = `
  <p class="lead-text">
    Complete textbook exercise solutions for <strong>Class 7 Computer Science &mdash; Chapter 7: Spreadsheet (Microsoft Excel 2016)</strong>.
  </p>

  <!-- Question 1 -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">1. Answer the following questions:</h4>

    <div class="qa-item my-3">
      <p class="question"><strong>a. What is Spreadsheet program? List any two Spreadsheet programs.</strong></p>
      <div class="answer">
        <p>A <strong>spreadsheet program</strong> is an interactive application software used for organizing, analyzing, calculating, and manipulating numeric data arranged in a grid of rows and columns.</p>
        <p><strong>Two Spreadsheet programs:</strong></p>
        <ol>
          <li>Microsoft Excel</li>
          <li>Google Sheets (or LibreOffice Calc)</li>
        </ol>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>b. Define workbook and worksheet.</strong></p>
      <div class="answer">
        <p><strong>Workbook:</strong> A workbook is an Excel file that contains one or more worksheets. It is saved with an <code>.xlsx</code> extension.</p>
        <p><strong>Worksheet:</strong> A worksheet (or spreadsheet) is a single page within a workbook composed of a grid of intersecting horizontal rows and vertical columns where data is entered and calculated.</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>c. What is a cell? How is it referred?</strong></p>
      <div class="answer">
        <p><strong>Cell:</strong> A cell is the basic intersection point of a row and a column in a worksheet where data, text, or formulas are entered.</p>
        <p><strong>How it is referred:</strong> A cell is referred to by its <strong>cell address</strong> (or cell reference), which is formed by the column letter followed by the row number (for example, column <strong>B</strong> and row <strong>5</strong> is referred to as <strong>B5</strong>).</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>d. List the type of data that can be used in a worksheet.</strong></p>
      <div class="answer">
        <p>The main types of data that can be entered and used in a worksheet are:</p>
        <ol>
          <li><strong>Labels (Text):</strong> Descriptive words or headings (e.g., Name, Subject, Grade) &mdash; left-aligned by default.</li>
          <li><strong>Values (Numbers):</strong> Numeric values, decimals, currencies, dates, and times used for calculations &mdash; right-aligned by default.</li>
          <li><strong>Formulas and Functions:</strong> Mathematical expressions or built-in functions starting with an equal sign (<code>=</code>) that perform calculations on cell values (e.g., <code>=A1+B1</code>, <code>=SUM(A1:A10)</code>).</li>
        </ol>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>e. Why do you need to change column width?</strong></p>
      <div class="answer">
        <p>You need to change the column width when the entered data (such as long text or large numbers) exceeds the default column width. If the column is too narrow, text may get cut off or hidden by adjacent cells, or numbers may be displayed as a series of pound symbols (<code>###</code>). Adjusting the column width ensures that all data in the cells is fully visible and clearly readable.</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>f. What is data sorting?</strong></p>
      <div class="answer">
        <p><strong>Data sorting</strong> is the process of arranging data in a specific order (such as ascending order: A to Z, smallest to largest; or descending order: Z to A, largest to smallest) based on the values in one or more columns to make it easier to analyze, read, and locate information.</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>g. What is Auto fill? What is the fill handle?</strong></p>
      <div class="answer">
        <p><strong>Auto fill:</strong> A feature in MS-Excel that automatically fills a series of numbers, dates, days of the week, months, or predefined patterns into adjacent cells without manual typing.</p>
        <p><strong>Fill handle:</strong> A small green/black square located at the bottom-right corner of the active cell or selected range. Dragging this handle across adjacent cells activates the Auto Fill feature.</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>h. What is formula? What is the use of the formula bar?</strong></p>
      <div class="answer">
        <p><strong>Formula:</strong> A mathematical equation or expression written by a user in Excel to perform calculations on worksheet data (such as addition, subtraction, multiplication, and division). In Excel, every formula must begin with an equal sign (<code>=</code>).</p>
        <p><strong>Use of the formula bar:</strong> The <strong>formula bar</strong> displays the actual contents or underlying formula of the currently selected (active) cell. It also allows users to view, enter, and edit formulas and cell text.</p>
      </div>
    </div>

    <div class="qa-item my-3">
      <p class="question"><strong>i. What is Chart? List any two types of charts that you can prepare in MS-Excel.</strong></p>
      <div class="answer">
        <p><strong>Chart:</strong> A chart (or graph) is a visual/graphical representation of worksheet data that makes trends, comparisons, and relationships easier to understand and analyze.</p>
        <p><strong>Two types of charts in MS-Excel:</strong></p>
        <ol>
          <li>Column Chart (or Bar Chart)</li>
          <li>Pie Chart (or Line Chart)</li>
        </ol>
      </div>
    </div>
  </div>

  <hr>

  <!-- Question 2 -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">2. State whether the following statements are true or false:</h4>
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
            <td>A spreadsheet program manipulates text.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>Spreadsheet programs primarily manipulate numeric data and perform mathematical calculations; word processors manipulate text.</td>
          </tr>
          <tr>
            <td><strong>b.</strong></td>
            <td>When you change numbers in the cells, MS-Excel automatically performs recalculation.</td>
            <td><span class="badge bg-success">True</span></td>
            <td>Excel automatically updates and recalculates all formula results whenever dependent cell values are altered.</td>
          </tr>
          <tr>
            <td><strong>c.</strong></td>
            <td>MS-Access and Microsoft Excel both are spreadsheet programs.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>Microsoft Excel is a spreadsheet program, whereas MS-Access is a Database Management System (DBMS).</td>
          </tr>
          <tr>
            <td><strong>d.</strong></td>
            <td>The column header identifies the column of a spreadsheet.</td>
            <td><span class="badge bg-success">True</span></td>
            <td>Column headers (labeled with letters A, B, C...) appear at the top to identify each column.</td>
          </tr>
          <tr>
            <td><strong>e.</strong></td>
            <td>A cell address is formed by row number followed by the column heading like 4A.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>A cell address is formed by the column letter followed by the row number (e.g., A4, not 4A).</td>
          </tr>
          <tr>
            <td><strong>f.</strong></td>
            <td>By default, there are four worksheets in a workbook.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>In modern Excel versions like Excel 2016, a new workbook opens with 1 worksheet by default (Sheet1).</td>
          </tr>
          <tr>
            <td><strong>g.</strong></td>
            <td>The formula bar displays address of the active cell and Name box displays the contents of a cell.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>The Name Box displays the active cell address, while the Formula Bar displays the cell contents or formula.</td>
          </tr>
          <tr>
            <td><strong>h.</strong></td>
            <td>Number in a cell is aligned to the right by default.</td>
            <td><span class="badge bg-success">True</span></td>
            <td>Numeric values are right-aligned, while text labels are left-aligned by default.</td>
          </tr>
          <tr>
            <td><strong>i.</strong></td>
            <td>The Auto fill feature allows you to fill only counting numbers in cells.</td>
            <td><span class="badge bg-danger">False</span></td>
            <td>AutoFill can generate counting numbers, dates, months of the year, days of the week, and custom patterns.</td>
          </tr>
          <tr>
            <td><strong>j.</strong></td>
            <td>All formulae in MS-Excel must begin with an equal sign.</td>
            <td><span class="badge bg-success">True</span></td>
            <td>Every formula and function in Excel must begin with an equal sign (<code>=</code>) so Excel recognizes it as a formula.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <hr>

  <!-- Question 3 (Fill in the blanks) -->
  <div class="exercise-card mb-4">
    <h4 class="text-primary border-bottom pb-2">3. Fill in the blanks:</h4>
    <ol class="list-group list-group-numbered">
      <li class="list-group-item">
        A workbook created in MS-Excel has a <strong>.xlsx</strong> extension.
      </li>
      <li class="list-group-item">
        The vertical space running from top to bottom in a spreadsheet is known as <strong>column</strong>.
      </li>
      <li class="list-group-item">
        Each cell in spreadsheet is surrounded by <strong>gridlines</strong> (or cell borders).
      </li>
      <li class="list-group-item">
        When a data is entered in a cell, it is also appeared in the <strong>formula bar</strong>.
      </li>
      <li class="list-group-item">
        A range of cells starting from B2 to D5 is written as <strong>B2:D5</strong>.
      </li>
      <li class="list-group-item">
        When the column width is set to <strong>0</strong> (zero), the column is hidden.
      </li>
      <li class="list-group-item">
        The middle align <strong>centers</strong> the cell contents vertically in the cell.
      </li>
      <li class="list-group-item">
        To edit the cell contents you have to press <strong>F2</strong> key.
      </li>
    </ol>
  </div>
`;

const ch7Data = {
  id: "class7-cs-ch7",
  chapterNumber: 7,
  title: "Spreadsheet \u2014 Microsoft Excel 2016",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-29",
  author: "Er. Ankit Lamichhane &mdash; Grade 7 Computer Science, Chapter 7",
  summary: "Comprehensive guide to Microsoft Excel 2016 spreadsheet fundamentals, workbooks, worksheets, rows, columns, cells, data entry, AutoFill, formulas, functions, formatting, charts, and complete textbook exercise solutions.",
  topics: [
    {
      title: "Chapter Presentation Slides & Learning Material (Slides 1–53)",
      content: imagesHtml
    },
    {
      title: "Chapter Recap",
      content: recapHtml
    },
    {
      title: "Textbook Exercise Solutions \u2014 Chapter 7 (Spreadsheet - MS-Excel 2016)",
      content: exerciseHtml
    }
  ]
};

// 4. Update js/notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let notesDataCode = fs.readFileSync(notesDataPath, 'utf8');

const prefix = 'const notesData = ';
const suffixIndex = notesDataCode.lastIndexOf(';');
const jsonString = notesDataCode.slice(notesDataCode.indexOf(prefix) + prefix.length, suffixIndex).trim();
const notesObj = JSON.parse(jsonString);

const c7 = notesObj.class7.computerScience;
const chIndex = c7.findIndex(c => c.chapterNumber === 7);
if (chIndex === -1) {
  console.error("Error: Class 7 Chapter 7 not found!");
  process.exit(1);
}

// Surgical update of only Chapter 7
c7[chIndex] = ch7Data;

// Write back to js/notes-data.js
const updatedNotesCode = `const notesData = ${JSON.stringify(notesObj, null, 2)};\n`;
fs.writeFileSync(notesDataPath, updatedNotesCode, 'utf8');
console.log("Successfully updated Class 7 Chapter 7 in js/notes-data.js!");

// 5. Update scratch/build-data.js
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
