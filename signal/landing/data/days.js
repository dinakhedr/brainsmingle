/**
 * days.js — AI Summit 2026
 * Single source of truth for all 7 event days.
 * Referenced by: agenda.js, render.js, agenda.html
 *
 * day values: 1–7 (never 0)
 *   day 1 = Opening Day    (Sat 10 Oct)
 *   day 2–6 = Track Days   (Sun 11 – Thu 15 Oct)
 *   day 7 = Speed Networking (Fri 16 Oct)
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
    tabSublabel   : "Sat 10 Oct · Opening",
    date          : "Saturday, 10 October 2026",
    dateShort     : "Sat 10 Oct",
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
    tabSublabel   : "Sun 11 Oct",
    date          : "Sunday, 11 October 2026",
    dateShort     : "Sun 11 Oct",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 11:00 PM",
    timeRange     : "6:00 – 11:00 PM",
    domId         : "day2"
  },
  {
    day           : 3,
    label         : "Day 3",
    displayLabel  : "Day 3",
    tabLabel      : "Day 3",
    tabSublabel   : "Mon 12 Oct · Launchpad",
    date          : "Monday, 12 October 2026",
    dateShort     : "Mon 12 Oct",
    type          : "tracks+activation",
    hasTracks     : true,
    special       : "launchpad",
    description   : "Three session slots across all tracks, closing with AI Summit Launchpad, the startup pitch event of the week.",
    timeRange     : "6:00 – 11:00 PM",
    domId         : "day3"
  },
  {
    day           : 4,
    label         : "Day 4",
    displayLabel  : "Day 4",
    tabLabel      : "Day 4",
    tabSublabel   : "Tue 13 Oct",
    date          : "Tuesday, 13 October 2026",
    dateShort     : "Tue 13 Oct",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 11:00 PM",
    timeRange     : "6:00 – 11:00 PM",
    domId         : "day4"
  },
  {
    day           : 5,
    label         : "Day 5",
    displayLabel  : "Day 5",
    tabLabel      : "Day 5",
    tabSublabel   : "Wed 14 Oct · Talent",
    date          : "Wednesday, 14 October 2026",
    dateShort     : "Wed 14 Oct",
    type          : "tracks+activation",
    hasTracks     : true,
    special       : "talent",
    description   : "Three session slots across all tracks, closing with AI Summit Talent, the professional hiring activation.",
    timeRange     : "6:00 – 11:00 PM",
    domId         : "day5"
  },
  {
    day           : 6,
    label         : "Day 6",
    displayLabel  : "Day 6",
    tabLabel      : "Day 6",
    tabSublabel   : "Thu 15 Oct",
    date          : "Thursday, 15 October 2026",
    dateShort     : "Thu 15 Oct",
    type          : "tracks",
    hasTracks     : true,
    special       : null,
    description   : "Five parallel AI tracks running simultaneously · 6:00 – 11:00 PM",
    timeRange     : "6:00 – 11:00 PM",
    domId         : "day6"
  },
  {
    day           : 7,
    label         : "Day 7",
    displayLabel  : "Speed Networking Day",
    tabLabel      : "Day 7",
    tabSublabel   : "Fri 16 Oct · Networking",
    date          : "Friday, 16 October 2026",
    dateShort     : "Fri 16 Oct",
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
 *   day.date          // "Monday, 6 October 2026"
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
