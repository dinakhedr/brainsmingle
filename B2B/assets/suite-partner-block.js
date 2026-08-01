/* ============================================
   BrainsMingle Suite — Partner Opportunity Block
   Shared JS component for all vertical pages.
   Inject by adding: <section id="partner-block"></section>
   ============================================ */
(function () {
  'use strict';

  function buildPartnerBlock() {
    var el = document.getElementById('partner-block');
    if (!el) return;

    el.className = 'vert-partner';
    el.innerHTML =
      '<div class="vert-partner__bg"></div>' +
      '<div class="container vert-partner__inner">' +

        /* Left: copy */
        '<div class="vert-partner__copy">' +
          '<div class="vert-partner__eyebrow">' + (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS.sponsorship ? SUITE_ICONS.sponsorship : '') + ' Partner Opportunity</div>' +
          '<h2 class="vert-partner__headline">Your Suite.<br>Your Network.<br>Your Revenue.</h2>' +
          '<p class="vert-partner__body">' +
            'This isn\'t just your branded ecosystem — it\'s a revenue channel. ' +
            'Introduce Suite to organizations in your network. We deploy it. ' +
            'You earn revenue share on every activation.' +
          '</p>' +
          '<a href="' + (window.location.pathname.endsWith('/suite.html') || window.location.pathname === 'suite.html' ? 'suite/' : '') + 'partners.html" class="vert-partner__cta">' +
  'Explore the Partner Program' +
            (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS.arrowRight ? ' ' + SUITE_ICONS.arrowRight : '') +
          '</a>' +
        '</div>' +

        /* Right: three value cards */
        '<div class="vert-partner__cards">' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--purple">' +
              (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS.branding ? SUITE_ICONS.branding : '') +
            '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">Run your own Suite</div>' +
              '<div class="vert-partner__card-desc">Your brand, your programs, your audience — all under your identity.</div>' +
            '</div>' +
          '</div>' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--cyan">' +
              (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS.community ? SUITE_ICONS.community : '') +
            '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">Activate your network</div>' +
              '<div class="vert-partner__card-desc">Every organization you introduce can launch their own independent Suite.</div>' +
            '</div>' +
          '</div>' +
          '<div class="vert-partner__card">' +
            '<div class="vert-partner__card-icon vert-partner__card-icon--amber">' +
              (typeof SUITE_ICONS !== 'undefined' && SUITE_ICONS.payment ? SUITE_ICONS.payment : '') +
            '</div>' +
            '<div>' +
              '<div class="vert-partner__card-title">Earn on every deal</div>' +
              '<div class="vert-partner__card-desc">Revenue share on every activation you bring in. The bigger your network, the bigger your upside.</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildPartnerBlock();
  });
})();
