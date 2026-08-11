// ── KB Navigation, Sidebar & Footer ──
// Include in every page:
//   <div id="kb-nav"></div>
//   ...content...
//   <div id="kb-footer"></div>
//   <script src="kb-nav.js"></script>        (root)
//   <script src="../kb-nav.js"></script>     (article pages)

(function () {

  // Detect if we're at root or in a subfolder
  const isRoot = !document.querySelector('.article-page');
  const base = isRoot ? '' : '../';

  /* ── 1. Top Nav ── */
  const nav = document.getElementById('kb-nav');
  if (nav) {
    if (isRoot) {
      // Homepage: transparent nav, white logo, blends with hero
      nav.outerHTML = `
      <nav class="nav nav-transparent">
        <a href="index.html" class="nav-brand">
          <img src="kb-logo-white.png" alt="BrainsMingle Help" class="nav-logo">
        </a>
        <div class="nav-spacer"></div>
        <a href="https://brainsmingle.com/" target="_blank" rel="noopener noreferrer" class="nav-bm-link" aria-label="Go to BrainsMingle">
          <img src="icon-white.png" alt="BrainsMingle" class="nav-bm-icon">
        </a>
      </nav>`;
    } else {
      // Article pages: white nav, purple logo, search bar, BM icon
      nav.outerHTML = `
      <nav class="nav">
        <a href="${base}index.html" class="nav-brand">
          <img src="${base}kb-logo-purple.png" alt="BrainsMingle Help" class="nav-logo">
        </a>
        <div class="nav-search-wrap" id="nav-search-wrap">
          <i class="ti ti-search"></i>
          <input type="text" class="nav-search-input" id="nav-search-input" placeholder="Search articles..." autocomplete="off">
          <div class="nav-search-results" id="nav-search-results"></div>
        </div>
        <div class="nav-spacer"></div>
        <a href="https://brainsmingle.com/" target="_blank" rel="noopener noreferrer" class="nav-bm-link" aria-label="Go to BrainsMingle">
          <img src="${base}icon-purple.png" alt="BrainsMingle" class="nav-bm-icon">
        </a>
        <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle navigation">
          <i class="ti ti-menu-2"></i>
        </button>
      </nav>`;
    }
  }

  /* ── 2. Footer ── */
  const footer = document.getElementById('kb-footer');
  if (footer) {
    footer.outerHTML = `
    <footer class="footer">
      © 2026 BrainsMingle. All rights reserved.
    </footer>`;
  }

  /* ── 3. Sidebar (only on article pages) ── */
  const articlePage = document.querySelector('.article-page');
  if (!articlePage || typeof KB_SECTIONS === 'undefined') return;

  // Detect current article path (last two segments: folder/file.html)
  const pathParts = window.location.pathname.split('/');
  const currentPath = pathParts.slice(-2).join('/');

  // Find which section the current article belongs to
  let currentSectionId = null;
  KB_SECTIONS.forEach(section => {
    section.groups.forEach(group => {
      group.articles.forEach(article => {
        if (article.url === currentPath) {
          currentSectionId = section.id;
        }
      });
    });
  });

  // Build sidebar HTML
  let sidebarHTML = '<aside class="kb-sidebar" id="kb-sidebar">\n';
  sidebarHTML += '<div class="sidebar-inner">\n';
  sidebarHTML += '<button class="sidebar-collapse-btn" id="sidebar-collapse" aria-label="Collapse sidebar"><i class="ti ti-arrow-bar-left"></i></button>\n';

  KB_SECTIONS.forEach(section => {
    const isCurrentSection = section.id === currentSectionId;
    const openClass = isCurrentSection ? ' open' : '';

    sidebarHTML += `<div class="sidebar-section${openClass}" data-section="${section.id}">`;
    sidebarHTML += `<button class="sidebar-section-toggle">`;
    sidebarHTML += `<i class="ti ${section.icon} sidebar-section-icon"></i>`;
    sidebarHTML += `<span>${section.title}</span>`;
    sidebarHTML += `<i class="ti ti-chevron-right sidebar-chevron"></i>`;
    sidebarHTML += `</button>`;
    sidebarHTML += `<ul class="sidebar-articles">`;

    section.groups.forEach(group => {
      group.articles.forEach(article => {
        const isActive = article.url === currentPath;
        const activeClass = isActive ? ' active' : '';
        sidebarHTML += `<li class="sidebar-article${activeClass}">`;
        sidebarHTML += `<a href="${base}${article.url}">${article.title}</a>`;
        sidebarHTML += `</li>`;
      });
    });

    sidebarHTML += `</ul></div>`;
  });

  sidebarHTML += '</div>\n</aside>';

  // Wrap article-page + sidebar in a layout container
  const layout = document.createElement('div');
  layout.className = 'kb-layout';
  articlePage.parentNode.insertBefore(layout, articlePage);
  layout.innerHTML = sidebarHTML;
  layout.appendChild(articlePage);

  // Overlay for mobile
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  document.body.appendChild(overlay);

  // Expand button (visible only when sidebar is collapsed)
  const expandBtn = document.createElement('button');
  expandBtn.className = 'sidebar-expand-btn';
  expandBtn.id = 'sidebar-expand';
  expandBtn.setAttribute('aria-label', 'Expand sidebar');
  expandBtn.innerHTML = '<i class="ti ti-menu-2"></i>';
  layout.insertBefore(expandBtn, layout.firstChild);

  /* ── 4. Sidebar interactions ── */

  // Toggle sections
  layout.querySelectorAll('.sidebar-section-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.sidebar-section');
      section.classList.toggle('open');
    });
  });

  // Mobile toggle (nav hamburger)
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('kb-sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('active');
      document.body.classList.toggle('sidebar-open');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    });
  }

  // Desktop collapse / expand
  const collapseBtn = document.getElementById('sidebar-collapse');
  const expandBtnEl = document.getElementById('sidebar-expand');

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      layout.classList.add('sidebar-collapsed');
    });
  }
  if (expandBtnEl) {
    expandBtnEl.addEventListener('click', () => {
      layout.classList.remove('sidebar-collapsed');
    });
  }

  // Scroll active article into view in sidebar
  const activeItem = sidebar ? sidebar.querySelector('.sidebar-article.active') : null;
  if (activeItem) {
    setTimeout(() => {
      activeItem.scrollIntoView({ block: 'center', behavior: 'instant' });
    }, 50);
  }

  /* ── 5. Nav Search (article pages only) ── */
  const navSearchInput = document.getElementById('nav-search-input');
  const navSearchResults = document.getElementById('nav-search-results');
  if (!navSearchInput || typeof KB_SECTIONS === 'undefined') return;

  // Build search index
  const navSearchIndex = [];
  KB_SECTIONS.forEach(section => {
    section.groups.forEach(group => {
      group.articles.forEach(article => {
        const keywords = (typeof KB_KEYWORDS !== 'undefined' && KB_KEYWORDS[article.url]) || [];
        navSearchIndex.push({
          title: article.title,
          url: base + article.url,
          section: section.title,
          icon: section.icon,
          keywords: keywords.join(' ').toLowerCase()
        });
      });
    });
  });

  navSearchInput.addEventListener('input', () => {
    const query = navSearchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      navSearchResults.classList.remove('active');
      return;
    }

    const matches = navSearchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.section.toLowerCase().includes(query) ||
      item.keywords.includes(query)
    ).slice(0, 6);

    if (matches.length === 0) {
      navSearchResults.innerHTML = `<div class="nav-search-empty">No results for "${navSearchInput.value.trim()}"</div>`;
    } else {
      navSearchResults.innerHTML = matches.map(m => `
        <a class="nav-search-item" href="${m.url}">
          <i class="ti ${m.icon}"></i>
          <div>
            <div class="nav-search-title">${m.title}</div>
            <div class="nav-search-section">${m.section}</div>
          </div>
        </a>
      `).join('');
    }
    navSearchResults.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search-wrap')) {
      navSearchResults.classList.remove('active');
    }
  });
})();
