# giuseppinarui.ch

Site de Giuseppina Rui — thérapeute, énergéticienne et coach de vie à Lausanne et à
distance. Next.js 15 · TypeScript · Tailwind CSS v4 · déployé sur Vercel.

## Démarrer

```bash
npm install
cp .env.example .env.local   # remplir RESEND_API_KEY, etc.
npm run dev
```

Ouvrir http://localhost:3000

## Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run build` | build de production (à faire passer avant tout commit) |
| `npm start` | sert le build de production |

## Modifier le contenu

Tout le texte du site est dans `content/` :

- `site.ts` — coordonnées, navigation
- `apropos.ts` — page « Qui suis-je ? »
- `soins.ts` — les soins
- `formations.ts` — les formations
- `temoignages.ts` — les 25 témoignages (à ne jamais réécrire)

## Documentation

- `AGENTS.md` — les règles du projet. **À lire avant toute modification.**
- `docs/brief-technique.md` — architecture, coûts, checklist de mise en ligne
- `docs/inventaire-assets.md` — les images disponibles et leurs limites
- `docs/a-faire-joachim.md` — ce qu'il reste à fournir
- `contenu-site-actuel/` — archive de l'ancien site WordPress et de la boutique Shopify
