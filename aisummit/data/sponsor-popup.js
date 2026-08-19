/* ============================================================
   AI Summit — Sponsor & Partner Popup
   sponsor-popup.js · The profile popup every logo on the
   recognition wall opens.

     <script src="data/sponsor-popup.js"></script>

   Load AFTER sponsors.js, tracks.js and icons.js.

   The overlay markup is injected into a mount div, the same way
   layout.js handles the header and footer, so the page carries
   no copy of it:

     <div id="sponsor-popup"></div>

   ════════════════════════════════════════════════════════════
   WHAT IT SHOWS

   Logo, organisation name, tagline, and the tier or partner
   label ("Main Sponsor", "Community Partner"). Then up to two
   links: the website, and the organisation on BrainsMingle.

   The label comes from SIGNAL_SPONSOR_TIERS for sponsors and
   from partnerType for community partners, because a partner's
   type is set per record in the Brands tab rather than being a
   fixed tier.
   ============================================================ */


/* ── HELPERS ──────────────────────────────────────────────── */

/* SVG straight from data/icons.js. This file injects its markup
   on DOMContentLoaded and registers after icons.js, so the icon
   injector has already swept by the time the popup exists.
   Pulling the SVG in directly is the only thing that works. */
function _sprIcon(key) {
  return (typeof SIGNAL_ICONS !== "undefined" && SIGNAL_ICONS[key]) ? SIGNAL_ICONS[key] : "";
}

function _sprCloseIcon() {
  return _sprIcon("close") ||
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"' +
    ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
    ' stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
}

function _sprGlobeIcon() {
  return _sprIcon("globe") ||
    '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"' +
    ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
    ' stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>' +
    '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
}

/* "Main Sponsor", "Track Sponsor · AI in Tech", "Community Partner".
   Track sponsors get the track name appended, since "Track Sponsor"
   alone does not say which one. */
function sponsorLabel(record) {
  if (!record) return "";
  if (record.tier === "community") return record.partnerType || "Community Partner";

  var meta = (typeof SIGNAL_SPONSOR_TIERS !== "undefined") ? SIGNAL_SPONSOR_TIERS[record.tier] : null;
  var label = (meta && meta.label) || record.tier || "";

  if (record.tier === "track" && record.trackNumber &&
      typeof SIGNAL_TRACKS_BY_NUMBER !== "undefined") {
    var t = SIGNAL_TRACKS_BY_NUMBER[record.trackNumber];
    if (t) label += " · " + (t.shortName || t.fullName);
  }
  return label;
}


/* ── MARKUP ───────────────────────────────────────────────── */

function injectSponsorPopup() {
  var mount = document.getElementById("sponsor-popup");
  if (!mount || mount.dataset.rendered) return;

  mount.innerHTML =
    '<div class="spr-overlay" id="spr-overlay" onclick="if(event.target===this)closeSponsorPopup()">' +
      '<div class="spr-popup" role="dialog" aria-modal="true" aria-labelledby="spr-name">' +
        '<button class="spr-popup-close" onclick="closeSponsorPopup()" aria-label="Close">' +
          _sprCloseIcon() +
        '</button>' +
        '<div class="spr-popup-logo"><img id="spr-logo" src="" alt="" /></div>' +
        '<div class="spr-popup-body">' +
          '<div class="spr-popup-kind" id="spr-kind"></div>' +
          '<div class="spr-popup-name" id="spr-name"></div>' +
          '<div class="spr-popup-tagline" id="spr-tagline"></div>' +
          '<div class="spr-popup-links" id="spr-links"></div>' +
        '</div>' +
      '</div>' +
    '</div>';

  mount.dataset.rendered = "1";
}


/* ── OPEN / CLOSE ─────────────────────────────────────────── */

function openSponsorPopup(id) {
  if (typeof SIGNAL_SPONSORS_MAP === "undefined") return;
  var s = SIGNAL_SPONSORS_MAP[id];
  if (!s) return;

  injectSponsorPopup();   // no-op once rendered

  var logo = document.getElementById("spr-logo");
  logo.src = s.logoPath || "";
  logo.alt = s.name || "";

  document.getElementById("spr-kind").textContent = sponsorLabel(s);

  /* Slots are published before the brand is announced, so a record
     can have a logo and no name yet. */
  document.getElementById("spr-name").textContent = s.name || "To be announced";

  var tagline = document.getElementById("spr-tagline");
  tagline.textContent = s.tagline || "";
  tagline.classList.toggle("is-hidden", !s.tagline);

  var links = [];
  if (s.website) links.push(
    '<a class="spr-popup-link web" href="' + s.website + '" target="_blank" rel="noopener">' +
      _sprGlobeIcon() + ' Visit website</a>');
  if (s.bmCommunityLink) links.push(
    '<a class="spr-popup-link bm" href="' + s.bmCommunityLink + '" target="_blank" rel="noopener">' +
      _sprIcon("brainsmingle") + ' View on BrainsMingle</a>');
  document.getElementById("spr-links").innerHTML = links.join("");

  document.getElementById("spr-overlay").classList.add("open");
  document.body.classList.add("modal-open");
}

function closeSponsorPopup() {
  var overlay = document.getElementById("spr-overlay");
  if (overlay) overlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}


/* ── BOOT ─────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", injectSponsorPopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeSponsorPopup();
});
