const fs = require('fs');
const path = require('path');

// 1. Read existing notes-data.js
const notesDataPath = path.join(__dirname, '..', 'js', 'notes-data.js');
let fileContent = fs.readFileSync(notesDataPath, 'utf8');
fileContent = fileContent.replace('const notesData =', 'global.currentNotesData =');
eval(fileContent);
const currentNotes = global.currentNotesData;

// 2. Build complete detailed Chapter 7 data structure for Class 8
const ch7Data = {
  id: "class8-cs-ch7",
  chapterNumber: 7,
  title: "Presentation Software (MS-PowerPoint 2016)",
  subject: "Computer Science",
  className: "Class 8",
  updated: "2026-09-18",
  author: "Prepared by ER. Ankit Lamichhane &mdash; Book 8, Chapter 7",
  summary: "Comprehensive guide to Microsoft PowerPoint 2016, slide creation, layouts, presentation views, text box formatting, graphics, photo albums, audio/video media, WordArt, animations, slide transitions, self-running slide shows, printing, packaging, and complete textbook exercise solutions.",
  topics: [
    {
      title: "7.0 Unit Roadmap & Learning Objectives",
      content: `
        <div class="callout callout-remember">
          <div class="callout-title">🎯 CHAPTER 7 LEARNING OBJECTIVES</div>
          <p>At the end of this chapter, students will be able to:</p>
          <ul>
            <li>Prepare a presentation using pictures, audio, and videos.</li>
            <li>Implement transition features between slides.</li>
            <li>Implement animation effects on slide objects.</li>
            <li>Prepare a package presentation for another computer.</li>
          </ul>
        </div>

        <h3>Chapter 7 Topics Roadmap:</h3>
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">7.0</span><span>Introduction to Presentation Software</span></div>
          <div class="step-card"><span class="step-badge">7.1</span><span>Getting to Know MS-PowerPoint &amp; Loading the Program</span></div>
          <div class="step-card"><span class="step-badge">7.2</span><span>Important Terms (Slide, Object, Placeholder, Transition)</span></div>
          <div class="step-card"><span class="step-badge">7.3</span><span>Creating a Presentation &amp; Slide Layouts</span></div>
          <div class="step-card"><span class="step-badge">7.4</span><span>Saving (.pptx / .ppsx) &amp; Opening Presentations</span></div>
          <div class="step-card"><span class="step-badge">7.5</span><span>Ways to View a Presentation (Normal, Sorter, Show, Master)</span></div>
          <div class="step-card"><span class="step-badge">7.6</span><span>Editing a Presentation (Text, Multiple Slides, Reordering)</span></div>
          <div class="step-card"><span class="step-badge">7.7</span><span>Starting &amp; Controlling a Slide Show</span></div>
          <div class="step-card"><span class="step-badge">7.8</span><span>Working with Text Boxes (Moving, Resizing, Outlining, Fill)</span></div>
          <div class="step-card"><span class="step-badge">7.9</span><span>Adding Backgrounds, Graphics, Photo Albums, Media &amp; WordArt</span></div>
          <div class="step-card"><span class="step-badge">7.10</span><span>Animation Effects (Entrance, Emphasis, Exit, Motion Paths)</span></div>
          <div class="step-card"><span class="step-badge">7.11</span><span>Slide Transitions, Self-Running Show, Printing &amp; Packaging</span></div>
        </div>
      `
    },
    {
      title: "7.1 Introduction to Presentation Software & Loading PowerPoint",
      content: `
        <p>Information can be presented using traditional methods (pamphlets, posters, handouts) or digitally using a computer and projector. A <strong>presentation program</strong> is application software that lets you create, modify, manage, and display information in the form of slides.</p>
        
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">SLIDE</span><span>A single page of a presentation displaying brief topic information using text, pictures, audio, video, and animation.</span></div>
          <div class="step-card"><span class="step-badge">PRESENTATION</span><span>A collection of slides arranged in sequential order to convey ideas clearly.</span></div>
        </div>

        <p><strong>Popular Presentation Software:</strong> Microsoft PowerPoint, Apple Keynote, OpenOffice Impress, Slidebean, Adobe Premiere.</p>

        <h3>Getting to Know MS-PowerPoint 2016</h3>
        <p><strong>Microsoft PowerPoint 2016</strong> is a powerful multimedia presentation program that lets you create, edit, organize, and present slides. Think of it as a <em>digital storyboard</em> &mdash; every slide is one page of your story.</p>

        <h3>Task: Loading Microsoft PowerPoint 2016</h3>
        <ol>
          <li>Press <strong>Windows Key + R</strong> to open the Run dialog box.</li>
          <li>Type <code>POWERPNT</code> in the Open command box.</li>
          <li>Press <strong>Enter</strong> or click <strong>OK</strong>.</li>
          <li><em>Alternative Method:</em> Click <strong>Start &rarr; All Apps &rarr; scroll down &rarr; select PowerPoint 2016</strong>.</li>
        </ol>
      `
    },
    {
      title: "7.2 Important Terms Used in MS-PowerPoint",
      content: `
        <div class="table-responsive">
          <table class="notes-table">
            <thead>
              <tr><th>Key Term</th><th>Definition &amp; Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Slide</strong></td><td>A single page of a presentation containing brief information using text, pictures, sounds, movies, and animations.</td></tr>
              <tr><td><strong>Object</strong></td><td>Any picture, text box, chart, shape, sound, or video clip that appears on a PowerPoint slide.</td></tr>
              <tr><td><strong>Placeholder</strong></td><td>A pre-formatted box surrounded by dotted lines on a slide layout that holds titles, body text, tables, charts, or media.</td></tr>
              <tr><td><strong>Slide Show</strong></td><td>A series of slides displayed full-screen in sequence, controlled manually or automatically.</td></tr>
              <tr><td><strong>Transition</strong></td><td>A special visual or audio effect used to introduce a slide as it moves to the next slide during a slide show.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "7.3 Creating, Saving, Opening & Slide Layouts",
      content: `
        <h3>Creating a Blank Presentation</h3>
        <ol>
          <li>Click the <strong>File tab</strong> (Backstage view).</li>
          <li>Select <strong>New</strong> command.</li>
          <li>Select <strong>Blank Presentation</strong> under Available Templates and Themes.</li>
          <li>The default Title Slide is displayed.</li>
        </ol>

        <h3>Adding a New Slide &amp; Changing Slide Layout</h3>
        <ol>
          <li>Click <strong>New Slide</strong> on the Slides group of the <strong>Home tab</strong> (or Insert tab).</li>
          <li>Click <strong>Layout</strong> on the Slides group of the Home tab.</li>
          <li>Choose an appropriate layout: <em>Title Slide, Title and Content, Section Header, Two Content, Comparison, Title Only, Blank, Content with Caption, Picture with Caption</em>.</li>
        </ol>

        <h3>Saving a Presentation</h3>
        <ol>
          <li>Click the <strong>File tab &rarr; Save As &rarr; Browse</strong>.</li>
          <li>Specify the folder location and type the file name.</li>
          <li>Click <strong>Save</strong> or press Enter.</li>
        </ol>

        <div class="callout callout-remember">
          <div class="callout-title">📌 FILE EXTENSIONS (.PPTX vs .PPSX)</div>
          <ul>
            <li><strong>Standard File Extension:</strong> <code>.PPTX</code> (older versions used <code>.PPT</code>). Shortcut: <code>Ctrl + S</code>.</li>
            <li><strong>PowerPoint Show Extension:</strong> <code>.PPSX</code> &mdash; saving as a PowerPoint Show allows the presentation to open and run directly full-screen without opening the PowerPoint editing environment first!</li>
          </ul>
        </div>

        <h3>Opening an Existing Presentation</h3>
        <ol>
          <li>Click <strong>File tab &rarr; Open &rarr; Browse</strong>.</li>
          <li>Locate the file and click <strong>Open</strong> (or press Enter). Shortcut: <code>Ctrl + O</code>.</li>
        </ol>
      `
    },
    {
      title: "7.4 Presentation Views (Normal, Sorter, Show, Master)",
      content: `
        <p>MS-PowerPoint offers several ways to view slides, available on the <strong>View tab</strong> or on the status bar:</p>

        <h3>1. Normal View (Slide View)</h3>
        <p>The primary editing view used to create and edit slides. It splits the working screen into <strong>three main panes</strong>:</p>
        <ul>
          <li><strong>Slides Pane (left):</strong> Displays thumbnail previews of all slides in the presentation.</li>
          <li><strong>Slide Pane (center):</strong> Large working area showing the active slide for adding text, images, and objects.</li>
          <li><strong>Notes Pane (bottom):</strong> Allows you to type speaker notes for each slide.</li>
        </ul>

        <h3>2. Slide Sorter View</h3>
        <p>Displays horizontal thumbnail previews of all slides on one screen. Ideal for inserting, deleting, or reordering slides via drag-and-drop.</p>

        <h3>3. Outline View</h3>
        <p>Displays only the text content of slides in an outline list format, perfect for storyboarding and editing text quickly.</p>

        <h3>4. Notes Page View</h3>
        <p>Displays the Notes pane in full-page format for reviewing speaker notes.</p>

        <h3>5. Reading View</h3>
        <p>Runs the slide show inside the PowerPoint window with simple navigation controls for quick reviewing.</p>

        <h3>6. Slide Show View</h3>
        <p>Runs the presentation full-screen, one slide after another. Shortcut key: <strong>F5</strong> (from beginning) or <strong>Shift + F5</strong> (from current slide).</p>

        <h3>7. Master Views (Slide Master, Handout Master, Notes Master)</h3>
        <p>Stores the background design, colors, fonts, placeholder positions, and header/footer settings for the entire presentation deck.</p>
      `
    },
    {
      title: "7.5 Editing & Managing Slides (Inserting, Deleting, Reordering)",
      content: `
        <h3>Editing Text in a Slide</h3>
        <ul>
          <li>Switch to <strong>Normal View</strong> and select the target slide.</li>
          <li>Click inside placeholder text to edit, or double-click a word to select it, or triple-click to select an entire paragraph.</li>
          <li>Use standard edit shortcuts: <code>Ctrl + X</code> (Cut), <code>Ctrl + C</code> (Copy), <code>Ctrl + V</code> (Paste), <code>Ctrl + Z</code> (Undo), <code>Ctrl + Y</code> (Redo).</li>
        </ul>

        <h3>Selecting Multiple Slides (in Slide Sorter View)</h3>
        <ul>
          <li><strong>Sequential Slides:</strong> Click the first slide &rarr; press and hold <strong>SHIFT key</strong> &rarr; click the last slide.</li>
          <li><strong>Non-Sequential Slides:</strong> Click the first slide &rarr; press and hold <strong>CTRL key</strong> &rarr; click each desired slide.</li>
        </ul>

        <h3>Slide Management Operations</h3>
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">INSERT</span><span>Home tab &rarr; New Slide in Slides group &rarr; select layout.</span></div>
          <div class="step-card"><span class="step-badge">DELETE</span><span>Select slide &rarr; press <code>Delete</code> key (or right-click &rarr; Delete Slide).</span></div>
          <div class="step-card"><span class="step-badge">DUPLICATE</span><span>Home tab &rarr; New Slide dropdown &rarr; Duplicate Selected Slides (or right-click &rarr; Duplicate Slide).</span></div>
          <div class="step-card"><span class="step-badge">REORDER</span><span>In Slide Sorter or Outline View, click and drag the slide to its new position. Slide numbers update automatically.</span></div>
        </div>
      `
    },
    {
      title: "7.6 Working with Text Boxes (Moving, Resizing, Formatting)",
      content: `
        <p>A <strong>Text Box</strong> is a custom placeholder that lets you place and format text anywhere on a slide.</p>

        <h3>1. Adding a Text Box</h3>
        <ol>
          <li>Click <strong>Insert tab &rarr; Text group &rarr; Text Box</strong>.</li>
          <li>Click on the slide and drag diagonally to draw the box.</li>
          <li>Type your text inside the flashing cursor. Click outside when finished.</li>
        </ol>

        <h3>2. Moving a Text Box</h3>
        <ul>
          <li>Click the text box border. The mouse pointer turns into a <strong>4-headed arrow</strong>.</li>
          <li>Click and drag the box to its new location.</li>
        </ul>

        <h3>3. Resizing a Text Box</h3>
        <ul>
          <li>Click the text box to display sizing handles (small squares on corners and sides).</li>
          <li>Position pointer over a handle until it turns into a <strong>2-headed arrow</strong>. Drag outward to enlarge or inward to shrink.</li>
          <li><em>Pro Tip:</em> Hold down the <strong>SHIFT key</strong> while dragging a corner handle to resize width and height proportionally.</li>
        </ul>

        <h3>4. Outlining &amp; Adding Fill Colour</h3>
        <ul>
          <li><strong>Shape Outline:</strong> Select text box &rarr; Format tab &rarr; Shape Styles group &rarr; Shape Outline &rarr; select line weight/style.</li>
          <li><strong>Shape Fill:</strong> Select text box &rarr; Format tab &rarr; Shape Fill &rarr; choose Theme Colour, Gradient, or Texture.</li>
        </ul>
      `
    },
    {
      title: "7.7 Backgrounds, Media, Photo Albums & WordArt",
      content: `
        <h3>Applying Background Colour</h3>
        <ol>
          <li>Select slide &rarr; <strong>Design tab &rarr; Variants group &rarr; click More &rarr; Background Styles</strong>.</li>
          <li>Choose predefined style or click <strong>Format Background</strong>.</li>
          <li>Select <em>Solid Fill, Gradient Fill, Picture and Texture Fill, or Pattern Fill</em>.</li>
          <li>Click <strong>Apply to All</strong> (or Close for single slide).</li>
        </ol>

        <h3>Adding Graphics &amp; Media Clips</h3>
        <ul>
          <li><strong>Insert Picture:</strong> Insert tab &rarr; Images group &rarr; Picture &rarr; locate image file &rarr; click Insert.</li>
          <li><strong>Insert ClipArt:</strong> Double-click ClipArt placeholder &rarr; Microsoft Clip Organizer &rarr; select image.</li>
          <li><strong>Insert Video / Audio:</strong> Insert tab &rarr; Media group &rarr; click <strong>Video &rarr; Video from File</strong> or <strong>Audio &rarr; Audio from File</strong>.</li>
        </ul>

        <h3>Creating a Photo Album</h3>
        <ol>
          <li>Insert tab &rarr; Images group &rarr; <strong>Photo Album</strong>.</li>
          <li>Click <strong>File/Disk</strong> under Insert picture from. Select photo files &rarr; Insert.</li>
          <li>Set Picture Layout (e.g. 1, 2, or 4 pictures per slide).</li>
          <li>Click <strong>Create</strong>. PowerPoint automatically builds photo album slides.</li>
        </ol>

        <h3>WordArt (Styling Text)</h3>
        <p>WordArt adds special text effects (3D rotation, shadows, glowing outlines, curves) to decorate slides.</p>
        <ul>
          <li><strong>Add WordArt:</strong> Insert tab &rarr; Text group &rarr; WordArt &rarr; select style. Type text.</li>
          <li><strong>Apply Text Effects:</strong> Select WordArt &rarr; Format tab &rarr; WordArt Styles group &rarr; Text Effects &rarr; Transform.</li>
          <li><strong>Remove WordArt Style:</strong> Select text &rarr; Format tab &rarr; WordArt Styles &rarr; More button &rarr; <strong>Clear WordArt</strong>.</li>
        </ul>
      `
    },
    {
      title: "7.8 Animation & Transition Effects",
      content: `
        <h3>Animation Effects (Animating Slide Objects)</h3>
        <p>Animation adds visual or sound effects to specific slide objects (text, shapes, pictures). PowerPoint provides <strong>four animation types</strong>:</p>
        
        <div class="step-card-grid">
          <div class="step-card"><span class="step-badge">ENTRANCE</span><span>Controls how an object enters the slide (Appear, Fade, Fly In, Float In).</span></div>
          <div class="step-card"><span class="step-badge">EMPHASIS</span><span>Animates an object while on the slide (Spin, Pulse, Color Pulse, Teeter).</span></div>
          <div class="step-card"><span class="step-badge">EXIT</span><span>Controls how an object leaves the slide (Disappear, Fade, Fly Out, Split).</span></div>
          <div class="step-card"><span class="step-badge">MOTION PATHS</span><span>Moves an object along a custom predefined line, curve, or path.</span></div>
        </div>

        <h3>The Animation Pane &amp; Timings</h3>
        <ol>
          <li>Select object &rarr; <strong>Animation tab &rarr; Advanced Animation group &rarr; Animation Pane</strong>.</li>
          <li>Set Start trigger: <strong>Start On Click</strong> (default), <strong>Start With Previous</strong>, or <strong>Start After Previous</strong>.</li>
          <li>Click <strong>Timing</strong> &rarr; set Duration (Very Slow, Slow, Medium, Fast, Very Fast).</li>
        </ol>

        <h3>Slide Transitions (Animating Slide Changes)</h3>
        <p>Transitions are special visual effects applied when moving from one slide to another during a slide show.</p>
        <ul>
          <li><strong>Add Transition:</strong> Select slide &rarr; <strong>Transitions tab &rarr; Transition to This Slide group</strong> &rarr; select effect (Cut, Fade, Push, Wipe, Split, Flash, Flip, Cube). Select Sound &amp; Duration &rarr; click <strong>Apply To All</strong>.</li>
          <li><strong>Remove Transition:</strong> Select slide &rarr; Transitions tab &rarr; click <strong>None</strong> &rarr; Apply to All.</li>
        </ul>
      `
    },
    {
      title: "7.9 Self-Running Shows, Printing & Packaging",
      content: `
        <h3>Setting Up a Self-Running Slide Show (Rehearse Timings)</h3>
        <ol>
          <li>Click <strong>Slide Show tab &rarr; Set Up group &rarr; Rehearse Timings</strong>.</li>
          <li>The Rehearsal toolbar appears and timing starts automatically.</li>
          <li>Click <em>Next</em> to advance slides, <em>Pause</em> to hold, or <em>Repeat</em> to reset timing for a slide.</li>
          <li>At the end, click <strong>Save</strong> to keep the recorded timings for an automated self-running presentation.</li>
        </ol>

        <div class="callout callout-quickcheck">
          <div class="callout-title">🎮 CONTROLLING THE SLIDE SHOW</div>
          <ul>
            <li><strong>Next Slide:</strong> Left click, Enter key, Spacebar, or Right/Down Arrow key.</li>
            <li><strong>Previous Slide:</strong> Left/Up Arrow key.</li>
            <li><strong>End Slide Show:</strong> Press <code>ESC</code> key.</li>
          </ul>
        </div>

        <h3>Printing Slides, Notes &amp; Handouts</h3>
        <ol>
          <li>Click <strong>File tab &rarr; Print</strong>.</li>
          <li>Set copies &amp; printer choice.</li>
          <li>Settings: Print All Slides, Print Current Slide, or Custom Range (e.g. 1-3, 6-9).</li>
          <li>Print Layout: Full Page Slides, Notes Pages, or <strong>Handouts (1, 2, 3, 4, 6, or 9 slides per page)</strong>.</li>
          <li>Color Mode: Color, Grayscale, or Pure Black &amp; White. Click <strong>Print</strong>.</li>
        </ol>

        <h3>Packaging a Presentation (File &rarr; Export)</h3>
        <p>Packaging bundle all external media, fonts, and slide files into a single folder or portable file so the presentation runs smoothly on any computer without missing assets.</p>
        <ul>
          <li><strong>Create a Video:</strong> Saves presentation as an <code>.mp4</code> or <code>.wmv</code> video file.</li>
          <li><strong>Package Presentation for CD:</strong> Bundles all presentation files onto a pen drive or CD folder.</li>
          <li><strong>Create PDF/XPS Document:</strong> Preserves original layout, fonts, and graphics in standard PDF format.</li>
        </ul>
      `
    },
    {
      title: "Textbook Exercise Solutions &mdash; Chapter 7 (MS-PowerPoint 2016)",
      content: `
        <h2>Innovative Computer Science &mdash; Book 8, Chapter 7 Complete Exercise Solutions</h2>

        <h3>1. Very Short Answer Questions (a to d)</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is a slide?</div>
          <div class="qa-card-a"><strong>Answer:</strong> A slide is one single page of a presentation that displays brief information using text, pictures, audio, video, and animation.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. What is a presentation?</div>
          <div class="qa-card-a"><strong>Answer:</strong> A presentation is a collection of slides arranged in sequential order to display information clearly to an audience.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. What is the use of Slide Show view?</div>
          <div class="qa-card-a"><strong>Answer:</strong> Slide Show view displays slides full-screen, one after another, to run and deliver the actual presentation to an audience.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. What is a transition?</div>
          <div class="qa-card-a"><strong>Answer:</strong> A transition is a special visual effect that appears when a slide changes to the next slide during a slide show.</div>
        </div>

        <h3>2. Short Answer Questions (a to h)</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. What is a presentation program? List any two presentation programs.</div>
          <div class="qa-card-a"><strong>Answer:</strong> A presentation program is application software that lets you create, modify, manage, and display information in the form of slides.<br><em>Two Examples:</em> Microsoft PowerPoint and Apple Keynote.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. What is MS-PowerPoint?</div>
          <div class="qa-card-a"><strong>Answer:</strong> MS-PowerPoint is a powerful multimedia presentation program developed by Microsoft that allows users to create, edit, organize, and present slides in sequential order.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">c. Define presentation and slide.</div>
          <div class="qa-card-a"><strong>Answer:</strong>
          <ul>
            <li><strong>Presentation:</strong> A collection of slides arranged in sequential order to present information clearly.</li>
            <li><strong>Slide:</strong> A single page of a presentation showing brief topic information using text, pictures, audio, video, and animation.</li>
          </ul></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">d. What is Normal View? List its uses.</div>
          <div class="qa-card-a"><strong>Answer:</strong> Normal View (also called Slide View) is the main editing view in PowerPoint.<br><em>Uses:</em> View and edit active slides in the Slide Pane, browse slide thumbnails in the Slides Pane, and add speaker notes in the Notes Pane.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">e. What is Slide Sorter View? Write its uses.</div>
          <div class="qa-card-a"><strong>Answer:</strong> Slide Sorter View displays horizontal thumbnail previews of all slides in a presentation on a single screen.<br><em>Uses:</em> Quickly add, delete, or reorder slides by dragging and dropping them into new positions.</div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">f. List the difference between a Placeholder and a Textbox.</div>
          <div class="qa-card-a"><strong>Answer:</strong>
          <ul>
            <li><strong>Placeholder:</strong> A ready-made box with dotted lines built into the slide layout automatically for titles, body text, or media.</li>
            <li><strong>Textbox:</strong> A custom box manually drawn on the slide by the user to insert additional text anywhere.</li>
          </ul></div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">h. What is a transition?</div>
          <div class="qa-card-a"><strong>Answer:</strong> A transition is a special visual and audio effect used to introduce a slide as it moves to the next slide during a slide show (applied via the Transitions tab).</div>
        </div>

        <h3>3. Detailed Views &amp; Steps Questions</h3>

        <div class="qa-card">
          <div class="qa-card-q">a. Describe all the main Views available in MS-PowerPoint 2016.</div>
          <div class="qa-card-a">
            <div class="table-responsive">
              <table class="notes-table">
                <thead><tr><th>View Name</th><th>Description &amp; Purpose</th></tr></thead>
                <tbody>
                  <tr><td><strong>Normal View</strong></td><td>Main editing view split into Slides Pane (left thumbnails), Slide Pane (center editing area), and Notes Pane (bottom speaker notes).</td></tr>
                  <tr><td><strong>Outline View</strong></td><td>Displays only slide text as an outline; ideal for planning and storyboarding content.</td></tr>
                  <tr><td><strong>Slide Sorter View</strong></td><td>Displays all slide thumbnails side-by-side; ideal for rearranging, inserting, or deleting slides quickly.</td></tr>
                  <tr><td><strong>Notes Page View</strong></td><td>Displays Notes pane in full-page format for typing and reviewing speaker notes.</td></tr>
                  <tr><td><strong>Reading View</strong></td><td>Displays slides full-screen inside the window for quick reading/review without running a full show.</td></tr>
                  <tr><td><strong>Slide Show View</strong></td><td>Runs the presentation full-screen one slide after another for delivery to an audience.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="qa-card">
          <div class="qa-card-q">b. Write the steps to create a Photo Album in MS-PowerPoint.</div>
          <div class="qa-card-a">
            <ol>
              <li>Click <strong>Insert tab &rarr; Images group &rarr; Photo Album</strong>.</li>
              <li>In the Photo Album dialog box, click <strong>File/Disk</strong> under Insert picture from.</li>
              <li>Select photo files from your storage location and click <strong>Insert</strong>.</li>
              <li>Click the drop-down beside <strong>Picture Layout</strong> and select the number of pictures per slide.</li>
              <li>Click <strong>Create</strong>. PowerPoint automatically builds the photo album presentation.</li>
            </ol>
          </div>
        </div>

        <h3>4. Fill in the Blanks</h3>
        <p><strong>a.</strong> A <u>presentation</u> program displays presentation in the form of slides.</p>
        <p><strong>b.</strong> A <u>placeholder</u> is a box surrounded by dotted lines and is used for placing text, clipart, video, charts, etc.</p>
        <p><strong>c.</strong> The Normal View splits the working screen into <u>three</u> Panes (Slides Pane, Slide Pane, and Notes Pane).</p>
        <p><strong>d.</strong> The Slide View displays <u>an enlarged view of one slide at a time</u>.</p>
        <p><strong>e.</strong> <u>Animation</u> effects are special sound or visual effects which are added to the text or other graphic objects.</p>

        <h3>5. State Whether the Following Statements are True or False</h3>
        <div class="qa-card"><div class="qa-card-q">a. A presentation in MS-PowerPoint has many number of slides arranged in sequential order.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">b. A slide can be added or removed from a presentation.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">c. A new slide gets inserted at the beginning of the currently selected slide.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(A new slide is inserted right after the currently selected slide)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">d. The F5 key is used to start the slide show from the beginning slide.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">e. A placeholder is a box that is used for placing text, clipart, video, charts, etc.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>
        <div class="qa-card"><div class="qa-card-q">f. The Normal View splits the working screen into four panes.</div><div class="qa-card-a"><strong>FALSE</strong> <em>(Normal View splits the screen into three panes)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">g. The Slide pane shows thumbnails of the slides.</div><div class="qa-card-a"><strong>TRUE</strong> <em>(The Slides Pane on the left shows thumbnails)</em></div></div>
        <div class="qa-card"><div class="qa-card-q">h. A transition is a special effect that appears while transferring from one slide to another.</div><div class="qa-card-a"><strong>TRUE</strong></div></div>

        <h3>6. Quick Revision Questions (Class Discussion)</h3>
        <div class="qa-card"><div class="qa-card-q">Q1. What is the difference between a Slide and a Placeholder?</div><div class="qa-card-a"><strong>Answer:</strong> A slide is an entire presentation page, while a placeholder is a specific container box on a slide for holding text, images, or media.</div></div>
        <div class="qa-card"><div class="qa-card-q">Q2. Name three ways to load Microsoft PowerPoint on a computer.</div><div class="qa-card-a"><strong>Answer:</strong> 1) Run command <code>POWERPNT</code>, 2) Start menu shortcut under All Apps, 3) Opening an existing <code>.pptx</code> file.</div></div>
        <div class="qa-card"><div class="qa-card-q">Q3. Which view would you use to reorder slides by dragging them, and which view to see only their text?</div><div class="qa-card-a"><strong>Answer:</strong> Reorder slides: <strong>Slide Sorter View</strong>. View only text: <strong>Outline View</strong>.</div></div>
        <div class="qa-card"><div class="qa-card-q">Q4. List the four types of animation effects PowerPoint provides.</div><div class="qa-card-a"><strong>Answer:</strong> 1) Entrance, 2) Emphasis, 3) Exit, 4) Motion Paths.</div></div>
        <div class="qa-card"><div class="qa-card-q">Q5. What is the difference between a Transition and an Animation?</div><div class="qa-card-a"><strong>Answer:</strong> A transition animates the change between whole slides, whereas an animation animates specific objects inside a single slide.</div></div>
        <div class="qa-card"><div class="qa-card-q">Q6. Why might a teacher package a presentation before taking it to another computer?</div><div class="qa-card-a"><strong>Answer:</strong> Packaging ensures that all embedded fonts, audio/video clips, and slide assets travel together so the presentation plays perfectly on any other computer without missing media files.</div></div>
      `
    }
  ]
};

// 3. Update ONLY Class 8 Chapter 7 in currentNotes
const class8Chapters = currentNotes.class8.computerScience;
const ch7Index = class8Chapters.findIndex(ch => ch.chapterNumber === 7);

if (ch7Index !== -1) {
  class8Chapters[ch7Index] = ch7Data;
} else {
  class8Chapters.push(ch7Data);
}

// Sort Class 8 chapters by chapter number to maintain order
class8Chapters.sort((a, b) => a.chapterNumber - b.chapterNumber);

// 4. Construct full updated data object
const updatedNotesData = {
  class6: currentNotes.class6, // STRICTLY UNTOUCHED (18 chapters intact)
  class7: currentNotes.class7, // STRICTLY UNTOUCHED (22 chapters intact including Ch 9 & Ch 12)
  class8: currentNotes.class8, // ONLY Chapter 7 updated, all other 16 chapters intact (including Ch 6 Excel & Ch 13 HTML)
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
console.log('Successfully updated Class 8 Chapter 7 (MS-PowerPoint 2016) notes and exercises while preserving all other chapters!');

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
