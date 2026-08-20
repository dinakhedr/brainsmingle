/**
 * sponsors.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the ValidatedOrg tab, rows with readyToPublish ticked.
 * Generated 2026-08-20 15:44 · 58 sponsors, 30 partners.
 *
 * Unsold slots are not listed. The wall works out how many are open
 * from SIGNAL_SPONSOR_TIERS[tier].slots minus the confirmed count.
 *
 * logoPath is derived from the id and computed on load:
 *   sponsors  assets/sponsors/trk-002.png
 *   partners  assets/partners/prt-003.png
 *
 * icon is a key in data/icons.js, or null.
 * title is the per-row detail: the track number ("1"-"5") on track
 * rows, "Day N" on spotlight and daily speed-networking rows, the
 * partner type on community rows, and null on the tier tiles and the
 * full-day speed-networking slot.
 * country / countryCode (alpha-2) drive the flag; both are null
 * except where a flag is wanted (the regional partners today).
 * group splits partners into wall sections: strategic, regional,
 * community. Sponsors carry group: null. Render the sections in
 * SIGNAL_PARTNER_GROUPS order via getPartnersByGroup().
 * Session sponsors (tier "session", group null) render as a flat logo
 * grid before the strategic partners; their title is carried in the
 * data but never shown. Logos live in assets/sponsors/.
 */

const SPONSOR_LOGO_BASE = "assets/sponsors/";
const PARTNER_LOGO_BASE = "assets/partners/";

function getSponsorLogo(record) {
  if (!record || record.confirmed !== true) return null;
  if (record.logo === null) return null;
  const base = record.tier === "community" ? PARTNER_LOGO_BASE : SPONSOR_LOGO_BASE;
  return base + (record.logo || record.id + ".png");
}

/* Regional partners show a country flag instead of an icon.
   countryCode is the alpha-2; null (empty here) on every other row. */
function getCountryFlag(record) {
  const code = record && record.countryCode;
  if (!code || code.length !== 2) return "";
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)
  );
}

const SIGNAL_SPONSOR_TIERS = {
  main: { label: "Presented By", slots: 1, cssClass: "tier-main", color: "#6B3EF5" },
  gold: { label: "Gold Sponsor", slots: 2, cssClass: "tier-gold", color: "#F5A623" },
  silver: { label: "Silver Sponsor", slots: 3, cssClass: "tier-silver", color: "#C0C0C0" },
  bronze: { label: "Bronze Sponsor", slots: 5, cssClass: "tier-bronze", color: "#CD7F32" },
  track: { label: "Track Sponsor", slots: 5, cssClass: "tier-track", color: "var(--accent)" },
  speednetworking: { label: "Speed Networking Sponsor", slots: 7, cssClass: "tier-speednetworking", color: "#6723FF" },
  spotlight: { label: "Day Spotlight Sponsor", slots: 5, cssClass: "tier-spotlight", color: "#F53E9F" },
  session: { label: "Session Sponsors", slots: null, cssClass: "tier-session", color: "var(--accent)" },
  community: { label: "Community Partners", slots: null, cssClass: "tier-community", color: "#4A4A6A" }
};

const SIGNAL_PARTNER_TYPES = [
  "Germany",
  "Recruitment Partner",
  "Career Partner",
  "Ecosystem Partner",
  "Tech Partner",
  "Community Partner",
  "Syria",
  "EdTech Partner"
];

const SIGNAL_PARTNER_GROUPS = {
  strategic: { label: "Strategic Partners", order: 1 },
  regional: { label: "Regional Partners", order: 2 },
  community: { label: "Community Partners", order: 3 }
};

const SIGNAL_SPONSORS = [
  { id: "main", name: null, tier: "main", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-001", name: null, tier: "gold", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-002", name: null, tier: "gold", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-001", name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-002", name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-003", name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-001", name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-002", name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-003", name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-004", name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-005", name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-full", name: null, tier: "speednetworking", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-001", name: null, tier: "speednetworking", icon: null, title: "Day 1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-002", name: null, tier: "speednetworking", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-003", name: null, tier: "speednetworking", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-004", name: null, tier: "speednetworking", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-005", name: null, tier: "speednetworking", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-006", name: null, tier: "speednetworking", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-001", name: null, tier: "track", icon: null, title: "1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-002", name: null, tier: "track", icon: null, title: "2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-003", name: null, tier: "track", icon: null, title: "3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-004", name: null, tier: "track", icon: null, title: "4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-005", name: null, tier: "track", icon: null, title: "5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-001", name: null, tier: "spotlight", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-002", name: null, tier: "spotlight", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-003", name: null, tier: "spotlight", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-004", name: null, tier: "spotlight", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-005", name: null, tier: "spotlight", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-001", name: "WUZZUF", tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "ses-001.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "ses-002", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-003", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-004", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-005", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-006", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-007", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-008", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-009", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-010", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-011", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-012", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-013", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-014", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-015", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-016", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-017", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-018", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-019", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-020", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-021", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-022", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-023", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-024", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-025", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-026", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-027", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-028", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-029", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-030", name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
];

const SIGNAL_PARTNERS = [
  { id: "prt-001", name: "AI Global", tier: "community", icon: "globe", title: "Germany", country: "Germany", countryCode: "DE", confirmed: true, group: "regional", logo: "prt-001.png", logoURL: "x", website: "https://www.linkedin.com/company/ai_global/", bmCommunityLink: null, tagline: "Turning Data Into Direction. Turning AI Into Impact." },
  { id: "prt-008", name: "WUZZUF", tier: "community", icon: "recruiter", title: "Recruitment Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-008.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "prt-009", name: "iCareer", tier: "community", icon: "practitioner", title: "Career Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-009.png", logoURL: "x", website: "https://icareer.ai/", bmCommunityLink: "https://brainsmingle.com/icareer", tagline: "Revolutionizing Education and Employment Ecosystems for All" },
  { id: "prt-002", name: "MEmpire", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-002.png", logoURL: "x", website: "https://www.mempireangels.com/", bmCommunityLink: null, tagline: "Where MENA's most ambitious operators find their first believer." },
  { id: "prt-005", name: "Dr. Ahmed El-Shamy", tier: "community", icon: "trackTech", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-005.png", logoURL: "x", website: "https://elsha.my/", bmCommunityLink: null, tagline: "Better decisions at the intersection of risk, product and AI." },
  { id: "prt-006", name: "Digital Product Community", tier: "community", icon: "trackTech", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-006.png", logoURL: "x", website: "https://digital-products.online/", bmCommunityLink: null, tagline: "Where Products, People, and Innovation Meet" },
  { id: "prt-007", name: "Business Lobby", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-007.png", logoURL: "x", website: "https://businesslobby.community/", bmCommunityLink: null, tagline: "Where Connections Turn into Opportunities" },
  { id: "prt-004", name: "Youth Scope", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-004.png", logoURL: "x", website: "https://www.linkedin.com/company/youth-scope3ex/", bmCommunityLink: null, tagline: "An organization working to support volunteer activities in Egypt." },
  { id: "prt-003", name: "Startup Egypt", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-003.png", logoURL: "x", website: "https://startupegypt.org.eg/", bmCommunityLink: null, tagline: "We Empower Egyptian Founders to Build the Future" },
  { id: "prt-010", name: "ALX", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-010.png", logoURL: "x", website: "https://www.alxafrica.com/", bmCommunityLink: null, tagline: "We bring together industry leaders" },
  { id: "prt-011", name: "GroHub", tier: "community", icon: "trackTech", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-011.png", logoURL: "x", website: "https://www.grohub.co/", bmCommunityLink: null, tagline: "Where Modern B2B Growth Gets Built" },
  { id: "prt-012", name: "Leaders in AI era", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-012.png", logoURL: "x", website: null, bmCommunityLink: "https://brainsmingle.com/spaces/product-builders-1", tagline: "Lead the future. Outpace the rest" },
  { id: "prt-013", name: "EraaSoft", tier: "community", icon: "trackTech", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-013.png", logoURL: "x", website: "https://eraasoft.com/", bmCommunityLink: null, tagline: "We dig into your business, study your market, and build tailored strategies that drive measurable online growth and stronger brand loyalty. Your success is our success, every solution we deliver is designed to get you results." },
  { id: "prt-014", name: "aSaaSi Middle East", tier: "community", icon: "trackTech", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-014.png", logoURL: "x", website: "https://www.linkedin.com/company/asaasi-me/", bmCommunityLink: "https://brainsmingle.com/spaces/the-saas-majlis-community", tagline: "A Training and Consultation Company to Help You to Solve Your SaaS Problems, Powered By Everything That Matters" },
  { id: "prt-015", name: "Doroob", tier: "community", icon: "globe", title: "Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "regional", logo: "prt-015.png", logoURL: "x", website: "https://doroob.work/", bmCommunityLink: null, tagline: "Doroob is a Syrian platform for professional training and qualification. It helps Syrian youth acquire digital and professional skills, discover and apply to training programs." },
  { id: "prt-016", name: "Wrk+", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-016.png", logoURL: "x", website: "https://www.wrk.plus/", bmCommunityLink: null, tagline: "Born from Early-Movers. Built for the Future." },
  { id: "prt-017", name: "English Capsules", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-017.png", logoURL: "x", website: "http://englishcapsules.com/", bmCommunityLink: null, tagline: "English Capsules is a regional corporation of integrated Language Solutions. English Capsules is perfectly positioned to be your partner for speaking the English Language, and support for your business." },
  { id: "prt-018", name: "Next Academy", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-018.png", logoURL: "x", website: "https://nextacademyedu.com/ar", bmCommunityLink: null, tagline: "Your Strategic Growth Partner. Architecting market leaders." },
  { id: "prt-019", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-020", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-021", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-022", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-023", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-024", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-025", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-026", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-027", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-028", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-029", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-030", name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
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
  return SIGNAL_SPONSORS.filter(s =>
    s.tier === "track" && Number(s.title) === trackNumber);
}

/* Day Spotlight sponsors, one per evening (title "Day N"). */
function getSpotlights() {
  return SIGNAL_SPONSORS.filter(s => s.tier === "spotlight");
}

/* Session sponsors: unlimited, confirmed-only, rendered as a flat logo
   grid before the strategic partners. group is null and the title is
   carried in the data but never shown. Logos live in assets/sponsors/. */
function getSessionSponsors() {
  return SIGNAL_SPONSORS.filter(s => s.tier === "session");
}

/* Speed Networking splits by title: the full-day slot has none, the
   daily slots carry "Day N". */
function getSpeedNetworkingFull() {
  return SIGNAL_SPONSORS.find(s => s.tier === "speednetworking" && !s.title) || null;
}

function getSpeedNetworkingDaily() {
  return SIGNAL_SPONSORS.filter(s => s.tier === "speednetworking" && s.title);
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
  return SIGNAL_PARTNERS.filter(p => p.title === type);
}

/* Types used by community-group partners, for the sub-group rows.
   Strategic and regional sections render flat. */
function getPartnerTypesInUse() {
  return SIGNAL_PARTNER_TYPES.filter(type =>
    SIGNAL_PARTNERS.some(p => p.title === type && p.group === "community"));
}

function getTierSponsors() {
  return SIGNAL_SPONSORS.filter(s =>
    ["main", "gold", "silver", "bronze"].includes(s.tier));
}

function getOpenSlots(tier) {
  const meta = SIGNAL_SPONSOR_TIERS[tier];
  if (!meta || meta.slots === null) return null;
  return Math.max(0, meta.slots - getSponsorsByTier(tier).length);
}
