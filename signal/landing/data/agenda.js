/**
 * agenda.js — Signal: AI
 * All sessions across all 7 days.
 * References: tracks.js (trackNumber → resolved to slug via SIGNAL_TRACKS_BY_NUMBER)
 *             days.js (day 1–7)
 *             speakers.js (speakerIds)
 *
 * trackNumber: 1=L&D  2=Creative  3=Startups  4=Business  5=Tech
 * trackNumber: null = no track (Opening Day panels, activations, Speed Networking)
 *
 * ID pattern: ses-d{day}-s{slot}-t{trackNumber}
 *             ses-d{day}-p{panel}     (Opening Day panels)
 *             ses-d{day}-{special}    (launchpad / talent / networking)
 *
 * Access: SIGNAL_AGENDA
 *         getSessionsByDay(day)
 *         getSessionsByTrack(trackNumber)
 *         getSessionByCell(day, trackNumber, slot)
 *         getSpecialSession(day)
 */

const SIGNAL_AGENDA = [

  // ══════════════════════════════════════
  // DAY 1 — Opening Day · Sat 4 Jul
  // Full-day panels — no tracks
  // ══════════════════════════════════════

  { id: "ses-d1-p1", title: "Insert session name here",              type: "panel",   trackNumber: null, day: 1, slot: 1, timeSlot: "17:00", durationMinutes: 60, speakerIds: ["spk-001","spk-002","spk-003"], description: "Opening panel — a candid look at where AI stands in 2026 across every industry.", special: null },
  { id: "ses-d1-p2", title: "Insert session name here", type: "panel",   trackNumber: null, day: 1, slot: 2, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-002","spk-015"],           description: "Founders who have built and scaled AI-native companies share what the playbooks don't tell you.", special: null },
  { id: "ses-d1-p3", title: "Insert session name here",  type: "panel",   trackNumber: null, day: 1, slot: 3, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-006","spk-007"],           description: "Leaders from enterprise and policy debate what AI really means for employment and human capability.", special: null },
  { id: "ses-d1-p4", title: "Insert session name here",         type: "panel",   trackNumber: null, day: 1, slot: 4, timeSlot: "20:00", durationMinutes: 60, speakerIds: ["spk-001","spk-012"],           description: "Practitioners and researchers on the real-world challenges of deploying AI in healthcare.", special: null },
  { id: "ses-d1-p5", title: "Insert session name here",               type: "panel",   trackNumber: null, day: 1, slot: 5, timeSlot: "21:00", durationMinutes: 60, speakerIds: ["spk-005","spk-010","spk-014"], description: "Creators, directors, and AI artists on what human creativity looks like in the generative era.", special: null },


  // ══════════════════════════════════════
  // DAY 2 — Sun 5 Jul · Track Sessions
  // 5 tracks × 4 slots = 20 sessions
  // ══════════════════════════════════════

  // slot 1 — 6:00 PM
  { id: "ses-d2-s1-t1", title: "Insert session name here",          type: "talk", trackNumber: 1, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s1-t2", title: "Insert session name here",                  type: "talk", trackNumber: 2, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-005"], description: null, special: null },
  { id: "ses-d2-s1-t3", title: "Insert session name here",                        type: "talk", trackNumber: 3, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-002"], description: null, special: null },
  { id: "ses-d2-s1-t4", title: "Insert session name here",     type: "talk", trackNumber: 4, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s1-t5", title: "Insert session name here",      type: "talk", trackNumber: 5, day: 2, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 2 — 7:00 PM
  { id: "ses-d2-s2-t1", title: "Insert session name here",     type: "talk", trackNumber: 1, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s2-t2", title: "Insert session name here",                type: "talk", trackNumber: 2, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s2-t3", title: "Insert session name here",                               type: "talk", trackNumber: 3, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-008"], description: null, special: null },
  { id: "ses-d2-s2-t4", title: "Insert session name here",   type: "talk", trackNumber: 4, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s2-t5", title: "Insert session name here",                      type: "talk", trackNumber: 5, day: 2, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 3 — 8:00 PM
  { id: "ses-d2-s3-t1", title: "Insert session name here",                          type: "talk", trackNumber: 1, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s3-t2", title: "Insert session name here",                    type: "talk", trackNumber: 2, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s3-t3", title: "Insert session name here",              type: "talk", trackNumber: 3, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s3-t4", title: "Insert session name here",  type: "talk", trackNumber: 4, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s3-t5", title: "Insert session name here",          type: "talk", trackNumber: 5, day: 2, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 4 — 9:00 PM
  { id: "ses-d2-s4-t1", title: "Insert session name here",          type: "talk", trackNumber: 1, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s4-t2", title: "Insert session name here",    type: "talk", trackNumber: 2, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s4-t3", title: "Insert session name here",       type: "talk", trackNumber: 3, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s4-t4", title: "Insert session name here",                 type: "talk", trackNumber: 4, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d2-s4-t5", title: "Insert session name here",                            type: "talk", trackNumber: 5, day: 2, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },


  // ══════════════════════════════════════
  // DAY 3 — Mon 6 Jul · Tracks + Signal Launchpad
  // 5 tracks × 3 slots = 15 sessions + 1 activation
  // ══════════════════════════════════════

  // slot 1 — 6:00 PM
  { id: "ses-d3-s1-t1", title: "Insert session name here",     type: "talk", trackNumber: 1, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s1-t2", title: "Insert session name here",                   type: "talk", trackNumber: 2, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s1-t3", title: "Insert session name here",   type: "talk", trackNumber: 3, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s1-t4", title: "Insert session name here",    type: "talk", trackNumber: 4, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s1-t5", title: "Insert session name here", type: "talk", trackNumber: 5, day: 3, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 2 — 7:00 PM
  { id: "ses-d3-s2-t1", title: "Insert session name here",              type: "talk", trackNumber: 1, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s2-t2", title: "Insert session name here",          type: "talk", trackNumber: 2, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s2-t3", title: "Insert session name here",        type: "talk", trackNumber: 3, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s2-t4", title: "Insert session name here",                     type: "talk", trackNumber: 4, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s2-t5", title: "Insert session name here",                     type: "talk", trackNumber: 5, day: 3, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 3 — 8:00 PM
  { id: "ses-d3-s3-t1", title: "Insert session name here",            type: "talk", trackNumber: 1, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s3-t2", title: "Insert session name here",                    type: "talk", trackNumber: 2, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s3-t3", title: "Insert session name here",      type: "talk", trackNumber: 3, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s3-t4", title: "Insert session name here",                           type: "talk", trackNumber: 4, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d3-s3-t5", title: "Insert session name here",                 type: "talk", trackNumber: 5, day: 3, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 4 — 9:00 PM — Signal Launchpad
  {
    id              : "ses-d3-launchpad",
    title           : "Signal Launchpad",
    type            : "activation",
    trackNumber     : null,
    day             : 3,
    slot            : 4,
    timeSlot        : "21:00",
    durationMinutes : 60,
    speakerIds      : [],
    description     : "A curated showcase where selected AI startups present their product, vision, and traction to a global audience of professionals, corporates, and media.",
    special         : "launchpad"
  },


  // ══════════════════════════════════════
  // DAY 4 — Tue 7 Jul · Track Sessions
  // 5 tracks × 4 slots = 20 sessions
  // ══════════════════════════════════════

  { id: "ses-d4-s1-t1", title: "Insert session name here",                       type: "talk", trackNumber: 1, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s1-t2", title: "Insert session name here",                type: "talk", trackNumber: 2, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-014"], description: null, special: null },
  { id: "ses-d4-s1-t3", title: "Insert session name here",      type: "talk", trackNumber: 3, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s1-t4", title: "Insert session name here",         type: "talk", trackNumber: 4, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s1-t5", title: "Insert session name here",      type: "talk", trackNumber: 5, day: 4, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d4-s2-t1", title: "Insert session name here",             type: "talk", trackNumber: 1, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s2-t2", title: "Insert session name here",           type: "talk", trackNumber: 2, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s2-t3", title: "Insert session name here",        type: "talk", trackNumber: 3, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: ["spk-008"], description: null, special: null },
  { id: "ses-d4-s2-t4", title: "Insert session name here",   type: "talk", trackNumber: 4, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],   description: null, special: null },
  { id: "ses-d4-s2-t5", title: "Insert session name here",                  type: "talk", trackNumber: 5, day: 4, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d4-s3-t1", title: "Insert session name here",                       type: "talk", trackNumber: 1, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s3-t2", title: "Insert session name here",                           type: "talk", trackNumber: 2, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s3-t3", title: "Insert session name here",                type: "talk", trackNumber: 3, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s3-t4", title: "Insert session name here",                        type: "talk", trackNumber: 4, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s3-t5", title: "Insert session name here",            type: "talk", trackNumber: 5, day: 4, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d4-s4-t1", title: "Insert session name here",           type: "talk", trackNumber: 1, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s4-t2", title: "Insert session name here",     type: "talk", trackNumber: 2, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s4-t3", title: "Insert session name here",         type: "talk", trackNumber: 3, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s4-t4", title: "Insert session name here",             type: "talk", trackNumber: 4, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d4-s4-t5", title: "Insert session name here",     type: "talk", trackNumber: 5, day: 4, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },


  // ══════════════════════════════════════
  // DAY 5 — Wed 8 Jul · Tracks + Signal Talent
  // 5 tracks × 3 slots = 15 sessions + 1 activation
  // ══════════════════════════════════════

  { id: "ses-d5-s1-t1", title: "Insert session name here",                             type: "talk", trackNumber: 1, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s1-t2", title: "Insert session name here",               type: "talk", trackNumber: 2, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s1-t3", title: "Insert session name here",            type: "talk", trackNumber: 3, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-006"], description: null, special: null },
  { id: "ses-d5-s1-t4", title: "Insert session name here",             type: "talk", trackNumber: 4, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-011"], description: null, special: null },
  { id: "ses-d5-s1-t5", title: "Insert session name here",                type: "talk", trackNumber: 5, day: 5, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d5-s2-t1", title: "Insert session name here", type: "talk", trackNumber: 1, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s2-t2", title: "Insert session name here",             type: "talk", trackNumber: 2, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s2-t3", title: "Insert session name here",                 type: "talk", trackNumber: 3, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s2-t4", title: "Insert session name here",                    type: "talk", trackNumber: 4, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s2-t5", title: "Insert session name here",       type: "talk", trackNumber: 5, day: 5, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d5-s3-t1", title: "Insert session name here",             type: "talk", trackNumber: 1, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s3-t2", title: "Insert session name here",                   type: "talk", trackNumber: 2, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s3-t3", title: "Insert session name here",                            type: "talk", trackNumber: 3, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s3-t4", title: "Insert session name here",       type: "talk", trackNumber: 4, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d5-s3-t5", title: "Insert session name here",     type: "talk", trackNumber: 5, day: 5, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  // slot 4 — 9:00 PM — Signal Talent
  {
    id              : "ses-d5-talent",
    title           : "Signal Talent — Professional Interviewing",
    type            : "activation",
    trackNumber     : null,
    day             : 5,
    slot            : 4,
    timeSlot        : "21:00",
    durationMinutes : 60,
    speakerIds      : [],
    description     : "A dedicated recruitment event connecting AI professionals and job seekers with companies actively hiring. Structured presentations from hiring companies followed by open networking.",
    special         : "talent"
  },


  // ══════════════════════════════════════
  // DAY 6 — Thu 9 Jul · Track Sessions
  // 5 tracks × 4 slots = 20 sessions
  // ══════════════════════════════════════

  { id: "ses-d6-s1-t1", title: "Insert session name here",        type: "talk", trackNumber: 1, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s1-t2", title: "Insert session name here",                  type: "talk", trackNumber: 2, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-010"], description: null, special: null },
  { id: "ses-d6-s1-t3", title: "Insert session name here",          type: "talk", trackNumber: 3, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-015"], description: null, special: null },
  { id: "ses-d6-s1-t4", title: "Insert session name here",  type: "talk", trackNumber: 4, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: ["spk-016"], description: null, special: null },
  { id: "ses-d6-s1-t5", title: "Insert session name here",       type: "talk", trackNumber: 5, day: 6, slot: 1, timeSlot: "18:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d6-s2-t1", title: "Insert session name here",         type: "talk", trackNumber: 1, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s2-t2", title: "Insert session name here",       type: "talk", trackNumber: 2, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s2-t3", title: "Insert session name here",        type: "talk", trackNumber: 3, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s2-t4", title: "Insert session name here",       type: "talk", trackNumber: 4, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s2-t5", title: "Insert session name here",        type: "talk", trackNumber: 5, day: 6, slot: 2, timeSlot: "19:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d6-s3-t1", title: "Insert session name here",              type: "talk", trackNumber: 1, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s3-t2", title: "Insert session name here",              type: "talk", trackNumber: 2, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s3-t3", title: "Insert session name here",                     type: "talk", trackNumber: 3, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s3-t4", title: "Insert session name here",   type: "talk", trackNumber: 4, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s3-t5", title: "Insert session name here",           type: "talk", trackNumber: 5, day: 6, slot: 3, timeSlot: "20:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },

  { id: "ses-d6-s4-t1", title: "Insert session name here",            type: "talk", trackNumber: 1, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s4-t2", title: "Insert session name here",               type: "talk", trackNumber: 2, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s4-t3", title: "Insert session name here",                 type: "talk", trackNumber: 3, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s4-t4", title: "Insert session name here",      type: "talk", trackNumber: 4, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },
  { id: "ses-d6-s4-t5", title: "Insert session name here",  type: "talk", trackNumber: 5, day: 6, slot: 4, timeSlot: "21:00", durationMinutes: 60, speakerIds: [],        description: null, special: null },


  // ══════════════════════════════════════
  // DAY 7 — Fri 10 Jul · Speed Networking
  // ══════════════════════════════════════

  {
    id              : "ses-d7-networking",
    title           : "Speed Networking Day",
    type            : "networking",
    trackNumber     : null,
    day             : 7,
    slot            : 1,
    timeSlot        : null,
    durationMinutes : null,
    speakerIds      : [],
    description     : "Structured rounds that connect professionals across all tracks at scale. Powered by BrainsMingle's Speed Networking engine.",
    special         : "networking"
  }

];


// ─────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────

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