# Site Giuseppina Rui — instructions pour tout agent (Codex, Claude Code, autre)

Ce fichier est **la source de vérité** du projet. `CLAUDE.md` renvoie ici.
Si tu modifies une règle, modifie-la ici.

---

## 1. Le projet en trois phrases

Giuseppina Rui est thérapeute, énergéticienne et coach de vie, à Lausanne et à distance.
Ce dépôt remplace son ancien site WordPress (`giuseppinarui.ch`), afin de résilier
l'abonnement WordPress **et** l'abonnement Shopify. Phase 1 : le site vitrine.
Phase 2 : une boutique de créations numériques personnalisées (Supabase + Stripe).

## 2. Stack

- **Next.js 15**, App Router, React Server Components, **TypeScript**
- **Tailwind CSS v4** — configuration dans `app/globals.css` via `@theme` (pas de
  `tailwind.config.js`, c'est voulu)
- **Vercel** — `main` = production, `dev` = previews
- **Resend** pour l'e-mail du formulaire de contact
- Phase 2 : **Supabase** (Postgres + Storage + Auth) et **Stripe Checkout**
- Aucun CMS : tout le contenu éditorial vit dans `content/*.ts`

## 3. Démarrer

```bash
npm install
cp .env.example .env.local   # puis remplir les valeurs
npm run dev                  # http://localhost:3000
npm run build                # vérifier avant tout commit
```

`npm run build` doit passer sans erreur ni warning TypeScript avant chaque commit.

## 4. Structure

```
app/                 pages (App Router) + api/contact + sitemap + robots
components/          composants réutilisables
content/             ⬅ TOUT le texte du site vit ici
  site.ts            identité, coordonnées, navigation
  apropos.ts         page « Qui suis-je ? »
  soins.ts           les soins et accompagnements
  formations.ts      les formations (⚠ descriptions vides, à compléter)
  temoignages.ts     les 25 témoignages
public/              images et logo
contenu-site-actuel/ archive de l'ancien site — référence, jamais servie au public
docs/                brief technique, inventaire des assets, tâches restantes
assets/              fichiers sources bruts (logos, photos, export WordPress)
```

**Pour changer un texte, on modifie `content/`, pas un composant.**

## 5. Règles de contenu — non négociables

1. **Les témoignages sont reproduits mot pour mot.** Ne jamais les corriger,
   reformuler, raccourcir ni « améliorer » l'orthographe. Ce sont les mots de
   personnes réelles. Il y en a 25.
2. **KOREAM n'est pas son institut.** Giuseppina **loue une cabine** à l'Espace
   bien-être KOREAM, qui héberge plusieurs praticiens. Toujours écrire
   « je reçois à… », jamais « mon institut ». Ne jamais reprendre les avis Google
   de KOREAM (4,8 ★) : ils appartiennent à l'institut et à tous ses praticiens.
   Ne pas toucher au domaine `koream.ch`, qui n'est pas le sien.
3. **Elle travaille aussi à distance, par WhatsApp.** Le site s'adresse à toute la
   Suisse romande, pas seulement à Lausanne. Chaque prestation indique sa modalité
   (`cabine`, `distance`, ou les deux).
4. **Le téléphone ne s'affiche jamais en texte brut** dans une page : toujours
   derrière un lien `tel:` ou `wa.me` (limite l'aspiration par les robots à spam).
5. **L'e-mail `giuseppinarui@gmail.com` ne s'affiche nulle part sur le site.**
   Il sert uniquement de destinataire au formulaire, via la variable
   `CONTACT_TO_EMAIL`.
6. **Pas de tarifs, pas d'agenda de réservation** en v1 — décision de Joachim.
7. **Aucune promesse de guérison.** Les accompagnements relèvent du bien-être et du
   développement personnel. La mention « ne remplace pas un avis médical » doit
   rester dans le pied de page et les mentions légales.
8. Français uniquement, prix en CHF, apostrophes typographiques (`'`), espaces
   insécables avant `?` `!` `:` `;` quand c'est possible.

## 6. Règles de design

- Identité conservée : **or/ocre** (`--color-gold-*`), crème, encre douce.
- Titres en **Cormorant Garamond** (rappel du logo), texte en **Open Sans**.
- Beaucoup d'espace, peu d'effets, pas d'animation gratuite.
- Mobile-first. Contraste AA minimum. `prefers-reduced-motion` respecté.
- Logo : `public/logo/logo.png` — détouré sur fond transparent, ne pas le remplacer
  par une des versions JPEG de `assets/logo/` (fond opaque).

## 7. Sécurité

- **Aucune clé d'API dans le dépôt.** Tout passe par `.env.local` (ignoré par Git)
  et les variables d'environnement Vercel.
- Ne jamais coller de secret dans une conversation avec un agent.
- Le formulaire de contact valide les entrées côté serveur et utilise un honeypot.
  Si le spam devient un problème, ajouter Cloudflare Turnstile (gratuit).

## 8. Branches

- `main` → production. Ne recevoir que du travail validé.
- `dev` → la boutique (Supabase + Stripe). Merge vers `main` quand elle est prête.
- Une branche par sujet quand c'est possible, message de commit en français.

## 9. Ce qui reste à faire

Voir `docs/a-faire-joachim.md`. Les deux principaux :

1. **Les formations n'ont aucun contenu.** `content/formations.ts` contient cinq
   entrées avec `description: []`. Les pages WordPress correspondantes, créées en
   2017, sont restées vides : il n'existe aucun texte à récupérer. Tant que
   `description` est vide, la page affiche une invitation à prendre contact —
   c'est volontaire, ne pas inventer de contenu à sa place.
2. **Aucune photo du lieu.** Le site n'utilise que des images de banque achetées.

## 10. Phase 2 — la boutique (branche `dev`)

Produit : « Portrait céleste personnalisé », CHF 25. Une création numérique réalisée
à partir d'une photo envoyée par le client. Aujourd'hui le parcours est manuel : le
client paie, puis envoie sa photo par WhatsApp (voir
`contenu-site-actuel/boutique-shopify.md`).

Cible :

- Supabase : tables `creations`, `commandes`, `clients` ; Storage pour les photos
  reçues et les fichiers livrés ; Row Level Security activée.
- Parcours : choix du type de création → téléversement de la photo → description du
  souhait → paiement Stripe Checkout → notification à Giuseppina → dépôt du fichier
  fini → lien de téléchargement à durée limitée pour le client.
- Espace privé Giuseppina (Supabase Auth) : voir les commandes, livrer les fichiers.
- WhatsApp reste proposé en alternative pour l'envoi de la photo.

**Shopify est abandonné** : son checkout fait doublon avec Stripe et il est mal
adapté à un produit fabriqué à la main à partir d'une photo.

## 11. Mise en ligne — ordre impératif

La checklist complète est dans `docs/brief-technique.md`, section 5. En résumé :
sauvegarder le WordPress → valider le nouveau site sur une URL Vercel → basculer le
DNS → vérifier 48 h → **seulement ensuite** résilier l'hébergement, en gardant le
domaine. Ne jamais inverser cet ordre.
