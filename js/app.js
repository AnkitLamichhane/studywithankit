/**
 * STUDY WITH ANKIT - SINGLE PAGE APPLICATION (SPA) CONTROLLER
 * Domain: csnotes.ankitlamichhane.com.np
 * 
 * Handles SPA client-side routing, view switching, dynamic chapter rendering,
 * notes reading engine, TOC auto-generation, search modal, and dark mode.
 * Supports Class 6, Class 7, Class 8, Class 9, and Class 10.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initSearch();
  initScrollProgress();
  initBackToTop();
  
  // SPA Router listener
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Initial page load route handler
});

/* --------------------------------------------------------------------------
   1. Theme Toggle (Light/Dark Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('study_with_ankit_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('study_with_ankit_theme', newTheme);
      updateThemeIcons();
    });
  });

  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  
  themeToggleBtns.forEach(btn => {
    btn.innerHTML = isDark 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileMenu = document.querySelector('.mobile-nav-menu');

  if (!hamburgerBtn || !mobileMenu) return;

  function closeMenu() {
    mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
  }

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    if (mobileOverlay) mobileOverlay.classList.toggle('open');
  });

  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

  const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));
}

/* --------------------------------------------------------------------------
   3. SPA Client-Side Router
   -------------------------------------------------------------------------- */
function handleRoute() {
  const hash = window.location.hash || '#home';
  const [route, queryString] = hash.split('?');

  // Hide all SPA views
  const views = document.querySelectorAll('.spa-view');
  views.forEach(v => v.classList.remove('active-view'));

  // Highlight Nav Links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkHash = link.getAttribute('href');
    if (linkHash === route || (route === '#home' && linkHash === '#home')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Scroll to top on view change
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Route Dispatcher
  if (route === '#home' || route === '') {
    showView('view-home');
  } else if (route === '#class-6') {
    showView('view-class-6');
    renderClassChapters('class6', 'class-6-container');
  } else if (route === '#class-7') {
    showView('view-class-7');
    renderClassChapters('class7', 'class-7-container');
  } else if (route === '#class-8') {
    showView('view-class-8');
    renderClassChapters('class8', 'class-8-container');
  } else if (route === '#class-9') {
    showView('view-class-9');
    renderClassChapters('class9', 'class-9-container');
  } else if (route === '#class-10') {
    showView('view-class-10');
    renderClassChapters('class10', 'class-10-container');
  } else if (route === '#about') {
    showView('view-about');
  } else if (route === '#notes') {
    showView('view-notes');
    const params = new URLSearchParams(queryString);
    const noteId = params.get('id');
    renderNotesReader(noteId);
  } else {
    showView('view-home');
  }
}

function showView(viewId) {
  const targetView = document.getElementById(viewId);
  if (targetView) targetView.classList.add('active-view');
}

/* --------------------------------------------------------------------------
   4. Class Chapters Listing Renderer
   -------------------------------------------------------------------------- */
function renderClassChapters(classKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !notesData[classKey]) return;

  const chapters = notesData[classKey].computerScience || [];
  let html = '';

  if (chapters.length === 0) {
    html = `
      <div style="background: var(--surface); border: 1px dashed var(--border); border-radius: var(--radius); padding: 3rem 1.5rem; text-align: center; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📚</div>
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--text);">Notes for this class will be added soon.</p>
        <p style="font-size: 0.9rem; margin-top: 0.4rem;">Check back later or explore other available classes.</p>
      </div>
    `;
  } else {
    html = `<div class="chapters-grid">`;
    chapters.forEach(chapter => {
      const dateFormatted = formatDate(chapter.updated);
      html += `
        <a href="#notes?id=${chapter.id}" class="chapter-card">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span class="chapter-num">Chapter ${chapter.chapterNumber}</span>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 2px 6px; border-radius: 4px;">Comp. Sci.</span>
            </div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="class-card-desc">${chapter.summary || 'Click to read comprehensive chapter notes.'}</p>
          </div>
          <div class="chapter-card-footer">
            <span class="chapter-date">Updated: ${dateFormatted}</span>
            <span class="chapter-read-btn">Read Notes &rarr;</span>
          </div>
        </a>
      `;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

/* --------------------------------------------------------------------------
   5. Dynamic Notes Reader Engine
   -------------------------------------------------------------------------- */
function renderNotesReader(noteId) {
  const readerArea = document.getElementById('notes-reader-area');
  if (!readerArea) return;

  if (!noteId) {
    readerArea.innerHTML = `<div class="callout callout-remember"><h3>Note Not Found</h3><p>No note ID specified in URL.</p></div>`;
    return;
  }

  const found = findChapterById(noteId);
  if (!found) {
    readerArea.innerHTML = `
      <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 2.5rem; text-align: center;">
        <h2>Note Not Found</h2>
        <p style="margin: 1rem 0; color: var(--text-muted);">The requested chapter notes (ID: "${noteId}") could not be located.</p>
        <a href="#home" class="btn-secondary" style="display: inline-flex;">&larr; Return to Home</a>
      </div>
    `;
    return;
  }

  const { chapter, classKey, className, allChapters, chapterIndex } = found;

  // Set Dynamic Page Title
  document.title = `Chapter ${chapter.chapterNumber} - ${chapter.title} | ${className} | Study with Ankit`;

  // Build Breadcrumb
  const classHash = classKey === 'class6' ? 'class-6' : classKey === 'class7' ? 'class-7' : classKey === 'class8' ? 'class-8' : classKey === 'class9' ? 'class-9' : 'class-10';

  const breadcrumbHtml = `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="#home">Home</a>
      <span class="breadcrumb-sep">/</span>
      <a href="#${classHash}">${className}</a>
      <span class="breadcrumb-sep">/</span>
      <span>Computer Science</span>
      <span class="breadcrumb-sep">/</span>
      <span>Chapter ${chapter.chapterNumber}</span>
    </nav>
  `;

  // Build Header Box
  const headerHtml = `
    <header class="notes-header-box">
      <div class="notes-tag-bar">
        <span class="notes-class-subject">Computer Science &bull; ${className}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Last Updated: ${formatDate(chapter.updated)}</span>
      </div>
      <h1 class="notes-main-title">Chapter ${chapter.chapterNumber}: ${chapter.title}</h1>
      ${chapter.author ? `<p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem;">${chapter.author}</p>` : ''}
      
      <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border); flex-wrap: wrap;">
        <a href="#${classHash}" style="background: var(--background); border: 1px solid var(--border); padding: 0.45rem 0.9rem; border-radius: 6px; font-weight: 700; font-size: 0.88rem; color: var(--text);">
          &larr; Back to ${className}
        </a>
        <button onclick="window.print()" style="background: var(--primary); color: #ffffff; border: none; padding: 0.45rem 0.9rem; border-radius: 6px; font-weight: 700; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print Notes
        </button>
      </div>
    </header>
  `;

  // Build Table of Contents & Topics HTML
  let tocHtml = '';
  let topicsHtml = '';

  if (chapter.topics && chapter.topics.length > 0) {
    tocHtml = `
      <nav class="toc-box" aria-label="Table of Contents">
        <h2 class="toc-title">Table of Contents</h2>
        <ul class="toc-list">
    `;

    chapter.topics.forEach((topic, idx) => {
      const topicSlug = `topic-${idx + 1}-${slugify(topic.title)}`;
      const numStr = (idx + 1).toString().padStart(2, '0');

      tocHtml += `
        <li class="toc-item">
          <a href="#${topicSlug}" onclick="scrollToTopic(event, '${topicSlug}')"><strong>${numStr}.</strong> ${topic.title}</a>
        </li>
      `;

      topicsHtml += `
        <section id="${topicSlug}" class="topic-section">
          <h2>${topic.title}</h2>
          <div>${topic.content}</div>
        </section>
      `;
    });

    tocHtml += `</ul></nav>`;
  }

  // Prev / Next Chapter Navigation
  const prevCh = chapterIndex > 0 ? allChapters[chapterIndex - 1] : null;
  const nextCh = chapterIndex < allChapters.length - 1 ? allChapters[chapterIndex + 1] : null;

  const navFooterHtml = `
    <div style="display: flex; justify-content: space-between; margin-top: 3.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border); gap: 1rem; flex-wrap: wrap;">
      ${prevCh ? `
        <a href="#notes?id=${prevCh.id}" style="padding: 0.75rem 1.25rem; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); text-decoration: none; color: var(--text);">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">&larr; Previous Chapter</div>
          <div style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">Ch. ${prevCh.chapterNumber}: ${prevCh.title}</div>
        </a>
      ` : `<div></div>`}

      ${nextCh ? `
        <a href="#notes?id=${nextCh.id}" style="padding: 0.75rem 1.25rem; border: 1px solid var(--border); border-radius: var(--radius); background: var(--surface); text-decoration: none; color: var(--text); text-align: right;">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Next Chapter &rarr;</div>
          <div style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">Ch. ${nextCh.chapterNumber}: ${nextCh.title}</div>
        </a>
      ` : `<div></div>`}
    </div>
  `;

  readerArea.innerHTML = breadcrumbHtml + headerHtml + tocHtml + `<article class="notes-body">${topicsHtml}</article>` + navFooterHtml;
}

/* Scroll To Topic Smooth Handler */
function scrollToTopic(e, topicSlug) {
  e.preventDefault();
  const target = document.getElementById(topicSlug);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Find Chapter by ID */
function findChapterById(id) {
  for (const classKey in notesData) {
    const chapters = notesData[classKey].computerScience || [];
    const index = chapters.findIndex(c => c.id === id);

    if (index !== -1) {
      return {
        chapter: chapters[index],
        classKey,
        className: classKey === 'class6' ? 'Class 6' : classKey === 'class7' ? 'Class 7' : classKey === 'class8' ? 'Class 8' : classKey === 'class9' ? 'Class 9' : 'Class 10',
        allChapters: chapters,
        chapterIndex: index
      };
    }
  }
  return null;
}

function formatDate(dateStr) {
  if (!dateStr) return 'September 3, 2026';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/* --------------------------------------------------------------------------
   6. Global Real-time Search Engine
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');

  if (!searchModal || !searchInput) return;

  function openSearch() {
    searchModal.classList.add('open');
    searchInput.focus();
    searchInput.value = '';
    searchResults.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Type a keyword, topic, or chapter name...</div>`;
  }

  function closeSearch() {
    searchModal.classList.remove('open');
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('open')) closeSearch();
    if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !searchModal.classList.contains('open')) {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearch();
      }
    }
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query || query.length < 2) {
      searchResults.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Type at least 2 characters to search...</div>`;
      return;
    }

    const matches = performSearch(query);
    renderSearchResults(matches, query, searchResults, closeSearch);
  });
}

function performSearch(query) {
  const results = [];

  for (const classKey in notesData) {
    const className = classKey === 'class6' ? 'Class 6' : classKey === 'class7' ? 'Class 7' : classKey === 'class8' ? 'Class 8' : classKey === 'class9' ? 'Class 9' : 'Class 10';
    const chapters = notesData[classKey].computerScience || [];

    chapters.forEach(ch => {
      let score = 0;
      let snippet = '';

      if (`Chapter ${ch.chapterNumber}: ${ch.title}`.toLowerCase().includes(query)) score += 10;
      if ((ch.summary || '').toLowerCase().includes(query)) score += 5;

      if (ch.topics) {
        ch.topics.forEach(tp => {
          if (tp.title.toLowerCase().includes(query)) {
            score += 8;
            if (!snippet) snippet = tp.title;
          }
          const clean = stripHtml(tp.content).toLowerCase();
          if (clean.includes(query)) {
            score += 3;
            if (!snippet) snippet = getSnippet(stripHtml(tp.content), query);
          }
        });
      }

      if (score > 0) {
        results.push({
          id: ch.id,
          chapterNumber: ch.chapterNumber,
          title: ch.title,
          className,
          snippet: snippet || ch.summary || 'Matching chapter content.',
          score
        });
      }
    });
  }

  results.sort((a, b) => b.score - a.score);
  return results;
}

function renderSearchResults(results, query, container, closeSearchFn) {
  if (results.length === 0) {
    container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">No matching notes found for "<strong>${escapeHtml(query)}</strong>".</div>`;
    return;
  }

  let html = '';
  results.slice(0, 10).forEach(res => {
    html += `
      <a href="#notes?id=${res.id}" class="search-result-item" onclick="document.getElementById('search-modal').classList.remove('open')">
        <div class="search-res-meta">${res.className} &bull; Computer Science</div>
        <div class="search-res-title">Chapter ${res.chapterNumber}: ${escapeHtml(res.title)}</div>
        <div class="search-res-snippet">${res.snippet}</div>
      </a>
    `;
  });

  container.innerHTML = html;
}

function getSnippet(text, query) {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text.substring(0, 110) + '...';
  const start = Math.max(0, index - 35);
  const end = Math.min(text.length, index + 65);
  return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
}

function stripHtml(html) {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

/* --------------------------------------------------------------------------
   7. Scroll Progress & Back-To-Top
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
