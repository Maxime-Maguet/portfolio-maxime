# CLAUDE.md

Ce fichier guide Claude Code dans ce projet. À lire avant chaque session.

## Identité du projet

Site portfolio personnel de Maxime Maguet, développeur fullstack JS junior en recherche d'alternance contrat de pro pour septembre 2026 à Toulouse. Le site doit projeter **élégance et précision**, pas le côté "dev junior qui en fait trop".

## Stack

- **Next.js 15** (App Router, RSC par défaut)
- **TypeScript** strict (pas de `any`)
- **Tailwind CSS v4**
- **Inter** (titres et corps) + **JetBrains Mono** (mono, labels techniques) via `next/font`
- **Vercel** pour le déploiement
- **Pas de** : framer-motion (au début), shadcn, librairies UI lourdes, styled-components

## Design tokens (sources de vérité)

```css
--bg: #FAFAFA           /* fond global, jamais #FFF pur */
--bg-1: rgba(255,255,255,0.75)  /* surfaces avec backdrop-filter blur */
--bg-2: rgba(245,245,245,0.7)
--black: #0A0A0A        /* titres */
--text: #1A1A1A         /* corps */
--muted: #666666        /* labels secondaires */
--muted-2: #999999      /* labels tertiaires */
--border: rgba(0,0,0,0.08)         /* hairlines */
--border-hover: rgba(0,0,0,0.16)
--accent-success: #10B981          /* statuts "ok" */
```

Pas d'autres couleurs sans validation explicite de Maxime.

## Principes visuels non négociables

1. **Hairlines partout** : bordures à 1px, opacité noire 8%
2. **Italiques en accent** plutôt que couleurs vives (ex: titre "Maxime Maguet, *développeur fullstack.*" — l'italique est en muted, pas en bleu criard)
3. **Backdrop-filter blur** sur toutes les cartes pour laisser transparaître les particules
4. **Beaucoup d'espace blanc** — préférer 64px de margin que 24px
5. **Numéros de section en mono** : "01 / Parcours", "02 / Projets"
6. **Pas d'emoji décoratif gratuit** — seulement les 3 du parcours (🎵 🍷 ⚡)
7. **Pas de gradients criards** — les seuls gradients autorisés sont radial-gradient ultra-subtils en fond
8. **Animations sobres** : entrée fadeUp 0.7s avec stagger, hover transitions 0.2s, jamais de bounce ou d'elastic

## Architecture

```
/app
  layout.tsx           → fonts, metadata, root html/body
  page.tsx             → assemblage des sections
  globals.css          → tokens, reset, Tailwind
  not-found.tsx        → 404 dans le même style
/components
  /sections            → Hero, Parcours, Projets, Stack, Contact
  /ui                  → Nav, Footer, Particles, Cursor, Button, Card
/lib
  /data                → données structurées des sections
/public
  /images              → photo, screenshots projets
```

## Règles de code

- **Server Components par défaut**. `"use client"` uniquement pour : Particles (canvas), Cursor (mousemove), composants avec state interactif.
- **Données dans `lib/data/`** sous forme d'objets typés. JAMAIS de hardcode dans le JSX.
- **Tailwind d'abord**. CSS custom uniquement dans `globals.css` pour ce qui n'est pas exprimable en Tailwind (animations canvas, perspective 3D complexe).
- **Mobile-first** : breakpoints 375 / 768 / 1024 / 1440. Tester avant de valider.
- **Sémantique HTML** : `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`. Pas de `<div>` partout.
- **Accessibilité** : aria-label sur boutons d'icône, focus visible (ring offset), contraste AAA.
- **Performance** : pas d'image non optimisée (utiliser `next/image`), pas de JS inutile côté client.

## Workflow imposé

1. Maxime t'annonce l'étape (ex: "Étape 3 : implémente la section Parcours")
2. Tu lis le `docs/reference.html` pour voir le rendu cible de cette section
3. Tu proposes le code complet de l'étape
4. Maxime review, demande des ajustements ou valide
5. **Tu ne passes pas à l'étape suivante sans validation explicite**
6. **Tu ne touches pas aux étapes précédentes** sauf demande explicite

## Ce que tu ne fais JAMAIS sans validation

- Ajouter une dépendance npm
- Modifier les tokens CSS
- Changer la structure des dossiers
- Ajouter des animations framer-motion
- Refactorer du code déjà validé par Maxime
- Faire plus que l'étape demandée

## Préférences de communication de Maxime

- **Français par défaut**
- **Direct et concret**, pas de blabla
- **Step-by-step always**
- **Approche socratique** : guide-le avec des questions pour qu'il comprenne, ne donne pas la solution toute faite quand il bloque
- **Toujours demander avant les actions destructives** (supprimer un fichier, refacto large)
- **Code review d'abord, modification ensuite** : montre toujours ce que tu vas changer avant de le changer
