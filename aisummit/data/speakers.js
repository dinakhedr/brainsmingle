/**
 * speakers.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the Validated tab, rows with readyToPublish ticked.
 * Generated 2026-08-29 00:57 · 40 speakers.
 *
 * Track numbers: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * null = Opening Day, no track.
 */

const SPEAKER_PHOTO_BASE = "assets/speakers/";
const HOME_SPEAKER_LIMIT = 12;

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
    title       : "Tech Entrepreneur",
    company     : "Vectara, Cloudera, and Aptivia.",
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
    id          : "spk-010",
    order       : 2,
    name        : "Maged Ghoneima",
    title       : "Angel Investor",
    company     : "M-Empire Angels",
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
    id          : "spk-003",
    order       : 3,
    name        : "Kate Barker",
    title       : "Chief Futurist",
    company     : "NEOM",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-003.png",
    bio         : "TIME100 AI Impact Award honouree and world's No.1-ranked Chief Futurist. Advises heads of state, boards, and global CEOs on AI transformation and leadership. Doctoral research on AI, leadership, and trust spanning 6,000+ executives worldwide. MIT faculty, Forbes contributor, and author of Hidden Power. Featured on CNN, BBC, and CNBC, with keynotes at Davos, the UN, SXSW, and London Business School.",
    linkedin    : "https://www.linkedin.com/in/drkatebarker/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-001",
    order       : 4,
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
    id          : "spk-011",
    order       : 5,
    name        : "Hani Elmalky",
    title       : "Head of AI & Innovation, GFiber",
    company     : "Google",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-011.png",
    bio         : "Product and technology executive with 20+ years at the intersection of large-scale infrastructure, AI, and connectivity. Currently leads AI strategy across an enterprise stack, embedding intelligence into operations and customer experience at scale. Pioneered the industry's first commercially deployable virtualization framework and helped shape cloud-native architectures that redefined how networks are built. Contributor to global networking standards, patent holder, and published author in distributed systems. Holds an entrepreneurship and finance degree from The Wharton School. Passionate about AI infrastructure economics, agentic workloads, and the lessons of prior technology cycles.",
    linkedin    : "https://www.linkedin.com/in/helmalky/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-024",
    order       : 6,
    name        : "Sami AlAhmed",
    title       : "Founder & CEO",
    company     : "Doroob",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-024.png",
    bio         : "Syrian Entrepreneur and technical founder with 10+ years building ventures that connect MENA youth to opportunity. Founder of Emonovo (formerly MARJ3), the region's leading study-abroad platform with 2.5M+ monthly users and 350+ university partners, which began with Khatwa, a volunteer network founded in 2013. Currently CEO & Co-Founder of Doroob, building education-to-employment pathways in Syria as the country rebuilds. Stanford AMENDS fellow, WEF Global Shaper, and TEDx speaker. Passionate about AI, automation, and helping youth go from learning to earning.",
    linkedin    : "https://www.linkedin.com/in/samialahmad/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-009",
    order       : 7,
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
    id          : "spk-021",
    order       : 8,
    name        : "Moustafa Eshra",
    title       : "Data & AI Enterprise Architect",
    company     : "IBM",
    country     : "France",
    countryCode : "FR",
    photo       : "spk-021.png",
    bio         : "Data & AI Architect with 15+ years of experience helping organizations solve complex data and digital challenges. Specializes in guiding developers into GenAI, with deep expertise in machine learning, enterprise architecture, and creative problem-solving. Passionate about coding and turning data into real-world impact.",
    linkedin    : "https://www.linkedin.com/in/moustafa-eshra/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-004",
    order       : 9,
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
    id          : "spk-014",
    order       : 10,
    name        : "Hend El Damaty",
    title       : "AI & Digital Transformation Strategist",
    company     : "AI Global",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-014.png",
    bio         : "Digital Transformation and AI Strategy Consultant based in Germany with a background in Electrical and Systems Engineering. Has worked with organizations including DFKI, Microsoft, Bosch, Amazon, and the International Olympic Committee across AI strategy, product management, and Industry 4.0/5.0. Co-founded tech ventures spanning AI, education, and real estate. Passionate about connecting European, Egyptian, and MENA innovation ecosystems and building bridges between technology, people, and business.",
    linkedin    : "https://www.linkedin.com/in/hend-eldamaty/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : true,
    appearances : []
  },

  {
    id          : "spk-022",
    order       : 11,
    name        : "Ebrahem Anwar",
    title       : "Founder",
    company     : "ICCY",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-022.png",
    bio         : "Entrepreneur, product leader, and angel investor with 15+ years building tech companies across Egypt and Saudi Arabia. Founder of ICCY, an AI-powered platform helping experts earn from their knowledge, and Raed ElBusiness, a leading Arabic entrepreneurship platform. Mentored 100+ startups, trained 50,000+ professionals. Passionate about making AI accessible for entrepreneurs.",
    linkedin    : "https://www.linkedin.com/in/ebrahemanwar/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 3, sessionId: "ses-d3-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-023",
    order       : 12,
    name        : "Alaa Mukhtar",
    title       : "Sales Development Representative",
    company     : "Opentext",
    country     : "UAE",
    countryCode : "AE",
    photo       : "spk-023.png",
    bio         : "Tech sales professional at OpenText, specializing in B2B enterprise software solutions and outbound prospecting. Previously at SleekFlow. Passionate about engaging business leaders and driving growth through technology.",
    linkedin    : "https://www.linkedin.com/in/alaamukhtar/",
    bmProfile   : "https://brainsmingle.com/profile@alaa3964",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-005",
    order       : 13,
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
    id          : "spk-008",
    order       : 14,
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
    order       : 15,
    name        : "Taha Ali",
    title       : "CEO",
    company     : "GroHub",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-012.png",
    bio         : "B2B growth strategist with 10+ years of commercial experience, helping 70+ companies build go-to-market strategies and expand into the Saudi market. Host of GroHub Podcast, where he shares growth tactics and scaling insights for B2B founders and revenue leaders.",
    linkedin    : "https://www.linkedin.com/in/eng-taha-ali/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-026",
    order       : 16,
    name        : "Ziad Elaily",
    title       : "AI Practice & Business Lead",
    company     : "PwC ETIC",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-026.png",
    bio         : "Ziad Elalaily is an AI engineering leader at PwC, focused on turning generative AI and machine learning into scalable, production-ready solutions. He combines deep technical expertise with business strategy, team leadership, and solution architecture, helping organizations move from AI experimentation to measurable real-world impact.",
    linkedin    : "https://www.linkedin.com/in/ziad-elalaily-195a44140/",
    bmProfile   : "https://brainsmingle.com/ziad6252",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 3, sessionId: "ses-d3-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-028",
    order       : 17,
    name        : "Abdelrahman Osama",
    title       : "Head of Design",
    company     : "Mal",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-028.png",
    bio         : "Product design leader with 20+ years of experience building trust-centered products across fintech, government, and AI. Currently Head of Design at Mal, the AI-native Islamic digital bank behind the largest fintech seed round in MEA. Previously shipped applied AI into high-stakes government programs at Scale AI, including Qatar's national AI workforce platform. Co-founded a mobility startup as CPO, scaling it to 20,000+ trips. Writes and speaks about agentic interfaces, explainability, and designing AI products people actually trust.",
    linkedin    : "https://www.linkedin.com/in/abdelrahman/",
    bmProfile   : "https://brainsmingle.com/abdelrahman4372",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-029",
    order       : 18,
    name        : "Kamal Ghamry",
    title       : "Marketing Manager",
    company     : "SABIKA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-029.png",
    bio         : "Marketing Manager with 10+ years of experience transforming brands across e-commerce, SaaS, and non-profit sectors in MENA markets. Currently at TWO, leading cross-functional teams to optimize pricing and customer engagement for e-commerce portfolios. Previously redesigned digital outreach at Mersal Foundation, expanding organic reach and community loyalty. Specializes in lifecycle marketing, SEO, CRM, and building high-engagement ecosystems.",
    linkedin    : "https://www.linkedin.com/in/kamal-ghamry/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-025",
    order       : 19,
    name        : "Mohamed Zahran",
    title       : "Head of AI/ML",
    company     : "Adam ai",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-025.png",
    bio         : "Head of AI/ML, author, researcher, and co-inventor of 4 patent publications with 9+ years of experience delivering AI solutions across autonomous vehicles, ed-tech, and digital marketing. Leverages Generative AI, deep learning, computer vision, and data science to develop innovative, award-winning products. Passionate about turning cutting-edge research into real-world impact.",
    linkedin    : "https://www.linkedin.com/in/mohzahran/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-027",
    order       : 20,
    name        : "Sherouk Ghallab",
    title       : "Founder & Digital Learning Strategist",
    company     : "Noor Edtech",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-027.png",
    bio         : "Sherouk Ghallab is a Digital Learning Consultant with 13+ years of experience across Egypt, the Gulf, the UK, and Europe. She is the Founder of Noor, an AI-powered career guidance platform for students, and holds an MBA and MSc in Smart EdTech from Université Côte d'Azur.",
    linkedin    : "https://www.linkedin.com/in/sherouk-ghallab/",
    bmProfile   : "https://brainsmingle.com/sherouk1278",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 3, sessionId: "ses-d3-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-006",
    order       : null,
    name        : "Yasmine Aguib",
    title       : "co-Chief, Research & Innovation Officer",
    company     : "Magdi Yacoub Heart Foundation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-006.png",
    bio         : "Technology and innovation strategist leading the Research & Innovation Centre at the Magdi Yacoub Heart Foundation. She builds AI-enabled health ecosystems integrating genomics, digital twins, and precision medicine. A Technical University of Munich graduate and Honorary Senior Research Fellow at Imperial College London, her work spans Germany, the UK, and Egypt driving equitable healthcare innovation.",
    linkedin    : "https://www.linkedin.com/in/yasmine-aguib-464776184/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }]
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
    appearances : [{ trackNumber: 4, day: 3, sessionId: "ses-d3-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-013",
    order       : null,
    name        : "Nadeem Abdin",
    title       : "Partner & VP Business Development",
    company     : "AImpulse.io",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-013.png",
    bio         : "Business development and commercial strategy leader driving global market expansion across Europe, Scandinavia, Egypt, KSA, and the UAE. Specializing in the \"Dedicated Team\" model, providing senior-led Egyptian engineering squads to international clients. 15+ years of business leadership with a Telecommunication Engineering background and C-suite consultancy expertise.",
    linkedin    : "https://www.linkedin.com/in/nadeem-abdin-7bb89524/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-015",
    order       : null,
    name        : "Amr Helal",
    title       : "Founder",
    company     : "DotPy",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-015.png",
    bio         : "CEO, Founder, and Data Scientist at DotPy, delivering online and offline courses in AI and data analysis. AWS Certified Machine Learning Specialist with an Advanced Diploma in AI from MIT. Holds a Bachelor's in Mechanical Engineering. Passionate about innovation and knowledge sharing, actively contributing to AI-driven solutions and fostering growth in the AI and data science community.",
    linkedin    : "https://www.linkedin.com/in/amr-helal-0061a0183/",
    bmProfile   : "https://brainsmingle.com/hend6987",
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-016",
    order       : null,
    name        : "Ehab Khaled Fawzi",
    title       : "Creative Director",
    company     : "Develovent Network",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-016.png",
    bio         : "Creative Director with 10+ years in advertising, blending a musician's eye for detail with strategic creativity. Evolved from copywriter to Creative Director across top agencies including Kijamii, Media Hub, Hive Analytics, and Mint & Co. Expert in strategy, copywriting, digital activations, and campaign production. Passionate about nurturing ideas into products that attract and linger in minds.",
    linkedin    : "linkedin.com/in/ehab-khaled-fawzi-65809697",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-017",
    order       : null,
    name        : "Abdelrahman Kandil",
    title       : "Founder",
    company     : "Next Academy",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-017.png",
    bio         : "Pharmacist turned Business Strategist with 15 years of experience across manufacturing, e-commerce, real estate, and more. Founder of Next Academy, redefining industry education with 1,000+ graduates, and Ex's Agency, helping companies scale through strategic marketing. 210+ brands developed, 30+ companies restructured, 2,000+ professionals trained. MBA holder passionate about helping startups scale faster and build sustainable legacies.",
    linkedin    : "https://www.linkedin.com/in/dr-abdelrahman-kandil/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-018",
    order       : null,
    name        : "Abdallah Amer",
    title       : "Founder & CEO",
    company     : "Capsules Group",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-018.png",
    bio         : "Founder and CEO of Capsules Group, an education holding company in Cairo encompassing English Capsules Academy (4 branches), SML European language institute, and Executive Mastery Camp (EMC). Clients include Banque Misr, Carrefour, and Misr Insurance. Through EMC, he helps founders and senior leaders build delegation systems and organizational design to shift from operating a business to owning one. Currently pursuing a Doctorate of Business Administration. Speaks and writes in Arabic and English on execution, systems, and organizational discipline.",
    linkedin    : "https://www.linkedin.com/in/amership9/",
    bmProfile   : "https://brainsmingle.com/AbdullahAmer",
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-019",
    order       : null,
    name        : "Ahmed AbouZaid",
    title       : "Senior Product Engineer",
    company     : "Camunda",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-019.png",
    bio         : "Solutions Architect and DevOps Engineer based in Berlin with 14+ years of hands-on experience across Cloud-Native, Kubernetes, and DevSecOps. Open-source advocate, book author, and creator of the Dynamic DevOps Roadmap. Holds an M.Sc. in Data Engineering from Edinburgh Napier University and multiple certifications including CKS, CKA, and AWS. Passionate about automation, data, and DevOps transformation.",
    linkedin    : "https://www.linkedin.com/in/aabouzaid/",
    bmProfile   : "https://brainsmingle.com/aabouzaid",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-020",
    order       : null,
    name        : "Nader Sayed",
    title       : "Founder",
    company     : "Tawasul for AI transformation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-020.png",
    bio         : "Enterprise Architect and Digital Transformation Expert with 12+ years of experience turning complex operations into scalable digital products. Sits at the intersection of business, technology, and product — designing smart systems powered by automation, AI/ML, and IoT. Combines product thinking with solution architecture to deliver and scale real impact.",
    linkedin    : "linkedin.com/in/nader-sayed-y",
    bmProfile   : "https://brainsmingle.com/nader2tawasol",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-030",
    order       : null,
    name        : "Ahmed Elzoghby",
    title       : "UX Research Lead",
    company     : "UX Labs",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-030.png",
    bio         : "A Product Design Expert with 13 years of hand-on experience focused on Product Strategy, User Research, and Interaction Design, with an educational background in Architecture. Enjoys maximizing the value of Human Centered Design for the people interacting with products of over 50+ entities that I’ve crossed path with through direct work or mentorship capacity.",
    linkedin    : "https://www.linkedin.com/in/azoughby/",
    bmProfile   : "https://brainsmingle.com/ahmed4721",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-031",
    order       : null,
    name        : "Shaimaa Emam",
    title       : "Senior Program Manager",
    company     : "Ascendra",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-031.png",
    bio         : "Program leader with 8+ years of experience at the intersection of entrepreneurship, innovation, and ecosystem building across Egypt, Africa, and beyond. At enpact, manages end-to-end programs across med-tech, green tech, and creative industries, supporting 300+ businesses across 5 countries. Has partnered with international donors including GIZ, DROSOS Foundation, and UNHCR. Co-founded Mishkah Art School and built a 400+ green startup database across MENA. Passionate about nurturing talent, mentoring early-stage founders, and creating lasting partnerships.",
    linkedin    : "https://www.linkedin.com/in/shaimaa-emam/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-032",
    order       : null,
    name        : "Mahmoud Abdelhamed",
    title       : "Senior Computer Vision Engineer",
    company     : "",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-032.png",
    bio         : "Senior Computer Vision Engineer with 7+ years of experience building AI systems for real-world applications. Specializes in 3D Vision, Visual SLAM, deep learning, and multimodal systems combining images, engineering documents, and language models. Recently designing agentic workflows for engineering applications including design review and compliance verification. Holds an Erasmus Mundus M.Sc. in Computer Vision and Medical Imaging, with a publication at SPIE Medical Imaging 2023. Passionate about where computer vision, multimodal AI, and production engineering converge.",
    linkedin    : "https://www.linkedin.com/in/mahmoud-khaled-nasr/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-033",
    order       : null,
    name        : "Ahmed Aabed",
    title       : "Senior Engineering Manger",
    company     : "Yassir",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-033.png",
    bio         : "Senior Engineering Manager with 13+ years of experience across DevOps, infrastructure, and engineering leadership. Former CTO at Zyda and Head of SRE at Nana, with previous roles at Instabug, Swvl, and Crowd Analyzer. Started in cybersecurity as a Malware Hunter at EG-CERT. Passionate about building high-performing engineering teams that ship products with real business impact.",
    linkedin    : "https://www.linkedin.com/in/ahmadaabed/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-034",
    order       : null,
    name        : "Ahmed El Fakhrany",
    title       : "AWS Platform Engineer",
    company     : "Schuberg Phillis",
    country     : "Netherlands",
    countryCode : "NL",
    photo       : "spk-034.png",
    bio         : "Infrastructure and platform engineer with 25 years of experience across Kubernetes, OpenShift, Linux/RHEL, AWS, Terraform, and HashiCorp Vault, most recently at SWIFT. In 2026, he left to teach full-time. Under the DevCloudLab name, he produces Arabic-language DevOps and Linux certification courses for learners across MENA, running the entire operation himself — writing, recording, editing, and publishing each course. Holds RHCSA, RHCE, CKA, AWS, and Vault certifications.",
    linkedin    : "https://www.linkedin.com/in/aelfakharany/",
    bmProfile   : "https://brainsmingle.com/ahmed9799",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }, { trackNumber: 1, day: 2, sessionId: "ses-d2-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-035",
    order       : null,
    name        : "Ahmed Sysy",
    title       : "AI Content Creator",
    company     : "",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-035.png",
    bio         : "AI-powered video creator helping brands, educators, and creators produce high-impact content faster and without bloated production costs. Specializes in ads that sell without shouting, educational content, documentary-style storytelling, and faceless formats for YouTube, TikTok, and Reels. Blends AI tools with human storytelling to handle the full stack — scripting, voiceover, editing, visuals, and delivery — in one streamlined system.",
    linkedin    : "https://www.linkedin.com/in/ahmed-sysy/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 5, sessionId: "ses-d5-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-036",
    order       : null,
    name        : "Hussein Galal",
    title       : "Staff Software Engineer",
    company     : "SUSE",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-036.png",
    bio         : "Staff Software Engineer at SUSE with 10+ years of experience in Linux systems and cloud-native engineering. Spent nearly 5 years at Rancher Labs building Kubernetes infrastructure, following a foundation in Linux system administration. Certified Kubernetes Administrator (CKA) with a B.Sc. in Computer Science from Alexandria University. Passionate about open-source, Linux, and container orchestration.",
    linkedin    : "https://www.linkedin.com/in/galal-hussein/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-037",
    order       : null,
    name        : "Mohamed ElAswad",
    title       : "AI & Digital Marketing Consultant & Trainer",
    company     : "",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-037.png",
    bio         : "Digital Marketing Consultant and Trainer with 10+ years of experience turning ideas into powerful strategies that drive results. Has managed social media for celebrities, consulted for top brands, and trained professionals and organizations globally. Expertise spans marketing strategy, eCommerce launches, and global social media campaigns. Passionate about creativity, results, and staying ahead in an ever-evolving digital landscape.",
    linkedin    : "https://www.linkedin.com/in/mohamad-elaswad/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-038",
    order       : null,
    name        : "Bassem Ahmed",
    title       : "CEO",
    company     : "Premier Rank",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-038.png",
    bio         : "CEO and E-Commerce Strategist at Premier Rank E-Business Solutions, a leading agency across Egypt and Saudi Arabia. With 14+ years in MENA e-commerce, Bassem has worked on 1M+ product pages and trained 1,400+ professionals. Specializes in catalog engineering, marketplace operations (Amazon, Noon, Shopify), and e-commerce automation. Ranked top 10 among Arabic-speaking e-commerce creators on LinkedIn by Favikon.",
    linkedin    : "https://www.linkedin.com/in/bassem-ahmed7/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : []
  },

  {
    id          : "spk-039",
    order       : null,
    name        : "Ahmed Esmail",
    title       : "Business Development Engineer",
    company     : "EVRAID",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-039.png",
    bio         : "Business Development Engineer blending an engineering background with a passion for technology, business, and personal branding. Experienced in sales, partnerships, and the Electric Vehicle industry. Also an educator and content creator, helping students and professionals build their skills, strengthen their personal brand, and access real opportunities.",
    linkedin    : "https://www.linkedin.com/in/esmaillab/",
    bmProfile   : "https://brainsmingle.com/esmaillab",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 6, sessionId: "ses-d6-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-040",
    order       : null,
    name        : "Fady Fouad",
    title       : "Art Director / Ai film maker",
    company     : "Fndmntl Labs",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-040.png",
    bio         : "Art Director and AI Specialist focused on visual storytelling, filmmaking, and the evolving relationship between creativity and artificial intelligence. His work explores how art direction and emerging AI technologies come together to shape cinematic worlds and visual narratives. From concept development and character creation to cinematography and final execution, he integrates AI throughout the creative and filmmaking process.",
    linkedin    : "https://www.linkedin.com/in/fady-fouad-a57b53203/overlay/contact-info/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 2, sessionId: "ses-d2-s1-t2", timeSlot: "18:00" }]
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
