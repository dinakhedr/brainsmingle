/* ============================================================
   AI Summit — Speaker Card & Popup
   speaker-popup.js · The speaker card and the profile popup it
   opens, shared by every page that shows speakers.

     <script src="data/speaker-popup.js"></script>

   Load AFTER speakers.js, tracks.js and icons.js, and after
   agenda.js on any page that should show a speaker's sessions.

   The overlay markup is injected into a mount div, the same way
   layout.js handles the header and footer, so no page carries a
   copy of it:

     <div id="speaker-popup"></div>

   ════════════════════════════════════════════════════════════
   WHY THIS FILE EXISTS

   The card and the popup were written for speakers.html. The
   home page now shows the same card, so a second copy would
   mean fixing every bug twice. This is the only rendering code
   shared across pages; everything else stays with its page.
   ============================================================ */


/* ── CONFIG ───────────────────────────────────────────────── */

// Maps trackNumber to a key in data/icons.js
var SPK_TRACK_ICON_KEYS = {
  1: "trackLd",
  2: "trackCreative",
  3: "trackStartups",
  4: "trackBusiness",
  5: "trackTech"
};

var SPK_PLACEHOLDER_SESSION = "Session to be announced";


/* ── HELPERS ──────────────────────────────────────────────── */

/* SVG straight from data/icons.js, so it is in the markup before
   the icon injector runs. An unknown key renders nothing. */
function _spkIcon(key) {
  return (typeof SIGNAL_ICONS !== "undefined" && SIGNAL_ICONS[key]) ? SIGNAL_ICONS[key] : "";
}

function _initials(name) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/* The close glyph cannot use <span data-icon="close">. That span is
   filled by the injector in icons.js on DOMContentLoaded, and this
   file injects its markup on the same event but registers later, so
   the injector sweeps the page before the popup exists. Pulling the
   SVG in directly means it is already in the markup. The literal is
   a fallback in case the icon set has no "close" key. */
function _spkCloseIcon() {
  return _spkIcon("close") ||
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"' +
    ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
    ' stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
}


/* ── CARD ─────────────────────────────────────────────────── */

/* One card. showBadge draws the Featured ribbon.
   data-track and data-days are read by the speakers page filter;
   they are harmless anywhere else. */
function speakerCardHtml(speaker, showBadge) {
  const trackNums = (typeof getSpeakerTrackNumbers === "function")
    ? getSpeakerTrackNumbers(speaker) : [];
  const appearances = speaker.appearances || [];
  const days = [...new Set(appearances.map(a => a.day))];

  const badge = showBadge
    ? `<div class="spk-card-badge"><span class="spk-badge-icon">${_spkIcon("activation")}</span>Featured</div>`
    : "";

  // Path is derived from the speaker id in speakers.js. There is
  // no imagePath on the record.
  const src = (typeof getSpeakerPhoto === "function") ? getSpeakerPhoto(speaker) : "";
  const photo = src
    ? `<img src="${src}" alt="${speaker.name}" loading="lazy" />`
    : `<div class="spk-card-initials">${_initials(speaker.name)}</div>`;

  // Flag emoji from the speaker's country, via data/speakers.js.
  // A record with no country simply renders nothing.
  const flagChar = (typeof getCountryFlag === "function") ? getCountryFlag(speaker) : "";
  const flag = flagChar
    ? `<span class="spk-card-flag" aria-label="${speaker.country}">${flagChar}</span>`
    : "";

  return `
    <div class="spk-card"
         data-track="${trackNums.join(",") || "opening"}"
         data-days="${days.join(",")}"
         onclick="openPopup('${speaker.id}')">
      ${badge}
      <div class="spk-card-photo">${photo}</div>
      <div class="spk-card-info">
        <div class="spk-card-name">${speaker.name}${flag}</div>
        <div class="spk-card-title">${speaker.title}</div>
        ${speaker.company ? `
        <div class="spk-card-company">${speaker.company}</div>` : ""}
      </div>
    </div>`;
}


/* ── POPUP MARKUP ─────────────────────────────────────────── */

function injectSpeakerPopup() {
  const mount = document.getElementById("speaker-popup");
  if (!mount || mount.dataset.rendered) return;

  mount.innerHTML = `
    <div class="spk-overlay" id="spk-overlay" onclick="if(event.target===this)closePopup()">
      <div class="spk-popup">
        <button class="spk-popup-close" onclick="closePopup()" aria-label="Close">${_spkCloseIcon()}</button>
        <div class="spk-popup-photo-col">
          <div class="spk-popup-img"><img id="popup-img" src="" alt="" /></div>
          <div class="spk-popup-links" id="popup-links"></div>
        </div>
        <div class="spk-popup-content">
          <div>
            <div class="spk-popup-name" id="popup-name"></div>
            <div class="spk-popup-role" id="popup-role"></div>
            <div class="spk-popup-tracks" id="popup-track-wrap"></div>
          </div>
          <div>
            <div class="spk-popup-micro">About</div>
            <div class="spk-popup-bio" id="popup-bio"></div>
          </div>
          <div id="popup-sessions-wrap">
            <div class="spk-popup-micro">Sessions</div>
            <div id="popup-sessions"></div>
          </div>
        </div>
      </div>
    </div>`;

  mount.dataset.rendered = "1";
}


/* ── OPEN / CLOSE ─────────────────────────────────────────── */

function openPopup(id) {
  if (typeof SIGNAL_SPEAKERS_MAP === "undefined") return;
  const s = SIGNAL_SPEAKERS_MAP[id];
  if (!s) return;

  injectSpeakerPopup();   // no-op if it is already there

  const img = document.getElementById("popup-img");
  img.src = (typeof getSpeakerPhoto === "function" && getSpeakerPhoto(s)) || "";
  img.alt = s.name;

  document.getElementById("popup-name").textContent = s.name;
  document.getElementById("popup-role").textContent = s.title + (s.company ? " · " + s.company : "");
  document.getElementById("popup-bio").textContent = s.bio || "";

  // Track pills — .track-pill.track-N is already styled in the CSS
  const trackNums = (typeof getSpeakerTrackNumbers === "function") ? getSpeakerTrackNumbers(s) : [];
  document.getElementById("popup-track-wrap").innerHTML =
    trackNums.map(n => {
      const t = (typeof SIGNAL_TRACKS_BY_NUMBER !== "undefined") ? SIGNAL_TRACKS_BY_NUMBER[n] : null;
      return t ? `<span class="track-pill track-${n}"><span class="tl-icon">${_spkIcon(SPK_TRACK_ICON_KEYS[n])}</span>${t.shortName}</span>` : "";
    }).join("");

  // Profile links, icons from data/icons.js
  const links = [];
  if (s.bmProfile) links.push(
    `<a class="spk-popup-link bm" href="${s.bmProfile}" target="_blank" rel="noopener">
       ${_spkIcon("brainsmingle")} View on BrainsMingle
     </a>`);
  if (s.linkedin) links.push(
    `<a class="spk-popup-link li" href="${s.linkedin}" target="_blank" rel="noopener">
       ${_spkIcon("linkedin")} LinkedIn Profile
     </a>`);
  document.getElementById("popup-links").innerHTML = links.join("");

  /* Sessions from appearances. A page that does not load agenda.js
     has no SIGNAL_AGENDA, so the block hides itself rather than
     throwing. Load agenda.js if you want sessions to show. */
  const wrap = document.getElementById("popup-sessions-wrap");
  const list = document.getElementById("popup-sessions");
  const hasAgenda = (typeof SIGNAL_AGENDA !== "undefined");
  const appearances = hasAgenda ? (s.appearances || []).filter(a => a.sessionId) : [];

  wrap.classList.toggle("is-hidden", appearances.length === 0);
  list.innerHTML = appearances.map(a => {
    const session = SIGNAL_AGENDA.find(ag => ag.id === a.sessionId);
    const title = (session && session.title) ? session.title : SPK_PLACEHOLDER_SESSION;
    return `
      <div class="spk-session-item">
        <div class="spk-session-day">Day ${a.day}</div>
        <div class="spk-session-title">${title}</div>
      </div>`;
  }).join("");

  document.getElementById("spk-overlay").classList.add("open");
  document.body.classList.add("modal-open");
}

function closePopup() {
  const overlay = document.getElementById("spk-overlay");
  if (overlay) overlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}


/* ── BOOT ─────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", injectSpeakerPopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closePopup();
});
