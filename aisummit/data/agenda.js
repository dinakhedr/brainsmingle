/**
 * agenda.js — Signal: AI
 * GENERATED FILE. Do not edit by hand.
 * Source: the Sessions tab, Publish = With Session or Yes.
 * "Yes" publishes the session but withholds the sign-up link.
 * Generated 2026-08-27 16:24 · 33 sessions, 0 with a sign-up link.
 *
 * trackNumber: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * trackNumber null = Opening Day panels, Day Spotlight, Speed Networking.
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
  { id: "ses-d1-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 1, slot: 6, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 2
  // ======================================
  { id: "ses-d2-s1-t1", title: "If You Can't Delegate to AI, You Can't Delegate to People", type: "talk", trackNumber: 1, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-018"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d2-s1-t3", title: "Beyond the AI Hype: Where Does AI Really Create Value in Health?", type: "panel", trackNumber: 3, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-004","spk-006"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t4", title: "More and better conversations with AI", type: "talk", trackNumber: 4, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-023"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s1-t5", title: "DevOps in the AI Era", type: "panel", trackNumber: 5, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-019","spk-033","spk-034","spk-036"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t1", title: "AI in Education: From Hype to Practical Use", type: "talk", trackNumber: 1, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-034"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t3", title: "MENA SaaS 7-Stage Growth Roadmap", type: "talk", trackNumber: 3, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-009"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t4", title: "Build or Buy Odoo use Case integrated with AI", type: "talk", trackNumber: 4, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-020"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s2-t5", title: "Building Through the Bubble: Telecom's Lessons for the AI Buildout", type: "talk", trackNumber: 5, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-011"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t1", title: null, type: "talk", trackNumber: 1, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t3", title: "How to build your GenAI application", type: "talk", trackNumber: 3, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-021"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t4", title: "Designing Trust: What AI-Ready UX Looks Like When It Ships", type: "panel", trackNumber: 4, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-028","spk-030"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-s3-t5", title: "Building Deep Search Agent from Scratch", type: "talk", trackNumber: 5, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-005"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d2-spotlight", title: "⁠AI Across Continents: From Global Ambition to Local Impact", type: "talk", trackNumber: null, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-014"], bmUrl: null, description: null, special: "spotlight", status: "in-progress" },
  { id: "ses-d2-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 2, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 3
  // ======================================
  { id: "ses-d3-s1-t3", title: "From Idea to AI Startup: Building an MVP in Days, Not Months", type: "talk", trackNumber: 3, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-022"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d3-s1-t4", title: null, type: "talk", trackNumber: 4, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-017"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-s2-t1", title: "Redesigning L&D Offer for an AI-Native Workforce", type: "talk", trackNumber: 1, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-027"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-s2-t2", title: "Creative & AI:  [Vs. or Ft.]?", type: "panel", trackNumber: 2, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-016"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-s2-t4", title: "AI in Marketing", type: "talk", trackNumber: 4, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-007"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d3-s3-t1", title: "How to be the most valuable leader in AI era", type: "panel", trackNumber: 1, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-020"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d3-spotlight", title: null, type: "talk", trackNumber: null, day: 3, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d3-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 3, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 4
  // ======================================
  { id: "ses-d4-spotlight", title: null, type: "talk", trackNumber: null, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d4-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 4, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 5
  // ======================================
  { id: "ses-d5-s3-t2", title: "Build Your Digital Twin: AI Content for Trainers & Experts", type: "talk", trackNumber: 2, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-035"], bmUrl: null, description: null, special: null, status: "closed" },
  { id: "ses-d5-s3-t4", title: null, type: "talk", trackNumber: 4, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-012"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d5-spotlight", title: null, type: "talk", trackNumber: null, day: 5, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d5-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 5, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 6
  // ======================================
  { id: "ses-d6-s1-t4", title: "Beyond Copilots: Governed Agentic AI for Enterprise Decisions", type: "panel", trackNumber: 4, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-008"], bmUrl: null, description: null, special: null, status: "in-progress" },
  { id: "ses-d6-spotlight", title: null, type: "talk", trackNumber: null, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "spotlight", status: "closed" },
  { id: "ses-d6-networking", title: "Daily Speed Networking", type: "networking", trackNumber: null, day: 6, slot: 5, timeSlot: "22:00", durationMinutes: 60, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" },

  // ======================================
  // DAY 7
  // ======================================
  { id: "ses-d7-networking", title: "Speed Networking Day", type: "networking", trackNumber: null, day: 7, slot: 1, timeSlot: null, durationMinutes: null, speakerIds: [], bmUrl: null, description: null, special: "networking", status: "closed" }

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
