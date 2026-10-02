/**
 * Portfolio Nathan Rama — BTS SIO SISR
 * Performance & Accessibilité WCAG AA
 */
(function () {
  'use strict';

  // Navigation Mobile Accessible
  var burger = document.getElementById('burger');
  var nav = document.getElementById('menu-principal');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var ouvert = nav.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('ouvert')) {
        nav.classList.remove('ouvert');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  // Année dynamique
  var annee = document.getElementById('annee-courante');
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }

  // IntersectionObserver fluide pour l'apparition des sections (sans lib)
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });

    var targets = document.querySelectorAll('.carte, .fiche, .hero-banner');
    targets.forEach(function (el) {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }
})();
