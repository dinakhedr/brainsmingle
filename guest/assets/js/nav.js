/* ============================================================
   BrainsMingle — Shared Nav & Footer
   nav.js · Single source of truth for the site header, footer and
   mobile bar. Edit a link once here and it changes on every page.

   ── Load order (body, after the head loads theme.js) ────────
     <script src="assets/js/icons.js"></script> 
     <script src="assets/js/illustrations.js"></script>
     <script src="assets/js/modals.js"></script> 
     <script src="assets/js/nav.js"></script>         
     

   ── Usage on any page ──────────────────────────────────────
     <div id="site-header"></div>
     ... page content ...
     <div id="site-footer"></div>
     <div id="site-mobile-cta"></div>
   ============================================================ */

(function () {
  'use strict';

  var NAV_CONFIG = {

    brand: { alt: 'BrainsMingle', pre: 'Brains', accent: 'Mingle' },
    cta: { label: 'Get Started', href: 'https://brainsmingle.com/auth/login', newTab: true },

    mega: {

      products: {
        trigger: 'Product',
        sections: [
          { label: 'Tools', cols: 2, items: [
            { key: 'liveSession', title: 'Live Sessions & Webinars', navTitle: 'Live Sessions', desc: 'HD streaming, panels, and workshops', href: 'live-sessions.html', color: 'purple', showInNav: true,
              tag: 'Every session format, hosted under your brand.',
              long: 'Workshops, panels, webinars, office hours, and drop-in calls, scheduled or instant, one-off or recurring. Every session records automatically into your on-demand library. No Zoom links, no external tools.',
              related: [
                { href: 'speed-networking.html', desc: 'Automated matchmaking pairs the right people at the right moment.' },
                { href: 'communities.html', desc: 'Spaces for async discussion, content sharing, and ongoing engagement.' },
                { href: 'forms.html', desc: 'Collect attendee data, export responses, and gate access to sessions.' }
              ],
              related: [
                { href: 'communities.html', desc: 'Spaces for async discussion, content sharing, and ongoing engagement between events.' },
                { href: 'live-sessions.html', desc: 'Workshops, panels, webinars, and drop-in calls, all recorded and on-demand.' },
                { href: 'forms.html', desc: 'Collect attendee data, export responses, and gate access to events.' }
              ],
              getStarted: {
                headline: 'Host your first session today.',
                sub:      'Scheduled or instant, one-off or recurring, recorded automatically into your library.',
                points:   ['No Zoom links or external tools', 'Every session recorded', 'Free to start, no card required'],
                cardSub:  'Create your account and host your first session today.'
              }
            },
            { key: 'consultation', title: 'Consultations & Bookings', navTitle: 'Consultations', desc: 'Expert booking, calls, and payments', href: 'consultations.html', color: 'cyan', showInNav: true,
              tag: 'Booked, paid, and delivered in one place.',
              long: 'Clients see your availability, book a slot, and pay upfront, then meet over built-in video with notes and follow-ups attached. Calendars, reminders, and payouts are handled for you, so expertise turns into income without the back-and-forth.',
              related: [
                { href: 'live-sessions.html', desc: 'Workshops, panels, webinars, and drop-in calls, all recorded and on-demand.' },
                { href: 'communities.html', desc: 'Branded spaces with topic channels, member directories, roles, and admin controls.' },
                { href: 'speed-networking.html', desc: 'Automated matchmaking pairs the right people at the right moment.' }
              ],
              getStarted: {
                headline: 'Set your price. Get booked.',
                sub:      'Availability, booking, video, and payment in one flow, so clients pay upfront and you just show up.',
                points:   ['Paid upfront, no chasing', 'Reminders and rescheduling handled', 'Free to start, no card required'],
                cardSub:  'Create your account and take your first booking today.'
              }
            },
            { key: 'community', title: 'Communities', navTitle: 'Communities', desc: 'Channels, roles, and member engagement', href: 'communities.html', color: 'pink', showInNav: true,
              tag: 'Where your members actually show up.',
              long: 'Build discussion channels, assign roles and permissions, run events, and keep members active with feeds, notifications, and rewards. A real community space, not another silent group chat, themed to your brand.',
              related: [
                { href: 'live-sessions.html', desc: 'Workshops, panels, webinars, and drop-in calls, all recorded and on-demand.' },
                { href: 'speed-networking.html', desc: 'Automated matchmaking pairs the right people at the right moment.' },
                { href: 'courses.html', desc: 'Unlimited structured courses, cohort gating, and an on-demand content library.' }
              ],
              related: [
                { href: 'live-sessions.html', desc: 'Record live sessions and they become on-demand content for your course library.' },
                { href: 'communities.html', desc: 'Course participants join community channels for discussion and peer support.' },
                { href: 'consultations.html', desc: 'Offer 1-to-1 coaching alongside your courses with booking and payment built in.' }
              ],
              getStarted: {
                headline: 'Give your members a home that lasts.',
                sub:      'Channels, roles, events, and rewards that keep members active and coming back.',
                points:   ['Structure that beats a group chat', 'Engagement tools built in', 'Free to start, no card required'],
                cardSub:  'Open your community and invite your first members today.'
              }
            },
            { key: 'speedNetworking', title: 'Speed Networking', navTitle: 'Speed Networking', desc: 'Automated matchmaking in timed rounds', href: 'speed-networking.html', color: 'amber', showInNav: true,
              tag: 'Real introductions, on a timer.',
              long: 'Pair attendees into timed one-to-one conversations with automated matchmaking that learns who should meet. Built for events, cohorts, and communities that want members connecting in minutes, not months.',
              getStarted: {
                headline: 'Meet the right people, on a timer.',
                sub:      'Timed one-to-one rounds with automated matchmaking that learns who you should meet next.',
                points:   ['Real introductions, not cold DMs', 'Matched by interests and goals', 'Free to start, no card required'],
                cardSub:  'Create your account and join your first round today.'
              }
            },
            { key: 'course', title: 'Courses & LMS', navTitle: 'Courses', desc: 'Structured programs and certifications', href: 'courses.html', color: 'purple', showInNav: true,
              tag: 'Turn what you know into a course that scales.',
              long: 'Build structured programs with lessons, modules, quizzes, and certificates, then track completion for every learner. A full LMS inside your platform: sell it, gate it, or bundle it with membership.',
              getStarted: {
                headline: 'Turn what you know into a course that sells.',
                sub:      'Lessons, modules, quizzes, and certificates, built once and sold on repeat.',
                points:   ['Sell standalone or bundle', 'Progress tracking and certificates', 'Free to start, no card required'],
                cardSub:  'Create your account and build your first course today.'
              }
            },
            { key: 'event', title: 'Events', navTitle: 'Events', desc: 'Sponsorship, ticketing, attendance', href: 'events.html', color: 'cyan', showInNav: true,
              tag: 'From registration to replay.',
              long: 'Publish an event page, sell tickets, manage sponsors, and track attendance for single sessions or multi-day programs. Live, virtual, or hybrid, every event runs on your brand and feeds straight into your community.',
              related: [
                { href: 'speed-networking.html', desc: 'Ticketed networking events with registration, sponsor placements, and matchmaking.' },
                { href: 'live-sessions.html', desc: 'The sessions your events are built around, scheduled, instant, or recurring.' },
                { href: 'payments.html', desc: 'The full payment infrastructure: Stripe, payouts, coupons, and earnings dashboard.' }
              ],
              related: [
                { href: 'live-sessions.html', desc: 'Charge for scheduled sessions, webinars, and instant calls with built-in ticketing.' },
                { href: 'communities.html', desc: 'Charge for community membership with monthly and yearly subscription billing.' },
                { href: 'consultations.html', desc: 'Expert booking pages with availability, video calls, and payment collection.' }
              ],
              getStarted: {
                headline: 'Run events people actually attend.',
                sub:      'Registration, ticketing, sponsors, and live delivery in one flow, with attendees who stay.',
                points:   ['Free or paid tickets with coupons', 'Attendees become a community', 'Free to start, no card required'],
                cardSub:  'Create your account and publish your first event today.'
              }
            },
            { key: 'form', title: 'Forms & Registration', navTitle: 'Forms', desc: 'Custom forms, response tracking', href: 'forms.html', color: 'pink', showInNav: true,
              tag: 'Collect what you need, wherever you need it.',
              long: 'Build custom forms for applications, registrations, feedback, and lead capture, then track and export every response. Drop them into events, courses, or communities and route the answers into your workflow.',
              related: [
                { href: 'live-sessions.html', desc: 'Gate access to sessions with registration forms and collect attendee data.' },
                { href: 'speed-networking.html', desc: 'Capture attendee context before matchmaking with pre-event registration forms.' },
                { href: 'communities.html', desc: 'Screen new members with join forms and control admission with criteria-based rules.' }
              ],
              getStarted: {
                headline: 'Collect exactly what you need.',
                sub:      'Custom forms, applications, and surveys with tracked, exportable responses tied to your members.',
                points:   ['Custom questions inside your flow', 'Applications, approvals, and gating', 'Free to start, no card required'],
                cardSub:  'Create your account and build your first form today.'
              }
            },
            { key: 'payment', title: 'Payments & Earnings', navTitle: 'Payments', desc: 'Memberships, payouts, and coupons', href: 'payments.html', color: 'amber', showInNav: true,
              tag: 'Get paid, pay out, and grow revenue.',
              long: 'Sell memberships, courses, tickets, and consultations with subscriptions, one-off payments, coupons, and automated payouts. One connected billing layer for everything you offer, with the numbers your finance team needs.',
              getStarted: {
                headline: 'One dashboard for everything you sell.',
                sub:      'Consultations, courses, memberships, and tickets settle into one earnings view with automated payouts.',
                points:   ['Subscriptions, one-off, and coupons', 'Automated payouts, no invoicing', 'Free to start, no card required'],
                cardSub:  'Create your account and start earning today.'
              }
            },
            { key: 'analytics', title: 'Analytics & Administration', navTitle: 'Analytics', desc: 'Engagement, hosts, revenue in one admin layer', href: 'analytics.html', color: 'cyan', showInNav: false,
              tag: 'See everything, run everything, in one place.',
              long: 'Platform metrics, course completion, host reliability, session quality, user management, and revenue tracking, all from a single admin panel. The reporting layer your stakeholders and funders need, wired to every module.',
              related: [
                { href: 'live-sessions.html', desc: 'The sessions your analytics are tracking: attendance, recordings, and feedback.' },
                { href: 'courses.html', desc: 'The learning programs your course analytics are measuring.' },
                { href: 'payments.html', desc: 'The full payment infrastructure behind the revenue data in your admin panel.' }
              ],
              getStarted: {
                headline: 'See everything, from one panel.',
                sub:      'Course completion, session quality, host reliability, and revenue, all in one admin view.',
                points:   ['One dashboard for every module', 'Metrics your stakeholders need', 'Free to start, no card required'],
                cardSub:  'Create your account and see your first numbers today.'
              }
            },
            { key: 'branding', title: 'Branding & Localization', navTitle: 'Branding', desc: 'Your logo, colors, domain, and language', href: 'branding.html', color: 'purple', showInNav: false,
              tag: 'Your brand, your language, your region.',
              long: 'Apply your logo, colors, and typography on your own custom domain, then serve every member in their language, with full Arabic and right-to-left support built in. Your brand end to end, localized for the region you\'re growing in.',
              related: [
                { href: 'communities.html', desc: 'Your branded community with channels, roles, and member engagement.' },
                { href: 'live-sessions.html', desc: 'Sessions hosted under your brand with your logo and colors on every screen.' },
                { href: 'analytics.html', desc: 'Dashboards and admin controls for the deployment you\'ve branded.' }
              ],
              getStarted: {
                headline: 'Your brand, your domain, your language.',
                sub:      'Apply your logo, colors, and typography on your own custom domain, localized for your region.',
                points:   ['Your identity on every screen', 'Full Arabic and RTL support', 'Free to start, no card required'],
                cardSub:  'Create your account and make it yours today.'
              }
            }
          ]},
          { label: 'Built For', cols: 1, items: [
            { key: 'award', title: 'For Experts', navTitle: 'For Experts', desc: 'Trainers and consultants', href: 'for-experts.html',
              personas: [
                { icon: 'consultation', label: 'Consultants' },
                { icon: 'award', label: 'Coaches' },
                { icon: 'book', label: 'Trainers' },
                { icon: 'bulb', label: 'Subject-Matter Experts' },
                { icon: 'user', label: 'Freelance Advisors' },
                { icon: 'course', label: 'Course Creators' }
              ], color: 'purple', showInNav: true,
              tag: 'Get paid for what you already know.',
              long: 'Consultants, trainers, and coaches package their expertise into consultations, courses, and live sessions, and get paid for every one. Set your availability, name your price, and let bookings and payments run themselves.',
              fork: {
                target: 'suite/for-academies.html',
                title:  'Running a training company or academy?',
                text:   'BrainsMingle Suite gives you the whole platform under your own brand and domain: courses, cohorts, certifications, and payments, configured for your operation.',
                cta:    'Explore Suite for Academies'
              },
              getStarted: {
                headline: 'Your expertise is the product. We built the rest.',
                sub:      'Profile, bookings, courses, sessions, community, and payments, ready the moment you sign up.',
                points:   ['Bookable expert profile in minutes', 'The network brings the demand', 'Free to start, fees only when you earn'],
                cardSub:  'Create your expert profile and publish your first offer today.'
              }
            },
            { key: 'mic', title: 'For Creators', navTitle: 'For Creators', desc: 'Podcasters and content creators', href: 'for-creators.html',
              personas: [
                { icon: 'mic', label: 'Podcasters' },
                { icon: 'video', label: 'Video Creators' },
                { icon: 'mail', label: 'Newsletter Writers' },
                { icon: 'edtech', label: 'Online Educators' },
                { icon: 'liveSession', label: 'Streamers' },
                { icon: 'community', label: 'Community Creators' }
              ], color: 'pink', showInNav: true,
              tag: 'Your audience is here. Get paid for it.',
              long: 'Podcasters, YouTubers, and educators run paid communities, sell courses, and host live sessions for the audience they\'ve already built. Turn followers into members and attention into recurring income.',
              fork: {
                target: 'suite/for-studios.html',
                title:  'Running a podcast network or creator studio?',
                text:   'BrainsMingle Suite moves your whole operation onto your own branded app: paid memberships, live shows, and your back catalog, under your name.',
                cta:    'Explore Suite for Studios'
              },
              getStarted: {
                headline: 'Your audience is the asset. We built the engine.',
                sub:      'Community, courses, lives, events, and payments, ready the moment you sign up.',
                points:   ['Open your creator home in minutes', 'Free and paid tiers from day one', 'Fees only when you earn'],
                cardSub:  'Open your community and publish your first offer today.'
              }
            },
            { key: 'trendingUp', title: 'For Professionals', navTitle: 'For Professionals', desc: 'Career growth and networking', href: 'for-professionals.html',
              personas: [
                { icon: 'search', label: 'Job Seekers' },
                { icon: 'path', label: 'Career Changers' },
                { icon: 'nodelevel', label: 'Managers & Team Leads' },
                { icon: 'book', label: 'Lifelong Learners' },
                { icon: 'bulb', label: 'Domain Specialists' },
                { icon: 'speedNetworking', label: 'Networkers' }
              ], color: 'cyan', showInNav: true,
              tag: 'Learn, connect, and move your career forward.',
              long: 'Professionals join expert-led communities, take courses, attend live sessions, and network with people in their field. One place to keep growing, and to meet the people who help you get there.',
              fork: {
                target: 'suite/for-workplaces.html',
                title:  'Building learning for your whole team?',
                text:   'BrainsMingle Suite gives your company its own platform: onboarding, internal training, town halls, and employee communities, under your identity.',
                cta:    'Explore Suite for Workplaces'
              },
              getStarted: {
                headline: 'Everything your growth needs, in one place.',
                sub:      'Communities, courses, live sessions, experts, and networking, ready the moment you sign up.',
                points:   ['Free to join, no card required', 'Matched introductions every week', 'Learn from experts who do the work'],
                cardSub:  'Create your profile and join your first community today.'
              }
            },
            { key: 'community', title: 'For Communities', navTitle: 'For Communities', desc: 'Associations and networks', href: 'for-communities.html',
              personas: [
                { icon: 'community', label: 'Community Managers' },
                { icon: 'userpaid', label: 'Membership Networks' },
                { icon: 'building', label: 'Associations' },
                { icon: 'star', label: 'Creator Communities' },
                { icon: 'globe', label: 'Local Chapters' },
                { icon: 'chat', label: 'Interest Groups' }
              ], color: 'amber', showInNav: true,
              tag: 'Grow a network that shows up.',
              long: 'Community builders bring members together with channels, events, courses, and live sessions, then keep them active with the engagement tools generic chat apps lack. Build the network; we\'ll handle the plumbing.',
              fork: {
                target: 'suite/for-networks.html',
                title:  'Running an association or professional network?',
                text:   'BrainsMingle Suite runs your entire membership under your own brand and domain: chapters, dues, events, and courses, with no other logo in sight.',
                cta:    'Explore Suite for Networks'
              },
              getStarted: {
                headline: 'Your members are waiting. Give them a home.',
                sub:      'Channels, events, sessions, networking, and payments, ready the moment you sign up.',
                points:   ['Set up your community in minutes', 'Engagement tools group chats never had', 'Free to start, fees only when you earn'],
                cardSub:  'Create your community and invite your first members today.'
              }
            },
            { key: 'event', title: 'For Organizers', navTitle: 'For Organizers', desc: 'Event hosts, workshop series', href: 'for-organizers.html',
              personas: [
                { icon: 'event', label: 'Event Hosts' },
                { icon: 'recurring', label: 'Workshop Series' },
                { icon: 'speedNetworking', label: 'Meetup Organizers' },
                { icon: 'ticket', label: 'Conference & Summit Hosts' },
                { icon: 'course', label: 'Bootcamp Leads' },
                { icon: 'video', label: 'Webinar Hosts' }
              ], color: 'pink', showInNav: true,
              tag: 'Run events people actually attend.',
              long: 'Event hosts and workshop series handle registration, ticketing, live delivery, and follow-up in one flow. Fill the room, run the session, and turn attendees into a community that comes back.',
              fork: {
                target: 'suite/for-conferences.html',
                title:  'Producing conferences or large summits?',
                text:   'BrainsMingle Suite brands the whole event end to end: registration, sponsors, live delivery, and replays under your name, year-round.',
                cta:    'Explore Suite for Conferences'
              },
              getStarted: {
                headline: 'Your next event is the easy part now.',
                sub:      'Ticketing, delivery, networking, and follow-up, ready the moment you sign up.',
                points:   ['Publish your first event in minutes', 'The network helps fill the room', 'Free to start, fees only when you earn'],
                cardSub:  'Create your event page and open registration today.'
              }
            },
            { key: 'path', title: 'For Programs', navTitle: 'For Programs', desc: 'Student clubs, NGOs, bootcamps', href: 'for-programs.html',
              personas: [
                { icon: 'campus', label: 'Student Clubs' },
                { icon: 'rocket', label: 'Bootcamps' },
                { icon: 'building', label: 'Nonprofits & NGOs' },
                { icon: 'award', label: 'Fellowship Programs' },
                { icon: 'nodelevel', label: 'Cohort Programs' },
                { icon: 'community', label: 'Grassroots Communities' }
              ], color: 'amber', showInNav: true,
              tag: 'Clubs, bootcamps, and cohorts, organized.',
              long: 'Student clubs, bootcamps, and grassroots programs deliver courses, run sessions, and keep cohorts connected in one space. Structure the program, track progress, and give members a home beyond the group chat.',
              fork: {
                target: 'suite/for-foundations.html',
                title:  'Running funded or grant-backed programs?',
                text:   'BrainsMingle Suite delivers your programs under your own identity, with the engagement and reporting layer funders expect.',
                cta:    'Explore Suite for Foundations'
              },
              getStarted: {
                headline: 'Run the program. Keep the network.',
                sub:      'Applications, curriculum, sessions, community, and certificates, ready the moment you sign up.',
                points:   ['Set up a cohort in minutes', 'The network helps fill enrollment', 'Free to start, fees only when you earn'],
                cardSub:  'Create your program space and open applications today.'
              }
            }
          ]}
        ],
        foot: [
          { icon: 'rocket',     title: 'Start for free', navTitle: 'Start for free', desc: 'No card needed',       href: 'https://brainsmingle.com/auth/login', newTab: true },
          { icon: 'dollarSign', title: 'See pricing', navTitle: 'See pricing',    desc: 'Plans for every stage', href: 'https://brainsmingle.com/pricing',    newTab: true }
        ]
      },

      suite: {
        trigger: 'For Business',
        layout: 'aside',
        aside: {
          label: 'Overview',
          title: 'BrainsMingle Suite', navTitle: 'BrainsMingle Suite',
          desc:  'Your configured professional ecosystem'
        },
        sections: [
          { label: 'Built For', cols: 2, items: [
            { key: 'startup', title: 'For Accelerators', navTitle: 'For Accelerators', desc: 'Accelerators, innovation programs', href: 'suite/for-accelerators.html',
              personas: [
                { icon: 'incubator', label: 'Incubators' },
                { icon: 'startup', label: 'Accelerators' },
                { icon: 'corporate', label: 'VC Platforms' },
                { icon: 'bulb', label: 'Innovation Hubs' },
                { icon: 'campus', label: 'Entrepreneurship Centers' },
                { icon: 'event', label: 'Startup Event Organizers' }
              ], color: 'purple', showInNav: true,
              tag: 'Run your program like the brand it is.',
              long: 'Accelerators and innovation programs onboard cohorts, deliver mentorship and sessions, connect founders with alumni, and track progress, all under their own brand and domain. One configured platform for the whole program lifecycle.',
              getStarted: {
                headline: 'Run your whole program under one roof.',
                sub:      'Applications, cohorts, mentor sessions, demo days, and alumni, on a platform that carries your name, not ours.',
                points:   ['Screen and select from one pipeline', 'Mentor matching and cohort tracking', 'Alumni that stay connected'],
                cardSub:  'Get a walkthrough tailored to your program.',
                demo: true
              }
            },
            { key: 'campus', title: 'For Universities', navTitle: 'For Universities', desc: 'Universities, alumni networks', href: 'suite/for-universities.html',
              personas: [
                { icon: 'school', label: 'Universities' },
                { icon: 'edtech', label: 'EdTech Providers' },
                { icon: 'community', label: 'Student Organizations' },
                { icon: 'path', label: 'Career Centers' },
                { icon: 'campus', label: 'Alumni Networks' },
                { icon: 'userpaid', label: 'Faculty & Departments' }
              ], color: 'cyan', showInNav: true,
              tag: 'A professional home for every student and alum.',
              long: 'Universities and career centers deliver courses, host guest lectures, run career fairs, and connect students with alumni on a platform they own and brand. Keep the campus community engaged long after graduation.',
              getStarted: {
                headline: 'Your campus community, extended online.',
                sub:      'Alumni networks, continuing education, events, and mentorship, on a platform that carries your institution\'s identity.',
                points:   ['Your institution\'s brand and domain', 'Alumni, students, and faculty in one place', 'Learning, events, and mentorship built in'],
                cardSub:  'Get a walkthrough tailored to your institution.',
                demo: true
              }
            },
            { key: 'mic', title: 'For Studios', navTitle: 'For Studios', desc: 'Podcast networks and creator studios', href: 'suite/for-studios.html',
              personas: [
                { icon: 'record', label: 'YouTubers & Video Creators' },
                { icon: 'mic', label: 'Podcasters' },
                { icon: 'edtech', label: 'Online Educators' },
                { icon: 'consultation', label: 'Coaches & Consultants' },
                { icon: 'community', label: 'Community Builders' },
                { icon: 'event', label: 'Workshop Hosts' }
              ], color: 'pink', showInNav: true,
              tag: 'Own the audience you\'ve been renting.',
              long: 'Podcast networks and creator studios move their audience off rented platforms and onto their own branded app, with paid memberships, communities, live shows, and back-catalog libraries. Your show, your subscribers, your revenue.',
              getStarted: {
                headline: 'Your audience, your app, your revenue.',
                sub:      'Paid memberships, live shows, and your back catalog, on a branded app your audience recognizes as yours.',
                points:   ['Your brand, not a platform\'s', 'Memberships, lives, and catalog in one place', 'Own the audience relationship'],
                cardSub:  'Get a walkthrough tailored to your studio.',
                demo: true
              }
            },
            { key: 'path', title: 'For Foundations', navTitle: 'For Foundations', desc: 'NGOs, foundations, funded programs', href: 'suite/for-foundations.html',
              personas: [
                { icon: 'incubator', label: 'NGOs & INGOs' },
                { icon: 'building', label: 'Foundations' },
                { icon: 'path', label: 'Development Organizations' },
                { icon: 'startup', label: 'Accelerators & Incubators' },
                { icon: 'campus', label: 'Fellowships & Scholarships' },
                { icon: 'dollarSign', label: 'Funded Programs' }
              ], color: 'amber', showInNav: true,
              tag: 'Deliver funded programs, fully branded.',
              long: 'Foundations, NGOs, and funded programs run training, build participant communities, and report outcomes to funders, all under their own identity. The engagement and reporting layer grant-makers expect, in one configured platform.',
              getStarted: {
                headline: 'Deliver programs, prove impact, under your identity.',
                sub:      'Run funded programs with the engagement layer participants need and the reporting layer funders expect.',
                points:   ['Your brand on every touchpoint', 'Cohorts, curriculum, and community', 'Reporting funders can read'],
                cardSub:  'Get a walkthrough tailored to your foundation.',
                demo: true
              }
            },
            { key: 'course', title: 'For Academies', navTitle: 'For Academies', desc: 'Training companies, coaches', href: 'suite/for-academies.html',
              personas: [
                { icon: 'course', label: 'Training Providers' },
                { icon: 'edtech', label: 'EdTech Companies' },
                { icon: 'consultation', label: 'Consultancy Agencies' },
                { icon: 'path', label: 'Coaching Businesses' },
                { icon: 'award', label: 'Certification Providers' },
                { icon: 'corporate', label: 'L&D Businesses' }
              ], color: 'purple', showInNav: true,
              tag: 'Your training business, your own platform.',
              long: 'Training companies and coaching academies sell courses, run cohorts, certify learners, and take payments on a branded platform served from their own domain. Everything a modern training brand needs, without stitching tools together.',
              getStarted: {
                headline: 'Your training business, your own platform.',
                sub:      'Sell courses, run cohorts, certify learners, and take payments on a branded platform served from your own domain.',
                points:   ['Your brand, your domain, your data', 'Cohorts, certification, and reporting built in', 'Configured to your operation'],
                cardSub:  'Get a walkthrough tailored to your academy.',
                demo: true
              }
            },
            { key: 'corporate', title: 'For Workplaces', navTitle: 'For Workplaces', desc: 'Workplace learning, teams', href: 'suite/for-workplaces.html',
              personas: [
                { icon: 'startup', label: 'Startups & Scale-Ups' },
                { icon: 'corporate', label: 'SMBs & Mid-Market' },
                { icon: 'globe', label: 'Distributed Teams' },
                { icon: 'course', label: 'L&D Teams' },
                { icon: 'community', label: 'People & Culture Teams' },
                { icon: 'nodelevel', label: 'Internal Comms Teams' }
              ], color: 'cyan', showInNav: true,
              tag: 'Your company deserves more than a group chat.',
              long: 'A fully configured professional ecosystem for companies of every size. Run town halls, onboard new hires, deliver internal training, build employee communities, and connect teams across locations, all under your identity, on your domain.',
              getStarted: {
                headline: 'Your company\'s own learning platform.',
                sub:      'Onboarding, internal training, town halls, and employee communities, under your identity, not a vendor\'s.',
                points:   ['Your brand, your domain, your data', 'Training, events, and community in one place', 'Reporting for L&D and leadership'],
                cardSub:  'Get a walkthrough tailored to your team.',
                demo: true
              }
            },
            { key: 'event', title: 'For Conferences', navTitle: 'For Conferences', desc: 'Event organizers, conferences', href: 'suite/for-conferences.html',
              personas: [
                { icon: 'event', label: 'Conference Organizers' },
                { icon: 'liveSession', label: 'Summit Producers' },
                { icon: 'speedNetworking', label: 'Networking Event Hosts' },
                { icon: 'community', label: 'Community-Led Event Organizers' },
                { icon: 'recurring', label: 'Recurring Series Producers' },
                { icon: 'mic', label: 'Event Agencies' }
              ], color: 'pink', showInNav: true,
              tag: 'Your event, branded end to end.',
              long: 'Conference and event organizers sell tickets, manage sponsors, deliver live and on-demand sessions, and network attendees on a platform that carries their brand from registration to replay. One home for the whole event, year-round.',
              getStarted: {
                headline: 'Your event, end to end, under your brand.',
                sub:      'Registration, ticketing, sponsors, live delivery, and replays, year-round, on your own branded platform.',
                points:   ['Registration to replay in one place', 'Sponsor and exhibitor management', 'An audience that persists between events'],
                cardSub:  'Get a walkthrough tailored to your event.',
                demo: true
              }
            },
            { key: 'community', title: 'For Networks', navTitle: 'For Networks', desc: 'Associations, networks & communities', href: 'suite/for-networks.html',
              personas: [
                { icon: 'community', label: 'Professional Associations' },
                { icon: 'building', label: 'Chambers of Commerce' },
                { icon: 'globe', label: 'Chapters & Regional Networks' },
                { icon: 'award', label: 'Certification Bodies' },
                { icon: 'campus', label: 'Alumni Networks' },
                { icon: 'corporate', label: 'Industry Coalitions' }
              ], color: 'amber', showInNav: true,
              tag: 'A member network you actually own.',
              long: 'Associations, professional networks, and large creator communities run their entire membership on a branded platform they own: channels, events, courses, and dues in one place. No rented rails, no per-seat surprises, no other brand\'s logo.',
              getStarted: {
                headline: 'Your entire membership, your own brand.',
                sub:      'Chapters, dues, events, courses, and directories, run on a platform members recognize as yours.',
                points:   ['Membership and dues, automated', 'Chapters, roles, and directories', 'Events and learning built in'],
                cardSub:  'Get a walkthrough tailored to your network.',
                demo: true
              }
            }
          ]}
        ],
        foot: [
          { icon: 'grid', title: 'Suite overview', navTitle: 'Suite overview', desc: 'One configured ecosystem', href: 'suite/index.html' },
          { icon: 'chat', title: 'Book a demo', navTitle: 'Book a demo',    desc: 'See Suite in action',      cta: 'demo', newTab: true }
        ]
      }
    },

    links: [
      { label: 'Pricing', href: 'https://brainsmingle.com/pricing' },
      { label: 'Blog',    href: 'blog/index.html' }
    ],

    footer: {
      tagline: 'The professional network where experts earn, professionals grow, and organizations connect, all in one place',
      email:   'hello@brainsmingle.com',
      social: [
        { key: 'linkedin',  label: 'BrainsMingle on LinkedIn',  href: 'https://linkedin.com/company/brainsmingle' },
        { key: 'facebook',  label: 'BrainsMingle on Facebook',  href: 'https://facebook.com/brainsmingle'         },
        { key: 'instagram', label: 'BrainsMingle on Instagram', href: 'https://instagram.com/brainsmingle'        },
        { key: 'x',         label: 'BrainsMingle on X',         href: 'https://x.com/brainsmingle'                },
        { key: 'youtube',   label: 'BrainsMingle on YouTube',   href: 'https://youtube.com/@brainsmingle'         }
      ],
      company: [
        { label: 'Pricing', href: 'https://brainsmingle.com/pricing' },
        { label: 'About',   href: 'about.html'       },
        { label: 'Blog',    href: 'blog/index.html'  },
        { label: 'Contact', href: 'contact.html'     },
        { label: 'Suite',   href: 'suite/index.html' }
      ],
      legal: [
        { label: 'Privacy', href: 'privacy.html' },
        { label: 'Terms',   href: 'terms.html'   }
      ]
    }
  };

  /* ── 2. HELPERS ─────────────────────────────────────────── */

  var ROOT = (function () {
    var p = window.location.pathname;
    return (p.indexOf('/blog/') !== -1 || p.indexOf('/suite/') !== -1) ? '../' : '';
  })();

  function href(h) {
    if (/^(https?:|mailto:|#|\/)/.test(h)) return h;
    return ROOT + h;
  }

  function getIcon(key) {
    return (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS[key]) ? SUITE_ICONS[key] : '';
  }

  function flattenMenu(key) {
    var menu = NAV_CONFIG.mega[key];
    if (!menu) return [];
    if (menu.sections) {
      return menu.sections.reduce(function (acc, sec) { return acc.concat(sec.items); }, []);
    }
    if (menu.columns) {
      return menu.columns.reduce(function (acc, col) { return acc.concat(col.items); }, []);
    }
    return [];
  }

  var SOCIAL_SVG = {
    linkedin:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    facebook:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>',
    x:         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l7.07 8.51L4 20h2.18l5.71-6.06L16.73 20H21l-7.38-8.88L20.45 4H18.3l-5.36 5.68L8.27 4z"/></svg>',
    youtube:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>'
  };

  var CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var MENU    = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

  function themeToggle() {
    if (typeof SHOW_THEME_TOGGLE !== 'undefined' && !SHOW_THEME_TOGGLE) return '';
    var icons = (typeof THEME_ICONS !== 'undefined') ? THEME_ICONS : { sun: '', moon: '' };
    return '<button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch between light and dark">' +
             '<span class="theme-toggle__moon">' + icons.moon + '</span>' +
             '<span class="theme-toggle__sun">'  + icons.sun  + '</span>' +
           '</button>';
  }

  function logoSrc(slot) {
    if (typeof themeLogos === 'function') {
      var set = themeLogos();
      if (set && set[slot]) return href(set[slot]);
    }
    return null;
  }
  function logoHtml(slot) {
    var b = NAV_CONFIG.brand;
    var src = logoSrc(slot);
    if (src) return '<img data-logo="' + slot + '" src="' + src + '" alt="' + b.alt + '" />';
    return b.pre + '<span>' + b.accent + '</span>';
  }

  function updateLogos() {
    if (typeof themeLogos !== 'function') return;
    var set = themeLogos();
    document.querySelectorAll('img[data-logo]').forEach(function (el) {
      var slot = el.getAttribute('data-logo');
      if (set && set[slot]) el.setAttribute('src', href(set[slot]));
    });
  }

  var PAGES_EXTRA = {
    'index.html': { key: 'logo', title: 'Home', navTitle: 'Home', desc: 'Meet, learn, and earn in one place', color: 'purple', showInNav: true, tag: 'Meet. Learn. Earn.', long: 'The professional network where experts get paid, professionals grow, and organizations run branded communities, courses, and live sessions, all in one platform.' },
    'capabilities.html': { key: 'grid', title: 'Capabilities', navTitle: 'Capabilities', desc: 'Everything the platform can do', color: 'purple', showInNav: true, tag: 'One platform. Every professional tool.', long: 'Live sessions, consultations, communities, courses, events, forms, and payments: every capability your professional network needs, connected in one platform and ready under your brand.' },
    'blog/index.html': { key: 'chat', title: 'Blog', navTitle: 'Blog', desc: 'Ideas on community, learning, and growth', color: 'purple', showInNav: true, tag: 'Ideas on community, learning, and getting paid.', long: 'Playbooks and perspectives on building professional communities, running live learning, monetizing expertise, and launching white-label platforms, from the BrainsMingle team.' },
    'about.html': { key: 'award', title: 'About', navTitle: 'About', desc: 'Why we built BrainsMingle', color: 'purple', showInNav: true, tag: 'Building the professional home everyone deserves.', long: 'BrainsMingle gives experts, creators, and organizations one place to network, learn, and earn, with a focus on bringing MENA professionals a platform built for their language, region, and ambitions.' },
    'contact.html': { key: 'mail', title: 'Contact', navTitle: 'Contact', desc: 'Sales, support, and partnerships', color: 'purple', showInNav: true, tag: 'Let\'s talk.', long: 'Questions about the platform, a Suite demo for your organization, or a partnership idea? Reach the BrainsMingle team and we\'ll get back to you.' },
    'suite/index.html': { key: 'grid', title: 'BrainsMingle Suite', navTitle: 'BrainsMingle Suite', desc: 'Your configured professional ecosystem', color: 'purple', showInNav: true, tag: 'Your platform, your brand, your domain.', long: 'A fully configured professional ecosystem, communities, courses, live sessions, events, and payments, deployed under your brand and served from your own domain. Everything your organization needs to run a professional network, without building it yourself.' }
  };

  /* ── PAGE INDEX + HERO HYDRATION ───────────────────────────
     Flat lookup of every page (mega items + standalone pages)
     keyed by href — one source of truth for hero copy.

     Product hero:
       <section class="sol-hero" data-page="live-sessions.html">
         <div class="sol-hero__icon"></div>
         <h1 class="sol-hero__title"></h1>
         <p  class="sol-hero__headline"></p>
         <p  class="sol-hero__sub"></p>
       </section>
     Vertical hero (suite B2B or built-for B2C):
       <section class="vert-hero" data-page="suite/for-universities.html">
         <div class="vert-hero__motif"></div>
         <div class="vert-hero__tag"></div>
         <h1 class="vert-hero__title"></h1>
         <p  class="vert-hero__sub"></p>
       </section>
     Colour modifier (sol--/vert--) is applied automatically. ── */

  function buildPageIndex() {
    var idx = {};
    ['products', 'suite'].forEach(function (menuKey) {
      flattenMenu(menuKey).forEach(function (it) {
        if (it.href) idx[it.href] = it;
      });
    });
    if (typeof PAGES_EXTRA !== 'undefined') {
      Object.keys(PAGES_EXTRA).forEach(function (h) {
        if (!idx[h]) idx[h] = PAGES_EXTRA[h];
      });
    }
    return idx;
  }

  var PAGE_INDEX = null;
  function getPage(k) {
    if (!PAGE_INDEX) PAGE_INDEX = buildPageIndex();
    return PAGE_INDEX[k] || null;
  }

  function setText(scope, sel, val) {
    var el = scope.querySelector(sel);
    if (el && val != null) el.textContent = val;
    return el;
  }
  function setIconInto(scope, sel, key) {
    var el = scope.querySelector(sel);
    if (el && key) el.innerHTML = getIcon(key);
    return el;
  }

  /* Apply a page's colour once: sets the modifier class, publishes a
     --page-color CSS variable at :root (so ANY section on the page can
     read it, not just hero children), paints the hero glow, and applies
     the modifier to any element that opts in with data-page-accent.
     Colour decision lives entirely in config. */
  /* Publish a page's accent to :root so any element (glow, section header,
     button) can read --page-color / --page-color-glow, and opt-in sections
     via data-page-accent get their modifier class. Page-wide, component-
     agnostic — works whether or not the page has a sol/vert hero. */
  function publishPageColor(page, prefix) {
    var color = page.color || 'purple';

    var root = document.documentElement;
    root.style.setProperty('--page-color', 'var(--' + color + ')');
    root.style.setProperty('--page-color-glow', 'var(--' + color + '-glow)');
    root.setAttribute('data-page-color', color);

    /* any section can opt in: <section data-page-accent="vert"> */
    document.querySelectorAll('[data-page-accent]').forEach(function (el) {
      el.classList.add((el.getAttribute('data-page-accent') || prefix || 'sol') + '--' + color);
    });

    return color;
  }

  function applyHeroColor(hero, page, prefix) {
    var color = publishPageColor(page, prefix);

    hero.classList.add(prefix + '--' + color);

    var glow = hero.querySelector('.glow');
    if (glow) glow.style.background = 'var(--page-color)';
  }

  function hydrateSolHero(hero, page) {
    applyHeroColor(hero, page, 'sol');
    var pill = hero.querySelector('.sol-hero__tag');
    if (pill) {
      pill.innerHTML = '<span class="icon icon--' + (page.color || 'purple') + '">' +
                       getIcon(page.key) + '</span> ' + (page.navTitle || page.title);
    }
    setText(hero, '.sol-hero__title', page.title);
    setText(hero, '.sol-hero__headline', page.tag);
    setText(hero, '.sol-hero__sub', page.long);
}

  function hydrateVertHero(hero, page) {
    applyHeroColor(hero, page, 'vert');
    var pill = hero.querySelector('.vert-hero__tag');
    if (pill) {
      pill.innerHTML = '<span class="icon icon--' + (page.color || 'purple') + '">' +
                       getIcon(page.key) + '</span> ' + page.title;
    }
    setText(hero, '.vert-hero__title', page.tag);
    setText(hero, '.vert-hero__sub', page.long);

    /* Built-for panel - one row per persona (icon + label) */
    var panel = hero.querySelector('.vert-hero__personas');
    if (panel && page.personas) {
      panel.innerHTML = page.personas.map(function (p) {
        return '<li class="vert-hero__persona">' +
                 '<span class="icon">' + getIcon(p.icon) + '</span>' +
                 '<span>' + p.label + '</span>' +
               '</li>';
      }).join('');
    }
  }

  function hydrateHero(scope) {
    var root = scope || document;
    root.querySelectorAll('[data-page]').forEach(function (hero) {
      var page = getPage(hero.getAttribute('data-page'));
      if (!page) return;
      if (hero.classList.contains('sol-hero')) hydrateSolHero(hero, page);
      else if (hero.classList.contains('vert-hero')) hydrateVertHero(hero, page);
      else {
        /* Generic page (e.g. suite/index) — no sol/vert hero to hydrate,
           but still publish the accent so glow + headers follow config.
           Paint its glow too, if it has one. */
        publishPageColor(page, 'sol');
        var glow = hero.querySelector('.glow');
        if (glow) glow.style.background = 'var(--page-color)';
      }
    });
  }

  /* ── 3. MARKUP BUILDERS ─────────────────────────────────── */

  function linkAttrs(o) {
    if (o.cta) return 'href="#" data-cta="' + o.cta + '"';
    var tab = o.newTab ? ' target="_blank" rel="noopener"' : '';
    return 'href="' + href(o.href) + '"' + tab;
  }

  function megaItem(item) {
    var badge = item.badge ? '<span class="site-nav__mega-badge">' + item.badge + '</span>' : '';
    return '<a ' + linkAttrs(item) + ' class="site-nav__mega-item">' +
        '<span class="site-nav__mega-icon icon--' + (item.color || 'purple') + '">' + getIcon(item.key) + '</span>' +
        '<span class="site-nav__mega-text">' +
          '<span class="site-nav__mega-title">' + item.navTitle + badge + '</span>' +
          '<span class="site-nav__mega-desc">' + item.desc + '</span>' +
        '</span>' +
      '</a>';
  }

  function megaFoot(items) {
    if (!items || !items.length) return '';
    var html = items.map(function (it) {
      return '<a ' + linkAttrs(it) + ' class="site-nav__mega-foot-item">' +
          '<span class="site-nav__mega-foot-icon">' + getIcon(it.icon) + '</span>' +
          '<span class="site-nav__mega-text">' +
            '<span class="site-nav__mega-title">' + it.title + '</span>' +
            '<span class="site-nav__mega-desc">' + it.desc + '</span>' +
          '</span>' +
        '</a>';
    }).join('');
    return '<div class="site-nav__mega-foot">' + html + '</div>';
  }

  /* Render a section: label spanning full width, items split into cols. */
  function buildSection(section) {
    var numCols = section.cols || 1;
    var navItems = section.items.filter(function (i) { return i.showInNav !== false; });
    var perCol  = Math.ceil(navItems.length / numCols);
    var innerCols = '';
    for (var c = 0; c < numCols; c++) {
      var slice = navItems.slice(c * perCol, (c + 1) * perCol);
      innerCols += '<div class="site-nav__mega-list">' + slice.map(megaItem).join('') + '</div>';
    }
    var labelHtml = section.label
      ? '<div class="site-nav__mega-section-label">' + section.label + '</div>'
      : '';
    var gridClass = numCols > 1 ? ' site-nav__mega-section-grid--' + numCols : '';
    return '<div class="site-nav__mega-section">' +
        labelHtml +
        '<div class="site-nav__mega-section-grid' + gridClass + '">' + innerCols + '</div>' +
      '</div>';
  }

  function buildAside(menu) {
    var a = menu.aside || {};
    return '<div class="site-nav__mega-aside">' +
        (a.label ? '<div class="site-nav__mega-col-label">' + a.label + '</div>' : '') +
        (a.title ? '<div class="site-nav__mega-aside__title">' + a.title + '</div>' : '') +
        (a.desc  ? '<div class="site-nav__mega-aside__desc">'  + a.desc  + '</div>' : '') +
        megaFoot(menu.foot) +
      '</div>';
  }

  function buildMega(menu) {

    /* ── Sections-based layout ────────────────────────── */
    if (menu.sections) {
      var sectionsHtml = menu.sections.map(buildSection).join('');

      if (menu.layout === 'aside') {
        return '<div class="site-nav__mega site-nav__mega--aside">' +
            '<div class="site-nav__mega-inner">' +
              buildAside(menu) +
              '<div class="site-nav__mega-main">' + sectionsHtml + '</div>' +
            '</div>' +
          '</div>';
      }

      return '<div class="site-nav__mega site-nav__mega--wide">' +
          '<div class="site-nav__mega-inner">' +
            '<div class="site-nav__mega-main">' +
              '<div class="site-nav__mega-sections">' + sectionsHtml + '</div>' +
              megaFoot(menu.foot) +
            '</div>' +
          '</div>' +
        '</div>';
    }

    /* ── Legacy columns-based layout ─────────────────── */
    var cols = menu.columns.map(function (col) {
      var labelHtml = col.label
        ? '<div class="site-nav__mega-col-label">' + col.label + '</div>'
        : '';
      return '<div class="site-nav__mega-col">' +
          labelHtml +
          '<div class="site-nav__mega-list">' + col.items.map(megaItem).join('') + '</div>' +
        '</div>';
    }).join('');

    if (menu.layout === 'aside') {
      return '<div class="site-nav__mega site-nav__mega--aside">' +
          '<div class="site-nav__mega-inner">' +
            buildAside(menu) +
            '<div class="site-nav__mega-main"><div class="site-nav__mega-cols">' + cols + '</div></div>' +
          '</div>' +
        '</div>';
    }

    var wide = menu.rail ? '' : ' site-nav__mega--wide';
    return '<div class="site-nav__mega' + wide + '">' +
        '<div class="site-nav__mega-inner">' +
          '<div class="site-nav__mega-main">' +
            '<div class="site-nav__mega-cols">' + cols + '</div>' +
            megaFoot(menu.foot) +
          '</div>' +
        '</div>' +
      '</div>';
  }

  var MEGA_ORDER = ['products', 'suite'];

  function ctaButton(extraClass) {
    var c = NAV_CONFIG.cta;
    var attr = c.modal
      ? ' data-cta="' + c.modal + '"'
      : (c.newTab ? ' target="_blank" rel="noopener"' : '');
    return '<a href="' + href(c.href) + '" class="btn btn--primary' + (extraClass ? ' ' + extraClass : '') +
           '"' + attr + '>' + c.label + '</a>';
  }

  function buildHeader() {
    var dropdowns = MEGA_ORDER.map(function (key) {
      var menu = NAV_CONFIG.mega[key];
      if (!menu) return '';
      return '<li class="site-nav__dropdown" id="dd-' + key + '">' +
          '<button class="site-nav__dd-trigger" type="button" aria-expanded="false">' + menu.trigger + ' ' + CHEVRON + '</button>' +
          buildMega(menu) +
        '</li>';
    }).join('');

    var plain = NAV_CONFIG.links.map(function (l) {
      return '<li><a href="' + href(l.href) + '">' + l.label + '</a></li>';
    }).join('');

    return '' +
      '<nav class="site-nav" aria-label="Primary">' +
        '<div class="site-nav__inner">' +
          '<a href="' + href('index.html') + '" class="site-nav__logo" aria-label="BrainsMingle home">' + logoHtml('header') + '</a>' +
          '<ul class="site-nav__links" id="site-nav-links">' + dropdowns + plain + '</ul>' +
          '<div class="site-nav__right">' +
            themeToggle() +
            '<div class="site-nav__cta">' + ctaButton() + '</div>' +
            '<button class="site-nav__toggle" id="nav-toggle" type="button" aria-label="Menu" aria-expanded="false">' + MENU + '</button>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  function buildFooter() {
    var f = NAV_CONFIG.footer;

    var socials = f.social.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener" class="site-footer__social" aria-label="' + s.label + '">' +
             (SOCIAL_SVG[s.key] || '') + '</a>';
    }).join('');

    var featureLinks = NAV_CONFIG.mega.products.sections[0].items
      .filter(function (i) { return i.showInNav !== false; }).slice(0, 6).map(function (i) {
      return '<a href="' + href(i.href) + '">' + i.navTitle + '</a>';
    }).join('');

    var personaLinks = NAV_CONFIG.mega.products.sections[1].items.map(function (i) {
      return '<a href="' + href(i.href) + '">' + i.navTitle + '</a>';
    }).join('');

    var companyLinks = f.company.map(function (i) {
      return '<a href="' + href(i.href) + '">' + i.label + '</a>';
    }).join('');

    var legalLinks = f.legal.map(function (l) {
      return '<a href="' + href(l.href) + '">' + l.label + '</a>';
    }).join('');

    return '' +
      '<div class="site-footer__inner">' +
        '<div class="site-footer__grid">' +
          '<div>' +
            '<div class="site-footer__brand-name">' + logoHtml('footer') + '</div>' +
            '<p class="site-footer__tagline">' + f.tagline + '</p>' +
            '<div class="site-footer__socials">' + socials + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="site-footer__col-title">Products</div>' +
            '<div class="site-footer__col-links">' + featureLinks + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="site-footer__col-title">Built For</div>' +
            '<div class="site-footer__col-links">' + personaLinks + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="site-footer__col-title">Company</div>' +
            '<div class="site-footer__col-links">' + companyLinks + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="site-footer__bottom">' +
          '<span class="site-footer__copy">&copy; ' + new Date().getFullYear() + ' BrainsMingle. All rights reserved.</span>' +
          '<span class="site-footer__legal">' + legalLinks + '</span>' +
          '<a href="mailto:' + f.email + '" class="site-footer__email">' + f.email + '</a>' +
        '</div>' +
      '</div>';
  }

  function buildMobileCta() {
    return ctaButton('btn--lg');
  }

  /* All ten capabilities (unfiltered — Analytics + Branding included),
     compact chips using the short navTitle, 5 per row. */
  function buildModulesGrid() {
    var grid = document.getElementById('modules-grid');
    if (!grid) return;

    var items = NAV_CONFIG.mega.products.sections[0].items;

    grid.innerHTML = '<div class="cap-chips">' +
      items.map(function (i) {
        return '<a href="' + href(i.href) + '" class="cap-chip">' +
            '<span class="icon icon--' + i.color + '">' + getIcon(i.key) + '</span>' +
            '<span class="cap-chip__label">' + i.navTitle + '</span>' +
          '</a>';
      }).join('') +
    '</div>';

    var link = document.getElementById('modules-link');
    if (link) link.setAttribute('href', href('capabilities.html'));
  }

  /* Home B2C personas grid — reads the six "Built For" personas from
     NAV_CONFIG (products.sections[1]) so the cards are config-driven, not
     hardcoded. Each opens its /for- page in a new tab with a Learn more
     affordance, matching the Suite verticals grid. Self-skips off-home. */
  function buildPersonasGrid() {
    var grid = document.getElementById('personas-grid');
    if (!grid) return;

    var section = NAV_CONFIG.mega.products.sections[1];
    var items = (section && section.items) ? section.items : [];
    grid.innerHTML = items.map(function (i) {
      return '<a href="' + href(i.href) + '" target="_blank" rel="noopener" class="content-card content-card--action">' +
          '<div class="content-card__icon">' +
            '<span class="icon icon--' + i.color + '">' + getIcon(i.key) + '</span>' +
          '</div>' +
          '<div class="content-card__title">' + i.title + '</div>' +
          '<div class="content-card__desc">' + i.desc + '</div>' +
          '<span class="content-card__more">Learn more ' +
            '<span class="content-card__more-arrow">' + getIcon('arrowRightSm') + '</span>' +
          '</span>' +
        '</a>';
    }).join('');
  }

  /* Home B2B verticals grid — reuses the eight Suite verticals from config
     (flattenMenu('suite')) so the home cards stay in sync with the Suite
     hub. Mounts into #home-verticals-grid (distinct from the Suite page's
     own #verticals-grid). Opens each vertical in a new tab. */
  function buildHomeVerticalsGrid() {
    var grid = document.getElementById('home-verticals-grid');
    if (!grid) return;

    var items = flattenMenu('suite').filter(function (i) { return i.showInNav !== false; });
    grid.innerHTML = items.map(function (i) {
      return '<a href="' + href(i.href) + '" target="_blank" rel="noopener" class="content-card content-card--action">' +
          '<div class="content-card__icon">' +
            '<span class="icon icon--' + i.color + '">' + getIcon(i.key) + '</span>' +
          '</div>' +
          '<div class="content-card__title">' + i.title + '</div>' +
          '<div class="content-card__desc">' + i.desc + '</div>' +
          '<span class="content-card__more">Learn more ' +
            '<span class="content-card__more-arrow">' + getIcon('arrowRightSm') + '</span>' +
          '</span>' +
        '</a>';
    }).join('');
  }

  /* Hero capability strip — all ten, icon + navTitle, marquee-ready.
     List is duplicated so CSS can loop it seamlessly; the duplicate is
     aria-hidden so screen readers hear each capability once. */
  function buildCapabilityStrip() {
    var strip = document.getElementById('suite-hero-strip');
    if (!strip) return;

    var items = NAV_CONFIG.mega.products.sections[0].items.filter(function (i) { return i.showInNav; });
    var run = items.map(function (i) {
      return '<a href="' + href(i.href) + '" class="cap-strip__item">' +
          '<span class="icon icon--' + i.color + '">' + getIcon(i.key) + '</span>' +
          '<span class="cap-strip__label">' + i.navTitle + '</span>' +
        '</a>';
    }).join('');

    strip.innerHTML =
      '<div class="cap-strip__track">' +
        '<div class="cap-strip__run">' + run + '</div>' +
        '<div class="cap-strip__run" aria-hidden="true">' + run + '</div>' +
      '</div>';
  }

  function buildVerticalsGrid() {
    var grid = document.getElementById('verticals-grid');
    if (!grid) return;

    var items = flattenMenu('suite').filter(function (i) { return i.showInNav !== false; });
    grid.innerHTML = items.map(function (i) {
      return '<a href="' + href(i.href) + '" class="content-card content-card--action">' +
          '<div class="content-card__icon">' +
            '<span class="icon icon--' + i.color + '">' + getIcon(i.key) + '</span>' +
          '</div>' +
          '<div class="content-card__title">' + i.title + '</div>' +
          '<div class="content-card__desc">' + i.desc + '</div>' +
          '<span class="content-card__more">Learn more ' +
            '<span class="content-card__more-arrow">' + getIcon('arrowRightSm') + '</span>' +
          '</span>' +
        '</a>';
    }).join('');
  }

  /* Vertical capability tab buttons — a page declares six (or fewer)
     empty <button> shells, each with data-tab (panel wiring, left alone)
     and data-nav-key (config lookup). Icon + navTitle come from the
     products menu. Runs before injectIcons() so the injected data-icon
     spans get processed. */
  function buildVertTabs() {
    var btns = document.querySelectorAll('.vert-tabs__btn[data-nav-key]');
    if (!btns.length) return;
    var items = flattenMenu('products');
    btns.forEach(function (btn) {
      var item = items.filter(function (i) {
        return i.key === btn.getAttribute('data-nav-key');
      })[0];
      if (!item) return;
      btn.innerHTML = '<span data-icon="' + item.key + '"></span>' + item.navTitle;
    });
  }

  /* Deployment strip (S7). Renders into <section id="deploy-strip"></section>.
     Colour from <html data-page-color>. */
  function buildDeployStrip() {
    var target = document.getElementById('deploy-strip');
    if (!target) return;

    var accent = document.documentElement.getAttribute('data-page-color') || 'purple';
    target.className = 'vert-deploy vert--' + accent;

    var checks = [
      'Live Sessions &amp; Instant Rooms', 'Courses &amp; LMS', 'Community Spaces',
      'Speed Networking', '1-to-1 Consultations &amp; Booking',
      'Payments &amp; Revenue Dashboard', 'Analytics &amp; Member Insights',
      'Arabic / RTL Support', 'Forms &amp; Registration', 'Custom Domain &amp; Branding'
    ];

    var pillars = [
      { num: '01', title: 'Your Branded Home',
        desc: 'Custom domain, your logo, your colors. Your members never see BrainsMingle — they see you.' },
      { num: '02', title: 'Guided Onboarding',
        desc: 'We configure your communities, course structure, and session templates before launch — with you, not for you.' },
      { num: '03', title: 'Ongoing Support',
        desc: 'Dedicated support from a team that understands your market — not a global ticketing queue.' }
    ];

    var html = '<div class="container">';
    html += '<h2 class="heading-lg vert-deploy__headline">A Complete Deployment. Configured for You.</h2>';
    html += '<p class="vert-deploy__sub">We don\'t hand you a platform and leave. We build your ecosystem with you — then hand you the keys.</p>';
    html += '<div class="vert-deploy__checklist">';
    checks.forEach(function (c) {
      html += '<span class="vert-deploy__check"><span data-icon="check"></span> ' + c + '</span>';
    });
    html += '</div><div class="vert-deploy__pillars">';
    pillars.forEach(function (p) {
      html += '<div class="vert-deploy__pillar">' +
              '<div class="vert-deploy__pillar-num">' + p.num + '</div>' +
              '<div class="vert-deploy__pillar-title">' + p.title + '</div>' +
              '<div class="vert-deploy__pillar-desc">' + p.desc + '</div></div>';
    });
    html += '</div></div>';

    target.innerHTML = html;
  }

  /* Partner Opportunity block (S8). Renders into <section id="partner-block">.
     Card icons are fixed accent colours by design. */
  function buildPartnerBlock() {
    var el = document.getElementById('partner-block');
    if (!el) return;

    el.className = 'vert-partner';
    el.innerHTML =
      '<div class="vert-partner__bg"></div>' +
      '<div class="container vert-partner__inner">' +
        '<div class="vert-partner__copy">' +
          '<div class="vert-partner__eyebrow">' + getIcon('sponsorship') + ' Partner Opportunity</div>' +
          '<h2 class="vert-partner__headline">Your Network.<br>Your Revenue.</h2>' +
          '<p class="vert-partner__body">' +
            'This isn\'t just your branded ecosystem — it\'s a revenue channel. ' +
            'Introduce BrainsMingle to organizations in your network. We deploy it. ' +
            'You earn revenue share on every activation.' +
          '</p>' +
          '<button class="btn btn--primary btn--lg" onclick="openDemoModal();return false;">' +
            'Book a Demo ' + getIcon('arrowRight') +
          '</button>' +
        '</div>' +
        '<div class="vert-partner__cards">' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--cyan">' + getIcon('community') + '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">Introduce Organizations</div>' +
              '<div class="vert-partner__card-desc">You already know organizations that need a professional ecosystem. Make the introduction, we take it from there.</div>' +
            '</div>' +
          '</div>' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--purple">' + getIcon('branding') + '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">We Handle Everything</div>' +
              '<div class="vert-partner__card-desc">From configuration to launch to ongoing support, we deploy, onboard, and manage. Zero lift on your side.</div>' +
            '</div>' +
          '</div>' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--amber">' + getIcon('payment') + '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">Earn on Every Activation</div>' +
              '<div class="vert-partner__card-desc">Revenue share on every organization you bring in. The bigger your network, the bigger your upside.</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* Unified closing CTA (S9) — mounts on #get-started, always the last
     block before the footer. Content resolves from the page item's
     `getStarted` config (matched via the hero's data-page), so pages carry
     only <section id="get-started"></section>. When getStarted.demo is true
     (B2B Suite), the card button opens the demo modal and reads "Book a
     Demo"; otherwise it links to signup as "Get Started for Free". Falls
     back to generic B2C copy for any page without a getStarted entry, and
     still honors data-* overrides for one-off pages. */
  /* Central CTA copy for standalone pages that are not menu items
     (hub, about, etc.). resolvePageItem() falls back to this map so their
     #get-started resolves from config like every menu-item page. Pages with
     no entry and no #get-started mount simply skip the CTA. */
  var PAGE_CTA = {
    'capabilities.html': {
      getStarted: {
        headline: 'Everything BrainsMingle does, in one account.',
        sub:      'Consultations, courses, sessions, community, events, and payments, all connected, all yours.',
        points:   ['One platform instead of six tools', 'The network is part of the product', 'Free to start, no card required'],
        cardSub:  'Create your account and explore every capability today.'
      }
    },
    'suite/index.html': {
      getStarted: {
        headline: 'Run your organization on your own platform.',
        sub:      'One branded ecosystem for your members, your content, and your events, served from your own domain.',
        points:   ['Your brand, your domain, your data', 'Every capability, configured for you', 'Launch in days, not months'],
        cardSub:  'Get a walkthrough configured for how your organization works.',
        demo:     true
      }
    },
    'about.html': {
      getStarted: {
        headline: 'Come build the platform with us.',
        sub:      'New professionals arrive every week to teach, consult, and connect. Add your name to them.',
        points:   ['Meet the right people face to face', 'Get paid for what you know', 'Free to join, no card required'],
        cardSub:  'Create your account and join the network today.'
      }
    }
  };

  function resolvePageItem() {
    var hero = document.querySelector('[data-page]');
    if (!hero) return null;
    var page = hero.getAttribute('data-page');
    var groups = ['products', 'suite'];
    for (var g = 0; g < groups.length; g++) {
      var hit = flattenMenu(groups[g]).filter(function (i) { return i.href === page; })[0];
      if (hit) return hit;
    }
    if (PAGE_CTA[page]) return PAGE_CTA[page];
    return null;
  }

  function buildGetStarted() {
    var el = document.getElementById('get-started');
    if (!el) return;

    var item = resolvePageItem();
    var cfg  = (item && item.getStarted) ? item.getStarted : {};
    var demo = cfg.demo === true;

    var eyebrow  = el.getAttribute('data-eyebrow')  || 'Get started';
    var headline = el.getAttribute('data-headline') || cfg.headline ||
      'Your whole professional world, in one place';
    var sub = el.getAttribute('data-sub') || cfg.sub ||
      'Meet the right people, share what you know, and get paid for it, all from one account.';

    var pointsAttr = el.getAttribute('data-points');
    var points = pointsAttr ? pointsAttr.split('|') : (cfg.points || [
      'Network, host, teach, and consult in one place',
      'Get paid for your time and expertise',
      'Free to join, no card required'
    ]);
    var pointsHtml = points.map(function (p) {
      return '<li><span data-icon="check"></span> ' + p + '</li>';
    }).join('');

    // Card copy. demo mode flips defaults to the demo flavor.
    var cardTitle = el.getAttribute('data-card-title') || cfg.cardTitle ||
      (demo ? 'See it live' : 'Join for free');
    var cardSub = el.getAttribute('data-card-sub') || cfg.cardSub ||
      (demo ? 'Get a walkthrough configured for how your organization works.'
            : 'Create your account in minutes and start connecting today.');
    var cardCta = el.getAttribute('data-card-cta') || cfg.cardCta ||
      (demo ? 'Book a Demo' : 'Get Started for Free');
    var cardHref = el.getAttribute('data-card-href') || cfg.cardHref ||
      'https://brainsmingle.com/auth/login';

    // Button: demo opens the modal; free links to signup in a new tab.
    var buttonHtml = demo
      ? '<button class="btn btn--primary btn--lg" onclick="openDemoModal();return false;">' +
          cardCta + ' ' + getIcon('arrowRight') + '</button>'
      : '<a class="btn btn--primary btn--lg" href="' + cardHref + '" target="_blank" rel="noopener">' +
          cardCta + ' ' + getIcon('arrowRight') + '</a>';

    el.className = 'cta-block cta-block--split';
    el.innerHTML =
      '<div class="container">' +
        '<div class="cta-split">' +
          '<div class="cta-split__copy">' +
            '<span class="eyebrow">' + eyebrow + '</span>' +
            '<h2 class="cta-block__headline">' + headline + '</h2>' +
            '<p class="cta-block__sub">' + sub + '</p>' +
            '<ul class="cta-split__points">' + pointsHtml + '</ul>' +
          '</div>' +
          '<div class="cta-split__card">' +
            '<div class="cta-split__card-icon"><span data-icon="brandMark"></span></div>' +
            '<div class="cta-split__card-title">' + cardTitle + '</div>' +
            '<p class="cta-split__card-sub">' + cardSub + '</p>' +
            buttonHtml +
          '</div>' +
        '</div>' +
      '</div>';
  }

  /* Related capabilities strip (feature pages) — mounts on
     #related-capabilities, sits directly above the CTA. Each entry's icon
     and title come from the RESOLVED sibling product item (single source of
     truth); only the relational `desc` is authored per page in config. */
  function buildRelatedCapabilities() {
    var el = document.getElementById('related-capabilities');
    if (!el) return;
    var item = resolvePageItem();
    if (!item || !item.related || !item.related.length) return;

    var cardsHtml = item.related.map(function (r) {
      var sib = flattenMenu('products').filter(function (i) { return i.href === r.href; })[0];
      if (!sib) return '';
      return '<a href="' + r.href + '" class="sol-related__card">' +
        '<div class="sol-related__card-icon"><span class="icon icon--' + sib.color + '">' +
          getIcon(sib.key) + '</span></div>' +
        '<div class="sol-related__card-title">' + sib.title + '</div>' +
        '<div class="sol-related__card-desc">' + r.desc + '</div>' +
        '<span class="sol-related__card-link">Explore <span data-icon="arrowRightSm"></span></span>' +
      '</a>';
    }).join('');

    el.className = 'sol-related';
    el.innerHTML =
      '<div class="container">' +
        '<h2 class="sol-related__headline">Related capabilities</h2>' +
        '<div class="sol-related__grid">' + cardsHtml + '</div>' +
      '</div>';
  }

  /* Giant capability tabs — click delegation for the vertical pages. */
  /* B2C fork guard band. Content lives on the B2C item's `fork` config;
     the band color and icon are RESOLVED from the Suite sibling item
     (matched by fork.target), so the Suite arrange stays the single
     source of truth. Pages carry only <section id="b2c-fork"></section>. */
  function buildB2CFork() {
    var mount = document.getElementById('b2c-fork');
    if (!mount) return;
    var hero = document.querySelector('.vert-hero[data-page]');
    if (!hero) return;
    var page = hero.getAttribute('data-page');
    var item = flattenMenu('products').filter(function (i) { return i.href === page; })[0];
    if (!item || !item.fork) return;
    var sib = flattenMenu('suite').filter(function (i) { return i.href === item.fork.target; })[0];
    if (!sib) return;
    mount.className = 'b2c-fork b2c-fork--' + sib.color;
    mount.innerHTML =
      '<div class="container b2c-fork__inner">' +
        '<div>' +
          '<div class="b2c-fork__eyebrow"><span data-icon="' + sib.key + '"></span> BrainsMingle Suite</div>' +
          '<h2 class="b2c-fork__title">' + item.fork.title + '</h2>' +
          '<p class="b2c-fork__text">' + item.fork.text + '</p>' +
        '</div>' +
        '<div class="b2c-fork__action">' +
          '<a class="btn btn--primary btn--lg" href="' + item.fork.target + '">' + item.fork.cta + ' <span data-icon="arrowRight"></span></a>' +
        '</div>' +
      '</div>';
  }

  function wireVertTabs() {
    document.querySelectorAll('.vert-tabs__bar').forEach(function (bar) {
      bar.addEventListener('click', function (e) {
        var btn = e.target.closest('.vert-tabs__btn');
        if (!btn) return;
        var key = btn.getAttribute('data-tab');
        bar.querySelectorAll('.vert-tabs__btn').forEach(function (b) {
          b.classList.remove('is-active');
        });
        btn.classList.add('is-active');
        var tabs = btn.closest('.vert-tabs');
        if (!tabs) return;
        tabs.querySelectorAll('.vert-tabs__panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === key);
        });
      });
    });
  }

  /* Capabilities page (capabilities.html) — each .cap-row shows one product.
     The row's colour is read from that product's config entry (keyed by the
     tag-icon's data-icon), so colours stay in sync with NAV_CONFIG. The row
     order and bespoke copy/pills/illustration stay in the HTML; only the
     cap--{color} modifier is applied here. Icons render via injectIcons. */
  function buildCapabilityRows() {
    var rows = document.querySelectorAll('.cap-row');
    if (!rows.length) return;
    var products = flattenMenu('products');
    rows.forEach(function (row) {
      var iconEl = row.querySelector('.cap-row__tag-icon[data-icon]');
      if (!iconEl) return;
      var key = iconEl.getAttribute('data-icon');
      var item = products.filter(function (i) { return i.key === key; })[0];
      if (!item) return;
      /* clear any hardcoded cap-- modifier, then apply the config colour */
      row.className = row.className.replace(/\bcap--\w+\b/g, '').replace(/\s+/g, ' ').trim();
      row.classList.add('cap--' + item.color);
    });
  }

  /* ── 4. WIRING ──────────────────────────────────────────── */

  function wire(headerSlot) {
    var toggle = headerSlot.querySelector('#nav-toggle');
    var links  = headerSlot.querySelector('#site-nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    var dropdowns = headerSlot.querySelectorAll('.site-nav__dropdown');
    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector('.site-nav__dd-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          var open = dd.classList.toggle('is-open');
          trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
          dropdowns.forEach(function (other) {
            if (other !== dd) {
              other.classList.remove('is-open');
              var t = other.querySelector('.site-nav__dd-trigger');
              if (t) t.setAttribute('aria-expanded', 'false');
            }
          });
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-nav__dropdown')) {
        dropdowns.forEach(function (dd) {
          dd.classList.remove('is-open');
          var t = dd.querySelector('.site-nav__dd-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });

    var themeBtn = headerSlot.querySelector('#theme-toggle');
    if (themeBtn && typeof toggleTheme === 'function') {
      themeBtn.addEventListener('click', toggleTheme);
    }
  }

  function wireCtas(scope) {
    scope.querySelectorAll('[data-cta]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var id = el.getAttribute('data-cta');
        if (typeof openModal === 'function') { e.preventDefault(); openModal(id); }
        else if (el.getAttribute('href') === '#') { e.preventDefault(); }
      });
    });
  }

  /* ── 5. MOUNT ───────────────────────────────────────────── */

  function mount() {
    var header = document.getElementById('site-header');
    if (!header) {
      header = document.createElement('div');
      header.id = 'site-header';
      document.body.insertBefore(header, document.body.firstChild);
    }
    header.innerHTML = buildHeader();

    var footer = document.getElementById('site-footer');
    if (!footer) {
      footer = document.createElement('footer');
      footer.id = 'site-footer';
      document.body.appendChild(footer);
    }
    footer.className = 'site-footer';
    footer.innerHTML = buildFooter();

    var mobile = document.getElementById('site-mobile-cta');
    if (!mobile) {
      mobile = document.createElement('div');
      mobile.id = 'site-mobile-cta';
      document.body.appendChild(mobile);
    }
    mobile.className = 'mobile-cta';
    mobile.innerHTML = buildMobileCta();

    wire(header);

    updateLogos();
    document.addEventListener('themechange', updateLogos);

    buildModulesGrid();
    buildCapabilityStrip();
    buildPersonasGrid();
    buildHomeVerticalsGrid();
    buildVerticalsGrid();
    buildVertTabs();
    wireVertTabs();
    buildPartnerBlock();
    buildRelatedCapabilities();
    buildGetStarted();
    buildB2CFork();
    buildCapabilityRows();

    var vertTag = document.querySelector('[data-vertical]');
    if (vertTag) {
      var vKey = vertTag.getAttribute('data-vertical');
      var match = flattenMenu('suite').filter(function (i) { return i.key === vKey; })[0];
      if (match) {
        vertTag.innerHTML = '<span class="icon icon--' + match.color + '">' + getIcon(match.key) + '</span> ' + match.title;
      }
    }

    /* hydrateHero publishes <html data-page-color>; buildDeployStrip reads it,
       and injectIcons must run last to render all injected data-icon spans. */
    hydrateHero();
    buildDeployStrip();
    injectIcons();

    /* Wire every [data-cta] on the page once — header, mobile, in-page
       buttons, and dynamically built block CTAs — after all builders run.
       Single document-wide pass avoids double-binding any one element. */
    wireCtas(document);
  }

  function injectIcons(scope) {
    var root = scope || document;
    if (typeof SUITE_ICONS !== 'undefined') {
      root.querySelectorAll('[data-icon]').forEach(function (el) {
        if (el.firstChild) return;
        var k = el.getAttribute('data-icon');
        if (SUITE_ICONS[k]) el.innerHTML = SUITE_ICONS[k];
      });
    }
    if (typeof SUITE_ILLUSTRATIONS !== 'undefined') {
      root.querySelectorAll('[data-illus]').forEach(function (el) {
        if (el.firstChild) return;
        var k = el.getAttribute('data-illus');
        if (SUITE_ILLUSTRATIONS[k]) el.innerHTML = SUITE_ILLUSTRATIONS[k];
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
