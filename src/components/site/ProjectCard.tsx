import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projectImages } from "@/data/project-images";
import type { UrbanProject } from "@/data/urban-projects";

export function ProjectCard({ project, index }: { project: UrbanProject; index: number }) {
  const image = projectImages[project.category];
  return (
    <Link to="/projets/$slug" params={{ slug: project.slug }} className="group block min-w-0 border-b border-border pb-7 focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4">
      <div className="relative overflow-hidden bg-surface">
        <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
        <span className="absolute left-0 top-0 bg-accent-blue px-4 py-2 font-display text-xs font-bold text-brand-foreground">0{index + 1} / {project.category}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-5">
        <h2 className="text-2xl leading-tight transition-colors group-hover:text-accent-red sm:text-3xl">{project.name}</h2>
        <ArrowUpRight aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-accent-red transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" />
      </div>
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">{project.summary}</p>
      <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />{project.location}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="font-display text-sm font-bold text-accent-blue">{project.budgetLabel}</span>
        <span className="inline-flex items-center gap-2 text-sm font-bold text-accent-red">Découvrir le projet <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}