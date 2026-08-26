/**
 * sponsors.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the ValidatedOrg tab, rows with readyToPublish ticked.
 * Generated 2026-08-26 21:21 · 58 sponsors, 45 partners.
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
  "Recruitment Partner",
  "Career Partner",
  "Ecosystem Partner",
  "Youth Partner",
  "Germany",
  "Syria",
  "AI Startup",
  "EdTech Partner",
  "Tech Partner",
  "Community Partner"
];

const SIGNAL_PARTNER_GROUPS = {
  strategic: { label: "Strategic Partners", order: 1 },
  regional: { label: "Regional Partners", order: 2 },
  community: { label: "Community Partners", order: 3 }
};

const SIGNAL_SPONSORS = [
  { id: "main", order: 1, name: null, tier: "main", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-001", order: 2, name: null, tier: "gold", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "gold-002", order: 3, name: null, tier: "gold", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-001", order: 4, name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-002", order: 5, name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "slvr-003", order: 6, name: null, tier: "silver", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-001", order: 7, name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-002", order: 8, name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-003", order: 9, name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-004", order: 10, name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "brnz-005", order: 11, name: null, tier: "bronze", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-full", order: 12, name: null, tier: "speednetworking", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-001", order: 13, name: null, tier: "speednetworking", icon: null, title: "Day 1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-002", order: 14, name: null, tier: "speednetworking", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-003", order: 15, name: null, tier: "speednetworking", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-004", order: 16, name: null, tier: "speednetworking", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-005", order: 17, name: null, tier: "speednetworking", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-006", order: 18, name: null, tier: "speednetworking", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-001", order: 19, name: null, tier: "track", icon: null, title: "1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-002", order: 20, name: null, tier: "track", icon: null, title: "2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-003", order: 21, name: null, tier: "track", icon: null, title: "3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-004", order: 22, name: null, tier: "track", icon: null, title: "4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-005", order: 23, name: null, tier: "track", icon: null, title: "5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-001", order: 24, name: null, tier: "spotlight", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-002", order: 25, name: null, tier: "spotlight", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-003", order: 26, name: null, tier: "spotlight", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-004", order: 27, name: null, tier: "spotlight", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-005", order: 28, name: null, tier: "spotlight", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-001", order: 1000, name: "WUZZUF", tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "ses-001.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "ses-002", order: 1001, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-003", order: 1002, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-004", order: 1003, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-005", order: 1004, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-006", order: 1005, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-007", order: 1006, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-008", order: 1007, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-009", order: 1008, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-010", order: 1009, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-011", order: 1010, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-012", order: 1011, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-013", order: 1012, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-014", order: 1013, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-015", order: 1014, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-016", order: 1015, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-017", order: 1016, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-018", order: 1017, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-019", order: 1018, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-020", order: 1019, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-021", order: 1020, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-022", order: 1021, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-023", order: 1022, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-024", order: 1023, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-025", order: 1024, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-026", order: 1025, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-027", order: 1026, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-028", order: 1027, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-029", order: 1028, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-030", order: 1029, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
];

const SIGNAL_PARTNERS = [
  { id: "prt-008", order: 100, name: "WUZZUF", tier: "community", icon: "recruiter", title: "Recruitment Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-008.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "prt-009", order: 101, name: "iCareer", tier: "community", icon: "practitioner", title: "Career Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-009.png", logoURL: "x", website: "https://icareer.ai/", bmCommunityLink: "https://brainsmingle.com/icareer", tagline: "Revolutionizing Education and Employment Ecosystems for All" },
  { id: "prt-003", order: 102, name: "Startup Egypt", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-003.png", logoURL: "x", website: "https://startupegypt.org.eg/", bmCommunityLink: null, tagline: "We Empower Egyptian Founders to Build the Future" },
  { id: "prt-002", order: 103, name: "MEmpire", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-002.png", logoURL: "x", website: "https://www.mempireangels.com/", bmCommunityLink: null, tagline: "Where MENA's most ambitious operators find their first believer." },
  { id: "prt-016", order: 104, name: "Wrk+", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-016.png", logoURL: "x", website: "https://www.wrk.plus/", bmCommunityLink: null, tagline: "Born from Early-Movers. Built for the Future." },
  { id: "prt-019", order: 105, name: "Off Campus", tier: "community", icon: "student", title: "Youth Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-019.png", logoURL: "x", website: "https://www.myoffcampus.com", bmCommunityLink: null, tagline: "At Offcampus, we connect students and fresh graduates with opportunities beyond university while partnering with student clubs across Egypt to promote their initiatives, highlight their achievements, and provide their members with exclusive opportunities." },
  { id: "prt-001", order: 200, name: "AI Global", tier: "community", icon: "globe", title: "Germany", country: "Germany", countryCode: "DE", confirmed: true, group: "regional", logo: "prt-001.png", logoURL: "x", website: "https://www.linkedin.com/company/ai_global/", bmCommunityLink: null, tagline: "Turning Data Into Direction. Turning AI Into Impact." },
  { id: "prt-015", order: 201, name: "Doroob", tier: "community", icon: "globe", title: "Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "regional", logo: "prt-015.png", logoURL: "x", website: "https://doroob.work/", bmCommunityLink: null, tagline: "Doroob is a Syrian platform for professional training and qualification. It helps Syrian youth acquire digital and professional skills, discover and apply to training programs." },
  { id: "prt-041", order: 300, name: "Brono AI", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-041.png", logoURL: "x", website: "https://brono.ai/", bmCommunityLink: null, tagline: "Empower your design workflow with Brono. Transform text prompts into editable Figma UI, generate production-ready code, run UX audits, and analyze heatmaps instantly." },
  { id: "prt-042", order: 301, name: "NOOR", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-042.png", logoURL: "x", website: "https://www.linkedin.com/company/nooraicareerandskillscompanion/", bmCommunityLink: null, tagline: "Noor is an AI-powered career and skills advisor designed for Gen Alpha students to explore their interests, discover suitable career paths, and build 21st-century skills like critical thinking and creativity.  It combines an interactive AI chatbot, gamified “career quests,” digital portfolios, and a school dashboard for data-driven insights. Built on AI/LLM models, cloud and no code & low code infrastructure, Noor personalizes learning while ensuring ethical data use and privacy for minors." },
  { id: "prt-043", order: 302, name: null, tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-044", order: 303, name: null, tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-045", order: 304, name: null, tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-017", order: 400, name: "English Capsules", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-017.png", logoURL: "x", website: "http://englishcapsules.com/", bmCommunityLink: null, tagline: "English Capsules is a leading language academy dedicated to providing individuals with the practical language skills needed to succeed in today’s competitive job market." },
  { id: "prt-018", order: 401, name: "Next Academy", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-018.png", logoURL: "x", website: "https://nextacademyedu.com/ar", bmCommunityLink: null, tagline: "Next Academy is where ambitious CEOs and entrepreneurs elevate their leadership, sharpen their business thinking, and navigate challenges with confidence. We equip business leaders with the expertise, insights, and perspective needed to lead with impact and build businesses designed for sustainable growth." },
  { id: "prt-014", order: 500, name: "aSaaSi Middle East", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-014.png", logoURL: "x", website: "https://www.linkedin.com/company/asaasi-me/", bmCommunityLink: "https://brainsmingle.com/spaces/the-saas-majlis-community", tagline: "ASaaSI is the gateway to MENA’s SaaS ecosystem, bringing together founders, product leaders, operators, builders, and partners. Through community, content, events, and meaningful connections, ASaaSI creates a space where the people shaping SaaS can connect, collaborate, discover opportunities, and grow together." },
  { id: "prt-011", order: 501, name: "GroHub", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-011.png", logoURL: "x", website: "https://www.grohub.co/", bmCommunityLink: null, tagline: "The B2B Growth Enablement Ecosystem for Modern GTM Teams" },
  { id: "prt-005", order: 502, name: "Dr. Ahmed El-Shamy", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-005.png", logoURL: "x", website: "https://elsha.my/", bmCommunityLink: null, tagline: "Better decisions at the intersection of risk, product and AI." },
  { id: "prt-013", order: 503, name: "EraaSoft", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-013.png", logoURL: "x", website: "https://eraasoft.com/", bmCommunityLink: null, tagline: "We dig into your business, study your market, and build tailored strategies that drive measurable online growth and stronger brand loyalty. Your success is our success, every solution we deliver is designed to get you results." },
  { id: "prt-006", order: 504, name: "Digital Product Community", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-006.png", logoURL: "x", website: "https://digital-products.online/", bmCommunityLink: null, tagline: "Where Products, People, and Innovation Meet" },
  { id: "prt-010", order: 600, name: "ALX", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-010.png", logoURL: "x", website: "https://www.alxafrica.com/", bmCommunityLink: null, tagline: "We bring together industry leaders" },
  { id: "prt-007", order: 601, name: "Business Lobby", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-007.png", logoURL: "x", website: "https://businesslobby.community/", bmCommunityLink: null, tagline: "Business Lobby is a business networking platform that organizes events connecting entrepreneurs, startups, and business leaders. Through its events, Business Lobby creates opportunities for startups to showcase their ideas, build valuable connections, and connect directly with investors looking for promising opportunities." },
  { id: "prt-020", order: 602, name: "Executive Mastery Camp", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-020.png", logoURL: "x", website: "https://executivemasterycamp.lovable.app", bmCommunityLink: null, tagline: "Executive Mastery Camp (EMC) is a consulting and training program that helps business owners and executives build robust operating systems for their companies. We equip leaders with world-class management frameworks so they can step back from daily operations, focus on what matters, and drive sustainable growth." },
  { id: "prt-012", order: 603, name: "Leaders in AI era", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-012.png", logoURL: "x", website: null, bmCommunityLink: "https://brainsmingle.com/spaces/product-builders-1", tagline: "Lead the future. Outpace the rest" },
  { id: "prt-004", order: 604, name: "Youth Scope", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-004.png", logoURL: "x", website: "https://www.linkedin.com/company/youth-scope3ex/", bmCommunityLink: null, tagline: "An organization working to support volunteer activities in Egypt." },
  { id: "prt-021", order: 605, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-022", order: 606, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-023", order: 607, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-024", order: 608, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-025", order: 609, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-026", order: 610, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-027", order: 611, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-028", order: 612, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-029", order: 613, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-030", order: 614, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-031", order: 615, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-032", order: 616, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-033", order: 617, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-034", order: 618, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-035", order: 619, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-036", order: 620, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-037", order: 621, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-038", order: 622, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-039", order: 623, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "prt-040", order: 624, name: null, tier: "community", icon: null, title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
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
