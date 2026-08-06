/**
 * speakers.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the Validated tab, rows with readyToPublish ticked.
 * Generated 2026-08-06 19:18 · 16 speakers.
 *
 * Track numbers: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * null = Opening Day, no track.
 */

const SPEAKER_PHOTO_BASE = "assets/speakers/";
const HOME_SPEAKER_LIMIT = 10;

function getSpeakerPhoto(speaker) {
  if (!speaker) return null;
  if (speaker.photo === null) return null;
  if (speaker.photo) return SPEAKER_PHOTO_BASE + speaker.photo;
  return SPEAKER_PHOTO_BASE + speaker.id + ".png";
}

function getCountryFlag(speaker) {
  const code = speaker && speaker.countryCode;
  if (!code || code.length !== 2) return "";
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)
  );
}

const SIGNAL_SPEAKERS = [

  {
    id          : "spk-002",
    order       : 1,
    name        : "Amr Awadallah",
    title       : "Vectara, Cloudera, and Aptivia.",
    company     : "Tech Entrepreneur",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-002.png",
    bio         : "Tech entrepreneur and AI builder with 30 years in entrepreneurship, large-scale systems, and AI. Founding CEO of Vectara, building the Trusted Agent Operating System with $54M raised and Gartner recognition. Former VP Developer Relations at Google Cloud, founder/global CTO of Cloudera, and VP Eng at Yahoo!. PhD EE from Stanford. Passionate about bridging technology, product, and business.",
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
    title       : "Chief Futurist",
    company     : "NEOM",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-003.png",
    bio         : "TIME100 AI Impact Award honouree and world's No.1-ranked Chief Futurist. Advises heads of state, boards, and global CEOs on AI transformation and leadership. Doctoral research on AI, leadership, and trust spanning 6,000+ executives worldwide. MIT faculty, Forbes contributor, and author of Hidden Power. Featured on CNN, BBC, and CNBC, with keynotes at Davos, the UN, SXSW, and London Business School.",
    linkedin    : "https://www.linkedin.com/in/drkatebarker/",
    bmProfile   : "https://brainsmingle.com/profile",
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-010",
    order       : 3,
    name        : "Maged Ghoneima",
    title       : "M-Empire Angels",
    company     : "Angel Investor",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-010.png",
    bio         : "Angel investor and technology commercialization expert. Co-founded 10+ startups with multiple successful exits and led an angel group investing in 80+ startups. PhD in Computer Engineering from Northwestern, former Intel and NVIDIA engineer. Associate Professor at Ain Shams University with 2,000+ hours mentoring 400+ startups. Advisor to 50+ startups, SMEs, and corporates across the region.",
    linkedin    : "https://www.linkedin.com/in/mghoneima/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-011",
    order       : 4,
    name        : "Hany Elmalky",
    title       : "Google",
    company     : "Product & Technology Leader",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-011.png",
    bio         : "Product and technology leader with 20+ years building platforms at the intersection of cloud, AI, and large-scale systems. Leading AI & Innovation at Google (GFiber), embedding applied AI across operations at national scale. Co-founded SecureStream Technologies, winning first place in the Wharton Entrepreneurship Acceleration Program. Wharton Palmer Scholar with deep ML and cloud expertise.",
    linkedin    : "https://www.linkedin.com/in/helmalky/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-001",
    order       : 5,
    name        : "Ameer Sherif",
    title       : "Founder & Chairman",
    company     : "BasharSoft",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-001.png",
    bio         : "Founder and Chairman of BasharSoft, the company behind WUZZUF and Forasna, Egypt's #1 recruitment platforms for white and blue collar jobs. 7M+ users, 1M+ hires, and $10M raised from global VCs including 500 Startups and EBRD. Board Member at ITIDA, VC with Khwarizmi Ventures. World Economic Forum Young Global Leader and Endeavor Entrepreneur. Passionate about AI, marketplaces, and ecosystems.",
    linkedin    : "https://www.linkedin.com/in/ameersherif/",
    bmProfile   : "https://brainsmingle.com/ameer",
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-009",
    order       : 6,
    name        : "Mohamed Elsherif",
    title       : "CEO",
    company     : "ASaaSI Middle East",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-009.png",
    bio         : "Lecturer at EUI teaching entrepreneurship and founder of ASaaSI Middle East, an ecosystem enabling SaaS founders and SMEs. With 15+ years of hands-on experience, 1,000+ experts trained globally on SaaS, AI, and Marketing, and consultations with 126+ SaaS companies. Former COO of Crowd Analyzer, an AI Media Intelligence SaaS. Recognized by LinkedIn as the top 1% globally in SaaS.",
    linkedin    : "https://www.linkedin.com/in/elsherifmohamed",
    bmProfile   : "https://brainsmingle.com/MohamedElsherif",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-004",
    order       : 7,
    name        : "Ashraf Bacheet",
    title       : "Founder",
    company     : "O7 Therapy",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-004.png",
    bio         : "Tech executive and serial entrepreneur with 20+ years building and scaling ventures across MENA. Led O7 Therapy from idea to regional scale as the Middle East's leading digital mental health platform. Google Health AI Academy graduate and 500 Global ScaleUp alumnus. Active startup mentor and speaker focused on where AI genuinely earns its place in products—in healthcare and beyond.",
    linkedin    : "https://www.linkedin.com/in/bacheet",
    bmProfile   : "https://brainsmingle.com/ashraf3370",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-006",
    order       : 8,
    name        : "Yasmine Aguib",
    title       : "Research & Innovation Officer",
    company     : "Magdi Yacoub Heart Foundation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-006.png",
    bio         : "Technology and innovation strategist leading the Research & Innovation Centre at the Magdi Yacoub Heart Foundation. She builds AI-enabled health ecosystems integrating genomics, digital twins, and precision medicine. A Technical University of Munich graduate and Honorary Senior Research Fellow at Imperial College London, her work spans Germany, the UK, and Egypt driving equitable healthcare innovation.",
    linkedin    : "https://www.linkedin.com/in/yasmine-aguib-464776184/",
    bmProfile   : "https://www.linkedin.com/in/yasmine-aguib-464776184/",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-005",
    order       : 9,
    name        : "Youssef Hosni",
    title       : "AI/ML Engeineer",
    company     : "Solita",
    country     : "Finland",
    countryCode : "FI",
    photo       : "spk-005.png",
    bio         : "Data scientist and ML researcher with 5+ years in AI. AI Engineer at Solita and Applied Researcher at Aalto University, working on AI agents for smart predictive maintenance. Previously applied deep learning and computer vision to medical imaging. Passionate educator leading a data science blog, newsletter, and eBooks on machine learning and AI.",
    linkedin    : "https://www.linkedin.com/in/youssef-hosni-b2960b135/",
    bmProfile   : "https://brainsmingle.com/youssef9740",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s3-t5", timeSlot: "20:00" }]
  },

  {
    id          : "spk-014",
    order       : 10,
    name        : "Hend El Damaty",
    title       : "AI Global",
    company     : "Founder & AI Consultant",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-014.png",
    bio         : "AI strategist specializing in enabling organizations to make smarter, faster decisions by integrating AI across business functions. Expert in AI-driven business planning, predictive analytics, and decision-support for regulated sectors including petroleum, energy, finance, and government. Strong capabilities in responsible AI governance, workflow optimization, and automation for measurable impact.",
    linkedin    : "https://www.linkedin.com/in/hend-eldamaty/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-008",
    order       : 11,
    name        : "Ahmed El-Shamy",
    title       : "Dean of Education",
    company     : "Digisoul",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-008.png",
    bio         : "AI decisioning and fraud-risk product leader with experience at Network International, Mastercard, and CIB Egypt. Founder and CEO of Digisoul AI Agency, leading AI education and enterprise enablement across finance, HR, and supply chain. DBA candidate researching agentic AI decisioning in banking, focused on human oversight and responsible AI deployment. Expert in RegTech, payments, and governance.",
    linkedin    : "https://www.linkedin.com/in/realelshamy/",
    bmProfile   : "https://brainsmingle.com/realElShamy",
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-012",
    order       : 12,
    name        : "Taha Ali",
    title       : "GroHub",
    company     : "CEO",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-012.png",
    bio         : "Business development leader with 10+ years in B2B and B2C growth across diverse industries. Spearheaded a 10X business growth initiative at Biznes Clinics and scaled a portfolio by 300%. Systems Engineering degree combined with an MBA (ranked 1st, perfect 4.0 GPA). Certified in AI and Digital Marketing from McKinsey, HubSpot, and AUC. Expert in sales enablement, partnerships, and AI-driven strategy.",
    linkedin    : "https://www.linkedin.com/in/eng-taha-ali/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-007",
    order       : null,
    name        : "Yehya Othman",
    title       : "CEO & Founder",
    company     : "Business Lobby & Marketing Terrace",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-007.png",
    bio         : "Marketing strategist and entrepreneur with 15+ years of experience across Egypt and the Gulf. Founder of Marketing Terrace, a growth-focused marketing agency, and Business Lobby, a networking platform for founders, CEOs, and investors. MBA holder and DBA candidate researching tech startup success factors in Egypt. Experienced instructor and speaker on marketing strategy, digital growth, and AI.",
    linkedin    : "https://www.linkedin.com/in/yehya-othman?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    bmProfile   : "https://brainsmingle.com/yehya8879",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 3, sessionId: "ses-d3-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-013",
    order       : null,
    name        : "Nadeem Abdin",
    title       : "AImpulse.io",
    company     : "Partner & VP Business Development",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-013.png",
    bio         : "Business development and commercial strategy leader driving global market expansion across Europe, Scandinavia, Egypt, KSA, and the UAE. Specializing in the \"Dedicated Team\" model, providing senior-led Egyptian engineering squads to international clients. 15+ years of business leadership with a Telecommunication Engineering background and C-suite consultancy expertise.",
    linkedin    : "https://www.linkedin.com/in/nadeem-abdin-7bb89524/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-015",
    order       : null,
    name        : "Amr Helal",
    title       : "DotPy",
    company     : "Founder",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-015.png",
    bio         : "CEO, Founder, and Data Scientist at DotPy, delivering online and offline courses in AI and data analysis. AWS Certified Machine Learning Specialist with an Advanced Diploma in AI from MIT. Holds a Bachelor's in Mechanical Engineering. Passionate about innovation and knowledge sharing, actively contributing to AI-driven solutions and fostering growth in the AI and data science community.",
    linkedin    : "https://www.linkedin.com/in/amr-helal-0061a0183/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-016",
    order       : null,
    name        : "Ehab Khaled Fawzi",
    title       : "Develovent Network",
    company     : "Creative Director",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-016.png",
    bio         : "Creative Director with 10+ years in advertising, blending a musician's eye for detail with strategic creativity. Evolved from copywriter to Creative Director across top agencies including Kijamii, Media Hub, Hive Analytics, and Mint & Co. Expert in strategy, copywriting, digital activations, and campaign production. Passionate about nurturing ideas into products that attract and linger in minds.",
    linkedin    : "linkedin.com/in/ehab-khaled-fawzi-65809697",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  }

];

SIGNAL_SPEAKERS.sort((a, b) =>
  (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
);

const SIGNAL_SPEAKERS_MAP = SIGNAL_SPEAKERS.reduce((map, speaker) => {
  map[speaker.id] = speaker;
  return map;
}, {});

function getSpeakersOrdered(limit) {
  return typeof limit === "number"
    ? SIGNAL_SPEAKERS.slice(0, limit) : SIGNAL_SPEAKERS.slice();
}

function getHomepageSpeakers(limit) {
  const picked = SIGNAL_SPEAKERS.filter(s => s.showOnHome === true);
  const list = picked.length ? picked : SIGNAL_SPEAKERS.slice();
  const cap = typeof limit === "number" ? limit : HOME_SPEAKER_LIMIT;
  return cap > 0 ? list.slice(0, cap) : list;
}

function getSpeakersByTrack(trackNumber) {
  return SIGNAL_SPEAKERS.filter(s =>
    s.appearances.some(a => a.trackNumber === trackNumber));
}

function getSpeakersByDay(day) {
  return SIGNAL_SPEAKERS.filter(s => s.appearances.some(a => a.day === day));
}

function getSpeakersBySession(sessionId) {
  return SIGNAL_SPEAKERS.filter(s =>
    s.appearances.some(a => a.sessionId === sessionId));
}

function getFeaturedSpeakers() {
  return SIGNAL_SPEAKERS.filter(s => s.featured === true);
}

function getSpeakerTrackNumbers(speaker) {
  const nums = speaker.appearances
    .map(a => a.trackNumber)
    .filter(n => n !== null);
  return [...new Set(nums)];
}
