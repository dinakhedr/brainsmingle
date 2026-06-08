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
    longDescription  : "A track for educators, EdTech builders, L&D leaders, academics, and anyone responsible for building human capability in an AI world. From personalized learning systems that adapt in real time to AI-powered upskilling platforms reshaping corporate training — this track covers the full transformation of how humans learn, grow, and stay relevant in the age of intelligence.",
    focusAreas       : [
      "Personalized Learning",
      "EdTech",
      "Corporate L&D",
      "Workforce Development",
      "Academic Research",
      "Skills & Upskilling",
      "Adaptive Learning",
      "Learning Analytics"
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
    longDescription  : "Generative AI didn't just give creatives new tools — it changed what it means to make something. Exploring how AI is reshaping design, content production, media, entertainment, and creative workflows. From the studios using AI to produce at scale, to the individual creators redefining authorship — this track covers creative business models, digital rights, and the future of what it means to make something.",
    focusAreas       : [
      "Generative AI",
      "Design",
      "Content Creation",
      "Media & Entertainment",
      "Creative Workflows",
      "Creative Business",
      "Digital Rights",
      "Future of Creativity"
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
    longDescription  : "Five days exploring how AI is rewriting the rules of entrepreneurship, where the capital is flowing, and what it takes to win in the most competitive startup landscape in history. For founders, operators, and investors navigating AI-native company building — from raising capital to shipping product fast, finding distribution, and building teams that move at the speed the market demands.",
    focusAreas       : [
      "AI-Native Companies",
      "Venture Capital",
      "Product Development",
      "GTM Strategy",
      "Fundraising",
      "Scaling",
      "Arab World Ecosystem",
      "Future of Entrepreneurship"
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
    longDescription  : "This track is for every leader, manager, and professional who needs to understand how AI is transforming sales, marketing, finance, operations, and strategy. Not the how of AI, but what it means for every business function and every business decision. Covering sales and revenue, marketing and growth, operations, finance and risk, business strategy, leadership and change, workforce transformation, and the future of business models.",
    focusAreas       : [
      "Sales & Revenue",
      "Marketing & Growth",
      "Operations",
      "Finance & Risk",
      "Business Strategy",
      "Leadership & Change",
      "Workforce Transformation",
      "Future Business Models"
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
    longDescription  : "How the physical infrastructure powering the AI revolution is being built, and how software development, security, and digital transformation are being reinvented from the ground up. A track for engineers, developers, CTOs, chip designers, and infrastructure leaders covering chips and semiconductors, AI hardware, software development, LLMs in production, cybersecurity, digital transformation, data infrastructure, and the future of engineering.",
    focusAreas       : [
      "Chips & Semiconductors",
      "AI Hardware",
      "Software Development",
      "LLMs in Production",
      "Cybersecurity",
      "Digital Transformation",
      "Data Infrastructure",
      "Future of Engineering"
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
