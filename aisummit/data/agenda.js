/**
 * agenda.js — Signal: AI
 * GENERATED FILE. Do not edit by hand.
 * Source: the Sessions tab, Publish = With Session or Yes.
 * "Yes" publishes the session but withholds the sign-up link.
 * Generated 2026-09-24 12:35 · 81 sessions, 65 with a sign-up link.
 *
 * trackNumber: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * trackNumber null = Opening Day panels, Day Spotlight, Speed Networking.
 * type is the Session Type cell verbatim, or null when it is blank.
 * The site prints it as written and uppercases it in CSS.
 * status: "closed" renders normally; "in-progress" is shown as tentative
 * (dashed edge, a tag, and no sign-up) from the Sessions Status column.
 * Slots with no published session are absent. The grid renders those
 * cells as placeholders from days.js and tracks.js.
 *
 * bmUrl is the BrainsMingle registration page, or null when sign-ups
 * are not open yet. Use openSessionSignup() rather than reading it
 * directly, so the pending case is handled in one place.
 */

const SIGNUP_PENDING_MESSAGE =
  "Sign-ups for this session open soon. Register for the summit and we will let you know the moment this one is live.";

const SIGNAL_AGENDA = [

  // ======================================
  // DAY 1
  // ======================================
  { id: "ses-d1-p0", title: "Panel for Ameer", type: "Panel Discussion", trackNumber: null, day: 1, slot: 1, timeSlot: "17:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d1-p1", title: "Panel for Ameer", type: "Panel Discussion", trackNumber: null, day: 1, slot: 2, timeSlot: "18:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d1-p2", title: "Panel for Ameer", type: "Panel Discussion", trackNumber: null, day: 1, slot: 3, timeSlot: "19:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d1-p3", title: "Egyptians Powering AI at Global Giants (Meta, HelloFresh, Tesla)", type: "Panel Discussion", trackNumber: null, day: 1, slot: 4, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-014","spk-088","spk-089","spk-090"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d1-p4", title: "From Diaspora to Damascus: Powering Syria's AI Transformation", type: "Panel Discussion", trackNumber: null, day: 1, slot: 5, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-024","spk-086"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d1-networking", title: "Saturday Speed Networking", type: "Speed Networking", trackNumber: null, day: 1, slot: 6, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=1429514e-dba9-4c6e-8e2e-a2ed5e821096", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 2
  // ======================================
  { id: "ses-d2-s1-t1", title: "If You Can't Delegate to AI, You Can't Delegate to People", type: "Talk", trackNumber: 1, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-018"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=4c9fd602-ea63-4cdc-a84f-b52ef7ace61e", description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t2", title: "AI filmmaking and the transformation of creative workflows", type: "Talk", trackNumber: 2, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-040"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=3976e85a-7b13-4019-9304-f0e49e7e4e0a", description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t3", title: "Beyond the AI Hype: Where Does AI Really Create Value in Health?", type: "Fireside Chat", trackNumber: 3, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-004","spk-006"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=1b2932fc-3cec-464b-9680-57fe5229a0b7", description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t4", title: "More and better conversations with AI", type: "Talk", trackNumber: 4, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-023"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=4e47e9be-d113-47d6-a07f-edd02beded76", description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t5", title: "DevOps in the AI Era", type: "Panel Discussion", trackNumber: 5, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-019","spk-033","spk-034"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=3a3ea2af-feb7-4287-af03-5e9dd0d9cfa3", description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t2", title: "The AI Revolution in Ad Campaigns: How WUZZUF Built a Full Campaign with AI", type: "Fireside Chat", trackNumber: 2, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-077"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=7a7707f3-b2d0-4163-8208-b74993d56064", description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t3", title: "MENA SaaS 7-Stage Growth Roadmap", type: "Talk", trackNumber: 3, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-009"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=af20a819-7155-4c21-8c55-2736c59f21a0", description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t4", title: "AI That Actually Works: Building Engines That Matter", type: "Talk", trackNumber: 4, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-072"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=c754704f-c41b-45ee-b705-c7755e64e02e", description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t5", title: "Building Through the Bubble: Telecom's Lessons for the AI Buildout", type: "Talk", trackNumber: 5, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-011"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=fb68c8c0-e9cf-4220-b286-63994b16edb3", description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t1", title: "Where Does AI Fit? A Practical Blueprint for Your University", type: "Talk", trackNumber: 1, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-059"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=cc22fdd5-66dc-41b0-9055-9d21ce420563", description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t2", title: "AI, Sit Down", type: "Talk", trackNumber: 2, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-043"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=0c2a6cfb-9ccb-466d-af47-cd1c11c09c8b", description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t3", title: "How to build your GenAI application", type: "Talk", trackNumber: 3, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-021"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=b693617a-c41c-4cbf-afb2-a507049f97ba", description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t4", title: "Designing Trust: What AI-Ready UX Looks Like When It Ships", type: "Fireside Chat", trackNumber: 4, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-028","spk-030"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=4b747b48-db05-48a5-bcc8-d876fd0ec691", description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t5", title: "Building Deep Search Agent from Scratch", type: "Talk", trackNumber: 5, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-005"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=205d50e9-f45f-4c6b-923a-41b5c885a6e0", description: null, special: null, status: "closed" },
  { id: "ses-d2-spotlight", title: null, type: "Panel Discussion", trackNumber: null, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-094"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=f85811b6-62d2-4628-9f71-be5f2671c4b4", description: null, special: "spotlight", status: "closed" },
  { id: "ses-d2-networking", title: "Sunday Speed Networking", type: "Speed Networking", trackNumber: null, day: 2, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=ab0a8e69-3d6f-4e5a-a8e4-9887b2fdc659", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 3
  // ======================================
  { id: "ses-d3-s1-t3", title: "From Idea to AI Startup: Building an MVP in Days, Not Months", type: "Talk", trackNumber: 3, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-022"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=6210f795-61ba-4939-a8ca-7eb88047cc76", description: null, special: null, status: "closed" },
  { id: "ses-d3-s1-t4", title: "Winning GTM Strategies for Financial Services: From First Approach to Winning the Deal", type: "Talk", trackNumber: 4, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-066"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=7d4161c7-be72-4367-a005-424f686805d8", description: null, special: null, status: "closed" },
  { id: "ses-d3-s1-t5", title: "Your AI agent works. Now what?", type: "Talk", trackNumber: 5, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-057"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=fcd97326-8bfe-4eac-b04f-df2827a4aede", description: null, special: null, status: "closed" },
  { id: "ses-d3-s2-t1", title: "Redesigning L&D Offer for an AI-Native Workforce", type: "Talk", trackNumber: 1, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-027"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=341c1256-5a3d-41c0-ad87-ad855f17c93a", description: null, special: null, status: "closed" },
  { id: "ses-d3-s2-t3", title: "ICEALEX", type: "Talk", trackNumber: 3, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-085"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-s2-t4", title: "AI in Marketing", type: "Talk", trackNumber: 4, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-007"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=03416f82-8b34-473b-a8b9-3342bdc456b0", description: null, special: null, status: "closed" },
  { id: "ses-d3-s2-t5", title: "AI-Powered Security Code Reviews That Actually Work: A Threat-Model-First Methodology", type: "Talk", trackNumber: 5, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-097"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=7b934f41-8ccb-4b37-977a-ee2258f75b1b", description: null, special: null, status: "closed" },
  { id: "ses-d3-s3-t2", title: null, type: "Talk", trackNumber: 2, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-070"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-s3-t3", title: "How to design your app ideas in minutes with AI", type: "Talk", trackNumber: 3, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-051"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=efe0133e-a8bf-4d25-96ff-89b79b2ff15a", description: null, special: null, status: "closed" },
  { id: "ses-d3-s3-t4", title: "The Enterprise AI Equation: Scale, Value , ROI", type: "Talk", trackNumber: 4, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-026"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=8868b969-f53a-41b2-b90c-fe2ede12b0e2", description: null, special: null, status: "closed" },
  { id: "ses-d3-s3-t5", title: "Achilles' heel", type: "Talk", trackNumber: 5, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-061"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=c8def11e-7de8-4cc0-a547-815404c73652", description: null, special: null, status: "closed" },
  { id: "ses-d3-spotlight", title: "Crossing Borders: What It Takes to Expand Beyond Your Home Market", type: "Panel Discussion", trackNumber: null, day: 3, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-014","spk-092"], bmUrl: null, description: null, special: "spotlight", status: "in-progress" },
  { id: "ses-d3-networking", title: "Monday Speed Networking", type: "Speed Networking", trackNumber: null, day: 3, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=ecc48177-40fc-4647-a246-08e056ea1a38", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 4
  // ======================================
  { id: "ses-d4-s1-t3", title: "AI context building challenges for ops heavy startups", type: "Fireside Chat", trackNumber: 3, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-055"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=fe6c6fc4-16db-4bea-89fa-6ea1de1e16c5", description: null, special: null, status: "closed" },
  { id: "ses-d4-s1-t4", title: "AI for Product Marketers: What Actually Changes in the Work", type: "Talk", trackNumber: 4, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-049"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=4289e985-f21c-4aaf-b70e-16e58f15e5d5", description: null, special: null, status: "closed" },
  { id: "ses-d4-s1-t5", title: "AI automation with n8n: Build smarter, faster workflows", type: "Talk", trackNumber: 5, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-050"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=81619867-34e0-4f4c-b3d2-caa68a62474b", description: null, special: null, status: "closed" },
  { id: "ses-d4-s2-t1", title: "The Human Edge", type: "Talk", trackNumber: 1, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-068"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=d5ab265f-6114-49bb-a1e0-f118b3f45072", description: null, special: null, status: "closed" },
  { id: "ses-d4-s2-t2", title: "Beyond the Script: How AI Is Reshaping Gaming", type: "Talk", trackNumber: 2, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-074"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=eb0c5a4f-277e-4799-b789-740f342c8022", description: null, special: null, status: "closed" },
  { id: "ses-d4-s2-t3", title: "How the best founders use AI", type: "Talk", trackNumber: 3, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-053"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=f201aa7a-c9b0-4bad-8636-2f59aba1667d", description: null, special: null, status: "closed" },
  { id: "ses-d4-s2-t4", title: "AI in Strategy & Consulting **Not Final", type: "Talk", trackNumber: 4, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-096"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d4-s2-t5", title: "Spatial Intelligence", type: "Talk", trackNumber: 5, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-084"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=6a78dbfd-e838-4a0c-ab2f-5190944e759c", description: null, special: null, status: "closed" },
  { id: "ses-d4-s3-t1", title: "The Science of Smarter AI-Assisted Learning", type: "Talk", trackNumber: 1, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-073"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=bda232e6-35fd-45f4-b965-2cb45da77eb5", description: null, special: null, status: "closed" },
  { id: "ses-d4-s3-t2", title: "How AI is changing the creative role", type: "Talk", trackNumber: 2, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-048"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=9c1fafc7-f8fa-4ea0-9dc7-2960f6ae7636", description: null, special: null, status: "closed" },
  { id: "ses-d4-s3-t3", title: "Open Innovation in the Age of AI", type: "Talk", trackNumber: 3, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-078"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=f5888ba0-6b36-4f91-a0ce-8969516f2d2e", description: null, special: null, status: "closed" },
  { id: "ses-d4-s3-t4", title: "AI Employees in Action", type: "Talk", trackNumber: 4, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-047"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=03409e11-dba1-4493-bc52-177ff1ba1fda", description: null, special: null, status: "closed" },
  { id: "ses-d4-s3-t5", title: "Software Architecture After Cheap Code", type: "Talk", trackNumber: 5, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-065"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=faf2db1b-0c17-4f7a-b1ef-3c27075c2b00", description: null, special: null, status: "closed" },
  { id: "ses-d4-spotlight", title: "Panel for Ameer", type: "Panel Discussion", trackNumber: null, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d4-networking", title: "Tuesday Speed Networking", type: "Speed Networking", trackNumber: null, day: 4, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=71372a5a-4fdb-4c4f-b2a6-cfdcb996b52b", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 5
  // ======================================
  { id: "ses-d5-s1-t1", title: "Learning deeply, building our own technology", type: "Talk", trackNumber: 1, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-064"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=6531d0aa-520a-4db1-87ce-629842feed87", description: null, special: null, status: "closed" },
  { id: "ses-d5-s1-t2", title: "Create your first AI video", type: "Talk", trackNumber: 2, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-041"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=71fe14d7-67cc-41b4-b5a9-e615ae2c9b4b", description: null, special: null, status: "closed" },
  { id: "ses-d5-s1-t3", title: "Democratizing Assessment Centres: AI-Driven Hiring for High-Growth Startups", type: "Talk", trackNumber: 3, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-054"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=013a0cd3-b2ae-44d6-afa5-3afcf95ab099", description: null, special: null, status: "closed" },
  { id: "ses-d5-s1-t4", title: "SEO Before vs. After AI: What Changed and What Still Works", type: "Talk", trackNumber: 4, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-042"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=584f27af-f18b-4e7d-8a83-29f7bec4121a", description: null, special: null, status: "closed" },
  { id: "ses-d5-s1-t5", title: "RTG Masterclass (3 hours)", type: "Talk", trackNumber: 5, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-093"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=e0cd70bd-ffbf-4ca5-a31f-730245af1e78", description: null, special: null, status: "closed" },
  { id: "ses-d5-s2-t2", title: "Create Complete AI Videos: Your Face, Voice, Visuals & Editing", type: "Workshop", trackNumber: 2, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-037"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=f7a59dba-c7c5-4895-97d8-b8a467eae058", description: null, special: null, status: "closed" },
  { id: "ses-d5-s2-t3", title: "AI in Startups & Entrepreneurship", type: "Talk", trackNumber: 3, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-063"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=55ed250b-e065-43ba-9435-c0e52c18eda8", description: null, special: null, status: "closed" },
  { id: "ses-d5-s2-t4", title: "Beyond the Benchmark: Evaluating AI in Healthcare and Beyond", type: "Talk", trackNumber: 4, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-058"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=a123613c-2eb2-4ad6-b8b3-4213e8657137", description: null, special: null, status: "closed" },
  { id: "ses-d5-s3-t2", title: "Digital Twins for Education: Turn Expertise into Scalable Content", type: "Workshop", trackNumber: 2, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-035"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=80cfadbf-f094-4997-a3a4-c0906f0c37b9", description: null, special: null, status: "closed" },
  { id: "ses-d5-s3-t3", title: "Invisible to AI: Visibility Literacy for Early-Stage Startups", type: "Fireside Chat", trackNumber: 3, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-046"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=16136807-d1fe-4e48-8c41-f7529808951a", description: null, special: null, status: "closed" },
  { id: "ses-d5-s3-t4", title: "B2B Growth: From Scattered Prospects to Winning Meetings", type: "Panel Discussion", trackNumber: 4, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-012","spk-075","spk-098"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=9a25d44d-4427-4f03-9db7-1d4a869b469a", description: null, special: null, status: "closed" },
  { id: "ses-d5-spotlight", title: null, type: "Panel Discussion", trackNumber: null, day: 5, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d5-networking", title: "Wednesday Speed Networking", type: "Speed Networking", trackNumber: null, day: 5, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=77bf7ef5-83e8-44eb-9f23-4211e5af7e8f", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 6
  // ======================================
  { id: "ses-d6-s1-t1", title: "TBD", type: "Talk", trackNumber: 1, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-095"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d6-s1-t2", title: "From Prompt to Screen: AI Filmmaking & Creative Direction", type: "Workshop", trackNumber: 2, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-069"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=5c7d5cbc-3fad-4ac9-9572-ed4fecc18d07", description: null, special: null, status: "closed" },
  { id: "ses-d6-s1-t3", title: "Survival Challenge: 60 Years of AI in 60 Minutes", type: "Talk", trackNumber: 3, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-079"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=c1a68dd5-575e-482b-82ca-4fd9ac1bfd61", description: null, special: null, status: "closed" },
  { id: "ses-d6-s1-t4", title: "Beyond Copilots: Governed Agentic AI for Enterprise Decisions", type: "Talk", trackNumber: 4, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-008"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=348e4af2-d0cf-40fa-b46c-23d2fca71cf4", description: null, special: null, status: "closed" },
  { id: "ses-d6-s1-t5", title: "Software Development in AI era", type: "Fireside Chat", trackNumber: 5, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-032","spk-080"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=179f891c-32c2-4ed0-b975-2587d5941b4f", description: null, special: null, status: "closed" },
  { id: "ses-d6-s2-t1", title: "Building Your Personal Brand in the Age of AI", type: "Talk", trackNumber: 1, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-039"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=eb2f2f1e-2218-40b8-96a7-90f8b7bae809", description: null, special: null, status: "closed" },
  { id: "ses-d6-s2-t2", title: "Design with, and for AI", type: "Talk", trackNumber: 2, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-052"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=103c4376-8cd1-4919-b28d-ff4f904385ba", description: null, special: null, status: "closed" },
  { id: "ses-d6-s2-t3", title: "3 Skills needed to build your Startup or Side Business- AI is one of them", type: "Talk", trackNumber: 3, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-038"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d6-s2-t4", title: "Transformation-Led Growth Framework for Companies", type: "Talk", trackNumber: 4, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-020"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=adffaa0b-0485-48f8-97b8-0d5ae198fc39", description: null, special: null, status: "closed" },
  { id: "ses-d6-s2-t5", title: "AI Use Cases for Business", type: "Talk", trackNumber: 5, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-067"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=b9c5c77e-fb11-45a2-b37a-6a85bfef3f0a", description: null, special: null, status: "closed" },
  { id: "ses-d6-s3-t1", title: "AI in Research", type: "Talk", trackNumber: 1, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-076"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d6-s3-t2", title: null, type: "Talk", trackNumber: 2, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-044"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d6-s3-t3", title: "WUZZUF App: A Real-World Case Study in AI-Driven Development", type: "Panel Discussion", trackNumber: 3, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-081","spk-082","spk-083"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=f4bc9a45-a181-41a2-b9be-f9d39113f070", description: null, special: null, status: "closed" },
  { id: "ses-d6-s3-t4", title: "The proven process to enhance your marketing decision", type: "Talk", trackNumber: 4, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-029"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=afa48496-e04b-494b-a2a6-daa68a772699", description: null, special: null, status: "closed" },
  { id: "ses-d6-s3-t5", title: "AI and the Big Infrastructure Shift", type: "Talk", trackNumber: 5, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-060"], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=674f213f-653a-4612-b0e8-3d0e7f6c00a4", description: null, special: null, status: "closed" },
  { id: "ses-d6-spotlight", title: "Women in AI:  Her Lens, Our Future", type: "Panel Discussion", trackNumber: null, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-014","spk-091","spk-078"], bmUrl: null, description: null, special: "spotlight", status: "in-progress" },
  { id: "ses-d6-networking", title: "Thursday Speed Networking", type: "Speed Networking", trackNumber: null, day: 6, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=7fa42859-8f64-4c57-97c0-fb6d016a2942", description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 7
  // ======================================
  { id: "ses-d7-networking", title: "Speed Networking Day", type: "Speed Networking", trackNumber: null, day: 7, slot: 1, timeSlot: null, durationMinutes: null, speakerIds: [], bmUrl: "https://brainsmingle.com/programs/brainsmingle-ai-summit-2026?session=645cdbd1-4438-41ad-882e-0c84164da178", description: null, special: "networking", status: "closed" }

];

function getSessionsByDay(day) {
  return SIGNAL_AGENDA.filter(s => s.day === day);
}

function getSessionsByTrack(trackNumber) {
  return SIGNAL_AGENDA.filter(s => s.trackNumber === trackNumber);
}

function getSessionByCell(day, trackNumber, slot) {
  return SIGNAL_AGENDA.find(
    s => s.day === day && s.trackNumber === trackNumber && s.slot === slot
  ) || null;
}

/* The two summit-wide slots each evening. Both carry trackNumber null. */
function getSpotlight(day) {
  return SIGNAL_AGENDA.find(
    s => s.day === day && s.special === "spotlight" && s.trackNumber === null
  ) || null;
}

function getNetworking(day) {
  return SIGNAL_AGENDA.find(
    s => s.day === day && s.special === "networking" && s.trackNumber === null
  ) || null;
}

/* True when this session can be signed up for right now. */
function isSignupOpen(sessionId) {
  const s = SIGNAL_AGENDA.find(x => x.id === sessionId);
  return !!(s && s.bmUrl);
}

/* The Sign up button calls this. A session with a link opens it in
   a new tab; one without shows the pending message instead. */
function openSessionSignup(sessionId) {
  const s = SIGNAL_AGENDA.find(x => x.id === sessionId);
  if (s && s.bmUrl) {
    window.open(s.bmUrl, "_blank", "noopener");
    return true;
  }
  if (typeof showSignupPending === "function") {
    showSignupPending(s || null);
  } else {
    alert(SIGNUP_PENDING_MESSAGE);
  }
  return false;
}
