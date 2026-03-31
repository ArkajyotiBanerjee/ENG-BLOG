// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in-up for blog cards on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe blog cards
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Smooth page transition feel
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = '1';
  });
});
