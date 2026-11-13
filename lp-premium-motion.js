(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const selectors = [
    '.sp-hero-grid > *',
    '.sp-section-head',
    '.sp-card-grid > *',
    '.sp-info-copy',
    '.sp-visual-card',
    '.sp-faq-list > *',
    '.sp-contact-cards > *',
    '.sp-map',
    '.blog-header h1',
    '.blog-header p',
    '.blog-grid > .blog-card',
    '.post-header',
    '.post-featured-image',
    '.post-content > .container > h2',
    '.post-content > .container > .highlight-box',
    '.post-content > .container > .cta-whatsapp',
    '.related-heading',
    '.related-grid > *'
  ].join(',');

  const targets = new Set(
    Array.from(document.querySelectorAll(selectors)).filter((element) => !element.closest('.reveal'))
  );

  // Give pages without specifically named components the same gentle section reveal.
  document.querySelectorAll('main > section:not(.hero):not(.sp-hero)').forEach((section) => {
    const alreadyAnimated = section.querySelector('.sp-section-head, .sp-card, .sp-faq-item, .reveal, .blog-card');
    if (!alreadyAnimated) targets.add(section);
  });

  const staggerCount = new Map();
  targets.forEach((element) => {
    element.classList.add('lp-motion-item');
    const parent = element.parentElement;
    const index = staggerCount.get(parent) || 0;
    staggerCount.set(parent, index + 1);
    element.style.setProperty('--lp-motion-delay', `${Math.min(index, 4) * 70}ms`);
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-lp-motion-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-lp-motion-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  targets.forEach((element) => observer.observe(element));
})();
