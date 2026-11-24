import patriote from "@/assets/monument-patriote.jpg.asset.json";
import reunification from "@/assets/monument-reunification.jpg.asset.json";
import unite from "@/assets/monument-unite-nationale.jpg.asset.json";
import atangana from "@/assets/statue-charles-atangana.jpg.asset.json";
import marche from "@/assets/yaounde-marche.jpg";
import vert from "@/assets/yaounde-espace-vert.jpg";
import stade from "@/assets/yaounde-stade.jpg";
import mobilite from "@/assets/yaounde-mobilite.jpg";
import patrimoine from "@/assets/yaounde-patrimoine.jpg";
import eau from "@/assets/yaounde-eau.jpg";

export type PoiCategory = "Monuments" | "Hôpitaux" | "Restaurants" | "Supermarchés" | "Marchés" | "Hôtels" | "Loisirs" | "Administrations" | "Culture & culte" | "Éducation";

export const POI_COLORS: Record<PoiCategory, string> = {
  Monuments: "#c8102e", "Hôpitaux": "#0b8f4d", Restaurants: "#e67e22", "Supermarchés": "#8e44ad",
  "Marchés": "#b7950b", "Hôtels": "#2c3e94", Loisirs: "#16a085", Administrations: "#34495e",
  "Culture & culte": "#a0522d", "Éducation": "#2980b9",
};

export type Poi = { id: string; name: string; category: PoiCategory; quartier: string; arrondissement: string; lat: number; lng: number; image: string; description: string; hours?: string; tags: string[] };

// Positions approximatives, à confirmer par les services de la CUY.
export const pois: Poi[] = [
  { id: "patriote", name: "Monument Patriote « J'aime mon pays »", category: "Monuments", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8655, lng: 11.5168, image: patriote.url, description: "Place paysagère aux arches bilingues célébrant l'attachement des citoyens au Cameroun.", hours: "Accès libre", tags: ["Patrimoine", "Photo"] },
  { id: "reunification", name: "Monument de la Réunification", category: "Monuments", quartier: "Ngoa-Ekellé", arrondissement: "Yaoundé III", lat: 3.8555, lng: 11.5058, image: reunification.url, description: "Spirale monumentale et groupe sculpté symbolisant la réunification de 1961.", hours: "Accès libre", tags: ["Histoire", "Panorama"] },
  { id: "unite", name: "Monument de l'Unité Nationale", category: "Monuments", quartier: "Centre administratif", arrondissement: "Yaoundé I", lat: 3.8725, lng: 11.5135, image: unite.url, description: "Colonnade circulaire, lions gardiens et étoile dorée de l'unité.", hours: "Accès libre", tags: ["Patrimoine"] },
  { id: "atangana", name: "Statue de Charles Atangana", category: "Monuments", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8642, lng: 11.5195, image: atangana.url, description: "Mémorial du Chef Supérieur des Ewondo et des Bene.", hours: "Accès libre", tags: ["Mémoire"] },
  { id: "chu", name: "Centre Hospitalier Universitaire (CHU)", category: "Hôpitaux", quartier: "Melen", arrondissement: "Yaoundé III", lat: 3.8628, lng: 11.4975, image: eau, description: "Hôpital universitaire de référence associé à la Faculté de médecine.", hours: "Urgences 24 h/24", tags: ["Urgences", "Universitaire"] },
  { id: "hgy", name: "Hôpital Général de Yaoundé", category: "Hôpitaux", quartier: "Ngousso", arrondissement: "Yaoundé V", lat: 3.8935, lng: 11.5480, image: eau, description: "Établissement de première catégorie offrant des soins spécialisés.", hours: "Urgences 24 h/24", tags: ["Spécialités"] },
  { id: "hcentral", name: "Hôpital Central de Yaoundé", category: "Hôpitaux", quartier: "Messa", arrondissement: "Yaoundé II", lat: 3.8730, lng: 11.5070, image: eau, description: "Le plus ancien grand hôpital public de la capitale.", hours: "Urgences 24 h/24", tags: ["Public"] },
  { id: "gyneco", name: "Hôpital Gynéco-Obstétrique et Pédiatrique", category: "Hôpitaux", quartier: "Ngousso", arrondissement: "Yaoundé V", lat: 3.8990, lng: 11.5560, image: eau, description: "Soins de la mère et de l'enfant.", hours: "24 h/24", tags: ["Maternité", "Pédiatrie"] },
  { id: "mfoundi", name: "Marché Mfoundi", category: "Marchés", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8620, lng: 11.5230, image: marche, description: "Grand marché vivrier : fruits, légumes et produits frais.", hours: "6 h – 19 h", tags: ["Vivrier"] },
  { id: "mokolo", name: "Marché Mokolo", category: "Marchés", quartier: "Mokolo", arrondissement: "Yaoundé II", lat: 3.8730, lng: 11.4980, image: marche, description: "Le plus grand marché de Yaoundé : textiles, vivres, quincaillerie.", hours: "6 h – 19 h", tags: ["Grand marché"] },
  { id: "mvogmbi", name: "Marché Mvog-Mbi", category: "Marchés", quartier: "Mvog-Mbi", arrondissement: "Yaoundé IV", lat: 3.8475, lng: 11.5205, image: marche, description: "Marché populaire, partenaire de la CUY pour la précollecte des déchets.", hours: "6 h – 19 h", tags: ["Salubrité"] },
  { id: "mahima", name: "Supermarché Mahima", category: "Supermarchés", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8670, lng: 11.5150, image: marche, description: "Grande surface alimentaire et produits du quotidien.", hours: "8 h – 21 h", tags: ["Alimentation"] },
  { id: "carrefour", name: "Carrefour Market Bastos", category: "Supermarchés", quartier: "Bastos", arrondissement: "Yaoundé I", lat: 3.8930, lng: 11.5120, image: marche, description: "Hypermarché moderne dans le quartier résidentiel de Bastos.", hours: "8 h – 22 h", tags: ["Hypermarché"] },
  { id: "santa", name: "Santa Lucia Biyem-Assi", category: "Supermarchés", quartier: "Biyem-Assi", arrondissement: "Yaoundé VI", lat: 3.8370, lng: 11.4860, image: marche, description: "Supermarché de proximité du quartier Biyem-Assi.", hours: "8 h – 21 h", tags: ["Proximité"] },
  { id: "mvog-ada-food", name: "Rue de la Joie — Mvog-Ada", category: "Restaurants", quartier: "Mvog-Ada", arrondissement: "Yaoundé V", lat: 3.8620, lng: 11.5330, image: mobilite, description: "Poisson braisé, soya et ambiance nocturne typique de Yaoundé.", hours: "17 h – tard", tags: ["Braise", "Vie nocturne"] },
  { id: "bastos-resto", name: "Restaurants de Bastos", category: "Restaurants", quartier: "Bastos", arrondissement: "Yaoundé I", lat: 3.8960, lng: 11.5080, image: mobilite, description: "Cuisine camerounaise et internationale dans le quartier diplomatique.", hours: "11 h – 23 h", tags: ["International"] },
  { id: "essos-resto", name: "Carrefour Essos", category: "Restaurants", quartier: "Essos", arrondissement: "Yaoundé V", lat: 3.8720, lng: 11.5450, image: mobilite, description: "Ndolé, eru et poulet DG dans les maquis du carrefour.", hours: "10 h – tard", tags: ["Cuisine locale"] },
  { id: "hilton", name: "Hilton Yaoundé", category: "Hôtels", quartier: "Centre administratif", arrondissement: "Yaoundé I", lat: 3.8695, lng: 11.5155, image: patrimoine, description: "Grand hôtel au cœur du centre administratif.", hours: "24 h/24", tags: ["Affaires"] },
  { id: "mont-febe", name: "Hôtel Mont Fébé", category: "Hôtels", quartier: "Mont Fébé", arrondissement: "Yaoundé I", lat: 3.9100, lng: 11.4950, image: vert, description: "Hôtel sur les hauteurs avec vue sur la ville et golf.", hours: "24 h/24", tags: ["Panorama", "Golf"] },
  { id: "omnisports", name: "Stade Ahmadou Ahidjo (Omnisports)", category: "Loisirs", quartier: "Mfandena", arrondissement: "Yaoundé V", lat: 3.8850, lng: 11.5390, image: stade, description: "Stade historique des Lions Indomptables.", tags: ["Football"] },
  { id: "olembe", name: "Stade Paul Biya d'Olembé", category: "Loisirs", quartier: "Olembé", arrondissement: "Yaoundé I", lat: 3.9570, lng: 11.5300, image: stade, description: "Complexe moderne construit pour la CAN 2021.", tags: ["CAN", "Football"] },
  { id: "lac", name: "Lac municipal", category: "Loisirs", quartier: "Centre-ville", arrondissement: "Yaoundé III", lat: 3.8610, lng: 11.5100, image: vert, description: "Espace de promenade et de détente au centre-ville.", hours: "Accès libre", tags: ["Nature"] },
  { id: "mvog-betsi", name: "Zoo de Mvog-Betsi", category: "Loisirs", quartier: "Mvog-Betsi", arrondissement: "Yaoundé VI", lat: 3.8480, lng: 11.4780, image: vert, description: "Parc zoologique et botanique, sortie familiale.", hours: "9 h – 18 h", tags: ["Famille"] },
  { id: "hdv", name: "Hôtel de Ville — CUY", category: "Administrations", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8660, lng: 11.5175, image: patrimoine, description: "Siège de la Communauté Urbaine de Yaoundé.", hours: "Lun–Ven 7 h 30 – 15 h 30", tags: ["Mairie"] },
  { id: "musee", name: "Musée National", category: "Culture & culte", quartier: "Centre administratif", arrondissement: "Yaoundé I", lat: 3.8680, lng: 11.5125, image: patrimoine, description: "Ancien palais présidentiel retraçant l'histoire du Cameroun.", hours: "Mar–Dim 9 h – 17 h", tags: ["Histoire", "Art"] },
  { id: "cathedrale", name: "Cathédrale Notre-Dame des Victoires", category: "Culture & culte", quartier: "Centre-ville", arrondissement: "Yaoundé I", lat: 3.8645, lng: 11.5150, image: patrimoine, description: "Cathédrale catholique emblématique du centre-ville.", tags: ["Architecture"] },
  { id: "mvolye", name: "Basilique Marie-Reine-des-Apôtres", category: "Culture & culte", quartier: "Mvolyé", arrondissement: "Yaoundé III", lat: 3.8350, lng: 11.5040, image: patrimoine, description: "Basilique bâtie sur le site de la première mission catholique.", tags: ["Patrimoine"] },
  { id: "uy1", name: "Université de Yaoundé I", category: "Éducation", quartier: "Ngoa-Ekellé", arrondissement: "Yaoundé III", lat: 3.8590, lng: 11.4990, image: patrimoine, description: "Principale université publique de la capitale.", tags: ["Université"] },
  { id: "bastos-edu", name: "Centre Éducatif Bastos", category: "Éducation", quartier: "Bastos", arrondissement: "Yaoundé I", lat: 3.8915, lng: 11.5105, image: patrimoine, description: "Établissement scolaire, source du Club Journal sur les lieux de Yaoundé.", tags: ["École"] },
];

export const poiCategories = Object.keys(POI_COLORS) as PoiCategory[];
