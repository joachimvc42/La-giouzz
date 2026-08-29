# Brief technique — refonte giuseppinarui.ch
Analyse du 29.08.2026

## 1. Ce qu'il y a aujourd'hui

Site WordPress auto-hébergé chez un hébergeur suisse, réalisé en 2019 par Samuel Chopard.
Thème « nd-shortcodes » + Slider Revolution 6.0.9 + Contact Form 7 + reCAPTCHA + Google Maps.

Pages : Home · Qui suis-je ? · Soins (+ 4 sous-pages) · Témoignages · Liens · Contact

État réel constaté :
- Le slider de la page d'accueil **ne s'affiche plus** (zone blanche vide).
- La page **Liens est vide**.
- Le menu Soins contient **3 entrées fantômes** sans titre (#986, #990, #1103).
- La page Contact n'affiche **ni adresse, ni téléphone, ni e-mail** en clair.
- Le texte « Qui suis-je ? » est à jour (mentionne déjà les créations numériques à CHF 25).
- Le pied de page affiche encore « © Copyright 2019 ».

Autrement dit : la valeur du site n'est pas dans son code, elle est dans ses **textes**
et ses **23 témoignages**. Les deux sont désormais archivés dans `contenu-site-actuel/`.

## 2. Choix de la stack — et pourquoi

La contrainte structurante n'est pas la vitrine d'aujourd'hui, c'est la boutique de demain :
vendre des créations numériques personnalisées, ce qui suppose qu'un client **envoie une
photo**, que Giuseppina **produise un fichier**, et que la commande soit **payée et livrée**.
C'est une petite application, pas un catalogue de produits standard.

**Next.js 15 (App Router) + TypeScript + Tailwind CSS.**
- C'est le framework de référence sur Vercel : déploiement, previews par branche,
  domaine et HTTPS gérés automatiquement, sans configuration.
- Les Server Components + Route Handlers donnent un vrai back-end dans le même repo :
  le formulaire de contact, le webhook Stripe et l'accès Supabase s'y branchent
  sans jamais exposer de clé secrète côté navigateur.
- Le SDK Supabase et le SDK Stripe sont tous deux de première classe en TypeScript.
- La v1 vitrine sera 100 % statique (donc gratuite et instantanée) tout en gardant la
  possibilité d'ajouter des pages dynamiques sur `dev` sans rien réécrire.

Alternatives écartées : Astro (excellent pour une vitrine, mais moins naturel pour la
partie applicative de la boutique) ; site HTML statique (impasse en phase 2) ;
WordPress headless (on garde alors l'abonnement qu'on cherche à supprimer).

**Shopify est abandonné.** Il fait doublon avec Stripe (Shopify impose son propre checkout),
il coûte un abonnement mensuel, et il est mal adapté à un produit sur mesure fabriqué à la
main à partir d'une photo envoyée par le client. Supabase Storage + Stripe Checkout couvrent
le besoin pour un coût quasi nul. → **penser à résilier l'abonnement Shopify.**

**Contenu en fichiers dans le repo (phase 1).** Textes et témoignages en TypeScript/MDX :
zéro base de données, zéro coût, site ultra-rapide, contenu versionné dans Git.
Si Giuseppina veut un jour ajouter ses témoignages elle-même, on migre vers Supabase
en phase 2 — la structure de données est prévue pour.

## 3. Coûts après migration

| Poste | Aujourd'hui | Après |
|---|---|---|
| Hébergement WordPress | abonnement annuel | 0.– (Vercel Hobby) |
| Shopify | ~CHF 30.–/mois | 0.– (résilié) |
| Domaine .ch | ~CHF 15.–/an | ~CHF 15.–/an (inchangé) |
| Supabase | — | 0.– (offre gratuite, largement suffisante) |
| Stripe | — | commission ~2.9 % par vente uniquement |
| Resend (e-mails) | — | 0.– jusqu'à 3'000 e-mails/mois |

## 4. Plan en deux temps

### Phase 1 — `main` : la vitrine (à faire maintenant)
- Accueil, Qui suis-je ?, Soins (page unique avec ancres par soin), Témoignages, Contact.
- Suppression des pages fantômes ; page Liens supprimée ou remplie.
- Formulaire de contact → e-mail via Resend, protection anti-spam (honeypot + Cloudflare Turnstile).
- SEO : balises title/description par page, sitemap.xml, robots.txt, données structurées
  LocalBusiness, redirections 301 depuis les anciennes URL WordPress.
- Mentions légales + politique de confidentialité (nLPD suisse / RGPD).
- Mention « ces accompagnements ne remplacent pas un avis ou un traitement médical ».

### Phase 2 — `dev` : la boutique
- Supabase : tables `creations` (les designs), `commandes`, `clients` ; Storage pour les
  photos envoyées par les clients et les fichiers livrés ; Row Level Security.
- Parcours : le client choisit un type de création → téléverse sa photo → décrit son souhait
  → paie CHF 25 via Stripe Checkout → Giuseppina reçoit la commande → elle dépose le fichier
  fini → le client reçoit un lien de téléchargement à durée limitée.
- Espace privé Giuseppina (Supabase Auth) : voir les commandes, livrer les fichiers,
  gérer la galerie des créations.
- Merge `dev` → `main` uniquement quand tout est testé en preview Vercel.

## 5. Checklist de bascule — ORDRE IMPÉRATIF

1. **Sauvegarder** le WordPress avant tout : export XML (Outils → Exporter → Tout le contenu)
   **et** téléchargement complet du dossier `wp-content/uploads` (toutes les images).
2. Récupérer les **accès** : compte hébergeur, compte du domaine, accès admin WordPress.
   Si c'est Samuel Chopard qui les détient, les demander maintenant.
3. Vérifier **où le domaine `.ch` est réellement enregistré** (souvent le même hébergeur —
   mais pas toujours). Le domaine et l'hébergement se résilient séparément.
4. Développer et valider le nouveau site sur une URL Vercel temporaire.
5. Ajouter le domaine dans Vercel, puis changer les enregistrements DNS chez l'hébergeur
   (A / CNAME pointant vers Vercel). Le WordPress reste en ligne pendant ce temps.
6. Vérifier pendant 48 h : site accessible, HTTPS OK, formulaire de contact reçu, anciennes
   URL redirigées, référencement Google intact.
7. **Seulement ensuite** : résilier l'hébergement WordPress — en gardant le domaine.
8. Résilier l'abonnement Shopify.

## 6. Informations confirmées (29.08.2026)

- Repo GitHub : `joachimvc42/La-giouzz` — privé, vide, prêt à recevoir le projet.
- Tous les accès (hébergeur, domaine, WordPress) sont détenus par Joachim.
- Les photos du site actuel ont été payées par lui → **réutilisables**.
- Pas de tarifs affichés, pas d'agenda de réservation pour l'instant.
- Téléphone / WhatsApp : **+41 79 448 46 88**
- Boutique Shopify : jamais lancée, un seul vrai produit
  (« Portrait céleste personnalisé », CHF 25). Contenu archivé dans
  `contenu-site-actuel/boutique-shopify.md`. → **à résilier.**

### Lieu d'exercice — nuance importante
Giuseppina **loue une cabine** à l'**Espace bien-être KOREAM**, Rue Saint-Roch 25,
1004 Lausanne. KOREAM est un institut qui héberge **plusieurs professionnels** proposant
d'autres soins. Conséquences pour le site :

- KOREAM est le **lieu où elle reçoit**, pas son entreprise. Le formuler ainsi :
  « je reçois à l'Espace bien-être KOREAM, Rue Saint-Roch 25, à Lausanne ».
- **Ne pas** reprendre la fiche Google « Espace bien-être Koream » (4,8 ★ / 35 avis) :
  ces avis appartiennent à l'institut et à l'ensemble de ses praticiens, pas à elle.
  Les afficher comme les siens serait trompeur.
- **Ne pas** toucher au domaine `koream.ch` : c'est celui de l'institut.
- Le JSON-LD doit décrire une **praticienne indépendante** (`ProfessionalService` /
  `HealthAndBeautyBusiness`) située à cette adresse, pas l'institut lui-même.
- Le texte « Qui suis-je ? » du site actuel dit qu'elle a *créé* KOREAM en 2010 —
  à reformuler selon la situation d'aujourd'hui (voir points restants).

### Elle travaille aussi à distance
Une partie des accompagnements se fait **en ligne, par WhatsApp**. Le site ne doit donc
pas être « adresse d'abord » : il s'adresse à des personnes partout en Suisse romande et
au-delà, avec Lausanne comme option présentielle.

- WhatsApp est un **canal de contact de premier plan**, pas un détail : bouton visible
  sur chaque page (`wa.me/41794484688`), avec un message pré-rempli.
- Chaque soin doit indiquer s'il est possible **en cabine, à distance, ou les deux**.
- SEO : viser « thérapeute énergéticienne Lausanne » **et** « soin énergétique à distance ».

## 7. Points restants

- **E-mail de contact** : destinataire du formulaire, et faut-il l'afficher publiquement ?
- **KOREAM** : Giuseppina en est-elle encore propriétaire / fondatrice, ou seulement
  locataire d'une cabine aujourd'hui ? La phrase « j'ai créé mon propre espace bien-être :
  KOREAM » doit être ajustée en conséquence.
- **Fiche Google à son nom** : en a-t-elle une, distincte de celle de KOREAM ? Si non,
  en créer une est probablement l'action la plus rentable après la mise en ligne.
- **Horaires / disponibilités** : à définir, ou simplement « sur rendez-vous ».
- **Logo** en haute résolution / SVG (à récupérer dans le WordPress).
- **Photo de Giuseppina** pour la page « Qui suis-je ? ».
- **Formations** (« Maîtrise du pendule », « Nettoyage énergétique ») : simple mention,
  ou vraie page avec inscription ? Elles sont citées mais jamais détaillées.
- Page **Liens** : supprimée par défaut, sauf indication contraire.
- Le **+41 79 448 46 88** est un numéro privé. Il est déjà public (fiche Google, boutique
  Shopify), donc l'afficher ne change pas grand-chose — mais on le mettra derrière des
  boutons « Appeler » / « WhatsApp » plutôt qu'en texte brut, pour limiter le spam.
