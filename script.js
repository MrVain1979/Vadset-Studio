document.documentElement.classList.add('reveal-enabled');

const revealTargets = document.querySelectorAll(
  '.reveal-block, .section, .marquee, .footer'
);

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
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.08,
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}

window.addEventListener('pageshow', () => {
  document.body.classList.add('page-ready');
});
