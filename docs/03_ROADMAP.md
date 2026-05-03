# Roadmap d'implémentation — Portfolio

> Chaque étape doit être validée par Maxime avant de passer à la suivante.

## Phase 0 — Setup local (avant Claude Code)

- [ ] Créer un nouveau dossier vide : `portfolio-maxime`
- [ ] Init git : `git init`
- [ ] Créer un nouveau repo GitHub vide (privé pour commencer)
- [ ] Lier le remote
- [ ] Placer dans le projet :
  - `CLAUDE.md` (le fichier 02 fourni)
  - `docs/reference.html` (le HTML prototype actuel renommé)
  - `docs/01_BRIEF_INITIAL.md` (le brief de démarrage)
- [ ] Lancer Claude Code à la racine du projet

## Phase 1 — Initialisation Next.js

**Étape 1** : `npx create-next-app@latest .` avec ces options :
- TypeScript : Yes
- ESLint : Yes
- Tailwind CSS : Yes
- src/ directory : No
- App Router : Yes
- Turbopack : Yes
- Import alias : `@/*`

**Étape 2** : Configuration des fonts et tokens
- Setup Inter + JetBrains Mono dans `app/layout.tsx`
- Création des CSS variables dans `app/globals.css`
- Reset CSS de base
- Metadata SEO complète

**Étape 3** : Structure des dossiers
- Création de `/components/ui`, `/components/sections`, `/lib/data`, `/public/images`
- Premier commit "chore: project scaffolding"

## Phase 2 — Composants techniques transverses

**Étape 4** : Component `Particles.tsx`
- Canvas client component
- 90 particules noires, lignes de connexion, répulsion souris
- Adapté du JS du prototype mais en TypeScript propre
- Cleanup de l'animation au unmount

**Étape 5** : Component `Cursor.tsx`
- Curseur custom (point + ring)
- Mousemove avec lag sur le ring
- Détection hover sur tous les éléments interactifs
- Désactivé sur mobile/touch

**Étape 6** : Component `Nav.tsx`
- Nav fixe avec backdrop-filter
- Logo avec dot, liens, CTA
- Responsive (burger menu sur mobile)

## Phase 3 — Sections une par une

**Étape 7** : Section `Hero`
- Grille 2 colonnes desktop, 1 sur mobile
- Eyebrow avec dot animé pulse
- Titre H1 avec italique en accent
- Sub avec parcours
- 2 CTA + meta 3 colonnes
- Card "profile.json" avec photo MM (placeholder pour l'instant)
- Animations fadeUp en stagger

**Étape 8** : Section `Parcours`
- 3 colonnes en grille bordée
- Données dans `lib/data/parcours.ts`
- Hover effect : ligne d'accent qui slide en haut
- Responsive : 1 colonne sur mobile

**Étape 9** : Section `Projets`
- 2 cartes alternées (Astrodex / Respawn)
- Données dans `lib/data/projets.ts` (avec liens GitHub réels)
- Mockup avec perspective 3D au repos, redressement au hover
- Status dots, tech tags, boutons

**Étape 10** : Section `Stack`
- Grille 3 colonnes (Frontend / Backend / DevOps)
- Données dans `lib/data/stack.ts` avec status (ok / wip)
- Status dots colorés selon état

**Étape 11** : Section `Contact`
- Centré, titre avec italique
- 2 CTA principaux
- Grille 2x2 de contact cells (Email, Tel, GitHub, LinkedIn)

**Étape 12** : `Footer`
- Sobre, mono, hairline top

## Phase 4 — Polish

**Étape 13** : Photo réelle
- Optimisation de la photo de Maxime
- Intégration dans la card hero via `next/image`
- Versions @1x et @2x

**Étape 14** : Screenshots projets
- Vrais screenshots Astrodex (mobile) et Respawn (web)
- Remplacement des mockups génériques

**Étape 15** : Animations scroll
- Intersection Observer pour fadeUp à l'arrivée des sections
- Pas de framer-motion : juste un hook custom propre

**Étape 16** : Responsive complet
- Test 375 / 768 / 1024 / 1440
- Burger menu mobile
- Adaptation des grilles

**Étape 17** : SEO + métadonnées
- OpenGraph image générée
- Sitemap, robots.txt
- Schema.org Person

**Étape 18** : Performance
- Audit Lighthouse
- Lazy loading des particules si nécessaire
- Optimisation des fonts (display: swap)

## Phase 5 — Déploiement

**Étape 19** : Déploiement Vercel
- Connect GitHub repo
- Variables d'env si besoin
- Déploiement preview puis prod

**Étape 20** : Domaine + analytics
- Sous-domaine Vercel pour démarrer
- Plausible ou Vercel Analytics
- Domaine custom plus tard si désiré

## Estimation temps

- Phase 1 : ~30 min
- Phase 2 : ~1h
- Phase 3 : ~2h30 (le gros du travail)
- Phase 4 : ~1h
- Phase 5 : ~30 min

**Total : ~5h en mode review continu**, soit 2-3 sessions de codage.
