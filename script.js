document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
  }

  const yearElements = document.querySelectorAll('.js-year');
  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (window.lottie) {
    document.querySelectorAll('.lottie-icon[data-lottie]').forEach((container) => {
      const animationPath = container.getAttribute('data-lottie');
      if (!animationPath) {
        return;
      }

      window.lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
      });
    });
  }
});
