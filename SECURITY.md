# Politique de sécurité du portfolio

## Périmètre

Site statique public : aucun compte, aucune authentification, aucune base de
données, aucune API privée, aucun formulaire, aucune clé, aucun tracker.

## Mesures appliquées

- HTML sémantique, CSS autonome, un seul fichier JS sans dépendance.
- Aucun `innerHTML` : tout le contenu est en HTML statique.
- Headers (selon hébergeur, voir `_headers` / `.htaccess`) :
  - `Content-Security-Policy` restrictive (`default-src 'self'`),
  - `X-Content-Type-Options: nosniff`,
  - `Referrer-Policy: strict-origin-when-cross-origin`,
  - `Permissions-Policy` restrictive,
  - `X-Frame-Options: DENY`.
- Liens externes : `rel="noopener noreferrer"`.
- `.gitignore` excluant secrets, `.env`, clés SSH et captures brutes.
- Données personnelles limitées : téléphone et adresse postale non publiés.

## Signaler un problème

Si vous découvrez une faille ou une donnée sensible exposée (capture non
anonymisée, information nominative, secret), contactez-moi :
nathan.ramos30@gmail.com. Ne publiez pas la donnée sensible ailleurs.

## Limites assumées

- Ce site n'est pas « sécurisé à 100 % » : la surface d'attaque est minimisée,
  pas supprimée.
- L'adresse e-mail publique peut être captée par des robots (spam).
- L'erreur humaine (publication d'une capture non anonymisée) est le risque
  principal ; la checklist avant publication en est le garde-fou.
- Certains hébergeurs (GitHub Pages) n'appliquent pas de headers personnalisés.
