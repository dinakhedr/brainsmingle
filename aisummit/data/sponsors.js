/**
 * sponsors.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the ValidatedOrg tab, rows with readyToPublish ticked.
 * Generated 2026-09-21 00:23 · 38 sponsors, 46 partners.
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
  "Innovation Partner",
  "Partner in Germany",
  "Partner in Syria",
  "Partner in Algeria",
  "AI Startup",
  "EdTech Partner",
  "Tech Partner",
  "Tech Partner in Syria",
  "Community Partner",
  "Community Partner in Syria",
  "Youth Partner",
  "Campus Partner",
  "Government Partner in Syria"
];

const SIGNAL_PARTNER_GROUPS = {
  government: { label: "Government Partners", order: 1 },
  strategic: { label: "Strategic Partners", order: 2 },
  regional: { label: "Regional Partners", order: 3 },
  community: { label: "Community Partners", order: 4 }
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
  { id: "trk-001", order: 12, name: null, tier: "track", icon: null, title: "1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-002", order: 13, name: null, tier: "track", icon: null, title: "2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-003", order: 14, name: null, tier: "track", icon: null, title: "3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-004", order: 15, name: null, tier: "track", icon: null, title: "4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "trk-005", order: 16, name: null, tier: "track", icon: null, title: "5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-full", order: 17, name: null, tier: "speednetworking", icon: null, title: null, country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-001", order: 18, name: null, tier: "speednetworking", icon: null, title: "Day 1", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-002", order: 19, name: null, tier: "speednetworking", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-003", order: 20, name: null, tier: "speednetworking", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-004", order: 21, name: null, tier: "speednetworking", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-005", order: 22, name: null, tier: "speednetworking", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "sn-d-006", order: 23, name: null, tier: "speednetworking", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-001", order: 24, name: null, tier: "spotlight", icon: null, title: "Day 2", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-002", order: 25, name: null, tier: "spotlight", icon: null, title: "Day 3", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-003", order: 26, name: null, tier: "spotlight", icon: null, title: "Day 4", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-004", order: 27, name: null, tier: "spotlight", icon: null, title: "Day 5", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "spt-005", order: 28, name: null, tier: "spotlight", icon: null, title: "Day 6", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-001", order: 1000, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-002", order: 1001, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-003", order: 1002, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-004", order: 1003, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-005", order: 1004, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-006", order: 1005, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-007", order: 1006, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-008", order: 1007, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-009", order: 1008, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null },
  { id: "ses-010", order: 1009, name: null, tier: "session", icon: "liveSession", title: "Session Sponsor", country: null, countryCode: null, confirmed: true, group: null, logo: "comingsoon.png", logoURL: null, website: null, bmCommunityLink: null, tagline: null }
];

const SIGNAL_PARTNERS = [
  { id: "prt-008", order: 100, name: "WUZZUF", tier: "community", icon: "recruiter", title: "Recruitment Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-008.png", logoURL: "x", website: "https://wuzzuf.net/", bmCommunityLink: null, tagline: "Find the Best Jobs in Egypt" },
  { id: "prt-009", order: 101, name: "iCareer", tier: "community", icon: "practitioner", title: "Career Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-009.png", logoURL: "x", website: "https://icareer.ai/", bmCommunityLink: "https://brainsmingle.com/icareer", tagline: "Revolutionizing Education and Employment Ecosystems for All" },
  { id: "prt-003", order: 102, name: "Startup Egypt", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-003.png", logoURL: "x", website: "https://startupegypt.org.eg/", bmCommunityLink: null, tagline: "We Empower Egyptian Founders to Build the Future" },
  { id: "prt-002", order: 103, name: "MEmpire", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-002.png", logoURL: "x", website: "https://www.mempireangels.com/", bmCommunityLink: null, tagline: "Where MENA's most ambitious operators find their first believer." },
  { id: "prt-030", order: 104, name: "ICEALEX", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-030.png", logoURL: "x", website: "https://icealex.com/", bmCommunityLink: null, tagline: "An innovation consultancy hub. A leading platform for sector specific incubation and entrepreneurship support programs." },
  { id: "prt-031", order: 105, name: "UnTap", tier: "community", icon: "founder", title: "Innovation Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-031.png", logoURL: "x", website: "https://untap.tech/", bmCommunityLink: "https://brainsmingle.com/spaces/agents-at-work", tagline: "Untap is your all-in-one solution for innovation and talent discovery. Easily launch platforms, set up program landing pages, and manage competitions, awards, and ongoing innovation and hiring initiatives. From submissions and judging to participant engagement and expert collaboration, Untap streamlines every step." },
  { id: "prt-016", order: 106, name: "Wrk+", tier: "community", icon: "grid", title: "Ecosystem Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-016.png", logoURL: "x", website: "https://www.wrk.plus/", bmCommunityLink: null, tagline: "Born from Early-Movers. Built for the Future." },
  { id: "prt-001", order: 200, name: "AI Global", tier: "community", icon: "globe", title: "Partner in Germany", country: "Germany", countryCode: "DE", confirmed: true, group: "regional", logo: "prt-001.png", logoURL: "x", website: "https://www.linkedin.com/company/ai_global/", bmCommunityLink: null, tagline: "Turning Data Into Direction. Turning AI Into Impact." },
  { id: "prt-015", order: 201, name: "Doroob", tier: "community", icon: "globe", title: "Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "regional", logo: "prt-015.png", logoURL: "x", website: "https://doroob.work/", bmCommunityLink: null, tagline: "Doroob is a Syrian platform for professional training and qualification. It helps Syrian youth acquire digital and professional skills, discover and apply to training programs." },
  { id: "prt-044", order: 202, name: "The Algerian Developer", tier: "community", icon: "globe", title: "Partner in Algeria", country: "Algeria", countryCode: "DZ", confirmed: true, group: "regional", logo: "prt-044.png", logoURL: "x", website: "https://www.facebook.com/TADeveloper1", bmCommunityLink: null, tagline: "The Algerian Developer is a digital hub and social media community dedicated to technology, AI, software engineering, and digital skills. Active across Facebook, Instagram, and Telegram, it serves as both an educational content engine and a go-to space for Algerian and Arab tech enthusiasts, students, and engineers looking to sharpen their skills and stay ahead in the industry." },
  { id: "prt-035", order: 300, name: "Wessam AI", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-035.png", logoURL: "x", website: "https://www.wesam.ai/", bmCommunityLink: null, tagline: "We’re building the Upwork for AI agents — a marketplace where businesses can find and hire specialized AI agents for specific jobs, and experts can build, package, and sell agents based on their real-world knowledge and experience." },
  { id: "prt-034", order: 301, name: "Zaher AI", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-034.png", logoURL: "x", website: "https://zaher.ai/", bmCommunityLink: null, tagline: "Zaher is a visibility and conversion AI copilot that leverages Generative Engine Optimization (GEO) strategies to help brands measure, simulate, and improve how they appear across the world’s leading LLMs." },
  { id: "prt-032", order: 302, name: "Brono AI", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-032.png", logoURL: "x", website: "https://brono.ai/", bmCommunityLink: null, tagline: "Empower your design workflow with Brono. Transform text prompts into editable Figma UI, generate production-ready code, run UX audits, and analyze heatmaps instantly." },
  { id: "prt-033", order: 303, name: "NOOR", tier: "community", icon: "trackTech", title: "AI Startup", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-033.png", logoURL: "x", website: "https://noor-ai-dvisor.github.io/noor-landingPage/", bmCommunityLink: null, tagline: "Noor combines AI-guided career exploration with interdisciplinary learning experiences, competency mapping, and a digital skills passport. It supports students in discovering their strengths, exploring future pathways, and developing transferable employability skills, while giving schools practical tools to monitor progress and strengthen career education programs." },
  { id: "prt-017", order: 400, name: "English Capsules", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-017.png", logoURL: "x", website: "http://englishcapsules.com/", bmCommunityLink: null, tagline: "English Capsules is a leading language academy dedicated to providing individuals with the practical language skills needed to succeed in today’s competitive job market." },
  { id: "prt-018", order: 401, name: "Next Academy", tier: "community", icon: "liveSession", title: "EdTech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-018.png", logoURL: "x", website: "https://nextacademyedu.com/ar", bmCommunityLink: null, tagline: "Next Academy is where ambitious CEOs and entrepreneurs elevate their leadership, sharpen their business thinking, and navigate challenges with confidence. We equip business leaders with the expertise, insights, and perspective needed to lead with impact and build businesses designed for sustainable growth." },
  { id: "prt-014", order: 500, name: "aSaaSi Middle East", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-014.png", logoURL: "x", website: "https://www.linkedin.com/company/asaasi-me/", bmCommunityLink: "https://brainsmingle.com/spaces/the-saas-majlis-community", tagline: "ASaaSI is the gateway to MENA’s SaaS ecosystem, bringing together founders, product leaders, operators, builders, and partners. Through community, content, events, and meaningful connections, ASaaSI creates a space where the people shaping SaaS can connect, collaborate, discover opportunities, and grow together." },
  { id: "prt-011", order: 501, name: "GroHub", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-011.png", logoURL: "x", website: "https://www.grohub.co/", bmCommunityLink: null, tagline: "The B2B Growth Enablement Ecosystem for Modern GTM Teams" },
  { id: "prt-022", order: 502, name: "PRDKT+", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-022.png", logoURL: "x", website: "https://www.prdkt.plus/", bmCommunityLink: null, tagline: "Prdkt+ empowers MENA product managers through events, meetups, and training, driving growth and collaborative community growth" },
  { id: "prt-023", order: 503, name: "Figmawya", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-023.png", logoURL: "x", website: "https://figmawya.com/", bmCommunityLink: null, tagline: "Our mission is to spread user experience \"UX\" culture across the Arab world and make its principles, practices, and value more accessible to Arabic-speaking communities" },
  { id: "prt-005", order: 504, name: "Dr. Ahmed El-Shamy", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-005.png", logoURL: "x", website: "https://elsha.my/", bmCommunityLink: null, tagline: "Better decisions at the intersection of risk, product and AI." },
  { id: "prt-006", order: 505, name: "Digital Product Community", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-006.png", logoURL: "x", website: "https://digital-products.online/", bmCommunityLink: null, tagline: "Where Products, People, and Innovation Meet" },
  { id: "prt-013", order: 506, name: "EraaSoft", tier: "community", icon: "developer", title: "Tech Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-013.png", logoURL: "x", website: "https://eraasoft.com/", bmCommunityLink: null, tagline: "We dig into your business, study your market, and build tailored strategies that drive measurable online growth and stronger brand loyalty. Your success is our success, every solution we deliver is designed to get you results." },
  { id: "prt-045", order: 507, name: "Techaniat", tier: "community", icon: "developer", title: "Tech Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-045.png", logoURL: "x", website: "https://techaniat.com/", bmCommunityLink: null, tagline: "Techaniat is a leading enterprise technology and systems integration company, delivering innovative IT infrastructure, ERP solutions, cybersecurity, cloud services, and digital transformation. Founded in Damascus in 2001, we empower businesses and institutions across Syria and the region with reliable technology, expert consulting, and comprehensive support." },
  { id: "prt-010", order: 600, name: "ALX", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-010.png", logoURL: "x", website: "https://www.alxafrica.com/", bmCommunityLink: null, tagline: "We bring together industry leaders" },
  { id: "prt-040", order: 601, name: "NasBoard", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-040.png", logoURL: "x", website: "https://nasboard.me/", bmCommunityLink: null, tagline: "Employer of record for Egypt and Syria. Hire and pay a team there — no company setup required." },
  { id: "prt-039", order: 602, name: "Staff Arabia", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-039.png", logoURL: "x", website: "https://staffarabia.com/en", bmCommunityLink: null, tagline: "A Leading Regional HRO , Staffing , Payroll, EOR/PEO/Offshoring Outsourcing Service Partner with main offices in Cairo , Egypt and regional presence covering most of the MENA region ." },
  { id: "prt-041", order: 603, name: "MRKZ", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-041.png", logoURL: "x", website: "https://mrkz.space", bmCommunityLink: null, tagline: "A premium co-working space designed for Syrian talent and global ambitions. Modern facilities, vibrant community, endless opportunities." },
  { id: "prt-047", order: 604, name: "Sanad Youth Foundation for Development", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-047.png", logoURL: "x", website: "https://sanadyouth.org/", bmCommunityLink: null, tagline: "Sanad Youth is a dynamic, youth-led organization that understands young people, their realities, and the opportunities within their reach. We empower youth to turn their potential into action by creating innovative solutions, building meaningful partnerships, and driving sustainable impact in their communities." },
  { id: "prt-042", order: 605, name: "TechRise", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-042.png", logoURL: "x", website: "https://www.facebook.com/techrise.dev", bmCommunityLink: null, tagline: "A nonprofit volunteer tech team founded in post-liberation Syria, empowering young people with programming skills and connecting them with industry experts to prepare them for the job market. Based in Homs and active across multiple Syrian governorates, the team delivers training, workshops, internships, and job placements — turning technical knowledge into real community impact." },
  { id: "prt-043", order: 606, name: "Entrepioneers 2030", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-043.png", logoURL: "x", website: "https://www.facebook.com/Entrepioneers2030/", bmCommunityLink: null, tagline: "Entrepioneers 2030 is a leading youth impact platform connecting Syrian entrepreneurs, innovators, and changemakers with experts and organizations. We empower young talents to develop sustainable solutions, foster impactful partnerships, and drive community recovery aligned with the UN Sustainable Development Goals." },
  { id: "prt-046", order: 607, name: "Startup Grind Damascus", tier: "community", icon: "community", title: "Community Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "community", logo: "prt-046.png", logoURL: "x", website: "https://www.linkedin.com/company/startup-grind-damascus/", bmCommunityLink: null, tagline: "Startup Grind Damascus is the local chapter of the world's leading startup community, dedicated to helping early-stage companies grow. We connect founders, tech leaders, investors, and partners across a global network spanning 150 countries, giving members access to funding opportunities, broader market reach, and the relationships they need to scale from bootstrapped beginnings through Series A and beyond." },
  { id: "prt-007", order: 608, name: "Business Lobby", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-007.png", logoURL: "x", website: "https://businesslobby.community/", bmCommunityLink: null, tagline: "Business Lobby is a business networking platform that organizes events connecting entrepreneurs, startups, and business leaders. Through its events, Business Lobby creates opportunities for startups to showcase their ideas, build valuable connections, and connect directly with investors looking for promising opportunities." },
  { id: "prt-021", order: 609, name: "Linkout", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-021.png", logoURL: "x", website: "https://www.linkout.net/en", bmCommunityLink: null, tagline: "LinkOUT is a tech platform transforming how Egyptians access international job opportunities — whether remote roles with global companies or overseas positions through licensed recruitment agencies. We build smart, affordable tools that streamline external recruitment for agencies and job seekers alike, cutting time and effort while opening doors to better careers and bigger futures. Your growth is our mission." },
  { id: "prt-012", order: 610, name: "Leaders in AI era", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-012.png", logoURL: "x", website: null, bmCommunityLink: "https://brainsmingle.com/spaces/product-builders-1", tagline: "Lead the future. Outpace the rest" },
  { id: "prt-038", order: 611, name: "Tawasol", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-038.png", logoURL: "x", website: "https://tawasul.aitawasol.com/ar", bmCommunityLink: null, tagline: "Your strategic partner, committed to serving your goals and providing you with ongoing support by analyzing your business in depth, launching more impactful projects, and accompanying you on your technological transformation journey in a way that serves your interests, while delivering sustainable solutions and continuous support." },
  { id: "prt-020", order: 612, name: "Executive Mastery Camp", tier: "community", icon: "community", title: "Community Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-020.png", logoURL: "x", website: "https://executivemasterycamp.lovable.app", bmCommunityLink: null, tagline: "Executive Mastery Camp (EMC) is a consulting and training program that helps business owners and executives build robust operating systems for their companies. We equip leaders with world-class management frameworks so they can step back from daily operations, focus on what matters, and drive sustainable growth." },
  { id: "prt-019", order: 800, name: "Off Campus", tier: "community", icon: "student", title: "Youth Partner", country: null, countryCode: null, confirmed: true, group: "strategic", logo: "prt-019.png", logoURL: "x", website: "https://www.myoffcampus.com", bmCommunityLink: null, tagline: "At Offcampus, we connect students and fresh graduates with opportunities beyond university while partnering with student clubs across Egypt to promote their initiatives, highlight their achievements, and provide their members with exclusive opportunities." },
  { id: "prt-028", order: 801, name: "IEEE Zewail City", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-028.png", logoURL: "x", website: "https://www.facebook.com/share/19JdFioiCx/", bmCommunityLink: null, tagline: "IEEE Zewail City is a student-led technical community that empowers students through innovation, technology, and collaboration. We organize workshops, competitions, talks, and hands-on projects, creating opportunities for students to develop technical skills, explore new ideas, and connect with a growing network of passionate innovators." },
  { id: "prt-026", order: 802, name: "Microsoft Student Club - SAMS", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-026.png", logoURL: "x", website: "https://mlsaegypt.org/", bmCommunityLink: null, tagline: "Microsoft Student Club at SAMS is Egypt’s top-ranked student tech community. We bridge the gap between academic learning and industry demands by equipping selected students with intensive technical training in AI, Data, and Software Engineering, alongside essential soft-skills development." },
  { id: "prt-027", order: 803, name: "MSP-MIU Tech Club", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-027.png", logoURL: "x", website: "https://msp-miu.tech/", bmCommunityLink: null, tagline: "MSP Tech Club at Misr International University is a student-led innovation community dedicated to empowering future tech leaders. We bridge the gap between academia and industry through hands-on technical workshops, competitive hackathons, collaborative projects, and practical career development." },
  { id: "prt-025", order: 804, name: "GDGoC EUI", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-025.png", logoURL: "x", website: "https://gdg.community.dev/gdg-on-campus-egypt-university-of-informatics-cairo-egypt/", bmCommunityLink: null, tagline: "GDG on Campus Egypt University of Informatics is a student developer community in Knowledge City, New Administrative Capital.Since November 2024, we have run 21 events—hackathons, workshops, and teaching series—connecting EUI students in computing, engineering, management, and digital design with working engineers." },
  { id: "prt-029", order: 805, name: "SemiColon", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-029.png", logoURL: "x", website: "https://www.facebook.com/SemiColon.team.asu", bmCommunityLink: null, tagline: "SemiColon bridges the gap between academic studies and industry requirements. Through comprehensive peer-led workshops and strategic corporate partnerships, we provide students with exclusive networking opportunities, practical skills, and direct industry exposure to accelerate their professional growth and career readiness." },
  { id: "prt-004", order: 806, name: "Youth Scope", tier: "community", icon: "student", title: "Campus Partner", country: null, countryCode: null, confirmed: true, group: "community", logo: "prt-004.png", logoURL: "x", website: "https://www.linkedin.com/company/youth-scope3ex/", bmCommunityLink: null, tagline: "An organization working to support volunteer activities in Egypt." },
  { id: "prt-036", order: 2000, name: "Small and Medium Enterprises Development Center in Syria (SMEDCS)", tier: "community", icon: "government", title: "Government Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "government", logo: "prt-036.png", logoURL: "x", website: "https://smeda.gov.sy/", bmCommunityLink: null, tagline: "The SME Development Authority in Syria is a public body under the Ministry of Economy and Foreign Trade, established to grow the SME sector and reduce unemployment. It offers training in business management, marketing, and accounting; incubation and technical support for early-stage projects; and financial facilitation linking entrepreneurs with banks and microfinance institutions." },
  { id: "prt-037", order: 2001, name: "Center for Innovation and Entrepreneurship (HIAST-CIE)", tier: "community", icon: "government", title: "Government Partner in Syria", country: "Syria", countryCode: "SY", confirmed: true, group: "government", logo: "prt-037.png", logoURL: "x", website: "https://hiast-cie.sy/ar/", bmCommunityLink: null, tagline: "The Innovation and Startup Support Center at the Higher Institute for Applied Sciences and Technology in Syria helps the institute's students transform their scientific and technical ideas into testable startups, links training to the job market, and leverages artificial intelligence (AI) and emerging technologies in education, innovation, and development services." }
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
