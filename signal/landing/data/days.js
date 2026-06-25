/**
 * days.js — Signal: AI
 * Single source of truth for all 7 event days.
 * Referenced by: agenda.js, render.js, agenda.html
 *
 * day values: 1–7 (never 0)
 *   day 1 = Opening Day    (Sat 4 Jul)
 *   day 2–6 = Track Days   (Sun 5 – Thu 9 Jul)
 *   day 7 = Speed Networking (Fri 10 Jul)
 *
 * Access: SIGNAL_DAYS (array)
 *         SIGNAL_DAYS_MAP (object keyed by day number — for fast lookup)
 */

const SIGNAL_DAYS = [
  {
    day           : 1,
    label         : "Day 1",
    displayLabel  : "Opening Day",
    tabLabel      : "Day 1",
    tabSublabel   : "Sat 4 Jul · Opening",
    date          : "Saturday, 4 July 2026",
    dateShort     : "Sat 4 Jul",
    type          : "opening",               // "opening" | "tracks" | "tracks+activation" | "networking"
    hasTracks     : false,
    special       : null,                    // null | "launchpad" | "talent" | "networking"
    description   : "A high-impact opening day featuring curated panels across AI's most important domains. This is where the week begins, bringing together leading voices from across all five tracks in a focused, non-parallel format.",
    timeRange     : "Full Day",
    domId         : "day1"
  },
  {
    day           : 2,
    label         : "Day 2",
    displayLabel  : "Day 2",
    tabLabel      : "Day 2",
    tabSublabel   : "Sun 5 Jul",
    date          : "Sunday, 5 July 2026",
    dateShort     : "Sun 5 Jul",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 10:00 PM",
    timeRange     : "6:00 – 10:00 PM",
    domId         : "day2"
  },
  {
    day           : 3,
    label         : "Day 3",
    displayLabel  : "Day 3",
    tabLabel      : "Day 3",
    tabSublabel   : "Mon 6 Jul · Launchpad",
    date          : "Monday, 6 July 2026",
    dateShort     : "Mon 6 Jul",
    type          : "tracks+activation",
    hasTracks     : true,
    special       : "launchpad",
    description   : "Three session slots across all tracks, closing with Signal Launchpad — the startup pitch event of the week.",
    timeRange     : "6:00 – 10:00 PM",
    domId         : "day3"
  },
  {
    day           : 4,
    label         : "Day 4",
    displayLabel  : "Day 4",
    tabLabel      : "Day 4",
    tabSublabel   : "Tue 7 Jul",
    date          : "Tuesday, 7 July 2026",
    dateShort     : "Tue 7 Jul",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 10:00 PM",
    timeRange     : "6:00 – 10:00 PM",
    domId         : "day4"
  },
  {
    day           : 5,
    label         : "Day 5",
    displayLabel  : "Day 5",
    tabLabel      : "Day 5",
    tabSublabel   : "Wed 8 Jul · Talent",
    date          : "Wednesday, 8 July 2026",
    dateShort     : "Wed 8 Jul",
    type          : "tracks+activation",
    hasTracks     : true,
    special       : "talent",
    description   : "Three session slots across all tracks, closing with Signal Talent — the professional hiring activation.",
    timeRange     : "6:00 – 10:00 PM",
    domId         : "day5"
  },
  {
    day           : 6,
    label         : "Day 6",
    displayLabel  : "Day 6",
    tabLabel      : "Day 6",
    tabSublabel   : "Thu 9 Jul",
    date          : "Thursday, 9 July 2026",
    dateShort     : "Thu 9 Jul",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 10:00 PM",
    timeRange     : "6:00 – 10:00 PM",
    domId         : "day6"
  },
  {
    day           : 7,
    label         : "Day 7",
    displayLabel  : "Speed Networking Day",
    tabLabel      : "Day 7",
    tabSublabel   : "Fri 10 Jul · Networking",
    date          : "Friday, 10 July 2026",
    dateShort     : "Fri 10 Jul",
    type          : "networking",
    hasTracks     : false,
    special       : "networking",
    description   : "A full-day global networking experience connecting participants across all tracks. Designed to transform a week of live sessions and panel discussions into real professional relationships and opportunities.",
    timeRange     : "Full Day",
    domId         : "day7"
  }
];


/**
 * SIGNAL_DAYS_MAP
 * Fast lookup by day number.
 *
 * Usage:
 *   const day = SIGNAL_DAYS_MAP[3];
 *   day.date          // "Monday, 6 July 2026"
 *   day.special       // "launchpad"
 *   day.hasTracks     // true
 */
const SIGNAL_DAYS_MAP = SIGNAL_DAYS.reduce((map, day) => {
  map[day.day] = day;
  return map;
}, {});


/**
 * SIGNAL_TIME_SLOTS
 * Standard time slots for track days.
 * Activation days (day 3, day 5) use slots 1–3 only; slot 4 is replaced by the special event.
 */
const SIGNAL_TIME_SLOTS = [
  { slot: 1, time: "18:00", display: "6:00 PM" },
  { slot: 2, time: "19:00", display: "7:00 PM" },
  { slot: 3, time: "20:00", display: "8:00 PM" },
  { slot: 4, time: "21:00", display: "9:00 PM" }  // replaced by activation on days 3 & 5
];
