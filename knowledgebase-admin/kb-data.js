const KB_SECTIONS = [
  {
    id: "users",
    title: "Users",
    icon: "ti-users",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage users",
            url: "users/manage-users.html",
            related: [
              "rooms/manage-rooms.html",
              "host-activity/monitor-host-activity.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "rooms",
    title: "Rooms",
    icon: "ti-door",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage rooms",
            url: "rooms/manage-rooms.html",
            related: [
              "users/manage-users.html",
              "analytics/view-platform-analytics.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "host-activity",
    title: "Host Activity",
    icon: "ti-activity",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Monitor host activity",
            url: "host-activity/monitor-host-activity.html",
            related: [
              "users/manage-users.html",
              "rooms/manage-rooms.html",
              "analytics/view-platform-analytics.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "ti-chart-bar",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "View platform analytics",
            url: "analytics/view-platform-analytics.html",
            related: [
              "host-activity/monitor-host-activity.html",
              "users/manage-users.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "consultation",
    title: "Consultation",
    icon: "ti-calendar-dollar",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage consultation settings",
            url: "consultation/manage-consultation-settings.html",
            related: [
              "payments/manage-payments.html",
              "payment-providers/configure-payment-providers.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "communities",
    title: "Communities",
    icon: "ti-users-group",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage communities",
            url: "communities/manage-communities.html",
            related: [
              "users/manage-users.html",
              "rooms/manage-rooms.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "payments",
    title: "Payments",
    icon: "ti-credit-card",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage payments",
            url: "payments/manage-payments.html",
            related: [
              "payment-providers/configure-payment-providers.html",
              "consultation/manage-consultation-settings.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "payment-providers",
    title: "Payment Providers",
    icon: "ti-building-bank",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Configure payment providers",
            url: "payment-providers/configure-payment-providers.html",
            related: [
              "payments/manage-payments.html",
              "configuration/platform-configuration.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "languages",
    title: "Languages",
    icon: "ti-language",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage platform languages",
            url: "languages/manage-platform-languages.html",
            related: [
              "configuration/platform-configuration.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "feedback",
    title: "Feedback",
    icon: "ti-star",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "View and manage feedback",
            url: "feedback/view-and-manage-feedback.html",
            related: [
              "users/manage-users.html",
              "rooms/manage-rooms.html",
              "analytics/view-platform-analytics.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bulk-email",
    title: "Bulk Email",
    icon: "ti-mail",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Send bulk emails",
            url: "bulk-email/send-bulk-emails.html",
            related: [
              "users/manage-users.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "icebreakers",
    title: "Icebreakers",
    icon: "ti-message-chatbot",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Manage icebreaker questions",
            url: "icebreakers/manage-icebreaker-questions.html",
            related: [
              "rooms/manage-rooms.html",
              "configuration/platform-configuration.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "lms-settings",
    title: "LMS Settings",
    icon: "ti-school",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Configure LMS settings",
            url: "lms-settings/configure-lms-settings.html",
            related: [
              "configuration/platform-configuration.html"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "configuration",
    title: "Configuration",
    icon: "ti-settings",
    groups: [
      {
        label: null,
        articles: [
          {
            title: "Platform configuration",
            url: "configuration/platform-configuration.html",
            related: [
              "languages/manage-platform-languages.html",
              "payment-providers/configure-payment-providers.html",
              "lms-settings/configure-lms-settings.html"
            ]
          }
        ]
      }
    ]
  }
];
