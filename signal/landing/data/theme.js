/* ============================================================
   AI Summit — Theme & Fonts
   theme.js · Decides how the site looks before anything paints.

   MUST be loaded in <head>, before the stylesheet. It sets
   data-theme on <html> and injects the font stylesheet, so there
   is no flash of the wrong theme or the wrong typeface.

     <script src="data/theme.js"></script>

   ════════════════════════════════════════════════════════════
   1. THEME  — dark or light, switchable by the visitor
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
   pairing, change FONT_SET below to any key in SITE_FONTS. The
   Google Fonts request is built from that entry automatically,
   so there is nothing to edit in the page heads or the CSS.

   To add a pairing, copy an entry in SITE_FONTS and give it the
   family names plus the weights you need.

   A pairing may also carry a "mono" for overlines and small
   labels. It is optional: pairings without one leave --font-mono
   at its CSS fallback.
   ============================================================ */


/* ── 1. THEME ─────────────────────────────────────────────── */

var DEFAULT_THEME     = "light";   // "dark" | "light"
var SHOW_THEME_TOGGLE = true;

var THEME_KEY = "aisummit-theme";


/* ── 2. FONTS ─────────────────────────────────────────────── */

var FONT_SET = "montserratInterMono";  // any key in SITE_FONTS below

var SITE_FONTS = {

  /* The original pairing */
  montserrat: {
    display : "Montserrat",
    body    : "Urbanist",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Urbanist:wght@300;400;500;600;700;800"]
  },

  /* Narrower and heavier headlines, same body */
  archivo: {
    display : "Archivo",
    body    : "Urbanist",
    families: ["Archivo:wght@600;700;800;900",
               "Urbanist:wght@300;400;500;600;700;800"]
  },

  /* More technical, squarer headlines */
  spaceGrotesk: {
    display : "Space Grotesk",
    body    : "Urbanist",
    families: ["Space+Grotesk:wght@500;600;700",
               "Urbanist:wght@300;400;500;600;700;800"]
  },

  /* Single family throughout, geometric and friendly */
  jakarta: {
    display : "Plus Jakarta Sans",
    body    : "Plus Jakarta Sans",
    families: ["Plus+Jakarta+Sans:wght@400;500;600;700;800"]
  },

  /* Single family throughout, neutral and very legible */
  inter: {
    display : "Inter",
    body    : "Inter",
    families: ["Inter:wght@400;500;600;700;800;900"]
  },
  
  /* Montserrat headlines with a tighter, more mechanical body */
  montserratManrope: {
    display : "Montserrat",
    body    : "Manrope",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Manrope:wght@400;500;600;700;800"]
  },
  
 /* Montserrat headlines with a neutral, highly legible body */
  montserratInter: {
    display : "Montserrat",
    body    : "Inter",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Inter:wght@400;500;600;700"]
  },

  /* ── Pairings carrying a mono for overlines and small labels.
        Both are on the BrainsMingle system, which specifies Inter
        and JetBrains Mono. The difference is whether headlines
        stay on the event's own display face or move to Inter. ── */

  /* A · Fully on-system. One family plus the mono. */
  interMono: {
    display : "Inter",
    body    : "Inter",
    mono    : "JetBrains Mono",
    families: ["Inter:wght@400;500;600;700;800;900",
               "JetBrains+Mono:wght@400;500;600"]
  },

  /* B · Event display face, on-system body and labels. */
  montserratInterMono: {
    display : "Montserrat",
    body    : "Inter",
    mono    : "JetBrains Mono",
    families: ["Montserrat:wght@400;600;700;800;900",
               "Inter:wght@400;500;600;700",
               "JetBrains+Mono:wght@400;500;600"]
  },
};


/* Brand assets per theme. layout.js reads these for the header and
   footer logos, and for any element marked data-logo. */
var SITE_LOGOS = {
  dark: {
    header: "assets/brand/logo-white.png",
    footer: "assets/brand/logo-white.png",
    hero:   "assets/brand/logo-hero-white.png"
  },
  light: {
    header: "assets/brand/logo-purple.png",
    footer: "assets/brand/logo-purple.png",
    hero:   "assets/brand/logo-hero-purple.png"
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

/* Returns "dark" or "light". */
function activeTheme() {
  var t = _themeParam() || _themeStored() || DEFAULT_THEME;
  return (t === "light") ? "light" : "dark";
}

/* Logo paths for the active theme. */
function themeLogos() {
  return SITE_LOGOS[activeTheme()] || SITE_LOGOS.dark;
}

/* The active font pairing, falling back to the original. */
function activeFonts() {
  return SITE_FONTS[FONT_SET] || SITE_FONTS.montserrat;
}


/* ─────────────────────────────────────────
   WRITE
   ───────────────────────────────────────── */

/* Applies a theme and remembers it. Swaps the logos live, so the
   page never needs to reload. */
function setTheme(theme) {
  var t = (theme === "light") ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);

  try { window.localStorage.setItem(THEME_KEY, t); } catch (e) {}

  if (typeof applyThemeLogos === "function") applyThemeLogos();

  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: t } }));
}

function toggleTheme() {
  setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
}


/* Requests the pairing from Google Fonts and points the CSS type
   tokens at it. Both themes use the same fonts, so this runs once
   and is not affected by the theme switch. */
function applyFonts() {
  var f = activeFonts();
  var head = document.head || document.getElementsByTagName("head")[0];

  [["preconnect", "https://fonts.googleapis.com", false],
   ["preconnect", "https://fonts.gstatic.com",    true]].forEach(function (p) {
    var l = document.createElement("link");
    l.rel = p[0];
    l.href = p[1];
    if (p[2]) l.crossOrigin = "anonymous";
    head.appendChild(l);
  });

  var sheet = document.createElement("link");
  sheet.rel = "stylesheet";
  sheet.href = "https://fonts.googleapis.com/css2?family=" +
               f.families.join("&family=") + "&display=swap";
  head.appendChild(sheet);

  var root = document.documentElement;
  root.style.setProperty("--font-display", "'" + f.display + "', sans-serif");
  root.style.setProperty("--font-head",    "'" + f.display + "', sans-serif");
  root.style.setProperty("--font-body",    "'" + f.body    + "', sans-serif");

  // Optional third role. Pairings without a mono simply leave the
  // token alone, so the CSS fallback applies and nothing breaks.
  if (f.mono) {
    root.style.setProperty("--font-mono", "'" + f.mono + "', ui-monospace, monospace");
  }
}


/* Both applied immediately, before the browser paints anything.
   The theme deliberately does not write to localStorage here:
   arriving on the site is not the same as choosing a theme. */
document.documentElement.setAttribute("data-theme", activeTheme());
applyFonts();
