/**
 * speakers.js — AI Summit 2026
 * GENERATED FILE. Do not edit by hand.
 * Source: the Validated tab, rows with readyToPublish ticked.
 * Generated 2026-10-15 14:17 · 135 speakers.
 *
 * Track numbers: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * null = Opening Day, no track.
 */

const SPEAKER_PHOTO_BASE = "assets/speakers/";
const HOME_SPEAKER_LIMIT = 25;

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
    id          : "spk-010",
    order       : 1,
    name        : "Maged Ghoneima",
    title       : "Founder",
    company     : "M Empire",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-010.png",
    bio         : "Dr. Maged Ghoneima is an angel investor, professor, and ecosystem builder. Through M Empire Angels, he has invested in more than 200 startups across over 30 countries. He is the Founder and General Partner of M Empire Angels, and Chairman of Startup Egypt, a community he founded to help entrepreneurs grow through access to networks, mentorship, programs, partnerships, and real ecosystem support. A scholar with a PhD from Northwestern University and industry experience at Intel and NVIDIA, Maged is also a Professor of Mechatronics at Ain Shams University. There, he founded the ASU Innovation Hub, creating a university-based platform to support students, researchers, and entrepreneurs in turning ideas, research, and technologies into real ventures and innovation-driven impact.",
    linkedin    : "https://www.linkedin.com/in/mghoneima/",
    bmProfile   : "https://brainsmingle.com/maged6356",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "22:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s8-t0", timeSlot: "19:00" }]
  },

  {
    id          : "spk-094",
    order       : 2,
    name        : "Omar El-Shenety",
    title       : "Economist & Financial Advisor",
    company     : "Zilla Capital",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-094.png",
    bio         : "Managing Partner at Zilla Capital, a leading investment bank in the MENA region, with 20 years of experience in investment banking and strategy consulting. He leads a team of seasoned bankers delivering value-added solutions to clients across sectors and markets. He holds a Global Executive MBA from Columbia Business School and London Business School, a Master of Laws from King's College London, and a bachelor's in economics from the American University in Cairo, where he also serves as Adjunct Faculty teaching finance and economics. A Research Consultant at the Egyptian Center for Economic Studies, he is passionate about analyzing the key economic issues facing the Middle East and regularly publishes articles and reports across media outlets.",
    linkedin    : "https://www.linkedin.com/in/omarshenety/",
    bmProfile   : "https://brainsmingle.com/omarshenety",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 2, sessionId: "ses-d2-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-102",
    order       : 3,
    name        : "Hatem Sallam",
    title       : "Co-Founder and CEO",
    company     : "EduSofx",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-102.png",
    bio         : "Co-Founder and CEO of EduSofx, enabling impactful digital transformation in education by leveraging cutting-edge technologies and scalable solutions. With over two years in this role, he focuses on fostering growth, empowering organizations, and advancing the ed-tech sector through innovation, collaboration, and strategic leadership. His previous experience as CDO and Education Principal Transformation Architect at Microsoft sharpened his expertise in digital transformation and enterprise architecture. He is passionate about creating value for educational institutions through tailored technology strategies that promote access, efficiency, and innovation.",
    linkedin    : "https://www.linkedin.com/in/hsallam/",
    bmProfile   : "https://brainsmingle.com/hatem1118",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: 1, day: 4, sessionId: "ses-d4-s1-t1", timeSlot: "18:00" }]
  },

  {
    id          : "spk-071",
    order       : 4,
    name        : "Dr. Khaled Alashmouny",
    title       : "Founder & CEO",
    company     : "AIDAChip Inc",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-071.png",
    bio         : "Engineer, founder, and investor working at the intersection of deep technology, engineering workflows, and leadership. Over the past decade, he has built and led teams on complex, high-impact systems, from analog/mixed-signal IC design and silicon platforms to applied research across hardware, signal processing, and AI. Most recently, he founded AIDAChip, an AI-native platform focused on preserving intent, context, and causality across semiconductor and engineering workflows. Alongside his technical work, he co-founded and scaled Egypt Scholars Inc., a nonprofit supporting students pursuing advanced education abroad, leading global volunteer coordination across 17+ countries. An angel and impact investor since 2016, he supports early-stage founders building in healthcare, clean tech, AI, semiconductors, and security.",
    linkedin    : "https://www.linkedin.com/in/khaledalashmouny/",
    bmProfile   : "https://brainsmingle.com/khaled1428",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 5, sessionId: "ses-d5-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-061",
    order       : 5,
    name        : "Abu Bakr Soliman",
    title       : "CTO",
    company     : "SignalMatrix",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-061.png",
    bio         : "Talented engineer with 11+ years of experience in Machine Learning and Data Science. Holds a master's degree in Machine Learning and NLP, following two years as a Research Assistant at Nile University. Currently leading the development of SignalMatrix, the intelligence infrastructure for the multilingual, regulated world.",
    linkedin    : "https://www.linkedin.com/in/bakrianoo/",
    bmProfile   : "https://brainsmingle.com/abubakr9988",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 3, sessionId: "ses-d3-s3-t5", timeSlot: "20:00" }]
  },

  {
    id          : "spk-130",
    order       : 6,
    name        : "Tarek Taha",
    title       : "CPTO",
    company     : "Amtaar",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-130.png",
    bio         : "Tarek Taha is Co-Founder & CPTO of Amtaar, an Egyptian fractional real estate platform, and former FinTech & Innovation Hub Director at the Central Bank of Egypt. Co-Founder of The GrEEK Campus and a speculative fiction writer, he explores how AI is reshaping business, creativity, and Arab cultural identity.",
    linkedin    : "https://www.linkedin.com/in/tarekalitaha",
    bmProfile   : "https://brainsmingle.com/tarek",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: 2, day: 2, sessionId: "ses-d2-s1-t2", timeSlot: "18:00" }]
  },

  {
    id          : "spk-143",
    order       : 7,
    name        : "Dr. Heba Saleh",
    title       : "Chairwoman",
    company     : "Information Technology Institute (ITI)",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-143.png",
    bio         : "Chairwoman of the Information Technology Institute (ITI), leading a journey of fostering tech talent and driving innovation in Egypt’s technology sector. Under her leadership, the team has achieved remarkable success rates in graduate employment and fostered key industry partnerships that have catalyzed growth and opportunities across the region. As a member of the Computer Science Faculties Board, she has honed strategic planning skills critical to navigating the evolving tech landscape. Her efforts center on technology educational empowerment, creating initiatives that connect untapped talent with global opportunities and ensuring sustainable economic impact through skill development and job creation.",
    linkedin    : "https://www.linkedin.com/in/dr-heba-saleh/",
    bmProfile   : "https://brainsmingle.com/HebaSaleh",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "22:00" }]
  },

  {
    id          : "spk-001",
    order       : 8,
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
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "22:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s11-t0", timeSlot: "21:00" }]
  },

  {
    id          : "spk-084",
    order       : 9,
    name        : "Eng. Mohamed Omara",
    title       : "Founder & CEO/CTO",
    company     : "Hoopoe Digital",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-084.png",
    bio         : "Veteran technologist with 27+ years of technical, management, and business experience across semiconductors, wireless telecom, and software/internet. He has worked for top technology companies in the USA, Malaysia, Dubai, the UK, and Egypt, designing microchips for the likes of Intel, Apple, Alcatel, and Siemens. He founded and led the Digital Circuit Design business unit for four companies, co-founded three tech startups, executed one spinoff, and mentored over 100 startups. Holds a BSc and MSc in Electronics and Communications Engineering from the University of Alexandria. Specializes in integrated circuit design, technology management, and entrepreneurship.",
    linkedin    : "https://www.linkedin.com/in/mohammadomara/",
    bmProfile   : "https://brainsmingle.com/mohammad1937",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 4, sessionId: "ses-d4-s2-t5", timeSlot: "19:00" }, { trackNumber: null, day: 5, sessionId: "ses-d5-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-147",
    order       : 10,
    name        : "Dr. Hani Elgebaly",
    title       : "Founder and CEO",
    company     : "AvidBeam Technologies",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-147.png",
    bio         : "Dr. Hani Elgebaly is the founder and CEO of AvidBeam Technologies Inc., an AI company specializing in scalable video processing through deep learning, computer vision, and Big Data, serving Smart Cities, critical infrastructure, transit, and retail. AvidBeam was named best AI startup at CES in Las Vegas. Previously, he spent 19 years at Intel Corporation, where he led R&D and strategic initiatives, established the Intel Mobile Platform Software Group in the US and India, championed the first Intel Labs in the Middle East and Africa, and led the Wireless Center of Excellence (CEWA) in Riyadh. He holds over 50 US patents and more than 40 publications, and is a Senior IEEE member. He earned his Ph.D. in computer science from the University of Victoria, Canada, and his B.S. with highest honors from Cairo University.",
    linkedin    : "https://www.linkedin.com/in/hani-elgebaly-11a965/",
    bmProfile   : "https://brainsmingle.com/elgebaly2000",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 5, sessionId: "ses-d5-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-099",
    order       : 11,
    name        : "Mohamed Nagaty",
    title       : "Executive Chairman",
    company     : "Exits MENA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-099.png",
    bio         : "Egyptian entrepreneur, investor, and emerging-markets venture builder with over 15 years of experience across technology, startups, and fintech in the Middle East and Africa. He currently serves as Executive Chairman of Exits MENA, a technology-focused investment banking platform automating M&A and investment banking services for startups and SMEs. He has held key roles across the region's leading ventures, including Careem and Fawry, Egypt's first tech company to IPO. He sits on the boards of several tech companies including Koinz and Robusta, and is an active angel investor. A TEDx speaker, he completed the CXO Academy program at INSEAD and holds a B.Sc. in Electronics Engineering from the American University in Cairo.",
    linkedin    : "https://www.linkedin.com/in/nagaty/",
    bmProfile   : "https://brainsmingle.com/mohamed4860",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "22:00" }]
  },

  {
    id          : "spk-136",
    order       : 12,
    name        : "Mai Medhat",
    title       : "Co-founder",
    company     : "Tuner",
    country     : "UK",
    countryCode : "GB",
    photo       : "spk-136.png",
    bio         : "Founder building the observability layer for Voice AI. She built her first startup, Eventtus, powering 20,000+ conferences across three continents, raising ~$5M and exiting to Bevy in Silicon Valley. Along the way, she spoke at the Global Entrepreneurship Summit, shared a stage with Barack Obama and Mark Zuckerberg, and was featured on the cover of Forbes. Today she is building Tuner, the infrastructure layer for Voice AI, helping teams understand, evaluate, and improve AI conversations in production. Beyond building, she is an angel investor, mentor, and proud mom to twins.",
    linkedin    : "https://www.linkedin.com/in/maimedhat/",
    bmProfile   : null,
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p5", timeSlot: "22:00" }]
  },

  {
    id          : "spk-067",
    order       : 13,
    name        : "Abdelrahman Sleem",
    title       : "CEO & Founder",
    company     : "Oligence AI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-067.png",
    bio         : "AI Growth Systems Builder with 18+ years of experience across AI, digital marketing, marketing intelligence, and growth. As Founder of IMFND Academy and CEO of Oligence AI, he helps organizations turn AI, automation, and data into practical systems that drive measurable business growth.",
    linkedin    : "https://www.linkedin.com/in/abdelrahmansleem/",
    bmProfile   : "https://brainsmingle.com/abdelrahman6080",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 6, sessionId: "ses-d6-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-005",
    order       : 14,
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
    id          : "spk-103",
    order       : 15,
    name        : "Ebrahim Hegazy",
    title       : "CTO",
    company     : "Dark Entry",
    country     : "Netherlands",
    countryCode : "NL",
    photo       : "spk-103.png",
    bio         : "Co-Founder & CTO of Dark Entry, a Netherlands-based Digital Risk Protection Platform, and a cybersecurity executive, security researcher, and public speaker with over 17 years of experience helping governments, Fortune 500 companies, and critical infrastructure organizations strengthen their security posture. My expertise spans offensive security, cybersecurity leadership, Red Teaming, Penetration Testing, Security Engineering, Industrial Control Systems (ICS) security, network security, and the development of cybersecurity products and tools.",
    linkedin    : "https://www.linkedin.com/in/ebrahimhegazy/",
    bmProfile   : "https://brainsmingle.com/ebrahemhegazy",
    featured    : true,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 5, sessionId: "ses-d5-s3-t5", timeSlot: "20:00" }]
  },

  {
    id          : "spk-050",
    order       : 16,
    name        : "Karim Nabil",
    title       : "AI Engineer",
    company     : "FPT Software",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-050.png",
    bio         : "AI Engineer building agentic AI systems for a $100B+ enterprise client across finance, procurement, and customer support. Former Head of GenAI and founding employee at an AI startup, where he architected systems that boosted report generation by 80% and cut costs by 70%. TEDx speaker, n8n expert, and two-time NASA Space Apps Global Nominee, with experience spanning product management, business development, and AI automation. Mechanical Engineering graduate driven by the belief that light can be found even in the darkest places through trust in Allah.",
    linkedin    : "https://www.linkedin.com/in/kariim-nabiil/",
    bmProfile   : "https://brainsmingle.com/kariim_nabiil",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 4, sessionId: "ses-d4-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-014",
    order       : 17,
    name        : "Hend El Damaty",
    title       : "AI & Digital Transformation Strategist",
    company     : "AI Global",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-014.png",
    bio         : "Digital Transformation and AI Strategy Consultant based in Germany with a background in Electrical and Systems Engineering. Has worked with organizations including DFKI, Microsoft, Bosch, Amazon, and the International Olympic Committee across AI strategy, product management, and Industry 4.0/5.0. Co-founded tech ventures spanning AI, education, and real estate. Passionate about connecting European, Egyptian, and MENA innovation ecosystems and building bridges between technology, people, and business.",
    linkedin    : "https://www.linkedin.com/in/hend-eldamaty/",
    bmProfile   : "https://brainsmingle.com/Hend_Eldamaty",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "20:00" }, { trackNumber: null, day: 3, sessionId: "ses-d3-spotlight", timeSlot: "21:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s10-t0", timeSlot: "20:30" }]
  },

  {
    id          : "spk-042",
    order       : 18,
    name        : "Shereen Badr",
    title       : "Founder & CEO",
    company     : "Medrara Digitals",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-042.png",
    bio         : "Inbound Marketing expert with 15+ years of digital experience across SEO, PPC, social media, and digital strategy. Helps companies boost search rankings, grow organic traffic, and strengthen brand reputation and ROI. Specializes in integrated marketing solutions, web analytics, competitive analysis, and market research. Also a marketing consultant and trainer with a passion for creative, imaginative marketing.",
    linkedin    : "https://www.linkedin.com/in/shereenbadreldeen/",
    bmProfile   : "https://brainsmingle.com/shereenbadr",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 4, day: 5, sessionId: "ses-d5-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-024",
    order       : 19,
    name        : "Dr. Sami AlAhmed",
    title       : "Founder & CEO",
    company     : "Doroob",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-024.png",
    bio         : "Syrian Entrepreneur and technical founder with 10+ years building ventures that connect MENA youth to opportunity. Founder of Emonovo (formerly MARJ3), the region's leading study-abroad platform with 2.5M+ monthly users and 350+ university partners, which began with Khatwa, a volunteer network founded in 2013. Currently CEO & Co-Founder of Doroob, building education-to-employment pathways in Syria as the country rebuilds. Stanford AMENDS fellow, WEF Global Shaper, and TEDx speaker. Passionate about AI, automation, and helping youth go from learning to earning.",
    linkedin    : "https://www.linkedin.com/in/samialahmad/",
    bmProfile   : "https://brainsmingle.com/Sami_ala7mad",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p4", timeSlot: "21:00" }]
  },

  {
    id          : "spk-096",
    order       : 20,
    name        : "Islam Saadany",
    title       : "Managing Director",
    company     : "Forefront Consulting",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-096.png",
    bio         : "Strategy Consultant and the Managing Director of Forefront Consulting. With experience in Strategy & Management Consulting, I have worked with over 75 companies of various sizes, including Multinationals, large local corporations, SMEs & Scale-Ups spanning more than 20 industries.",
    linkedin    : "https://www.linkedin.com/in/isaadany/",
    bmProfile   : "https://brainsmingle.com/islam5866",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 4, day: 4, sessionId: "ses-d4-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-151",
    order       : 21,
    name        : "Dorra Mlouhi",
    title       : "Product Leader",
    company     : "AWS",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-151.png",
    bio         : "Product leader, AI builder, and Product Management instructor with over 11 years of experience building and scaling digital products across global B2B and B2C markets. With a background in computer science engineering, she combines deep technical expertise with strategic thinking, leadership, and storytelling to solve complex, human-centered challenges. She has held product leadership roles at Amazon Web Services (AWS), Trivago, and Tesco, where she led high-impact initiatives that translated advanced technologies into scalable, customer-centric solutions.",
    linkedin    : "https://www.linkedin.com/in/dorramlouhi/",
    bmProfile   : "https://brainsmingle.com/dorra5498",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s1-t0", timeSlot: "16:00" }]
  },

  {
    id          : "spk-114",
    order       : 22,
    name        : "Bassam Sharkawy",
    title       : "Co-founder",
    company     : "Sprints",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-114.png",
    bio         : "Co-Founder of Sprints and HiRemoters, with 15+ years building technology and businesses across HealthTech, EdTech, and HRTech. From engineering FDA-cleared medical devices to scaling Sprints' AI-powered workforce platform across 12 countries, he applies AI to how people learn, get hired, and work.",
    linkedin    : "https://www.linkedin.com/in/bassam-sharkawy",
    bmProfile   : "https://brainsmingle.com/bassam6301",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-057",
    order       : 23,
    name        : "Ahmed Elsherbeeny",
    title       : "AI/GenAI Lead Specialist SA (MENAT)",
    company     : "Amazon Web Services (AWS)",
    country     : "Canada",
    countryCode : "CA",
    photo       : "spk-057.png",
    bio         : "GenAI and Agentic AI leader with 20+ years of experience across Canada and the Gulf. After nearly 10 years in Canada, including leadership at Microsoft, he returned to the region and now works at AWS across MENAT, helping enterprises and startups build secure, scalable AI systems.",
    linkedin    : "https://www.linkedin.com/in/elsherbeeny",
    bmProfile   : "https://brainsmingle.com/Elsherbeeny",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 3, sessionId: "ses-d3-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-087",
    order       : 24,
    name        : "Akram Marwan",
    title       : "Founder & CEO",
    company     : "iCareer",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-087.png",
    bio         : "Serial EdTech entrepreneur with over 12 years of experience across employability, career development, and youth empowerment. In 2012 he founded iCareer, a platform bridging the gap between education and employment by connecting employers, universities, and early talent, growing it into a network of 1,000+ employers with training, coaching, assessment, and Egypt's first applicant tracking software. He began his career in business development at Procter & Gamble and later worked with the United Nations on sustainable development before turning to entrepreneurship. He holds an M.Sc. in Sustainable Development from the American University in Cairo, and is passionate about enhancing the employability of youth and creating impact in job creation at scale.",
    linkedin    : "https://www.linkedin.com/in/akram-marwan/",
    bmProfile   : "https://brainsmingle.com/akram-marwan",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-148",
    order       : 25,
    name        : "Eng. Mohamed Eltabakh",
    title       : "Founder",
    company     : "Arab IoT Community",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-148.png",
    bio         : "IoT and connected-products engineer who builds from idea to production, focused on end-to-end system development, from concept and architecture through hardware design, embedded implementation, connectivity, and cloud integration. He works across the full system stack with a strong emphasis on scalable, secure, production-ready solutions, bridging engineering with real-world production by collaborating with manufacturing partners, OEM/ODM ecosystems, and suppliers to optimize for cost, reliability, and time-to-market. Security is core to his approach, from device-level design to system architecture. His background spans energy, mobility, and infrastructure systems, including 4G/5G protocol stacks, smart metering, payment systems, and smart parking.",
    linkedin    : "https://www.linkedin.com/in/mohamed-eltabakh/",
    bmProfile   : "https://brainsmingle.com/meltabakh",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 5, sessionId: "ses-d5-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-140",
    order       : 26,
    name        : "Ahmed Ezzat",
    title       : "AI Engineer & Manus Fellow in Egypt",
    company     : "",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-140.png",
    bio         : "AI Engineer with hands-on experience building scalable, innovative solutions across startups and research teams, passionate about translating cutting-edge machine learning and computer vision research into products that create real impact. His work spans background removal and object segmentation models quantized for edge devices (reducing model size by 75%), AI-powered proctoring systems, and automated course-creation pipelines using RAG, character animation, and TTS for leading EdTechs. He published \"Lightweight Plant Leaf Classification Based on Transfer Learning\" (IEEE, 2024) and is a strong open-source advocate. As a Manus Fellow and AI community ambassador with IEEE and ZAKA.ai, he regularly leads technical workshops and mentors emerging engineers, thriving at the intersection of applied research, scalable engineering, and community growth.",
    linkedin    : "https://www.linkedin.com/in/mrezzat",
    bmProfile   : "https://brainsmingle.com/MrEzzat",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p1", timeSlot: "18:45" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s9-t0", timeSlot: "20:00" }]
  },

  {
    id          : "spk-034",
    order       : 27,
    name        : "Ahmed Elfakharany",
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
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-141",
    order       : 28,
    name        : "Ahmed Rahmy",
    title       : "Director",
    company     : "Quick-Wins",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-141.png",
    bio         : "Management and strategy leader with 20+ years of experience, moving fluidly between building on the ground and advising leaders at the highest levels. He has worked across government, retail, education, oil & gas, arts, services, and NGOs, often in moments of transition where organizations are trying to evolve, scale, or rediscover their purpose. What inspires him most is not just designing strategies, but turning them into lived realities, shaping direction, building capabilities, and walking the journey with people until change becomes culture. At the heart of his work is a belief that institutions can grow without losing their soul, and that people thrive when trusted, empowered, and seen.",
    linkedin    : "https://www.linkedin.com/in/ahmed-rahmy-38a28525/",
    bmProfile   : "https://brainsmingle.com/A-Rahmy",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 2, sessionId: "ses-d2-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-119",
    order       : 29,
    name        : "Mohamed Farag",
    title       : "Head of AI, Innovation and R&D",
    company     : "EDECS",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-119.png",
    bio         : "A technologist, engineer and entrepreneur, throughout his 18+ years in the software industry he as worked on 100+ projects of varying sizes in 12 different countries as developer, architect and consultant, his experiences spans Development, Tech Leadership Tech M&A, Software Architecture, Software & Product Development and Startups",
    linkedin    : "https://linkedin.com/in/mohmfarag",
    bmProfile   : "https://brainsmingle.com/mfarag",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p2", timeSlot: "19:00" }, { trackNumber: null, day: 4, sessionId: "ses-d4-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-079",
    order       : 30,
    name        : "Hany Ahmed",
    title       : "VP, Generative AI & Unstructured Data Science",
    company     : "BeyondAI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-079.png",
    bio         : "Dr. Hany is Vice President of Generative AI at BeyondAI, transforming complex AI technologies into scalable, enterprise-grade business value. With 16+ years of experience, he partners with executive leaders to turn AI from hype into practical, production-ready solutions that drive operational excellence, competitive advantage, and measurable ROI. A visionary corporate and entrepreneurial leader, he champions responsible AI adoption to fuel sustainable growth and create meaningful impact for communities.",
    linkedin    : "https://www.linkedin.com/in/hany-ahmed-phd-81a8a282/",
    bmProfile   : "https://brainsmingle.com/hany4024",
    featured    : false,
    showOnHome  : true,
    appearances : [{ trackNumber: 3, day: 6, sessionId: "ses-d6-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-157",
    order       : 31,
    name        : "Essam Refai",
    title       : "Founder",
    company     : "CORTX",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-157.png",
    bio         : "Essam Refai is the founder of CORTX, an AI Enablement Partner helping companies across the GCC and Egypt build AI into their operations and train their teams to own it. He is also a partner in Base Studio, an AI content studio in Dubai and Cairo.",
    linkedin    : "https://www.linkedin.com/in/essamrefai/",
    bmProfile   : "https://brainsmingle.com/essam9102",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s5-t0", timeSlot: "18:00" }]
  },

  {
    id          : "spk-019",
    order       : 32,
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
    showOnHome  : true,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-028",
    order       : 33,
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
    id          : "spk-127",
    order       : 34,
    name        : "Michael Mounir",
    title       : "Chief AI and Digital Transformation Officer",
    company     : "MEG",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-127.png",
    bio         : "Michael Mounir is a Chief AI and Digital Transformation Officer with 18+ years across telecom, fintech, healthcare, pharma and manufacturing. He leads enterprise AI adoption and uses technology to drive impact on business KPIs. IDC Best CIO award winner, two-time Pharmaconex award winner, and public speaker.",
    linkedin    : "https://www.linkedin.com/in/mrizk/",
    bmProfile   : "https://brainsmingle.com/michaelmounir",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 4, sessionId: "ses-d4-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-131",
    order       : 35,
    name        : "Dr. Bishoy Sawiris",
    title       : "Chief Data & AI Officer",
    company     : "GB Corp",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-131.png",
    bio         : "Dr. Bishoy Sawiris is a Chief Data Officer and Data & AI leader with 18+ years of experience driving digital transformation, data strategy, and AI innovation. Holding a PhD and DBA in Big Data and AI, he combines strategic leadership with deep technical expertise to deliver measurable business impact.",
    linkedin    : "https://www.linkedin.com/in/dr-bishoy-sawiris-phd-dba-9793948b/",
    bmProfile   : "https://brainsmingle.com/drbishoy1078",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 4, sessionId: "ses-d4-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-135",
    order       : 36,
    name        : "Sally Albert",
    title       : "Digital Transformation Head",
    company     : "Eva Pharma",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-135.png",
    bio         : "Sally Albert is Head of Digital Transformation at Eva Pharma, leading software, IT, cybersecurity, and ERP across 10+ countries. With 14+ years across telecom and health-tech, she builds products that solve real problems at scale and the high-performing teams behind them.",
    linkedin    : "https://www.linkedin.com/in/sally-albert/",
    bmProfile   : "https://brainsmingle.com/sally8004",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 4, sessionId: "ses-d4-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-126",
    order       : 37,
    name        : "Yahya ElAraby",
    title       : "Software Engineer & Tech Influencer",
    company     : "Yehia Tech",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-126.png",
    bio         : "Staff Software Engineer with 12+ years of experience, specializing in React, Node.js, software architecture, and engineering leadership. He has worked across healthcare, retail, and e-commerce, contributing to development, architecture, and technical leadership for scalable, user-focused products. Beyond his engineering work, he creates educational content on YouTube and social media, helping Arabic-speaking software engineers across MENA develop practical skills and grow in their careers. He holds a Bachelor's degree in Software Engineering, with strong expertise in SOLID principles, clean architecture, and modern frontend and backend development.",
    linkedin    : "https://www.linkedin.com/in/yahyaelarabi",
    bmProfile   : "https://brainsmingle.com/yahya1614",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-134",
    order       : 38,
    name        : "Fahd Hemeida",
    title       : "Associate Professor & Head of Startups Support",
    company     : "AAST",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-134.png",
    bio         : "Associate Professor at the School of Architectural Engineering and Head of the Startup Support Department within the Center of Entrepreneurship at the Arab Academy for Science, Technology, and Maritime Transport (AAST), Egypt. He was a Visiting Researcher at the University of Ottawa, Canada, and has honed his professional architectural expertise amidst Dubai's iconic skyline. He has addressed national and international audiences at prominent architecture and entrepreneurship conferences across locations as diverse as Hawaii, Gran Canaria, Karlsruhe, Berlin, London, Bahrain, Burundi, Algeria, and numerous cities throughout Egypt. He also serves as a visiting lecturer at the AAST Graduate School of Business.",
    linkedin    : "https://www.linkedin.com/in/fahd-hemeida/",
    bmProfile   : "https://brainsmingle.com/fahd6151",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 3, sessionId: "ses-d3-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-104",
    order       : 39,
    name        : "Hany Saad",
    title       : "Senior Software Engineering Manager",
    company     : "ITWorx",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-104.png",
    bio         : "Senior Software Engineering Manager at ITWorx and an AI & Software Engineering Expert at ITI, with 20+ years of experience in software engineering, technical leadership, and talent development. His current focus is Generative AI, AI-native development, and evolving software engineering skills for the AI era.",
    linkedin    : "https://www.linkedin.com/in/hanysaad/",
    bmProfile   : "https://brainsmingle.com/hanysaad",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 3, sessionId: "ses-d3-s3-t1", timeSlot: "20:00" }]
  },

  {
    id          : "spk-109",
    order       : 40,
    name        : "Ehab Darwish",
    title       : "Founder",
    company     : "GTMENA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-109.png",
    bio         : "Founder of iSkala and GTMENA, helping B2B companies build scalable go-to-market and outbound systems. He has worked with Fawry, Swvl, and YC-backed startups, and has trained thousands of professionals in sales, lead generation, and GTM engineering.",
    linkedin    : "https://www.linkedin.com/in/ehab-darwish",
    bmProfile   : "https://brainsmingle.com/ehabdarwish",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 3, sessionId: "ses-d3-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-086",
    order       : 41,
    name        : "Dr. Fadi Amroush",
    title       : "Digital Transformation and Artificial Intelligence Consultant",
    company     : "HIAST-CIE",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-086.png",
    bio         : "Dr. Fadi Amroush is a digital transformation and AI consultant with expertise in behavioral economics, generative AI, and technology-enabled education. He holds a PhD in Economics and Business and brings more than 20 years of experience across academia, consulting, and professional learning.",
    linkedin    : "https://www.linkedin.com/in/fadiamroush/",
    bmProfile   : "https://brainsmingle.com/fadi8789",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p4", timeSlot: "21:00" }]
  },

  {
    id          : "spk-078",
    order       : 42,
    name        : "Sabrine Assem",
    title       : "Founder & CEO",
    company     : "UnTap",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-078.png",
    bio         : "Founder and entrepreneur working across innovation, awards, and talent programs in the Middle East and Africa. She leads a platform that gives organizations one infrastructure to run their innovation, awards, grants, and talent programs, turning fragmented tools into lasting communities. Her background spans open innovation, entrepreneurship consulting, and research supporting Egypt's startup ecosystem. A Chevening Scholar, she holds a Master's in Digital Innovation from Warwick Business School and a bachelor's in Innovation Management and Information Systems. She is passionate about building infrastructure that helps organizations discover and grow talent.",
    linkedin    : "https://www.linkedin.com/in/sabrineassem/",
    bmProfile   : "https://brainsmingle.com/sabrine6580",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s3-t3", timeSlot: "20:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s8-t0", timeSlot: "19:00" }]
  },

  {
    id          : "spk-110",
    order       : 43,
    name        : "Eng. Maher Kalash",
    title       : "Director of Technology and Digital Transformation",
    company     : "Syrian Ministry of Health",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-110.png",
    bio         : "Director of Technology and Digital Transformation at the Syrian Ministry of Health, where he leads national digital health initiatives aimed at modernizing healthcare services and building an integrated digital health ecosystem. With more than 10 years of experience in software, product development, digital transformation, and innovation, he is currently focused on establishing the foundations for data-driven and AI-enabled healthcare, including unified patient identity, electronic health systems, interoperability, and national health information infrastructure. His work centers on how countries rebuilding their health systems can move pragmatically from paper-based processes toward connected, scalable, and AI-ready healthcare.",
    linkedin    : "https://www.linkedin.com/in/maher-kalash",
    bmProfile   : "https://brainsmingle.com/maher2633",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p4", timeSlot: "21:00" }]
  },

  {
    id          : "spk-095",
    order       : 44,
    name        : "Moe Ash",
    title       : "Founder & Learning Architect",
    company     : "The Catalyst",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-095.png",
    bio         : "Founder of The Catalyst, an instructional design consultancy focused on creating impeccable learning experiences. With a background spanning the BPO industry, business development, a managerial post at the UN, and 16 years in training, Moe has dedicated his career to youth empowerment and development through training programs and applied workshops. As a human development consultant, he has delivered sessions, workshops, and seminars to over 50,000 trainees, from university students to the top management of governmental institutions and corporates. He specializes in designing synchronous and asynchronous learning experiences for organizations regionally and internationally, using microlearning, AR, e-learning, and gamification. He is passionate about blending L&D, gamification, and performance management into cohesive, productive learning.",
    linkedin    : "https://www.linkedin.com/in/moeash7/",
    bmProfile   : "https://brainsmingle.com/moe8661",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 6, sessionId: "ses-d6-s1-t1", timeSlot: "18:00" }]
  },

  {
    id          : "spk-009",
    order       : 45,
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
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-122",
    order       : 46,
    name        : "Omar Heraiz",
    title       : "Co Founder  & CCO",
    company     : "SYNC School",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-122.png",
    bio         : "Omar is creative systems builder driven by meaning, craft, and the future of learning. As the co-founder of SYNC School and of Excuse My Content, he works at the intersection of education, content, and innovation.",
    linkedin    : "https://www.linkedin.com/in/omar-heraiz/",
    bmProfile   : "https://brainsmingle.com/omar1224",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-149",
    order       : 47,
    name        : "Mohamed Mostafa",
    title       : "Co founder & CTO",
    company     : "Widebot AI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-149.png",
    bio         : "Mohamed Mostafa, Co-founder and CTO of WideBot, is an AI entrepreneur with 20 years of experience building intelligent systems. He bridges cutting-edge research with product execution, architecting technically rigorous and commercially viable solutions focused on solving real-world problems and maximizing user impact.",
    linkedin    : "https://www.linkedin.com/in/mohamed-mostafa-4bb51733/",
    bmProfile   : "https://brainsmingle.com/mohamed8003",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 4, sessionId: "ses-d4-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-150",
    order       : 48,
    name        : "Hani Shaker",
    title       : "AI Content Creator & Founder",
    company     : "Abqr AI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-150.png",
    bio         : "Content creator with 3 million followers across social media, known as “The Million Views Guy” for a unique track record in ads, with his last 10 collaboration videos averaging 1.6 million views on Instagram alone. Drawing on four years of experience, he partners with brands on high-reach promotional videos designed to put products and services in front of millions. Beyond creating content, he offers TikTok and Reels consultations, helping businesses diagnose and solve the problems behind low views and sales, as well as AI content training for companies and agencies, blending content creation secrets with AI best practices to streamline the creation process.",
    linkedin    : "https://www.linkedin.com/in/hanishaker/",
    bmProfile   : "https://brainsmingle.com/hani3279",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 6, sessionId: "ses-d6-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-075",
    order       : 49,
    name        : "Mohamed Ali",
    title       : "Founder",
    company     : "Business With Mo Podcast",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-075.png",
    bio         : "Entrepreneur, business coach, and creator of the Trust-Led Growth Framework. Drawing on more than 16 years of international experience, he helps founders build sustainable growth systems rooted in trust, authority, and community. He is also the founder and host of the Business With Mo podcast.",
    linkedin    : "https://www.linkedin.com/in/moali85/",
    bmProfile   : "https://brainsmingle.com/Mo",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 5, sessionId: "ses-d5-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-144",
    order       : 50,
    name        : "Mona Ali",
    title       : "AI & Digital Transformation Executive",
    company     : "Macro Group Pharmaceutical",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-144.png",
    bio         : "AI & Digital Transformation Executive with over 26 years of experience across financial services, insurance, and pharmaceuticals. Her career spans enterprise technology, data, artificial intelligence, and business transformation, with a strong focus on connecting strategic vision with business outcomes. Recognized as a Legend Category Winner at the Egypt CIO200 Summit 2026, she is an executive speaker and industry contributor who brings practical leadership perspectives to discussions on AI and digital transformation. Her professional perspective emphasizes strategic clarity, executive decision-making, and aligning emerging technologies with organizational priorities. Through her speaking engagements and industry contributions, she advocates for responsible, purposeful AI adoption that delivers sustainable business impact.",
    linkedin    : "https://www.linkedin.com/in/mona-ali-mba-itil/",
    bmProfile   : "https://brainsmingle.com/Mona_Ali",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-132",
    order       : 51,
    name        : "Dr. Sumaya Islam",
    title       : "Project Lead",
    company     : "Paderborn University | gr33nUP",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-132.png",
    bio         : "Dr. Sumaya Islam is an entrepreneurship researcher and project lead at the University of Paderborn. Her work focuses on social entrepreneurship, sustainability, and impact-driven innovation. With experience in research, teaching, venture creation, and ecosystem building, she is committed to making entrepreneurship more sustainable and socially impactful.",
    linkedin    : "https://www.linkedin.com/in/sumaya-islam/",
    bmProfile   : "https://brainsmingle.com/sumaya",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 3, sessionId: "ses-d3-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-133",
    order       : 52,
    name        : "David Kpondehou",
    title       : "President & Founder / General Manager",
    company     : "Africa Diaspora Network Japan (ADNJ) / Pasona Future Gateway",
    country     : "Japan",
    countryCode : "JP",
    photo       : "spk-133.png",
    bio         : "David Kpondehou is General Manager for Africa at Pasona Future Gateway (Pasona Group) and founder of Africa Diaspora Network Japan. Based in Japan since 2017, he connects Japanese companies and technology with African markets. He co-founded Africa Samurai Consulting, which runs AI training for young entrepreneurs in Benin.",
    linkedin    : "https://www.linkedin.com/in/david-kpondehou-77b6a87b/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 3, sessionId: "ses-d3-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-123",
    order       : 53,
    name        : "Youssef Kamal",
    title       : "Founder",
    company     : "People of Data",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-123.png",
    bio         : "Youssef Kamal is Founder & CEO of Helm AI and Co-Founder & CTO of People of Data, one of Egypt’s largest AI communities. He works at the intersection of agentic AI, data, entrepreneurship, and business transformation, helping organizations turn AI from experimentation into practical workflows.",
    linkedin    : "https://www.linkedin.com/in/youssefayad/",
    bmProfile   : "https://brainsmingle.com/youssef2431",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 3, sessionId: "ses-d3-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-085",
    order       : 54,
    name        : "Ahmed Bastawy",
    title       : "Managing Director",
    company     : "ICEALEX",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-085.png",
    bio         : "Managing Director and Founding Partner of ICEALEX, a leading innovation and entrepreneurship platform shaping venture creation and impact-driven growth in Egypt and across Africa. With over a decade at the intersection of entrepreneurship, innovation systems, and impact investing, he designs and scales programs that help startups and SMEs move from ideas to sustainable impact across Egypt, Africa, the Mediterranean, and Europe. He has advised international organizations, development partners, and corporates on venture building, investment readiness, and circular economy, and previously contributed to the founding of iceHubs Global CIC in the UK.",
    linkedin    : "https://www.linkedin.com/in/ahmedbastawy/",
    bmProfile   : "https://brainsmingle.com/ahmed1510",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-124",
    order       : 55,
    name        : "Magdi Moussa",
    title       : "Co-Founder",
    company     : "People of Data",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-124.png",
    bio         : "Egyptian entrepreneur and marketing leader who has designed and built multiple nationwide programs across Africa and the Middle East in the creative economy, technology, and fintech. Named to Forbes 30 Under 30 for his work with immrsv, which designed some of the region's most impactful initiatives.",
    linkedin    : "https://www.linkedin.com/in/magdi-moussa/",
    bmProfile   : "https://brainsmingle.com/magdi7410",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 3, sessionId: "ses-d3-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-089",
    order       : 56,
    name        : "Mustafa Ali",
    title       : "AI Hardware Co-design",
    company     : "Meta",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-089.png",
    bio         : "A hardware and AI systems engineer specializing in AI accelerator architecture, performance modeling, and hardware/software co-design. He holds a PhD in AI accelerator microarchitecture and has worked on AI chip architecture at Microsoft and Meta, focusing on efficient computing.",
    linkedin    : "https://www.linkedin.com/in/mustafa-ali-611a5a65/",
    bmProfile   : "https://brainsmingle.com/mustafa7525",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-090",
    order       : 57,
    name        : "Ola Yousry",
    title       : "Senior BIM/VDC Manager",
    company     : "Ex-Tesla",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-090.png",
    bio         : "An architect by education and a BIM and Digital Delivery professional with 18+ years of experience in the AEC industry. Having worked with organizations including Dar Al-Handasah and Tesla, she focuses on BIM management, digital transformation, and bridging technology with real-world project delivery.",
    linkedin    : "https://www.linkedin.com/in/ola-yousry/",
    bmProfile   : "https://brainsmingle.com/ola2969",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-111",
    order       : 58,
    name        : "Deena Gergis",
    title       : "Head of AI",
    company     : "EVA Pharma",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-111.png",
    bio         : "Deena Gergis is Head of AI at EVA Pharma, leading the shift toward agentic AI to unleash the untapped potential in every person. An MSc graduate of the University of Bonn, a 15-year AI leader, multiple international awards winner, and author published in Harvard Business Review, she previously drove impact at McKinsey, Bayer, and Deutsche Post. Her purpose is simple: AI should free people from the routine so they can step into their greatest potential.",
    linkedin    : "https://www.linkedin.com/in/deena-gergis/",
    bmProfile   : "https://brainsmingle.com/deena2700",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-113",
    order       : 59,
    name        : "Abdul Rahman AlAshraf",
    title       : "AI & Digital Transformation Expert and Technology Team Lead & Manager",
    company     : "",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-113.png",
    bio         : "10+ years of experience across banking, automotive, and consulting, leading AI and digital transformation initiatives from strategy to execution. Award-winning innovator and startup founder with expertise in intelligent automation, systems thinking, product vision, technical leadership, and executive advisory.",
    linkedin    : "https://www.linkedin.com/in/abdulrahmanalashraf/",
    bmProfile   : "https://brainsmingle.com/abdulrahmanalashraf",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-092",
    order       : 60,
    name        : "Yassir El Ismaili",
    title       : "Serial Entrepreneur & Investor",
    company     : "1MoreThing Ventures",
    country     : "Morocco",
    countryCode : "MA",
    photo       : "spk-092.png",
    bio         : "French-Moroccan entrepreneur, venture builder, and investor who has spent more than 20 years advising, building, and expanding companies across different markets. His career has taken him from consulting to entrepreneurship, through three exits, investing, and now venture building, while living and working across Europe, Africa, the US, and the Middle East. Today, as Managing Partner of 1MORETHING, he focuses on AI for the physical economy, building and backing companies across the Greater Middle East. His approach to startups is simple: Demo, Sell, Build, Scale, getting in front of customers early, not over-engineering, and being prepared to crash fast, preferably forward.",
    linkedin    : "https://www.linkedin.com/in/yassirelismailielidrissi/",
    bmProfile   : "https://brainsmingle.com/yassir",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 3, sessionId: "ses-d3-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-120",
    order       : 61,
    name        : "Muhammad AbuElgheit",
    title       : "Founder & CEO",
    company     : "TechieMatter",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-120.png",
    bio         : "An entrepreneur, engineer, and Founder & CEO of TechieMatter, a leading tech talent acquisition and management platform trusted by 1000+ companies across 4 continents. A Forbes Middle East 30 Under 30 honoree and Deloitte Rising Star, Muhammad is also an alumnus of Babson College (US) and MBSC (KSA). He has founded 4 startups, raised investment across 3 continents, actively advocates for entrepreneurship across MENA, and mentors numerous startups.",
    linkedin    : "https://www.linkedin.com/in/maelgheit/",
    bmProfile   : "https://brainsmingle.com/maelgheit",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 3, sessionId: "ses-d3-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-128",
    order       : 62,
    name        : "Mohamed Shafik",
    title       : "AI Composer",
    company     : "EYE Creative Studios",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-128.png",
    bio         : "Mohamed Shafik (XAVI) is an Egyptian AI Music & Video Producer, Film Composer, and Creative Director with over 20 years of experience in music and media. As the founder of EYE Creative Studios, he combines music, cinematic storytelling, and AI technology to develop innovative creative experiences and explore the future of AI-powered entertainment.",
    linkedin    : "https://www.linkedin.com/in/xavi-mohamed-0b924442b/",
    bmProfile   : "https://brainsmingle.com/mohammed2279",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 3, sessionId: "ses-d3-s1-t2", timeSlot: "18:00" }]
  },

  {
    id          : "spk-121",
    order       : 63,
    name        : "Malak Abdelghaffar",
    title       : "Founder",
    company     : "The Builders Sandbox",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-121.png",
    bio         : "Malak works at the intersection of AI, human intelligence, and capacity-building, helping organizations across MENA build AI-native futures through a human-first framework, grounded in the belief that the AI revolution should happen with people, not to them. She is the Founder of The Builders Sandbox, a boutique AI enablement and deployment consultancy, and Co-Founder of Same Room, one of Egypt's fastest-growing gamified networking communities. As an AI educator, she creates content in Arabic and English at @aiwithmalakk to make AI literacy accessible to youth and women across the region. Winner of Lovable's first global SheBuilds AI hackathon, she holds a BA from NYU Abu Dhabi and an MA through the Erasmus Mundus program, both completed abroad on fully funded scholarships.",
    linkedin    : "https://www.linkedin.com/in/malakabdelghaffar/",
    bmProfile   : "https://brainsmingle.com/malak4200",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 4, sessionId: "ses-d4-s1-t2", timeSlot: "18:00" }]
  },

  {
    id          : "spk-022",
    order       : 64,
    name        : "Ebrahem Anwar",
    title       : "Founder",
    company     : "ICCY",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-022.png",
    bio         : "Entrepreneur, product leader, and angel investor with 15+ years building tech companies across Egypt and Saudi Arabia. Founder of ICCY, an AI-powered platform helping experts earn from their knowledge, and Raed ElBusiness, a leading Arabic entrepreneurship platform. Mentored 100+ startups, trained 50,000+ professionals. Passionate about making AI accessible for entrepreneurs.",
    linkedin    : "https://www.linkedin.com/in/ebrahemanwar/",
    bmProfile   : "https://brainsmingle.com/ebrahem1058",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 3, sessionId: "ses-d3-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-012",
    order       : 65,
    name        : "Taha Ali",
    title       : "CEO",
    company     : "GroHub",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-012.png",
    bio         : "B2B growth strategist with 10+ years of commercial experience, helping 70+ companies build go-to-market strategies and expand into the Saudi market. Host of GroHub Podcast, where he shares growth tactics and scaling insights for B2B founders and revenue leaders.",
    linkedin    : "https://www.linkedin.com/in/eng-taha-ali/",
    bmProfile   : "https://brainsmingle.com/EngTahaAli",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 5, sessionId: "ses-d5-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-097",
    order       : 66,
    name        : "Mohamed AboElKheir",
    title       : "Application Security Engineer",
    company     : "Ironclad",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-097.png",
    bio         : "Application Security engineer at IronClad, where I am building a new Application Security Program. Before that, I was also an Application Security Engineer at Amazon for ~ 4 years, and during this period, I reviewed and collaborated on 500+ AWS services/features/tools.",
    linkedin    : "https://www.linkedin.com/in/mohamed-aboelkheir-4802ba9b/",
    bmProfile   : "https://brainsmingle.com/mohamed4120",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 3, sessionId: "ses-d3-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-112",
    order       : 67,
    name        : "Wajih Alkhiami",
    title       : "IT Administrator & Tech Content Creator",
    company     : "Wajih Alkhiam",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-112.png",
    bio         : "Wajih Alkhiami is an IT Administrator and technology content creator specializing in artificial intelligence, education, and digital technologies. He creates educational content and practical resources that help teachers, students, and professionals understand and effectively use AI in learning, work, and everyday life.",
    linkedin    : "https://www.linkedin.com/in/wajih-alkhiami/",
    bmProfile   : "https://brainsmingle.com/wajihalkhiami",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 6, sessionId: "ses-d6-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-100",
    order       : 68,
    name        : "Ahmed Faris",
    title       : "Senior Product Designer - UX",
    company     : "Teracloud",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-100.png",
    bio         : "Product Designer (UX/Interaction/UI) with 16+ years across SaaS, marketplaces, fintech, and government-scale platforms, including Weaveworks (London), Digitize Egypt (100M+ users), and ITG (15M+ users across the Gulf), currently at Teracloud ApS. He now designs and ships products in weeks that once took quarters, working with AI as a real teammate, and is building his own products, Batota and V-Thesis, using the same AI-native approach. He has trained 5,000+ designers through Sprints, Nile University, ADPList, almentor, and Udemy. Passionate about helping founders ship fast without losing craft, and helping designers grow into their expanding role in the AI era.",
    linkedin    : "https://www.linkedin.com/in/ahmedfaris/",
    bmProfile   : "https://brainsmingle.com/afaris",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 6, sessionId: "ses-d6-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-081",
    order       : 69,
    name        : "Hossam Elbery",
    title       : "CTO",
    company     : "BasharSoft",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-081.png",
    bio         : "Technology executive and current CTO with 15+ years of experience leading engineering strategy and building scalable SaaS platforms across MENA, Europe, and North America. Deep expertise in regulatory-compliant system design (SOC 2, ISO 27001, GDPR) and cloud-native infrastructure (AWS, Kubernetes, serverless). He builds high-performing, remote-first engineering teams and partners with boards and investors to align technical roadmaps with business KPIs. Passionate about bridging business vision with execution to deliver secure, resilient, globally scalable platforms.",
    linkedin    : "https://www.linkedin.com/in/helbery/",
    bmProfile   : "https://brainsmingle.com/hossam2811",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 6, sessionId: "ses-d6-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-145",
    order       : 70,
    name        : "Eslam Ahmed",
    title       : "Senior Staff Software Engineer",
    company     : "AvidBeam",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-145.png",
    bio         : "Eslam Ahmed is a software engineer specializing in AI-powered video analytics, computer vision, and high-performance systems. He works with C++, GStreamer, NVIDIA DeepStream, and CUDA to build scalable, real-time AI solutions that transform video streams into actionable insights.",
    linkedin    : "https://www.linkedin.com/in/eslam-ahmed-a54566b2/",
    bmProfile   : "https://brainsmingle.com/eslam3671",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-077",
    order       : 71,
    name        : "Mostafa Hassan",
    title       : "Marketing Director",
    company     : "BasharSoft",
    country     : "Malta",
    countryCode : "MT",
    photo       : "spk-077.png",
    bio         : "A marketing professional with 15 years of hands-on experience leading marketing and product marketing functions across Egypt, the US, Saudi Arabia, and the UAE. He holds an MBA from the University of Suffolk, UK, and combines strategic thinking with practical, results-driven execution.",
    linkedin    : "https://www.linkedin.com/in/mostafa-elsayd-885a2b58/",
    bmProfile   : "https://brainsmingle.com/mostafa3075",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 2, sessionId: "ses-d2-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-116",
    order       : 72,
    name        : "Samra Salim",
    title       : "Senior UX Researcher & Product Strategist",
    company     : "EX Tesco, Ethos AI",
    country     : "KSA",
    countryCode : "SA",
    photo       : "spk-116.png",
    bio         : "Senior UX Researcher and Product and Experience Strategist with 7+ years of experience turning customer insight into meaningful product and business decisions. Most recently at Tesco UK, I led research across complex digital experiences, working closely with product, design and technology teams to understand customer needs, identify opportunities and influence product and experience strategy.",
    linkedin    : "https://www.linkedin.com/in/samra-s-6b1975175/",
    bmProfile   : "https://brainsmingle.com/samrasalimUXR",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 3, sessionId: "ses-d3-s1-t1", timeSlot: "18:00" }]
  },

  {
    id          : "spk-101",
    order       : 73,
    name        : "Mohamed Hatem",
    title       : "Chief AI Officer",
    company     : "URCA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-101.png",
    bio         : "Chief AI Officer at URCA and a dynamic engineering leader with 13+ years across enterprises and startups. He turns ideas into production, connecting strategy, data, and delivery to drive adoption, and advises teams on AI transformation to help them ship fast, safely, and at scale. He co-founded Astrik AI and has held senior technical and AI strategy roles at ThinkTech, Inovola, TensorGraph.io, and Fluido.ai, following earlier engineering roles at Mentor Graphics (Siemens) and EJADA. He holds an MBA from ESLSCA University and a bachelor's in Computer Engineering from Cairo University.",
    linkedin    : "https://www.linkedin.com/in/m-hatem/",
    bmProfile   : "https://brainsmingle.com/mohamed5421",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 5, sessionId: "ses-d5-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-115",
    order       : 74,
    name        : "Ayman H.",
    title       : "Founder & CTO",
    company     : "Homains",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-115.png",
    bio         : "Founder and CTO of Homains and the creator of Maestro, a platform where companies hire and govern AI employees.  With 17+ years across software engineering and application security at IBM, Citi and g2o, he also founded Praxis, a hands-on tech learning platform, and serves as a fractional CTO in multiple startups.",
    linkedin    : "https://www.linkedin.com/in/ay-hu/",
    bmProfile   : "https://brainsmingle.com/ay-hu",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 5, sessionId: "ses-d5-s3-t1", timeSlot: "20:00" }]
  },

  {
    id          : "spk-117",
    order       : 75,
    name        : "Eslam Sayed",
    title       : "Founder & CEO",
    company     : "LearnKhana",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-117.png",
    bio         : "Eslam is a learning and education entrepreneur, speaker, and advisor working at the intersection of Learning & Development, EdTech, AI, and entrepreneurship. He is the Founder of LearnKhana and brings experience spanning commercial roles, corporate learning, global learning leadership, and building education businesses across Egypt and the Gulf. Eslam holds an M.S.Ed. in Education Entrepreneurship from the University of Pennsylvania and is a CPTD. His current work explores how AI is reshaping L&D and the shift from the traditional content provider toward the role of the “Learning Architect.”",
    linkedin    : "https://www.linkedin.com/in/eslam-sayed-m-s-ed-cptd%C2%AE-23b98428/",
    bmProfile   : "https://brainsmingle.com/eslam2581",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 2, sessionId: "ses-d2-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-105",
    order       : 76,
    name        : "Awad Bekhet",
    title       : "Chief Operation Officer",
    company     : "URCA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-105.png",
    bio         : "Awad Bekhet is COO at URCA, leading technology operations, governance, execution, and organizational development as the company builds and scales AI-driven products. His background spans organizational leadership, business operations, information security, and building high-performing technology organizations.",
    linkedin    : "https://www.linkedin.com/in/awadbekhet/",
    bmProfile   : "https://brainsmingle.com/awadbekhet",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 5, sessionId: "ses-d5-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-082",
    order       : 77,
    name        : "Heba Abdelfattah",
    title       : "Head of Product",
    company     : "BasharSoft",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-082.png",
    bio         : "Head of Product at WUZZUF and Forasna, Egypt's leading job platforms. Previously at Microsoft and in venture capital, Heba brings ten years across product, investing and entrepreneurship to building products that help millions of people find work and employers hire faster.",
    linkedin    : "https://www.linkedin.com/in/hebaabdelfattah/",
    bmProfile   : "https://brainsmingle.com/heba7025",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 6, sessionId: "ses-d6-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-083",
    order       : 78,
    name        : "Mahmoud Ashraf",
    title       : "Product Design Lead",
    company     : "BasharSoft",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-083.png",
    bio         : "Product designer with 10+ years of experience building digital products across Egypt and the region, from early-stage startups to scaled platforms. Currently leads design at BasharSoft across products like Wuzzuf, Forasna, iCareer, and Recruitera, overseeing the design team, shaping product strategy with senior leadership, and building design systems that connect Figma directly to development. Across roles at Holo, Convertedin, ElCoach, and Bosta, the focus has stayed the same: turning complex problems into clean, scalable product experiences. He also integrates AI into daily design operations, automating workflows for faster, higher-quality output at scale.",
    linkedin    : "https://www.linkedin.com/in/mahmoud-ash0/",
    bmProfile   : "https://brainsmingle.com/mahmoudash",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 6, sessionId: "ses-d6-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-018",
    order       : 79,
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
    appearances : [{ trackNumber: 1, day: 2, sessionId: "ses-d2-s1-t1", timeSlot: "18:00" }]
  },

  {
    id          : "spk-059",
    order       : 80,
    name        : "Asif Shahriar",
    title       : "AI Learning Specialist",
    company     : "Constructor University Bremen",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-059.png",
    bio         : "Learning strategist with 14+ years in academic leadership and corporate learning, helping institutions use Generative AI to design smarter learning systems and lead meaningful change. Currently leads an international GenAI initiative transforming higher education across Europe and Asia. Specializes in turning research into strategy, applying AI, behavioral science, and inclusive design frameworks like UDL and the Community of Inquiry. Previously built advising systems that doubled student intake and developed AI-enhanced LMS platforms. Passionate about aligning people, platforms, and pedagogy to solve real-world learning challenges.",
    linkedin    : "https://www.linkedin.com/in/asif-shahriar/",
    bmProfile   : "https://brainsmingle.com/asif",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 2, sessionId: "ses-d2-s3-t1", timeSlot: "20:00" }]
  },

  {
    id          : "spk-118",
    order       : 81,
    name        : "Bana Alkhaled",
    title       : "Founder",
    company     : "Bana Influencers",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-118.png",
    bio         : "Influencer Marketing expert, entrepreneur, and Founder & CEO of Bana Influencers, an influencer marketing agency building impactful campaigns across the Syrian market and the wider region. Over the past years, she has managed hundreds of influencer marketing campaigns across Syria, Saudi Arabia, and the UAE, helping brands strategically leverage creators for awareness, engagement, and growth, with expertise spanning campaign strategy, influencer selection, negotiations, and execution. Before founding Bana Influencers, she was Co-Founder and Operations Manager at Boom UGC, building creator-driven marketing systems and managing large-scale content operations. Today, she combines her experience in influencer marketing, entrepreneurship, and the creator economy to help brands work with influencers not simply as a media placement, but as a strategic growth channel.",
    linkedin    : "https://www.linkedin.com/in/banaalkhaled/",
    bmProfile   : "https://brainsmingle.com/bana2766",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 6, sessionId: "ses-d6-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-008",
    order       : 82,
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
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 6, sessionId: "ses-d6-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-037",
    order       : 83,
    name        : "Mohamed ElAswad",
    title       : "AI Trainer and Consultant",
    company     : "Aswad AI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-037.png",
    bio         : "AI & Digital Marketing Consultant and Trainer with 10+ years of experience. He specializes in Generative AI, AI-powered content and video production, and digital strategy, delivering professional training and consulting for academic institutions, national initiatives, and businesses across Egypt, the Gulf, and international markets.",
    linkedin    : "https://www.linkedin.com/in/mohamad-elaswad/",
    bmProfile   : "https://brainsmingle.com/mohamad2976",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 5, sessionId: "ses-d5-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-065",
    order       : 84,
    name        : "Islam Mostafa",
    title       : "Engineer & Founder",
    company     : "Kiwi Pizza",
    country     : "Netherlands",
    countryCode : "NL",
    photo       : "spk-065.png",
    bio         : "Cairo-born, Amsterdam-based engineer and founder who has spent thirteen years building things people keep, across three very different materials. In Cairo, he was CTO of two hardware startups, leading a product that shipped tens of thousands of units to 120+ countries after a crowdfunding campaign that raised 8x its goal, and later open-source hardware for connected devices. In Amsterdam, he led treasury engineering at a global payments company, on systems settling billions of dollars a year across 90+ currencies, then led the backend team at a payments infrastructure company serving enterprise merchants across MENA. Since 2025, he has been building a consumer AI product on a platform that runs across several AI providers.",
    linkedin    : "https://www.linkedin.com/in/imelnaggar/",
    bmProfile   : "https://brainsmingle.com/islam",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 4, sessionId: "ses-d4-s3-t5", timeSlot: "20:00" }]
  },

  {
    id          : "spk-066",
    order       : 85,
    name        : "Manar Mansour",
    title       : "Founder & Managing Director",
    company     : "TIK TEN Consulting",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-066.png",
    bio         : "Growth and Partnership Strategist with 15+ years of experience helping organizations unlock new opportunities through strategic partnerships, go-to-market strategies, and commercial growth initiatives across fintech, financial services, insurance, and technology. Has worked with startups, enterprises, banks, and solution providers to identify growth opportunities and turn ideas into successful business outcomes. Founder of Tik Ten Consulting, a strategic partnership advisory helping organizations identify, evaluate, and connect with the right partners. Driven by the belief that the best business opportunities happen when the right organizations find each other.",
    linkedin    : "https://www.linkedin.com/in/manar-mansour/",
    bmProfile   : "https://brainsmingle.com/manar6143",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 3, sessionId: "ses-d3-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-054",
    order       : 86,
    name        : "Mohamed Sabry",
    title       : "Co-founder & CEO",
    company     : "LinkOut & Nabta",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-054.png",
    bio         : "Business management leader with 19+ years of experience, having previously led regional HR across Africa and the Middle East at Koch Industries. An instructor at SCE-BUE and Co-founder and CEO of LinkOut and NABTA, he has coached 20,000+ leaders across 15+ nationalities. Specializes in change management, human capital architecture, and organizational psychology.",
    linkedin    : "https://www.linkedin.com/in/dr-msabry",
    bmProfile   : "https://brainsmingle.com/drmohamed8551",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 5, sessionId: "ses-d5-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-068",
    order       : 87,
    name        : "Mohamed Farouk",
    title       : "Professor",
    company     : "Zewail Univeristy",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-068.png",
    bio         : "Professor of Engineering at Zewail University and Chief AI Officer at Sprints.ai, with 20+ years of experience across academia, artificial intelligence, workforce development, and digital transformation. At Sprints.ai, he leads AI strategy and the development of AI-powered learning and workforce solutions designed to improve employability and scale personalized learning. His academic work spans AI, machine learning, signal processing, curriculum development, and technology-enabled education. He has also contributed to national digital transformation initiatives and led large-scale professional training and innovation programs. His current focus is on how generative AI is transforming learning, how organizations should rethink skills in an AI-driven economy, and how to strengthen the uniquely human capabilities that remain critical as AI advances.",
    linkedin    : "https://www.linkedin.com/in/mohamed-farouk-abdelkader-08618912/",
    bmProfile   : "https://brainsmingle.com/mohamed7245",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 4, sessionId: "ses-d4-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-035",
    order       : 88,
    name        : "Ahmed El Sisi",
    title       : "AI Video Director & Creative Systems Builder",
    company     : "Bridges Foundation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-035.png",
    bio         : "AI Video Director and creative systems builder who helps educators, experts, and thought leaders transform their knowledge into professional video content using AI avatars, digital twins, and end-to-end production workflows.",
    linkedin    : "https://www.linkedin.com/in/ahmed-sysy/",
    bmProfile   : "https://brainsmingle.com/ahmed6113",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 5, sessionId: "ses-d5-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-060",
    order       : 89,
    name        : "Mohamed Kelany",
    title       : "Co-Founder and CTO",
    company     : "NtegralOne Solutions",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-060.png",
    bio         : "Technology strategist working at the intersection of AI, high-performance computing, and enterprise transformation, with a decade of business experience across different roles. As a certified NVIDIA Partner Expert, he specializes in configuring GPU-powered workstations, AI servers, and simulation-ready setups for industries like digital twins, robotics, and smart cities. He advises businesses, research labs, and digital pioneers on the infrastructure they need to accelerate innovation. Passionate about making state-of-the-art hardware accessible, understandable, and practical, bridging ambitious ideas with the computing power to bring them to life.",
    linkedin    : "https://www.linkedin.com/in/kelanymo/",
    bmProfile   : "https://brainsmingle.com/Kelanymo",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 6, sessionId: "ses-d6-s3-t5", timeSlot: "20:00" }]
  },

  {
    id          : "spk-004",
    order       : 90,
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
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-055",
    order       : 91,
    name        : "Mostafa Elganainy",
    title       : "Head of AI",
    company     : "Nowlun",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-055.png",
    bio         : "Head of AI at Nowlun.com, with 20 years of experience building products and leading engineering teams. He has founded and led multiple startups in executive roles across product and engineering.",
    linkedin    : "https://www.linkedin.com/in/mostafaalielganainy/",
    bmProfile   : "https://brainsmingle.com/mostafa4876",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-076",
    order       : 92,
    name        : "Dr. Yomna Abdelrahman",
    title       : "Postdoctoral Researcher",
    company     : "University of the Bundeswehr Munich",
    country     : "Germany",
    countryCode : "DE",
    photo       : "spk-076.png",
    bio         : "Dr. Yomna Abdelrahman is a Human-Computer Interaction researcher specializing in AI, usable security and privacy, and multimodal sensing. Her work explores how emerging technologies interact with human behavior, with a growing focus on responsible AI, privacy, and the opportunities and challenges AI brings to research and academic practice.",
    linkedin    : "https://www.linkedin.com/in/dr-yomna-abdelrahman-846b44a1/",
    bmProfile   : "https://brainsmingle.com/dryomna9968",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 6, sessionId: "ses-d6-s3-t1", timeSlot: "20:00" }]
  },

  {
    id          : "spk-027",
    order       : 93,
    name        : "Sherouk Ghallab",
    title       : "Founder & Digital Learning Strategist",
    company     : "Noor Edtech",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-027.png",
    bio         : "Digital Learning Consultant with 13+ years of experience across Egypt, the Gulf, the UK, and Europe. She is the Founder of Noor, an AI-powered career guidance platform for students, and holds an MBA and MSc in Smart EdTech from Université Côte d'Azur.",
    linkedin    : "https://www.linkedin.com/in/sherouk-ghallab/",
    bmProfile   : "https://brainsmingle.com/sherouk1278",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 3, sessionId: "ses-d3-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-063",
    order       : 94,
    name        : "Ahmed Fakhry",
    title       : "Co-founder & CEO",
    company     : "Scale by AI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-063.png",
    bio         : "Co-founder and CEO of Scale by AI, an Egyptian AI startup helping businesses adopt and scale artificial intelligence through practical products and transformation programs. He leads strategy, partnerships, and AI commercialization, working with startups, SMEs, and organizations across the MENA region. His work focuses on turning emerging AI capabilities into solutions that solve real business problems and create measurable value. Actively engaged in the regional AI ecosystem, he brings a founder's perspective to conversations on responsible AI, entrepreneurship, and what makes AI startups scalable.",
    linkedin    : "https://www.linkedin.com/in/ahmedfakhry/",
    bmProfile   : "https://brainsmingle.com/ahmed6506",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 5, sessionId: "ses-d5-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-093",
    order       : 95,
    name        : "Khaled Hesham",
    title       : "AI Manager",
    company     : "Robusta Technology Group (RTG)",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-093.png",
    bio         : "AI Manager at Robusta, leading GenAI and ML teams to build systems that don't just demo well but operate reliably in production. With a foundation in engineering, he built scalable backend systems for top Egyptian companies and mentored students as a Teaching Assistant at Ain Shams Faculty of Engineering. He works across Classical ML, MLOps, LLMs, RAG, and GenAI agents, but his real focus is systems thinking: connecting research, infrastructure, and business value. He believes not all problems need GenAI, but when it's the right tool, it can transform a business, and that the difference between hype and impact is engineering discipline. His mission is to help teams build AI that is useful, reliable, and worth paying for.",
    linkedin    : "https://www.linkedin.com/in/khaled-hesham-fathallah-083802122/",
    bmProfile   : "https://brainsmingle.com/khaled9118",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 5, sessionId: "ses-d5-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-058",
    order       : 96,
    name        : "Ahmed ElKayesh",
    title       : "Founder & AI/ML Engineer",
    company     : "RoboPhi",
    country     : "Belgium",
    countryCode : "BE",
    photo       : "spk-058.png",
    bio         : "Senior AI/ML Engineer and founder of RoboPhi, with 18 years of software and AI experience, including nine years at Nuance Communications and Microsoft. He focuses on healthcare AI, reliable language models, and evaluating whether AI systems are ready for real-world use.",
    linkedin    : "https://www.linkedin.com/in/aelkayesh/",
    bmProfile   : "https://brainsmingle.com/aelkayesh",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 5, sessionId: "ses-d5-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-006",
    order       : 97,
    name        : "Yasmine Aguib",
    title       : "co-Chief, Research & Innovation Officer",
    company     : "Magdi Yacoub Heart Foundation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-006.png",
    bio         : "Technology and innovation strategist leading the Research & Innovation Centre at the Magdi Yacoub Heart Foundation. She builds AI-enabled health ecosystems integrating genomics, digital twins, and precision medicine. A Technical University of Munich graduate and Honorary Senior Research Fellow at Imperial College London, her work spans Germany, the UK, and Egypt driving equitable healthcare innovation.",
    linkedin    : "https://www.linkedin.com/in/yasmine-aguib-464776184/",
    bmProfile   : "https://brainsmingle.com/yasmine7704",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s1-t3", timeSlot: "18:00" }]
  },

  {
    id          : "spk-098",
    order       : 98,
    name        : "Ehsan Sayed",
    title       : "Founder & Program Director",
    company     : "Sales Techies",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-098.png",
    bio         : "Data-driven Business Development Team Lead with a background in Computer Engineering and over 5 years of experience, specializing in B2B partnerships, SaaS sales, and scaling performance-driven teams. He has led revenue growth initiatives, built and coached sales teams from the ground up, and helped organizations streamline their sales pipelines through both strategy and technology. He is especially passionate about the role of AI in sales and business development, designing and delivering hands-on workshops and on-demand courses that help professionals leverage AI tools to boost efficiency, personalize outreach, and make smarter decisions. An Oceanman finisher, he brings the same discipline and endurance to business as he does to open-water swimming.",
    linkedin    : "https://www.linkedin.com/in/ehsansayed/",
    bmProfile   : "https://brainsmingle.com/ehsan4853",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 5, sessionId: "ses-d5-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-080",
    order       : 99,
    name        : "Mahmoud Elrefaey",
    title       : "Software Engineer",
    company     : "Saudi Confidential Company",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-080.png",
    bio         : "3D Lead Developer focused on building complex web applications and developer tools. He enjoys exploring practical ways to use AI in software development and improving how developers work with modern coding tools.",
    linkedin    : "https://www.linkedin.com/in/m-elrefaey/",
    bmProfile   : "https://brainsmingle.com/mahmoud1835",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 6, sessionId: "ses-d6-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-074",
    order       : 100,
    name        : "Abdelrahman Diaa",
    title       : "AI Consultant",
    company     : "Freelancer",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-074.png",
    bio         : "Co-Founder and CEO of Mntiq Studios, an AI-powered edutainment company, and Senior Business Development Manager at Sahl. He leads the development of YouDetective, combining artificial intelligence, interactive storytelling and structured thinking to create engaging learning experiences.",
    linkedin    : "https://www.linkedin.com/in/abdelrahman-diaa-afifi-14920157/",
    bmProfile   : "https://brainsmingle.com/abdelrahman6385",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 4, sessionId: "ses-d4-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-007",
    order       : 101,
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
    id          : "spk-107",
    order       : 102,
    name        : "Mostafa Zeky",
    title       : "Film Director & Creative Director",
    company     : "Zeky Films",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-107.png",
    bio         : "Egyptian commercial director and multidisciplinary creative working across live-action and AI filmmaking. His background in sound, voice-over, and post-production shapes his approach to storytelling, combining a clear directing vision with close collaboration across creative and production teams.",
    linkedin    : "https://www.linkedin.com/in/mostafazeky",
    bmProfile   : "https://brainsmingle.com/zeky8895",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 2, sessionId: "ses-d2-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-139",
    order       : 103,
    name        : "Mohammad El-esawi",
    title       : "Founder",
    company     : "Arab AI Club",
    country     : "Jordan",
    countryCode : "JO",
    photo       : "spk-139.png",
    bio         : "Senior Software Developer | 590K+ on Instagram | Forbes 30 Under 30 | Founder of Landy-AI, AI Toolbox Chrome Extension, and ArabAIClub - empowering 50K+ active users with AI tools.",
    linkedin    : "https://www.linkedin.com/in/mohammad-el-esawi-1472551b6/",
    bmProfile   : null,
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 6, sessionId: "ses-d6-spotlight", timeSlot: "21:00" }]
  },

  {
    id          : "spk-073",
    order       : 104,
    name        : "Omar Nasr",
    title       : "Founder",
    company     : "GlobalAssess360",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-073.png",
    bio         : "System Architect, AI Specialist, and Professor at Cairo University, with over two decades of research and industrial experience and a publication record of 50+ papers in international conferences and journals. His work spans AI, cloud technologies, and system architecture, and he holds a PhD from UCLA. In 2017, he founded TechiBees Inc., where he developed products including GlobalAssess360, AI-Proctor, and ThePowerGrader, enhancing online and educational assessments through AI, cloud computing, and image processing across web, mobile, and desktop interfaces. Since 2022, he has served as a Senior Manager at Si-Vision Technologies, collaborating with Synopsys Inc. on computer vision, machine learning, processor simulations, and safety products.",
    linkedin    : "https://www.linkedin.com/in/omaranasr-ai/",
    bmProfile   : "https://brainsmingle.com/omar2145",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 4, sessionId: "ses-d4-s3-t1", timeSlot: "20:00" }]
  },

  {
    id          : "spk-072",
    order       : 105,
    name        : "Ahmed Ramy",
    title       : "Co-Founder & CEO",
    company     : "FastAutomate",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-072.png",
    bio         : "Technology and operations leader with 20+ years of experience across IT management, operations management, and project management. Brings deep experience across the Gulf region and a strong customer-oriented perspective, with a proven record in channel management, business development, and process improvement (QMS, KPIs, HR, and talent management). Has delivered cutting-edge projects including mobile applications and HTML5 experiences, working across outsourcing models in markets spanning the USA, Canada, Egypt, UAE, Saudi Arabia, and Qatar. Specializes in enterprise architecture, application life cycle management, account management, and presales.",
    linkedin    : "https://www.linkedin.com/in/wdeveloper/",
    bmProfile   : "https://brainsmingle.com/ahmed7393",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-021",
    order       : 106,
    name        : "Moustafa Eshra",
    title       : "Data & AI Enterprise Architect",
    company     : "IBM",
    country     : "France",
    countryCode : "FR",
    photo       : "spk-021.png",
    bio         : "Data & AI Architect with 15+ years of experience helping organizations solve complex data and digital challenges. Specializes in guiding developers into GenAI, with deep expertise in machine learning, enterprise architecture, and creative problem-solving. Passionate about coding and turning data into real-world impact.",
    linkedin    : "https://www.linkedin.com/in/moustafa-eshra/",
    bmProfile   : "https://brainsmingle.com/moustafa6104",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 2, sessionId: "ses-d2-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-026",
    order       : 107,
    name        : "Ziad Elalaily",
    title       : "AI Practice & Business Lead",
    company     : "PwC ETIC",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-026.png",
    bio         : "AI engineering leader at PwC, focused on turning generative AI and machine learning into scalable, production-ready solutions. He combines deep technical expertise with business strategy, team leadership, and solution architecture, helping organizations move from AI experimentation to measurable real-world impact.",
    linkedin    : "https://www.linkedin.com/in/ziad-elalaily-195a44140/",
    bmProfile   : "https://brainsmingle.com/ziad6252",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 3, sessionId: "ses-d3-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-029",
    order       : 108,
    name        : "Kamal Ghamry",
    title       : "Marketing Manager",
    company     : "Ninos",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-029.png",
    bio         : "Commercial Marketing and Growth Advisor helping CEOs turn marketing data, customer behavior, and business economics into better commercial decisions. Experience spans e-commerce, fintech, retail, SaaS, B2B, and service businesses, with a focus on growth strategy, customer economics, and marketing effectiveness. Passionate about building decision systems that connect marketing activity to real business outcomes.",
    linkedin    : "https://www.linkedin.com/in/kamal-ghamry/",
    bmProfile   : "https://brainsmingle.com/kamal1544",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 6, sessionId: "ses-d6-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-125",
    order       : 109,
    name        : "Ibrahim Habib",
    title       : "CEO",
    company     : "URCA",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-125.png",
    bio         : "Ibrahim Habib is the CEO of URCA and Co-Founder and Managing Director of CairoMotive. He works at the intersection of automotive software, robotics, and physical AI. He previously founded Vortex, an underwater robotics company, and has led engineering teams delivering complex automotive software programs.",
    linkedin    : "https://www.linkedin.com/in/ibrahim-habib-b8053310b",
    bmProfile   : "https://brainsmingle.com/ibrahim2194",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 5, sessionId: "ses-d5-s2-t5", timeSlot: "19:00" }]
  },

  {
    id          : "spk-030",
    order       : 110,
    name        : "Ahmed El Zoughby",
    title       : "UX Research Lead",
    company     : "UX Labs",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-030.png",
    bio         : "A Product Design Expert with 13 years of hand-on experience focused on Product Strategy, User Research, and Interaction Design, with an educational background in Architecture. Enjoys maximizing the value of Human Centered Design for the people interacting with products of over 50+ entities that I’ve crossed path with through direct work or mentorship capacity.",
    linkedin    : "https://www.linkedin.com/in/azoughby/",
    bmProfile   : "https://brainsmingle.com/azoughby",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 2, sessionId: "ses-d2-s3-t4", timeSlot: "20:00" }]
  },

  {
    id          : "spk-032",
    order       : 111,
    name        : "Mahmoud Abdelhamed",
    title       : "Senior AI Engineer",
    company     : "Confidential",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-032.png",
    bio         : "Senior Computer Vision Engineer with 7+ years of experience building production AI systems across computer vision, 3D vision, and multimodal AI. His work spans scalable AI deployment, 3D reconstruction, agentic workflows, and technical leadership, with a focus on turning advanced AI research into practical engineering solutions.",
    linkedin    : "https://www.linkedin.com/in/mahmoud-khaled-nasr/",
    bmProfile   : "https://brainsmingle.com/mahmoud9199",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 6, sessionId: "ses-d6-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-033",
    order       : 112,
    name        : "Ahmed Aabed",
    title       : "Senior Engineering Manger",
    company     : "Yassir",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-033.png",
    bio         : "Senior Engineering Manager with 15+ years of experience across DevOps, infrastructure, and engineering leadership. Former CTO at Zyda and Head of SRE at Nana, with previous roles at Instabug, Swvl, and Crowd Analyzer. Started in cybersecurity as a Malware Hunter at EG-CERT. Passionate about building high-performing engineering teams that ship products with real business impact.",
    linkedin    : "https://www.linkedin.com/in/ahmadaabed/",
    bmProfile   : "https://brainsmingle.com/ahmad7390",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 5, day: 2, sessionId: "ses-d2-s1-t5", timeSlot: "18:00" }]
  },

  {
    id          : "spk-106",
    order       : 113,
    name        : "Asmaa Saad",
    title       : "Senior Economic Researcher",
    company     : "GAFI",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-106.png",
    bio         : "Monitoring & Evaluation Specialist and Business Matchmaker at GAFI (Egypt's General Authority for Investment), where she bridges data insights and high-value investment, turning complex data into strategic partnerships that drive measurable growth. With over nine years in GAFI's strategic department, her expertise spans investment promotion, business analysis, and international relations. Earlier, she held performance and international account roles at Vodafone across Ireland and the UK. She holds a master's in International Relations from Kobe University and a degree from the Faculty of Economics and Political Sciences at Cairo University.",
    linkedin    : "https://www.linkedin.com/in/asmaa-saad-talha-5b681b1bb/",
    bmProfile   : "https://brainsmingle.com/AsmaaSaadTalha",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 6, sessionId: "ses-d6-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-039",
    order       : 114,
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
    id          : "spk-041",
    order       : 115,
    name        : "Eyad Eldomairy",
    title       : "Art Director",
    company     : "Six10 Ventures",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-041.png",
    bio         : "Seven years of experience as an art director, plus two years using Al to create video ads, static campaigns, UGC content, product shoots, and branding for e-commerce teams. He's worked with brands like Audi, SEAT, and Burger King, and in his session, he'll focus on where Al meets design, advertising, and marketing",
    linkedin    : "https://www.linkedin.com/in/eyadaldomairy/",
    bmProfile   : "https://brainsmingle.com/Eyadaldomairy",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 5, sessionId: "ses-d5-s1-t2", timeSlot: "18:00" }]
  },

  {
    id          : "spk-043",
    order       : 116,
    name        : "Ezzat Essam",
    title       : "AI Animator",
    company     : "TPP",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-043.png",
    bio         : "Egyptian Art Director, AI Visualizer, and Stand-up Comedian with over 9 years of experience in visual communication and creative direction. His work explores the intersection of design, storytelling, humor, and artificial intelligence, with a strong focus on using AI as a tool for creative thinking, art direction, and visual experimentation. @TPP_Ai Visual Artisit",
    linkedin    : "https://www.linkedin.com/in/ezzat-essam-355190189/",
    bmProfile   : "https://brainsmingle.com/ezzat5253",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 2, sessionId: "ses-d2-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-046",
    order       : 117,
    name        : "Anwar Aly",
    title       : "Founder & CEO",
    company     : "Zaher.ai",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-046.png",
    bio         : "Founder & CEO of Zaher.AI, an Arabic-first AI visibility platform helping brands get discovered and recommended by AI engines like ChatGPT, Gemini, and Perplexity. He is a UNDP Global Winner with 10+ years in startups, CRO, and behavioral science.",
    linkedin    : "https://www.linkedin.com/in/anwaraly/",
    bmProfile   : "https://brainsmingle.com/anwar8554",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 5, sessionId: "ses-d5-s3-t3", timeSlot: "20:00" }]
  },

  {
    id          : "spk-048",
    order       : 118,
    name        : "Yasser Abdellateif",
    title       : "Creative Director",
    company     : "Andalusia Group",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-048.png",
    bio         : "Creative Director with 18+ years in advertising, working across ideas, disciplines, markets, and cultures. Has spent his career building work, leading creative teams, and chasing the idea that makes everything else click. Today, his focus is on how creativity is evolving, where new tools make execution easier, and taste, judgment, and original thinking matter more than ever. Alongside his creative work, he teaches and mentors emerging creatives, sharing what the industry truly demands beyond the brief and the polished case study.",
    linkedin    : "https://www.linkedin.com/in/yasser-abdellateif-1369766b/",
    bmProfile   : "https://brainsmingle.com/yasser7941",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 4, sessionId: "ses-d4-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-049",
    order       : 119,
    name        : "Aya Abdelkader",
    title       : "Product Marketing Lead",
    company     : "Intalio",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-049.png",
    bio         : "Product marketer and brand builder with 12 years across enterprise AI, software, and consumer technology in MENA. Product Marketing Lead at Intalio, taking enterprise AI and automation products to market across MEA, North Africa, Europe, and the Levant. Former Product Marketing Manager at Gotrah Ventures in Saudi Arabia, Strategic Marketing Supervisor for NilePreneurs at Nile University, and Marketing Manager for e-commerce and consumer brands across Egypt. MBA in Marketing & Luxury Management. Recipient of the Top 25 Emerging Marketing Innovators Award. Passionate about turning complex technology into stories buyers understand and sales teams can sell.",
    linkedin    : "https://www.linkedin.com/in/ayaabdelkader/",
    bmProfile   : "https://brainsmingle.com/aya8122",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 4, sessionId: "ses-d4-s1-t4", timeSlot: "18:00" }]
  },

  {
    id          : "spk-020",
    order       : 120,
    name        : "Nader Sayed",
    title       : "Founder",
    company     : "Tawasul for AI transformation",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-020.png",
    bio         : "Enterprise Architect and Digital Transformation Expert with 12+ years of experience turning complex operations into scalable digital products. Sits at the intersection of business, technology, and product — designing smart systems powered by automation, AI/ML, and IoT. Combines product thinking with solution architecture to deliver and scale real impact.",
    linkedin    : "https://www.linkedin.com/in/nader-sayed-y/",
    bmProfile   : "https://brainsmingle.com/nader2tawasol",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 4, day: 6, sessionId: "ses-d6-s2-t4", timeSlot: "19:00" }]
  },

  {
    id          : "spk-142",
    order       : 121,
    name        : "Joud Khattab",
    title       : "Partner & CTO",
    company     : "Bidayah Holding",
    country     : "Syria",
    countryCode : "SY",
    photo       : "spk-142.png",
    bio         : "Joud Khattab works at the intersection of technology, entrepreneurship and international development. A technology leader and venture builder, he connects digital innovation with business strategy and social impact. His experience spans the United Nations, academia and startup ecosystems, with a focus on creating opportunities in emerging markets.",
    linkedin    : "https://www.linkedin.com/in/joudkhattab/",
    bmProfile   : "https://brainsmingle.com/joudkhattab",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p4", timeSlot: "21:00" }]
  },

  {
    id          : "spk-052",
    order       : 122,
    name        : "Hassan Gad",
    title       : "Founder",
    company     : "Fgimawya",
    country     : "KSA",
    countryCode : "SA",
    photo       : "spk-052.png",
    bio         : "UX Engineering specialist with 14+ years of experience, now focused on UX leadership and management. Aligns user needs with business objectives and stakeholder expectations, providing clarity, reducing friction, and guiding teams toward user-centered, strategically effective outcomes. Collaborates across product, engineering, and stakeholders to translate strategic goals into scalable design systems and efficient workflows. Passionate about advancing UX maturity, strengthening cross-functional collaboration, and connecting vision to execution.",
    linkedin    : "https://www.linkedin.com/in/hasangadux/",
    bmProfile   : "https://brainsmingle.com/hasangad",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 6, sessionId: "ses-d6-s2-t2", timeSlot: "19:00" }]
  },

  {
    id          : "spk-152",
    order       : 123,
    name        : "Mostafa Mohamed",
    title       : "Sr. Revenue Operations & GTM Systems",
    company     : "American Bath Group",
    country     : "USA",
    countryCode : "US",
    photo       : "spk-152.png",
    bio         : "Senior Revenue Operations and GTM Systems lead at American Bath Group in Texas. As a HubSpot Solutions Provider, Mostafa helps sales, marketing and customer success teams build CRMs they can trust, before and after AI",
    linkedin    : "https://www.linkedin.com/in/mostafa-ahmed-ali/",
    bmProfile   : "https://brainsmingle.com/mostafa6658",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s4-t0", timeSlot: "17:30" }]
  },

  {
    id          : "spk-108",
    order       : 124,
    name        : "Hazem Salim",
    title       : "CEO & Founder",
    company     : "Outline-IT & Dameg",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-108.png",
    bio         : "Global award-winning entrepreneur, Founder of Dameg and CEO of Outline-IT, specializing in digital accessibility, assistive technology, and inclusive innovation. He has presented Dameg on Shark Tank Egypt, serves as a Digital Marketing Consultant at TIEC, and is an experienced speaker, mentor, and judge in entrepreneurship and technology.",
    linkedin    : "https://www.linkedin.com/in/hazem-salim",
    bmProfile   : "https://brainsmingle.com/hazem3560",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 5, sessionId: "ses-d5-s2-t1", timeSlot: "19:00" }]
  },

  {
    id          : "spk-070",
    order       : 125,
    name        : "Sherif Shalaby",
    title       : "Co-Founder & CMO",
    company     : "Big Move Agency",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-070.png",
    bio         : "Entrepreneur, marketing and creative strategist, and Co-Founder & CMO of Big Move Agency, an integrated marketing and creative agency he co-founded in 2013. With more than a decade of experience, he has worked across marketing strategy, brand building, creative direction, and filmmaking for leading local, regional, and multinational brands across Egypt and the Middle East. A Generative AI specialist and filmmaker, he integrates AI into real-world marketing and production workflows, and is an active speaker and trainer on marketing, creativity, and how emerging technology is reshaping the way brands and creative teams work.",
    linkedin    : "https://www.linkedin.com/in/sherif-shalaby-72bb5861/",
    bmProfile   : "https://brainsmingle.com/sherif5030",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 3, sessionId: "ses-d3-s3-t2", timeSlot: "20:00" }]
  },

  {
    id          : "spk-064",
    order       : 126,
    name        : "Mahmoud Abdellahi",
    title       : "Researcher and Lecturer",
    company     : "Cairo University",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-064.png",
    bio         : "Computer scientist and neuroscience researcher applying machine learning to decode memory processing during sleep from EEG brain signals. Founder of Aibdaya, an Arabic-language platform teaching AI from its mathematical foundations to thousands of learners. Also a lecturer at the Faculty of Computers and AI, Cairo University.",
    linkedin    : "https://www.linkedin.com/in/mahmoud-abdellahi-phd-5bb81110b/",
    bmProfile   : "https://brainsmingle.com/mahmoud1446",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 1, day: 5, sessionId: "ses-d5-s1-t1", timeSlot: "18:00" }]
  },

  {
    id          : "spk-069",
    order       : 127,
    name        : "Nourah Mahamed",
    title       : "AI Cinematic Ads & Branding designer",
    company     : "Nourah Studio",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-069.png",
    bio         : "Senior Graphic Designer with over 5 years of experience specialized in Branding, Visual Identity, and Social Media. I am  proficient in the art of Visual Storytelling, Manipulation, and Video Editing.",
    linkedin    : "https://www.linkedin.com/in/nourhanmohamednmma",
    bmProfile   : "https://brainsmingle.com/nourhan3857",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 2, day: 6, sessionId: "ses-d6-s1-t2", timeSlot: "18:00" }]
  },

  {
    id          : "spk-053",
    order       : 128,
    name        : "Mo Fattah",
    title       : "Founder & CEO",
    company     : "KeepUp & MIT VAP Finalist",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-053.png",
    bio         : "Founder and CEO of KeepUp, where he is building a new platform for playable, interactive content. He is a product-focused founder with experience across AI, consumer technology, startup strategy, pitching, and founder coaching, with past recognition from MIT and Draper University.",
    linkedin    : "https://www.linkedin.com/in/mo-fattah-bb1234160/",
    bmProfile   : "https://brainsmingle.com/mo6075",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s2-t3", timeSlot: "19:00" }]
  },

  {
    id          : "spk-153",
    order       : 129,
    name        : "Hasan Abo-Shally",
    title       : "Entrepreneur",
    company     : "Microsoft | ArabAIClub | Hasoub",
    country     : "Palestine",
    countryCode : "PS",
    photo       : "spk-153.png",
    bio         : "Senior Product Manager at Microsoft, founder of Hasoub, and co-founder of Arab AI Club. For nearly 20 years he has built products, platforms, and communities that help others build. He is a TEDx speaker and was named to Forbes 30 Under 30 in 2017.",
    linkedin    : "https://www.linkedin.com/in/hasanaboshally",
    bmProfile   : "https://brainsmingle.com/hasan",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s6-t0", timeSlot: "19:00" }]
  },

  {
    id          : "spk-154",
    order       : 130,
    name        : "Dr. Ahmed Elshikh",
    title       : "Research & Development Manager",
    company     : "ITIDA-SECC",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-154.png",
    bio         : "R&D Manager at ITIDA-SECC, where he helps executives and decision-makers shape their strategies in the disruptive digital economy. He draws on broad exposure to a wide range of strategies, business models, and technologies, including AI, Data Analytics, FinTech, Metaverse, Business & Enterprise Architecture, Blockchain, Lean Six Sigma, TOGAF, CMMI, and Agile. He also helps them realize these strategies using governance frameworks such as Balanced Scorecards, COBIT, and OKRs. He holds an Executive Doctorate of Business Administration dual degree from SKEMA Business School and iaeLyon School of Management (France), an MBA from Warwick Business School (UK), and an MSc from AAST (Egypt). His diversified experience spans roles as an R&D Manager, Advisor to C-Suite levels, Business & Enterprise Architect, and Executive Coach.",
    linkedin    : "http://www.linkedin.com/in/dr-ahmed-s-elsheikh",
    bmProfile   : "https://brainsmingle.com/aselshikh",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s2-t0", timeSlot: "16:00" }]
  },

  {
    id          : "spk-155",
    order       : 131,
    name        : "Reham Saleh",
    title       : "Senior Performance Excellence",
    company     : "ITIDA-SECC",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-155.png",
    bio         : "Senior Performance Excellence Expert Consultant at SECC, with over 20 years of experience in the software industry, including 9+ years at the Information Technology Industry Development Agency (ITIDA). He brings extensive experience in software project management, Agile, and CMMI, contributing to performance excellence and organizational transformation. His expertise spans scaling Agile, DevOps, enterprise architecture consulting, and process improvement, enabling teams to achieve operational efficiency and strategic objectives. He holds a wide range of certifications including SAFe 6.0 SPC, SAFe Agilist, RTE, CSM, A-CSM, CSP-SM, CPO, CAL-E, and CMMI Expert.",
    linkedin    : "https://www.linkedin.com/in/reham-saleh-30405240/",
    bmProfile   : "https://brainsmingle.com/reham6949",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s3-t0", timeSlot: "17:00" }]
  },

  {
    id          : "spk-156",
    order       : 132,
    name        : "Ahmed Ameen",
    title       : "Senior Performance Excellence Expert",
    company     : "ITIDA-SECC",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-156.png",
    bio         : "Expert Consultant and Coach at ITIDA, specializing in Agile/DevOps, CMMI, Enterprise Architecture, Innovation, Lean, and Performance Improvement. With 23+ years of software development experience, starting as a developer, and 17+ years in software leadership, he has led Agile, DevOps, and CMMI transformations across 50+ teams and trained over 1,500 professionals. A certified Agile/DevOps instructor, coach, and practitioner, he is an Innovation Award winner and a frequent organizer and speaker at devopsdays and other software engineering conferences. He holds an MBA and certifications including Certified Agile, Agile PM, DevOps Leadership, PMP, TOGAF 9.1, and ITIL.",
    linkedin    : "https://www.linkedin.com/in/aameen79/",
    bmProfile   : "https://brainsmingle.com/ahmad5869",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 7, sessionId: "ses-d7-s7-t0", timeSlot: "19:00" }]
  },

  {
    id          : "spk-137",
    order       : 133,
    name        : "Belal Amin",
    title       : "Co-founder  & CEO",
    company     : "BrainsMingle",
    country     : "Finland",
    countryCode : "FI",
    photo       : "spk-137.png",
    bio         : "Cofounder & CEO at Brainsmingle, PhD researcher at University of Oulu, senior software engineer, and serial entrepreneur. Built some of the first Arabic NLP products, co-founded two ventures before BrainsMingle, and currently splitting his time between chip design research in Finland and building the platform he always wished existed for professionals like him.",
    linkedin    : "https://www.linkedin.com/in/amin-m-belal/",
    bmProfile   : "https://brainsmingle.com/belal",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p0", timeSlot: "18:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s11-t0", timeSlot: "21:00" }]
  },

  {
    id          : "spk-138",
    order       : 134,
    name        : "Yousef Gamal",
    title       : "Co-founder  & CTO",
    company     : "BrainsMingle",
    country     : "Canada",
    countryCode : "CA",
    photo       : "spk-138.png",
    bio         : "Cofounder & CTO at Brainsmingle, Software engineer with 8+ years of experience and three co-founded startups under his belt. Built Askelp from scratch: planned, designed, coded, and shipped solo. Now building from Toronto as a digital nomad, leading all engineering at BrainsMingle including the real-time video matching engine that powers every connection on the platform.",
    linkedin    : "https://www.linkedin.com/in/youseftcg/",
    bmProfile   : "https://brainsmingle.com/yousef",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: null, day: 1, sessionId: "ses-d1-p0", timeSlot: "18:00" }, { trackNumber: null, day: 7, sessionId: "ses-d7-s11-t0", timeSlot: "21:00" }]
  },

  {
    id          : "spk-146",
    order       : 135,
    name        : "Dina Khedr",
    title       : "Head of Product Marketing",
    company     : "BrainsMingle",
    country     : "Egypt",
    countryCode : "EG",
    photo       : "spk-146.png",
    bio         : "Business strategist and program architect with 18+ years at the blend of business strategy, marketing leadership, and large-scale program development. She works across two tracks: designing and delivering national-scale initiatives from concept to funded, implemented, and impact-measured, and helping organizations sharpen their positioning, build their brands, and grow through brand architecture, go-to-market strategy, and organizational design. Her programs have served university students, graduates, professionals, startups, and government bodies, securing ministerial endorsements and managing multi-million pound budgets. She has worked alongside partners including Google, HSBC Egypt, the European Union, GIZ, ILO, Erasmus+, and the Central Bank of Egypt, across sectors spanning JobTech, EdTech, HealthTech, and SaaS. She holds an MBA in SMEs from AAST GSB, and brings structured thinking, hands-on execution, and an absolute bias toward outcomes.",
    linkedin    : "https://www.linkedin.com/in/dinakhedr/",
    bmProfile   : "https://brainsmingle.com/dinakhedr",
    featured    : false,
    showOnHome  : false,
    appearances : [{ trackNumber: 3, day: 4, sessionId: "ses-d4-s3-t3", timeSlot: "20:00" }]
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
