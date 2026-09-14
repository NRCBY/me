// Portfolio statique — JavaScript minimal, aucune dépendance, aucune injection HTML dynamique.
(function () {
  'use strict';

  // Menu mobile : bouton d'ouverture/fermeture
  var burger = document.getElementById('burger');
  var nav = document.getElementById('menu-principal');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var ouvert = nav.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });
  }

  // Année courante dans le pied de page
  var annee = document.getElementById('annee-courante');
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }
})();
