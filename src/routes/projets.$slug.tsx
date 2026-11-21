import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, CalendarDays, Wallet, Check, Info } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProjectCard } from "@/components/site/ProjectCard";
import { findUrbanProject, urbanProjects } from "@/data/urban-projects";
import { projectImages } from "@/data/project-images";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = findUrbanProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.project.name} — Projets de Yaoundé` : "Projet indisponible — Yaoundé";
    const description = loaderData?.project.summary ?? "Consultez les grands projets de la Communauté Urbaine de Yaoundé.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
    ] };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const image = projectImages[project.category];
  const next = urbanProjects[(urbanProjects.indexOf(project) + 1) % urbanProjects.length];
  const related = urbanProjects.filter((entry) => entry.slug !== project.slug).slice(0, 2);
  const formatNumber = (value: number) => new Intl.NumberFormat("fr-FR").format(value);
  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-8 sm:px-8">
        <Link to="/projets" className="inline-flex items-center gap-2 text-sm font-bold text-accent-red hover:underline"><ArrowLeft className="h-4 w-4" />Tous les projets</Link>
        <p className="mt-9 font-display text-xs font-bold uppercase text-accent-blue">Projets de Yaoundé · {project.category}</p>
        <h1 className="mt-4 max-w-[27ch] text-4xl leading-tight sm:text-5xl">{project.name}</h1>
        {project.name !== project.fullName && <p className="mt-4 max-w-[70ch] font-display text-base font-semibold leading-relaxed text-accent-blue">{project.fullName}</p>}
        <p className="mt-5 max-w-[65ch] text-xl leading-relaxed text-foreground/80">{project.summary}</p>
      </div>
      <figure className="bg-surface">
        <img src={image.src} alt={image.alt} className="h-[240px] w-full object-cover sm:h-[340px]" />
        <figcaption className="mx-auto max-w-[1200px] px-5 py-3 text-sm text-muted-foreground sm:px-8">Visuel d’illustration thématique — ne représente pas un chantier du projet.</figcaption>
      </figure>
      <div className="bg-brand text-brand-foreground">
        <dl className="mx-auto grid max-w-[1200px] gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8 sm:py-9">
          {project.facts.map((fact) => <div key={fact.label} className="border-l-2 border-brand-foreground/30 pl-5"><dd className="font-display text-3xl font-bold">{fact.value}</dd><dt className="mt-2 text-sm text-brand-foreground/80">{fact.label}</dt></div>)}
        </dl>
      </div>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="min-w-0">
          <div className="sticky top-28 border-t-4 border-accent-red pt-5">
            <h2 className="text-lg">Le projet en bref</h2>
            <dl className="mt-5 space-y-6 text-sm leading-relaxed">
              <div><dt className="flex items-center gap-2 font-bold"><MapPin className="h-4 w-4 text-accent-blue" />Territoire</dt><dd className="mt-2 text-foreground/80">{project.location}</dd></div>
              <div><dt className="flex items-center gap-2 font-bold"><Wallet className="h-4 w-4 text-accent-blue" />Financement</dt><dd className="mt-2 text-foreground/80">{project.funding}<strong className="mt-2 block text-accent-blue">{project.budgetLabel}</strong></dd></div>
              <div><dt className="flex items-center gap-2 font-bold"><CalendarDays className="h-4 w-4 text-accent-blue" />Calendrier du document</dt><dd className="mt-2 text-foreground/80">{project.duration}</dd></div>
            </dl>
            <h2 className="mt-8 border-t border-border pt-5 text-lg">Dans cette fiche</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed">
              {project.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`} className="hover:text-accent-red hover:underline">{section.title}</a></li>)}
              {project.roads && <li><a href="#troncons" className="hover:text-accent-red hover:underline">Les 11 tronçons routiers</a></li>}
              <li><a href="#sources" className="hover:text-accent-red hover:underline">Repères et sources</a></li>
            </ol>
          </div>
        </aside>
        <article className="min-w-0">
          <div className="space-y-12">
            {project.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
              <p className="mb-3 font-display text-xs font-bold text-accent-red">0{index + 1}</p>
              <h2 className="text-2xl leading-tight sm:text-3xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/85">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {section.items.length > 0 && <ul className="mt-6 space-y-4">{section.items.map((item) => <li key={item} className="flex items-start gap-3 border-b border-border pb-4 text-lg leading-relaxed text-foreground/85"><Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accent-red" /><span>{item}</span></li>)}</ul>}
            </section>)}
          </div>
          {project.roads && <section id="troncons" className="mt-12 scroll-mt-28">
            <h2 className="text-2xl sm:text-3xl">Les 11 tronçons routiers</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Distances en mètres linéaires, telles qu’indiquées dans le tableau récapitulatif du PDVIR.</p>
            {project.roads.map((group) => <div key={group.district} className="mt-7">
              <h3 className="mb-4 text-xl text-accent-blue">{group.district}</h3>
              <table className="w-full border-collapse text-left text-sm leading-relaxed">
                <thead className="bg-brand text-brand-foreground"><tr><th scope="col" className="px-4 py-3">Tronçon routier</th><th scope="col" className="w-24 px-3 py-3 text-right">Distance</th></tr></thead>
                <tbody>{group.rows.map((row, index) => <tr key={row.name} className={index % 2 === 0 ? "bg-surface" : "bg-background"}><th scope="row" className="border-b border-border px-4 py-4 font-normal">{row.name}</th><td className="whitespace-nowrap border-b border-border px-3 py-4 text-right tabular-nums">{formatNumber(row.meters)} m</td></tr>)}</tbody>
                <tfoot><tr className="border-b-2 border-accent-blue font-bold text-accent-blue"><th scope="row" className="px-4 py-4">Total</th><td className="whitespace-nowrap px-3 py-4 text-right">{formatNumber(group.rows.reduce((sum, row) => sum + row.meters, 0))} m</td></tr></tfoot>
              </table>
            </div>)}
          </section>}
          {project.financing && <section className="mt-12 border-t border-border pt-7">
            <h2 className="text-2xl">Répartition du financement</h2>
            <dl className="mt-5 divide-y divide-border">{project.financing.map((source) => <div key={source.name} className="flex flex-col justify-between gap-3 py-5 sm:flex-row"><dt className="max-w-[40ch] leading-relaxed">{source.name}</dt><dd className="shrink-0 font-display font-bold text-accent-blue">{formatNumber(source.amount / 1000000000)} milliards FCFA</dd></div>)}</dl>
          </section>}
          <section id="sources" className="mt-12 scroll-mt-28 border-t border-border pt-7">
            <h2 className="text-2xl">Repères et sources</h2>
            {project.milestones && <ol className="mt-6 space-y-5 border-l-2 border-accent-blue pl-5">{project.milestones.map((milestone) => <li key={milestone.date}><p className="font-display text-sm font-bold text-accent-blue">{milestone.date}</p><p className="mt-1">{milestone.label}</p></li>)}</ol>}
            <div className="mt-7 flex items-start gap-3 border-l-4 border-accent-blue bg-surface p-5"><Info className="mt-1 h-5 w-5 shrink-0 text-accent-blue" /><p className="text-sm leading-relaxed text-foreground/80">{project.documentNote}</p></div>
            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">{project.sources.map((source) => <li key={source}>Source : {source}.</li>)}</ul>
          </section>
          {next && <Link to="/projets/$slug" params={{ slug: next.slug }} className="mt-9 flex items-center justify-between gap-4 border-y border-border py-6 font-display font-bold text-accent-red"><span><span className="mb-2 block text-xs font-normal uppercase text-muted-foreground">Projet suivant</span>{next.name}</span><ArrowRight className="h-6 w-6 shrink-0" /></Link>}
        </article>
      </div>
      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <h2 className="text-3xl">Les autres projets de Yaoundé</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">{related.map((entry) => <ProjectCard key={entry.slug} project={entry} index={urbanProjects.indexOf(entry)} />)}</div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}

function ProjectNotFound() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto max-w-[1200px] px-5 py-20"><h1 className="text-4xl">Projet introuvable</h1><Link to="/projets" className="mt-6 inline-flex items-center gap-2 font-bold text-accent-red"><ArrowLeft className="h-4 w-4" />Retour aux projets</Link></main><SiteFooter /></div>;
}