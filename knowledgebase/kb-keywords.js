// Article keywords — keyed by article URL (must match kb-data.js urls)
// Used by the search index to match queries beyond article titles.

const KB_KEYWORDS = {

// ── Getting Started ──
"getting-started/manage-your-profile-settings.html": [
  "edit profile", "update profile", "change name", "photo", "avatar",
  "bio", "account settings", "personal info", "display name", "headline",
  "delete account", "deactivate"
],
"getting-started/send-direct-messages.html": [
  "DM", "chat", "inbox", "message", "conversation", "private message",
  "text", "reply", "send message", "notification"
],
"getting-started/understand-roles-and-permissions.html": [
  "roles", "permissions", "admin", "moderator", "expert", "member",
  "access control", "who can", "role", "Suite Admin",
  "privileges", "user role"
],

// ── Communities ──
"communities/create-a-community.html": [
  "new community", "add community", "start community", "group",
  "launch community", "community space"
],
"communities/set-up-your-community.html": [
  "configure community", "community settings", "branding", "channels",
  "community name", "description", "logo", "customize community",
  "delete community", "remove community", "edit community"
],

"communities/manage-community-members.html": [
  "members", "manage members", "add members", "invite members",
  "approve", "reject", "pending", "join request", "ban member",
  "make admin", "make moderator", "assign role", "remove member"
],
"communities/manage-channels-in-community.html": [
  "channel", "channels", "create channel", "add channel", "new channel",
  "general", "announcements", "resources", "announcement only",
  "admin only", "restrict posting", "default channels"
],
"communities/customize-navigation-tabs-in-community.html": [
  "navigation", "nav", "sidebar", "hide tab", "show tab",
  "reorder tabs", "tab order", "visibility", "default landing page",
  "drag", "eye icon", "hidden tab", "customize sidebar"
],

// ── Live Sessions ──
"live-sessions/schedule-a-live-session.html": [
  "create session", "new session", "event", "webinar", "schedule event",
  "date", "time", "calendar", "upcoming session", "plan session",
  "delete session", "cancel session", "remove session"
],
"live-sessions/start-an-instant-drop-in-call.html": [
  "quick call", "instant call", "drop-in", "start call", "go live",
  "ad hoc", "spontaneous", "join call"
],
"live-sessions/use-the-video-call-toolbar.html": [
  "toolbar", "mute", "unmute", "camera", "screen share", "mic",
  "controls", "raise hand", "emoji", "reactions", "chat",
  "record", "recording", "background", "blur", "leave call",
  "end call", "hang up"
],
"live-sessions/set-up-a-recurring-session.html": [
  "recurring", "repeat", "repeating", "weekly", "biweekly",
  "recurring session", "recurring call", "schedule repeat",
  "regular session", "standing meeting", "office hours"
],
"live-sessions/create-breakout-rooms.html": [
    "breakout", "breakout rooms", "small groups", "split participants",
    "group discussion", "manual assignment", "random assignment",
    "room duration", "create rooms", "focused discussion"
],

// ── Speed Networking ──
"speed-networking/create-a-speed-networking-room.html": [
  "networking event", "matchmaking", "rounds", "icebreaker",
  "pairing", "1-on-1", "one on one", "create event",
  "delete networking", "remove networking"
],
"speed-networking/manage-speed-networking-room.html": [
  "edit networking", "networking settings", "round duration",
  "manage event", "participants", "matching", "connections",
  "delete room", "remove room", "cancel event"
],
"speed-networking/set-up-a-recurring-speed-networking-room.html": [
  "recurring", "repeat", "repeating", "weekly", "monthly",
  "recurring networking", "recurring room", "schedule repeat",
  "regular networking", "community mixer"
],
"speed-networking/view-the-post-event-connection-summary.html": [
  "connection summary", "post event", "connections made",
  "follow up", "who I met", "networking results",
  "connection list", "after event", "recap"
],

// ── Consultation Services ──
"consultation/set-up-consultation-services.html": [
  "booking", "availability", "consultation", "expert profile",
  "service", "pricing", "hourly rate", "schedule",
  "create service", "add service", "new service"
],
"consultation/manage-your-profile-and-earnings.html": [
  "earnings", "revenue", "payout", "payments", "income",
  "dashboard", "booking requests", "clients", "withdraw",
  "delete service", "remove service", "edit service"
],

// ── Courses & LMS ──
"courses/create-a-program-with-courses-and-lessons.html": [
  "program", "course", "lesson", "curriculum", "LMS",
  "learning", "module", "training", "content", "upload",
  "create course", "new course", "add lesson",
  "delete course", "remove course", "delete lesson"
],
"courses/set-up-certification.html": [
  "certificate", "certification", "badge", "completion",
  "credential", "award", "graduate", "diploma",
  "delete certificate", "remove certificate"
],
"courses/view-course-analytics.html": [
  "analytics", "course analytics", "enrollment", "completion rate",
  "learner progress", "statistics", "course stats", "insights",
  "course data", "course report"
],

// ── Payments & Monetization ──
"payments/connect-stripe-and-receive-payouts.html": [
  "stripe", "connect stripe", "payout", "bank account",
  "payment setup", "withdraw", "deposit", "verification",
  "payment account", "receive payments"
],
"payments/set-up-paid-membership.html": [
  "paid membership", "subscription", "monthly price", "yearly billing",
  "membership fee", "charge members", "community pricing",
  "monetize community", "recurring billing"
],
"payments/set-up-paid-sessions-and-rooms.html": [
  "paid session", "paid event", "ticket price", "paid access",
  "charge attendees", "event pricing", "paid room",
  "platform fee", "10% fee", "monetize event"
],
"payments/track-your-earnings.html": [
  "earnings", "revenue", "total earnings", "available payout",
  "pending payout", "completed payouts", "income",
  "earnings dashboard", "my earnings", "payment history"
],

// ── Forms & Registration ──
"forms/create-a-registration-form.html": [
  "registration form", "form", "sign up form", "attendee form",
  "custom question", "form builder", "quick add", "form fields",
  "require form", "registration", "RSVP"
],
"forms/view-and-export-form-responses.html": [
  "form responses", "view responses", "export responses",
  "download responses", "attendee data", "registration data",
  "form submissions", "form answers"
]

};
