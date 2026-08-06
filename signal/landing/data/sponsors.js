/**
 * sponsors.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the ValidatedOrg tab, rows with readyToPublish ticked.
 * Generated 2026-08-06 23:57 · 19 sponsors, 7 partners.
 *
 * Unsold slots are not listed. The wall works out how many are open
 * from SIGNAL_SPONSOR_TIERS[tier].slots minus the confirmed count.
 *
 * logoPath is derived from the id and computed on load:
 *   sponsors  assets/sponsors/trk-002.png
 *   partners  assets/partners/prt-003.png
 *
 * icon is a key in data/icons.js, or null.
 * featured partners render in their own group, above the community rows.
 */

const SPONSOR_LOGO_BASE = "assets/sponsors/";
const PARTNER_LOGO_BASE = "assets/partners/";

function getSponsorLogo(record) {
  if (!record || record.confirmed !== true) return null;
  if (record.logo === null) return null;
  const base = record.tier === "community" ? PARTNER_LOGO_BASE : SPONSOR_LOGO_BASE;
  return base + (record.logo || record.id + ".png");
}

const SIGNAL_SPONSOR_TIERS = {
  main: { label: "Main Sponsor", slots: 1, cssClass: "tier-main", color: "#6B3EF5" },
  gold: { label: "Gold Sponsor", slots: 2, cssClass: "tier-gold", color: "#F5A623" },
  silver: { label: "Silver Sponsor", slots: 3, cssClass: "tier-silver", color: "#C0C0C0" },
  bronze: { label: "Bronze Sponsor", slots: 5, cssClass: "tier-bronze", color: "#CD7F32" },
  track: { label: "Track Sponsor", slots: 5, cssClass: "tier-track", color: null },
  launchpad: { label: "AI Summit Launchpad Sponsor", slots: 1, cssClass: "tier-launchpad", color: "#6B3EF5" },
  talent: { label: "AI Summit Talent Sponsor", slots: 1, cssClass: "tier-talent", color: "#00E8A2" },
  networking: { label: "Speed Networking Day Sponsor", slots: 1, cssClass: "tier-networking", color: "#E8F200" },
  community: { label: "Community Partners", slots: null, cssClass: "tier-community", color: "#4A4A6A" }
};

const SIGNAL_PARTNER_TYPES = [
  "Tech Partner",
  "Recruitment Partner",
  "Career Partner",
  "Community Partner",
  "Ecosystem Partner"
];

const SIGNAL_SPONSORS = [
  { id: "main", name: null, tier: "main", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-001", name: null, tier: "gold", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-002", name: null, tier: "gold", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-001", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-002", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-003", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-001", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-002", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-003", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-004", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-005", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-001", name: null, tier: "track", icon: null, trackNumber: 1, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-002", name: null, tier: "track", icon: null, trackNumber: 2, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-003", name: null, tier: "track", icon: null, trackNumber: 3, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-004", name: null, tier: "track", icon: null, trackNumber: 4, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-005", name: null, tier: "track", icon: null, trackNumber: 5, special: null, partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-001", name: null, tier: "launchpad", icon: null, trackNumber: null, special: "launchpad", partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-002", name: null, tier: "talent", icon: null, trackNumber: null, special: "talent", partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-003", name: null, tier: "networking", icon: null, trackNumber: null, special: "networking", partnerType: null, confirmed: true, featured: false, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
];

const SIGNAL_PARTNERS = [
  { id: "prt-001", name: "AI Global", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, featured: false, logo: "prt-001.png", logoURL: "s", website: "https://www.linkedin.com/company/ai_global/", bmCommunityLink: null, tagline: "Turning Data Into Direction. Turning AI Into Impact." },
  { id: "prt-008", name: "WUZZUF", tier: "community", icon: "recruiter", trackNumber: null, special: null, partnerType: "Recruitment Partner", confirmed: true, featured: true, logo: "prt-008.png", logoURL: "s", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "prt-009", name: "iCareer", tier: "community", icon: "practitioner", trackNumber: null, special: null, partnerType: "Career Partner", confirmed: true, featured: true, logo: "prt-009.png", logoURL: "s", website: "https://icareer.ai/", bmCommunityLink: "https://brainsmingle.com/icareer", tagline: "Revolutionizing Education and Employment Ecosystems for All" },
  { id: "prt-006", name: "Digital Product Community", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, featured: false, logo: "prt-006.png", logoURL: "s", website: "https://digital-products.online/", bmCommunityLink: null, tagline: "Where Products, People, and Innovation Meet" },
  { id: "prt-007", name: "Business Lobby", tier: "community", icon: "community", trackNumber: null, special: null, partnerType: "Community Partner", confirmed: true, featured: false, logo: "prt-007.png", logoURL: "s", website: "https://businesslobby.community/", bmCommunityLink: null, tagline: "Where Connections Turn into Opportunities" },
  { id: "prt-002", name: "MEmpire", tier: "community", icon: "grid", trackNumber: null, special: null, partnerType: "Ecosystem Partner", confirmed: true, featured: true, logo: "prt-002.png", logoURL: "s", website: "https://www.mempireangels.com/", bmCommunityLink: null, tagline: "Where MENA's most ambitious operators find their first believer." },
  { id: "prt-003", name: "Startup Egypt", tier: "community", icon: "grid", trackNumber: null, special: null, partnerType: "Ecosystem Partner", confirmed: true, featured: true, logo: "prt-003.png", logoURL: "s", website: "https://startupegypt.org.eg/", bmCommunityLink: null, tagline: "We Empower Egyptian Founders to Build the Future" }
];

SIGNAL_SPONSORS.forEach(s => { s.logoPath = getSponsorLogo(s); });
SIGNAL_PARTNERS.forEach(p => { p.logoPath = getSponsorLogo(p); });

const SIGNAL_SPONSORS_MAP = SIGNAL_SPONSORS
  .concat(SIGNAL_PARTNERS)
  .reduce((map, s) => {
    map[s.id] = s;
    return map;
  }, {});

function getSponsorsByTier(tier) {
  if (tier === "community") return SIGNAL_PARTNERS.slice();
  return SIGNAL_SPONSORS.filter(s => s.tier === tier);
}

function getSponsorsByTrack(trackNumber) {
  return SIGNAL_SPONSORS.filter(s => s.trackNumber === trackNumber);
}

/* Community partners excluding the featured ones, which render in
   their own group above. */
function getCommunityPartners() {
  return SIGNAL_PARTNERS.filter(p => p.featured !== true);
}

function getFeaturedPartners() {
  return SIGNAL_PARTNERS.filter(p => p.featured === true);
}

function getFeaturedSponsors() {
  return SIGNAL_SPONSORS.filter(s => s.featured === true);
}

function getPartnersByType(type) {
  return SIGNAL_PARTNERS.filter(p => p.partnerType === type);
}

function getPartnerTypesInUse() {
  return SIGNAL_PARTNER_TYPES.filter(type =>
    SIGNAL_PARTNERS.some(p => p.partnerType === type && p.featured !== true));
}

function getTierSponsors() {
  return SIGNAL_SPONSORS.filter(s =>
    ["main", "gold", "silver", "bronze"].includes(s.tier));
}

function getSpecialSponsors() {
  return SIGNAL_SPONSORS.filter(s =>
    ["launchpad", "talent", "networking"].includes(s.tier));
}

function getOpenSlots(tier) {
  const meta = SIGNAL_SPONSOR_TIERS[tier];
  if (!meta || meta.slots === null) return null;
  return Math.max(0, meta.slots - getSponsorsByTier(tier).length);
}
