document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-horizontal');
  // anexa índice para stagger
  cards.forEach((c, i) => c.dataset.idx = i);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Number(entry.target.dataset.idx) || 0;
        // pequeno delay por índice para efeito em cascata
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 120);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
  
  });

  cards.forEach(card => observer.observe(card));
});