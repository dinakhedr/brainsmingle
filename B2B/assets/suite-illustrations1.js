/* ============================================================
   Suite Illustrations  –  shared SVG registry
   Path: assets/suite-illustrations.js
   
   Usage:  <div data-illus="liveSession"></div>
   Inject: document.querySelectorAll('[data-illus]').forEach(function(el){
             var k=el.getAttribute('data-illus');
             if(SUITE_ILLUSTRATIONS[k]) el.innerHTML=SUITE_ILLUSTRATIONS[k];
           });
   ============================================================ */

var SUITE_ILLUSTRATIONS = {

/* ── Live Sessions & Webinars ─────────────────────────────── */
liveSession: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<circle cx="40" cy="37" r="4" fill="#F53E9F"/>\
<circle cx="54" cy="37" r="4" fill="#F5A623"/>\
<circle cx="68" cy="37" r="4" fill="#00E8A2"/>\
<rect x="300" y="30" width="60" height="14" rx="7" fill="rgba(245,62,159,0.15)"/>\
<circle cx="312" cy="37" r="3" fill="#F53E9F"/>\
<text x="322" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#F53E9F">LIVE</text>\
<rect x="24" y="66" width="300" height="180" rx="12" fill="var(--bg)" stroke="rgba(107,62,245,0.3)" stroke-width="1.5"/>\
<circle cx="174" cy="140" r="34" fill="rgba(107,62,245,0.15)"/>\
<circle cx="174" cy="128" r="12" fill="#6B3EF5"/>\
<path d="M152 162 Q174 144 196 162 L196 174 L152 174 Z" fill="#6B3EF5"/>\
<rect x="36" y="222" width="90" height="14" rx="7" fill="var(--border)"/>\
<rect x="24" y="66" width="52" height="30" rx="8" fill="rgba(0,232,162,0.12)"/>\
<path d="M40 76 L40 86 L52 81 Z" fill="#00E8A2"/>\
<rect x="336" y="66" width="120" height="52" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="360" cy="92" r="14" fill="rgba(0,232,162,0.15)"/>\
<circle cx="360" cy="87" r="5" fill="#00E8A2"/>\
<path d="M351 100 Q360 92 369 100 Z" fill="#00E8A2"/>\
<rect x="382" y="84" width="60" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="382" y="96" width="40" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="336" y="128" width="120" height="52" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="360" cy="154" r="14" fill="rgba(245,62,159,0.15)"/>\
<circle cx="360" cy="149" r="5" fill="#F53E9F"/>\
<path d="M351 162 Q360 154 369 162 Z" fill="#F53E9F"/>\
<rect x="382" y="146" width="60" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="382" y="158" width="40" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="336" y="190" width="120" height="52" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="360" cy="216" r="14" fill="rgba(245,166,35,0.15)"/>\
<circle cx="360" cy="211" r="5" fill="#F5A623"/>\
<path d="M351 224 Q360 216 369 224 Z" fill="#F5A623"/>\
<rect x="382" y="208" width="60" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="382" y="220" width="40" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="24" y="262" width="432" height="34" rx="10" fill="var(--bg-alt)"/>\
<circle cx="180" cy="279" r="13" fill="rgba(107,62,245,0.15)"/>\
<rect x="174" y="274" width="12" height="10" rx="3" fill="#6B3EF5"/>\
<circle cx="216" cy="279" r="13" fill="rgba(0,232,162,0.15)"/>\
<path d="M210 274 h12 v10 h-12 z M213 271 v3 M219 271 v3" stroke="#00E8A2" stroke-width="1.5" fill="none"/>\
<circle cx="252" cy="279" r="13" fill="rgba(245,62,159,0.15)"/>\
<path d="M246 279 h12 M252 273 v12" stroke="#F53E9F" stroke-width="1.5"/>\
<circle cx="300" cy="279" r="13" fill="#F53E9F"/>\
<rect x="295" y="274" width="10" height="10" rx="2" fill="var(--on-accent)"/>\
</svg>',

/* ── Speed Networking ─────────────────────────────────────── */
speedNetworking: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-secondary)">Networking Round 2</text>\
<rect x="360" y="30" width="72" height="14" rx="7" fill="rgba(0,232,162,0.15)"/>\
<circle cx="372" cy="37" r="3" fill="#00E8A2"/>\
<text x="382" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#00E8A2">MATCHING</text>\
<circle cx="140" cy="128" r="30" fill="rgba(107,62,245,0.15)"/>\
<circle cx="140" cy="118" r="10" fill="#6B3EF5"/>\
<path d="M122 148 Q140 132 158 148 Z" fill="#6B3EF5"/>\
<circle cx="340" cy="128" r="30" fill="rgba(245,166,35,0.15)"/>\
<circle cx="340" cy="118" r="10" fill="#F5A623"/>\
<path d="M322 148 Q340 132 358 148 Z" fill="#F5A623"/>\
<line x1="172" y1="128" x2="308" y2="128" stroke="#00E8A2" stroke-width="2" stroke-dasharray="6 5"/>\
<circle cx="240" cy="128" r="18" fill="var(--bg)" stroke="#00E8A2" stroke-width="1.5"/>\
<path d="M234 128 h12 M240 122 v12" stroke="#00E8A2" stroke-width="2" stroke-linecap="round"/>\
<text x="140" y="176" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)" text-anchor="middle">Mentor</text>\
<text x="340" y="176" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)" text-anchor="middle">Founder</text>\
<rect x="24" y="206" width="432" height="1" fill="var(--border)"/>\
<text x="24" y="230" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="var(--text-muted)" letter-spacing="1">UP NEXT</text>\
<rect x="24" y="242" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="48" cy="269" r="13" fill="rgba(245,62,159,0.15)"/>\
<circle cx="48" cy="264" r="4.5" fill="#F53E9F"/>\
<path d="M40 276 Q48 269 56 276 Z" fill="#F53E9F"/>\
<rect x="70" y="261" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="70" y="273" width="46" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="171" y="242" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="195" cy="269" r="13" fill="rgba(107,62,245,0.15)"/>\
<circle cx="195" cy="264" r="4.5" fill="#6B3EF5"/>\
<path d="M187 276 Q195 269 203 276 Z" fill="#6B3EF5"/>\
<rect x="217" y="261" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="217" y="273" width="46" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="318" y="242" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="342" cy="269" r="13" fill="rgba(0,232,162,0.15)"/>\
<circle cx="342" cy="264" r="4.5" fill="#00E8A2"/>\
<path d="M334 276 Q342 269 350 276 Z" fill="#00E8A2"/>\
<rect x="364" y="261" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="364" y="273" width="46" height="6" rx="3" fill="var(--border-subtle)"/>\
</svg>',

/* ── Communities ──────────────────────────────────────────── */
community: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="120" height="272" rx="12" fill="var(--bg-alt)"/>\
<rect x="40" y="44" width="60" height="10" rx="5" fill="var(--border)"/>\
<rect x="40" y="74" width="88" height="26" rx="8" fill="rgba(245,62,159,0.15)"/>\
<text x="52" y="91" font-family="Lato, sans-serif" font-size="11" fill="#F53E9F"># general</text>\
<text x="52" y="125" font-family="Lato, sans-serif" font-size="11" fill="var(--text-muted)"># intros</text>\
<text x="52" y="159" font-family="Lato, sans-serif" font-size="11" fill="var(--text-muted)"># events</text>\
<text x="52" y="193" font-family="Lato, sans-serif" font-size="11" fill="var(--text-muted)"># wins</text>\
<line x1="40" y1="222" x2="128" y2="222" stroke="var(--border)" stroke-width="1"/>\
<circle cx="50" cy="244" r="8" fill="rgba(107,62,245,0.2)"/>\
<circle cx="64" cy="244" r="8" fill="rgba(0,232,162,0.2)"/>\
<circle cx="78" cy="244" r="8" fill="rgba(245,166,35,0.2)"/>\
<text x="94" y="248" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">+42</text>\
<rect x="160" y="24" width="296" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="176" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#F53E9F"># general</text>\
<circle cx="180" cy="86" r="14" fill="rgba(107,62,245,0.15)"/>\
<circle cx="180" cy="81" r="5" fill="#6B3EF5"/>\
<path d="M172 94 Q180 86 188 94 Z" fill="#6B3EF5"/>\
<rect x="204" y="74" width="90" height="8" rx="4" fill="var(--border)"/>\
<rect x="204" y="88" width="200" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="204" y="99" width="150" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<circle cx="180" cy="150" r="14" fill="rgba(0,232,162,0.15)"/>\
<circle cx="180" cy="145" r="5" fill="#00E8A2"/>\
<path d="M172 158 Q180 150 188 158 Z" fill="#00E8A2"/>\
<rect x="204" y="138" width="70" height="8" rx="4" fill="var(--border)"/>\
<rect x="204" y="152" width="220" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="204" y="163" width="120" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<circle cx="180" cy="214" r="14" fill="rgba(245,166,35,0.15)"/>\
<circle cx="180" cy="209" r="5" fill="#F5A623"/>\
<path d="M172 222 Q180 214 188 222 Z" fill="#F5A623"/>\
<rect x="204" y="202" width="84" height="8" rx="4" fill="var(--border)"/>\
<rect x="204" y="216" width="180" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="160" y="256" width="296" height="40" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="176" y="270" width="200" height="12" rx="6" fill="var(--border-subtle)"/>\
<circle cx="432" cy="276" r="13" fill="#F53E9F"/>\
<path d="M427 276 h10 M432 271 v10" stroke="var(--on-accent)" stroke-width="1.8" stroke-linecap="round"/>\
</svg>',

/* ── Courses & LMS ────────────────────────────────────────── */
courses: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Foundations Course</text>\
<rect x="360" y="30" width="72" height="14" rx="7" fill="rgba(0,232,162,0.15)"/>\
<text x="372" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#00E8A2">65% DONE</text>\
<rect x="24" y="62" width="432" height="6" rx="3" fill="var(--bg)"/>\
<rect x="24" y="62" width="281" height="6" rx="3" fill="#00E8A2"/>\
<rect x="24" y="84" width="432" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="52" cy="107" r="13" fill="rgba(0,232,162,0.15)"/>\
<path d="M46 107 l4 4 l8 -8" stroke="#00E8A2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<rect x="76" y="99" width="120" height="8" rx="4" fill="var(--border)"/>\
<rect x="76" y="112" width="70" height="6" rx="3" fill="var(--border-subtle)"/>\
<text x="420" y="111" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">12:40</text>\
<rect x="24" y="138" width="432" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="52" cy="161" r="13" fill="rgba(0,232,162,0.15)"/>\
<path d="M46 161 l4 4 l8 -8" stroke="#00E8A2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<rect x="76" y="153" width="140" height="8" rx="4" fill="var(--border)"/>\
<rect x="76" y="166" width="90" height="6" rx="3" fill="var(--border-subtle)"/>\
<text x="420" y="165" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">08:15</text>\
<rect x="24" y="192" width="432" height="46" rx="10" fill="var(--bg)" stroke="rgba(107,62,245,0.4)" stroke-width="1.5"/>\
<circle cx="52" cy="215" r="13" fill="rgba(107,62,245,0.15)"/>\
<path d="M48 209 v12 l10 -6 z" fill="#6B3EF5"/>\
<rect x="76" y="207" width="110" height="8" rx="4" fill="var(--border)"/>\
<rect x="76" y="220" width="76" height="6" rx="3" fill="var(--border-subtle)"/>\
<text x="420" y="219" font-family="Lato, sans-serif" font-size="10" fill="#6B3EF5">Now</text>\
<rect x="24" y="246" width="432" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="52" cy="269" r="13" fill="var(--bg-alt)" stroke="var(--border)" stroke-width="1"/>\
<text x="52" y="273" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" text-anchor="middle">4</text>\
<rect x="76" y="261" width="130" height="8" rx="4" fill="var(--border)"/>\
<rect x="76" y="274" width="60" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="404" y="262" width="34" height="14" rx="7" fill="rgba(245,166,35,0.15)"/>\
<text x="411" y="272" font-family="Lato, sans-serif" font-size="8" fill="#F5A623">Cert</text>\
</svg>',

/* ── Consultations & Booking ──────────────────────────────── */
consultation: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="200" height="272" rx="12" fill="var(--bg-alt)"/>\
<circle cx="64" cy="72" r="24" fill="rgba(107,62,245,0.15)"/>\
<circle cx="64" cy="64" r="9" fill="#6B3EF5"/>\
<path d="M48 90 Q64 76 80 90 Z" fill="#6B3EF5"/>\
<rect x="100" y="56" width="90" height="9" rx="4.5" fill="var(--border)"/>\
<rect x="100" y="72" width="70" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<line x1="44" y1="112" x2="204" y2="112" stroke="var(--border)" stroke-width="1"/>\
<circle cx="52" cy="136" r="4" fill="#00E8A2"/>\
<rect x="66" y="132" width="110" height="8" rx="4" fill="var(--border)"/>\
<circle cx="52" cy="160" r="4" fill="#00E8A2"/>\
<rect x="66" y="156" width="90" height="8" rx="4" fill="var(--border)"/>\
<circle cx="52" cy="184" r="4" fill="#00E8A2"/>\
<rect x="66" y="180" width="120" height="8" rx="4" fill="var(--border)"/>\
<rect x="44" y="242" width="160" height="34" rx="10" fill="rgba(245,166,35,0.12)"/>\
<text x="64" y="263" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#F5A623">$120 / session</text>\
<text x="248" y="42" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Pick a time</text>\
<rect x="248" y="58" width="94" height="34" rx="9" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="295" y="79" font-family="Lato, sans-serif" font-size="11" fill="var(--text-secondary)" text-anchor="middle">9:00 AM</text>\
<rect x="352" y="58" width="94" height="34" rx="9" fill="#6B3EF5"/>\
<text x="399" y="79" font-family="Lato, sans-serif" font-size="11" font-weight="700" fill="var(--on-accent)" text-anchor="middle">10:30 AM</text>\
<rect x="248" y="100" width="94" height="34" rx="9" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="295" y="121" font-family="Lato, sans-serif" font-size="11" fill="var(--text-secondary)" text-anchor="middle">1:00 PM</text>\
<rect x="352" y="100" width="94" height="34" rx="9" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="399" y="121" font-family="Lato, sans-serif" font-size="11" fill="var(--text-secondary)" text-anchor="middle">3:30 PM</text>\
<rect x="248" y="142" width="94" height="34" rx="9" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="295" y="163" font-family="Lato, sans-serif" font-size="11" fill="var(--text-secondary)" text-anchor="middle">4:00 PM</text>\
<rect x="352" y="142" width="94" height="34" rx="9" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="399" y="163" font-family="Lato, sans-serif" font-size="11" fill="var(--text-muted)" text-anchor="middle">5:30 PM</text>\
<rect x="248" y="196" width="198" height="1" fill="var(--border)"/>\
<rect x="248" y="214" width="198" height="30" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<path d="M264 223 h14 v12 h-14 z M267 220 v3 M275 220 v3" stroke="#00E8A2" stroke-width="1.5" fill="none"/>\
<text x="290" y="233" font-family="Lato, sans-serif" font-size="10" fill="var(--text-secondary)">Video call included</text>\
<rect x="248" y="252" width="198" height="40" rx="10" fill="#6B3EF5"/>\
<text x="347" y="277" font-family="Montserrat, sans-serif" font-size="12" font-weight="700" fill="var(--on-accent)" text-anchor="middle">Book &amp; Pay</text>\
</svg>',

/* ── Payments & Earnings ──────────────────────────────────── */
payments: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Earnings</text>\
<rect x="360" y="30" width="72" height="14" rx="7" fill="rgba(0,232,162,0.15)"/>\
<circle cx="372" cy="37" r="3" fill="#00E8A2"/>\
<text x="382" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#00E8A2">PAID OUT</text>\
<rect x="24" y="64" width="210" height="76" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="42" y="92" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">This month</text>\
<text x="42" y="120" font-family="Montserrat, sans-serif" font-size="24" font-weight="800" fill="#F5A623">$8,420</text>\
<rect x="246" y="64" width="210" height="76" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="264" y="92" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">Active members</text>\
<text x="264" y="120" font-family="Montserrat, sans-serif" font-size="24" font-weight="800" fill="#6B3EF5">312</text>\
<rect x="24" y="156" width="432" height="140" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="52" y="230" width="30" height="46" rx="5" fill="rgba(245,166,35,0.3)"/>\
<rect x="104" y="210" width="30" height="66" rx="5" fill="rgba(245,166,35,0.3)"/>\
<rect x="156" y="238" width="30" height="38" rx="5" fill="rgba(245,166,35,0.3)"/>\
<rect x="208" y="196" width="30" height="80" rx="5" fill="rgba(245,166,35,0.3)"/>\
<rect x="260" y="216" width="30" height="60" rx="5" fill="rgba(245,166,35,0.3)"/>\
<rect x="312" y="184" width="30" height="92" rx="5" fill="#F5A623"/>\
<rect x="364" y="204" width="30" height="72" rx="5" fill="rgba(245,166,35,0.3)"/>\
<text x="42" y="184" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">Revenue over time</text>\
</svg>',

/* ── Forms & Registration ─────────────────────────────────── */
forms: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="248" height="272" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="44" y="56" font-family="Montserrat, sans-serif" font-size="12" font-weight="700" fill="var(--text-secondary)">Event Registration</text>\
<text x="44" y="88" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Full name</text>\
<rect x="44" y="94" width="208" height="30" rx="8" fill="var(--bg-alt)" stroke="var(--border)" stroke-width="1"/>\
<rect x="56" y="105" width="120" height="8" rx="4" fill="var(--border)"/>\
<text x="44" y="146" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Email</text>\
<rect x="44" y="152" width="208" height="30" rx="8" fill="var(--bg-alt)" stroke="rgba(245,62,159,0.4)" stroke-width="1.5"/>\
<rect x="56" y="163" width="150" height="8" rx="4" fill="var(--border)"/>\
<text x="44" y="204" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Organization</text>\
<rect x="44" y="210" width="208" height="30" rx="8" fill="var(--bg-alt)" stroke="var(--border)" stroke-width="1"/>\
<rect x="56" y="221" width="90" height="8" rx="4" fill="var(--border-subtle)"/>\
<rect x="44" y="254" width="208" height="34" rx="10" fill="#F53E9F"/>\
<text x="148" y="276" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--on-accent)" text-anchor="middle">Register</text>\
<rect x="288" y="24" width="168" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="304" y="41" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-secondary)">Responses</text>\
<rect x="404" y="30" width="40" height="14" rx="7" fill="rgba(0,232,162,0.15)"/>\
<text x="424" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#00E8A2" text-anchor="middle">248</text>\
<rect x="288" y="62" width="168" height="40" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="312" cy="82" r="11" fill="rgba(107,62,245,0.15)"/>\
<circle cx="312" cy="78" r="4" fill="#6B3EF5"/>\
<path d="M305 88 Q312 82 319 88 Z" fill="#6B3EF5"/>\
<rect x="332" y="74" width="80" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="332" y="86" width="56" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="288" y="110" width="168" height="40" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="312" cy="130" r="11" fill="rgba(0,232,162,0.15)"/>\
<circle cx="312" cy="126" r="4" fill="#00E8A2"/>\
<path d="M305 136 Q312 130 319 136 Z" fill="#00E8A2"/>\
<rect x="332" y="122" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="332" y="134" width="60" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="288" y="158" width="168" height="40" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="312" cy="178" r="11" fill="rgba(245,166,35,0.15)"/>\
<circle cx="312" cy="174" r="4" fill="#F5A623"/>\
<path d="M305 184 Q312 178 319 184 Z" fill="#F5A623"/>\
<rect x="332" y="170" width="84" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="332" y="182" width="48" height="6" rx="3" fill="var(--border-subtle)"/>\
<rect x="288" y="252" width="168" height="36" rx="10" fill="var(--bg)" stroke="rgba(0,232,162,0.4)" stroke-width="1.5"/>\
<path d="M312 264 v10 M308 270 l4 4 l4 -4 M304 278 h16" stroke="#00E8A2" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<text x="332" y="274" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#00E8A2">Export CSV</text>\
</svg>',

/* ── Event Management ─────────────────────────────────────── */
event: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="120" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="44" y="52" font-family="Montserrat, sans-serif" font-size="12" font-weight="700" fill="var(--text-secondary)">Annual Summit 2026</text>\
<rect x="44" y="66" width="180" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="44" y="80" width="120" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="44" y="108" width="90" height="20" rx="6" fill="rgba(0,232,162,0.12)"/>\
<text x="56" y="122" font-family="Lato, sans-serif" font-size="9" fill="#00E8A2">Sponsored by</text>\
<rect x="352" y="100" width="88" height="32" rx="8" fill="var(--bg-alt)" stroke="rgba(0,232,162,0.35)" stroke-width="1"/>\
<circle cx="372" cy="116" r="9" fill="rgba(0,232,162,0.2)"/>\
<rect x="388" y="112" width="40" height="8" rx="4" fill="var(--border)"/>\
<text x="44" y="176" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" letter-spacing="1">SPONSORS</text>\
<rect x="24" y="190" width="138" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="50" cy="213" r="13" fill="rgba(107,62,245,0.15)"/>\
<rect x="70" y="205" width="70" height="8" rx="4" fill="var(--border)"/>\
<rect x="70" y="217" width="40" height="6" rx="3" fill="rgba(107,62,245,0.4)"/>\
<rect x="171" y="190" width="138" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="197" cy="213" r="13" fill="rgba(0,232,162,0.15)"/>\
<rect x="217" y="205" width="70" height="8" rx="4" fill="var(--border)"/>\
<rect x="217" y="217" width="40" height="6" rx="3" fill="rgba(0,232,162,0.4)"/>\
<rect x="318" y="190" width="138" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="344" cy="213" r="13" fill="rgba(245,166,35,0.15)"/>\
<rect x="364" y="205" width="70" height="8" rx="4" fill="var(--border)"/>\
<rect x="364" y="217" width="40" height="6" rx="3" fill="rgba(245,166,35,0.4)"/>\
<rect x="24" y="250" width="432" height="46" rx="10" fill="var(--bg)" stroke="rgba(0,232,162,0.4)" stroke-width="1.5"/>\
<circle cx="52" cy="273" r="13" fill="rgba(0,232,162,0.15)"/>\
<path d="M46 273 h12 M52 267 v12" stroke="#00E8A2" stroke-width="2" stroke-linecap="round"/>\
<rect x="76" y="265" width="120" height="8" rx="4" fill="var(--border)"/>\
<rect x="76" y="278" width="76" height="6" rx="3" fill="var(--border-subtle)"/>\
<text x="424" y="277" font-family="Lato, sans-serif" font-size="10" fill="#00E8A2" text-anchor="end">Add sponsor</text>\
</svg>',

/* ── Branding & Localization ──────────────────────────────── */
branding: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="30" rx="9" fill="var(--bg-alt)"/>\
<circle cx="42" cy="39" r="4" fill="var(--border)"/>\
<circle cx="56" cy="39" r="4" fill="var(--border)"/>\
<circle cx="70" cy="39" r="4" fill="var(--border)"/>\
<rect x="92" y="31" width="230" height="16" rx="8" fill="var(--bg)"/>\
<path d="M104 39 h5 v-3 a2.5 2.5 0 0 1 5 0 v3 h5" stroke="var(--text-muted)" stroke-width="1.2" fill="none"/>\
<text x="124" y="43" font-family="Lato, sans-serif" font-size="10" fill="var(--text-secondary)">learn.yourbrand.com</text>\
<rect x="24" y="66" width="432" height="230" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="44" y="86" width="392" height="34" rx="8" fill="var(--bg-alt)"/>\
<circle cx="66" cy="103" r="11" fill="#6B3EF5"/>\
<path d="M61 103 l3 3 l6 -6" stroke="var(--on-accent)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<text x="86" y="107" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text)">Your Brand</text>\
<rect x="360" y="94" width="60" height="18" rx="9" fill="rgba(245,62,159,0.12)"/>\
<text x="390" y="107" font-family="Lato, sans-serif" font-size="9" fill="#F53E9F" text-anchor="middle">العربية</text>\
<rect x="44" y="136" width="180" height="10" rx="5" fill="var(--border)"/>\
<rect x="44" y="156" width="260" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="44" y="170" width="220" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="44" y="196" width="110" height="34" rx="9" fill="#6B3EF5"/>\
<rect x="64" y="209" width="70" height="8" rx="4" fill="var(--on-accent)" opacity="0.85"/>\
<rect x="166" y="196" width="110" height="34" rx="9" fill="transparent" stroke="var(--purple)" stroke-width="1.5"/>\
<rect x="186" y="209" width="70" height="8" rx="4" fill="rgba(107,62,245,0.5)"/>\
<rect x="44" y="248" width="128" height="34" rx="8" fill="var(--bg-alt)"/>\
<circle cx="60" cy="265" r="6" fill="#6B3EF5"/>\
<rect x="72" y="261" width="88" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="184" y="248" width="128" height="34" rx="8" fill="var(--bg-alt)"/>\
<circle cx="200" cy="265" r="6" fill="#00E8A2"/>\
<rect x="212" y="261" width="88" height="7" rx="3.5" fill="var(--border-subtle)"/>\
<rect x="324" y="248" width="112" height="34" rx="8" fill="var(--bg-alt)"/>\
<circle cx="340" cy="265" r="6" fill="#F5A623"/>\
<rect x="352" y="261" width="72" height="7" rx="3.5" fill="var(--border-subtle)"/>\
</svg>',

/* ── Analytics & Administration ───────────────────────────── */
analytics: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Dashboard</text>\
<rect x="24" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="40" y="86" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Attendance</text>\
<text x="40" y="110" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#6B3EF5">94%</text>\
<rect x="172" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="188" y="86" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Active users</text>\
<text x="188" y="110" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#00E8A2">1,204</text>\
<rect x="320" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="336" y="86" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Completion</text>\
<text x="336" y="110" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#F5A623">78%</text>\
<rect x="24" y="134" width="270" height="162" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="40" y="160" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">Engagement trend</text>\
<path d="M44 260 L84 240 L124 248 L164 214 L204 224 L244 188 L274 200" fill="none" stroke="#00E8A2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\
<path d="M44 260 L84 240 L124 248 L164 214 L204 224 L244 188 L274 200 L274 280 L44 280 Z" fill="rgba(0,232,162,0.08)"/>\
<circle cx="244" cy="188" r="4" fill="#00E8A2"/>\
<rect x="306" y="134" width="150" height="162" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="322" y="160" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">Recent activity</text>\
<circle cx="332" cy="184" r="7" fill="rgba(107,62,245,0.2)"/>\
<rect x="346" y="180" width="92" height="7" rx="3.5" fill="var(--border)"/>\
<circle cx="332" cy="210" r="7" fill="rgba(0,232,162,0.2)"/>\
<rect x="346" y="206" width="80" height="7" rx="3.5" fill="var(--border)"/>\
<circle cx="332" cy="236" r="7" fill="rgba(245,62,159,0.2)"/>\
<rect x="346" y="232" width="88" height="7" rx="3.5" fill="var(--border)"/>\
<circle cx="332" cy="262" r="7" fill="rgba(245,166,35,0.2)"/>\
<rect x="346" y="258" width="72" height="7" rx="3.5" fill="var(--border)"/>\
</svg>',


/* ── Event Management (event-suite) ─────────────────────── */
eventMgmt: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Event Dashboard</text>\
<rect x="360" y="30" width="72" height="14" rx="7" fill="rgba(0,232,162,0.15)"/>\
<text x="396" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#00E8A2" text-anchor="middle">LIVE</text>\
<rect x="24" y="62" width="210" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="42" y="84" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Registered</text>\
<text x="42" y="108" font-family="Montserrat, sans-serif" font-size="22" font-weight="800" fill="#6B3EF5">1,842</text>\
<rect x="246" y="62" width="210" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="264" y="84" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Checked in</text>\
<text x="264" y="108" font-family="Montserrat, sans-serif" font-size="22" font-weight="800" fill="#00E8A2">1,206</text>\
<text x="44" y="148" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" letter-spacing="1">TICKETS</text>\
<rect x="24" y="158" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="44" y="170" width="60" height="8" rx="4" fill="var(--border)"/>\
<rect x="44" y="184" width="40" height="14" rx="7" fill="rgba(107,62,245,0.15)"/>\
<text x="64" y="195" font-family="Lato, sans-serif" font-size="9" fill="#6B3EF5" text-anchor="middle">$49</text>\
<text x="100" y="195" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Early Bird</text>\
<rect x="171" y="158" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="191" y="170" width="70" height="8" rx="4" fill="var(--border)"/>\
<rect x="191" y="184" width="40" height="14" rx="7" fill="rgba(245,166,35,0.15)"/>\
<text x="211" y="195" font-family="Lato, sans-serif" font-size="9" fill="#F5A623" text-anchor="middle">$99</text>\
<text x="247" y="195" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">General</text>\
<rect x="318" y="158" width="138" height="54" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="338" y="170" width="50" height="8" rx="4" fill="var(--border)"/>\
<rect x="338" y="184" width="40" height="14" rx="7" fill="rgba(245,62,159,0.15)"/>\
<text x="358" y="195" font-family="Lato, sans-serif" font-size="9" fill="#F53E9F" text-anchor="middle">$199</text>\
<text x="394" y="195" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">VIP</text>\
<text x="44" y="236" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" letter-spacing="1">SPONSORS</text>\
<rect x="24" y="246" width="138" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="50" cy="269" r="13" fill="rgba(107,62,245,0.15)"/>\
<rect x="50" y="264" width="8" height="10" rx="2" fill="#6B3EF5"/>\
<rect x="70" y="261" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="70" y="273" width="40" height="6" rx="3" fill="rgba(107,62,245,0.4)"/>\
<rect x="171" y="246" width="138" height="46" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<circle cx="197" cy="269" r="13" fill="rgba(0,232,162,0.15)"/>\
<rect x="197" y="264" width="8" height="10" rx="2" fill="#00E8A2"/>\
<rect x="217" y="261" width="70" height="7" rx="3.5" fill="var(--border)"/>\
<rect x="217" y="273" width="40" height="6" rx="3" fill="rgba(0,232,162,0.4)"/>\
<rect x="318" y="246" width="138" height="46" rx="10" fill="var(--bg)" stroke="rgba(245,166,35,0.4)" stroke-width="1.5" stroke-dasharray="5 3"/>\
<text x="387" y="273" font-family="Lato, sans-serif" font-size="10" fill="#F5A623" text-anchor="middle">+ Add</text>\
</svg>',

/* ── Event Payments (event-suite) ───────────────────────── */
eventPayments: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Ticket Revenue</text>\
<rect x="24" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="40" y="84" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Total revenue</text>\
<text x="40" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#F5A623">$42,860</text>\
<rect x="172" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="188" y="84" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Tickets sold</text>\
<text x="188" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#6B3EF5">618</text>\
<rect x="320" y="62" width="136" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="336" y="84" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Coupons used</text>\
<text x="336" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#F53E9F">87</text>\
<rect x="24" y="134" width="432" height="110" rx="12" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="42" y="158" font-family="Lato, sans-serif" font-size="10" fill="var(--text-muted)">Sales by ticket tier</text>\
<rect x="42" y="170" width="260" height="12" rx="6" fill="rgba(107,62,245,0.15)"/>\
<rect x="42" y="170" width="160" height="12" rx="6" fill="#6B3EF5"/>\
<text x="210" y="179" font-family="Lato, sans-serif" font-size="8" fill="var(--on-accent)">Early Bird — 312</text>\
<rect x="42" y="192" width="260" height="12" rx="6" fill="rgba(245,166,35,0.15)"/>\
<rect x="42" y="192" width="190" height="12" rx="6" fill="#F5A623"/>\
<text x="210" y="201" font-family="Lato, sans-serif" font-size="8" fill="var(--on-accent)">General — 219</text>\
<rect x="42" y="214" width="260" height="12" rx="6" fill="rgba(245,62,159,0.15)"/>\
<rect x="42" y="214" width="58" height="12" rx="6" fill="#F53E9F"/>\
<text x="108" y="223" font-family="Lato, sans-serif" font-size="8" fill="#F53E9F">VIP — 87</text>\
<text x="44" y="270" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" letter-spacing="1">ACTIVE COUPONS</text>\
<rect x="24" y="280" width="210" height="22" rx="7" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="40" y="295" font-family="Lato, monospace" font-size="10" font-weight="700" fill="#00E8A2">EARLYBIRD30</text>\
<text x="220" y="295" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)" text-anchor="end">30% off</text>\
<rect x="246" y="280" width="210" height="22" rx="7" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="262" y="295" font-family="Lato, monospace" font-size="10" font-weight="700" fill="#F5A623">SPEAKER50</text>\
<text x="442" y="295" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)" text-anchor="end">50% off</text>\
</svg>',

/* ── Event Analytics (event-suite) ──────────────────────── */
eventAnalytics: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>\
<rect x="24" y="24" width="432" height="26" rx="8" fill="var(--bg-alt)"/>\
<text x="40" y="41" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="var(--text-secondary)">Post-Event Report</text>\
<rect x="360" y="30" width="72" height="14" rx="7" fill="rgba(245,62,159,0.15)"/>\
<text x="396" y="41" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#F53E9F" text-anchor="middle">EXPORT</text>\
<rect x="24" y="62" width="106" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="40" y="82" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Attendees</text>\
<text x="40" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#6B3EF5">1,206</text>\
<rect x="140" y="62" width="106" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="156" y="82" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Sessions</text>\
<text x="156" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#00E8A2">24</text>\
<rect x="256" y="62" width="106" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="272" y="82" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">Avg. watch</text>\
<text x="272" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#F5A623">38m</text>\
<rect x="372" y="62" width="84" height="60" rx="10" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<text x="388" y="82" font-family="Lato, sans-serif" font-size="9" fill="var(--text-muted)">NPS</text>\
<text x="388" y="108" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#F53E9F">72</text>\
<text x="44" y="148" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="var(--text-muted)" letter-spacing="1">TOP SESSIONS</text>\
<rect x="24" y="158" width="432" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="44" y="170" width="140" height="8" rx="4" fill="var(--border)"/>\
<rect x="230" y="170" width="140" height="8" rx="4" fill="#6B3EF5" opacity="0.8"/>\
<text x="436" y="180" font-family="Lato, sans-serif" font-size="10" fill="#6B3EF5" text-anchor="end">462</text>\
<rect x="24" y="200" width="432" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="44" y="212" width="120" height="8" rx="4" fill="var(--border)"/>\
<rect x="230" y="212" width="108" height="8" rx="4" fill="#00E8A2" opacity="0.8"/>\
<text x="436" y="222" font-family="Lato, sans-serif" font-size="10" fill="#00E8A2" text-anchor="end">318</text>\
<rect x="24" y="242" width="432" height="36" rx="8" fill="var(--bg)" stroke="var(--border)" stroke-width="1"/>\
<rect x="44" y="254" width="100" height="8" rx="4" fill="var(--border)"/>\
<rect x="230" y="254" width="82" height="8" rx="4" fill="#F5A623" opacity="0.8"/>\
<text x="436" y="264" font-family="Lato, sans-serif" font-size="10" fill="#F5A623" text-anchor="end">247</text>\
<rect x="24" y="286" width="432" height="22" rx="7" fill="rgba(0,232,162,0.08)" stroke="rgba(0,232,162,0.3)" stroke-width="1"/>\
<text x="240" y="301" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#00E8A2" text-anchor="middle">Download full report (PDF)</text>\
</svg>',
};
