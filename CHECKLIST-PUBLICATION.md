# Checklist avant publication (à cocher)

## Confidentialité
- [ ] Missions de stage validées comme publiables par le tuteur d'entreprise
- [ ] Aucun nom de personne (collègues, clients, utilisateurs) dans pages, captures, noms de fichiers
- [ ] Aucune IP réelle, nom de machine ou domaine interne (plages fictives type 192.0.2.0/24)
- [ ] Fichier .pkt Packet Tracer vérifié (noms d'équipements génériques)
- [ ] Métadonnées purgées sur toutes les images et PDF (`exiftool -all=`)
- [ ] Historique Git vérifié : `git log -p | grep -iE "(password|token|api[_-]?key|secret)"` → vide
- [ ] Aucun `.env`, clé, token dans le dépôt ni son historique (sinon : régénérer le secret)
- [ ] `grep -rn "À COMPLÉTER" .` → uniquement des champs assumés ou tous traités

## Contenu et honnêteté
- [ ] Aucune compétence cochée sans preuve (action, capture anonymisée, documentation)
- [ ] MFA présentée comme observation/participation/configuration encadrée (et non déploiement) si c'est la réalité
- [ ] Projets cybersécurité présentés comme apprentissages, jamais comme expertises
- [ ] Dates et intitulés conformes à la convention de stage

## Technique
- [ ] `grep -rn "innerHTML" .` → aucun résultat
- [ ] Zéro script tiers / tracker / CDN
- [ ] `rel="noopener noreferrer"` sur tous les liens `target="_blank"`
- [ ] Test mobile (360 px) sans débordement horizontal
- [ ] Navigation clavier complète (Tab) avec focus visible
- [ ] Contraste vérifié ; `prefers-reduced-motion` respecté ; un seul `<h1>` par page
- [ ] Headers sécurité actifs après déploiement (test : securityheaders.com)

## Purgage des métadonnées (rappel de commandes)
```bash
exiftool -all= assets/*.png assets/*.jpg assets/*.pdf
```
