// Admin KB article keywords — keyed by article URL (must match kb-data.js urls)
// Used by the search index to match queries beyond article titles.

const KB_KEYWORDS = {

  // ── Users & Activity ──
  "users-activity/manage-users.html": [
    "users", "user management", "search users", "filter users",
    "edit user", "delete user", "ban user", "user status",
    "can host", "can't host", "plan", "free", "basic", "pro",
    "enterprise", "timezone", "impersonate", "total users", "user list",
    "user info", "avatar", "contact", "joined date",
    "hosted events", "consultation services", "edit plan",
    "notification email", "username", "headline"
  ],
  "users-activity/monitor-host-activity.html": [
    "host activity", "host log", "activity log", "session history",
    "host sessions", "active hosts", "hosting stats",
    "recent activity", "host performance",
    "show-up rate", "no-show", "host missing", "host present",
    "room activity", "room status", "attendees",
    "showed total rooms", "refresh"
  ],

  // ── Rooms & Communities ──
  "rooms-communities/manage-rooms.html": [
    "rooms", "room management", "all rooms", "active rooms",
    "room list", "edit room", "delete room", "room settings",
    "room type", "session rooms", "networking rooms",
    "event members", "event attendees", "edit event",
    "live now", "upcoming", "past", "webinar", "video call",
    "filter rooms", "search rooms", "discoverable", "public",
    "duration", "approved", "waitlisted"
  ],
  "rooms-communities/manage-communities.html": [
    "communities", "community management", "all communities",
    "community list", "edit community", "delete community",
    "community members", "community settings", "community admin",
    "auto-enroll", "auto-enrollment", "auto enroll",
    "paid community", "free community", "public", "private",
    "bypass payment", "new signups"
  ],
  "rooms-communities/manage-event-sponsorship.html": [
    "sponsorship", "sponsor", "sponsors", "ad placement",
    "placements", "logo bar", "banner hero", "skyscraper",
    "inline compact", "floating notification", "native card",
    "sidebar tile", "message strip", "header logo",
    "sponsor data", "sponsor type", "gold", "silver", "bronze",
    "sponsor logo", "sponsor card", "event sponsor", "reusable sponsor",
    "sponsor link", "button title", "display order", "card can be shown",
    "event details page", "associated rooms"
  ],
  "rooms-communities/manage-icebreaker-questions.html": [
    "icebreaker", "icebreakers", "icebreaker questions",
    "conversation starter", "networking prompt",
    "add icebreaker", "edit icebreaker", "delete icebreaker",
    "default questions", "custom questions",
    "professional", "story", "opinion", "future", "fun",
    "category", "visibility toggle", "speed networking",
    "code", "order", "question text"
  ],

  // ── Payments & Billing ──
  "payments-billing/manage-payments.html": [
    "payments", "transactions", "payment history", "refunds",
    "revenue", "earnings", "payouts", "payment records",
    "billing", "invoices", "payment status", "payout requests",
    "search payments", "all payments", "payment type",
    "organizer", "participant", "all status"
  ],
  "payments-billing/configure-payment-providers.html": [
    "payment provider", "stripe", "Paymob", "payment gateway",
    "provider settings", "connect provider", "payment integration",
    "payout settings", "bank", "payment method", "configure payments",
    "webhook", "webhook URL", "secret key", "publishable key",
    "api key", "HMAC", "integration ID", "iframe",
    "apple pay", "currency", "EGP", "USD"
  ],

  // ── Content & Learning ──
  "content-learning/manage-consultation-settings.html": [
    "consultation", "booking", "expert services", "consultation admin",
    "manage bookings", "service settings", "consultation requests",
    "availability", "consultation fees",
    "services", "requests", "pending", "accepted", "rejected", "draft",
    "public", "unlisted", "private", "consultant", "consultee",
    "duration", "price", "visibility", "service info"
  ],
  "content-learning/configure-lms-settings.html": [
    "LMS", "learning management", "course settings",
    "certification settings", "program settings",
    "LMS configuration", "learning settings", "LMS admin",
    "restrict video", "video playback", "seek bar", "mark complete",
    "fast-forward", "playback speed", "back 10 sec", "rewatch",
    "course video", "lesson video"
  ],

  // ── Platform Settings ──
  "platform-settings/manage-platform-languages.html": [
    "language", "languages", "localization", "translation",
    "Arabic", "English", "platform language", "add language",
    "default language", "RTL", "multilingual",
    "Turkish", "Spanish", "French", "Urdu",
    "supported", "language picker", "browser language",
    "language code", "native name"
  ],
  "platform-settings/view-platform-analytics.html": [
    "analytics", "dashboard", "statistics", "metrics",
    "platform stats", "usage data", "reports", "insights",
    "total sessions", "total users", "engagement",
    "session minutes", "connections", "leaderboard",
    "total events", "total minutes", "paying users",
    "paid rooms", "instant calls", "show-up rate",
    "total recordings", "recording statistics",
    "top organizers", "top users", "top recordings",
    "total views", "avg views"
  ],
  "platform-settings/view-and-manage-feedback.html": [
    "feedback", "NPS", "net promoter score", "quality score",
    "promoters", "passives", "detractors", "star rating",
    "session feedback", "feedback analytics", "completion rate",
    "quality by country", "quality by browser", "post-call feedback",
    "total responses", "content NPS",
    "daily volume", "time of day", "avg quality score"
  ],
  "platform-settings/send-bulk-emails.html": [
    "bulk email", "email blast", "mass email", "send email",
    "email campaign", "email users", "notification email",
    "email all", "compose email", "email template",
    "CSV upload", "firstName", "mailgun", "tags",
    "recipients", "all active users", "personalization",
    "rate limiting", "HTML email", "email subject", "email content"
  ],
  "platform-settings/manage-social-links.html": [
    "social links", "social media", "footer links", "Facebook",
    "X", "Twitter", "LinkedIn", "YouTube", "Instagram",
    "TikTok", "WhatsApp", "social icons", "profile URL",
    "get in touch", "social network", "footer icons",
    "toggle", "enable", "disable", "platform footer", "https"
  ],
  "platform-settings/manage-fields-of-interest.html": [
    "interests", "fields of interest", "interest categories",
    "professional interests", "expertise", "user interests",
    "add category", "rename category", "delete category",
    "reorder categories", "category list", "active category",
    "review queue", "user-submitted", "approve interest",
    "reject interest", "custom interest", "profile interests",
    "submitted entries", "pending entries"
  ]

};
