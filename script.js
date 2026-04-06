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

    // init at 50%
    setPosition(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width * 0.5);
    // re-init on resize
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
    // auto-advance
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
