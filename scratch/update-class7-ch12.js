const fs = require('fs');
const path = require('path');

// 1. Load current notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Define full updated Class 7 Chapter 12: Number System
const ch12Data = {
  id: "class7-cs-ch12",
  chapterNumber: 12,
  title: "Number System",
  subject: "Computer Science",
  className: "Class 7",
  updated: "2026-09-17",
  author: "Innovative Computer Science &mdash; Book 7, Chapter 12",
  summary: "Comprehensive guide to Decimal, Binary, Octal, and Hexadecimal number systems, base values, positional values, step-by-step conversions, visual diagrams, and complete textbook exercise solutions.",
  topics: [
    {
      title: "12.0 Introduction to Number Systems",
      content: `
        <p>You use numbers to represent values. When you count any object, you represent the counted value by numbers like 5, 8, 9, etc. A <strong>number system</strong> is a mathematical way to express numbers using a set of specific digits or symbols.</p>

        <div class="callout callout-remember">
          <div class="callout-title">📌 BASE (RADIX) OF A NUMBER SYSTEM</div>
          <p>The total number of digits or symbols used in a number system is known as the <strong>base</strong> (or radix) of that number system.</p>
        </div>

        <h3>The 4 Types of Number Systems:</h3>
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">1. BASE 10</span><span><strong>Decimal Number System:</strong> Uses 10 digits (0 to 9). Daily life usage.</span></div>
          <div class="step-card"><span class="step-badge">2. BASE 2</span><span><strong>Binary Number System:</strong> Uses 2 digits (0 and 1). Internal computer language.</span></div>
          <div class="step-card"><span class="step-badge">3. BASE 8</span><span><strong>Octal Number System:</strong> Uses 8 digits (0 to 7). Compact binary shorthand.</span></div>
          <div class="step-card"><span class="step-badge">4. BASE 16</span><span><strong>Hexadecimal Number System:</strong> Uses 16 symbols (0-9 &amp; A-F). Memory address representation.</span></div>
        </div>

        <div class="table-responsive" style="margin-top: 20px;">
          <table class="notes-table">
            <thead>
              <tr><th>Number System</th><th>Base (Radix)</th><th>Digits / Symbols Used</th><th>Example Numbers</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Decimal</strong></td><td>10</td><td>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</td><td>(25)<sub>10</sub>, (1034)<sub>10</sub></td></tr>
              <tr><td><strong>Binary</strong></td><td>2</td><td>0, 1 (BITs)</td><td>(1101)<sub>2</sub>, (10111)<sub>2</sub></td></tr>
              <tr><td><strong>Octal</strong></td><td>8</td><td>0, 1, 2, 3, 4, 5, 6, 7</td><td>(472)<sub>8</sub>, (157)<sub>8</sub></td></tr>
              <tr><td><strong>Hexadecimal</strong></td><td>16</td><td>0-9 &amp; A, B, C, D, E, F</td><td>(1A)<sub>16</sub>, (B0D2)<sub>16</sub></td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "12.1 Detailed Breakdown of Number Systems",
      content: `
        <h3>1. Decimal Number System</h3>
        <p>A number system that uses ten different digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) is known as the decimal number system. It is a <strong>base-ten</strong> number system. Other numbers are formed by combining two or more digits, such as 13 (1 and 3) or 1034 (1, 0, 3, and 4). The decimal number system is used in daily human life, but it is not directly used inside a computer.</p>

        <h3>2. Binary Number System</h3>
        <p>A number system that uses two different digits (0 and 1) is known as the binary number system. It is a <strong>base-two</strong> number system. Each digit is called a <strong>Binary digIT (BIT)</strong>.</p>
        
        <div class="callout callout-doyouknow">
          <div class="callout-title">💡 WHY COMPUTERS USE BINARY</div>
          <p>Computers consist of electronic circuits that operate using electricity. Electrical signals have two natural states: <strong>OFF (0 state / Low Voltage)</strong> and <strong>ON (1 state / High Voltage)</strong>. Therefore, computers process all data in binary.</p>
        </div>

        <p>Place values in binary use powers of 2 (2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>4</sup>, etc.). For example, binary 1101 is expanded as:</p>
        <p><code>(1101)<sub>2</sub> = 1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 8 + 4 + 0 + 1 = (13)<sub>10</sub></code></p>

        <h3>3. Octal Number System</h3>
        <p>A number system that uses eight different digits (0, 1, 2, 3, 4, 5, 6, 7) is known as the octal number system. It is a <strong>base-eight</strong> number system. Place values use powers of 8 (8<sup>0</sup>, 8<sup>1</sup>, 8<sup>2</sup>, 8<sup>3</sup>, etc.).</p>
        <p>Example expansion: <code>(472)<sub>8</sub> = 4 &times; 8<sup>2</sup> + 7 &times; 8<sup>1</sup> + 2 &times; 8<sup>0</sup> = 4 &times; 64 + 7 &times; 8 + 2 &times; 1 = 256 + 56 + 2 = (314)<sub>10</sub></code></p>

        <h3>4. Hexadecimal Number System</h3>
        <p>A number system that uses sixteen different digits/symbols is known as the hexadecimal number system. It is a <strong>base-16</strong> number system.</p>
        <ul>
          <li><strong>Digits 0–9:</strong> Represent values 0 to 9.</li>
          <li><strong>Letters A–F:</strong> Represent values 10 to 15 (A=10, B=11, C=12, D=13, E=14, F=15).</li>
        </ul>
        <p>Place values use powers of 16 (16<sup>0</sup>, 16<sup>1</sup>, 16<sup>2</sup>, etc.). Examples: 1A, B0D2.</p>
      `
    },
    {
      title: "12.2 Conversion Methods & Step-by-Step Examples",
      content: `
        <h3>a. Conversion of Decimal Numbers to Binary Numbers</h3>
        <p>To convert a decimal number into a binary number, follow the <strong>successive division by 2</strong> method:</p>
        
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">STEP 1</span><span>Divide the given decimal number by 2.</span></div>
          <div class="step-card"><span class="step-badge">STEP 2</span><span>Note down the remainder (0 or 1) in the remainder column.</span></div>
          <div class="step-card"><span class="step-badge">STEP 3</span><span>Divide the quotient by 2 repeatedly until the quotient becomes 0.</span></div>
          <div class="step-card"><span class="step-badge">STEP 4</span><span>Read the remainders from <strong>bottom to top</strong> (Most Significant Bit to Least Significant Bit).</span></div>
        </div>

        <div class="qa-card" style="margin-top: 15px;">
          <div class="qa-card-q">Example 1: Convert (25)<sub>10</sub> into Binary (?)<sub>2</sub></div>
          <div class="qa-card-a">
            <div class="table-responsive">
              <table class="notes-table" style="max-width: 300px;">
                <thead><tr><th>Base Divisor</th><th>Number / Quotient</th><th>Remainder</th></tr></thead>
                <tbody>
                  <tr><td>2</td><td>25</td><td>1</td></tr>
                  <tr><td>2</td><td>12</td><td>0</td></tr>
                  <tr><td>2</td><td>6</td><td>0</td></tr>
                  <tr><td>2</td><td>3</td><td>1</td></tr>
                  <tr><td>2</td><td>1</td><td>1</td></tr>
                  <tr><td></td><td>0</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <p>Reading remainders from bottom to top: <strong>1 1 0 0 1</strong></p>
            <p><strong>&there4; (25)<sub>10</sub> = (11001)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">Example 2: Convert (152)<sub>10</sub> into Binary (?)<sub>2</sub></div>
          <div class="qa-card-a">
            <div class="table-responsive">
              <table class="notes-table" style="max-width: 300px;">
                <thead><tr><th>Base Divisor</th><th>Number / Quotient</th><th>Remainder</th></tr></thead>
                <tbody>
                  <tr><td>2</td><td>152</td><td>0</td></tr>
                  <tr><td>2</td><td>76</td><td>0</td></tr>
                  <tr><td>2</td><td>38</td><td>0</td></tr>
                  <tr><td>2</td><td>19</td><td>1</td></tr>
                  <tr><td>2</td><td>9</td><td>1</td></tr>
                  <tr><td>2</td><td>4</td><td>0</td></tr>
                  <tr><td>2</td><td>2</td><td>0</td></tr>
                  <tr><td>2</td><td>1</td><td>1</td></tr>
                  <tr><td></td><td>0</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <p>Reading remainders from bottom to top: <strong>1 0 0 1 1 0 0 0</strong></p>
            <p><strong>&there4; (152)<sub>10</sub> = (10011000)<sub>2</sub></strong></p>
          </div>
        </div>

        <h3>b. Conversion of Binary Numbers to Decimal Numbers</h3>
        <p>To convert a binary number into a decimal number, multiply each binary digit by its corresponding positional weight (power of 2) and add all the products together.</p>

        <div class="qa-card">
          <div class="qa-card-q">Example 3: Convert (111)<sub>2</sub> into Decimal (?)<sub>10</sub></div>
          <div class="qa-card-a">
            <p><code>111 = 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup></code></p>
            <p><code>= 1 &times; 4 + 1 &times; 2 + 1 &times; 1</code></p>
            <p><code>= 4 + 2 + 1 = 7</code></p>
            <p><strong>&there4; (111)<sub>2</sub> = (7)<sub>10</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">Example 4: Convert (10111)<sub>2</sub> into Decimal (?)<sub>10</sub></div>
          <div class="qa-card-a">
            <p><code>10111 = 1 &times; 2<sup>4</sup> + 0 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup></code></p>
            <p><code>= 1 &times; 16 + 0 &times; 8 + 1 &times; 4 + 1 &times; 2 + 1 &times; 1</code></p>
            <p><code>= 16 + 0 + 4 + 2 + 1 = 23</code></p>
            <p><strong>&there4; (10111)<sub>2</sub> = (23)<sub>10</sub></strong></p>
          </div>
        </div>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 12 (Number System)",
      content: `
        <h2>Innovative Computer Science &mdash; Book 7, Chapter 12 Complete Exercise Solutions</h2>

        <h3>1. Answer the Following Questions</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is binary number system? Why is it used in computer system?</div>
          <div class="qa-card-a">
            <p><strong>Answer:</strong> The binary number system is a base-2 number system that uses only two digits: <strong>0</strong> and <strong>1</strong>. Each digit in a binary number is called a BIT (Binary digIT).</p>
            <p><strong>Why used in computer system:</strong> Computers are electronic devices composed of digital circuits. Electrical signals have two natural states: <strong>OFF (0 / Low voltage)</strong> and <strong>ON (1 / High voltage)</strong>. Therefore, binary numbers are used because they perfectly match the electronic hardware of computers.</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. What is hexadecimal number system? List its digits.</div>
          <div class="qa-card-a">
            <p><strong>Answer:</strong> The hexadecimal number system is a base-16 number system that uses sixteen distinct digits/symbols to represent values.</p>
            <p><strong>List of Digits &amp; Symbols:</strong> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A (10), B (11), C (12), D (13), E (14), and F (15).</p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. What is octal number system? List its digits.</div>
          <div class="qa-card-a">
            <p><strong>Answer:</strong> The octal number system is a base-8 number system that uses eight distinct digits to represent values.</p>
            <p><strong>List of Digits:</strong> 0, 1, 2, 3, 4, 5, 6, and 7.</p>
          </div>
        </div>

        <h3>2. Convert the Following Binary Numbers into Decimal Numbers</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. (110)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 4 + 2 + 0 = <strong>(6)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. (1100)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 8 + 4 + 0 + 0 = <strong>(12)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. (1101)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 8 + 4 + 0 + 1 = <strong>(13)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. (1111)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 8 + 4 + 2 + 1 = <strong>(15)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. (11011)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>4</sup> + 1 &times; 2<sup>3</sup> + 0 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 16 + 8 + 0 + 2 + 1 = <strong>(27)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. (10101)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>4</sup> + 0 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 16 + 0 + 4 + 0 + 1 = <strong>(21)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">g. (11001)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>4</sup> + 1 &times; 2<sup>3</sup> + 0 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 16 + 8 + 0 + 0 + 1 = <strong>(25)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. (101110)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>5</sup> + 0 &times; 2<sup>4</sup> + 1 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 32 + 0 + 8 + 4 + 2 + 0 = <strong>(46)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">i. (110110)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>5</sup> + 1 &times; 2<sup>4</sup> + 0 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 1 &times; 2<sup>1</sup> + 0 &times; 2<sup>0</sup> = 32 + 16 + 0 + 4 + 2 + 0 = <strong>(54)<sub>10</sub></strong></code></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">j. (110101)<sub>2</sub></div>
          <div class="qa-card-a"><code>1 &times; 2<sup>5</sup> + 1 &times; 2<sup>4</sup> + 0 &times; 2<sup>3</sup> + 1 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> = 32 + 16 + 0 + 4 + 0 + 1 = <strong>(53)<sub>10</sub></strong></code></div>
        </div>

        <h3>3. Convert the Following Decimal Numbers into Binary Numbers</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. (26)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>26 &divide; 2 = 13 (Rem 0), 13 &divide; 2 = 6 (Rem 1), 6 &divide; 2 = 3 (Rem 0), 3 &divide; 2 = 1 (Rem 1), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(11010)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. (59)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>59 &divide; 2 = 29 (Rem 1), 29 &divide; 2 = 14 (Rem 1), 14 &divide; 2 = 7 (Rem 0), 7 &divide; 2 = 3 (Rem 1), 3 &divide; 2 = 1 (Rem 1), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(111011)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. (75)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>75 &divide; 2 = 37 (Rem 1), 37 &divide; 2 = 18 (Rem 1), 18 &divide; 2 = 9 (Rem 0), 9 &divide; 2 = 4 (Rem 1), 4 &divide; 2 = 2 (Rem 0), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(1001011)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. (135)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>135 &divide; 2 = 67 (Rem 1), 67 &divide; 2 = 33 (Rem 1), 33 &divide; 2 = 16 (Rem 1), 16 &divide; 2 = 8 (Rem 0), 8 &divide; 2 = 4 (Rem 0), 4 &divide; 2 = 2 (Rem 0), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(10000111)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. (175)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>175 &divide; 2 = 87 (Rem 1), 87 &divide; 2 = 43 (Rem 1), 43 &divide; 2 = 21 (Rem 1), 21 &divide; 2 = 10 (Rem 1), 10 &divide; 2 = 5 (Rem 0), 5 &divide; 2 = 2 (Rem 1), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(10101111)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. (250)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>250 &divide; 2 = 125 (Rem 0), 125 &divide; 2 = 62 (Rem 1), 62 &divide; 2 = 31 (Rem 0), 31 &divide; 2 = 15 (Rem 1), 15 &divide; 2 = 7 (Rem 1), 7 &divide; 2 = 3 (Rem 1), 3 &divide; 2 = 1 (Rem 1), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(11111010)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">g. (310)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>310 &divide; 2 = 155 (Rem 0), 155 &divide; 2 = 77 (Rem 1), 77 &divide; 2 = 38 (Rem 1), 38 &divide; 2 = 19 (Rem 0), 19 &divide; 2 = 9 (Rem 1), 9 &divide; 2 = 4 (Rem 1), 4 &divide; 2 = 2 (Rem 0), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(100110110)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. (845)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>845 &divide; 2 = 422 (Rem 1), 422 &divide; 2 = 211 (Rem 0), 211 &divide; 2 = 105 (Rem 1), 105 &divide; 2 = 52 (Rem 1), 52 &divide; 2 = 26 (Rem 0), 26 &divide; 2 = 13 (Rem 0), 13 &divide; 2 = 6 (Rem 1), 6 &divide; 2 = 3 (Rem 0), 3 &divide; 2 = 1 (Rem 1), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(1101001101)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">i. (521)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>521 &divide; 2 = 260 (Rem 1), 260 &divide; 2 = 130 (Rem 0), 130 &divide; 2 = 65 (Rem 0), 65 &divide; 2 = 32 (Rem 1), 32 &divide; 2 = 16 (Rem 0), 16 &divide; 2 = 8 (Rem 0), 8 &divide; 2 = 4 (Rem 0), 4 &divide; 2 = 2 (Rem 0), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(1000001001)<sub>2</sub></strong></p>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">j. (651)<sub>10</sub></div>
          <div class="qa-card-a">
            <p>651 &divide; 2 = 325 (Rem 1), 325 &divide; 2 = 162 (Rem 1), 162 &divide; 2 = 81 (Rem 0), 81 &divide; 2 = 40 (Rem 1), 40 &divide; 2 = 20 (Rem 0), 20 &divide; 2 = 10 (Rem 0), 10 &divide; 2 = 5 (Rem 0), 5 &divide; 2 = 2 (Rem 1), 2 &divide; 2 = 1 (Rem 0), 1 &divide; 2 = 0 (Rem 1)</p>
            <p>Reading remainders bottom-to-top: <strong>(1010001011)<sub>2</sub></strong></p>
          </div>
        </div>
      `
    }
  ]
};

// 3. Update ONLY Class 7 Chapter 12 in currentNotes
const class7Chapters = currentNotes.class7.computerScience;
const ch12Index = class7Chapters.findIndex(ch => ch.chapterNumber === 12);
if (ch12Index !== -1) {
  class7Chapters[ch12Index] = ch12Data;
} else {
  class7Chapters.push(ch12Data);
}

// 4. Construct full updated data object
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (18 chapters intact)
  class7: currentNotes.class7, // ONLY Chapter 12 updated, all other 21 chapters intact
  class8: currentNotes.class8, // STRICTLY UNTOUCHED (17 chapters intact)
  class9: currentNotes.class9, // STRICTLY UNTOUCHED (5 chapters intact)
  class10: currentNotes.class10 // STRICTLY UNTOUCHED (6 chapters intact)
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
console.log('Successfully updated Class 7 Chapter 12 notes and exercises while preserving all other chapters!');

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
