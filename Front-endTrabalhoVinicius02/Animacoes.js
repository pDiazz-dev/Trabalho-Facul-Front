document.addEventListener('DOMContentLoaded', () => {
  const animatables = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');   // aparece na tela
      } else {
        entry.target.classList.remove('visible'); // some quanando sai da tela
      }
    });
  }, {
    threshold: 0.2 // 20% visível dispara animação
  });

  animatables.forEach(el => observer.observe(el));
});



