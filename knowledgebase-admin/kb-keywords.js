// Admin KB article keywords — keyed by article URL (must match kb-data.js urls)
// Used by the search index to match queries beyond article titles.

const KB_KEYWORDS = {

  // ── Users ──
  "users/manage-users.html": [
    "users", "user management", "search users", "filter users",
    "edit user", "delete user", "ban user", "user status",
    "can host", "can't host", "plan", "free", "basic", "pro",
    "timezone", "impersonate", "total users", "user list",
    "user info", "avatar", "contact", "joined date"
  ],

  // ── Rooms ──
  "rooms/manage-rooms.html": [
    "rooms", "room management", "all rooms", "active rooms",
    "room list", "edit room", "delete room", "room settings",
    "room type", "session rooms", "networking rooms"
  ],

  // ── Host Activity ──
  "host-activity/monitor-host-activity.html": [
    "host activity", "host log", "activity log", "session history",
    "host sessions", "active hosts", "hosting stats",
    "recent activity", "host performance"
  ],

  // ── Analytics ──
  "analytics/view-platform-analytics.html": [
    "analytics", "dashboard", "statistics", "metrics",
    "platform stats", "usage data", "reports", "insights",
    "total sessions", "total users", "engagement",
    "session minutes", "connections"
  ],

  // ── Consultation ──
  "consultation/manage-consultation-settings.html": [
    "consultation", "booking", "expert services", "consultation admin",
    "manage bookings", "service settings", "consultation requests",
    "availability", "consultation fees"
  ],

  // ── Communities ──
  "communities/manage-communities.html": [
    "communities", "community management", "all communities",
    "community list", "edit community", "delete community",
    "community members", "community settings", "community admin"
  ],

  // ── Payments ──
  "payments/manage-payments.html": [
    "payments", "transactions", "payment history", "refunds",
    "revenue", "earnings", "payouts", "payment records",
    "billing", "invoices", "payment status"
  ],

  // ── Payment Providers ──
  "payment-providers/configure-payment-providers.html": [
    "payment provider", "stripe", "payment gateway", "provider settings",
    "connect provider", "payment integration", "payout settings",
    "bank", "payment method", "configure payments"
  ],

  // ── Languages ──
  "languages/manage-platform-languages.html": [
    "language", "languages", "localization", "translation",
    "Arabic", "English", "platform language", "add language",
    "default language", "RTL", "multilingual"
  ],

  // ── Feedback ──
  "feedback/view-and-manage-feedback.html": [
    "feedback", "reviews", "ratings", "star rating",
    "user feedback", "session feedback", "feedback report",
    "manage reviews", "feedback list"
  ],

  // ── Bulk Email ──
  "bulk-email/send-bulk-emails.html": [
    "bulk email", "email blast", "mass email", "send email",
    "email campaign", "email users", "notification email",
    "email all", "compose email", "email template"
  ],

  // ── Icebreakers ──
  "icebreakers/manage-icebreaker-questions.html": [
    "icebreaker", "icebreakers", "icebreaker questions",
    "conversation starter", "networking prompt",
    "add icebreaker", "edit icebreaker", "delete icebreaker",
    "default questions", "custom questions"
  ],

  // ── LMS Settings ──
  "lms-settings/configure-lms-settings.html": [
    "LMS", "learning management", "course settings",
    "certification settings", "program settings",
    "LMS configuration", "learning settings", "LMS admin"
  ],

  // ── Configuration ──
  "configuration/platform-configuration.html": [
    "configuration", "settings", "platform settings",
    "general settings", "site settings", "branding",
    "platform name", "logo", "admin settings",
    "system settings", "global settings"
  ]

};
