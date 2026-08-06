/**
 * agenda.js — Signal: AI
 * GENERATED FILE. Do not edit by hand.
 * Source: the Sessions tab of the CRM sheet.
 * Generated 2026-08-06 18:53 · 4 sessions.
 *
 * trackNumber: 1 L&D · 2 Creative · 3 Startups · 4 Business · 5 Tech
 * trackNumber null = Opening Day panels, activations, Speed Networking.
 * title is null until the session status is Closed.
 */

const SIGNAL_AGENDA = [

  // ======================================
  // DAY 2
  // ======================================
  { id: "ses-d2-s1-t3", title: "Beyond the AI Hype: Where Does AI Really Create Value in Health?", type: "panel", trackNumber: 3, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-004","spk-006"], description: null, special: null },
  { id: "ses-d2-s2-t3", title: "MENA SaaS 7-Stage Growth Roadmap", type: "talk", trackNumber: 3, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-009"], description: null, special: null },
  { id: "ses-d2-s3-t5", title: "Building Deep Seearch Agent from Scratch", type: "talk", trackNumber: 5, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-005"], description: null, special: null },

  // ======================================
  // DAY 3
  // ======================================
  { id: "ses-d3-s2-t3", title: "AI in Marketing", type: "talk", trackNumber: 3, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-007"], description: null, special: null }

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
