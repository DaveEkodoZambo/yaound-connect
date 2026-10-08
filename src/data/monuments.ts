import patriote from "@/assets/monument-patriote.jpg.asset.json";
import reunification from "@/assets/monument-reunification.jpg.asset.json";
import atangana from "@/assets/statue-charles-atangana.jpg.asset.json";
import unite from "@/assets/monument-unite-nationale.jpg.asset.json";
import independance from "@/assets/monument-1960.jpg.asset.json";

export type Monument = {
  slug: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  summary: string;
  caption: string;
  highlights: string[];
  sections: { title: string; paragraphs: string[] }[];
};

// Descriptions issues du rapport fourni ; les interprétations restent attribuées au document.
export const monuments: Monument[] = [
  {
    slug: "monument-patriote",
    name: "Le Monument Patriote",
    category: "Engagement civique",
    image: patriote.url,
    alt: "Vue d’ensemble du Monument Patriote et de ses arches bilingues à Yaoundé",
    summary: "Sous ses grandes arches bilingues, une place paysagère célèbre l’attachement au Cameroun et la fierté de ses citoyens.",
    caption: "Les arches « J’aime mon pays le Cameroun » et « I love my country Cameroon », au cœur d’un rond-point paysager.",
    highlights: ["Arches bilingues", "Ballon de football central", "Parterres en étoile"],
    sections: [
      { title: "Un carrefour de l’engagement civique", paragraphs: ["Le Monument Patriote occupe le centre d’un vaste rond-point très fréquenté de Yaoundé. Cette place monumentale ouverte sur la ville matérialise l’attachement des citoyens à la patrie et l’identité collective camerounaise, dans un langage architectural moderne."] },
      { title: "L’arche monumentale bilingue", paragraphs: ["De grandes arches blanches portent en lettres dorées les inscriptions « J’AIME MON PAYS LE CAMEROUN » et « I LOVE MY COUNTRY CAMEROON ». Le rapport y voit une affirmation du bilinguisme officiel comme socle de l’unité nationale."] },
      { title: "Le football, la jeunesse et l’eau", paragraphs: ["Au centre de l’installation, un pilier porte un ballon de football stylisé accompagné d’éléments dorés évoquant des couronnes ou des trophées. Cet ensemble célèbre l’excellence sportive du Cameroun, la vitalité de sa jeunesse et le dynamisme national.", "Le document décrit des bassins et des jeux de fontaines à la base du pilier et le long des cheminements. Il associe l’eau à la vie, à la pureté et à la prospérité, ainsi qu’à une fraîcheur visuelle et acoustique."] },
      { title: "Une place paysagère au cœur de la ville", paragraphs: ["Les pelouses dessinent des étoiles, en référence à l’étoile du drapeau national. Les parterres alternent avec des surfaces dallées claires et des espaces minéraux géométriques.", "Des bancs circulaires en bois et en métal accompagnent les espaces de repos. Une grille ceinture le rond-point ; les initiales CUY sur les bordures rappellent l’identité municipale de cet espace civique."] },
    ],
  },
  {
    slug: "monument-reunification",
    name: "Le Monument de la Réunification",
    category: "Mémoire nationale",
    image: reunification.url,
    alt: "Sculpture d’un adulte entouré d’enfants devant la spirale du Monument de la Réunification",
    summary: "Un groupe sculpté et une architecture en spirale racontent la fraternité, la transmission et l’avenir d’une nation réunie.",
    caption: "Le groupe sculpté en pierre et, à l’arrière-plan, la structure hélicoïdale du Monument de la Réunification.",
    highlights: ["Groupe sculpté en pierre", "Transmission entre générations", "Architecture hélicoïdale"],
    sections: [
      { title: "L’héritage et la fraternité", paragraphs: ["Cette œuvre monumentale en pierre brute célèbre le rassemblement, la solidarité et les liens entre générations. La sculpture en ronde-bosse s’inscrit dans un espace de mémoire et de recueillement dédié à la nation camerounaise réunie."] },
      { title: "Une communauté qui protège ses enfants", paragraphs: ["Sur un socle cylindrique massif, une figure adulte robuste porte et enlace plusieurs enfants disposés autour de son corps. Le rapport interprète cette composition comme une communauté qui protège sa descendance et veille sur son avenir commun."] },
      { title: "Le geste de la transmission", paragraphs: ["Un bras levé tient un objet symbolique que le document rapproche d’une torche, d’un flambeau ou d’un artefact traditionnel. Ce geste est interprété comme la transmission de la liberté, de la sagesse, de l’histoire partagée et de l’espérance.", "La pierre granuleuse, la patine et les visages stylisés donnent à l’ensemble un caractère intemporel. Le rapport y lit la dignité, la résilience et la joie sereine de la fraternité."] },
      { title: "La spirale et le parvis", paragraphs: ["Derrière le groupe sculpté, des bandes architecturales en spirale s’élèvent vers le ciel. Leur géométrie moderne contraste avec la matière organique de la sculpture : le document y voit une société attachée à ses racines et tournée vers le développement.", "Des dalles de pierre marbrée, aux nuances ocres et sombres, composent le parvis et guident le regard vers la sculpture."] },
    ],
  },
  {
    slug: "charles-atangana-ntsama",
    name: "La Statue de Charles Atangana Ntsama",
    category: "Figure historique",
    image: atangana.url,
    alt: "Statue en pied de Charles Atangana Ntsama, en tenue de commandement, dans un jardin",
    summary: "Un mémorial dans un écrin de verdure rend hommage au Chef Supérieur des Ewondo et des Bene et à son rôle dans l’histoire locale.",
    caption: "Charles Atangana Ntsama représenté en habit de commandement, au-dessus de sa plaque commémorative.",
    highlights: ["Chef Supérieur des Ewondo et des Bene", "Octobre 1883 – 1er septembre 1943", "Statue commémorative en pied"],
    sections: [
      { title: "Une figure de l’histoire locale", paragraphs: ["Ce mémorial honore Charles Atangana Ntsama, présenté dans le rapport comme une figure coutumière et administrative importante du Cameroun colonial et pré-indépendant.", "La plaque du socle le désigne comme « Chef Supérieur des Ewondo et des Bene ». Le document indique les dates d’octobre 1883 au 1er septembre 1943, une période de profondes mutations pour les populations locales."] },
      { title: "La posture et l’habit de commandement", paragraphs: ["Le chef est représenté debout, grandeur nature, dans une posture solennelle. Sa veste de commandement comporte des poches structurées, une ceinture et des galons.", "Des décorations et des médailles ornent sa poitrine. Son couvre-chef d’apparat et l’insigne ou bâton tenu à la main complètent cette représentation de l’autorité. Le rapport associe ces attributs à sa reconnaissance institutionnelle et à son rôle diplomatique et administratif."] },
      { title: "Le socle et le devoir de mémoire", paragraphs: ["La statue repose sur un socle robuste en béton et en pierre, où une plaque sombre gravée transmet les repères biographiques aux visiteurs et aux jeunes générations.", "L’environnement verdoyant et la lumière filtrée par les grands arbres créent un cadre de recueillement propice à la réflexion historique."] },
    ],
  },
  {
    slug: "monument-unite-nationale",
    name: "Le Monument de l’Unité Nationale",
    category: "Unité et souveraineté",
    image: unite.url,
    alt: "Colonnade blanche circulaire du Monument de l’Unité Nationale, avec lions et étoile centrale",
    summary: "Une colonnade circulaire, des lions gardiens et une étoile dorée composent une architecture consacrée à la cohésion nationale.",
    caption: "L’anneau porté par les colonnes blanches, les lions et l’étoile à cinq branches, devant les collines verdoyantes.",
    highlights: ["Colonnade circulaire", "Lions gardiens", "Étoile dorée à cinq branches"],
    sections: [
      { title: "L’anneau étoilé et la cohésion nationale", paragraphs: ["Cette structure circulaire de grande envergure symbolise l’harmonie, la concorde et la force des différentes composantes de la nation. Le rapport rapproche également ses figures de lions de l’imagerie des Lions Indomptables."] },
      { title: "Une architecture de l’alliance", paragraphs: ["De hauts piliers cylindriques blancs disposés en cercle portent un anneau suspendu. Le rapport interprète ce péristyle et sa corniche comme l’expression d’une alliance et d’une protection de l’État autour de son peuple."] },
      { title: "Les lions et l’étoile de l’unité", paragraphs: ["Des sculptures de fauves occupent le pourtour supérieur, en position de veille ou de marche. Ces gardiens puissants évoquent, selon le document, la bravoure et l’énergie du peuple camerounais face aux défis de l’histoire.", "Un pylône central s’élève au-dessus de l’anneau et porte une étoile dorée à cinq branches. Elle représente l’unité nationale et la souveraineté ; le rapport l’associe à une aspiration à la paix, à la prospérité et à l’excellence."] },
      { title: "Un monument dans son paysage", paragraphs: ["Le terre-plein engazonné est protégé par une clôture métallique verte ornée de motifs circulaires. Les collines et la végétation tropicale en arrière-plan contrastent avec la blancheur de l’architecture."] },
    ],
  },
  {
    slug: "monument-independance-1960",
    name: "Le Monument de l’Indépendance de 1960",
    category: "Indépendance",
    image: independance.url,
    alt: "Obélisque commémoratif portant la date 1960 et un socle décoré d’armoiries",
    summary: "Un obélisque élancé portant la date 1960 rappelle l’accession du Cameroun à la souveraineté internationale.",
    caption: "L’obélisque historique de 1960, sa pointe rouge et son socle aux armoiries républicaines.",
    highlights: ["Date 1960 en relief", "Armoiries républicaines", "Flèche à pointe rouge"],
    sections: [
      { title: "Le symbole de l’émancipation", paragraphs: ["Désigné dans le rapport comme « l’Obélisque Historique et Monument Commémoratif de 1960 », cet édifice marque l’accession du Cameroun à la souveraineté internationale. Sa flèche dressée vers le ciel est présentée comme un symbole de liberté."] },
      { title: "L’obélisque et la date fondatrice", paragraphs: ["Le corps central est un obélisque effilé de teinte blanche. L’année « 1960 », moulée en relief et en caractères dorés, rappelle aux générations présentes et futures l’année fondatrice de la République."] },
      { title: "Le socle aux armoiries", paragraphs: ["La base massive, de forme parallélépipédique, présente des façades texturées. Des armoiries officielles en relief, des cadres géométriques sculptés, des grilles décoratives et des alignements d’étoiles républicaines l’ornent.", "Le rapport lit dans ces détails une évocation de la construction de l’État et de son identité institutionnelle."] },
      { title: "Une flèche tournée vers l’avenir", paragraphs: ["La pointe pyramidale de l’obélisque est coiffée d’une touche rouge. Cette couleur rappelle le drapeau national et constitue un repère visuel que le document associe à un élan vers l’avenir."] },
    ],
  },
];