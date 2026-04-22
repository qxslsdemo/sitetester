// ============================================================
// components.js — Nero's Auto Body shared navbar & footer
// Edit this file once to update nav/footer across all pages.
// ============================================================

(function () {

  // ── Helper: inject HTML before a target element ──────────────
  function insertBefore(html, selector) {
    var target = document.querySelector(selector);
    if (!target) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    while (wrapper.firstChild) {
      target.parentNode.insertBefore(wrapper.firstChild, target);
    }
  }

  // ── Helper: replace a placeholder element with HTML ──────────
  function replacePlaceholder(selector, html) {
    var el = document.querySelector(selector);
    if (!el) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    el.parentNode.replaceChild(wrapper.firstChild, el);
  }

  // ── Determine active page for nav highlighting ────────────────
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(href) {
    return currentPage === href ? ' class="active"' : '';
  }
  function isServiceActive() {
    var servicePages = [
      'services.html','collision-repair.html','paint-refinishing.html',
      'paintless-dent-removal.html','insurance-claims.html','custom-bodywork.html'
    ];
    return servicePages.indexOf(currentPage) !== -1 ? ' class="active"' : '';
  }

  // ════════════════════════════════════════════════════════════
  // NAVBAR
  // ════════════════════════════════════════════════════════════
  var NAVBAR = '\
<nav>\
  <a href="index.html" class="nav-logo">\
    <div>\
      <div class="nav-logo-text">Nero\'s Auto Body</div>\
      <div class="nav-logo-sub">Est. 2004</div>\
    </div>\
  </a>\
  <ul class="nav-links">\
    <li><a href="index.html"' + isActive('index.html') + '>Home</a></li>\
    <li class="nav-dropdown">\
      <a href="services.html"' + isServiceActive() + '>Services <span class="drop-arrow">▼</span></a>\
      <div class="dropdown-menu">\
        <a href="collision-repair.html"><svg viewBox="0 0 24 24"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49 1.45-.39-.38-.78 3.37-.9 4.6-1.23 2.51-.67 3.27-.87c.8-.23 1.28-1.05 1.06-1.84z"/></svg>Collision Repair</a>\
        <a href="paint-refinishing.html"><svg viewBox="0 0 24 24"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a1 1 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 0 0 0-1.41z"/></svg>Paint &amp; Refinishing</a>\
        <a href="insurance-claims.html"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>Insurance Claims</a>\
      </div>\
    </li>\
    <li><a href="gallery.html"' + isActive('gallery.html') + '>Gallery</a></li>\
    <li><a href="about.html"' + isActive('about.html') + '>About Nero\'s</a></li>\
    <li><a href="testimonials.html"' + isActive('testimonials.html') + '>Testimonials</a></li>\
    <li><a href="#" class="nav-cta open-modal">Book Appointment</a></li>\
  </ul>\
  <div class="hamburger"><span></span><span></span><span></span></div>\
</nav>';

  // ════════════════════════════════════════════════════════════
  // MOBILE NAV
  // ════════════════════════════════════════════════════════════
  var MOBILE_NAV = '\
<div class="mobile-nav">\
  <a href="index.html">Home</a>\
  <a href="services.html">Services</a>\
  <a href="collision-repair.html" style="padding-left:28px;font-size:11px;">— Collision Repair</a>\
  <a href="paint-refinishing.html" style="padding-left:28px;font-size:11px;">— Paint &amp; Refinishing</a>\
  <a href="insurance-claims.html" style="padding-left:28px;font-size:11px;">— Insurance Claims</a>\
  <a href="gallery.html">Gallery</a>\
  <a href="about.html">About Nero\'s</a>\
  <a href="testimonials.html">Testimonials</a>\
  <a href="#" class="mobile-cta open-modal">Book Appointment</a>\
</div>';

  // ════════════════════════════════════════════════════════════
  // FOOTER
  // ════════════════════════════════════════════════════════════
  var FOOTER = '\
<footer>\
  <div class="footer-top">\
    <div class="footer-brand">\
      <div class="footer-logo" style="display:flex; flex-direction:column; align-items:flex-start; gap:2px;"><div class="footer-logo-text">Nero\'s Auto Body</div><div style="font-family:\'Barlow Condensed\',sans-serif; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:var(--silver-dark);">Est. 2004</div></div>\
      <p class="footer-desc">Family owned and operated since 2004. Premium auto body repair serving our community with integrity, precision, and craftsmanship.</p>\
      <div class="footer-contact-block">\
        <a href="tel:+12034691164" class="fc-item"><svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>(203) 469-1164</a>\
        <a href="mailto:nerosautobody@gmail.com" class="fc-item"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>nerosautobody@gmail.com</a>\
        <a href="#" class="fc-item"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>927 Foxon Road, East Haven, CT 06513</a>\
      </div>\
      <div style="display:flex; gap:12px; margin-top:20px; align-items:center;">\
        <a href="https://www.facebook.com/NerosAutoBody" style="display:flex; align-items:center; gap:8px; color:var(--silver-dark); text-decoration:none; font-family:\'Barlow Condensed\',sans-serif; font-size:13px; letter-spacing:1px; text-transform:uppercase; transition:color 0.2s;" onmouseover="this.style.color=\'var(--silver)\'" onmouseout="this.style.color=\'var(--silver-dark)\'">\
          <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>Facebook\
        </a>\
        <a href="https://www.yelp.com/biz/neros-auto-body-east-haven" style="display:flex; align-items:center; gap:8px; color:var(--silver-dark); text-decoration:none; font-family:\'Barlow Condensed\',sans-serif; font-size:13px; letter-spacing:1px; text-transform:uppercase; transition:color 0.2s;" onmouseover="this.style.color=\'var(--silver)\'" onmouseout="this.style.color=\'var(--silver-dark)\'">\
          <span style="width:20px; height:20px; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:900; line-height:1;">Y</span>Yelp\
        </a>\
      </div>\
    </div>\
    <div class="footer-col">\
      <h4>Services</h4>\
      <ul>\
        <li><a href="collision-repair.html">Collision Repair</a></li>\
        <li><a href="paint-refinishing.html">Paint &amp; Refinishing</a></li>\
        <li><a href="insurance-claims.html">Insurance Claims</a></li>\
      </ul>\
    </div>\
    <div class="footer-col">\
      <h4>Company</h4>\
      <ul>\
        <li><a href="about.html">About Nero\'s</a></li>\
        <li><a href="gallery.html">Gallery</a></li>\
        <li><a href="testimonials.html">Testimonials</a></li>\
      </ul>\
    </div>\
    <div class="footer-col">\
      <h4>Hours</h4>\
      <ul>\
        <li><a href="#">Mon–Thu: 8am – 4:30pm</a></li>\
        <li><a href="#">Fri: 8am – 4pm</a></li>\
        <li><a href="#">Sat-Sun: Closed</a></li>\
      </ul>\
      <br/>\
      <h4>Support</h4>\
      <ul>\
        <li><a href="#" class="open-modal">Book Appointment</a></li>\
        <li><a href="insurance-claims.html">Insurance Info</a></li>\
      </ul>\
    </div>\
  </div>\
  <div class="footer-bottom">\
    <div class="footer-copy">© 2026 Nero\'s Auto Body. All rights reserved. <a href="https://qualnexsolutions.com" target="_blank" style="color: rgba(144,144,144,0.5); text-decoration: underline;">Developed by Qualnex Solutions</a></div>\
    <div class="footer-social">\
      <a href="https://www.facebook.com/NerosAutoBody" class="social-btn"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>\
      <a href="https://www.yelp.com/biz/neros-auto-body-east-haven" class="social-btn" style="font-family:\'Barlow Condensed\',sans-serif; font-weight:700; font-size:16px; color:var(--silver-dark); text-decoration:none; display:flex; align-items:center; justify-content:center;">Y</a>\
    </div>\
  </div>\
</footer>';

  // ════════════════════════════════════════════════════════════
  // BOOKING MODAL
  // ════════════════════════════════════════════════════════════
  var MODAL = '\
<div class="modal-overlay" id="modalOverlay">\
  <div class="modal" id="bookingModal">\
    <div class="modal-header">\
      <div><div class="modal-title">Book an Appointment</div><div class="modal-sub">We\'ll confirm within 24 hours</div></div>\
      <button class="modal-close">✕</button>\
    </div>\
    <div class="modal-body">\
      <div class="contact-row">\
        <a href="tel:+12034691164" class="contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.79 19.79 0 0 1 1 2.82 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/></svg><div class="contact-item-inner"><span class="contact-item-label">Call Us</span><span class="contact-item-value">(203) 469-1164</span></div></a>\
        <a href="mailto:nerosautobody@gmail.com" class="contact-item"><svg viewBox="0 0 24 24" fill="none" stroke="#c8c8c8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><div class="contact-item-inner"><span class="contact-item-label">Email Us</span><span class="contact-item-value">nerosautobody@gmail.com</span></div></a>\
      </div>\
      <div class="form-row">\
        <div class="form-group"><label>First Name</label><input id="modal-firstname" type="text" placeholder="John"/></div>\
        <div class="form-group"><label>Last Name</label><input id="modal-lastname" type="text" placeholder="Smith"/></div>\
      </div>\
      <div class="form-group"><label>Phone Number</label><input id="modal-phone" type="tel" placeholder="(000) 000-0000"/></div>\
      <div class="form-group"><label>Email Address</label><input id="modal-email" type="email" placeholder="you@email.com"/></div>\
      <div class="form-group"><label>Vehicle Year, Make &amp; Model</label><input id="modal-vehicle" type="text" placeholder="e.g. 2021 Toyota Camry"/></div>\
      <div class="form-group"><label>Preferred Date</label><input id="modal-date" type="date"/></div>\
      <div class="form-group"><label>Additional Notes</label><textarea id="modal-notes" rows="3" placeholder="Brief description of the damage or work needed..."></textarea></div>\
      <button id="modal-submit" class="btn-submit">Confirm Appointment →</button>\
    </div>\
  </div>\
</div>';

  // ════════════════════════════════════════════════════════════
  // INJECT into page
  // ════════════════════════════════════════════════════════════
  document.body.insertAdjacentHTML('afterbegin', NAVBAR + MOBILE_NAV);

  // Insert footer + modal before the closing body tag (before script.js)
  var scriptTag = document.querySelector('script[src="script.js"]');
  if (scriptTag) {
    scriptTag.insertAdjacentHTML('beforebegin', FOOTER + MODAL);
  } else {
    document.body.insertAdjacentHTML('beforeend', FOOTER + MODAL);
  }

})();
