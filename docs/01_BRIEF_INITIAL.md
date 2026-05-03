# Brief initial — Portfolio Maxime Maguet

> **À copier-coller comme premier message à Claude Code après l'init du projet.**

---

Bonjour Claude Code. On démarre un projet ensemble : mon site portfolio personnel.

## Contexte

Je suis Maxime Maguet, développeur fullstack JS junior (bootcamp La Capsule, RNCP Niveau 6, avril 2026). Profil atypique : 10 ans ingénieur son (Dushow, scènes jusqu'à 80 000 spectateurs) → sommelier en AOC Gigondas → reconversion dev. Je cherche une alternance contrat de pro pour septembre 2026 à Toulouse, avec une spécialisation DevOps.

Ce portfolio doit servir de vitrine pour mes candidatures spontanées. Il doit être **élégant, précis, professionnel** — pas un portfolio "dev junior cliché".

## Stack imposée

- **Next.js 15** (App Router, React Server Components par défaut)
- **TypeScript** strict
- **Tailwind CSS v4** (config minimaliste)
- **Pas de librairie UI lourde** — composants custom uniquement
- **Pas de framer-motion** au début — animations CSS pures + un peu de JS pour les particules
- **Déploiement Vercel** (sous-domaine gratuit pour commencer)

## Design system

J'ai un prototype HTML de référence dans le fichier `docs/reference.html` du projet. **C'est la source de vérité visuelle.** Tu dois le respecter à la lettre :

- Fond blanc cassé `#FAFAFA`, jamais blanc pur
- Texte noir profond `#0A0A0A` pour titres, `#1A1A1A` pour corps
- Hairlines : bordures à 8% noir, ultra-fines partout
- Typographie : **Inter** (poids 300/400/500/600/700) + **JetBrains Mono** (300/400/500)
- Particules noires animées en fond (canvas), avec lignes de connexion entre elles
- Curseur custom (point + ring qui suit avec lag)
- Backdrop-filter blur sur les cartes pour effet glassmorphism léger
- Italiques en accent de couleur muted plutôt que des couleurs criardes
- Beaucoup d'espace blanc, generosité éditoriale
- Mockups projets en perspective 3D légère

## Sections (dans l'ordre)

1. **Nav fixe** : logo "Maxime Maguet" + dot, liens (Parcours, Projets, Stack, Contact), CTA "Me contacter"
2. **Hero** : grille 2 colonnes, eyebrow "Disponible pour alternance", titre "Maxime Maguet, *développeur fullstack.*", sub avec parcours, 2 CTA, meta (3 colonnes : localisation, contrat, démarrage), à droite une "card profile.json" avec photo, stats, propriétés
3. **Parcours (01)** : 3 colonnes en grille bordée, chaque acte (Son 2011-2021, Vin 2022-2025, Dev 2026→) avec icône, années, rôle, entreprise, description
4. **Projets (02)** : 2 cartes alternées (Astrodex à gauche, Respawn à droite inversé), chacune avec status, nom, tagline mono, description, tech tags, boutons GitHub + Live, mockup en perspective 3D
5. **Stack (03)** : grille 3 colonnes (Frontend, Backend, DevOps & Outils), liste avec status "Confirmé" (vert) ou "En cours" (noir)
6. **Contact (04)** : centré, titre "Parlons *de votre projet.*", 2 CTA, grille 2x2 de contact cells (Email, Téléphone, GitHub, LinkedIn)
7. **Footer** : nom + copyright en mono

## Architecture demandée

```
/app
  /layout.tsx          → Inter + JetBrains Mono via next/font, metadata SEO
  /page.tsx            → assemble les sections
  /globals.css         → tokens CSS, reset, Tailwind import
/components
  /sections
    Hero.tsx
    Parcours.tsx
    Projets.tsx
    Stack.tsx
    Contact.tsx
  /ui
    Nav.tsx
    Footer.tsx
    Particles.tsx      → canvas client component
    Cursor.tsx         → curseur custom client component
    Button.tsx
    Card.tsx
/lib
  /data
    parcours.ts
    projets.ts
    stack.ts
/public
  /images
    photo-maxime.jpg   → je te donnerai la photo
```

## Règles de code

- **Server Components par défaut**, `"use client"` seulement quand nécessaire (Particles, Cursor, hover state)
- **Pas de any en TypeScript**, types stricts
- **Données en `lib/data/`**, jamais hardcodées dans les composants JSX
- **Tailwind d'abord**, custom CSS dans `globals.css` uniquement pour les choses impossibles en Tailwind (canvas, animations complexes)
- **Mobile-first responsive** : tester à 375px, 768px, 1024px, 1440px
- **Accessibilité** : sémantique HTML correcte (header/main/section/article/footer), aria-labels sur les boutons d'icônes, contraste AAA
- **Lighthouse 95+** sur tous les axes

## Ordre d'implémentation

On va y aller étape par étape. Tu ne fais pas tout d'un coup. Pour chaque étape, tu codes, je review, on valide, et on passe à la suivante.

**Étape 1** : init du projet — `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config`, `globals.css` avec tokens CSS, layout root avec fonts.

Démarre par cette étape uniquement et attends ma validation avant d'aller plus loin.

Si tu as la moindre question avant de commencer, pose-la moi. Sinon, montre-moi ta proposition pour l'étape 1.
