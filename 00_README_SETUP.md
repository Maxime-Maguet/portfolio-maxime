# Setup du projet portfolio — Procédure

## 1. Création du dossier et init Git

```bash
mkdir portfolio-maxime
cd portfolio-maxime
git init
```

## 2. Créer un nouveau repo GitHub

- Aller sur https://github.com/new
- Nom : `portfolio-maxime` (ou ce que tu préfères)
- Privé pour commencer
- **Ne pas** cocher README, gitignore ou license (Next.js les générera)
- Copier l'URL du repo

```bash
git remote add origin git@github.com:Maxime-Maguet/portfolio-maxime.git
```

## 3. Placer les fichiers fournis

Dans le dossier vide `portfolio-maxime`, créer un dossier `docs/` et y mettre :

```
portfolio-maxime/
├── CLAUDE.md                       ← (depuis ce package : 02_CLAUDE.md, renommé)
└── docs/
    ├── 01_BRIEF_INITIAL.md         ← (depuis ce package, tel quel)
    ├── 03_ROADMAP.md               ← (depuis ce package, tel quel)
    └── reference.html              ← (le prototype HTML actuel, renommé)
```

## 4. Lancer Claude Code

```bash
cd portfolio-maxime
claude
```

(Si Claude Code n'est pas installé : `npm install -g @anthropic-ai/claude-code`)

## 5. Premier message à Claude Code

Coller le contenu de `docs/01_BRIEF_INITIAL.md` comme tout premier message.

Claude Code va :
1. Lire le brief
2. Lire `CLAUDE.md` automatiquement
3. Te proposer le code de l'étape 1 (init Next.js + config)

## 6. Ton workflow ensuite

Pour chaque étape :

1. **Tu annonces** : "Étape N : <description>"
2. **Claude Code propose** le code complet
3. **Tu reviews** :
   - Qu'est-ce que ça fait ?
   - Pourquoi cette approche ?
   - Y a-t-il quelque chose que je ne comprends pas ?
4. **Tu valides ou tu ajustes** :
   - "Valide, passe à l'étape suivante" → il continue
   - "Modifie X de cette façon..." → il ajuste
5. **Tu commits manuellement** ou tu lui demandes (préférable que tu le fasses au début pour bien suivre l'historique)

## 7. Commits conventionnels recommandés

- `chore: project scaffolding`
- `feat(hero): add hero section with profile card`
- `feat(particles): add animated background canvas`
- `style: refine spacing and typography on parcours section`
- `fix: cursor not following on mobile`

## 8. Déploiement

Une fois la version 1 prête :

```bash
git add .
git commit -m "feat: portfolio v1 ready"
git push -u origin main
```

Puis aller sur https://vercel.com/new → importer le repo GitHub → déploiement automatique.

## Astuce : si Claude Code dévie du brief

Si tu remarques qu'il ajoute des choses non demandées ou refactorise sans demander, rappelle-le à l'ordre :

> "Tu as modifié X sans validation. Reviens à la version précédente et attends mon feu vert avant de toucher à autre chose."

Le `CLAUDE.md` est fait pour ça mais un rappel humain reste utile parfois.
