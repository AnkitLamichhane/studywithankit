const fs = require('fs');
const path = require('path');

const class9Chapters = [
  {
    id: "class9-cs-ch1",
    chapterNumber: 1,
    title: "Computer System",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Introduction to computer systems, characteristics, functional hardware and software components, and IPO architecture.",
    topics: [
      {
        title: "1.0 Introduction to Computer System",
        content: "<p>Comprehensive notes for Class 9 Chapter 1 (Computer System) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch2",
    chapterNumber: 2,
    title: "Input Device",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Types of input devices, keyboard, mouse, scanner, OCR, OMR, MICR, barcode readers, and digital cameras.",
    topics: [
      {
        title: "2.0 Introduction to Input Devices",
        content: "<p>Comprehensive notes for Class 9 Chapter 2 (Input Device) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch3",
    chapterNumber: 3,
    title: "Central Processing Unit",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Structure and functioning of the CPU, Arithmetic Logic Unit (ALU), Control Unit (CU), registers, and clock speed.",
    topics: [
      {
        title: "3.0 Introduction to Central Processing Unit",
        content: "<p>Comprehensive notes for Class 9 Chapter 3 (Central Processing Unit) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch4",
    chapterNumber: 4,
    title: "Motherboard and Data Bus",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Motherboard architecture, form factors, expansion slots, chipsets, data bus, address bus, and control bus.",
    topics: [
      {
        title: "4.0 Introduction to Motherboard and Data Bus",
        content: "<p>Comprehensive notes for Class 9 Chapter 4 (Motherboard and Data Bus) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch5",
    chapterNumber: 5,
    title: "Computer Memory",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Primary memory concepts, RAM, ROM, cache memory, registers, and memory hierarchy.",
    topics: [
      {
        title: "5.0 Introduction to Computer Memory",
        content: "<p>Comprehensive notes for Class 9 Chapter 5 (Computer Memory) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch6",
    chapterNumber: 6,
    title: "Computer Storage Device",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Secondary storage devices, hard disk drive (HDD), solid state drive (SSD), optical disks, and flash memory.",
    topics: [
      {
        title: "6.0 Introduction to Computer Storage Device",
        content: "<p>Comprehensive notes for Class 9 Chapter 6 (Computer Storage Device) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch7",
    chapterNumber: 7,
    title: "Output Device",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Softcopy and hardcopy output devices, monitors, printers, plotters, and audio output systems.",
    topics: [
      {
        title: "7.0 Introduction to Output Device",
        content: "<p>Comprehensive notes for Class 9 Chapter 7 (Output Device) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch8",
    chapterNumber: 8,
    title: "Peripheral Device",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Internal and external peripheral devices, ports, interfaces (USB, HDMI, VGA), and connectivity standards.",
    topics: [
      {
        title: "8.0 Introduction to Peripheral Device",
        content: "<p>Comprehensive notes for Class 9 Chapter 8 (Peripheral Device) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch9",
    chapterNumber: 9,
    title: "Computer Software",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "System software, operating systems, application software, utilities, device drivers, and programming languages.",
    topics: [
      {
        title: "9.0 Introduction to Computer Software",
        content: "<p>Comprehensive notes for Class 9 Chapter 9 (Computer Software) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch10",
    chapterNumber: 10,
    title: "Number System",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Decimal, Binary, Octal, and Hexadecimal number systems, and base-to-base conversion methods.",
    topics: [
      {
        title: "10.0 Introduction to Number System",
        content: "<p>Comprehensive notes for Class 9 Chapter 10 (Number System) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch11",
    chapterNumber: 11,
    title: "Block Programming",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Visual block-based programming concepts, logic building, sequencing, loops, and conditional statements.",
    topics: [
      {
        title: "11.0 Introduction to Block Programming",
        content: "<p>Comprehensive notes for Class 9 Chapter 11 (Block Programming) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch12",
    chapterNumber: 12,
    title: "Web Technology - HTML & CSS",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Fundamentals of web design, HTML page structure, tags, elements, forms, tables, and CSS styling.",
    topics: [
      {
        title: "12.0 Introduction to Web Technology - HTML & CSS",
        content: "<p>Comprehensive notes for Class 9 Chapter 12 (Web Technology - HTML & CSS) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch13",
    chapterNumber: 13,
    title: "Internet and Social Media",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Internet fundamentals, WWW, web browsers, search engines, email, social networking platforms, and digital safety.",
    topics: [
      {
        title: "13.0 Introduction to Internet and Social Media",
        content: "<p>Comprehensive notes for Class 9 Chapter 13 (Internet and Social Media) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch14",
    chapterNumber: 14,
    title: "Digital Citizenship and Cyber Security",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Cyber ethics, digital footprint, cyber threats, malware, privacy, cyber law, and online safety.",
    topics: [
      {
        title: "14.0 Introduction to Digital Citizenship and Cyber Security",
        content: "<p>Comprehensive notes for Class 9 Chapter 14 (Digital Citizenship and Cyber Security) will be added soon.</p>"
      }
    ]
  },
  {
    id: "class9-cs-ch15",
    chapterNumber: 15,
    title: "Programming Concept - Python",
    subject: "Computer Science",
    className: "Class 9",
    updated: "2026-09-29",
    summary: "Introduction to Python programming, syntax, variables, data types, input/output, operators, and control flow.",
    topics: [
      {
        title: "15.0 Introduction to Programming Concept - Python",
        content: "<p>Comprehensive notes for Class 9 Chapter 15 (Programming Concept - Python) will be added soon.</p>"
      }
    ]
  }
];

// 1. Update js/notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let notesDataCode = fs.readFileSync(notesDataPath, 'utf8');

const prefix = 'const notesData = ';
const suffixIndex = notesDataCode.lastIndexOf(';');
const jsonString = notesDataCode.slice(notesDataCode.indexOf(prefix) + prefix.length, suffixIndex).trim();
const notesObj = JSON.parse(jsonString);

// Clean update Class 9
notesObj.class9 = {
  computerScience: class9Chapters
};

// Write back to js/notes-data.js
const updatedNotesCode = `const notesData = ${JSON.stringify(notesObj, null, 2)};\n`;
fs.writeFileSync(notesDataPath, updatedNotesCode, 'utf8');
console.log("Successfully updated Class 9 chapters in js/notes-data.js without terminal exam tags!");

// 2. Update scratch/build-data.js
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
