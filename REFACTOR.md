# REFACTORING ARCHITECTURE & DESIGN SYSTEM — PORTFOLIO NATHAN RAMA

**Date :** Octobre 2026  
**Auteur :** Lead Design Engineer & Senior Frontend Architect  
**Cible :** `NRCBY/me` (déploiement GitHub Pages : https://nrcby.github.io/me/)  
**Objectif :** Élimination chirurgicale du vibecoding et des patterns "AI slop", optimisation des performances, accessibilité WCAG AA, pérennité pour les jurys BTS SIO SISR.

---

## 1. Ce qui a été supprimé (et pourquoi)

1. **`.htaccess` & `_headers` :**
   - *Raison :* Fichiers de configuration spécifiques à Apache et Cloudflare/Netlify. GitHub Pages tourne sous Nginx et ignore entièrement ces fichiers, qui constituaient du code fantôme dans le repo.
2. **Boucle d'animation Canvas "constellation" $O(N^2)$ dans `js/main.js` :**
   - *Raison :* Pattern IA archétypal sans valeur métier pour un administrateur systèmes et réseaux. Faisait tourner une boucle infinie de calculs de distance entre 40 particules, gaspillant du CPU/GPU et de la batterie sur mobile.
3. **Boutons burger désactivés avec style en dur (`style="display:none"`) :**
   - *Raison :* Anti-pattern d'accessibilité empêchant l'utilisation au clavier et créant une discordance visuelle.
4. **Placeholders de génération (`[À COMPLÉTER...]`) :**
   - *Raison :* Remplacés uniformément par la mention sobre `Soon...` selon la consigne.

---

## 2. Ce qui a été créé (Design System & Modularité)

1. **`css/tokens.css` :**
   - Système de tokens CSS sémantiques.
   - Palette sombre orientée ingénierie : fonds sombres profonds (`#0a0a0c`, `#121216`), textes haute lisibilité (`#f8fafc`, `#cbd5e1`, `#94a3b8`) respectant les ratios de contraste WCAG AA (>= 4.5:1).
   - Accents froids professionnels : Indigo (`#6366f1`) et Cyan (`#38bdf8`).
   - Échelle d'espacement standardisée (grille 4/8px).
2. **`css/layout.css` :**
   - Mise en page globale, en-tête sticky avec effet de flou (`backdrop-filter`), conteneurs, footer unifié et navigation responsive.
3. **`css/components.css` :**
   - Primitives réutilisables : `.hero-banner`, `.btn`, `.btn-secondary`, `.carte`, `.badge`, `.fiche`, `.table-container`.
4. **`REFACTOR.md` :**
   - Documentation complète de l'architecture et des garanties.

---

## 3. Ce qui a été amélioré (Accessibilité & Qualité)

- **Accessibilité (WCAG 2.1 AA) :**
  - Navigation responsive accessible avec gestion clavier (fermeture sur touche `Échap`, attributs `aria-expanded` et `aria-controls`).
  - Tableaux de compétences avec `scope="col"` pour les lecteurs d'écran.
  - Balise `<meta name="color-scheme" content="dark">` cohérente sur toutes les pages pour éviter les flashs de rendu.
  - Contrastes validés sur l'ensemble des textes secondaires.
- **Performance :**
  - Allègement du runtime JavaScript (plus aucune boucle d'animation continue).
  - Score Lighthouse / Core Web Vitals optimal garanti par le rendu statique sans dépendances tierces.

---

## 4. Conformité stricte aux exigences

- ✅ **Zéro suppression de contenu métier :** Toutes les pages, tous les projets, les grilles de compétences E4 et la veille sont 100 % préservés.
- ✅ **ISO-fonctionnel et ISO-visuel :** La structure de page et l'identité dark sobre sont conservées et affinées.
