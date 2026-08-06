/* ============================================================
   AI Summit - Shared Layout
   layout.js · Single source of truth for the site header and footer.

   Every page gets the same nav and footer from this file. Edit a
   link once here and it changes everywhere.

   ── Usage on any page ──────────────────────────────────────
     <body>
       <div id="site-header"></div>

       ... page content ...

       <div id="site-footer"></div>

       <script src="data/layout.js"></script>
     </body>

   The placeholder divs are optional. If they are missing, the
   header is added at the top of <body> and the footer at the end.

   ── Optional per-page override ─────────────────────────────
   Set this BEFORE the script tag to force which nav item is
   highlighted (useful for detail pages like track-ld.html):

     <script>var LAYOUT_ACTIVE = "tracks";</script>

   ── Notes ──────────────────────────────────────────────────
   · No styling is written here. Every class comes from style.css.
   · Modal links use data-modal and are wired up by this file,
     so they work only on pages that also load modals.js.
   ============================================================ */


/* ─────────────────────────────────────────
   1. CONFIG
   Change links, labels and copy here only.
   ───────────────────────────────────────── */

var LAYOUT_CONFIG = {

  /* Which file counts as the home page */
  homePage: "home.html",

  /* Logo paths live in data/theme.js so they switch with the theme.
     Only the alt text is set here. */
  brand: {
    alt: "AI Summit"
  },

  /* Main nav. "key" is what LAYOUT_ACTIVE matches against. */
  nav: [
    { key: "about",    label: "About",                 href: "home.html"     },
    { key: "tracks",   label: "Tracks",                href: "tracks.html"   },
    { key: "agenda",   label: "Agenda",                href: "agenda.html"   },
    { key: "speakers", label: "Speakers",              href: "speakers.html" },
    { key: "sponsors", label: "Sponsors &amp; Partners", href: "sponsors.html" }
  ],

  /* Nav call to action. Label and target come from REGISTRATION_MODE
     below, so there is nothing to configure here. */

  footer: {
    tagline : "The global AI activation week. Powered by BrainsMingle.",
    email   : "aisummit@brainsmingle.com",

    /* BrainsMingle's accounts, not the summit's. The labels say so
       rather than implying the summit has a presence of its own.
       One list, used by both the footer and the home hero. */
    social: [
      { key: "linkedin",  label: "BrainsMingle on LinkedIn",  href: "https://www.linkedin.com/company/brainsmingle/" },
      { key: "facebook",  label: "BrainsMingle on Facebook",  href: "https://www.facebook.com/brainsmingle" },
      { key: "instagram", label: "BrainsMingle on Instagram", href: "https://www.instagram.com/brainsmingle" },
      { key: "x",         label: "BrainsMingle on X",         href: "https://www.x.com/brainsmingle" }
    ],

    /* Each column: title + links.
       A link is either { label, href } or { label, modal }. */
    columns: [
      {
        title: "Event",
        links: [
          { label: "About AI Summit", href: "#about"        },
          { label: "The Tracks",      href: "tracks.html",   page: "tracks"   },
          { label: "Full Agenda",     href: "agenda.html",   page: "agenda"   },
          { label: "Speakers",        href: "speakers.html", page: "speakers" },
          { label: "Join as Speaker", modal: "speaker-modal" }
        ]
      },
      {
        title: "Partners",
        links: [
          { label: "Become a Sponsor",   modal: "sponsor-modal" },
          { label: "Become a Partner",   modal: "sponsor-modal" },
          { label: "Community Partners", href: "sponsors.html", page: "sponsors" }
        ]
      }
    ],

    /* Small print links shown next to the copyright line */
    legal: [
      { label: "Terms",   href: "terms.html"   },
      { label: "Privacy", href: "privacy.html" }
    ],

    bottomLeft  : "© 2026 AI Summit · Powered by BrainsMingle",
    bottomRight : "10 – 16 October 2026 · Global · Virtual"
  }
};


/* ─────────────────────────────────────────
   2. REGISTRATION MODE
   One switch controls every call to action on the site: the button
   label, the copy around it, and which modal opens.

   Flip this to "register" the day registration opens, then update the
   fallback text sitting in the HTML so there is no flash of the old
   wording before scripts run.
   ───────────────────────────────────────── */

var REGISTRATION_MODE = "register";   // set as "waitlist" | "register"

var REGISTRATION_MODES = {

  waitlist: {
    modalId : "waitlist-modal",
    template: "waitlist",

    /* Which closing CTA form ctaFormHtml builds.
       "email" is an email capture, "button" is a single button. */
    form    : "email",

    copy: {
      cta         : "Join the Waiting List",
      ctaShort    : "Waiting List",
      sectionTitle: "Registration opens soon.<br>Get in line first.",
      sectionSub  : "Seven Days. 100+ Speakers. Unlimited Conversations.",
      formNote    : "No spam. One email when registration goes live."
    }
  },

  register: {
    modalId : "register-modal",
    template: "register",
    form    : "button",

    /* No formNote here on purpose: the note belongs to the email
       capture and disappears with it. */
    copy: {
      cta         : "Register to Join",
      ctaShort    : "Register",
      sectionTitle: "Your seat is waiting.<br>Join the Summit",
      sectionSub  : "Seven Days. 100+ Speakers. Unlimited Conversations."
    }
  }

};

/* Allows ?mode=register on any URL to preview the other state without
   deploying. Remove this line if you would rather it not be previewable. */
function activeRegistration() {
  var override = null;
  try { override = new URLSearchParams(window.location.search).get("mode"); } catch (e) {}
  var key = (override && REGISTRATION_MODES[override]) ? override : REGISTRATION_MODE;
  return REGISTRATION_MODES[key] || REGISTRATION_MODES.waitlist;
}


/* ─────────────────────────────────────────
   3. PAGE STATUS
   One switch per page. "soon" sends every link to that page to
   coming-soon.html, and redirects anyone who lands on it directly.
   "live" behaves normally.

   Flip a page to "live" the day it ships. Nothing else to change:
   the nav, the footer and any link marked data-page all follow.
   ───────────────────────────────────────── */

var PAGE_STATUS = {
  tracks  : "live",
  agenda  : "live",
  speakers: "live",
  sponsors: "live"
};

/* Shows a small "Soon" badge next to gated nav items. Set to false
   to hide the badges without changing the routing. */
var PAGE_STATUS_BADGES = true;

/* Where gated pages send people */
var COMING_SOON_PAGE = "coming-soon.html";

/* Maps a file name back to its PAGE_STATUS key, for the redirect guard */
var PAGE_FILES = {
  "tracks.html"  : "tracks",
  "agenda.html"  : "agenda",
  "speakers.html": "speakers",
  "sponsors.html": "sponsors"
};

/* True when a page is gated. Add ?preview=1 to any URL to bypass the
   gate and see the real page before you flip its switch. */
function isPageSoon(key) {
  if (!key || PAGE_STATUS[key] !== "soon") return false;
  try {
    if (new URLSearchParams(window.location.search).get("preview")) return false;
  } catch (e) {}
  return true;
}

/* Resolves a link target through the gate. */
function resolvePageHref(key, href) {
  return isPageSoon(key) ? COMING_SOON_PAGE : _layoutResolveHref(href);
}


/* ─────────────────────────────────────────
   4a. PAGE CTA
   The band each inner page closes with. Keyed by file name, so
   the page markup carries only <div id="page-cta"></div> and the
   copy lives here.

   action.modal    opens a modal from data/modals.js
   action.href     a normal link, gated by PAGE_STATUS if you add
                   a page key
   action.cta      "registration", which follows REGISTRATION_MODE
                   and picks up its own label

   A page with no entry renders nothing, so adding a band is a
   matter of adding a key here plus the placeholder div.
   ───────────────────────────────────────── */

var PAGE_CTA = {

  "tracks.html": {
    eyebrow: "Track sponsorship · five slots",
    title  : "Own a track.<br>Own the conversation.",
    lead   : "Your brand names the track and leads every session in it, for the full week.",
    action : { label: "Become a Track Sponsor", modal: "sponsor-modal" }
  },

  "agenda.html": {
    eyebrow: "Speaker applications open",
    title  : "100+ Speakers.<br>One of them could be you.",
    lead   : "Practitioners, founders and researchers across five tracks.",
    action : { label: "Become a Speaker", modal: "speaker-modal" }
  },

  "speakers.html": {
    eyebrow: "Speaker applications open",
    title  : "Share what you<br>actually know.",
    lead   : "Not keynotes. Real conversations, in front of a global room, across seven days.",
    action : { label: "Become a Speaker", modal: "speaker-modal" }
  },

  "sponsors.html": {
    eyebrow: "Sponsorship · limited slots",
    title  : "Be where the<br>conversation happens.",
    lead   : "In front of 50,000 professionals across 90+ countries, for a full week. We respond within 24 hours.",
    action : { label: "Request a Call", modal: "sponsor-modal" }
  }

};


/* ─────────────────────────────────────────
   4. HELPERS
   ───────────────────────────────────────── */

/* Logo path for the active theme. Falls back to the dark theme if
   data/theme.js has not loaded, which should not happen since it is
   loaded in <head>. */
function _themeLogo(slot) {
  if (typeof themeLogos === "function") {
    var set = themeLogos();
    if (set && set[slot]) return set[slot];
  }
  return "assets/brand/logo-white.png";
}

/* Both files for a slot, regardless of the active theme. The header
   needs both in the markup so the CSS can pick by surface: the nav
   sits on the dark hero band in the light theme too. */
function _logoFile(theme, slot) {
  var set = (typeof SITE_LOGOS !== "undefined") ? SITE_LOGOS[theme] : null;
  if (set && set[slot]) return set[slot];
  return "assets/brand/logo-white.png";
}


/* Sun and moon button. Which icon shows is decided in CSS by the
   current data-theme, so there is nothing to update on click.
   Returns an empty string when SHOW_THEME_TOGGLE is off. */
function _themeToggle() {
  if (typeof SHOW_THEME_TOGGLE !== "undefined" && !SHOW_THEME_TOGGLE) return "";
  if (typeof THEME_ICONS === "undefined") return "";

  return '<button class="theme-toggle" id="theme-toggle" type="button"' +
           ' aria-label="Switch between light and dark">' +
           '<span class="theme-toggle__sun">'  + THEME_ICONS.sun  + '</span>' +
           '<span class="theme-toggle__moon">' + THEME_ICONS.moon + '</span>' +
         '</button>';
}


/* Any <img data-logo="hero"> in the page markup gets its source from
   the active theme. The src in the HTML is the default theme's file,
   so there is nothing to flash on the common path. */
function applyThemeLogos(scope) {
  (scope || document).querySelectorAll("img[data-logo]").forEach(function (el) {
    var slot = el.getAttribute("data-logo");
    var path = _themeLogo(slot);
    if (path) el.setAttribute("src", path);
  });
}


/* The closing band, rendered into #page-cta when the current page
   has an entry in PAGE_CTA. */
function renderPageCta() {
  var slot = document.getElementById("page-cta");
  if (!slot) return;

  var cfg = PAGE_CTA[_layoutCurrentPage()];
  if (!cfg) { slot.innerHTML = ""; return; }

  var a = cfg.action || {};
  var btn;
  if (a.modal) {
    btn = '<a href="#" class="btn btn-primary btn-arrow" data-modal="' + a.modal + '">' + a.label + '</a>';
  } else if (a.cta) {
    btn = '<a href="#" class="btn btn-primary btn-arrow" data-cta="' + a.cta + '"></a>';
  } else {
    btn = '<a href="' + (a.href || "#") + '" class="btn btn-primary btn-arrow"' +
          (a.page ? ' data-page="' + a.page + '"' : '') + '>' + a.label + '</a>';
  }

  /* Same two-column split as the home closing band: eyebrow and
     title on the left, lead and action on the right. Keep this in
     step with .final-cta, and keep .page-cta__inner matching
     .final-cta__inner in the stylesheet, breakpoint included. */
  slot.innerHTML =
    '<section class="page-cta">' +
      '<div class="page-cta__inner">' +
        '<div>' +
          (cfg.eyebrow ? '<p class="page-cta__eyebrow">' + cfg.eyebrow + '</p>' : '') +
          '<h2 class="page-cta__title">' + cfg.title + '</h2>' +
        '</div>' +
        '<div>' +
          (cfg.lead ? '<p class="page-cta__lead">' + cfg.lead + '</p>' : '') +
          '<div class="page-cta__actions">' + btn + '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
}


/* Current file name, e.g. "tracks.html". Falls back to the home
   page when the URL ends in a slash. */
function _layoutCurrentPage() {
  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf("/") + 1);
  if (!file || file === "index.html") return LAYOUT_CONFIG.homePage;
  return file;
}

function _layoutIsHome() {
  return _layoutCurrentPage() === LAYOUT_CONFIG.homePage;
}

/* Anchor links (#register, #about) only exist on the home page.
   From any other page, send the visitor to home.html#register. */
function _layoutResolveHref(href) {
  if (href && href.charAt(0) === "#" && !_layoutIsHome()) {
    return LAYOUT_CONFIG.homePage + href;
  }
  return href;
}

/* Which nav item should be highlighted. */
function _layoutActiveKey() {
  if (typeof LAYOUT_ACTIVE !== "undefined" && LAYOUT_ACTIVE) return LAYOUT_ACTIVE;
  var page = _layoutCurrentPage();
  var match = LAYOUT_CONFIG.nav.filter(function (item) {
    return item.href === page;
  })[0];
  return match ? match.key : null;
}


/* ─────────────────────────────────────────
   5. MARKUP BUILDERS
   Pure functions. No styling attributes.
   ───────────────────────────────────────── */

function renderSiteHeader() {
  var cfg    = LAYOUT_CONFIG;
  var active = _layoutActiveKey();

  var links = cfg.nav.map(function (item) {
    var cls   = (item.key === active) ? ' class="active"' : "";
    var badge = (PAGE_STATUS_BADGES && isPageSoon(item.key))
      ? '<span class="nav-soon">Soon</span>' : "";
    return '<a href="' + resolvePageHref(item.key, item.href) + '"' + cls + '>' +
             item.label + badge +
           '</a>';
  }).join("");

  return '' +
    '<nav class="site-nav">' +
      '<a href="' + cfg.homePage + '" class="nav-logo">' +
        '<img class="nav-logo__on-light" src="' + _logoFile("light", "header") + '" alt="' + cfg.brand.alt + '" />' +
        '<img class="nav-logo__on-dark" src="' + _logoFile("dark", "header") + '" alt="" aria-hidden="true" />' +
      '</a>' +
      '<div class="nav-links">' + links + '</div>' +
      '<div class="nav-actions">' +
        _themeToggle() +
        '<a href="#" class="btn btn-primary btn-sm" data-cta="registration" data-cta-short>' +
          activeRegistration().copy.ctaShort +
        '</a>' +
      '</div>' +
    '</nav>';
}


/* Social row. Uses data-icon rather than inline SVG: this file runs
   at parse time and loads before icons.js, so SIGNAL_ICONS does not
   exist yet. The injector fills these spans on DOMContentLoaded.
   Pass "hero" for the larger variant on the home page. */
function socialLinksHtml(variant) {
  var list = (LAYOUT_CONFIG.footer && LAYOUT_CONFIG.footer.social) || [];
  if (!list.length) return "";
  return '<div class="social-row' + (variant ? " social-row--" + variant : "") + '">' +
    list.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener"' +
             ' aria-label="' + s.label + '" title="' + s.label + '">' +
             '<span data-icon="' + s.key + '"></span></a>';
    }).join("") +
  '</div>';
}


/* The closing CTA form. In waitlist mode it is an email capture; in
   register mode it is a single button that opens the modal.

   The waitlist submit deliberately does NOT carry data-cta:
   applyRegistrationCopy attaches a modal-opening click listener to
   everything with that attribute, which would fire alongside the
   form submit and do both on one click. */
function ctaFormHtml(prefix) {
  var mode = activeRegistration();
  var p = prefix || "cta";

  if (mode.form !== "email") {
    return '<div class="wl-form-row">' +
             '<a href="#" class="btn btn-primary btn-arrow" data-cta="registration"></a>' +
           '</div>';
  }

  return '' +
    '<div class="wl-form-row">' +
      '<div class="modal-field wl-field">' +
        '<input type="email" id="' + p + '-email" placeholder="Enter your email address"' +
        ' autocomplete="email" aria-label="Email address" required />' +
      '</div>' +
      '<button class="btn btn-primary wl-submit" id="' + p + '-submit-btn"' +
      ' onclick="submitWaitlistForm(\'' + p + '\')">' + mode.copy.cta + '</button>' +
    '</div>' +
    '<div class="wl-error" id="' + p + '-error">Please enter a valid email address.</div>' +
    '<div class="wl-success" id="' + p + '-success">' +
      '<span data-icon="check"></span> You\'re on the list. We\'ll be in touch.' +
    '</div>' +
    (mode.copy.formNote ? '<p class="wl-note">' + mode.copy.formNote + '</p>' : "");
}


function renderSiteFooter() {
  var f = LAYOUT_CONFIG.footer;
  var b = LAYOUT_CONFIG.brand;

  var columns = f.columns.map(function (col) {
    var links = col.links.map(function (link) {
      if (link.modal) {
        /* A page with an inline equivalent of a modal (speakers.html has the
           apply form on the page) can redirect the link by setting
           MODAL_LINK_OVERRIDES before this script loads. */
        var override = (typeof MODAL_LINK_OVERRIDES !== "undefined")
          ? MODAL_LINK_OVERRIDES[link.modal] : null;
        if (override) {
          return '<a href="' + override + '">' + link.label + '</a>';
        }
        return '<a href="#" data-modal="' + link.modal + '">' + link.label + '</a>';
      }
      return '<a href="' + resolvePageHref(link.page, link.href) + '">' + link.label + '</a>';
    }).join("");

    return '' +
      '<div>' +
        '<div class="footer-col-title">' + col.title + '</div>' +
        '<div class="footer-links">' + links + '</div>' +
      '</div>';
  }).join("");

  return '' +
    '<footer class="site-footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-brand">' +
          '<img data-logo="footer" src="' + _themeLogo("footer") + '" alt="' + b.alt + '" />' +
          '<p class="footer-brand-sub">' + f.tagline + '</p>' +
          '<div class="footer-contact">' +
            '<a href="mailto:' + f.email + '">' + f.email + '</a>' +
          '</div>' +
          socialLinksHtml() +
        '</div>' +
        columns +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span class="footer-bottom-text">' + f.bottomLeft + '</span>' +
        '<span class="footer-legal">' +
          (f.legal || []).map(function (l) {
            return '<a href="' + l.href + '">' + l.label + '</a>';
          }).join("") +
        '</span>' +
        '<span class="footer-bottom-text">' + f.bottomRight + '</span>' +
      '</div>' +
    '</footer>';
}


/* ─────────────────────────────────────────
   6. REGISTRATION CALLS TO ACTION
   Any element marked data-cta="registration" gets its label and click
   target from the active mode. Add data-cta-short for tight spaces.
   Any element marked data-copy="key" gets its text from the same place.
   ───────────────────────────────────────── */

/* Rewrites every a[data-page] link to coming soon while its page is gated.
   Call it again after rendering links yourself, the way tracks.html does. */
function applyPageGates(scope) {
  (scope || document).querySelectorAll("a[data-page]").forEach(function (el) {
    var key = el.getAttribute("data-page");
    if (isPageSoon(key)) el.setAttribute("href", COMING_SOON_PAGE);
  });
}

/* Backstop for links added after the last applyPageGates call. */
document.addEventListener("click", function (e) {
  var link = e.target.closest ? e.target.closest("a[data-page]") : null;
  if (!link) return;
  if (isPageSoon(link.getAttribute("data-page"))) {
    e.preventDefault();
    window.location.href = COMING_SOON_PAGE;
  }
});


function applyRegistrationCopy() {
  var mode = activeRegistration();


  document.querySelectorAll('[data-cta="registration"]').forEach(function (el) {
    var isShort = el.hasAttribute("data-cta-short");
    el.textContent = isShort ? mode.copy.ctaShort : mode.copy.cta;
    if (isShort) el.setAttribute("aria-label", mode.copy.cta);

    /* A page that already has the form inline (coming-soon.html) can set
       REGISTRATION_CTA_TARGET to an anchor. The button scrolls there
       instead of opening a modal that does not exist on that page. */
    if (typeof REGISTRATION_CTA_TARGET !== "undefined" && REGISTRATION_CTA_TARGET) {
      el.setAttribute("href", REGISTRATION_CTA_TARGET);
      return;
    }

    el.setAttribute("href", "#");
    el.addEventListener("click", function (e) {
      e.preventDefault();
      if (typeof openModal === "function") openModal(mode.modalId);
    });
  });

  applyPageGates();
  applyThemeLogos();

  document.querySelectorAll("[data-copy]").forEach(function (el) {
    var key = el.getAttribute("data-copy");
    if (mode.copy[key] !== undefined) el.innerHTML = mode.copy[key];
  });
}


/* ─────────────────────────────────────────
   7. MOUNT
   Runs as soon as the file is executed.
   ───────────────────────────────────────── */

/* Someone landing directly on a gated page goes to coming soon.
   Runs before the layout renders so there is nothing to flash. */
(function guardGatedPages() {
  var key = PAGE_FILES[_layoutCurrentPage()];
  if (isPageSoon(key)) window.location.replace(COMING_SOON_PAGE);
})();


(function mountLayout() {

  /* Header: use #site-header if present, otherwise add one at the
     top of <body>. */
  var headerSlot = document.getElementById("site-header");
  if (!headerSlot) {
    headerSlot = document.createElement("div");
    headerSlot.id = "site-header";
    document.body.insertBefore(headerSlot, document.body.firstChild);
  }
  headerSlot.innerHTML = renderSiteHeader();

  /* Wire the sun/moon button. Present only when SHOW_THEME_TOGGLE is on. */
  var themeBtn = headerSlot.querySelector("#theme-toggle");
  if (themeBtn && typeof toggleTheme === "function") {
    themeBtn.addEventListener("click", toggleTheme);
  }

  /* Footer: use #site-footer if present, otherwise append one. */
  var footerSlot = document.getElementById("site-footer");
  if (!footerSlot) {
    footerSlot = document.createElement("div");
    footerSlot.id = "site-footer";
    document.body.appendChild(footerSlot);
  }
  footerSlot.innerHTML = renderSiteFooter();

  /* Closing band. Renders only on pages with a #page-cta slot and
     an entry in PAGE_CTA. */
  renderPageCta();
  var ctaSlot = document.getElementById("page-cta");

  /* Home hero social row. Renders only where the slot exists, so
     every other page ignores it. */
  var heroSocial = document.getElementById("hero-social");
  if (heroSocial) heroSocial.innerHTML = socialLinksHtml("hero");

  /* Closing CTA form. Renders only where the slot exists. Runs here,
     at parse time, so a register-mode button is in the DOM before
     applyRegistrationCopy sweeps for [data-cta] on DOMContentLoaded. */
  var ctaForm = document.getElementById("cta-form");
  if (ctaForm) ctaForm.innerHTML = ctaFormHtml("cta");

  /* Wire modal links in the header, the footer and the closing band.
     Silently does nothing on pages without modals.js. */
  [headerSlot, footerSlot, ctaSlot].filter(Boolean).forEach(function (slot) {
    slot.querySelectorAll("[data-modal]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        if (typeof openModal === "function") openModal(el.getAttribute("data-modal"));
      });
    });
  });

  /* Label and wire every registration call to action on the page.
     Runs after the header is in the DOM so the nav button is included. */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyRegistrationCopy);
  } else {
    applyRegistrationCopy();
  }

  /* Pages that open with a gradient hero start with a transparent
     nav. The 40px threshold stops it flickering at the boundary. */
  if (document.body.classList.contains("has-hero")) {
    var onScroll = function () {
      document.body.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Inject any icons used inside the header or footer. icons.js only
     scans on DOMContentLoaded, so cover the case where this file runs
     later than that. */
  if (document.readyState !== "loading" && typeof SIGNAL_ICONS !== "undefined") {
    [headerSlot, footerSlot, ctaSlot].filter(Boolean).forEach(function (slot) {
      slot.querySelectorAll("[data-icon]").forEach(function (el) {
        var key = el.getAttribute("data-icon");
        if (SIGNAL_ICONS[key]) el.innerHTML = SIGNAL_ICONS[key];
      });
    });
  }

})();
