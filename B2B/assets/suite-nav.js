/* ============================================
   BrainsMingle Suite — Shared Nav, Footer & Theme
   ============================================ */
(function () {
  'use strict';

  /* ---- Depth detection ---- */
  var isMain = window.location.pathname.endsWith('/suite.html') || window.location.pathname === 'suite.html';
  var prefix = isMain ? 'suite/' : '';

  /* ---- Theme ---- */
  var THEME_KEY = 'bm-suite-theme';

  function getTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ---- Icons — single-line strings, no line breaks ---- */
  var SVG = {
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>',
    sun:  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
  };

/* ---- Chevron icon ---- */
  var SVG_CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  /* ---- Mega-menu data ---- */
var MENU_SOLUTIONS = [
    { key: 'liveSession',      title: 'Live Sessions',           desc: 'HD streaming, panels, and workshops',    href: 'live-sessions.html',   color: 'purple' },
    { key: 'speedNetworking',  title: 'Speed Networking',        desc: 'Automated matchmaking in timed rounds',  href: 'networking.html',      color: 'amber' },
    { key: 'community',        title: 'Communities',             desc: 'Channels, roles, and member engagement', href: 'community.html',       color: 'pink' },
    { key: 'course',          title: 'Courses & LMS',           desc: 'Structured programs and certifications', href: 'courses.html',         color: 'cyan' },
    { key: 'consultation',     title: 'Consultations & Booking', desc: 'Expert booking, calls, and payments',    href: 'consultations.html',   color: 'purple' },
    { key: 'payment',         title: 'Payments & Earnings',     desc: 'Memberships, payouts, and coupons',      href: 'payments.html',        color: 'amber' },
    { key: 'form',            title: 'Forms & Registration',    desc: 'Custom forms with response tracking',    href: 'forms.html',           color: 'pink' },
    { key: 'event', title: 'Event Management', desc: 'Sponsorship, ticketing, registration, and attendance', href: 'events.html', color: 'cyan' },
    { key: 'branding',         title: 'Branding & Localization', desc: 'Your logo, domain, and language',        href: 'branding.html',        color: 'purple' },
    { key: 'analytics',        title: 'Analytics & Admin',       desc: 'Dashboards, users, and bulk emails',     href: 'analytics.html',       color: 'cyan' }
  ];

var MENU_INDUSTRIES = [
    { key: 'startup',     title: 'Startup Suite',     desc: 'Accelerators and innovation programs',  href: 'startup-suite.html',       color: 'purple' },
    { key: 'campus',      title: 'Campus Suite',      desc: 'Universities and alumni networks',      href: 'campus-suite.html',        color: 'cyan' },
    { key: 'mic',     title: 'Creator Suite',     desc: 'Content creators and online educators', href: 'creator-suite.html',       color: 'pink' },
    { key: 'form',     title: 'Program Suite',     desc: 'NGOs, foundations, and funded programs', href: 'program-suite.html',       color: 'amber' },
    { key: 'corporate',   title: 'Workplace Suite',   desc: 'Workplace learning and team collaboration',  href: 'workplace-suite.html',     color: 'purple' },
    { key: 'course',   title: 'Training Suite',     desc: 'Training companies and coaches',        href: 'training-suite.html',       color: 'cyan' },
    { key: 'event',title: 'Event Suite',      desc: 'Event organizers and conference hosts',        href: 'event-suite.html',        color: 'pink' },
    { key: 'community', title: 'Community Suite',  desc: 'Associations, chapters, and member networks',   href: 'community-suite.html',  color: 'amber' }
  ];

  function getIcon(key) {
    return (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS[key]) ? SUITE_ICONS[key] : '';
  }

  function buildMegaPanel(items, label) {
    var half = Math.ceil(items.length / 2);
    var html = '<div class="suite-nav__mega" id="mega-' + label + '">';
    html += '<div class="suite-nav__mega-grid">';
    html += '<div class="suite-nav__mega-col">';
    for (var i = 0; i < items.length; i++) {
      if (i === half) html += '</div><div class="suite-nav__mega-col">';
      var item = items[i];
      html +=
        '<a href="' + prefix + item.href + '" class="suite-nav__mega-item">' +
          '<span class="suite-nav__mega-icon icon--' + (item.color || 'purple') + '">' + getIcon(item.key) + '</span>' +
          '<span class="suite-nav__mega-text">' +
            '<span class="suite-nav__mega-title">' + item.title + '</span>' +
            '<span class="suite-nav__mega-desc">' + item.desc + '</span>' +
          '</span>' +
        '</a>';
    }
    html += '</div></div></div>';
    return html;
  }

  /* ---- Nav ---- */
  function buildNav() {
    var nav = document.getElementById('suite-nav');
    if (!nav) return;

    nav.innerHTML =
      '<div class="suite-nav__inner">' +
        '<a href="' + (isMain ? 'suite.html' : '../suite.html') + '" class="suite-nav__logo">BrainsMingle <span>Suite</span></a>' +
        '<ul class="suite-nav__links" id="nav-links">' +
          '<li class="suite-nav__dropdown" id="dd-industries">' +
            '<a href="' + (isMain ? 'suite.html#verticals' : '../suite.html#verticals') + '" class="suite-nav__dd-trigger">By Industry ' + SVG_CHEVRON + '</a>' +
            buildMegaPanel(MENU_INDUSTRIES, 'industries') +
          '</li>' +
          '<li class="suite-nav__dropdown" id="dd-solutions">' +
            '<a href="' + (isMain ? 'suite.html#modules' : '../suite.html#modules') + '" class="suite-nav__dd-trigger">Solutions ' + SVG_CHEVRON + '</a>' +
            buildMegaPanel(MENU_SOLUTIONS, 'solutions') +
          '</li>' +
          '<li><a href="' + prefix + 'capabilities.html">Capabilities</a></li>' +
          '<li><a href="' + prefix + 'partners.html">Partner Program</a></li>' +
        '</ul>' +
        '<div class="suite-nav__right">' +
          '<button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">' +
            '<span class="icon-moon">' + SVG.moon + '</span>' +
            '<span class="icon-sun">' + SVG.sun + '</span>' +
          '</button>' +
          '<div class="suite-nav__cta"><a href="#book-demo" class="btn btn--primary">Book a Demo</a></div>' +
        '</div>' +
        '<button class="suite-nav__toggle" id="nav-toggle" aria-label="Menu">' + SVG.menu + '</button>' +
      '</div>';

    /* Mobile nav toggle */
    var toggle = document.getElementById('nav-toggle');
    var links  = document.getElementById('nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
      });
    }

    /* Dropdown: desktop hover handled by CSS, mobile click toggle */
    var dropdowns = document.querySelectorAll('.suite-nav__dropdown');
    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector('.suite-nav__dd-trigger');
      if (trigger) {
        trigger.addEventListener('click', function (e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dd.classList.toggle('is-open');
            /* close sibling */
            dropdowns.forEach(function (other) {
              if (other !== dd) other.classList.remove('is-open');
            });
          }
        });
      }
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.suite-nav__dropdown')) {
        dropdowns.forEach(function (dd) { dd.classList.remove('is-open'); });
      }
    });

    /* Theme toggle */
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }
  }

  /* ---- Footer ---- */
  function buildFooter() {
    var footer = document.getElementById('suite-footer');
    if (!footer) return;

    /* Social icons */
    var socialLinkedIn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
     var socialFacebook = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
    var socialInstagram = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>';
    var socialX = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7.07 8.51L4 20h2.18l5.71-6.06L16.73 20H21l-7.38-8.88L20.45 4H18.3l-5.36 5.68L8.27 4z"/></svg>';
    var socialYouTube = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>';
    
   

    /* Solutions links (first 6) */
    var solLinks = '';
    for (var i = 0; i < Math.min(MENU_SOLUTIONS.length, 6); i++) {
      solLinks += '<a href="' + prefix + MENU_SOLUTIONS[i].href + '">' + MENU_SOLUTIONS[i].title + '</a>';
    }

    /* Industry links (first 6) */
    var indLinks = '';
    for (var j = 0; j < Math.min(MENU_INDUSTRIES.length, 6); j++) {
      indLinks += '<a href="' + prefix + MENU_INDUSTRIES[j].href + '">' + MENU_INDUSTRIES[j].title + '</a>';
    }

    footer.innerHTML =
      '<div class="suite-footer__inner">' +

        /* Grid */
        '<div class="suite-footer__grid">' +

          /* Brand column */
          '<div>' +
            '<div class="suite-footer__brand-name">BrainsMingle <span>Suite</span></div>' +
            '<p class="suite-footer__tagline">Your configured professional ecosystem. One platform, your brand, every engagement tool built in.</p>' +
            '<div class="suite-footer__socials">' +
              '<a href="https://linkedin.com/company/brainsmingle" target="_blank" rel="noopener" class="suite-footer__social" aria-label="LinkedIn">' + socialLinkedIn + '</a>' +
              '<a href="https://facebook.com/brainsmingle" target="_blank" rel="noopener" class="suite-footer__social" aria-label="Facebook">' + socialFacebook + '</a>' +
              '<a href="https://instagram.com/brainsmingle" target="_blank" rel="noopener" class="suite-footer__social" aria-label="Instagram">' + socialInstagram + '</a>' +
              '<a href="https://x.com/brainsmingle" target="_blank" rel="noopener" class="suite-footer__social" aria-label="X">' + socialX + '</a>' +
              '<a href="https://youtube.com/@brainsmingle" target="_blank" rel="noopener" class="suite-footer__social" aria-label="YouTube">' + socialYouTube + '</a>' +
            '</div>' +
          '</div>' +

          /* Solutions column */
          '<div>' +
            '<div class="suite-footer__col-title">Solutions</div>' +
            '<div class="suite-footer__col-links">' + solLinks + '</div>' +
          '</div>' +

          /* By Industry column */
          '<div>' +
            '<div class="suite-footer__col-title">By Industry</div>' +
            '<div class="suite-footer__col-links">' + indLinks + '</div>' +
          '</div>' +

          /* Product column */
          '<div>' +
            '<div class="suite-footer__col-title">Product</div>' +
            '<div class="suite-footer__col-links">' +
              '<a href="' + prefix + 'capabilities.html">Capabilities</a>' +
              '<a href="' + prefix + 'partners.html">Partner Program</a>' +
              '<a href="#book-demo">Book a Demo</a>' +
            '</div>' +
          '</div>' +

        '</div>' +

        /* Bottom bar */
        '<div class="suite-footer__bottom">' +
          '<p class="suite-footer__copy">&copy; ' + new Date().getFullYear() + ' BrainsMingle. All rights reserved.</p>' +
          '<a href="mailto:suite@brainsmingle.com" class="suite-footer__email">suite@brainsmingle.com</a>' +
        '</div>' +

      '</div>';
  }

  /* ---- Mobile CTA ---- */
  function buildMobileCTA() {
    var bar = document.getElementById('mobile-cta');
    if (!bar) return;
    bar.innerHTML = '<a href="#book-demo" class="btn btn--primary btn--lg">Book a Demo</a>';
  }

  /* ---- CTA block ---- */
  function buildCTA() {
    var cta = document.getElementById('book-demo');
    if (!cta) return;
    var headline = cta.getAttribute('data-headline') || 'Ready to deploy your Suite?';
    var sub = cta.getAttribute('data-sub') || "Tell us what you're building. We'll show you how Suite brings it together.";
    cta.className = 'cta-block';
    cta.innerHTML =
      '<div class="glow" style="background:var(--purple);top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.07;"></div>' +
      '<div class="container" style="position:relative;z-index:1;">' +
        '<h2 class="cta-block__headline">' + headline + '</h2>' +
        '<p class="cta-block__sub">' + sub + '</p>' +
        '<a href="#" class="btn btn--primary btn--lg">Book a Demo</a>' +
        '<p class="cta-block__email">Or reach us at <a href="mailto:suite@brainsmingle.com">suite@brainsmingle.com</a></p>' +
      '</div>';
  }
  /* ---- Modules grid ---- */
function buildModules() {
    var grid = document.getElementById('modules-grid');
    if (!grid) return;

    var engage = MENU_SOLUTIONS.slice(0, 5);
    var manage = MENU_SOLUTIONS.slice(5);

    function buildGroup(label, color, items) {
      var h = '<div class="cap-group">' +
        '<div class="cap-group__label cap-group__label--' + color + '">' +
        '<div class="cap-group__line cap-group__line--' + color + '"></div>' +
        '<span>' + label + '</span>' +
        '</div>' +
        '<div class="cap-grid">';
      items.forEach(function (item) {
        h +=
          '<a href="' + prefix + item.href + '" class="cap-item">' +
            '<div class="cap-item__icon" style="background:var(--' + item.color + '-dim);">' +
              '<span class="icon icon--' + item.color + '">' + getIcon(item.key) + '</span>' +
            '</div>' +
            '<div class="cap-item__title">' + item.title + '</div>' +
            '<div class="cap-item__desc">' + item.desc + '</div>' +
          '</a>';
      });
      h += '</div></div>';
      return h;
    }

    grid.innerHTML =
      buildGroup('Engage your audience', 'purple', engage) +
      buildGroup('Manage & grow', 'cyan', manage);

    var link = document.getElementById('modules-link');
    if (link) link.setAttribute('href', prefix + 'capabilities.html');
  }
  
  /* ---- Verticals grid ---- */
  function buildVerticals() {
    var grid = document.getElementById('verticals-grid');
    if (!grid) return;
    var html = '';
    MENU_INDUSTRIES.forEach(function (item) {
      html +=
        '<a href="' + prefix + item.href + '" class="content-card content-card--action">' +
          '<div class="content-card__icon">' +
            '<span class="icon icon--' + item.color + '">' + getIcon(item.key) + '</span>' +
          '</div>' +
          '<div class="content-card__title">' + item.title + '</div>' +
          '<div class="content-card__desc">' + item.desc + '</div>' +
          '<span class="content-card__more">Learn more ' +
            '<span class="content-card__more-arrow">' + getIcon('arrowRightSm') + '</span>' +
          '</span>' +
        '</a>';
    });
    grid.innerHTML = html;
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());
    buildNav();
    buildFooter();
    buildMobileCTA();
    buildModules();
    buildVerticals();
    buildCTA();
  });
})();
