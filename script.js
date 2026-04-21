/* ============================================================
   NERO'S AUTO BODY — script.js
   Shared JavaScript for all pages
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── MOBILE NAV TOGGLE ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links > li > a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── BOOK APPOINTMENT MODAL ── */
  const modal = document.getElementById('bookingModal');
  const modalOverlay = document.getElementById('modalOverlay');
  function openModal() {
    if (modalOverlay) { modalOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }
  function closeModal() {
    if (modalOverlay) { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  }
  document.querySelectorAll('.open-modal, .nav-cta').forEach(btn => {
    btn.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  });
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) { if (e.target === modalOverlay) closeModal(); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  /* ── EMAILJS MODAL FORM ── */
  const modalSubmit = document.getElementById('modal-submit');
  if (modalSubmit) {
    modalSubmit.addEventListener('click', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('modal-firstname').value.trim();
      const lastName  = document.getElementById('modal-lastname').value.trim();
      const phone     = document.getElementById('modal-phone').value.trim();
      const email     = document.getElementById('modal-email').value.trim();
      const vehicle   = document.getElementById('modal-vehicle').value.trim();
      const service   = document.getElementById('modal-service').value;
      const date      = document.getElementById('modal-date').value;
      const notes     = document.getElementById('modal-notes').value.trim();

      if (!firstName || !lastName || !phone || !email || !service) {
        alert('Please fill in all required fields.');
        return;
      }

      const btn = document.getElementById('modal-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      emailjs.send('service_u8pk8sp', 'template_0zsqjlm', {
        first_name: firstName,
        last_name:  lastName,
        phone:      phone,
        email:      email,
        vehicle:    vehicle,
        service:    service,
        date:       date,
        notes:      notes,
      })
      .then(function() {
        btn.textContent = '✓ Appointment Confirmed!';
        btn.style.background = 'linear-gradient(135deg, #4a7a4a, #3a6a3a)';
        document.getElementById('modal-firstname').value = '';
        document.getElementById('modal-lastname').value  = '';
        document.getElementById('modal-phone').value     = '';
        document.getElementById('modal-email').value     = '';
        document.getElementById('modal-vehicle').value   = '';
        document.getElementById('modal-service').value   = '';
        document.getElementById('modal-date').value      = '';
        document.getElementById('modal-notes').value     = '';
        setTimeout(() => { closeModal(); btn.textContent = 'Confirm Appointment →'; btn.disabled = false; btn.style.background = ''; }, 3000);
      })
      .catch(function(error) {
        console.error('EmailJS error:', error);
        btn.textContent = 'Confirm Appointment →';
        btn.disabled = false;
        alert('Something went wrong. Please call us at (203) 469-1164.');
      });
    });
  }

  /* ── EMAILJS HERO FORM ── */
  const heroSubmit = document.getElementById('hero-submit');
  if (heroSubmit) {
    heroSubmit.addEventListener('click', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('hero-firstname').value.trim();
      const lastName  = document.getElementById('hero-lastname').value.trim();
      const phone     = document.getElementById('hero-phone').value.trim();
      const email     = document.getElementById('hero-email').value.trim();
      const service   = document.getElementById('hero-service').value;

      if (!firstName || !lastName || !phone || !email || !service) {
        alert('Please fill in all required fields.');
        return;
      }

      const btn = document.getElementById('hero-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      emailjs.send('service_xu46dkf', 'template_3a6vy5k', {
        first_name: firstName,
        last_name:  lastName,
        phone:      phone,
        email:      email,
        service:    service,
      })
      .then(function() {
        btn.textContent = '✓ Request Sent!';
        btn.style.background = 'linear-gradient(135deg, #4a7a4a, #3a6a3a)';
        btn.style.color = '#ffffff';
        document.getElementById('hero-firstname').value = '';
        document.getElementById('hero-lastname').value  = '';
        document.getElementById('hero-phone').value     = '';
        document.getElementById('hero-email').value     = '';
        document.getElementById('hero-service').value   = '';
      })
      .catch(function(error) {
        console.error('EmailJS error:', error);
        btn.textContent = 'Request Free Estimate →';
        btn.disabled = false;
        alert('Something went wrong. Please call us at (203) 469-1164.');
      });
    });
  }

  /* ── EMAILJS SIDEBAR FORM ── */
  const sidebarSubmit = document.getElementById('sidebar-submit');
  if (sidebarSubmit) {
    sidebarSubmit.addEventListener('click', function(e) {
      e.preventDefault();

      const firstName = document.getElementById('sidebar-firstname').value.trim();
      const lastName  = document.getElementById('sidebar-lastname').value.trim();
      const phone     = document.getElementById('sidebar-phone').value.trim();
      const email     = document.getElementById('sidebar-email').value.trim();
      const vehicle   = document.getElementById('sidebar-vehicle').value.trim();
      const notes     = document.getElementById('sidebar-notes').value.trim();

      if (!firstName || !lastName || !phone || !email) {
        alert('Please fill in all required fields.');
        return;
      }

      const btn = document.getElementById('sidebar-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      emailjs.send('service_xu46dkf', 'template_3a6vy5k', {
        first_name: firstName,
        last_name:  lastName,
        phone:      phone,
        email:      email,
        vehicle:    vehicle,
        notes:      notes,
      })
      .then(function() {
        btn.textContent = '✓ Request Sent!';
        btn.style.background = 'linear-gradient(135deg, #4a7a4a, #3a6a3a)';
        btn.style.color = '#ffffff';
        document.getElementById('sidebar-firstname').value = '';
        document.getElementById('sidebar-lastname').value  = '';
        document.getElementById('sidebar-phone').value     = '';
        document.getElementById('sidebar-email').value     = '';
        document.getElementById('sidebar-vehicle').value   = '';
        document.getElementById('sidebar-notes').value     = '';
      })
      .catch(function(error) {
        console.error('EmailJS error:', error);
        btn.textContent = 'Request Free Estimate →';
        btn.disabled = false;
        alert('Something went wrong. Please call us at (203) 469-1164.');
      });
    });
  }

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── BEFORE/AFTER SLIDER ── */
  document.querySelectorAll('.ba-slider').forEach(function (slider) {
    const afterDiv = slider.querySelector('.ba-after');
    const handle   = slider.querySelector('.ba-handle');
    let dragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pct = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
      afterDiv.style.width = pct + '%';
      handle.style.left = pct + '%';
    }

    slider.addEventListener('mousedown',  function (e) { dragging = true; setPosition(e.clientX); });
    slider.addEventListener('touchstart', function (e) { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('mousemove',  function (e) { if (dragging) setPosition(e.clientX); });
    window.addEventListener('touchmove',  function (e) { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('mouseup',    function () { dragging = false; });
    window.addEventListener('touchend',   function () { dragging = false; });

    setPosition(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width * 0.5);
    window.addEventListener('resize', function () {
      setPosition(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width * 0.5);
    });
  });

  /* ── TESTIMONIAL CAROUSEL ── */
  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel) {
    const track  = carousel.querySelector('.testimonial-track');
    const cards  = carousel.querySelectorAll('.testimonial-card');
    const dots   = carousel.querySelectorAll('.t-dot');
    const prevBtn = carousel.querySelector('.testimonial-btn.prev');
    const nextBtn = carousel.querySelector('.testimonial-btn.next');
    let current = 0;

    function goTo(idx) {
      current = (idx + cards.length) % cards.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
    setInterval(() => goTo(current + 1), 6000);
  }

  /* ── GALLERY FILTER ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ── SCROLL ANIMATION ── */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .process-card, .tcard, .team-card, .service-overview-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

});
