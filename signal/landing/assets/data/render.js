/**
 * render.js — Signal: AI
 * All HTML render functions. No globals — pure functions only.
 * Each page calls only the functions it needs.
 *
 * Dependencies (must be loaded before render.js on any page that uses it):
 *   tracks.js   → SIGNAL_TRACKS_MAP
 *   speakers.js → SIGNAL_SPEAKERS_MAP, getSpeakerTrackSlugs()
 *   sponsors.js → SIGNAL_SPONSOR_TIERS
 *   agenda.js   → (used by renderSessionCard)
 *
 * Page → functions used:
 *   home.html      → renderSpeakerCardMini, renderSponsorLogo, renderTrackPill
 *   speakers.html  → renderSpeakerCardFull, renderTrackPill
 *   agenda.html    → renderSessionCard, renderSpeakerChip, renderTrackPill, renderDayTab
 *   sponsors.html  → renderSponsorCard, renderCommunityPartnerLogo, renderTrackPill
 *   tracks.html    → renderTrackCard, renderTrackPill
 */


// ─────────────────────────────────────────
// SHARED UTILITIES
// ─────────────────────────────────────────

/**
 * Safely get a track object from SIGNAL_TRACKS_MAP.
 * Returns a fallback neutral object if slug is null or not found.
 * @param {string|null} trackSlug
 */
function _getTrack(trackSlug) {
  if (!trackSlug) return { color: "#4A4A6A", accentRgb: "74,74,106", cssClass: "", shortName: "", fullName: "" };
  return SIGNAL_TRACKS_MAP[trackSlug] || { color: "#4A4A6A", accentRgb: "74,74,106", cssClass: "", shortName: trackSlug, fullName: trackSlug };
}

/**
 * Render a placeholder avatar when no image is available.
 * @param {string} name — speaker name for initials
 */
function _renderInitialsAvatar(name) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase();
  return `<div class="speaker-avatar-initials">${initials}</div>`;
}


// ─────────────────────────────────────────
// TRACK PILL
// Used by: home.html, speakers.html, agenda.html, sponsors.html, tracks.html
// ─────────────────────────────────────────

/**
 * Render a single track pill/badge.
 * @param {string} trackSlug
 * @param {string} [size="md"] — "sm" | "md"
 */
function renderTrackPill(trackSlug, size = "md") {
  const track = _getTrack(trackSlug);
  const r = track.accentRgb;
  return `
    <span class="track-pill track-pill--${size} ${track.cssClass}"
          style="color:${track.color};border-color:rgba(${r},0.30);background:rgba(${r},0.08);">
      <span class="track-pill__dot" style="background:${track.color};"></span>
      ${track.shortName}
    </span>`.trim();
}


// ─────────────────────────────────────────
// SPEAKER CARD — MINI
// Used by: home.html (featured speakers section)
// Compact card: photo, name, title, company, track pill(s)
// ─────────────────────────────────────────

/**
 * @param {object} speaker — from SIGNAL_SPEAKERS
 */
function renderSpeakerCardMini(speaker) {
  const trackSlugs  = getSpeakerTrackSlugs(speaker);
  const trackPills  = trackSlugs.map(slug => renderTrackPill(slug, "sm")).join("");
  const avatar      = speaker.imagePath
    ? `<img class="speaker-mini__photo" src="${speaker.imagePath}" alt="${speaker.name}" loading="lazy" />`
    : _renderInitialsAvatar(speaker.name);

  return `
    <div class="speaker-card speaker-card--mini">
      <div class="speaker-mini__photo-wrap">${avatar}</div>
      <div class="speaker-mini__body">
        <div class="speaker-mini__name">${speaker.name}</div>
        <div class="speaker-mini__meta">${speaker.title}${speaker.company ? ` · ${speaker.company}` : ""}</div>
        ${trackPills ? `<div class="speaker-mini__tracks">${trackPills}</div>` : ""}
      </div>
    </div>`.trim();
}


// ─────────────────────────────────────────
// SPEAKER CARD — FULL
// Used by: speakers.html
// Full card: large photo, name, title, company, country, bio, track pills, linkedin
// ─────────────────────────────────────────

/**
 * @param {object} speaker — from SIGNAL_SPEAKERS
 */
function renderSpeakerCardFull(speaker) {
  const trackSlugs  = getSpeakerTrackSlugs(speaker);
  const trackPills  = trackSlugs.map(slug => renderTrackPill(slug, "md")).join("");
  const avatar      = speaker.imagePath
    ? `<img class="speaker-full__photo" src="${speaker.imagePath}" alt="${speaker.name}" loading="lazy" />`
    : _renderInitialsAvatar(speaker.name);

  const linkedinBtn = speaker.linkedin
    ? `<a class="speaker-full__linkedin" href="${speaker.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>`
    : "";

  const days = [...new Set(speaker.appearances.map(a => a.day))].sort();
  const dayLabels = days.map(d => `Day ${d}`).join(" · ");

  return `
    <div class="speaker-card speaker-card--full">
      <div class="speaker-full__photo-wrap">${avatar}</div>
      <div class="speaker-full__body">
        <div class="speaker-full__tracks">${trackPills}</div>
        <div class="speaker-full__name">${speaker.name}</div>
        <div class="speaker-full__title">${speaker.title}${speaker.company ? ` · ${speaker.company}` : ""}</div>
        ${speaker.country ? `<div class="speaker-full__country">${speaker.country}</div>` : ""}
        ${speaker.bio ? `<p class="speaker-full__bio">${speaker.bio}</p>` : ""}
        <div class="speaker-full__footer">
          <span class="speaker-full__days">${dayLabels}</span>
          ${linkedinBtn}
        </div>
      </div>
    </div>`.trim();
}


// ─────────────────────────────────────────
// SPEAKER CHIP — INLINE
// Used by: agenda.html (inside session cards)
// Minimal: photo thumbnail + name only
// ─────────────────────────────────────────

/**
 * @param {string} speakerId — looked up via SIGNAL_SPEAKERS_MAP
 */
function renderSpeakerChip(speakerId) {
  const speaker = SIGNAL_SPEAKERS_MAP[speakerId];
  if (!speaker) return "";

  const avatar = speaker.imagePath
    ? `<img class="speaker-chip__photo" src="${speaker.imagePath}" alt="${speaker.name}" loading="lazy" />`
    : `<div class="speaker-chip__initials">${speaker.name.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase()}</div>`;

  return `
    <span class="speaker-chip">
      ${avatar}
      <span class="speaker-chip__name">${speaker.name}</span>
    </span>`.trim();
}


// ─────────────────────────────────────────
// SESSION CARD
// Used by: agenda.html (track grid cells)
// ─────────────────────────────────────────

/**
 * @param {object} session — from SIGNAL_AGENDA
 */
function renderSessionCard(session) {
  const track       = _getTrack(session.trackSlug);
  const speakerChips = session.speakerIds.map(id => renderSpeakerChip(id)).join("");
  const titleText   = session.title || "Session to be announced";
  const isPlaceholder = !session.title;

  return `
    <div class="ag-session ${track.trackClass || ""}" data-session-id="${session.id}">
      <div class="ag-session-title${isPlaceholder ? " ag-session-title--placeholder" : ""}">${titleText}</div>
      ${speakerChips
        ? `<div class="ag-session-speakers">${speakerChips}</div>`
        : `<div class="ag-session-speaker ag-session-speaker--placeholder">Speaker to be announced</div>`
      }
    </div>`.trim();
}


// ─────────────────────────────────────────
// DAY TAB
// Used by: agenda.html (tab switcher)
// ─────────────────────────────────────────

/**
 * @param {object} day — from SIGNAL_DAYS
 * @param {boolean} isActive
 */
function renderDayTab(day, isActive = false) {
  return `
    <div class="ag-tab${isActive ? " active" : ""}"
         onclick="switchDay('${day.domId}', this)">
      ${day.tabLabel}
      <span class="ag-tab-date">${day.tabSublabel}</span>
    </div>`.trim();
}


// ─────────────────────────────────────────
// SPONSOR LOGO
// Used by: home.html (logo strip — minimal)
// ─────────────────────────────────────────

/**
 * @param {object} sponsor — from SIGNAL_SPONSORS
 */
function renderSponsorLogo(sponsor) {
  const inner = sponsor.logoPath
    ? `<img class="sponsor-logo__img" src="${sponsor.logoPath}" alt="${sponsor.name}" loading="lazy" />`
    : `<span class="sponsor-logo__name">${sponsor.name}</span>`;

  return `
    <a class="sponsor-logo sponsor-logo--${sponsor.tier}"
       href="${sponsor.website || "#"}" target="_blank" rel="noopener"
       title="${sponsor.name}">
      ${inner}
    </a>`.trim();
}


// ─────────────────────────────────────────
// SPONSOR CARD — FULL
// Used by: sponsors.html
// Full card: logo, name, tier badge, tagline, track pill (if track sponsor)
// ─────────────────────────────────────────

/**
 * @param {object} sponsor — from SIGNAL_SPONSORS
 */
function renderSponsorCard(sponsor) {
  const tierMeta    = SIGNAL_SPONSOR_TIERS[sponsor.tier] || {};
  const trackPill   = sponsor.trackSlug ? renderTrackPill(sponsor.trackSlug, "sm") : "";
  const logoBlock   = sponsor.logoPath
    ? `<img class="sponsor-card__logo" src="${sponsor.logoPath}" alt="${sponsor.name}" loading="lazy" />`
    : `<div class="sponsor-card__logo-placeholder">${sponsor.name}</div>`;

  return `
    <div class="sponsor-card sponsor-card--${sponsor.tier}">
      <div class="sponsor-card__logo-wrap">${logoBlock}</div>
      <div class="sponsor-card__body">
        <div class="sponsor-card__header">
          <span class="sponsor-card__name">${sponsor.name}</span>
          <span class="sponsor-card__tier" style="color:${tierMeta.color || "#fff"};">${tierMeta.label || sponsor.tier}</span>
        </div>
        ${trackPill ? `<div class="sponsor-card__track">${trackPill}</div>` : ""}
        ${sponsor.tagline ? `<p class="sponsor-card__tagline">${sponsor.tagline}</p>` : ""}
        ${sponsor.website
          ? `<a class="sponsor-card__link" href="${sponsor.website}" target="_blank" rel="noopener">Visit Website ↗</a>`
          : ""}
      </div>
    </div>`.trim();
}


// ─────────────────────────────────────────
// COMMUNITY PARTNER LOGO
// Used by: sponsors.html (partner grid)
// Minimal: logo only, linked
// ─────────────────────────────────────────

/**
 * @param {object} sponsor — community tier sponsor from SIGNAL_SPONSORS
 */
function renderCommunityPartnerLogo(sponsor) {
  const inner = sponsor.logoPath
    ? `<img class="partner-logo__img" src="${sponsor.logoPath}" alt="${sponsor.name}" loading="lazy" />`
    : `<span class="partner-logo__name">${sponsor.name}</span>`;

  return `
    <a class="partner-logo"
       href="${sponsor.website || "#"}" target="_blank" rel="noopener"
       title="${sponsor.name}">
      ${inner}
    </a>`.trim();
}


// ─────────────────────────────────────────
// TRACK CARD — FULL
// Used by: tracks.html
// Full track identity card: color bar, number, name, tagline, description, focus areas
// ─────────────────────────────────────────

/**
 * @param {object} track — from SIGNAL_TRACKS
 */
function renderTrackCard(track) {
  const focusPills = track.focusAreas
    .map(area => `<span class="track-card__focus-pill" style="color:${track.color};border-color:rgba(${track.accentRgb},0.25);">${area}</span>`)
    .join("");

  return `
    <div class="track-card ${track.cssClass}" style="border-left-color:${track.color};">
      <div class="track-card__number" style="color:${track.color};">Track 0${track.trackNumber}</div>
      <div class="track-card__name" style="color:${track.color};">${track.fullName}</div>
      <div class="track-card__tagline">${track.tagline}</div>
      <p class="track-card__desc">${track.longDescription}</p>
      <div class="track-card__focus">${focusPills}</div>
    </div>`.trim();
}
