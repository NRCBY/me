# Portfolio — Nathan R., BTS SIO option SISR

Portfolio statique présentant mes projets de formation, mon stage, mes projets
personnels d'apprentissage, mon CV, mon tableau de synthèse E4 et ma veille
technologique.

**Établissement :** ESUPEC / Lycée Sainte-Marie, Cholet (2025-2026)

## Aucune installation

Le site est 100 % statique : HTML, CSS et un seul fichier JavaScript sans
dépendance. Aucun build, aucun `npm install`, aucune base de données.

Ouvrir `index.html` dans un navigateur suffit en local. Pour un rendu correct
des liens relatifs et des headers, il est préférable de servir le dossier via
un petit serveur local :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Arborescence

```
.
├── index.html                  # Accueil
├── cv.html                     # CV
├── tableau-e4.html             # Tableau de synthèse E4
├── veille.html                 # Veille technologique
├── security.html               # Mesures de sécurité du site (et limites)
├── projets/
│   ├── index.html              # Liste des projets
│   ├── stage-pcprotech.html
│   ├── mfa-stage.html
│   ├── maquette-packet-tracer.html
│   ├── administration-windows-linux.html
│   ├── analyse-executable-net.html
│   ├── osint-renseignement.html
│   ├── veille-owasp-top10.html
│   └── opsec.html
├── css/style.css
├── js/main.js                  # Menu mobile + année ; aucun innerHTML
├── _headers                    # Headers sécurité (Netlify / Cloudflare Pages)
├── .htaccess                   # Équivalent Apache
├── README.md
├── SECURITY.md
├── .gitignore
└── CHECKLIST-PUBLICATION.md
```

## Remplacer les données d'exemple

1. Rechercher `À COMPLÉTER` dans tout le dépôt :
   `grep -rn "À COMPLÉTER" .`
2. Renseigner chaque champ avec des données exactes et vérifiées. **Ne jamais
   inventer** une mission, un outil, un résultat ou une compétence : si une
   information n'existe pas, laisser le marqueur.
3. Pour ajouter un projet : copier une fiche existante dans `projets/`, adapter,
   puis ajouter une ligne dans `tableau-e4.html` et une carte dans
   `projets/index.html`.

## Déploiement

- **Netlify / Cloudflare Pages :** glisser-déposer le dossier ; le fichier
  `_headers` applique les headers de sécurité automatiquement.
- **Apache :** copier le dossier ; le `.htaccess` applique les headers.
- **GitHub Pages :** pousser sur un dépôt et activer Pages. **Limite :** GitHub
  Pages ne permet pas de personnaliser les headers de sécurité — le site reste
  statique sans compte ni donnée, mais la CSP devra être documentée comme
  limitation (voir `security.html`).

Avant toute publication : suivre `CHECKLIST-PUBLICATION.md`.
