/* ============================================================
   BrainsMingle — Theme & Fonts
   theme.js · Decides how the site looks before anything paints.

   MUST be loaded in <head>, AFTER tokens.css + style.css. It sets
   data-theme on <html> and points the font tokens at the active
   pairing (fonts are self-hosted via @font-face in tokens.css), so
   there is no flash of the wrong theme or the wrong typeface.

     <link rel="stylesheet" href="assets/css/tokens.css">
     <link rel="stylesheet" href="assets/css/style.css">
     <script src="assets/js/theme.js"></script>

   ════════════════════════════════════════════════════════════
   1. THEME  — light (default) or dark, switchable by the visitor
   ════════════════════════════════════════════════════════════

   Chosen in this order:
     1. ?theme=dark or ?theme=light in the URL, for previewing
     2. the visitor's own choice, saved in localStorage
     3. DEFAULT_THEME below

   Set SHOW_THEME_TOGGLE to false to hide the sun/moon button.
   The default still applies and ?theme= still previews.

   ════════════════════════════════════════════════════════════
   2. FONTS  — one switch, not exposed in the UI
   ════════════════════════════════════════════════════════════

   Both themes always use the same typefaces. To try a different
   pairing, change FONT_SET below to any key in SITE_FONTS. Fonts are
   self-hosted via @font-face in tokens.css; the "families" arrays
   below are no longer used at runtime (kept for reference). If you
   switch to a pairing whose faces you haven't added to tokens.css,
   add the matching @font-face rules there first.

   A pairing may carry a "mono" for eyebrows and small labels.
   It is optional: pairings without one leave --font-mono at its
   CSS fallback.
   ============================================================ */


/* ── 1. THEME ─────────────────────────────────────────────── */

var DEFAULT_THEME     = "light";   // "light" | "dark"
var SHOW_THEME_TOGGLE = true;

var THEME_KEY = "bm-theme";


/* ── 2. FONTS ─────────────────────────────────────────────── */

var FONT_SET = "montserratInterMono";  // any key in SITE_FONTS below

var SITE_FONTS = {

  /* On-system: Montserrat display face, Inter body, JetBrains Mono
     for eyebrows and small labels. This is the house pairing. */
  montserratInterMono: {
    display : "Montserrat",
    body    : "Inter",
    mono    : "JetBrains Mono",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Inter:wght@400;500;600;700",
               "JetBrains+Mono:wght@400;500;600"]
  },

  /* Fully on-system: one family throughout plus the mono. */
  interMono: {
    display : "Inter",
    body    : "Inter",
    mono    : "JetBrains Mono",
    families: ["Inter:wght@400;500;600;700;800;900",
               "JetBrains+Mono:wght@400;500;600"]
  },

  /* Legacy pairing, kept for reference. */
  montserratLato: {
    display : "Montserrat",
    body    : "Lato",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Lato:wght@300;400;700"]
  }
};


/* Brand assets per theme. nav.js reads these for any element marked
   data-logo and swaps them live on theme change.
     · logo-*  — full wordmark, used in the header and footer
     · icon-*  — square mark, for compact spots
   "purple" is the light-theme variant, "white" the dark-theme one. */
var SITE_LOGOS = {
  light: {
    header: "assets/brand/logo-purple.png",
    footer: "assets/brand/logo-purple.png",
    hero:   "assets/brand/logo-purple.png",
    icon:   "assets/brand/icon-purple.png"
  },
  dark: {
    header: "assets/brand/logo-white.png",
    footer: "assets/brand/logo-white.png",
    hero:   "assets/brand/logo-white.png",
    icon:   "assets/brand/icon-white.png"
  }
};


/* Sun and moon live here rather than in icons.js, because theme.js
   loads first and the toggle is built before icons.js runs. */
var THEME_ICONS = {
  sun:  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>'
};


/* ─────────────────────────────────────────
   READ
   ───────────────────────────────────────── */

function _themeParam() {
  try {
    var v = new URLSearchParams(window.location.search).get("theme");
    return (v === "dark" || v === "light") ? v : null;
  } catch (e) { return null; }
}

function _themeStored() {
  try {
    var v = window.localStorage.getItem(THEME_KEY);
    return (v === "dark" || v === "light") ? v : null;
  } catch (e) { return null; }   // private browsing, storage disabled
}

/* Returns "light" or "dark". */
function activeTheme() {
  var t = _themeParam() || _themeStored() || DEFAULT_THEME;
  return (t === "dark") ? "dark" : "light";
}

/* Logo paths for the active theme. */
function themeLogos() {
  return SITE_LOGOS[activeTheme()] || SITE_LOGOS.light;
}

/* The active font pairing, falling back to the house pairing. */
function activeFonts() {
  return SITE_FONTS[FONT_SET] || SITE_FONTS.montserratInterMono;
}


/* ─────────────────────────────────────────
   WRITE
   ───────────────────────────────────────── */

/* Applies a theme and remembers it. Swaps any data-logo images live,
   so the page never needs to reload. */
function setTheme(theme) {
  var t = (theme === "dark") ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);

  try { window.localStorage.setItem(THEME_KEY, t); } catch (e) {}

  if (typeof applyThemeLogos === "function") applyThemeLogos();

  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: t } }));
}

function toggleTheme() {
  setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
}


/* Any <img data-logo="header|footer|hero"> gets its source from the
   active theme. Safe to call before nav.js runs. */
function applyThemeLogos(scope) {
  (scope || document).querySelectorAll("img[data-logo]").forEach(function (el) {
    var slot = el.getAttribute("data-logo");
    var set  = themeLogos();
    if (set && set[slot]) el.setAttribute("src", set[slot]);
  });
}


/* Fonts are self-hosted via @font-face in tokens.css — no network
   request. This only points the CSS type tokens at the active pairing,
   so the FONT_SET switch still works. Both themes use the same fonts,
   so this runs once and is not affected by the theme switch. */
function applyFonts() {
  var f = activeFonts();

  var root = document.documentElement;
  root.style.setProperty("--font-display", "'" + f.display + "', sans-serif");
  root.style.setProperty("--font-head",    "'" + f.display + "', sans-serif");
  root.style.setProperty("--font-body",    "'" + f.body    + "', sans-serif");

  // Optional third role. Pairings without a mono leave the token
  // alone, so the CSS fallback applies and nothing breaks.
  if (f.mono) {
    root.style.setProperty("--font-mono", "'" + f.mono + "', ui-monospace, monospace");
  }
}


/* Both applied immediately, before the browser paints anything.
   The theme deliberately does not write to localStorage here:
   arriving on the site is not the same as choosing a theme. */
document.documentElement.setAttribute("data-theme", activeTheme());
applyFonts();
