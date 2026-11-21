import water from "@/assets/yaounde-eau.jpg";
import roads from "@/assets/yaounde-mobilite.jpg";
import park from "@/assets/yaounde-espace-vert.jpg";
import market from "@/assets/yaounde-marche.jpg";
import type { ProjectCategory } from "./urban-projects";

export const projectImages: Record<ProjectCategory, { src: string; alt: string }> = {
  Assainissement: { src: water, alt: "Illustration de l’accès à l’eau dans un quartier de Yaoundé" },
  Voirie: { src: roads, alt: "Illustration de la circulation sur une avenue de Yaoundé" },
  Mobilité: { src: park, alt: "Illustration d’un espace vert dans les collines de Yaoundé" },
  Salubrité: { src: market, alt: "Illustration de la vie d’un marché de Yaoundé" },
};