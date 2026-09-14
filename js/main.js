// Portfolio BTS SIO SISR — Nathan Rama
(function () {
  'use strict';

  // Menu burger mobile (si présent)
  var burger = document.getElementById('burger');
  var nav = document.getElementById('menu-principal');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var ouvert = nav.classList.toggle('ouvert');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });
  }

  // Année courante dans le footer
  var annee = document.getElementById('annee-courante');
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }

  // Animation constellation de réseau (Three/Canvas subtil)
  var canvas = document.createElement('canvas');
  canvas.id = 'bg-canvas';
  document.body.prepend(canvas);

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var width, height;
  var particles = [];
  var numParticles = 40;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  for (var i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Dessin des liaisons réseaux
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(138, 79, 247, ' + (0.15 * (1 - dist / 130)) + ')';
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Dessin des nœuds
    for (var k = 0; k < particles.length; k++) {
      var p = particles[k];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(75, 156, 227, 0.4)';
      ctx.fill();
    }

    requestAnimationFrame(loop);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loop();
  }
})();
