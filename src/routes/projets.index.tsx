import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowDown, Building2 } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { urbanProjects, type ProjectCategory } from "@/data/urban-projects";
import { projectImages } from "@/data/project-images";

const title = "Grands projets et réalisations urbaines — Yaoundé";
const description = "Découvrez le PCADY, le PDVIR, Yaoundé Cœur de Ville et le partenariat de salubrité du marché Mvog-Mbi : objectifs, financements et aménagements prévus.";

export const Route = createFileRoute("/projets/")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | "Tous">("Tous");
  const categories: (ProjectCategory | "Tous")[] = ["Tous", "Assainissement", "Voirie", "Mobilité", "Salubrité"];
  const filtered = urbanProjects.filter((project) => category === "Tous" || category === project.category);
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="relative isolate overflow-hidden bg-brand text-brand-foreground">
        <img src={projectImages.Voirie.src} alt="Illustration de la mobilité urbaine à Yaoundé" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand/80" />
        <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-8 sm:px-8 sm:pb-14">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"><ArrowLeft className="h-4 w-4" />Retour à l’accueil</Link>
          <p className="mt-10 flex items-center gap-3 font-display text-xs font-bold uppercase"><Building2 className="h-5 w-5" />Communauté Urbaine de Yaoundé</p>
          <h1 className="mt-5 max-w-[23ch] text-4xl leading-tight sm:text-5xl">Grands projets et réalisations urbaines</h1>
          <p className="mt-6 max-w-[56ch] text-xl leading-relaxed">Assainissement, voirie, mobilité et salubrité : quatre programmes pour améliorer le cadre de vie à Yaoundé.</p>
          <div className="mt-9 flex items-center gap-4 border-t border-brand-foreground/30 pt-5">
            <span className="font-display text-3xl font-bold">04</span><span className="text-sm">projets à découvrir</span>
            <a href="#projets" className="ml-auto inline-flex items-center gap-2 text-sm font-bold hover:underline">Les projets <ArrowDown className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
      <section id="projets" className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pb-20 pt-10 sm:px-8">
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-6 sm:flex-row sm:items-center">
          <h2 className="text-2xl">Les projets de la ville</h2>
          <p aria-live="polite" className="text-sm text-muted-foreground">{filtered.length} {filtered.length > 1 ? "projets" : "projet"}</p>
        </div>
        <div aria-label="Filtrer les projets par thème" className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => <Button key={item} variant={category === item ? "default" : "ghost"} aria-pressed={category === item} onClick={() => setCategory(item)} className="rounded-none">{item}</Button>)}
        </div>
        <div className="mt-9 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {filtered.map((project) => <ProjectCard key={project.slug} project={project} index={urbanProjects.indexOf(project)} />)}
        </div>
        <div className="mt-12 border-l-4 border-accent-blue pl-5">
          <h2 className="text-lg">À propos des informations présentées</h2>
          <p className="mt-3 max-w-[85ch] leading-relaxed text-muted-foreground">Ces fiches reprennent les documents de présentation et le contrat fournis. Les opérations décrites sont des actions prévues ; leur avancement actuel et leur livraison ne sont pas confirmés. Les visuels sont des illustrations thématiques, et non des photographies des chantiers.</p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}