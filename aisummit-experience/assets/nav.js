/* ============================================================
   BrainsMingle top app nav — shared renderer
   Usage (auto):
     <div id="bm-nav" data-active="communities"
          data-user="Karim Nasser" data-initials="KN"
          data-assets="../../images/"></div>
   Usage (manual):
     BMNav.render(document.querySelector('#bm-nav'), { active:'home' });
     BMNav.setActive('messages');
   ============================================================ */
(function () {
  // resolve <root>/images/ from this script's own URL (…/nav/nav.js -> …/images/)
  var SELF = document.currentScript && document.currentScript.src;
  var ASSET_BASE = SELF ? new URL('../images/', SELF).href : '../../images/';
  var PAGE_BASE  = SELF ? new URL('../pages/', SELF).href  : '../pages/';
  var I = {
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-6h5v6"/></svg>',
    consultations:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    professionals:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6S13.9 16 14.5 19"/><path d="M16 5.5a3 3 0 0 1 0 5.7"/><path d="M17 14.4c2 .5 3.4 1.9 3.9 4.1"/></svg>',
    communities:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 3 7.5 12 12l9-4.5Z"/><path d="M4.5 11 12 14.6 19.5 11"/><path d="M4.5 15 12 18.6 19.5 15"/></svg>',
    messages:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H8l-4 3.5Z"/></svg>',
    bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
    chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg>',
    plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>',
    bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="6" width="12" height="12" rx="2.4"/><path d="m15 10 6-3.2v10.4L15 14z"/></svg>',
    speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="7.5" cy="8" r="2.6"/><circle cx="16.5" cy="8" r="2.6"/><path d="M3.5 18c.4-2.4 2-3.6 4-3.6s3.6 1.2 4 3.6"/><path d="M12.5 18c.4-2.4 2-3.6 4-3.6s3.6 1.2 4 3.6"/></svg>',
    sun:'<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9 6.3 6.3M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
    moon:'<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/></svg>',
    globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>',
    burger:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c.7-3.4 3.4-5 7-5s6.3 1.6 7 5"/></svg>',
    settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>',
    logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8 6 12l4 4"/><path d="M6 12h9"/></svg>'
  };

  var ITEMS = [
    { id:'home',          label:'Home',          href:'home/home.html' },
    { id:'consultations', label:'Consultations', href:'consultations/consultations.html' },
    { id:'professionals', label:'Professionals', href:'#' },
    { id:'communities',   label:'Communities',   href:'communities/communities.html' },
    { id:'messages',      label:'Messages',      href:'profile/messages.html' }
  ];

  function esc(s){ return String(s == null ? '' : s).replace(/"/g,'&quot;'); }

  function build(o) {
    var assets = o.assets || ASSET_BASE;
    var links = ITEMS.map(function (it) {
      var href = (o.links && o.links[it.id]) || o[it.id + 'Href'] || it.href;
      if (href && href !== '#' && !/^([a-z]+:|\/|#)/i.test(href)) href = PAGE_BASE + href;
      return '<a class="tn-link' + (o.active === it.id ? ' active' : '') +
        '" data-id="' + it.id + '" href="' + esc(href) + '">' + I[it.id] + it.label + '</a>';
    }).join('');

    return '' +
    '<nav class="tn"><div class="tn-inner">' +
      '<button class="tn-burger" aria-label="Menu" data-bm="burger">' + I.burger + '</button>' +
      '<a class="tn-logo" href="' + esc(o.homeHref || '#') + '" aria-label="BrainsMingle">' +
        '<img class="logo-light" src="' + assets + 'logo-purple.png" alt="BrainsMingle">' +
        '<img class="logo-dark" src="' + assets + 'logo-white.png" alt="BrainsMingle">' +
      '</a>' +
      '<div class="tn-links">' + links + '</div>' +
      '<div class="tn-right">' +
        '<div class="tn-bell">' + I.bell + (o.notifications ? '<span class="tn-badge">' + o.notifications + '</span>' : '') + '</div>' +
        '<div class="tn-user">' +
          '<button class="tn-user-btn" data-bm="user">' +
            '<span class="tn-user-ava">' + esc(o.initials || 'JB') + '</span>' +
            '<span class="nm">' + esc(o.user || 'Jamie Bennett') + '</span>' + I.chev +
          '</button>' +
          '<div class="tn-menu" data-bm="menu" hidden>' +
            '<a class="tn-menu-row" href="' + esc(o.profileHref || (PAGE_BASE + 'profile/profile.html')) + '">' + I.user + 'View Profile</a>' +
            '<a class="tn-menu-row" href="' + esc(o.settingsHref || (PAGE_BASE + 'profile/settings.html')) + '">' + I.settings + 'Settings</a>' +
            '<div class="tn-menu-div"></div>' +
            '<a class="tn-menu-row danger" href="' + esc(o.logoutHref || '#') + '">' + I.logout + 'Logout</a>' +
          '</div>' +
        '</div>' +
        '<div class="tn-create-wrap">' +
          '<button class="tn-create" data-bm="create">' + I.plus + '<span>Create Room</span>' + I.chev + '</button>' +
          '<div class="tn-cmenu" data-bm="cmenu" hidden>' +
            '<a class="tn-crow" href="' + esc(PAGE_BASE + 'live/instant.html') + '" data-room="instant">' +
              '<span class="tn-cico ic-bolt">' + I.bolt + '</span>' +
              '<span class="tn-ctext"><span class="tn-ctitle">Instant Video Call</span>' +
                '<span class="tn-cdesc">Create and start a video call immediately \u2014 get a shareable link instantly</span></span>' +
            '</a>' +
            '<a class="tn-crow" href="#" data-room="scheduled">' +
              '<span class="tn-cico ic-video">' + I.video + '</span>' +
              '<span class="tn-ctext"><span class="tn-ctitle">Video Room</span>' +
                '<span class="tn-cdesc">Schedule a paid/free video session with custom date, time, and advanced features</span></span>' +
            '</a>' +
            '<a class="tn-crow" href="#" data-room="speed">' +
              '<span class="tn-cico ic-speed">' + I.speed + '</span>' +
              '<span class="tn-ctext"><span class="tn-ctitle">Speed-Networking Room</span>' +
                '<span class="tn-cdesc">Automated 1:1 speed networking \u2014 participants automatically rotate between each other</span></span>' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="tn-div"></div>' +
        '<div class="tn-utils">' +
          '<button class="tn-iconbtn" data-bm="theme" aria-label="Toggle theme">' + I.sun + I.moon + '</button>' +
          '<div class="tn-lang">' + I.globe + '<span>EN</span></div>' +
        '</div>' +
      '</div>' +
    '</div></nav>';
  }

  function wire(root) {
    var menu = root.querySelector('[data-bm="menu"]');
    var userBtn = root.querySelector('[data-bm="user"]');
    var cmenu = root.querySelector('[data-bm="cmenu"]');
    var createBtn = root.querySelector('[data-bm="create"]');
    var links = root.querySelector('.tn-links');

    links && links.addEventListener('click', function (e) {
      var a = e.target.closest('.tn-link');
      if (!a) return;
      if (a.getAttribute('href') === '#') e.preventDefault();
      links.querySelectorAll('.tn-link').forEach(function (l) {
        l.classList.toggle('active', l === a);
      });
      links.classList.remove('open');
    });

    userBtn && userBtn.addEventListener('click', function (e) {
      e.stopPropagation(); if (cmenu) cmenu.hidden = true; menu.hidden = !menu.hidden;
    });
    createBtn && createBtn.addEventListener('click', function (e) {
      e.stopPropagation(); if (menu) menu.hidden = true; cmenu.hidden = !cmenu.hidden;
    });
    document.addEventListener('click', function () { if (menu) menu.hidden = true; if (cmenu) cmenu.hidden = true; });

    var burger = root.querySelector('[data-bm="burger"]');
    burger && burger.addEventListener('click', function (e) {
      e.stopPropagation(); links.classList.toggle('open');
    });

    var themeBtn = root.querySelector('[data-bm="theme"]');
    themeBtn && themeBtn.addEventListener('click', function () {
      if (typeof window.toggleTheme === 'function') { window.toggleTheme(); return; }
      var d = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', d ? 'light' : 'dark');
      try { localStorage.setItem('bm-theme', d ? 'light' : 'dark'); } catch (e) {}
    });
  }

  function readData(el) {
    var d = el.dataset;
    return {
      active: d.active, user: d.user, initials: d.initials, assets: d.assets,
      notifications: d.notifications, homeHref: d.homeHref, messagesHref: d.messagesHref, profileHref: d.profileHref, settingsHref: d.settingsHref
    };
  }

  var BMNav = {
    render: function (el, opts) {
      el = typeof el === 'string' ? document.querySelector(el) : el;
      if (!el) return;
      var o = Object.assign({ notifications: 1 }, readData(el), opts || {});
      el.innerHTML = build(o);
      wire(el);
      el._bmActive = o.active;
      return el;
    },
    setActive: function (id, el) {
      el = el || document.getElementById('bm-nav');
      if (!el) return;
      el.querySelectorAll('.tn-link').forEach(function (a) {
        a.classList.toggle('active', a.dataset.id === id);
      });
    }
  };
  window.BMNav = BMNav;

  document.addEventListener('DOMContentLoaded', function () {
    var mount = document.getElementById('bm-nav') || document.querySelector('[data-bm-nav]');
    if (mount) BMNav.render(mount);
  });
})();
