/* ============================================================
   BrainsMingle — Shared Platform Figures
   stats.js · Single source of truth for the numbers shown in
   the metrics bars and banners across the site. Edit a figure
   once here and it changes on every page that shows it.

   ── Load order (body, AFTER icons.js) ──────────────────────
     <script src="assets/js/icons.js"></script>   // must precede
     <script src="assets/js/illustrations.js"></script>
     <script src="assets/js/modals.js"></script>
     <script src="assets/js/nav.js"></script>
     <script src="assets/js/stats.js"></script>    // this file

   ── Usage on any page ──────────────────────────────────────
     Suite metrics bar (existing markup, reuses metrics-bar__*):
       <div class="metrics-bar__stats" data-stats="suite"></div>

     About / Home banner (lighter, stats-banner__* variant):
       <div data-stats="about" data-variant="banner"></div>

   ── How selection works (menu behaviour, like NAV_CONFIG) ──
     The mount's data-stats value names the SURFACE:
       data-stats="home"  -> reads showInHome
       data-stats="suite" -> reads showInSuite
       data-stats="about" -> reads showInAbout
     Every figure whose matching flag is true renders, sorted by
     `order`. Add a surface later = one new flag + one new mount,
     no code change here.

     Optional per-mount override (escape hatch for a bespoke set
     or order on ONE page): data-keys="connections,countries".
     When present it wins over the flags for that mount only.

   ── data-variant ───────────────────────────────────────────
     "bar"    (default) -> metrics-bar__* markup + dividers.
                           Matches the existing suite CSS 1:1.
     "banner"           -> stats-banner__* markup (lighter).
                           Needs the stats-banner CSS block.
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     THE REGISTRY — edit numbers here, nowhere else.
     value : the display string, exactly as it should read
     raw   : integer the count-up animates toward (optional;
             omit to render `value` statically, no animation)
     label : sits under the number
     title : long title (for richer surfaces / tooltips)
     description : one sentence (for richer surfaces / tooltips)
     color : purple | cyan | pink | amber
     icon  : key into SUITE_ICONS (icons.js)
     order : global sort key (gaps of 10 leave room to insert)
     showInHome / showInSuite / showInAbout : visibility flags
       (a missing flag counts as false — opt in per surface)
     ------------------------------------------------------------ */
  var STATS_CONFIG = {

    professionals: {
      value: '15K+', raw: 15000, order: 10,
      label: 'Professionals',
      title: 'Experts sharing what they know',
      description: 'People on BrainsMingle offering their expertise to others.',
      color: 'purple', icon: 'user',
      showInHome: true, showInSuite: true, showInAbout: true
    },

    connections: {
      value: '30K+', raw: 30000, order: 20,
      label: 'Connections Made',
      title: 'Real connections, face to face',
      description: 'Introductions that began as an actual conversation.',
      color: 'purple', icon: 'link',
      showInHome: true, showInSuite: true, showInAbout: true
    },

    sessionMinutes: {
      value: '300K+', raw: 300000, order: 30,
      label: 'Session Minutes',
      title: 'Minutes spent meeting live',
      description: 'Time professionals have spent together on video.',
      color: 'purple', icon: 'video',
      showInHome: true, showInSuite: true, showInAbout: true
    },

    visits: {
      value: '75K+', raw: 75000, order: 35,
      label: 'Member Visits',
      title: 'Logged-in member visits',
      description: 'Times members have signed in to pick up where they left off.',
      color: 'purple', icon: 'trendingUp',
      showInHome: true, showInSuite: true, showInAbout: true
    },

    sessionsHosted: {
      value: '5,000+', raw: 5000, order: 40,
      label: 'Sessions Hosted',
      title: 'Live sessions run',
      description: 'Talks, workshops, and meetups hosted on the platform.',
      color: 'purple', icon: 'liveSession',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    consultations: {
      value: '3,500+', raw: 3500, order: 50,
      label: 'Consultations Booked',
      title: 'One to one consultations',
      description: 'Paid expert sessions booked directly through BrainsMingle.',
      color: 'purple', icon: 'consultation',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    courses: {
      value: '400+', raw: 400, order: 60,
      label: 'Courses Published',
      title: 'Courses created by experts',
      description: 'Structured learning built and sold by professionals.',
      color: 'purple', icon: 'course',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    earningsPaid: {
      value: '$250K+', raw: 250000, order: 70,
      label: 'Paid to Experts',
      title: 'Earnings paid out',
      description: 'Money professionals have earned from their expertise.',
      color: 'purple', icon: 'dollarSign',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    communities: {
      value: '100+', raw: 100, order: 80,
      label: 'Active Communities',
      title: 'Communities built on BrainsMingle',
      description: 'Groups gathering around a shared profession or interest.',
      color: 'purple', icon: 'community',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    events: {
      value: '600+', raw: 600, order: 90,
      label: 'Events Run',
      title: 'Events hosted',
      description: 'Ticketed and free events organized on the platform.',
      color: 'purple', icon: 'event',
      showInHome: false, showInSuite: false, showInAbout: false
    },

    countries: {
      value: '90+', raw: 90, order: 100,
      label: 'Countries',
      title: 'Countries reached',
      description: 'Where BrainsMingle professionals log in from.',
      color: 'purple', icon: 'globe',
      showInHome: true, showInSuite: false, showInAbout: true
    },

    languages: {
      value: '6', raw: 6, order: 110,
      label: 'Languages',
      title: 'Languages supported',
      description: 'Interface languages available, including full RTL.',
      color: 'purple', icon: 'language',
      showInHome: false, showInSuite: true, showInAbout: false
    },

    organizations: {
      value: '40+', raw: 40, order: 120,
      label: 'Organizations on Suite',
      title: 'Brands running on Suite',
      description: 'Organizations running their own platform on BrainsMingle Suite.',
      color: 'purple', icon: 'branding',
      showInHome: false, showInSuite: false, showInAbout: false
    }

  };

  /* ------------------------------------------------------------
     Icon lookup — same contract as nav.js, reads global
     SUITE_ICONS defined in icons.js.
     ------------------------------------------------------------ */
  function getIcon(key) {
    return (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS[key]) ? SUITE_ICONS[key] : '';
  }

  /* ------------------------------------------------------------
     Resolve which figures a mount should show.
     - data-keys override, if present, wins (explicit, ordered).
     - otherwise filter by the surface's showIn* flag, sort by order.
     Returns an array of { key, ...figure }.
     ------------------------------------------------------------ */
  function resolveStats(mount) {
    var keysAttr = mount.getAttribute('data-keys');

    if (keysAttr) {
      return keysAttr.split(',')
        .map(function (k) { return k.trim(); })
        .filter(function (k) { return STATS_CONFIG[k]; })
        .map(function (k) { return extend({ key: k }, STATS_CONFIG[k]); });
    }

    var surface = (mount.getAttribute('data-stats') || '').trim();
    if (!surface) return [];
    var flag = 'showIn' + surface.charAt(0).toUpperCase() + surface.slice(1);

    return Object.keys(STATS_CONFIG)
      .filter(function (k) { return STATS_CONFIG[k][flag]; })
      .map(function (k) { return extend({ key: k }, STATS_CONFIG[k]); })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }

  /* Tiny Object.assign stand-in (kept ES5 to match the codebase). */
  function extend(target, src) {
    for (var k in src) { if (src.hasOwnProperty(k)) target[k] = src[k]; }
    return target;
  }

  /* ------------------------------------------------------------
     Markup builders — one per variant.
     Each num element carries data-raw / data-value so the
     count-up can find its target and its exact final string.
     ------------------------------------------------------------ */
  function buildBar(stats) {
    var html = '';
    stats.forEach(function (s, i) {
      if (i > 0) html += '<div class="metrics-bar__divider"></div>';
      html +=
        '<div class="metrics-bar__stat">' +
          '<div class="metrics-bar__icon">' +
            '<span class="icon icon--' + s.color + '">' + getIcon(s.icon) + '</span>' +
          '</div>' +
          '<div class="metrics-bar__num" data-raw="' + (s.raw != null ? s.raw : '') + '" data-value="' + s.value + '">' + s.value + '</div>' +
          '<div class="metrics-bar__label">' + s.label + '</div>' +
        '</div>';
    });
    return html;
  }

  function buildBanner(stats) {
    var html = '';
    stats.forEach(function (s) {
      html +=
        '<div class="stats-banner__item">' +
          '<span class="stats-banner__icon icon icon--' + s.color + '">' + getIcon(s.icon) + '</span>' +
          '<div class="stats-banner__num" data-raw="' + (s.raw != null ? s.raw : '') + '" data-value="' + s.value + '">' + s.value + '</div>' +
          '<div class="stats-banner__label">' + s.label + '</div>' +
        '</div>';
    });
    return html;
  }

  /* ------------------------------------------------------------
     Count-up. Animates the numeric part while preserving the
     authored formatting ($, K/M, +, thousands separators), then
     settles on the exact `value` string on the final frame.
     ------------------------------------------------------------ */
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DURATION = 1400;

  function parseFormat(value) {
    // "$250K+" -> { prefix:"$", unit:"K", suffix:"+", divisor:1000 }
    var m = String(value).trim().match(/^(\D*?)([\d.,]+)\s*([kKmM]?)(\D*)$/);
    if (!m) return null;
    var unit = m[3].toUpperCase();
    return {
      prefix: m[1] || '',
      suffix: m[4] || '',
      unit: unit,
      divisor: unit === 'M' ? 1e6 : (unit === 'K' ? 1e3 : 1)
    };
  }

  function frame(n, fmt) {
    var core = fmt.unit ? String(Math.round(n)) : Math.round(n).toLocaleString('en-US');
    return fmt.prefix + core + fmt.unit + fmt.suffix;
  }

  function countUp(el) {
    var raw = parseFloat(el.getAttribute('data-raw'));
    var value = el.getAttribute('data-value');
    var fmt = value ? parseFormat(value) : null;

    if (REDUCED || !raw || !fmt) { el.textContent = value; return; }

    var target = raw / fmt.divisor;
    var start = null;
    el.textContent = frame(0, fmt);            // begin at zero, no flash of final

    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / DURATION, 1);
      var eased = 1 - Math.pow(1 - p, 3);       // easeOutCubic
      if (p < 1) {
        el.textContent = frame(target * eased, fmt);
        requestAnimationFrame(tick);
      } else {
        el.textContent = value;                 // exact authored string
      }
    }
    requestAnimationFrame(tick);
  }

  /* Run the count-up for a mount when it scrolls into view (once). */
  function armCountUp(mount) {
    var nums = mount.querySelectorAll('.metrics-bar__num[data-raw], .stats-banner__num[data-raw]');
    if (!nums.length) return;

    if (REDUCED || !('IntersectionObserver' in window)) {
      nums.forEach(countUp);
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          nums.forEach(countUp);
          obs.disconnect();
        }
      });
    }, { threshold: 0.35 });

    io.observe(mount);
  }

  /* ------------------------------------------------------------
     Hydrate every [data-stats] mount in scope. Idempotent —
     clears the mount before injecting, safe to call again.
     ------------------------------------------------------------ */
  function hydrateStats(scope) {
    var root = scope || document;
    var mounts = root.querySelectorAll('[data-stats]');

    mounts.forEach(function (mount) {
      var stats = resolveStats(mount);
      if (!stats.length) { mount.innerHTML = ''; return; }

      var variant = (mount.getAttribute('data-variant') || 'bar').trim();
      mount.innerHTML = variant === 'banner' ? buildBanner(stats) : buildBar(stats);

      armCountUp(mount);
    });
  }

  /* Expose for pages that inject mounts dynamically. */
  window.hydrateStats = hydrateStats;

  /* Auto-init. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { hydrateStats(); });
  } else {
    hydrateStats();
  }

})();
