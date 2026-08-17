/**
 * sponsors.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the ValidatedOrg tab, rows with readyToPublish ticked.
 * Generated 2026-08-18 01:25 · 19 sponsors, 15 partners.
 *
 * Unsold slots are not listed. The wall works out how many are open
 * from SIGNAL_SPONSOR_TIERS[tier].slots minus the confirmed count.
 *
 * logoPath is derived from the id and computed on load:
 *   sponsors  assets/sponsors/trk-002.png
 *   partners  assets/partners/prt-003.png
 *
 * icon is a key in data/icons.js, or null.
 * group splits partners into wall sections: strategic, regional,
 * community. Sponsors carry group: null. Render the sections in
 * SIGNAL_PARTNER_GROUPS order via getPartnersByGroup().
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
  "Germany",
  "Recruitment Partner",
  "Career Partner",
  "Ecosystem Partner",
  "Tech Partner",
  "Community Partner",
  "Syria"
];

const SIGNAL_PARTNER_GROUPS = {
  strategic: { label: "Strategic Partners", order: 1 },
  regional: { label: "Regional Partners", order: 2 },
  community: { label: "Community Partners", order: 3 }
};

const SIGNAL_SPONSORS = [
  { id: "main", name: null, tier: "main", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-001", name: null, tier: "gold", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-002", name: null, tier: "gold", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-001", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-002", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-003", name: null, tier: "silver", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-001", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-002", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-003", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-004", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-005", name: null, tier: "bronze", icon: null, trackNumber: null, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-001", name: null, tier: "track", icon: null, trackNumber: 1, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-002", name: null, tier: "track", icon: null, trackNumber: 2, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-003", name: null, tier: "track", icon: null, trackNumber: 3, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-004", name: null, tier: "track", icon: null, trackNumber: 4, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-005", name: null, tier: "track", icon: null, trackNumber: 5, special: null, partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-001", name: null, tier: "launchpad", icon: null, trackNumber: null, special: "launchpad", partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-002", name: null, tier: "talent", icon: null, trackNumber: null, special: "talent", partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spl-003", name: null, tier: "networking", icon: null, trackNumber: null, special: "networking", partnerType: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
];

const SIGNAL_PARTNERS = [
  { id: "prt-001", name: "AI Global", tier: "community", icon: "globe", trackNumber: null, special: null, partnerType: "Germany", confirmed: true, group: "regional", logo: "prt-001.png", logoURL: "x", website: "https://www.linkedin.com/company/ai_global/", bmCommunityLink: null, tagline: "Turning Data Into Direction. Turning AI Into Impact." },
  { id: "prt-008", name: "WUZZUF", tier: "community", icon: "recruiter", trackNumber: null, special: null, partnerType: "Recruitment Partner", confirmed: true, group: "strategic", logo: "prt-008.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "prt-009", name: "iCareer", tier: "community", icon: "practitioner", trackNumber: null, special: null, partnerType: "Career Partner", confirmed: true, group: "strategic", logo: "prt-009.png", logoURL: "x", website: "https://icareer.ai/", bmCommunityLink: "https://brainsmingle.com/icareer", tagline: "Revolutionizing Education and Employment Ecosystems for All" },
  { id: "prt-002", name: "MEmpire", tier: "community", icon: "grid", trackNumber: null, special: null, partnerType: "Ecosystem Partner", confirmed: true, group: "strategic", logo: "prt-002.png", logoURL: "x", website: "https://www.mempireangels.com/", bmCommunityLink: null, tagline: "Where MENA's most ambitious operators find their first believer." },
  { id: "prt-005", name: "Dr. Ahmed El-Shamy", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, group: "community", logo: "prt-005.png", logoURL: "x", website: "https://elsha.my/", bmCommunityLink: null, tagline: "Better decisions at the intersection of risk, product and AI." },
  { id: "prt-006", name: "Digital Product Community", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, group: "community", logo: "prt-006.png", logoURL: "x", website: "https://digital-products.online/", bmCommunityLink: null, tagline: "Where Products, People, and Innovation Meet" },
  { id: "prt-007", name: "Business Lobby", tier: "community", icon: "community", trackNumber: null, special: null, partnerType: "Community Partner", confirmed: true, group: "community", logo: "prt-007.png", logoURL: "x", website: "https://businesslobby.community/", bmCommunityLink: null, tagline: "Where Connections Turn into Opportunities" },
  { id: "prt-004", name: "Youth Scope", tier: "community", icon: "community", trackNumber: null, special: null, partnerType: "Community Partner", confirmed: true, group: "community", logo: "prt-004.png", logoURL: "x", website: "https://www.linkedin.com/company/youth-scope3ex/", bmCommunityLink: null, tagline: "An organization working to support volunteer activities in Egypt." },
  { id: "prt-003", name: "Startup Egypt", tier: "community", icon: "grid", trackNumber: null, special: null, partnerType: "Ecosystem Partner", confirmed: true, group: "strategic", logo: "prt-003.png", logoURL: "x", website: "https://startupegypt.org.eg/", bmCommunityLink: null, tagline: "We Empower Egyptian Founders to Build the Future" },
  { id: "prt-010", name: "ALX", tier: "community", icon: "community", trackNumber: null, special: null, partnerType: "Community Partner", confirmed: true, group: "community", logo: "prt-010.png", logoURL: "x", website: "https://www.alxafrica.com/", bmCommunityLink: null, tagline: "We bring together industry leaders" },
  { id: "prt-011", name: "GroHub", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, group: "community", logo: "prt-011.png", logoURL: "x", website: "https://www.grohub.co/", bmCommunityLink: null, tagline: "Where Modern B2B Growth Gets Built" },
  { id: "prt-012", name: "Leaders in AI era", tier: "community", icon: "community", trackNumber: null, special: null, partnerType: "Community Partner", confirmed: true, group: "community", logo: "prt-012.png", logoURL: "x", website: null, bmCommunityLink: "https://brainsmingle.com/spaces/product-builders-1", tagline: "Lead the future. Outpace the rest" },
  { id: "prt-013", name: "EraaSoft", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, group: "community", logo: "prt-013.png", logoURL: "x", website: "https://eraasoft.com/", bmCommunityLink: null, tagline: null },
  { id: "prt-014", name: "aSaaSi Middle East", tier: "community", icon: "trackTech", trackNumber: null, special: null, partnerType: "Tech Partner", confirmed: true, group: "community", logo: "prt-014.png", logoURL: "x", website: "https://www.linkedin.com/company/asaasi-me/", bmCommunityLink: "https://brainsmingle.com/spaces/the-saas-majlis-community", tagline: null },
  { id: "prt-015", name: "Doroob", tier: "community", icon: "globe", trackNumber: null, special: null, partnerType: "Syria", confirmed: true, group: "regional", logo: "prt-015.png", logoURL: "x", website: "https://doroob.work/", bmCommunityLink: null, tagline: "Doroob is a Syrian platform for professional training and qualification. It helps Syrian youth acquire digital and professional skills, discover and apply to training programs." }
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

/* Partner wall sections. Iterate SIGNAL_PARTNER_GROUPS in order
   and call this per section. */
function getPartnersByGroup(group) {
  return SIGNAL_PARTNERS.filter(p => p.group === group);
}

function getStrategicPartners() { return getPartnersByGroup("strategic"); }
function getRegionalPartners()  { return getPartnersByGroup("regional"); }
function getCommunityPartners() { return getPartnersByGroup("community"); }

function getPartnersByType(type) {
  return SIGNAL_PARTNERS.filter(p => p.partnerType === type);
}

/* Types used by community-group partners, for the sub-group rows.
   Strategic and regional sections render flat. */
function getPartnerTypesInUse() {
  return SIGNAL_PARTNER_TYPES.filter(type =>
    SIGNAL_PARTNERS.some(p => p.partnerType === type && p.group === "community"));
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
