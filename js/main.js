/**
 * Nathan Rama — BTS SIO SISR
 * Motion performant, IntersectionObserver avec stagger 60ms
 */
(function () {
  'use strict';

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

  var annee = document.getElementById('annee-courante');
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }

  // Apparition élégante avec décalage de 60ms
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-delay') || 0;
          setTimeout(function () {
            el.classList.add('is-revealed');
          }, delay);
          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });

    var targets = document.querySelectorAll('.hero-banner, .featured-card, .carte, .fiche, .page-section');
    targets.forEach(function (el, index) {
      el.classList.add('reveal-item');
      el.setAttribute('data-delay', (index % 4) * 60);
      observer.observe(el);
    });
  }
})();
