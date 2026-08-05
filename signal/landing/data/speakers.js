/**
 * speakers.js — AI Summit 2026
 * Single source of truth for every speaker.
 *
 * ── Fields ─────────────────────────────────────────────────
 * id           "spk-NNN". Also drives the photo filename.
 * order        Display order, low to high. Numbered in tens so a
 *              speaker can be slotted between two others without
 *              renumbering the rest. SIGNAL_SPEAKERS sorts itself
 *              on load, so every page shows the same order.
 * countryCode  ISO 3166-1 alpha-2, uppercase. Two letters, because
 *              flag emoji are built from alpha-2 and only alpha-2.
 * featured     Shows the "Featured" badge on the speakers page.
 * showOnHome    Appears in the home page lineup. Separate from
 *               featured on purpose: the badge and the shortlist
 *               are different decisions. Flip this any time to
 *               change who the home page shows.
 * photo        Optional override. Omit it and the photo is derived
 *              from the id: spk-001 uses assets/speakers/001.png.
 *              Set it to null for a speaker with no headshot, and
 *              the render falls back to initials.
 * bio          Null until written. Every render guards for this.
 * appearances  Sessions this speaker is in. Empty until the agenda
 *              is scheduled.
 *
 * ── Track numbers ──────────────────────────────────────────
 *   1 = L&D   2 = Creative   3 = Startups   4 = Business   5 = Tech
 *   null = Opening Day (Day 1), no track
 *
 * appearances[].trackNumber mirrors agenda.js.
 * appearances[].sessionId references agenda.js session IDs.
 *
 * ── Photo spec ─────────────────────────────────────────────
 *   600 x 800, 3:4 portrait, under 100KB. Cropped with the eyes
 *   about a third down. Rendered greyscale, colour on hover.
 *
 * ── Access ─────────────────────────────────────────────────
 *   SIGNAL_SPEAKERS
 *   SIGNAL_SPEAKERS_MAP        keyed by id
 *   getSpeakerPhoto(speaker)
 *   getCountryFlag(speaker)
 *   getSpeakersOrdered(limit)
 *   getHomepageSpeakers(limit)
 *   getSpeakersByTrack(trackNumber)
 *   getSpeakersByDay(day)
 *   getSpeakersBySession(sessionId)
 *   getFeaturedSpeakers()
 *   getSpeakerTrackNumbers(speaker)
 */


// ─────────────────────────────────────────
// PHOTOS
// Named after the numeric part of the id, so every record stays
// clean and a photo can never end up attached to the wrong person.
// ─────────────────────────────────────────

const SPEAKER_PHOTO_BASE = "assets/speakers/";

/* How many the home page lineup shows. Six fits one row inside the
   1200px container. Set to 0 for no cap. */
const HOME_SPEAKER_LIMIT = 10;

function getSpeakerPhoto(speaker) {
  if (!speaker) return null;
  if (speaker.photo === null) return null;
  if (speaker.photo) return SPEAKER_PHOTO_BASE + speaker.photo;
  return SPEAKER_PHOTO_BASE + speaker.id.replace("spk-", "") + ".png";
}


// ─────────────────────────────────────────
// FLAGS
// A flag emoji is two regional indicator symbols, one per letter
// of the alpha-2 code. "EG" becomes the Egyptian flag. Returns an
// empty string when there is no code, so it is safe to inline.
// ─────────────────────────────────────────

function getCountryFlag(speaker) {
  const code = speaker && speaker.countryCode;
  if (!code || code.length !== 2) return "";
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)
  );
}


// ─────────────────────────────────────────
// SPEAKERS
// ─────────────────────────────────────────

const SIGNAL_SPEAKERS = [

  {
    id          : "spk-001",
    order       : 5,
    name        : "Ameer Sherif",
    title       : "Founder & Chairman",
    company     : "BasharSoft",
    country     : "Egypt",
    countryCode : "EG",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/ameersherif/",
    bmProfile   : "https://brainsmingle.com/ameer",
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-002",
    order       : 1,
    name        : "Amr Awadallah",
    title       : "Tech Entrepreneur",
    company     : "Vectara, Cloudera and Aptivia",
    country     : "USA",
    countryCode : "US",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/awadallah/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-003",
    order       : 2,
    name        : "Kate Barker",
    title       : "CXO Advisory Leader and Future of Work Strategist",
    company     : "Independent, formerly PwC and EY",
    country     : "UAE",
    countryCode : "AE",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/drkatebarker/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-004",
    order       : 6,
    name        : "Ashraf Bacheet",
    title       : "Managing Director",
    company     : "Spotta",
    country     : "Egypt",
    countryCode : "EG",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/bacheet/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-005",
    order       : 10,
    name        : "Yousef Hosni",
    title       : "AI Consultant",
    company     : "To Data & Beyond",
    country     : "Finland",
    countryCode : "FI",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/youssef-hosni-b2960b135/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-006",
    order       : 4,
    name        : "Maged Ghoneima",
    title       : "Angel Investor",
    company     : "M-Empire Angels",
    country     : "Egypt",
    countryCode : "EG",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/mghoneima/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-007",
    order       : 3,
    name        : "Hany Elmalky",
    title       : "Product & Technology Leader",
    company     : "Google",
    country     : "USA",
    countryCode : "US",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/helmalky/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-008",
    order       : 7,
    name        : "Taha Ali",
    title       : "CEO",
    company     : "GroHub",
    country     : "Egypt",
    countryCode : "EG",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/eng-taha-ali/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-009",
    order       : 8,
    name        : "Nadeem Abdin",
    title       : "Partner & VP Business Development",
    company     : "AImpulse.io",
    country     : "Egypt",
    countryCode : "EG",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/nadeem-abdin-7bb89524/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-010",
    order       : 9,
    name        : "Hend El Damaty",
    title       : "AI Consultant",
    company     : "AI Global",
    country     : "Germany",
    countryCode : "DE",
    bio         : null,
    linkedin    : "https://www.linkedin.com/in/hend-eldamaty/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  }

];


// ─────────────────────────────────────────
// DISPLAY ORDER
// Sorted once, on load, so every page and every helper below
// inherits the same order. Anything without an order falls to
// the end rather than the front.
// ─────────────────────────────────────────

SIGNAL_SPEAKERS.sort((a, b) =>
  (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
);


// ─────────────────────────────────────────
// LOOKUP MAP
// ─────────────────────────────────────────

const SIGNAL_SPEAKERS_MAP = SIGNAL_SPEAKERS.reduce((map, speaker) => {
  map[speaker.id] = speaker;
  return map;
}, {});


// ─────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────

/**
 * Speakers in display order, optionally capped.
 * Used by the home page lineup, which shows the first few.
 * @param {number} [limit]
 */
function getSpeakersOrdered(limit) {
  return typeof limit === "number" ? SIGNAL_SPEAKERS.slice(0, limit) : SIGNAL_SPEAKERS.slice();
}

/**
 * Speakers chosen for the home page lineup, in display order.
 * Falls back to every speaker if none are flagged, so the section
 * can never render empty.
 * @param {number} [limit]  HOME_SPEAKER_LIMIT by default
 */
function getHomepageSpeakers(limit) {
  const picked = SIGNAL_SPEAKERS.filter(s => s.showOnHome === true);
  const list = picked.length ? picked : SIGNAL_SPEAKERS.slice();
  const cap = typeof limit === "number" ? limit : HOME_SPEAKER_LIMIT;
  return cap > 0 ? list.slice(0, cap) : list;
}

function getSpeakersByTrack(trackNumber) {
  return SIGNAL_SPEAKERS.filter(s =>
    s.appearances.some(a => a.trackNumber === trackNumber)
  );
}

function getSpeakersByDay(day) {
  return SIGNAL_SPEAKERS.filter(s =>
    s.appearances.some(a => a.day === day)
  );
}

function getSpeakersBySession(sessionId) {
  return SIGNAL_SPEAKERS.filter(s =>
    s.appearances.some(a => a.sessionId === sessionId)
  );
}

function getFeaturedSpeakers() {
  return SIGNAL_SPEAKERS.filter(s => s.featured === true);
}

/**
 * Unique trackNumbers a speaker appears in. Opening Day entries
 * carry a null trackNumber and are excluded.
 * Used to render track pills on speaker cards.
 */
function getSpeakerTrackNumbers(speaker) {
  const nums = speaker.appearances
    .map(a => a.trackNumber)
    .filter(n => n !== null);
  return [...new Set(nums)];
}
