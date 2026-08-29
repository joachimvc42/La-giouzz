# Ce qu'il reste à faire

## ✅ Fait (29.08.2026)
- Contenu de l'ancien site archivé (25 témoignages, pages, boutique Shopify)
- Images déposées et vérifiées → `docs/inventaire-assets.md`
- Logo détouré sur fond transparent → `public/logo/logo.png`
- E-mail : giuseppinarui@gmail.com (réception seulement, jamais affiché)
- **Site vitrine construit** : 8 pages, build vérifié sans erreur
- Documentation de reprise : `AGENTS.md`, `README.md`, `docs/passer-sur-claude-code.md`

## 1. Étape suivante immédiate
Suivre `docs/passer-sur-claude-code.md` : pousser sur GitHub, `npm install`,
`npm run dev`, puis déployer sur Vercel avec une URL temporaire.

## 2. Contenu manquant (Giuseppina)
- **Les cinq formations** : à qui elles s'adressent, ce qu'on y apprend, la durée,
  le format. Les pages WordPress correspondantes étaient vides — il n'y a rien à
  récupérer. → `content/formations.ts`
- **Confirmer les modalités** de chaque soin (en cabine / à distance / les deux) :
  j'ai proposé une hypothèse raisonnable dans `content/soins.ts`, à valider.
- **Horaires ou « sur rendez-vous »** — à préciser sur la page Contact.
- **Photos du lieu** : la cabine, l'espace de soin. Il n'y en a aucune ; trois photos
  prises au téléphone valent mieux que n'importe quelle image de banque.
- **Un portrait en plus haute résolution** si l'original existe (l'actuel fait 612 px
  de large).

## 3. Comptes à créer (gratuits)
- **Vercel** — se connecter avec le compte GitHub, importer `La-giouzz`
- **Resend** — clé API pour le formulaire de contact
- **Supabase** puis **Stripe** — phase 2 seulement

⚠️ Les clés d'API ne se collent JAMAIS dans une conversation ni dans le dépôt.
Elles vont dans `.env.local` (ignoré par Git) et dans les variables Vercel.

## 4. À NE PAS FAIRE MAINTENANT
- Ne rien résilier : ni WordPress, ni l'hébergement, ni le domaine.
  (Shopify peut être résilié dès maintenant : la boutique est archivée et n'a jamais servi.)
- Ne pas brancher le domaine ni toucher au DNS avant validation du site sur l'URL
  Vercel temporaire. Ordre impératif : `docs/brief-technique.md`, section 5.

## 5. Plus tard
- Créer une **fiche Google Business au nom de Giuseppina Rui**, distincte de celle de
  KOREAM. Pour une thérapeute, c'est souvent la première source de nouveaux contacts.
- Noter quel hébergeur héberge le site et où le domaine .ch est enregistré.
