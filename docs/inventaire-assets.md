# Inventaire des fichiers fournis — vérifié le 29.08.2026

## Logos (4 versions, 3 générations différentes)

| Fichier | Taille | Baseline | Verdict |
|---|---|---|---|
| `Giuseppina-logo.jpeg` | 1600×900 | Thérapeute, énergéticienne & Coach de vie | ✅ **retenu** — le plus récent et le plus grand |
| `Giusi-logo.jpg` | 1024×449 | idem | doublon, fond crème |
| `logo-definitif.jpeg` | 790×292 | Thérapeute & Accompagnatrice | ancienne version |
| `logo_grui.jpg` | 852×320 | Thérapie & Accompagnement | ancienne version (2017) |

Les quatre sont des JPEG **sur fond opaque** — inutilisables tels quels dans un en-tête.
→ J'ai détouré le logo retenu : **`logo/logo-giuseppina-rui-transparent.png`** (1600×900, RGBA).
Le fond est parfaitement propre, y compris sur fond coloré. Pas besoin de récupérer le PNG
d'origine du WordPress.

## Photos de Giuseppina

- `Giusi-site-2026.jpeg` — 612×1047. Portrait naturel, souriant, pendentif arbre de vie
  (joli rappel du logo). **Utilisable**, mais un peu petit : correct en portrait dans une
  colonne, insuffisant en pleine largeur. L'original en plus grand serait bienvenu.
- `Giusi-avec-Samy-et-soleil.jpg` — 1089×1089. Composition dorée avec tournesols et son
  chien Samy. Ce n'est pas un portrait classique : **c'est un exemple de « Portrait céleste »**.
  Excellent pour illustrer la boutique en phase 2.

## Images d'ambiance (achetées, réutilisables)

- `shutterstock_163390922` 1500×1000 — massage/spa, bols, tons chauds ✅
- `shutterstock_488619553` 1500×1000 — méditation au coucher de soleil ✅ (hero actuel)
- `shutterstock_623045144` 1500×603 — bouddha doré, format bandeau ✅
- `massage_photo_6.png` 450×314 — mains sur un dos, cadrage serré. Trop petit pour du plein
  écran, correct en vignette.
- `massage_photo_5.png` 150×150 — **inutilisable** (taille de vignette).

## Export WordPress (`assets/giuseppinarui.WordPress.2026-08-29.xml`)

169 éléments, dont 115 médias. Analysé — deux constats importants :

1. **Les pages « Formation » sont toutes vides.** Créées en 2017 par Samuel Chopard,
   jamais remplies : `/formation/`, `maitrise-du-pendule`, `entites`,
   `nettoyage-energetique-des-personnes-et-des-lieux`, `pensee-positive`, `carte-lenormand`.
   Elles sont publiées mais ne contiennent aucun texte. **Le contenu de la page Services
   n'existe donc nulle part — il est à écrire.**
2. **La page « Tarifs » (privée) ne contient que la démo du thème** : « Lorem ipsum »,
   « SAUNA RELAX $ 23,45 », « PEDICURE $ 32,00 »… Aucun tarif réel. À ignorer.

Le reste du contenu réel (Home, Qui suis-je, Soins, Cartes, Thérapie individuelle,
Coupure des liens, Témoignages) correspond à ce qui est déjà archivé dans
`contenu-site-actuel/`. Rien de perdu.

## Médias encore dans le WordPress et pas récupérés

Utiles (à télécharger depuis wp-admin → Médias) :
- `2018/08/shutterstock_751580380-min.jpg` — le **second visuel de la page d'accueil**
- `2018/08/Image-Giuseppina-Rui-min.jpg`
- `2018/11/image-qui-suis-je.jpeg` et `2018/12/photo_qui-suis-je_3.png`
- `2018/10/giusi_site_2.jpg`
- `2026/06/Giusi-avec-Samy.jpeg` et `2026/06/Giusi-et-Samy-2.png`
- `2018/10/massage_photo_1..8.png` (voir si certaines sont plus grandes que la 5 et la 6)
- `2017/01/favicon.jpg`

À ignorer : tout le dossier `2017/01/` et `2017/02/` (blog-1, focus-1, team-1, treatment-1,
parallax-*, shop-*, brand-*…) — ce sont les images de démonstration du thème, pas les siennes.

## Ce qui manque vraiment

- **Des photos du lieu** : la cabine, l'espace de soin. Il n'y en a aucune. Aujourd'hui le
  site ne montre que des images de banque — trois photos du vrai lieu feraient plus pour la
  confiance que n'importe quel visuel acheté.
- **Un portrait en plus haute résolution** si l'original existe.
- **Le contenu des formations** (voir ci-dessus) : il est à écrire par Giuseppina.
