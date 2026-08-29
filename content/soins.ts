export type Modalite = "cabine" | "distance";

export type Soin = {
  id: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  bullets?: string[];
  modalites: Modalite[];
};

// Textes repris du site historique. Contenu validé par Giuseppina — ne pas réécrire
// sans son accord. Les modalités (cabine / distance) sont une hypothèse raisonnable
// à faire confirmer par elle.
export const soins: Soin[] = [
  {
    id: "coupure-des-liens",
    title: "Coupure des liens",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "Ce soin a été créé suite à un séminaire au cours duquel j'ai réalisé que mon attachement inconscient au passé provoquait mes douleurs inflammatoires chroniques depuis 25 ans. Je vivais précisément un épisode très douloureux sur ce plan et 15 jours après le séminaire, j'étais en pleine forme et je n'ai plus jamais eu de douleurs de ce type depuis !",
      "Le soin proposé vous permet de vous libérer de l'emprise de vos ancêtres, de votre famille actuelle ou toutes autres personnes qui ont un lien émotionnel handicapant avec vous. Nous libérons également les émotions répétitives perturbatrices qui vous empêchent d'avancer positivement dans votre vie.",
    ],
  },
  {
    id: "methode",
    title: "Ma méthode",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "Mon approche thérapeutique repose sur plusieurs techniques issues de nombreuses formations dans les domaines suivants : massage, Reiki, pensée positive et médiumnité.",
      "Elle est dispensée habituellement en 3 séances qui intègrent, en fonction de vos besoins : le toucher, la relaxation, la visualisation, un puissant nettoyage énergétique, la conscience de l'impact de nos pensées dans notre vie et les outils pour la création d'une vie plus harmonieuse.",
      "Ces séances sont ponctuées de conseils intuitifs reçus en « connexion » sur votre passé, pour mieux vous aider à vivre le présent et l'avenir plus sereinement.",
    ],
  },
  {
    id: "therapie-individuelle",
    title: "Thérapie individuelle",
    modalites: ["cabine", "distance"],
    lead: "Apporter plus de clarté et de joie dans votre vie.",
    paragraphs: [
      "Les thérapies individuelles sont basées sur cette méthode et visent à vous apporter plus de clarté et de joie dans votre vie. Cela passe souvent par un nettoyage énergétique de la personne, de son lieu d'habitation et de son lieu de travail, puis par votre volonté d'utiliser au quotidien les outils qui vous seront transmis.",
    ],
    bullets: [
      "Vous protéger des énergies perturbatrices.",
      "Conserver votre taux vibratoire élevé — votre énergie vitale.",
      "Transmuter au fur et à mesure vos émotions négatives en émotions positives.",
      "Accomplir vos objectifs privés et professionnels.",
      "Améliorer la communication avec votre partenaire de vie et mieux le comprendre.",
    ],
  },
  {
    id: "therapie-couple",
    title: "Thérapie de couple",
    modalites: ["cabine"],
    paragraphs: [
      "Basée sur la même méthode, elle est dispensée plus rarement : lorsque la personne vient en thérapie individuelle, très souvent elle trouve elle-même les moyens de progresser dans sa communication avec son partenaire.",
      "Prise de recul, conscience des points positifs, retour du lien charnel, travail sur le désir, attention à l'autre : ce sont quelques-uns des éléments abordés régulièrement. Il n'y a pas de « truc tout fait ». Chaque situation est appréhendée selon l'histoire personnelle de votre couple et en tenant compte de votre personnalité. Sur cette base, des jeux et des outils sont proposés, à mettre en pratique au quotidien afin d'apprendre à se retrouver et surtout à se reconnecter.",
    ],
  },
  {
    id: "parents-enfants",
    title: "Parents — enfants",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "On ne naît pas parents, on le devient. De tout temps, nous faisons du mieux que nous pouvons selon les moyens que nous avons, et parfois, inconsciemment, nous transposons certains de nos vécus inadaptés sur nos enfants. Soutenu par un regard et une aide extérieure, il est plus facile de comprendre et de trouver des solutions à toutes les peurs et les doutes de certains enfants.",
      "Comme pour les thérapies individuelles, des outils sont transmis aux enfants et aux parents, pour la gestion du stress, la confiance, l'amour et l'aboutissement des objectifs.",
    ],
  },
  {
    id: "reiki",
    title: "Reiki",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "Le Reiki est un soin énergétique naturel ancestral qui se transmettait entre les membres d'une même famille dans le Japon impérial.",
      "Par le massage Reiki et la méditation guidée, les émotions et les énergies perturbatrices actuelles et ancestrales sont purifiées ou évacuées, et remplacées par des énergies positives et constructives. Le bien-être est ressenti dès la première séance.",
    ],
  },
  {
    id: "cartes",
    title: "Cartes — éclairages intuitifs",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "En 2004, un violent choc émotionnel a provoqué chez moi une transformation personnelle très forte. Cela a considérablement augmenté ma sensibilité aux perceptions subtiles et développé mon intuition. Depuis, j'utilise ces facultés pour aider les autres à trouver des réponses lorsque leur vie est confuse ou lors d'une décision difficile. J'utilise comme principal support les cartes de Mlle Lenormand.",
      "Les cartes, quelles qu'elles soient, ne sont qu'un support à l'expression de votre intuition, et mon expérience permet de déchiffrer les projections qu'elles révèlent.",
      "Par exemple, un tirage annuel qui questionne les mois de janvier à décembre peut vous aider à avoir une vision globale de l'année à venir, à prendre certaines décisions au bon moment ou à détecter les opportunités plus facilement. Ces cartes peuvent également vous éclairer sur des choix privés ou professionnels plus spécifiques. À la fin de chaque tirage, une photo est prise afin que vous puissiez vous souvenir de ce qui a été dit pendant la séance.",
    ],
  },
  {
    id: "massages",
    title: "Massages",
    modalites: ["cabine"],
    paragraphs: [
      "Massage relaxant thérapeutique, massage à quatre mains, drainage lymphatique et massage Amma.",
    ],
  },
  {
    id: "nettoyage-energetique",
    title: "Nettoyage énergétique des personnes et des lieux",
    modalites: ["cabine", "distance"],
    paragraphs: [
      "Nettoyage énergétique de la personne, de son lieu d'habitation et de son lieu de travail, suivi de la mise en place de protections simples à entretenir au quotidien.",
    ],
  },
  {
    id: "creations",
    title: "Créations numériques personnalisées",
    modalites: ["distance"],
    lead: "CHF 25.– la création",
    paragraphs: [
      "À partir d'une photo de vous-même, d'un proche, d'un enfant ou même d'un animal de compagnie, je réalise des créations numériques personnalisées dans un univers lumineux et symbolique. Chaque image est conçue individuellement en fonction de vos souhaits, de votre histoire et de l'ambiance que vous souhaitez transmettre.",
      "Ces créations peuvent représenter un hommage, un message d'amour, une protection symbolique, une célébration familiale ou simplement une source quotidienne d'inspiration et de réconfort.",
      "Un échange préalable est possible afin de définir ensemble l'ambiance, les couleurs et les éléments que vous souhaitez intégrer à votre création.",
    ],
  },
];
