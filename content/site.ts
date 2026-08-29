export const site = {
  name: "Giuseppina Rui",
  tagline: "Thérapeute, énergéticienne & Coach de vie",
  baseline: "Accepter — Aimer — Croire en soi",
  description:
    "Thérapeute, énergéticienne et coach de vie à Lausanne et à distance. Soins énergétiques, coaching de vie, Reiki, coupure des liens, cartes Lenormand.",
  url: "https://www.giuseppinarui.ch",

  phone: "+41 79 448 46 88",
  phoneHref: "tel:+41794484688",
  whatsapp: "41794484688",
  whatsappMessage:
    "Bonjour Giuseppina, je vous écris depuis votre site et j'aimerais en savoir plus.",

  // L'e-mail reçoit les messages du formulaire. Il n'est jamais affiché sur le site.
  facebook: "https://www.facebook.com/giuseppina.ruirienzo",

  place: {
    // Giuseppina LOUE une cabine au sein de cet institut, qui accueille plusieurs
    // praticiens. Ce n'est pas son entreprise : écrire « je reçois à… ».
    name: "Espace bien-être KOREAM",
    street: "Rue Saint-Roch 25",
    postalCode: "1004",
    city: "Lausanne",
    country: "Suisse",
    lat: 46.5247856,
    lng: 6.6276037,
    mapsUrl: "https://maps.app.goo.gl/Tzudqo9ox1DLHfNE9",
  },
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/qui-suis-je", label: "Qui suis-je ?" },
  { href: "/soins", label: "Soins" },
  { href: "/formations", label: "Formations" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
] as const;
