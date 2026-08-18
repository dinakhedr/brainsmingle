/* ============================================================
   BrainsMingle — Featured Experts & Communities
   featured.js · Single source of truth for the featured people
   and communities shown on the homepage (and any surface that
   mounts them). Edit an entry here and it updates everywhere
   that entry's surface flag is on.

   ── Load order (body, AFTER icons.js) ──────────────────────
     <script src="assets/js/icons.js"></script>   // must precede
     <script src="assets/js/illustrations.js"></script>
     <script src="assets/js/modals.js"></script>
     <script src="assets/js/nav.js"></script>
     <script src="assets/js/stats.js"></script>
     <script src="assets/js/featured.js"></script> // this file

   ── Usage on any page ──────────────────────────────────────
     Experts strip:
       <div data-featured="experts"></div>
     Communities strip:
       <div data-featured="communities"></div>

   ── How selection works (like stats.js) ────────────────────
     The mount's data-featured value names the SET:
       data-featured="experts"     -> reads EXPERTS registry
       data-featured="communities" -> reads COMMUNITIES registry
     Every entry whose showInHome flag is true renders, sorted
     by `order`. Optional per-mount override:
       data-keys="ameer,sara"      -> that exact set, that order.

   ── Links & images ─────────────────────────────────────────
     href  : clean vanity path appended to the site root
             ("ameer" -> https://brainsmingle.com/ameer,
              "arab-iot-community" -> .../spaces/arab-iot-community)
     image : filename only; the folder is resolved per set
             (experts -> assets/images/featured/experts/<file>
              communities -> .../featured/communities/<file>)
   ============================================================ */

(function () {
  'use strict';

  /* Live product root — where the vanity profile/space links point. */
  var SITE_ROOT = 'https://brainsmingle.com/';

  /* Local asset prefix. Mirrors nav.js: '../' on /suite or /blog
     pages, '' at the site root, so image paths resolve on every
     surface that mounts a strip without hand-matching per page. */
  var ROOT = (function () {
    var p = window.location.pathname;
    return (p.indexOf('/blog/') !== -1 || p.indexOf('/suite/') !== -1) ? '../' : '';
  })();

  var IMG_BASE = ROOT + 'assets/featured/';

  var PATHS = {
    experts:     { link: SITE_ROOT,            img: IMG_BASE + 'experts/' },
    communities: { link: SITE_ROOT + 'spaces/', img: IMG_BASE + 'communities/' }
  };

  /* ------------------------------------------------------------
     THE REGISTRIES — edit entries here, nowhere else.
     name      : display name
     title     : expert's title / role            (experts only)
     category  : community category / topic        (communities only)
     image     : filename inside the set's image folder
     href      : vanity slug appended to the set's link base
     order     : sort key (gaps of 10 leave room to insert)
     showInHome: render on the home surface
     ------------------------------------------------------------ */
  var EXPERTS = {

    ameer: {
      name: 'Expert Name', title: 'Executive Chairman',
      image: '1.png', href: 'expert-2', order: 10,
      showInHome: true
    },

    expert2: {
      name: 'Expert Name', title: 'Title / Expertise',
      image: '2.png', href: 'expert-2', order: 20,
      showInHome: true
    },

    expert3: {
      name: 'Expert Name', title: 'Title / Expertise',
      image: '3.png', href: 'expert-3', order: 30,
      showInHome: true
    },

    expert4: {
      name: 'Expert Name', title: 'Title / Expertise',
      image: '4.png', href: 'expert-4', order: 40,
      showInHome: true
    },

    expert5: {
      name: 'Expert Name', title: 'Title / Expertise',
      image: '5.png', href: 'expert-5', order: 50,
      showInHome: true
    },

    expert6: {
      name: 'Expert Name', title: 'Title / Expertise',
      image: '6.png', href: 'expert-6', order: 60,
      showInHome: true
    }

  };

  var COMMUNITIES = {

    arabIot: {
       name: 'Community Name', category: 'Category',
      image: '1.png', href: 'community-1', order: 10,
      showInHome: true
    },

    community2: {
      name: 'Community Name', category: 'Category',
      image: '2.png', href: 'community-2', order: 20,
      showInHome: true
    },

    community3: {
      name: 'Community Name', category: 'Category',
      image: '3.png', href: 'community-3', order: 30,
      showInHome: true
    },

    community4: {
      name: 'Community Name', category: 'Category',
      image: '4.png', href: 'community-4', order: 40,
      showInHome: true
    },

    community5: {
      name: 'Community Name', category: 'Category',
      image: '5.png', href: 'community-5', order: 50,
      showInHome: true
    }

  };

  var REGISTRIES = { experts: EXPERTS, communities: COMMUNITIES };

  /* ------------------------------------------------------------
     Resolve which entries a mount should show.
     - data-keys override, if present, wins (explicit, ordered).
     - otherwise filter by showInHome, sort by order.
     Returns an array of { key, ...entry }.
     ------------------------------------------------------------ */
  function resolveFeatured(mount) {
    var set = (mount.getAttribute('data-featured') || '').trim();
    var registry = REGISTRIES[set];
    if (!registry) return { set: set, items: [] };

    var keysAttr = mount.getAttribute('data-keys');

    var items;
    if (keysAttr) {
      items = keysAttr.split(',')
        .map(function (k) { return k.trim(); })
        .filter(function (k) { return registry[k]; })
        .map(function (k) { return extend({ key: k }, registry[k]); });
    } else {
      items = Object.keys(registry)
        .filter(function (k) { return registry[k].showInHome; })
        .map(function (k) { return extend({ key: k }, registry[k]); })
        .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
    }

    return { set: set, items: items };
  }

  /* Tiny Object.assign stand-in (ES5, matches the codebase). */
  function extend(target, src) {
    for (var k in src) { if (src.hasOwnProperty(k)) target[k] = src[k]; }
    return target;
  }

  /* ------------------------------------------------------------
     Markup builders — one per set. Both render a card with an
     avatar image, a name, and a sub-line (title / category).
     ------------------------------------------------------------ */
  function buildExperts(items) {
    var base = PATHS.experts;
    return items.map(function (e) {
      return '' +
        '<a class="featured-portrait" href="' + base.link + e.href + '" target="_blank" rel="noopener">' +
          '<img class="featured-portrait__img" src="' + base.img + e.image + '" alt="' + e.name + '" width="300" height="400" loading="lazy">' +
          '<div class="featured-portrait__scrim"></div>' +
          '<div class="featured-portrait__meta">' +
            '<div class="featured-portrait__name">' + e.name + '</div>' +
            '<div class="featured-portrait__title">' + e.title + '</div>' +
          '</div>' +
        '</a>';
    }).join('');
  }

  function buildCommunities(items) {
    var base = PATHS.communities;
    return items.map(function (c) {
      return '' +
        '<a class="featured-card featured-card--community" href="' + base.link + c.href + '" target="_blank" rel="noopener">' +
          '<div class="featured-card__thumb">' +
            '<img src="' + base.img + c.image + '" alt="' + c.name + '" width="120" height="120" loading="lazy">' +
          '</div>' +
          '<div class="featured-card__name">' + c.name + '</div>' +
          '<div class="featured-card__sub">' + c.category + '</div>' +
        '</a>';
    }).join('');
  }

  var BUILDERS = { experts: buildExperts, communities: buildCommunities };

  /* ------------------------------------------------------------
     Hydrate every [data-featured] mount in scope. Idempotent —
     clears the mount before injecting, safe to call again.
     Wraps the cards in a scroll track so the strip scrolls
     horizontally on narrow screens and lays out as a row/grid
     on wider ones (styling lives in CSS).
     ------------------------------------------------------------ */
  function hydrateFeatured(scope) {
    var root = scope || document;
    var mounts = root.querySelectorAll('[data-featured]');

    mounts.forEach(function (mount) {
      var res = resolveFeatured(mount);
      var build = BUILDERS[res.set];
      if (!build || !res.items.length) { mount.innerHTML = ''; return; }

      mount.innerHTML =
        '<div class="featured-strip featured-strip--' + res.set + '">' +
          build(res.items) +
        '</div>';
    });
  }

  /* Expose for pages that inject mounts dynamically. */
  window.hydrateFeatured = hydrateFeatured;

  /* Auto-init. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { hydrateFeatured(); });
  } else {
    hydrateFeatured();
  }

})();
