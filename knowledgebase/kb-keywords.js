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
"getting-started/view-your-profile.html": [
    "view profile", "my profile", "profile page", "about", "bio",
    "followers", "following", "rooms you manage", "rooms you joined",
    "professional network", "feedback", "services", "consultation",
    "invite network", "public profile", "copy profile link",
    "coupons", "earnings", "profile tabs"
],

// ── Communities ──
"communities/create-a-community.html": [
  "new community", "add community", "start community", "group",
  "launch community", "community space"
],
"communities/manage-a-community.html": [
  "configure community", "manage community", "community settings", "branding", "channels",
  "community name", "description", "logo", "customize community",
  "delete community", "remove community", "edit community"
],
"communities/manage-community-members.html": [
  "members", "manage members", "add members", "invite members",
  "approve", "reject", "pending", "join request", "ban member",
  "make admin", "make moderator", "assign role", "remove member"
],
"communities/manage-community-channels.html": [
  "channel", "channels", "create channel", "add channel", "new channel",
  "general", "announcements", "resources", "announcement only",
  "admin only", "restrict posting", "default channels"
],
"communities/manage-community-navigation.html": [
  "navigation", "nav", "sidebar", "hide tab", "show tab",
  "reorder tabs", "tab order", "visibility", "default landing page",
  "drag", "eye icon", "hidden tab", "customize sidebar"
],
"communities/manage-community-rooms.html": [
  "community rooms", "rooms tab", "upcoming sessions", "past sessions",
  "create room", "mingling room", "video call", "event type",
  "view session", "detach from space", "attending", "attended",
  "schedule room", "community events", "networking room",
  "no upcoming sessions", "countdown"
],

// ── Live Sessions ──
"live-sessions/schedule-a-live-session.html": [
  "create session", "new session", "event", "webinar", "schedule event",
  "date", "time", "calendar", "upcoming session", "plan session",
  "delete session", "cancel session", "remove session",
  "video room", "video call", "create room"
],
"live-sessions/start-an-instant-drop-in-call.html": [
  "quick call", "instant call", "drop-in", "start call", "go live",
  "ad hoc", "spontaneous", "join call",
  "share link", "invite", "attendance card", "room page"
],
"live-sessions/manage-a-live-room.html": [
    "join session", "rooms you manage", "rooms you joined",
    "room detail", "room page", "start recording", "record call",
    "end session", "leave session", "end for everyone",
    "post-call feedback", "star rating", "feedback dialog",
    "access recordings", "recordings tab", "rewatch",
    "call toolbar", "video controls", "in-call"
],
"live-sessions/create-polls-in-live-sessions.html": [
    "poll", "polls", "create poll", "launch poll", "survey", "vote",
    "multiple choice", "multi-select", "anonymous poll", "timed poll",
    "poll results", "poll timer", "audience poll", "engagement",
    "ready list", "save poll", "close poll", "end poll",
    "poll options", "poll question", "live poll"
],
"live-sessions/use-the-video-call-toolbar.html": [
  "toolbar", "poll", "polls", "create poll", "mute", "unmute", "camera", "screen share", "mic",
  "controls", "raise hand", "emoji", "reactions", "chat",
  "record", "recording", "background", "blur", "leave call",
  "end call", "hang up", "annotations", "annotate"
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
"live-sessions/host-a-webinar.html": [
    "webinar", "webinar mode", "host webinar", "livestream", "live stream",
    "stage", "audience", "broadcast", "start webinar", "webinar control",
    "250 attendees", "large event", "raise hand", "raised hands",
    "extend session", "extend meeting", "end webinar", "leave meeting",
    "enable chat", "disable chat", "participant permissions",
    "annotations", "annotate", "draw on screen",
    "feedback", "post-call feedback", "star rating"
],
"live-sessions/manage-recordings.html": [
    "recording", "recordings", "manage recording", "view recording",
    "download recording", "share recording", "delete recording",
    "recording visibility", "only me", "only members", "public recording",
    "playback", "replay", "rewatch", "video recording",
    "rename recording", "delete recording permanently",
    "record session", "session recording"
],
"live-sessions/delete-a-room-or-recording.html": [
    "delete room", "delete recording", "remove room", "cancel room",
    "delete permanently", "confirm deletion", "irreversible",
    "delete recordings first", "cannot delete while live",
    "end session", "end for everyone", "three-dot menu",
    "room actions", "edit room"
],

// ── Speed Networking ──
"speed-networking/create-a-speed-networking-room.html": [
  "networking event", "matchmaking", "rounds", "icebreaker",
  "pairing", "1-on-1", "one on one", "create event",
  "delete networking", "remove networking"
],
"speed-networking/manage-a-speed-networking-room.html": [
  "edit networking", "networking settings", "round duration",
  "manage event", "participants", "matching", "connections",
  "delete room", "remove room", "cancel event"
],
"speed-networking/set-up-a-recurring-speed-networking-room.html": [
  "recurring", "repeat", "repeating", "weekly", "monthly",
  "recurring networking", "recurring room", "schedule repeat",
  "regular networking", "community mixer"
],

// ── Consultation Services ──
"consultation/set-up-consultation-services.html": [
  "booking", "availability", "consultation", "expert profile",
  "service", "pricing", "hourly rate", "schedule",
  "create service", "add service", "new service",
  "consultation fee", "weekly availability", "time slots"
],
"consultation/manage-consultation-requests-and-bookings.html": [
  "client requests", "my bookings", "accept request", "decline request",
  "pending", "incoming booking", "booking status", "consultation request",
  "accept consultation", "decline consultation", "manage bookings",
  "sent proposals", "scheduled consultation", "review request",
  "discover consultants", "browse consultants"
],

// ── Courses & LMS ──
"courses/create-programs-courses-and-lessons.html": [
  "program", "course", "lesson", "curriculum", "LMS",
  "learning", "module", "training", "content", "upload",
  "create course", "new course", "add lesson",
  "delete course", "remove course", "delete lesson",
  "video lesson", "text lesson"
],
"courses/set-up-certification.html": [
  "certificate", "certification", "badge", "completion",
  "credential", "award", "graduate", "diploma",
  "delete certificate", "remove certificate",
  "custom certificate", "certificate design", "background image"
],
"courses/view-course-analytics.html": [
  "analytics", "course analytics", "enrollment", "completion rate",
  "learner progress", "statistics", "course stats", "insights",
  "course data", "course report", "download CSV", "download Excel",
  "certified", "filters", "member progress"
],

// ── Payments ──
"payments/connect-stripe-and-receive-payouts.html": [
  "stripe", "connect stripe", "payout", "bank account",
  "payment setup", "withdraw", "deposit", "verification",
  "payment account", "receive payments"
],
"payments/set-up-paid-membership.html": [
  "paid membership", "subscription", "monthly price", "yearly billing",
  "membership fee", "charge members", "community pricing",
  "recurring billing", "grace period",
  "one-time purchase", "lifetime access"
],
"payments/set-up-paid-session.html": [
  "paid session", "paid event", "ticket price", "paid access",
  "charge attendees", "event pricing", "paid video call",
  "platform fee", "10% fee",
  "discount code", "coupon"
],
"payments/set-up-paid-speed-networking.html": [
  "paid speed networking", "paid networking", "ticket price", "paid room",
  "charge participants", "networking fee", "paid event", "speed networking price",
  "platform fee", "10% fee", "discount code", "coupon",
  "paid access", "networking ticket"
],
"payments/track-your-earnings.html": [
  "earnings", "revenue", "total earnings", "available payout",
  "pending payout", "completed payouts", "income",
  "earnings dashboard", "my earnings", "payment history",
  "create paid room", "offer consultation"
],
"payments/create-and-manage-coupons.html": [
  "coupon", "coupons", "discount", "discount code", "promo code",
  "coupon code", "create coupon", "manage coupons", "activate coupon",
  "deactivate coupon", "delete coupon", "redemption", "max redemptions",
  "applies to", "coupon usage", "percentage off"
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
