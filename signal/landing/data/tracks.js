/**
 * tracks.js — Signal: AI
 * Single source of truth for all 5 tracks.
 * Referenced by: days.js, agenda.js, speakers.js, sponsors.js, render.js
 * and all landing pages via <script src="../data/tracks.js"></script>
 *
 * Access: SIGNAL_TRACKS (array)
 *         SIGNAL_TRACKS_MAP (object keyed by slug — for fast lookup)
 *         SIGNAL_TRACKS_BY_NUMBER (object keyed by trackNumber — for agenda grid lookup)
 */

const SIGNAL_TRACKS = [
  {
    trackNumber      : 1,
    slug             : "ld",
    fullName         : "AI in Learning & Development",
    shortName        : "AI in L&D",
    color            : "#00E8A2",
    accentRgb        : "0, 232, 162",
    cssClass         : "track-ld",
    trackClass       : "track-1",
    tagline          : "The Learning Frequency",
    shortDescription : "Exploring how AI is transforming learning across every context — from classrooms and universities to corporate training rooms and the future of work.",
    longDescription  : "For educators, L&D professionals, and EdTech innovators working at the intersection of learning and technology. This track looks at how AI is transforming education and workforce development, from adaptive learning systems to large-scale upskilling in organizations preparing for the future of work.",
focusAreas       : [
  "Personalized Learning — Adaptive systems that respond to individual learners in real time",
  "EdTech Innovation — Next-generation intelligent learning platforms",
  "Corporate L&D — Reinventing workplace training for an AI-first economy",
  "Workforce Development — Scalable upskilling for fast-changing roles",
  "Academic Research — How AI accelerates discovery and knowledge creation",
  "Adaptive Curricula — Learning systems that evolve with learner behavior",
  "Learning Analytics — Measuring real outcomes beyond completion rates",
  "Future of Work — Skills needed in an AI-transformed job market"
],
    targetGroups     : [
      "Educators & Academics",
      "EdTech Founders",
      "L&D Leaders",
      "HR & People Leaders",
      "Corporate Trainers",
      "University Administrators"
    ],
    dayThemes        : { day2: null, day3: null, day4: null, day5: null, day6: null },
    sessionCount     : null,
    sponsorLogoPath  : null
  },

  {
    trackNumber      : 2,
    slug             : "creative",
    fullName         : "AI in Creative Industries",
    shortName        : "AI in Creative",
    color            : "#F53E9F",
    accentRgb        : "245, 62, 159",
    cssClass         : "track-creative",
    trackClass       : "track-2",
    tagline          : "The Creative Frequency",
    shortDescription : "Exploring how generative AI is reshaping design, content, media, and entertainment — and what it means for human creativity.",
    longDescription  : "For creative professionals working with design, content, and media in an AI-driven world. This track explores how AI is transforming creative production, from generative tools to new workflows that are changing how content is imagined, built, and distributed.",
    focusAreas       : [
  "Generative AI — Tools reshaping creative production at every scale",
  "Design — AI-driven visual identity, branding, and creative direction",
  "Content Creation — Faster production without losing creative voice",
  "Media & Entertainment — AI in film, music, storytelling, and production",
  "Creative Workflows — Redesigning pipelines around AI capabilities",
  "Creative Business — Pricing, monetization, and studio models in the AI era",
  "Digital Rights — Ownership and attribution in AI-generated work",
  "Future of Creativity — Human creativity in an AI-native world"
],
    targetGroups     : [
      "Designers & Art Directors",
      "Content Creators",
      "Media & Entertainment Professionals",
      "Marketing & Brand Leaders",
      "Creative Tech Founders"
    ],
    dayThemes        : { day2: null, day3: null, day4: null, day5: null, day6: null },
    sessionCount     : null,
    sponsorLogoPath  : null
  },

  {
    trackNumber      : 3,
    slug             : "startups",
    fullName         : "AI in Startups & Entrepreneurship",
    shortName        : "AI in Startups",
    color            : "#E8F200",
    accentRgb        : "232, 242, 0",
    cssClass         : "track-startups",
    trackClass       : "track-3",
    tagline          : "The Builder Frequency",
    shortDescription : "The definitive track for everyone building, funding, and scaling AI companies — from first idea to generational business.",
    longDescription  : "For entrepreneurs and investors navigating the AI startup ecosystem. This track focuses on how AI is changing entrepreneurship, from faster product cycles and leaner teams to new venture capital trends and evolving go-to-market strategies.",
    focusAreas       : [
  "AI-Native Companies — Building products where AI is the core, not a feature",
  "Venture Capital — Investment trends and what VCs are betting on",
  "Product Development — Rapid prototyping to early traction using AI",
  "GTM Strategy — Distribution strategies in crowded AI markets",
  "Fundraising — Competing in a high-intensity funding environment",
  "Scaling — From first users to first million revenue efficiently",
  "Regional Ecosystem — Emerging opportunities across the Arab world",
  "Future of Entrepreneurship — New rules of building in an AI-first world"
],
    targetGroups     : [
      "Founders & Co-Founders",
      "Startup Operators",
      "Early-Stage Investors",
      "Product Managers",
      "Accelerator & Hub Professionals"
    ],
    dayThemes        : { day2: null, day3: null, day4: null, day5: null, day6: null },
    sessionCount     : null,
    sponsorLogoPath  : null
  },

  {
    trackNumber      : 4,
    slug             : "business",
    fullName         : "AI in Business & Enterprise",
    shortName        : "AI in Business",
    color            : "#F5A623",
    accentRgb        : "245, 166, 35",
    cssClass         : "track-business",
    trackClass       : "track-4",
    tagline          : "The Enterprise Frequency",
    shortDescription : "AI is not a technology story — it is a business story. For every leader and professional navigating how AI transforms every business function.",
    longDescription  : "For executives and professionals leading AI adoption inside organizations. This track examines how AI is reshaping business functions, decision-making, and workforce structures, and how companies are adapting to an AI-driven economy.",
    focusAreas       : [
  "Sales & Revenue — AI across the full revenue cycle",
  "Marketing & Growth — Personalization, automation, and performance scaling",
  "Operations — Process optimization and efficiency through AI",
  "Finance & Risk — AI-powered forecasting, modeling, and decision support",
  "Business Strategy — Redefining competitive advantage in an AI-first world",
  "Leadership & Change — Managing transformation at organizational scale",
  "Workforce Transformation — The evolving structure of teams and roles",
  "Future Business Models — New opportunities enabled by AI adoption"
],
    targetGroups     : [
      "C-Suite & Senior Leaders",
      "Business Unit Heads",
      "Operations Professionals",
      "Sales & Marketing Leaders",
      "Strategy & Transformation Consultants"
    ],
    dayThemes        : { day2: null, day3: null, day4: null, day5: null, day6: null },
    sessionCount     : null,
    sponsorLogoPath  : null
  },

  {
    trackNumber      : 5,
    slug             : "tech",
    fullName         : "AI in Tech & Infrastructure",
    shortName        : "AI in Tech",
    color            : "#00D4FF",
    accentRgb        : "0, 212, 255",
    cssClass         : "track-tech",
    trackClass       : "track-5",
    tagline          : "The Infrastructure Frequency",
    shortDescription : "The complete story of AI from silicon to software — how the physical infrastructure powering the AI revolution is being built.",
    longDescription  : "For technical professionals working on the systems behind AI. This track covers how AI is transforming infrastructure, engineering workflows, and system design, including deployment, scaling, security, and the future of software development in an AI-first world.",
    focusAreas       : [
  "Chips & Semiconductors — Hardware powering the AI revolution",
  "AI Hardware — Data centers, edge computing, and infrastructure scale",
  "Software Development — How AI is changing engineering workflows",
  "LLMs in Production — Deploying and scaling models reliably",
  "Cybersecurity — New risks and defense systems in AI environments",
  "Digital Transformation — Modernizing legacy systems for AI readiness",
  "Data Infrastructure — Preparing and structuring data for AI systems",
  "Future of Engineering — How engineering roles evolve in the AI era"
],
    targetGroups     : [
      "Software Engineers & Developers",
      "CTOs & Engineering Leaders",
      "Data Scientists & ML Engineers",
      "Infrastructure & DevOps Professionals",
      "Chip & Hardware Designers"
    ],
    dayThemes        : { day2: null, day3: null, day4: null, day5: null, day6: null },
    sessionCount     : null,
    sponsorLogoPath  : null
  }
];


/**
 * SIGNAL_TRACKS_MAP — keyed by slug
 * Usage: SIGNAL_TRACKS_MAP["tech"].color  →  "#00D4FF"
 */
const SIGNAL_TRACKS_MAP = SIGNAL_TRACKS.reduce((map, track) => {
  map[track.slug] = track;
  return map;
}, {});


/**
 * SIGNAL_TRACKS_BY_NUMBER — keyed by trackNumber (1–5)
 * Used by agenda.js to reference tracks without hardcoding slugs.
 * Usage: SIGNAL_TRACKS_BY_NUMBER[3].slug  →  "startups"
 */
const SIGNAL_TRACKS_BY_NUMBER = SIGNAL_TRACKS.reduce((map, track) => {
  map[track.trackNumber] = track;
  return map;
}, {});