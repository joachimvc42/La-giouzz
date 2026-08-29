// ⚠️ CONTENU À COMPLÉTER PAR GIUSEPPINA.
// Ces formations sont citées sur le site historique mais les pages correspondantes
// (créées en 2017) sont restées entièrement vides : il n'existe aucun texte à reprendre.
// Pour chacune, il manque : à qui elle s'adresse, ce qu'on y apprend, la durée,
// le format (en cabine / à distance / en groupe).
// Tant que `description` est vide, la page affiche une invitation à prendre contact.

export type Formation = {
  id: string;
  title: string;
  description: string[]; // vide = « contenu en préparation »
  pourQui?: string;
  duree?: string;
  format?: string;
};

export const formations: Formation[] = [
  { id: "maitrise-du-pendule", title: "Maîtrise du pendule", description: [] },
  {
    id: "nettoyage-energetique",
    title: "Nettoyage énergétique des personnes et des lieux",
    description: [],
  },
  { id: "pensee-positive", title: "Pensée positive", description: [] },
  { id: "entites", title: "Entités", description: [] },
  { id: "carte-lenormand", title: "Cartes Lenormand", description: [] },
];
