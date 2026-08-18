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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
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
/* ── Suite Hero — 1 ──────────────────────────── */
suiteHero1: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
\
<text x="97" y="22" font-family="Montserrat, sans-serif" font-size="8" font-weight="700" fill="#F53E9F" text-anchor="middle" letter-spacing="1.5">WHAT YOU HAVE TODAY</text>\
<text x="383" y="22" font-family="Montserrat, sans-serif" font-size="8" font-weight="700" fill="#6B3EF5" text-anchor="middle" letter-spacing="1.5">YOUR ECOSYSTEM</text>\
\
<rect x="12" y="34" width="170" height="252" rx="14" fill="var(--bg)" stroke="rgba(245,62,159,0.2)" stroke-width="1"/>\
\
<rect x="22" y="84" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="35" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\
\
<rect x="74" y="84" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="87" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>\
\
<rect x="126" y="84" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="139" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>\
\
<rect x="22" y="138" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="35" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>\
\
<rect x="74" y="138" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="87" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\
\
<rect x="126" y="138" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="139" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>\
\
<rect x="22" y="192" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="35" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>\
\
<rect x="74" y="192" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="87" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
\
<rect x="126" y="192" width="46" height="46" rx="10" fill="rgba(245,62,159,0.08)" stroke="rgba(245,62,159,0.2)" stroke-width="0.8"/>\
<svg x="139" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(245,62,159,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>\
\
<line x1="234" y1="94" x2="234" y2="134" stroke="var(--border)" stroke-width="1"/>\
<circle cx="234" cy="160" r="18" fill="rgba(107,62,245,0.1)" stroke="rgba(107,62,245,0.3)" stroke-width="1"/>\
<path d="M228 160 L238 160 M234 154 L240 160 L234 166" fill="none" stroke="#6B3EF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
<line x1="234" y1="180" x2="234" y2="220" stroke="var(--border)" stroke-width="1"/>\
<text x="234" y="244" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#6B3EF5" text-anchor="middle">Replace with one</text>\
\
<rect x="298" y="34" width="170" height="252" rx="14" fill="var(--bg)" stroke="rgba(107,62,245,0.3)" stroke-width="1.5"/>\
<text x="383" y="156" font-family="Montserrat, sans-serif" font-size="14" font-weight="800" fill="var(--text-secondary)" text-anchor="middle" letter-spacing="0.5">BRAINSMINGLE</text>\
<text x="383" y="176" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#6B3EF5" text-anchor="middle" letter-spacing="3">SUITE</text>\
</svg>',

/* ── Suite Hero — 2 ──────────────────────────── */
suiteHero: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
\
<text x="97" y="22" font-family="Montserrat, sans-serif" font-size="8" font-weight="700" fill="#EF4444" text-anchor="middle" letter-spacing="1.5">DISCONNECTED TOOLS</text>\
<text x="383" y="22" font-family="Montserrat, sans-serif" font-size="8" font-weight="700" fill="#6B3EF5" text-anchor="middle" letter-spacing="1.5">YOUR ECOSYSTEM</text>\
\
<rect x="12" y="34" width="170" height="252" rx="14" fill="var(--bg)" stroke="rgba(239,68,68,0.2)" stroke-width="1"/>\
\
<rect x="22" y="84" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="35" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\
\
<rect x="74" y="84" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="87" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>\
\
<rect x="126" y="84" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="139" y="97" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>\
\
<rect x="22" y="138" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="35" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>\
\
<rect x="74" y="138" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="87" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\
\
<rect x="126" y="138" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="139" y="151" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>\
\
<rect x="22" y="192" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="35" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>\
\
<rect x="74" y="192" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="87" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
\
<rect x="126" y="192" width="46" height="46" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.2)" stroke-width="0.8"/>\
<svg x="139" y="205" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.55)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>\
\
<line x1="234" y1="94" x2="234" y2="134" stroke="var(--border)" stroke-width="1"/>\
<circle cx="234" cy="160" r="18" fill="rgba(107,62,245,0.1)" stroke="rgba(107,62,245,0.3)" stroke-width="1"/>\
<path d="M228 160 L238 160 M234 154 L240 160 L234 166" fill="none" stroke="#6B3EF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
<line x1="234" y1="180" x2="234" y2="220" stroke="var(--border)" stroke-width="1"/>\
<text x="234" y="244" font-family="Montserrat, sans-serif" font-size="9" font-weight="700" fill="#6B3EF5" text-anchor="middle">Replace with one</text>\
\
<rect x="298" y="34" width="170" height="252" rx="14" fill="var(--bg)" stroke="rgba(107,62,245,0.3)" stroke-width="1.5"/>\
<text x="383" y="156" font-family="Montserrat, sans-serif" font-size="14" font-weight="800" fill="var(--text-secondary)" text-anchor="middle" letter-spacing="0.5">BRAINSMINGLE</text>\
<text x="383" y="176" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#6B3EF5" text-anchor="middle" letter-spacing="3">SUITE</text>\
</svg>',

/* ── Suite Hero — 3 ──────────────────────────── */
suiteHero_3: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="16" fill="var(--bg-elevated)" stroke="var(--border)" stroke-width="1"/>\
\
<rect x="14" y="56" width="204" height="208" rx="14" fill="var(--bg)" stroke="rgba(216,90,48,0.2)" stroke-width="0.8"/>\
\
<rect x="28" y="76" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="39" y="87" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\
\
<rect x="76" y="76" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="87" y="87" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>\
\
<rect x="124" y="76" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="135" y="87" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>\
\
<rect x="172" y="76" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="183" y="87" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>\
\
<rect x="28" y="126" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="39" y="137" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\
\
<rect x="76" y="126" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="87" y="137" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>\
\
<rect x="124" y="126" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="135" y="137" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>\
\
<rect x="172" y="126" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="183" y="137" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
\
<rect x="28" y="176" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="39" y="187" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>\
\
<rect x="76" y="176" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="87" y="187" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>\
\
<rect x="124" y="176" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="135" y="187" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="rgba(216,90,48,0.5)"/><circle cx="17.5" cy="10.5" r=".5" fill="rgba(216,90,48,0.5)"/><circle cx="6.5" cy="12.5" r=".5" fill="rgba(216,90,48,0.5)"/><circle cx="8.5" cy="7.5" r=".5" fill="rgba(216,90,48,0.5)"/></svg>\
\
<rect x="172" y="176" width="42" height="42" rx="10" fill="rgba(216,90,48,0.06)" stroke="rgba(216,90,48,0.15)" stroke-width="0.7"/>\
<svg x="183" y="187" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(216,90,48,0.5)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>\
\
<rect x="262" y="62" width="204" height="196" rx="14" fill="var(--bg)" stroke="rgba(107,62,245,0.3)" stroke-width="1"/>\
<text x="364" y="86" font-family="Montserrat, sans-serif" font-size="9" font-weight="800" fill="var(--text-secondary)" text-anchor="middle" letter-spacing="0.5">BRAINSMINGLE SUITE</text>\
<rect x="274" y="94" width="180" height="1" fill="rgba(107,62,245,0.1)"/>\
\
<svg x="278" y="110" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3EF5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18.364 5.636a9 9 0 0 1 0 12.728"/><path d="M5.636 5.636a9 9 0 0 0 0 12.728"/><path d="M15.536 8.464a5 5 0 0 1 0 7.072"/><path d="M8.464 8.464a5 5 0 0 0 0 7.072"/><circle cx="12" cy="12" r="1"/></svg>\
<text x="298" y="121" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Live Sessions</text>\
\
<svg x="374" y="110" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>\
<text x="394" y="121" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Payments</text>\
\
<svg x="278" y="136" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4l3 3-3 3"/><path d="M18 20l3-3-3-3"/><path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h4"/><path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h4"/></svg>\
<text x="298" y="147" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Speed Networking</text>\
\
<svg x="374" y="136" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>\
<text x="394" y="147" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Forms</text>\
\
<svg x="278" y="162" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\
<text x="298" y="173" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Communities</text>\
\
<svg x="374" y="162" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E8A2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>\
<text x="394" y="173" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Events</text>\
\
<svg x="278" y="188" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E8A2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>\
<text x="298" y="199" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Courses &amp; LMS</text>\
\
<svg x="374" y="188" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3EF5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="#6B3EF5"/><circle cx="17.5" cy="10.5" r=".5" fill="#6B3EF5"/><circle cx="6.5" cy="12.5" r=".5" fill="#6B3EF5"/><circle cx="8.5" cy="7.5" r=".5" fill="#6B3EF5"/></svg>\
<text x="394" y="199" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Branding</text>\
\
<svg x="278" y="214" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B3EF5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/></svg>\
<text x="298" y="225" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Consultations</text>\
\
<svg x="374" y="214" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E8A2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></svg>\
<text x="394" y="225" font-family="Lato, sans-serif" font-size="8.5" fill="var(--text-muted)">Analytics</text>\
</svg>',
/* ── Suite Hero — Branded deployment (index hero, dark-on-band) ──── */
suiteHeroBrand: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="#13131F" stroke="rgba(255,255,255,0.14)" stroke-width="1.5"/>\
<rect x="20" y="20" width="440" height="30" rx="9" fill="#1A1A2A"/>\
<circle cx="40" cy="35" r="4" fill="#3A3A55"/>\
<circle cx="54" cy="35" r="4" fill="#3A3A55"/>\
<circle cx="68" cy="35" r="4" fill="#3A3A55"/>\
<rect x="92" y="27" width="290" height="16" rx="8" fill="#0E0E1A"/>\
<path d="M108 35 h5 v-3 a2.5 2.5 0 0 1 5 0 v3 h5" stroke="#C07800" stroke-width="1.2" fill="none"/>\
<text x="128" y="39" font-family="JetBrains Mono, monospace" font-size="10" fill="#F5A623">app.yourbrand.com</text>\
<rect x="20" y="62" width="440" height="238" rx="12" fill="#0A0A14"/>\
<rect x="20" y="62" width="132" height="238" fill="#13131F"/>\
<rect x="36" y="78" width="26" height="26" rx="7" fill="#6B3EF5"/>\
<path d="M44 91 l3.5 3.5 l6.5 -6.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<text x="70" y="95" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#fff">Nexus</text>\
<rect x="32" y="118" width="108" height="30" rx="8" fill="rgba(107,62,245,0.16)"/>\
<rect x="32" y="118" width="3" height="30" rx="1.5" fill="#6B3EF5"/>\
<svg x="44" y="126" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\
<text x="66" y="137" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#fff">Webinars</text>\
<svg x="44" y="158" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#AFA9EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>\
<text x="66" y="169" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Courses</text>\
<svg x="44" y="188" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E8A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>\
<text x="66" y="199" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Bookings</text>\
<svg x="44" y="218" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>\
<text x="66" y="229" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Communities</text>\
<svg x="44" y="248" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\
<text x="66" y="259" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Networking</text>\
<text x="170" y="92" font-family="Montserrat, sans-serif" font-size="12" font-weight="700" fill="#fff">Welcome, Jamie</text>\
<rect x="356" y="80" width="48" height="18" rx="9" fill="rgba(245,62,159,0.14)"/>\
<text x="380" y="93" font-family="Inter, sans-serif" font-size="9" fill="#F53E9F" text-anchor="middle">العربية</text>\
<rect x="414" y="80" width="26" height="18" rx="6" fill="#1A1A2A"/>\
<circle cx="427" cy="89" r="4" fill="#6B3EF5"/>\
<rect x="170" y="112" width="130" height="70" rx="10" fill="#13131F" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>\
<circle cx="186" cy="130" r="4" fill="#F53E9F"/>\
<text x="196" y="133" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#F53E9F">LIVE</text>\
<text x="184" y="156" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#fff">Growth Webinar</text>\
<rect x="184" y="166" width="80" height="6" rx="3" fill="#2A2A40"/>\
<rect x="312" y="112" width="128" height="70" rx="10" fill="#13131F" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>\
<text x="328" y="134" font-family="Inter, sans-serif" font-size="9" fill="#7E7E99">Members</text>\
<text x="328" y="162" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#00E8A2">2,847</text>\
<rect x="170" y="196" width="270" height="84" rx="10" fill="#1A1230" stroke="rgba(107,62,245,0.4)" stroke-width="1"/>\
<text x="186" y="220" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#F5A623" letter-spacing="0.5">SPEED NETWORKING</text>\
<text x="186" y="238" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#fff">Round 2 of 5 in progress</text>\
<circle cx="192" cy="256" r="9" fill="#6B3EF5"/><text x="192" y="259" font-family="Inter, sans-serif" font-size="7" fill="#fff" text-anchor="middle">RC</text>\
<circle cx="206" cy="256" r="9" fill="#00E8A2"/><text x="206" y="259" font-family="Inter, sans-serif" font-size="7" fill="#0A0A14" text-anchor="middle">SM</text>\
<circle cx="220" cy="256" r="9" fill="#F5A623"/><text x="220" y="259" font-family="Inter, sans-serif" font-size="7" fill="#0A0A14" text-anchor="middle">DA</text>\
<rect x="366" y="244" width="58" height="26" rx="8" fill="#F5A623"/>\
<text x="395" y="261" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#0A0A14" text-anchor="middle">Join</text>\
</svg>',
/* ── Meet BrainsMingle — many red tools replaced by one platform ── */
meetBrainsMingle: '<svg viewBox="0 0 480 268" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<text x="240" y="26" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#E24B4A" letter-spacing="1.5" text-anchor="middle">DISCONNECTED TOOLS</text>\
<rect x="20" y="38" width="440" height="86" rx="14" fill="none" stroke="rgba(226,75,74,0.35)" stroke-width="1.5" stroke-dasharray="5 5"/>\
<g><rect x="38" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="52" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></g>\
<g><rect x="96" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="110" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></g>\
<g><rect x="154" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="168" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg></g>\
<g><rect x="212" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="226" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></g>\
<g><rect x="270" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="284" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></g>\
<g><rect x="328" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="342" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></g>\
<g><rect x="386" y="60" width="46" height="42" rx="10" fill="rgba(226,75,74,0.08)"/><svg x="400" y="72" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E24B4A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></g>\
<path class="bm-arrow" d="M240 134 v22 M231 149 l9 9 l9 -9" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>\
<svg x="126" y="185" width="75" height="75" viewBox="0 0 800 800"><path class="bm-petals" d="M129.5 0A271 271 0 0 0 391.5 254.37L391.5 117.69A118 118 0 0 1 282 0ZM670.5 0A271 271 0 0 1 408.5 254.37L408.5 117.69A118 118 0 0 0 518 0ZM800 129.5A271 271 0 0 0 545.63 391.5L682.31 391.5A118 118 0 0 1 800 282ZM800 670.5A271 271 0 0 1 545.63 408.5L682.31 408.5A118 118 0 0 0 800 518ZM670.5 800A271 271 0 0 0 408.5 545.63L408.5 682.31A118 118 0 0 1 518 800ZM129.5 800A271 271 0 0 1 391.5 545.63L391.5 682.31A118 118 0 0 0 282 800ZM0 670.5A271 271 0 0 0 254.37 408.5L117.69 408.5A118 118 0 0 1 0 518ZM0 129.5A271 271 0 0 1 254.37 391.5L117.69 391.5A118 118 0 0 0 0 282Z"/><circle class="bm-center" cx="400" cy="400" r="135"/></svg>\
<text class="bm-word" x="210" y="217" font-family="Montserrat, sans-serif" font-size="38" font-weight="800" letter-spacing="0.5">BRAINS</text>\
<text class="bm-word" x="210" y="253" font-family="Montserrat, sans-serif" font-size="38" font-weight="800" letter-spacing="0.5">MINGLE</text>\
</svg>',
/* Home hero — same device mock as suiteHeroBrand, brainsmingle.com URL in purple */
homeHero: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" class="cap-illus">\
<rect x="0" y="0" width="480" height="320" rx="20" fill="#13131F" stroke="rgba(255,255,255,0.14)" stroke-width="1.5"/>\
<rect x="20" y="20" width="440" height="30" rx="9" fill="#1A1A2A"/>\
<circle cx="40" cy="35" r="4" fill="#3A3A55"/>\
<circle cx="54" cy="35" r="4" fill="#3A3A55"/>\
<circle cx="68" cy="35" r="4" fill="#3A3A55"/>\
<rect x="92" y="27" width="290" height="16" rx="8" fill="#0E0E1A"/>\
<text x="112" y="39" font-family="JetBrains Mono, monospace" font-size="10" fill="#A78BFA">www.brainsmingle.com</text>\
<rect x="20" y="62" width="440" height="238" rx="12" fill="#0A0A14"/>\
<rect x="20" y="62" width="132" height="238" fill="#13131F"/>\
<rect x="36" y="78" width="26" height="26" rx="7" fill="#6B3EF5"/>\
<path d="M44 91 l3.5 3.5 l6.5 -6.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>\
<text x="70" y="95" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#fff">Nexus</text>\
<rect x="32" y="118" width="108" height="30" rx="8" fill="rgba(107,62,245,0.16)"/>\
<rect x="32" y="118" width="3" height="30" rx="1.5" fill="#6B3EF5"/>\
<svg x="44" y="126" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>\
<text x="66" y="137" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#fff">Webinars</text>\
<svg x="44" y="158" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#AFA9EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>\
<text x="66" y="169" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Courses</text>\
<svg x="44" y="188" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E8A2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>\
<text x="66" y="199" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Bookings</text>\
<svg x="44" y="218" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F53E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>\
<text x="66" y="229" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Communities</text>\
<svg x="44" y="248" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>\
<text x="66" y="259" font-family="Inter, sans-serif" font-size="10" fill="#B8B8CC">Networking</text>\
<text x="170" y="92" font-family="Montserrat, sans-serif" font-size="12" font-weight="700" fill="#fff">Welcome, Jamie</text>\
<rect x="356" y="80" width="48" height="18" rx="9" fill="rgba(245,62,159,0.14)"/>\
<text x="380" y="93" font-family="Inter, sans-serif" font-size="9" fill="#F53E9F" text-anchor="middle">العربية</text>\
<rect x="414" y="80" width="26" height="18" rx="6" fill="#1A1A2A"/>\
<circle cx="427" cy="89" r="4" fill="#6B3EF5"/>\
<rect x="170" y="112" width="130" height="70" rx="10" fill="#13131F" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>\
<circle cx="186" cy="130" r="4" fill="#F53E9F"/>\
<text x="196" y="133" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#F53E9F">LIVE</text>\
<text x="184" y="156" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#fff">Growth Webinar</text>\
<rect x="184" y="166" width="80" height="6" rx="3" fill="#2A2A40"/>\
<rect x="312" y="112" width="128" height="70" rx="10" fill="#13131F" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>\
<text x="328" y="134" font-family="Inter, sans-serif" font-size="9" fill="#7E7E99">Members</text>\
<text x="328" y="162" font-family="Montserrat, sans-serif" font-size="20" font-weight="800" fill="#00E8A2">2,847</text>\
<rect x="170" y="196" width="270" height="84" rx="10" fill="#1A1230" stroke="rgba(107,62,245,0.4)" stroke-width="1"/>\
<text x="186" y="220" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#F5A623" letter-spacing="0.5">SPEED NETWORKING</text>\
<text x="186" y="238" font-family="Montserrat, sans-serif" font-size="11" font-weight="700" fill="#fff">Round 2 of 5 in progress</text>\
<circle cx="192" cy="256" r="9" fill="#6B3EF5"/><text x="192" y="259" font-family="Inter, sans-serif" font-size="7" fill="#fff" text-anchor="middle">RC</text>\
<circle cx="206" cy="256" r="9" fill="#00E8A2"/><text x="206" y="259" font-family="Inter, sans-serif" font-size="7" fill="#0A0A14" text-anchor="middle">SM</text>\
<circle cx="220" cy="256" r="9" fill="#F5A623"/><text x="220" y="259" font-family="Inter, sans-serif" font-size="7" fill="#0A0A14" text-anchor="middle">DA</text>\
<rect x="366" y="244" width="58" height="26" rx="8" fill="#F5A623"/>\
<text x="395" y="261" font-family="Montserrat, sans-serif" font-size="10" font-weight="700" fill="#0A0A14" text-anchor="middle">Join</text>\
</svg>',
};
