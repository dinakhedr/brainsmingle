/* ============================================================
   BrainsMingle — Modals
   modal.js · Standalone modal system. Not part of the nav —
   the nav only *triggers* modals via data-cta / openModal().

   ── Load order (before nav.js, so openModal exists) ─────────
     <script src="assets/js/icons.js"></script>
     <script src="assets/js/modal.js"></script>   (this file)
     <script src="assets/js/nav.js"></script>

   ── How it hooks in ────────────────────────────────────────
     Any element with  data-cta="demo"  opens the demo modal,
     because nav.js's wireCtas() calls window.openModal(id).
     Add more modals by registering a builder in MODALS below.

   ── Requires ───────────────────────────────────────────────
     The .demo-* CSS (overlay, modal, form) must be present in
     your stylesheet, or the modal renders unstyled.
   ============================================================ */
(function () {
  'use strict';

  /* ---- Registry: modal id -> builder fn (builds once, reused after) ---- */
  var MODALS = {
    demo: buildDemoModal
  };

  /* ---- Demo modal builder ---- */
  function buildDemoModal() {
    var existing = document.getElementById('demo-modal');
    if (existing) return existing;

    var div = document.createElement('div');
    div.className = 'demo-overlay';
    div.id = 'demo-modal';
    div.addEventListener('click', function (e) {
      if (e.target === div) closeModal();
    });

    div.innerHTML =
      '<div class="demo-modal">' +
        '<button class="demo-modal__close" type="button" onclick="closeModal()" aria-label="Close">\u2715</button>' +
        '<span class="eyebrow demo-modal__eyebrow">BrainsMingle Suite</span>' +
        '<h2 class="demo-modal__title">Book a Demo.<br><em>See Suite in Action.</em></h2>' +
        '<p class="demo-modal__sub">Tell us about your organization and we\'ll schedule a personalized walkthrough within 48 hours.</p>' +

        '<div id="demo-form-fields">' +

          '<div class="demo-form__row">' +
            '<div class="demo-form__field">' +
              '<label for="demo-name">Full Name *</label>' +
              '<input type="text" id="demo-name" placeholder="Your name" required />' +
            '</div>' +
            '<div class="demo-form__field">' +
              '<label for="demo-title">Job Title *</label>' +
              '<input type="text" id="demo-title" placeholder="e.g. Program Director" required />' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__row" style="grid-template-columns:1fr;">' +
            '<div class="demo-form__field demo-form__field--full">' +
              '<label for="demo-email">Work Email *</label>' +
              '<input type="email" id="demo-email" placeholder="you@company.com" required />' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__row" style="grid-template-columns:1fr;">' +
            '<div class="demo-form__field demo-form__field--full">' +
              '<label for="demo-phone">Phone</label>' +
              '<div class="demo-form__phone-row">' +
                '<select id="demo-code">' +
                  '<option value="+20">\uD83C\uDDEA\uD83C\uDDEC +20</option>' +
                  '<option value="+966">\uD83C\uDDF8\uD83C\uDDE6 +966</option>' +
                  '<option value="+971">\uD83C\uDDE6\uD83C\uDDEA +971</option>' +
                  '<option value="+1">\uD83C\uDDFA\uD83C\uDDF8 +1</option>' +
                  '<option value="+44">\uD83C\uDDEC\uD83C\uDDE7 +44</option>' +
                  '<option value="+49">\uD83C\uDDE9\uD83C\uDDEA +49</option>' +
                  '<option value="+33">\uD83C\uDDEB\uD83C\uDDF7 +33</option>' +
                  '<option value="+91">\uD83C\uDDEE\uD83C\uDDF3 +91</option>' +
                  '<option value="+234">\uD83C\uDDF3\uD83C\uDDEC +234</option>' +
                  '<option value="+254">\uD83C\uDDF0\uD83C\uDDEA +254</option>' +
                  '<option value="+212">\uD83C\uDDF2\uD83C\uDDE6 +212</option>' +
                  '<option value="+962">\uD83C\uDDEF\uD83C\uDDF4 +962</option>' +
                  '<option value="+961">\uD83C\uDDF1\uD83C\uDDE7 +961</option>' +
                  '<option value="+974">\uD83C\uDDF6\uD83C\uDDE6 +974</option>' +
                  '<option value="+965">\uD83C\uDDF0\uD83C\uDDFC +965</option>' +
                  '<option value="+968">\uD83C\uDDF4\uD83C\uDDF2 +968</option>' +
                  '<option value="+973">\uD83C\uDDE7\uD83C\uDDED +973</option>' +
                  '<option value="+90">\uD83C\uDDF9\uD83C\uDDF7 +90</option>' +
                  '<option value="+86">\uD83C\uDDE8\uD83C\uDDF3 +86</option>' +
                  '<option value="+81">\uD83C\uDDEF\uD83C\uDDF5 +81</option>' +
                  '<option value="+55">\uD83C\uDDE7\uD83C\uDDF7 +55</option>' +
                  '<option value="+27">\uD83C\uDDFF\uD83C\uDDE6 +27</option>' +
                  '<option value="+61">\uD83C\uDDE6\uD83C\uDDFA +61</option>' +
                '</select>' +
                '<input type="tel" id="demo-phone" placeholder="000 000 0000" />' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__row" style="grid-template-columns:1fr;">' +
            '<div class="demo-form__field demo-form__field--full">' +
              '<label for="demo-org">Organization Name *</label>' +
              '<input type="text" id="demo-org" placeholder="Your organization" required />' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__row">' +
            '<div class="demo-form__field">' +
              '<label for="demo-type">Organization Type *</label>' +
              '<select id="demo-type" required>' +
                '<option value="" disabled selected>Select type</option>' +
                '<option value="Accelerator / Incubator">Accelerator / Incubator</option>' +
                '<option value="University / EdTech">University / EdTech</option>' +
                '<option value="Training Academy">Training Academy</option>' +
                '<option value="Professional Association">Professional Association</option>' +
                '<option value="Corporate / Enterprise">Corporate / Enterprise</option>' +
                '<option value="Creator / Independent Expert">Creator / Independent Expert</option>' +
                '<option value="Program / Event Organizer">Program / Event Organizer</option>' +
                '<option value="Other">Other</option>' +
              '</select>' +
            '</div>' +
            '<div class="demo-form__field">' +
              '<label for="demo-size">Team Size *</label>' +
              '<select id="demo-size" required>' +
                '<option value="" disabled selected>Select size</option>' +
                '<option value="1-10">1\u201310</option>' +
                '<option value="11-50">11\u201350</option>' +
                '<option value="51-200">51\u2013200</option>' +
                '<option value="201-1000">201\u20131,000</option>' +
                '<option value="1000+">1,000+</option>' +
              '</select>' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__row" style="grid-template-columns:1fr;margin-bottom:0;">' +
            '<div class="demo-form__field demo-form__field--full">' +
              '<label for="demo-message">What are you looking to build?</label>' +
              '<textarea id="demo-message" placeholder="e.g. A branded learning hub for our accelerator cohorts with live sessions and mentor booking\u2026"></textarea>' +
            '</div>' +
          '</div>' +

          '<div class="demo-form__submit">' +
            '<button class="btn btn--primary" type="button" onclick="submitDemoForm()">Book a Demo \u2192</button>' +
            '<span class="demo-form__note">We\'ll reach out within 48 hours. No spam, ever.</span>' +
          '</div>' +

        '</div>' +

        '<div class="demo-form__success" id="demo-form-success">' +
          '<div class="demo-form__success-icon">\u2713</div>' +
          '<div class="demo-form__success-title">Request received!</div>' +
          '<div class="demo-form__success-sub">We\'ll reach out within 48 hours to schedule<br>your personalized walkthrough.</div>' +
        '</div>' +

      '</div>';

    document.body.appendChild(div);
    return div;
  }

  /* ---- Public API (matches nav.js data-cta wiring) ---- */

  /* openModal('demo') — builds on first call, reuses after */
  window.openModal = function (id) {
    var build = MODALS[id];
    if (!build) return;                 // unknown id → no-op
    var el = build();
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  /* closeModal() — closes whichever overlay is open */
  window.closeModal = function () {
    document.querySelectorAll('.demo-overlay.open').forEach(function (el) {
      el.classList.remove('open');
    });
    document.body.style.overflow = '';
  };

  /* Back-compat aliases, in case any page still calls the old names */
  window.openDemoModal  = function () { window.openModal('demo'); };
  window.closeDemoModal = window.closeModal;

  /* Demo form validate + show success */
  window.submitDemoForm = function () {
    var required = ['demo-name', 'demo-title', 'demo-email', 'demo-org', 'demo-type', 'demo-size'];
    for (var i = 0; i < required.length; i++) {
      var field = document.getElementById(required[i]);
      if (!field || !field.value.trim()) {
        alert('Please fill in all required fields.');
        return;
      }
    }
    document.getElementById('demo-form-fields').style.display = 'none';
    document.getElementById('demo-form-success').style.display = 'block';
  };

  /* Escape closes any open modal */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeModal();
  });
})();
