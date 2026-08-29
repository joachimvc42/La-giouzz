# Passer sur Claude Code (ou sur Codex)

Le dossier `Giusi` **est** le projet : le code, les contenus et la documentation sont
au même endroit. Il n'y a rien à déplacer ni à recopier.

---

## 1. Une seule fois : mettre le projet sur GitHub

Ouvre un terminal dans le dossier du projet :

```bash
cd "C:\Users\joach\Documents\Claude\Projects\Giusi"

git init
git branch -M main
git add .
git commit -m "Site vitrine : reprise du contenu WordPress, Next.js + Tailwind"
git remote add origin https://github.com/joachimvc42/La-giouzz.git
git push -u origin main

# la branche de travail pour la boutique
git checkout -b dev
git push -u origin dev
git checkout main
```

`node_modules/`, `.next/` et `.env.local` sont déjà exclus par le `.gitignore`.

## 2. Lancer le site en local

```bash
npm install
copy .env.example .env.local     # PowerShell : cp .env.example .env.local
npm run dev
```

Puis ouvrir http://localhost:3000

Le formulaire de contact ne fonctionnera qu'une fois `RESEND_API_KEY` renseignée
dans `.env.local` (compte gratuit sur resend.com). Le reste du site fonctionne sans.

## 3. Ouvrir le projet dans Claude Code

```bash
cd "C:\Users\joach\Documents\Claude\Projects\Giusi"
claude
```

Claude Code lit automatiquement `CLAUDE.md`, qui renvoie vers `AGENTS.md`. Il a donc
tout le contexte dès le premier message : les règles de contenu, la structure, la
phase 2.

**Premier message suggéré :**

> Lis AGENTS.md puis lance `npm install` et `npm run dev`.
> Fais-moi un tour du site en local et dis-moi ce que tu corrigerais en premier.

**Ensuite, quelques demandes utiles :**

> Vérifie que `npm run build` passe, puis déploie sur Vercel.

> Sur la page d'accueil, la photo du hero cache le visage. Propose deux alternatives.

> Passe sur la branche `dev` et prépare le schéma Supabase de la phase 2
> décrit dans AGENTS.md section 10. Ne touche pas à `main`.

## 4. Ouvrir le projet dans Codex (pour Giuseppina)

Même dossier, même dépôt. Codex lit `AGENTS.md` automatiquement.

**Premier message suggéré :**

> Lis AGENTS.md. Je veux modifier le texte de la page « Qui suis-je ? ».
> Explique-moi où il se trouve avant de changer quoi que ce soit.

Tout le texte du site est dans `content/` — pas besoin de toucher au code pour
changer une phrase.

## 5. Déployer sur Vercel

1. Aller sur vercel.com, se connecter **avec le compte GitHub**.
2. « Add New… » → « Project » → importer `joachimvc42/La-giouzz`.
3. Vercel détecte Next.js tout seul : ne rien changer aux réglages de build.
4. Ajouter les variables d'environnement (Settings → Environment Variables) :
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
5. Déployer. `main` devient la production, `dev` génère une preview à chaque push.

⚠️ **Ne pas encore brancher le domaine `giuseppinarui.ch`.** Travailler d'abord sur
l'URL temporaire `.vercel.app`. La bascule DNS suit la checklist de
`docs/brief-technique.md`, section 5 — et rien n'est résilié avant.

## 6. Règle d'or

Le fichier `AGENTS.md` est la mémoire du projet. Si une décision est prise en cours
de route (une règle de contenu, un choix technique), **elle s'écrit dans `AGENTS.md`**.
C'est ce qui permet à Claude Code et à Codex de travailler sur le même projet sans se
contredire.
