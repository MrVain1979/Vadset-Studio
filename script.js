document.documentElement.classList.add('reveal-enabled');

const revealTargets = document.querySelectorAll(
  [
    '.reveal-block',
    '.section',
    '.footer',
    '.project-card',
    '.partner-list span',
    '.service-item',
    '.approach article',
    '.featured-insight',
    '.insight-list a',
    '.footer-logo',
    '.footer-contact',
    '.footer-nav',
    '.footer p',
  ].join(', ')
);

const revealIfInView = (target) => {
  const rect = target.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const preload = viewportHeight * 0.18;

  if (rect.top < viewportHeight + preload && rect.bottom > -preload) {
    target.classList.add('is-visible');
    return true;
  }

  return false;
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px 18% 0px',
      threshold: 0,
    }
  );

  revealTargets.forEach((target) => {
    if (!revealIfInView(target)) {
      observer.observe(target);
    }
  });

  window.addEventListener('load', () => {
    revealTargets.forEach((target) => {
      if (!target.classList.contains('is-visible') && revealIfInView(target)) {
        observer.unobserve(target);
      }
    });
  });
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}

window.addEventListener('pageshow', () => {
  document.body.classList.add('page-ready');
});

const serviceAccordion = document.querySelector('[data-accordion]');

if (serviceAccordion) {
  const serviceItems = Array.from(serviceAccordion.querySelectorAll('.service-item'));

  const setServiceOpen = (item, isOpen) => {
    const trigger = item.querySelector('.service-trigger');
    const panel = item.querySelector('.service-panel');

    item.classList.toggle('is-open', isOpen);
    trigger.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
  };

  serviceItems.forEach((item) => {
    const trigger = item.querySelector('.service-trigger');

    trigger.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('is-open');

      serviceItems.forEach((serviceItem) => setServiceOpen(serviceItem, false));

      if (shouldOpen) {
        setServiceOpen(item, true);
      }
    });
  });
}
