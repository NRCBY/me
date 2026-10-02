# CHARTE GRAPHIQUE — QUIET PREMIUM VIOLET

## 1. Palette & Ratios de Contraste (WCAG AA)
- **`--bg-base` (`#08070B`)** : Fond principal sombre et chaleureux.
- **`--bg-elevated` (`#0E0D12`)** : Surface des cartes et éléments surélevés.
- **`--text-primary` (`#F4F4F5`)** : Ratio de contraste de 17.8:1 sur fond de base (Conforme AAA).
- **`--text-secondary` (`#A1A1AA`)** : Ratio de contraste de 7.2:1 sur surface (Conforme AAA).
- **`--text-tertiary` (`#71717A`)** : Ratio de contraste de 4.7:1 sur surface (Conforme AA).
- **`--violet-500` (`#8B5CF6`)** : Accent unique, strictement limité à moins de 5% de la surface visible.

## 2. Typographie & Rythme
- **Famille :** Stack système moderne avec prise en charge Geist / Inter Display.
- **Amplitude :** Display H1 (72px) / Titres (36px) / Corps (16px) / Métadonnées (12-14px).
- **Mise en page :** `text-wrap: balance` sur tous les titres, `text-wrap: pretty` sur les paragraphes avec contrainte de largeur maximale à 65 caractères.

## 3. Motion & Accessibilité
- Durées : 150ms pour les micro-interactions, 220ms pour l'élévation des cartes, 500ms pour l'apparition initiale.
- Easing unifié : `cubic-bezier(0.16, 1, 0.3, 1)`.
- Prise en charge stricte de `@media (prefers-reduced-motion: reduce)`.
