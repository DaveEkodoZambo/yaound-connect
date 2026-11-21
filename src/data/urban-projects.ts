export type ProjectCategory = "Assainissement" | "Voirie" | "Mobilité" | "Salubrité";
export type UrbanProject = {
  slug: string;
  name: string;
  fullName: string;
  category: ProjectCategory;
  summary: string;
  location: string;
  funding: string;
  budget: number;
  budgetLabel: string;
  duration: string;
  documentNote: string;
  facts: { value: string; label: string }[];
  sections: { title: string; paragraphs: string[]; items: string[] }[];
  sources: string[];
  milestones?: { date: string; label: string }[];
  roads?: { district: string; rows: { name: string; meters: number }[] }[];
  financing?: { name: string; amount: number }[];
};

export const urbanProjects: UrbanProject[] = [
  {
    slug: "pcady", name: "PCADY", fullName: "Projet complémentaire d’assainissement pluvial durable de la Ville de Yaoundé",
    category: "Assainissement", summary: "Mieux gérer les eaux pluviales, réduire les risques d’inondation et redonner une place à la vie urbaine le long des cours d’eau.",
    location: "Yaoundé et ses sept communes d’arrondissement", funding: "Banque africaine de développement · prêt FAD", budget: 23600000000, budgetLabel: "23,6 milliards FCFA", duration: "48 mois prévus",
    documentNote: "Le prêt annoncé dans la note de lancement représente environ 23,6 milliards FCFA. La présentation générale distingue un coût global de 30 millions d’unités de compte (UC), une contribution FAD de 27 millions d’UC et un complément FEM estimé à 8 millions USD. Ces montants ne sont pas additionnés ni convertis ici. L’avancement actuel n’est pas précisé dans les documents.",
    facts: [{ value: "2 ha", label: "Bassin d’écrêtement prévu" }, { value: "600 m", label: "Canal sur la Djoungolo" }, { value: "7", label: "Communes d’arrondissement" }],
    milestones: [{ date: "20 septembre 2022", label: "Signature de la convention de prêt" }, { date: "23 février 2023", label: "Entrée en vigueur de l’accord" }, { date: "3 mai 2023", label: "Réunion de démarrage à l’Hôtel de Ville" }],
    sections: [
      { title: "Une réponse durable aux inondations", paragraphs: ["Le PCADY prolonge les phases 1 et 2 du Projet d’assainissement de Yaoundé (PADY), qui ont permis la construction de 17 km de canaux. Les pluies exceptionnelles de 2018 ont néanmoins montré la nécessité de nouveaux ouvrages pour mieux adapter la ville au changement climatique.", "Après la clôture du PADY 2 au 30 juin 2021, ce projet complémentaire reprend des interventions non réalisées et associe drainage, voirie, gestion des déchets et amélioration du cadre de vie."], items: [] },
      { title: "Les infrastructures prévues", paragraphs: ["Les ouvrages visent à maîtriser les crues et à relier les berges aménagées au réseau de circulation existant."], items: ["Djoungolo : bassin d’écrêtement de 2 hectares et canal trapézoïdal de 600 mètres, de 2 m de base et 1,5 m de hauteur.", "Mingoa : dalot de 40 mètres, de section 3 × 2 m, face à la voirie municipale sur l’avenue Charles Atangana, pour le raccordement au Mfoundi.", "Abiergue : élargissement des voies de berge sur 860 mètres, à deux voies, et raccordement vers Sapeur Mokolo.", "Rue du Mfoundi : réhabilitation de 600 mètres entre le carrefour SNI / marché du Mfoundi et le Collège Montesquieu.", "Curage des canaux et ouvrages du centre-ville, ainsi que des collecteurs enterrés de l’avenue Kennedy et du boulevard du 20-Mai.", "Aménagement d’une plateforme de précollecte des déchets solides et surveillance des travaux de drainage, de voirie et des équipements publics."] },
      { title: "Une place à vivre face au marché Mvog-Ada", paragraphs: ["Sur les berges de l’Ewoué, un espace clôturé et sécurisé est prévu pour les habitants des quartiers environnants, notamment les femmes et les jeunes."], items: ["Terrains de football, de basket et de volley, espace boisé et promenades piétonnes.", "Centre de promotion de la femme, centre multifonctionnel de promotion des jeunes et centre d’écoute des enfants de la rue.", "Kiosques, mobilier urbain, parkings, poste de police, toilettes, bacs à ordures et éclairage public."] },
      { title: "Déchets, prévention et capacités municipales", paragraphs: ["Le projet appuie la stratégie de gestion des déchets solides étudiée lors du PADY 2. Les associations, ONG et organisations de femmes doivent être accompagnées pour structurer la précollecte, le curage et la sensibilisation."], items: ["Renforcement des parcs d’engins de la CUY et des sept communes d’arrondissement.", "Bacs à ordures, tricycles, brouettes, pelles et équipements de protection pour les organisations de terrain.", "Appui à l’IRGM pour la collecte et l’analyse des données hydrométéorologiques et la mise en place d’une alerte précoce aux inondations.", "Diffusion de prévisions saisonnières et de bilans climatiques mensuels, trimestriels et annuels.", "Études des ouvrages hydrauliques insuffisants, appui aux ministères techniques, communication et études de valorisation des déchets.", "Gestion du projet par une cellule dédiée, avec évaluation et audit annuel."] },
      { title: "Les choix techniques", paragraphs: ["Les solutions s’appuient sur les études d’avant-projet détaillé du PADY 2. Le bassin d’écrêtement constitue une innovation pour améliorer la gestion des écoulements. Les voies de berge sont dimensionnées pour s’intégrer au trafic urbain.", "Les voies le long de la Mingoa n’ont pas été retenues dans cette phase, en raison de leur coût et de leur faible intégration au réseau. Le document envisage leur aménagement ultérieur dans un plan urbain de la CUY."], items: [] },
    ], sources: ["Présentation générale du PCADY", "Lancement PCADY — note d’information, Canicha Djakba, Celcom-RP / CUY"],
  },
  {
    slug: "pdvir", name: "PDVIR", fullName: "Projet de développement des villes inclusives et résilientes",
    category: "Voirie", summary: "Relier Nkolmesseng et Oyom-Abang au réseau urbain, avec des routes aménagées et des équipements de proximité pour les habitants.",
    location: "Nkolmesseng · Oyom-Abang · Cité verte", funding: "Banque mondiale", budget: 12200000000, budgetLabel: "12,2 milliards FCFA", duration: "Échéance annoncée : 2024",
    documentNote: "Le document annonçait une fin des travaux en 2024. Cette échéance est historique et ne constitue pas une confirmation de livraison. Aucun taux d’avancement actuel n’a été fourni. Les distances ci-dessous reprennent les valeurs du tableau source.",
    facts: [{ value: "11", label: "Tronçons routiers prévus" }, { value: "14,915 km", label: "Longueur totale du tableau" }, { value: "2", label: "Arrondissements pour la voirie structurante" }],
    sections: [
      { title: "Désenclaver les quartiers", paragraphs: ["À Nkolmesseng (Yaoundé V) et Oyom-Abang (Yaoundé VII), les routes dégradées exposent les usagers à la boue pendant les pluies et à la poussière en saison sèche. Le PDVIR prévoit le bitumage de six tronçons à Yaoundé V et de cinq à Yaoundé VII.", "Les voies de proximité doivent raccorder l’intérieur des quartiers aux routes principales et au centre-ville. Le document mentionne également l’objectif de relier les routes de Yaoundé V à celles de Yaoundé IV."], items: [] },
      { title: "Quatre composantes complémentaires", paragraphs: ["Le projet associe les infrastructures à un accompagnement des collectivités et des populations."], items: ["Renforcement des capacités : formation à la gestion de la croissance démographique et production de documents de planification.", "Gestion des catastrophes naturelles et adaptation aux risques.", "Gestion et coordination du projet.", "Infrastructures : voirie structurante puis routes de proximité dans les quartiers."] },
      { title: "Des équipements pour la vie locale", paragraphs: ["Au-delà des chaussées, les aménagements doivent contribuer au bien-être des populations et à une ville plus inclusive."], items: ["Acquisition de bacs à ordures.", "Construction prévue d’un terrain de sport et d’une salle polyvalente à vocation culturelle.", "Développement de voies piétonnes à Nkolmesseng, Oyom-Abang et à la Cité verte.", "Financement de projets des populations cibles et implication dans des travaux à haute intensité de main-d’œuvre.", "Sensibilisation au changement climatique et aux approches d’adaptation."] },
    ], sources: ["Présentation générale du PDVIR — Canicha Djakba, Celcom-RP / CUY"],
    roads: [
      { district: "Yaoundé V · Nkolmesseng", rows: [
        { name: "Lycée bilingue Essos – Carrefour Mont Bélinga Nkolmesseng", meters: 2671 },
        { name: "Carrefour Momebelengal Nkolmesseng – Carrefour Éleveur", meters: 2225 },
        { name: "Carrefour Safari Nkolmesseng – le Chef – Carrefour Éleveur", meters: 1760 },
        { name: "Carrefour Safari – Carrefour Fabrique", meters: 665 },
        { name: "Carrefour Fabrique – Carrefour Mebe City, avec amorce vers Mimboman école et ouvrage de franchissement", meters: 722 },
        { name: "Carrefour Momebelengal – Carrefour Fabrique", meters: 1249 },
      ] },
      { district: "Yaoundé VII · Oyom-Abang", rows: [
        { name: "Carrefour petit marché Oyom-Abang – Carrefour Camp Sonel Oyom-Abang", meters: 1240 },
        { name: "Carrefour Camp Sonel Oyom-Abang – Intersection route Loboudi", meters: 1375 },
        { name: "Carrefour Camp Sonel Oyom-Abang – Carrefour Centre Oyom-Abang", meters: 875 },
        { name: "Carrefour Centre Oyom-Abang – Carrefour Nkolbisson", meters: 1660 },
        { name: "Carrefour Centre Oyom-Abang – Carrefour Evouna Bella", meters: 473 },
      ] },
    ],
  },
  {
    slug: "yaounde-coeur-de-ville", name: "Yaoundé Cœur de Ville", fullName: "Yaoundé Cœur de Ville",
    category: "Mobilité", summary: "Réaménager les grands carrefours, organiser les transports collectifs et rendre les déplacements à pied plus sûrs et agréables.",
    location: "Mvan · Elig-Effa · Elig-Edzoa et autres sites", funding: "AFD / C2D · État du Cameroun", budget: 54800000000, budgetLabel: "54,8 milliards FCFA", duration: "Présentation portant sur 2024",
    documentNote: "La présentation décrit des actions prévues et porte sur 2024. Elle ne confirme ni leur livraison ni leur état d’avancement actuel. Les montants de financement sont approximatifs, conformément au document.",
    facts: [{ value: "3", label: "Carrefours structurants" }, { value: "49,2 Md", label: "FCFA financés via l’AFD / C2D" }, { value: "5,6 Md", label: "FCFA apportés par l’État" }],
    financing: [{ name: "AFD, via le Contrat de désendettement et de développement (C2D)", amount: 49200000000 }, { name: "État du Cameroun", amount: 5600000000 }],
    sections: [
      { title: "Une mobilité urbaine plus fluide", paragraphs: ["Composante du Plan de mobilité urbaine soutenable piloté par la CUY depuis 2019, Yaoundé Cœur de Ville vise à décongestionner les zones prioritaires du centre-ville.", "Le projet cherche à améliorer l’efficacité du réseau viaire, faciliter les transports collectifs, renforcer la sécurité routière, améliorer les cheminements piétons et mieux relier les sites aux quartiers environnants."], items: [] },
      { title: "Trois carrefours stratégiques", paragraphs: ["La première composante porte sur des aménagements structurants et sur la voirie qui dessert les carrefours."], items: ["Mvan : réaménagement du principal point de départ des liaisons interurbaines et construction d’une nouvelle gare routière pour les transporteurs.", "Elig-Effa : aménagement du carrefour et réaménagement de la gare routière de Mokolo.", "Elig-Edzoa : réorganisation du nœud de liaison entre le centre-ville et les quartiers résidentiels de l’est.", "Intégration d’infrastructures pour les modes doux et les transports collectifs aux abords de ces sites."] },
      { title: "Des actions à impact rapide", paragraphs: ["Des interventions plus légères complètent les grands aménagements pour améliorer les déplacements du quotidien."], items: ["Reprise des chaussées et de l’assainissement, trottoirs, feux de signalisation et traversées piétonnes aux carrefours Awaé escalier, Emombo, Sous-manguier et à l’entrée BEAC Mvan.", "Implantation d’arrêts de taxis collectifs et réaménagement de trois terminus du réseau de transport artisanal urbain.", "Aménagement de cheminements piétons dans plusieurs secteurs et d’accès à des établissements scolaires."] },
      { title: "Les monts Messa et l’accompagnement des habitants", paragraphs: ["Le projet prévoit des sentiers de randonnée pédestre sur les monts Messa, une voie d’accès et des équipements de loisirs.", "La troisième composante concerne l’indemnisation et l’accompagnement des personnes affectées. La quatrième porte sur le pilotage du projet."], items: [] },
    ], sources: ["Présentation générale de Yaoundé Cœur de Ville — Canicha Djakba, Celcom-RP / CUY"],
  },
  {
    slug: "precollecte-mvog-mbi", name: "Un marché Mvog-Mbi plus propre", fullName: "Partenariat de précollecte des déchets du marché Mvog-Mbi et ses environs",
    category: "Salubrité", summary: "Une collaboration avec les commerçants pour la propreté du marché, l’entretien des caniveaux et l’acheminement des déchets vers les points de collecte.",
    location: "Marché Mvog-Mbi et ses environs", funding: "Communauté Urbaine de Yaoundé", budget: 19155720, budgetLabel: "19 155 720 FCFA TTC / an", duration: "1 an · 4 trimestres",
    documentNote: "Le document fourni comporte des champs de date et de signature non renseignés : la signature et le démarrage ne sont donc pas confirmés. Le montant annuel en chiffres est repris ici ; son écriture en lettres et certains sous-totaux du détail mensuel présentent des incohérences à faire confirmer par la CUY.",
    facts: [{ value: "1 an", label: "Durée contractuelle prévue" }, { value: "1 596 310", label: "FCFA TTC par mois" }, { value: "4", label: "Périodes trimestrielles de suivi" }],
    sections: [
      { title: "Un partenariat de proximité", paragraphs: ["Le contrat organise une collaboration entre la Communauté Urbaine de Yaoundé et l’Association Groupe des Volontaires des Commerçants du Marché de Mvog-Mbi. Il vise la propreté générale et la préservation des infrastructures de drainage, des poubelles et des bacs de relais.", "La CUY est représentée dans le document par le maire Luc Messi Atangana. L’association assure les prestations de terrain, sous le contrôle de la Sous-Direction de l’Environnement et du Développement Durable."], items: [] },
      { title: "Les prestations attendues", paragraphs: ["L’entretien du marché doit être permanent et couvrir les espaces de circulation comme les ouvrages d’assainissement."], items: ["Assurer la propreté générale du marché et de ses environs, et balayer les allées piétonnes.", "Ramasser les déchets et les acheminer vers les points de collecte de HYSACAM.", "Nettoyer les canalisations pour faciliter l’écoulement des eaux et évacuer les eaux stagnantes.", "Désherber régulièrement le marché et ses abords.", "Sensibiliser les usagers à la salubrité et à la gestion durable de l’environnement."] },
      { title: "Un suivi hebdomadaire et trimestriel", paragraphs: ["Le Chef du Service de la Promotion de l’Environnement et du Développement Durable (SPEDD) est chargé du suivi. Une semaine satisfaisante est notée 1 et une semaine non satisfaisante 0. Le rapport entre semaines satisfaisantes et semaines du trimestre détermine le pourcentage de satisfaction appliqué au forfait trimestriel.", "À chaque trimestre, un tableau contradictoire consigne les semaines et les observations. Un procès-verbal de réception accompagne les demandes de paiement ; il est signé par les responsables prévus au contrat, dont la DUACV, le Comptable Matière, le Chef SPEDD, le Chef de Poste de Police et le représentant de l’organisation."], items: [] },
      { title: "Durée, rémunération et responsabilités", paragraphs: ["Le contrat prévoit un an à compter de la signature du maire, soit quatre trimestres. Il entre en vigueur après notification de l’ordre de service de démarrage. Le montant annuel affiché en chiffres est de 19 155 720 FCFA TTC, pour 1 596 310 FCFA TTC par mois, sur présentation du décompte, de l’attachement et du procès-verbal.", "L’association fournit un matériel adapté, assume la responsabilité des actes de ses membres et de l’usage du matériel et souscrit les assurances nécessaires. Elle doit respecter les règles environnementales, de santé et de sécurité publique."], items: ["Les travaux supplémentaires nécessitent un ordre de service.", "Toute modification du contrat se fait par avenant.", "En cas de litige, une réunion amiable est prévue dans les 20 jours suivant la lettre de demande ; à défaut d’accord, le tribunal territorialement compétent de Yaoundé est saisi.", "Le contrat doit être signé par les deux parties et enregistré aux frais de l’association."] },
    ], sources: ["Contrat de partenariat de précollecte des déchets du marché Mvog-Mbi et ses environs — document fourni, dates non renseignées"],
  },
];

export function findUrbanProject(slug: string) {
  return urbanProjects.find((project) => project.slug === slug);
}