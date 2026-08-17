/**
 * agenda.js — Signal: AI
 * GENERATED FILE. Do not edit by hand.
 * Source: the Sessions tab, Publish = With Session or Yes.
 * "Yes" publishes the session but withholds the sign-up link.
 * Generated 2026-08-17 15:16 · 7 sessions, 0 with a sign-up link.
 *
 * trackNumber: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * trackNumber null = Opening Day panels, activations, Speed Networking.
 * Slots with no Closed session are absent. The grid renders those
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
  // DAY 2
  // ======================================
  { id: "ses-d2-s1-t3", title: "Beyond the AI Hype: Where Does AI Really Create Value in Health?", type: "panel", trackNumber: 3, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-004","spk-006"], bmUrl: null, description: null, special: null },
  { id: "ses-d2-s1-t4", title: "More and better conversations with AI", type: "talk", trackNumber: 4, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-023"], bmUrl: null, description: null, special: null },
  { id: "ses-d2-s2-t3", title: "MENA SaaS 7-Stage Growth Roadmap", type: "talk", trackNumber: 3, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-009"], bmUrl: null, description: null, special: null },
  { id: "ses-d2-s2-t4", title: "Build or Buy Odoo use Case integrated with AI", type: "talk", trackNumber: 4, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-020"], bmUrl: null, description: null, special: null },
  { id: "ses-d2-s3-t5", title: "Building Deep Seearch Agent from Scratch", type: "talk", trackNumber: 5, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-005"], bmUrl: null, description: null, special: null },

  // ======================================
  // DAY 3
  // ======================================
  { id: "ses-d3-s1-t3", title: "From Idea to AI Startup: Building an MVP in Days, Not Months", type: "talk", trackNumber: 3, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-022"], bmUrl: null, description: null, special: null },
  { id: "ses-d3-s2-t4", title: "AI in Marketing", type: "talk", trackNumber: 4, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-007"], bmUrl: null, description: null, special: null }

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

function getSpecialSession(day) {
  return SIGNAL_AGENDA.find(
    s => s.day === day && s.special !== null && s.trackNumber === null
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
