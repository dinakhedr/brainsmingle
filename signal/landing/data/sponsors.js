/**
 * sponsors.js — AI Summit 2026
 * All sponsor and community partner objects.
 *
 * Logo paths use the same pattern as sponsors.html:
 *   Tier sponsors:      assets/sponsors/1.png … (Company01, Company02 …)
 *   Track sponsors:     assets/sponsors/track-{trackNumber}.png
 *   Special sponsors:   assets/sponsors/special-{type}.png
 *   Community partners: assets/partners/1.png … (Community01, Community02 …)
 *
 * trackNumber: null = tier/special sponsor (not track-specific)
 *             1–5 = track sponsor for that track
 *
 * Access: SIGNAL_SPONSORS
 *         SIGNAL_SPONSOR_TIERS
 *         SIGNAL_SPONSORS_MAP
 *         getSponsorsByTier(tier)
 *         getSponsorsByTrack(trackNumber)
 *         getCommunityPartners()
 *         getTierSponsors()
 *         getSpecialSponsors()
 *         getFeaturedSponsors()
 */


// ─────────────────────────────────────────
// TIER DEFINITIONS
// ─────────────────────────────────────────

const SIGNAL_SPONSOR_TIERS = {
  main: {
    label    : "Main Sponsor",
    slots    : 1,
    cssClass : "tier-main",
    color    : "#6B3EF5"
  },
  gold: {
    label    : "Gold Sponsor",
    slots    : 2,
    cssClass : "tier-gold",
    color    : "#F5A623"
  },
  silver: {
    label    : "Silver Sponsor",
    slots    : 3,
    cssClass : "tier-silver",
    color    : "#C0C0C0"
  },
  bronze: {
    label    : "Bronze Sponsor",
    slots    : 5,
    cssClass : "tier-bronze",
    color    : "#CD7F32"
  },
  track: {
    label    : "Track Sponsor",
    slots    : 5,
    cssClass : "tier-track",
    color    : null               // inherits from trackNumber via SIGNAL_TRACKS_BY_NUMBER
  },
  launchpad: {
    label    : "AI Summit Launchpad Sponsor",
    slots    : 1,
    cssClass : "tier-launchpad",
    color    : "#6B3EF5"
  },
  talent: {
    label    : "AI Summit Talent Sponsor",
    slots    : 1,
    cssClass : "tier-talent",
    color    : "#00E8A2"
  },
  networking: {
    label    : "Speed Networking Day Sponsor",
    slots    : 1,
    cssClass : "tier-networking",
    color    : "#E8F200"
  },
  community: {
    label    : "Community Partner",
    slots    : 20,
    cssClass : "tier-community",
    color    : "#4A4A6A"
  }
};


// ─────────────────────────────────────────
// SPONSORS & PARTNERS
// Placeholder data matching sponsors.html structure.
// Replace name/website/tagline when real sponsors are confirmed.
// ─────────────────────────────────────────

const SIGNAL_SPONSORS = [

  // ── Main Sponsor (1 slot)
  {
    id          : "spr-001",
    name        : "Company01",
    tier        : "main",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/main.png",
    website     : "#",
    tagline     : null,
    featured    : true
  },

  // ── Gold Sponsors (2 slots)
  {
    id          : "spr-002",
    name        : "Company02",
    tier        : "gold",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/gold-1.png",
    website     : "#",
    tagline     : null,
    featured    : true
  },
  {
    id          : "spr-003",
    name        : "Company03",
    tier        : "gold",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/gold-2.png",
    website     : "#",
    tagline     : null,
    featured    : true
  },

  // ── Silver Sponsors (3 slots)
  {
    id          : "spr-004",
    name        : "Company04",
    tier        : "silver",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/silver-1.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-005",
    name        : "Company05",
    tier        : "silver",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/silver-2.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-006",
    name        : "Company06",
    tier        : "silver",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/silver-3.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Bronze Sponsors (5 slots)
  {
    id          : "spr-007",
    name        : "Company07",
    tier        : "bronze",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/bronze-1.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-008",
    name        : "Company08",
    tier        : "bronze",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/bronze-2.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-009",
    name        : "Company09",
    tier        : "bronze",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/bronze-3.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-010",
    name        : "Company10",
    tier        : "bronze",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/bronze-4.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-011",
    name        : "Company11",
    tier        : "bronze",
    trackNumber : null,
    special     : null,
    logoPath    : "assets/sponsors/bronze-5.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Track Sponsors (5 slots — one per track)
  {
    id          : "spr-012",
    name        : "Company12",
    tier        : "track",
    trackNumber : 1,              // AI in L&D
    special     : null,
    logoPath    : "assets/sponsors/track-1.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-013",
    name        : "Company13",
    tier        : "track",
    trackNumber : 2,              // AI in Creative
    special     : null,
    logoPath    : "assets/sponsors/track-2.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-014",
    name        : "Company14",
    tier        : "track",
    trackNumber : 3,              // AI in Startups
    special     : null,
    logoPath    : "assets/sponsors/track-3.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-015",
    name        : "Company15",
    tier        : "track",
    trackNumber : 4,              // AI in Business
    special     : null,
    logoPath    : "assets/sponsors/track-4.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },
  {
    id          : "spr-016",
    name        : "Company16",
    tier        : "track",
    trackNumber : 5,              // AI in Tech
    special     : null,
    logoPath    : "assets/sponsors/track-5.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Signal Launchpad Sponsor (1 slot)
  {
    id          : "spr-017",
    name        : "Company17",
    tier        : "launchpad",
    trackNumber : null,
    special     : "launchpad",
    logoPath    : "assets/sponsors/special-launchpad.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Signal Talent Sponsor (1 slot)
  {
    id          : "spr-018",
    name        : "Company18",
    tier        : "talent",
    trackNumber : null,
    special     : "talent",
    logoPath    : "assets/sponsors/special-talent.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Speed Networking Day Sponsor (1 slot)
  {
    id          : "spr-019",
    name        : "Company19",
    tier        : "networking",
    trackNumber : null,
    special     : "networking",
    logoPath    : "assets/sponsors/special-networking.png",
    website     : "#",
    tagline     : null,
    featured    : false
  },

  // ── Community Partners (10 slots)
  { id: "spr-020", name: "Community01", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/1.png",  website: "#", tagline: null, featured: false },
  { id: "spr-021", name: "Community02", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/2.png",  website: "#", tagline: null, featured: false },
  { id: "spr-022", name: "Community03", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/3.png",  website: "#", tagline: null, featured: false },
  { id: "spr-023", name: "Community04", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/4.png",  website: "#", tagline: null, featured: false },
  { id: "spr-024", name: "Community05", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/5.png",  website: "#", tagline: null, featured: false },
  { id: "spr-025", name: "Community06", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/6.png",  website: "#", tagline: null, featured: false },
  { id: "spr-026", name: "Community07", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/7.png",  website: "#", tagline: null, featured: false },
  { id: "spr-027", name: "Community08", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/8.png",  website: "#", tagline: null, featured: false },
  { id: "spr-028", name: "Community09", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/9.png",  website: "#", tagline: null, featured: false },
  { id: "spr-029", name: "Community10", tier: "community", trackNumber: null, special: null, logoPath: "assets/partners/10.png", website: "#", tagline: null, featured: false },

];


// ─────────────────────────────────────────
// LOOKUP MAP
// ─────────────────────────────────────────

const SIGNAL_SPONSORS_MAP = SIGNAL_SPONSORS.reduce((map, s) => {
  map[s.id] = s;
  return map;
}, {});


// ─────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────

function getSponsorsByTier(tier) {
  return SIGNAL_SPONSORS.filter(s => s.tier === tier);
}

function getSponsorsByTrack(trackNumber) {
  return SIGNAL_SPONSORS.filter(s => s.trackNumber === trackNumber);
}

function getCommunityPartners() {
  return SIGNAL_SPONSORS.filter(s => s.tier === "community");
}

function getTierSponsors() {
  return SIGNAL_SPONSORS.filter(s =>
    ["main", "gold", "silver", "bronze"].includes(s.tier)
  );
}

function getSpecialSponsors() {
  return SIGNAL_SPONSORS.filter(s =>
    ["launchpad", "talent", "networking"].includes(s.tier)
  );
}

function getFeaturedSponsors() {
  return SIGNAL_SPONSORS.filter(s => s.featured === true);
}
