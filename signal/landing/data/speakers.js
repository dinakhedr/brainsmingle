/**
 * speakers.js — Signal: AI
 * All speaker objects populated from speakers.html placeholder data.
 *
 * trackNumber references:
 *   1 = L&D   2 = Creative   3 = Startups   4 = Business   5 = Tech
 *   null = Opening Day (Day 1) — no track
 *
 * appearances[].trackNumber mirrors the same convention as agenda.js.
 * appearances[].sessionId references agenda.js session IDs.
 *
 * Access: SIGNAL_SPEAKERS
 *         SIGNAL_SPEAKERS_MAP (keyed by id)
 *         getSpeakersByTrack(trackNumber)
 *         getSpeakersByDay(day)
 *         getSpeakersBySession(sessionId)
 *         getFeaturedSpeakers()
 *         getSpeakerTrackNumbers(speaker)
 */

const SIGNAL_SPEAKERS = [

  {
    id          : "spk-001",
    name        : "Dr. Layla Hassan",
    title       : "Chief AI Officer",
    company     : "HealthTech Global",
    country     : "UAE",
    bio         : "A pioneer in clinical AI deployment across MENA and Europe, Dr. Hassan bridges the gap between research and real-world medical implementation. She has led AI programs in 12 hospital networks and advises the WHO on digital health strategy.",
    imagePath   : "assets/speakers/1.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" },   // updated time
      { trackNumber: 3,    day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }  // random addition (was spk-002's slot)
    ]
  },

  {
    id          : "spk-002",
    name        : "Omar Khalil",
    title       : "Founder & CEO",
    company     : "Nexus AI Ventures",
    country     : "Egypt",
    bio         : "Serial founder with two successful AI-native exits. Omar backs and advises the next generation of founders building in emerging markets, with a focus on Cairo, Nairobi, and Karachi. Frequent speaker at Y Combinator and TechCrunch Disrupt.",
    imagePath   : "assets/speakers/2.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" },   // kept p1
      { trackNumber: 4,    day: 5, sessionId: "ses-d5-s1-t4", timeSlot: "18:00" }  // random addition (from spk-011)
    ]
  },

  {
    id          : "spk-003",
    name        : "Priya Menon",
    title       : "Head of Sustainable Finance",
    company     : "Global Green Bank",
    country     : "India",
    bio         : "Leading voice on AI-driven ESG scoring and green bond markets. Priya speaks at the World Economic Forum and COP annually, and has authored two landmark reports on AI's role in climate finance with the UN Environment Programme.",
    imagePath   : "assets/speakers/3.png",
    linkedin    : null,
    bmProfile   : "https://brainsmingle.com",
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" },   // kept p1 (removed invalid p6)
      { trackNumber: 2,    day: 3, sessionId: "ses-d3-s1-t2", timeSlot: "18:00" }  // random addition
    ]
  },

  {
    id          : "spk-004",
    name        : "Dr. James Okafor",
    title       : "Research Scientist",
    company     : "Climate AI Lab, Stanford",
    country     : "Nigeria",
    bio         : "Working at the intersection of machine learning and climate modeling, Dr. Okafor has published 40+ papers in Nature, Science, and NeurIPS. His models now run inside three national weather agencies.",
    imagePath   : "assets/speakers/4.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : null,
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" }
    ]
  },

  {
    id          : "spk-005",
    name        : "Sofia Andrade",
    title       : "Creative Director & AI Artist",
    company     : "Generative Studios",
    country     : "Brazil",
    bio         : "A pioneer at the crossroads of design and generative AI, Sofia has built visual identities for Fortune 500 brands using AI-native workflows. Her work has been featured at MoMA, Cannes Lions, and the Venice Biennale.",
    imagePath   : "assets/speakers/5.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "21:00" },   // updated time
      { trackNumber: 2,    day: 2, sessionId: "ses-d2-s1-t2", timeSlot: "18:00" }
    ]
  },

  {
    id          : "spk-006",
    name        : "Tariq Al-Rashidi",
    title       : "Professor of AI Ethics",
    company     : "MIT Media Lab",
    country     : "Saudi Arabia",
    bio         : "Leading global researcher on responsible AI development and governance frameworks. Tariq advises the EU AI Act working group and the African Union on national AI strategies. Author of \"The Alignment Problem\" (2024).",
    imagePath   : "assets/speakers/6.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : true,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "19:00" },   // kept p3 (removed invalid p6)
      { trackNumber: 3,    day: 5, sessionId: "ses-d5-s1-t3", timeSlot: "18:00" }, // existing
      { trackNumber: 1,    day: 4, sessionId: "ses-d4-s1-t1", timeSlot: "18:00" }  // random addition
    ]
  },

  {
    id          : "spk-007",
    name        : "Amina Diallo",
    title       : "Digital Health Strategist",
    company     : "WHO Digital Health Unit",
    country     : "Senegal",
    bio         : "Driving AI adoption in public health systems across 40+ countries. A former practicing physician turned health technologist, Amina has led digital transformation programs for ministries of health on four continents.",
    imagePath   : "assets/speakers/7.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "19:00" }    // updated time
    ]
  },

  {
    id          : "spk-008",
    name        : "Amara Osei",
    title       : "Fintech Founder",
    company     : "Algora Capital",
    country     : "Ghana",
    bio         : "Built and exited two AI-powered fintech companies with a combined valuation of $400M. Advises central banks in Latin America and the Middle East on algorithmic regulation and AI-driven credit infrastructure.",
    imagePath   : "assets/speakers/8.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: 3, day: 2, sessionId: "ses-d2-s2-t3", timeSlot: "19:00" },
      { trackNumber: 3, day: 4, sessionId: "ses-d4-s2-t3", timeSlot: "19:00" }
    ]
  },

  {
    id          : "spk-009",
    name        : "Yuna Park",
    title       : "Climate Tech Investor",
    company     : "GreenWave Ventures",
    country     : "South Korea",
    bio         : "Investing at the intersection of AI and clean energy, with a portfolio spanning 14 climate tech companies across MENA, Europe, and Southeast Asia. Yuna leads GreenWave's AI & Sustainability thesis.",
    imagePath   : "assets/speakers/9.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" }
    ]
  },

  {
    id          : "spk-010",
    name        : "Darius Mensah",
    title       : "AI Music Producer",
    company     : "SoundForge AI",
    country     : "Ghana",
    bio         : "Using generative models to co-create music with artists globally. Darius works with major labels and independent musicians on AI-native production workflows, and has scored two award-winning films entirely using AI-assisted composition.",
    imagePath   : "assets/speakers/10.png",
    linkedin    : null,
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "21:00" },   // updated time
      { trackNumber: 2,    day: 6, sessionId: "ses-d6-s1-t2", timeSlot: "18:00" }
    ]
  },

  {
    id          : "spk-011",
    name        : "Rahul Sharma",
    title       : "Head of AI Products",
    company     : "Stripe",
    country     : "India",
    bio         : "Building financial intelligence tools that power 1M+ businesses globally. A former quantitative trader turned product builder, leads Stripe's AI product division and holds patents on three fraud detection systems.",
    imagePath   : "assets/speakers/11.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: 4, day: 5, sessionId: "ses-d5-s1-t4", timeSlot: "18:00" }
    ]
  },

  {
    id          : "spk-012",
    name        : "James Carter",
    title       : "AI Researcher",
    company     : "DeepMind",
    country     : "UK",
    bio         : "Working on protein folding, drug discovery, and AI-assisted genomics at DeepMind. Part of the core AlphaFold team. Current research focuses on AI for rare disease detection in underserved populations.",
    imagePath   : "assets/speakers/12.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : null,
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p4", timeSlot: "20:00" }    // updated time
    ]
  },

  {
    id          : "spk-013",
    name        : "Kwame Asante",
    title       : "Founder & CEO",
    company     : "EcoSense AI",
    country     : "Ghana",
    bio         : "Building real-time carbon intelligence platforms for enterprises. Kwame raised $22M to expand AI-driven ESG reporting tools now used by 200+ companies across Africa and Europe. Named Forbes 30 Under 30 Africa 2024.",
    imagePath   : "assets/speakers/13.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "17:00" }
    ]
  },

  {
    id          : "spk-014",
    name        : "Lena Vogel",
    title       : "AI Filmmaker",
    company     : "Frame Zero",
    country     : "Germany",
    bio         : "Making films with AI co-directors. Lena's debut feature premiered at Sundance and screened at Cannes. She runs Frame Zero, a studio pioneering AI-native cinema production and new storytelling formats in the generative era.",
    imagePath   : "assets/speakers/14.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "21:00" },   // updated time
      { trackNumber: 2,    day: 4, sessionId: "ses-d4-s1-t2", timeSlot: "18:00" }
    ]
  },

  {
    id          : "spk-015",
    name        : "Mohamed El-Sayed",
    title       : "Group Partner",
    company     : "Y Combinator",
    country     : "Egypt",
    bio         : "Advising 60+ AI startups on go-to-market strategy and fundraising as a Group Partner at Y Combinator. A two-time founder with exits to Google and Salesforce, Mohamed focuses on AI startups in healthcare and climate.",
    imagePath   : "assets/speakers/15.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: null, day: 1, sessionId: "ses-d1-p2", timeSlot: "18:00" },   // updated time
      { trackNumber: 3,    day: 6, sessionId: "ses-d6-s1-t3", timeSlot: "18:00" }
    ]
  },

  {
    id          : "spk-016",
    name        : "Dr. Wei Chen",
    title       : "Chief Data Scientist",
    company     : "JP Morgan AI Lab",
    country     : "USA",
    bio         : "Running AI transformation across global banking operations at JP Morgan. Dr. Chen leads a team of 120 AI engineers specialising in fraud detection and credit risk modeling. PhD in computational finance from Carnegie Mellon.",
    imagePath   : "assets/speakers/16.png",
    linkedin    : "https://linkedin.com",
    bmProfile   : "https://brainsmingle.com",
    featured    : false,
    appearances : [
      { trackNumber: 4, day: 6, sessionId: "ses-d6-s1-t4", timeSlot: "18:00" }
    ]
  }

];


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
 * Get unique trackNumbers a speaker appears in (null = Opening Day, excluded).
 * Used to render track pills on speaker cards.
 */
function getSpeakerTrackNumbers(speaker) {
  const nums = speaker.appearances
    .map(a => a.trackNumber)
    .filter(n => n !== null);
  return [...new Set(nums)];
}