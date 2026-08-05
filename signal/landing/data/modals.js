/* ============================================================
   Signal: AI — Modal System
   signal-modals.js · Single source of truth for all modals.

   Usage — declare which modals to load, then include the script:

     <script>var SIGNAL_MODAL_IDS = ["sponsor", "speaker"];</script>
     <script src="data/signal-modals.js"></script>

   Valid IDs: "sponsor", "speaker"

   Dependencies:
     tracks.js → SIGNAL_TRACKS (for speaker track select)

   Provides globally:
     openModal(id)
     closeModal(id)
   ============================================================ */


/* ─────────────────────────────────────────
   1. MODAL CSS
   Moved to style.css — this file no longer
   injects any styling.
   ───────────────────────────────────────── */

/* Modal styling now lives in style.css, section 10: MODAL SYSTEM. */


/* ─────────────────────────────────────────
   2. REGISTRATION FORM OPTIONS
   Edit the dropdown and checkbox choices here.
   Tracks are not listed: they come from tracks.js.
   ───────────────────────────────────────── */

/* Where the registration payload is sent. Leave empty until the
   endpoint exists: the form will validate, show success and log the
   payload to the console so you can test the flow end to end. */
var REGISTRATION_ENDPOINT = "";

var REG_ATTENDEE_TYPES = [
  "Practitioner or researcher",
  "Leader or decision maker",
  "Founder or entrepreneur",
  "Developer or engineer",
  "Student or early career",
  "Recruiter or hiring company"
];

var REG_CAREER_LEVELS = [
  "Student or intern",
  "Entry level (0 to 2 years)",
  "Mid level (3 to 6 years)",
  "Senior or lead (7+ years)",
  "Manager or head of department",
  "Director or VP",
  "C-level or executive",
  "Founder or business owner"
];

var REG_NETWORKING_GOALS = [
  "Hiring",
  "Looking for a role",
  "Fundraising",
  "Investing",
  "Finding partners or clients",
  "Meeting peers in my field",
  "Just here to learn"
];

var REG_REFERRAL_SOURCES = [
  "LinkedIn",
  "Instagram or Facebook",
  "WhatsApp or Telegram group",
  "Email or newsletter",
  "A friend or colleague",
  "A community or media partner",
  "A speaker or sponsor",
  "Already a BrainsMingle member",
  "Google or web search",
  "Something else"
];

var REG_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
  "Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia",
  "Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
  "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
  "Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti",
  "Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar",
  "Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco",
  "Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua",
  "Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay",
  "Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal",
  "Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","South Sudan",
  "Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor-Leste","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];


/* ─────────────────────────────────────────
   3. MODAL HTML TEMPLATES
   ───────────────────────────────────────── */

var SIGNAL_MODAL_TEMPLATES = {

  waitlist: `
<div class="modal-overlay" id="waitlist-modal" onclick="if(event.target===this)closeModal('waitlist-modal')">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal('waitlist-modal')" aria-label="Close"><span data-icon="close"></span></button>
    <div class="modal-eyebrow">AI Summit by BrainsMingle &middot; 10 &ndash; 16 October 2026</div>
    <h2 class="modal-title">Join the <em>Waiting List</em></h2>
    <p class="modal-sub">Be the first to know when registration opens. We'll send you one email, no noise and no spam.</p>

    <div id="wl-modal-form">
      <div class="wl-form-row">
        <div class="modal-field wl-field">
          <input type="email" id="wl-email" placeholder="Enter your email address"
                 autocomplete="email" aria-label="Email address" required />
        </div>
        <button class="btn btn-primary btn-sm btn-arrow wl-submit" id="wl-submit-btn"
                onclick="submitWaitlistForm()">Join the Waiting List</button>
      </div>
      <div class="wl-error" id="wl-error">Please enter a valid email address.</div>
      <div class="wl-success" id="wl-success">
        <span data-icon="check"></span>
        You're on the list. We'll be in touch.
      </div>
      <p class="wl-note">No spam. One email when registration goes live.</p>
    </div>
  </div>
</div>`,
  register: `
<div class="modal-overlay" id="register-modal" onclick="if(event.target===this)closeModal('register-modal')">
  <div class="modal-box reg-modal-box">
    <button class="modal-close" onclick="closeModal('register-modal')" aria-label="Close"><span data-icon="close"></span></button>
    <div class="modal-eyebrow">AI Summit by BrainsMingle &middot; 10 &ndash; 16 October 2026</div>
    <h2 class="modal-title">Register to <em>Join</em></h2>
    <p class="modal-sub">Seven days, five tracks, 100+ sessions and a full day of speed networking. Free to attend, fully virtual.</p>

    <div id="reg-modal-form">

      <div class="modal-form-row">
        <div class="modal-field" id="reg-field-name">
          <label for="rg-name">Full Name *</label>
          <input type="text" id="rg-name" placeholder="Your name" required />
        </div>
        <div class="modal-field" id="reg-field-email">
          <label for="rg-email">Email *</label>
          <input type="email" id="rg-email" placeholder="you@company.com" autocomplete="email" required />
        </div>
      </div>

      <div class="modal-form-row">
        <div class="modal-field" id="reg-field-country">
          <label for="rg-country">Country *</label>
          <select id="rg-country" required>
            <option value="" disabled selected>Select your country</option>
          </select>
        </div>
        <div class="modal-field" id="reg-field-type">
          <label for="rg-type">I am a *</label>
          <select id="rg-type" required>
            <option value="" disabled selected>Select attendee type</option>
          </select>
        </div>
      </div>

      <div class="modal-form-row">
        <div class="modal-field" id="reg-field-title">
          <label for="rg-title">Job Title *</label>
          <input type="text" id="rg-title" placeholder="e.g. Product Manager" required />
        </div>
        <div class="modal-field" id="reg-field-level">
          <label for="rg-level">Career Level *</label>
          <select id="rg-level" required>
            <option value="" disabled selected>Select career level</option>
          </select>
        </div>
      </div>

      <div class="modal-form-row">
        <div class="modal-field" id="reg-field-company">
          <label for="rg-company">Company or Organisation *</label>
          <input type="text" id="rg-company" placeholder="Company, university, or Independent" required />
        </div>
        <div class="modal-field" id="reg-field-track">
          <label for="rg-track">Primary Track *</label>
          <select id="rg-track" required>
            <option value="" disabled selected>Select a track</option>
            <option value="all">All tracks / still deciding</option>
          </select>
        </div>
      </div>

      <div class="modal-form-row modal-form-row--full">
        <div class="modal-field modal-field-full" id="reg-field-goals">
          <span class="modal-field-label">What do you want out of the week? *</span>
          <div class="modal-checkgrid" id="rg-goals"></div>
        </div>
      </div>

      <div class="modal-form-row modal-form-row--full modal-form-row--last">
        <div class="modal-field modal-field-full" id="reg-field-source">
          <label for="rg-source">How did you hear about AI Summit? *</label>
          <select id="rg-source" required>
            <option value="" disabled selected>Select one</option>
          </select>
        </div>
      </div>

      <div class="modal-consent">
        <label class="modal-check" for="rg-terms">
          <input type="checkbox" id="rg-terms" />
          <span>I agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and the <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>. *</span>
        </label>
        <label class="modal-check" for="rg-marketing">
          <input type="checkbox" id="rg-marketing" />
          <span>Send me updates from AI Summit and its sponsors.</span>
        </label>
      </div>

      <div class="modal-error" id="rg-error">Please complete all required fields.</div>

      <div class="modal-submit-row">
        <button class="btn btn-primary btn-arrow" id="rg-submit-btn" onclick="submitRegistrationForm()">Complete Registration</button>
        <span class="modal-form-note">Free to attend. No card required.</span>
      </div>
    </div>

    <div class="modal-form-success" id="rg-success">
      <span data-icon="check"></span>
      You're registered. Check your inbox for your confirmation and joining link.
    </div>
  </div>
</div>`,

  sponsor: `
<div class="modal-overlay" id="sponsor-modal" onclick="if(event.target===this)closeModal('sponsor-modal')">
  <div class="modal-box sp-modal-box">
    <button class="modal-close" onclick="closeModal('sponsor-modal')" aria-label="Close"><span data-icon="close"></span></button>
    <div class="modal-eyebrow">Sponsorship &amp; Partnerships</div>
    <h2 class="modal-title">Let's Talk.<br><em>Slots Won't Last.</em></h2>
    <p class="modal-sub">Fill in the form and we'll reach out within 24 hours to arrange a call, walk you through the full benefits, and help you find the right fit.</p>

    <div id="sp-modal-form">
      <div class="modal-form-row">
        <div class="modal-field">
          <label for="sm-name">Full Name *</label>
          <input type="text" id="sm-name" placeholder="Your name" required />
        </div>
        <div class="modal-field">
          <label for="sm-company">Company / Organisation *</label>
          <input type="text" id="sm-company" placeholder="Your company" required />
        </div>
      </div>
      <div class="modal-form-row">
        <div class="modal-field">
          <label for="sm-email">Email *</label>
          <input type="email" id="sm-email" placeholder="you@company.com" required />
        </div>
        <div class="modal-field">
          <label for="sm-phone">Phone *</label>
          <input type="tel" id="sm-phone" placeholder="+1 000 000 0000" required />
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full">
        <div class="modal-field modal-field-full">
          <label for="sm-interest">I'm interested in *</label>
          <select id="sm-interest" required>
            <option value="" disabled selected>Select sponsorship type</option>
            <option value="Sponsor">Tier Sponsor (Main / Gold / Silver / Bronze)</option>
            <option value="Track Sponsor">Track Sponsor</option>
            <option value="AI Summit Launchpad">AI Summit Launchpad</option>
            <option value="AI Summit Talent">AI Summit Talent</option>
            <option value="Speed Networking Day">Speed Networking Day</option>
            <option value="Community Partner">Community Partner</option>
            <option value="Can't Decide Now">Can't Decide Now</option>
          </select>
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full modal-form-row--last">
        <div class="modal-field modal-field-full">
          <label for="sm-message">Message (optional)</label>
          <textarea id="sm-message" placeholder="Tell us about your brand, goals, or any questions..."></textarea>
        </div>
      </div>
      <div class="modal-submit-row">
        <button class="btn btn-primary" onclick="submitSponsorForm()">Request a Call →</button>
        <span class="modal-form-note">We respond within 24 hours. No spam, ever.</span>
      </div>
      <div class="modal-form-success" id="sp-modal-success">✓ Request received! We'll be in touch within 24 hours.</div>
    </div>
  </div>
</div>`,

  speaker: `
<div class="modal-overlay" id="speaker-modal" onclick="if(event.target===this)closeModal('speaker-modal')">
  <div class="modal-box spk-modal-box">
    <button class="modal-close" onclick="closeModal('speaker-modal')" aria-label="Close"><span data-icon="close"></span></button>
    <div class="modal-eyebrow">Speak at AI Summit</div>
    <h2 class="modal-title">Want to Speak<br>at <em>AI Summit?</em></h2>
    <p class="modal-sub">We're looking for active practitioners, researchers, founders, and domain leaders who have something worth saying. If that's you — apply below.</p>

    <div id="spk-modal-form">
      <div class="modal-form-row">
        <div class="modal-field">
          <label for="am-name">Full Name *</label>
          <input type="text" id="am-name" placeholder="Your name" required />
        </div>
        <div class="modal-field">
          <label for="am-org">Title &amp; Organisation</label>
          <input type="text" id="am-org" placeholder="CEO at Acme / PhD, MIT" />
        </div>
      </div>
      <div class="modal-form-row">
        <div class="modal-field">
          <label for="am-email">Email *</label>
          <input type="email" id="am-email" placeholder="you@company.com" required />
        </div>
        <div class="modal-field">
          <label for="am-phone">Phone</label>
          <input type="tel" id="am-phone" placeholder="+1 000 000 0000" />
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full">
        <div class="modal-field modal-field-full">
          <label for="am-linkedin">LinkedIn Profile</label>
          <input type="url" id="am-linkedin" placeholder="linkedin.com/in/yourname" />
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full">
        <div class="modal-field modal-field-full">
          <label for="am-track">Preferred Track *</label>
          <select id="am-track" required>
            <option value="" disabled selected>Select a track</option>
          </select>
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full">
        <div class="modal-field modal-field-full">
          <label for="am-topic">Proposed Topic / Talk Title *</label>
          <input type="text" id="am-topic" placeholder="What would you like to speak about?" required />
        </div>
      </div>
      <div class="modal-form-row modal-form-row--full modal-form-row--last">
        <div class="modal-field modal-field-full">
          <label for="am-bio">Brief Bio (optional)</label>
          <textarea id="am-bio" placeholder="Tell us about your work and why this topic matters..."></textarea>
        </div>
      </div>
      <div class="modal-submit-row">
        <button class="btn btn-primary" onclick="submitSpeakerForm()">Submit Application →</button>
        <span class="modal-form-note">We review all applications within 5 business days.</span>
      </div>
      <div class="modal-form-success" id="spk-modal-success">✓ Application received! We'll be in touch within 5 business days.</div>
    </div>
  </div>
</div>`

};


/* ─────────────────────────────────────────
   4. INJECT MODALS INTO PAGE
   Reads SIGNAL_MODAL_IDS to decide which
   modals to inject. Runs immediately.
   ───────────────────────────────────────── */

(function injectModals() {
  var ids = (typeof MODAL_IDS !== "undefined") ? MODAL_IDS.slice() : [];
  if (!ids.length) return;

  /* "registration" is an alias. layout.js decides whether it means the
     waiting list or the real registration form, so pages never have to
     name one directly. */
  ids = ids.map(function (id) {
    if (id !== "registration") return id;
    return (typeof activeRegistration === "function")
      ? activeRegistration().template
      : "waitlist";
  });

  var container = document.createElement("div");
  container.id = "signal-modals";

  ids.forEach(function(id) {
    if (SIGNAL_MODAL_TEMPLATES[id]) {
      container.insertAdjacentHTML("beforeend", SIGNAL_MODAL_TEMPLATES[id]);
    }
  });

  // Append to body — if body isn't ready yet, wait for DOMContentLoaded
  function append() { document.body.appendChild(container); populateTracks(); populateRegistration(); }

  if (document.body) {
    append();
  } else {
    document.addEventListener("DOMContentLoaded", append);
  }

  /* Fill the registration dropdowns and the networking goals checkboxes. */
  function populateRegistration() {
    if (!document.getElementById("register-modal")) return;

    fillSelect("rg-country", REG_COUNTRIES);
    fillSelect("rg-type",    REG_ATTENDEE_TYPES);
    fillSelect("rg-level",   REG_CAREER_LEVELS);
    fillSelect("rg-source",  REG_REFERRAL_SOURCES);

    // Tracks come from tracks.js so there is one source of truth.
    var trackSel = document.getElementById("rg-track");
    if (trackSel && typeof SIGNAL_TRACKS !== "undefined") {
      SIGNAL_TRACKS.forEach(function (t) {
        var opt = document.createElement("option");
        opt.value = t.slug;
        opt.textContent = t.fullName;
        trackSel.appendChild(opt);
      });
    }

    // Networking goals as checkboxes.
    var goals = document.getElementById("rg-goals");
    if (goals) {
      goals.innerHTML = REG_NETWORKING_GOALS.map(function (goal, i) {
        var id = "rg-goal-" + i;
        return '<label class="modal-check" for="' + id + '">' +
                 '<input type="checkbox" id="' + id + '" value="' + goal + '" />' +
                 '<span>' + goal + '</span>' +
               '</label>';
      }).join("");
    }

    function fillSelect(id, values) {
      var sel = document.getElementById(id);
      if (!sel) return;
      values.forEach(function (v) {
        var opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        sel.appendChild(opt);
      });
    }
  }

  // Populate speaker track <select> from SIGNAL_TRACKS
  function populateTracks() {
    if (ids.indexOf("speaker") === -1) return;
    var sel = document.getElementById("am-track");
    if (!sel || typeof SIGNAL_TRACKS === "undefined") return;
    SIGNAL_TRACKS.forEach(function(t) {
      var opt = document.createElement("option");
      opt.value = t.slug;
      opt.textContent = t.shortName;
      sel.appendChild(opt);
    });
  }
})();


/* ─────────────────────────────────────────
   5. OPEN / CLOSE LOGIC
   ───────────────────────────────────────── */

function openModal(id) {
  var el = document.getElementById(id);
  if (el) { el.classList.add("open"); document.body.classList.add("modal-open"); }
}

function closeModal(id) {
  var el = document.getElementById(id);
  if (el) { el.classList.remove("open"); document.body.classList.remove("modal-open"); }
}

// Escape key closes all modals
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach(function(el) {
      el.classList.remove("open");
    });
    document.body.classList.remove("modal-open");
  }
});


/* ─────────────────────────────────────────
   6. FORM SUBMISSION — WAITING LIST
   ───────────────────────────────────────── */

/* The waiting list form appears in three places: this modal, the
   coming soon page, and the closing band on the home page. They
   share one implementation, distinguished by an id prefix. */
function submitWaitlistForm(prefix) {
  var p       = prefix || "wl";
  var input   = document.getElementById(p + "-email");
  var btn     = document.getElementById(p + "-submit-btn");
  var error   = document.getElementById(p + "-error");
  var success = document.getElementById(p + "-success");
  if (!input) return;
  var email   = input.value.trim();

  error.classList.remove("is-visible");
  success.classList.remove("is-visible");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.classList.add("is-visible");
    input.focus();
    return;
  }

  // TODO: send to the real endpoint once it exists, for example:
  // fetch("/api/waitlist", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email: email })
  // });

  input.disabled = true;
  btn.disabled   = true;
  success.classList.add("is-visible");
}

// Enter key submits. Delegated, because the modal is injected at runtime.
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && e.target && e.target.id === "wl-email") {
    submitWaitlistForm();
  }
});


/* ─────────────────────────────────────────
   7. FORM SUBMISSION — REGISTRATION
   ───────────────────────────────────────── */

function submitRegistrationForm() {
  var error   = document.getElementById("rg-error");
  var form    = document.getElementById("reg-modal-form");
  var success = document.getElementById("rg-success");

  var fields = [
    { id: "rg-name",    wrap: "reg-field-name"    },
    { id: "rg-email",   wrap: "reg-field-email"   },
    { id: "rg-country", wrap: "reg-field-country" },
    { id: "rg-type",    wrap: "reg-field-type"    },
    { id: "rg-title",   wrap: "reg-field-title"   },
    { id: "rg-level",   wrap: "reg-field-level"   },
    { id: "rg-company", wrap: "reg-field-company" },
    { id: "rg-track",   wrap: "reg-field-track"   },
    { id: "rg-source",  wrap: "reg-field-source"  }
  ];

  var firstBad = null;
  var values   = {};

  fields.forEach(function (f) {
    var el   = document.getElementById(f.id);
    var wrap = document.getElementById(f.wrap);
    var val  = (el.value || "").trim();
    values[f.id] = val;

    var bad = !val;
    if (f.id === "rg-email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) bad = true;

    wrap.classList.toggle("is-invalid", bad);
    if (bad && !firstBad) firstBad = el;
  });

  // At least one networking goal.
  var goals = [].slice.call(document.querySelectorAll("#rg-goals input:checked"))
                .map(function (c) { return c.value; });
  var goalsWrap = document.getElementById("reg-field-goals");
  goalsWrap.classList.toggle("is-invalid", goals.length === 0);
  if (goals.length === 0 && !firstBad) firstBad = document.querySelector("#rg-goals input");

  // Terms must be accepted.
  var terms = document.getElementById("rg-terms");
  terms.closest(".modal-check").classList.toggle("is-invalid", !terms.checked);
  if (!terms.checked && !firstBad) firstBad = terms;

  if (firstBad) {
    error.textContent = "Please complete all required fields.";
    error.classList.add("is-visible");
    firstBad.focus();
    return;
  }
  error.classList.remove("is-visible");

  var payload = {
    name           : values["rg-name"],
    email          : values["rg-email"],
    country        : values["rg-country"],
    attendeeType   : values["rg-type"],
    jobTitle       : values["rg-title"],
    careerLevel    : values["rg-level"],
    company        : values["rg-company"],
    primaryTrack   : values["rg-track"],
    networkingGoals: goals,
    referralSource : values["rg-source"],
    referralCode   : _regReferralCode(),
    marketingOptIn : document.getElementById("rg-marketing").checked,
    registeredAt   : new Date().toISOString()
  };

  if (!REGISTRATION_ENDPOINT) {
    // No endpoint wired yet. Log the payload so the flow is testable.
    console.log("[AI Summit] registration payload", payload);
    _regShowSuccess(form, success);
    return;
  }

  document.getElementById("rg-submit-btn").disabled = true;
  form.classList.add("is-submitting");

  fetch(REGISTRATION_ENDPOINT, {
    method : "POST",
    headers: { "Content-Type": "application/json" },
    body   : JSON.stringify(payload)
  })
  .then(function (res) {
    if (!res.ok) throw new Error("Request failed with status " + res.status);
    _regShowSuccess(form, success);
  })
  .catch(function () {
    form.classList.remove("is-submitting");
    document.getElementById("rg-submit-btn").disabled = false;
    error.textContent = "Something went wrong. Please try again, or email aisummit@brainsmingle.com.";
    error.classList.add("is-visible");
  });
}

function _regShowSuccess(form, success) {
  form.classList.add("is-hidden");
  success.classList.add("is-visible");
}

/* Reads ?ref=partner-name from the URL so partner referrals are tracked
   accurately instead of relying on what people remember. */
function _regReferralCode() {
  try {
    return new URLSearchParams(window.location.search).get("ref") || null;
  } catch (e) {
    return null;
  }
}


/* ─────────────────────────────────────────
   8. FORM SUBMISSION — SPONSOR
   ───────────────────────────────────────── */

function submitSponsorForm() {
  var name     = document.getElementById("sm-name").value.trim();
  var company  = document.getElementById("sm-company").value.trim();
  var email    = document.getElementById("sm-email").value.trim();
  var phone    = document.getElementById("sm-phone").value.trim();
  var interest = document.getElementById("sm-interest").value;

  if (!name || !company || !email || !phone || !interest) {
    alert("Please fill in all required fields."); return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address."); return;
  }

  var message = document.getElementById("sm-message").value.trim();
  var toEmail = (interest === "Community Partner") ? "partners@brainsmingle.com" : "sponsors@brainsmingle.com";
  var subject = encodeURIComponent("AI Summit Sponsorship Inquiry — " + interest + " — " + company);
  var body    = encodeURIComponent(
    "Name: " + name +
    "\nCompany: " + company +
    "\nEmail: " + email +
    "\nPhone: " + (phone || "Not provided") +
    "\nInterest: " + interest +
    "\n\nMessage:\n" + (message || "No message provided.")
  );

  window.location.href = "mailto:" + toEmail + "?subject=" + subject + "&body=" + body;
  document.getElementById("sp-modal-success").classList.add("is-visible");
}


/* ─────────────────────────────────────────
   9. FORM SUBMISSION — SPEAKER
   ───────────────────────────────────────── */

function submitSpeakerForm() {
  var name  = document.getElementById("am-name").value.trim();
  var email = document.getElementById("am-email").value.trim();
  var track = document.getElementById("am-track").value;
  var topic = document.getElementById("am-topic").value.trim();

  if (!name || !email || !track || !topic) {
    alert("Please fill in all required fields."); return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address."); return;
  }

  var org   = document.getElementById("am-org").value.trim();
  var phone = document.getElementById("am-phone").value.trim();
  var li    = document.getElementById("am-linkedin").value.trim();
  var bio   = document.getElementById("am-bio").value.trim();

  var subject = encodeURIComponent("AI Summit Speaker Application — " + name + " — " + track);
  var body    = encodeURIComponent(
    "Name: " + name +
    "\nTitle & Organisation: " + (org || "Not provided") +
    "\nEmail: " + email +
    "\nPhone: " + (phone || "Not provided") +
    "\nLinkedIn: " + (li || "Not provided") +
    "\nTrack: " + track +
    "\n\nProposed Topic:\n" + topic +
    "\n\nBio:\n" + (bio || "Not provided")
  );

  window.location.href = "mailto:speakers@brainsmingle.com?subject=" + subject + "&body=" + body;

  var form = document.getElementById("spk-modal-form");
  form.classList.add("is-submitting");
  setTimeout(function() {
    form.classList.add("is-hidden");
    document.getElementById("spk-modal-success").classList.add("is-visible");
  }, 400);
}
