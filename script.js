/* ========================================
   ONDE AS ONDAS QUEBRAM — Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Language Switcher ---
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = 'pt';

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;

      // Update active button
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update all translatable inline elements (data-pt + data-en)
      document.querySelectorAll('[data-pt][data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text !== null) {
          el.textContent = text;
        }
      });

      // Toggle lang-block visibility (sinopse paragraphs)
      document.querySelectorAll('[data-lang-block]').forEach(block => {
        block.style.display = block.dataset.langBlock === lang ? 'block' : 'none';
      });
    });
  });

  // --- Poster Carousel (PT / EN / JP) — cicla automaticamente ---
  const posters = [
    'assets/images/wix/OOQ_poster_PT_baixa.jpg',
    'assets/images/wix/OOQ_poster_EN_baixa.jpg',
    'assets/images/wix/OOQ_poster_JP_baixa.jpg'
  ];
  let currentPoster = 0;
  const posterImg = document.getElementById('sinopse-poster-img');

  // Pré-carrega todos os posters
  posters.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  function cyclePoster() {
    if (!posterImg) return;
    posterImg.classList.add('poster-fade');
    setTimeout(() => {
      currentPoster = (currentPoster + 1) % posters.length;
      posterImg.src = posters[currentPoster];
      posterImg.classList.remove('poster-fade');
    }, 600);
  }

  // Muda a cada 4 segundos
  setInterval(cyclePoster, 4000);

  // --- Scroll reveal animations ---
  const revealSelectors = [
    '.sinopse-grid',
    '.sinopse-lead',
    '.trailer-wrapper',
    '.impacto-stats',
    '.impacto-cards',
    '.events-photos',
    '.flyers-grid',
    '.partner-logos',
    '.crew-block',
    '.midia-grid',
    '.stats-row',
    '.rent-inner'
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(', '));
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = navbar.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
