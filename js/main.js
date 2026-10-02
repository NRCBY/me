/**
 * Portfolio Nathan Rama — BTS SIO SISR
 * Script léger, robuste et accessible
 */
(function () {
  'use strict';

  // Navigation mobile accessible
  var burger = document.getElementById('burger');
  var nav = document.getElementById('menu-principal');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var ouvert = nav.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('ouvert')) {
        nav.classList.remove('ouvert');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  // Année courante dynamique
  var annee = document.getElementById('annee-courante');
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }
})();
