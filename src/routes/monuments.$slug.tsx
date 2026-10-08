import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MonumentCard } from "@/components/site/MonumentCard";
import motifTraditionnel from "@/assets/motif-traditionnel-centre.png";
import { monuments } from "@/data/monuments";



export const Route = createFileRoute("/monuments/$slug")({
  loader: ({ params }) => {
    const monument = monuments.find((entry) => entry.slug === params.slug);
    if (!monument) throw notFound();
    return { monument };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.monument.name} — Monuments de Yaoundé` : "Monument introuvable — Yaoundé";
    const description = loaderData?.monument.summary ?? "Ce monument n’est pas disponible dans la galerie de Yaoundé.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
    ] };
  },
  component: MonumentDetailPage,
  notFoundComponent: MonumentNotFound,
});

function MonumentDetailPage() {
  const { monument } = Route.useLoaderData();
  const index = monuments.findIndex((entry) => entry.slug === monument.slug);
  const next = monuments[(index + 1) % monuments.length];
  const related = monuments.filter((entry) => entry.slug !== monument.slug).slice(0, 2);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-[1120px] px-5 pb-9 pt-8 sm:px-8">
          <Link to="/monuments" className="inline-flex items-center gap-2 text-sm font-bold text-accent-red hover:underline"><ArrowLeft className="h-4 w-4" />Tous les monuments</Link>
          <p className="mt-9 font-display text-xs font-bold uppercase text-accent-blue">Patrimoine de Yaoundé · {monument.category}</p>
          <h1 className="mt-4 max-w-[24ch] text-4xl leading-tight sm:text-5xl">{monument.name}</h1>
          <p className="mt-6 max-w-[65ch] text-xl leading-relaxed text-foreground/80">{monument.summary}</p>
        </div>
        <figure className="relative overflow-hidden bg-surface" style={{ backgroundImage: `url(${motifTraditionnel})`, backgroundSize: "320px" }}>
          <div aria-hidden="true" className="absolute inset-0 bg-background/50" />
          <img src={monument.image} alt={monument.alt} className="relative z-10 mx-auto h-[400px] w-full max-w-[1120px] object-contain sm:h-[560px]" />
          <figcaption className="relative z-10 mx-auto max-w-[1120px] bg-background/85 px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-8">{monument.caption}</figcaption>
        </figure>
        <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside>
            <div className="sticky top-28 border-t-4 border-accent-red pt-5">
              <h2 className="text-lg">Dans ce monument</h2>
              <ol className="mt-5 space-y-4 text-sm leading-relaxed">
                {monument.sections.map((section, sectionIndex) => <li key={section.title}><a href={`#section-${sectionIndex + 1}`} className="hover:text-accent-red hover:underline">{section.title}</a></li>)}
              </ol>
              <h2 className="mt-9 border-t border-border pt-5 text-lg">À retenir</h2>
              <ul className="mt-4 space-y-3 text-sm text-foreground/75">{monument.highlights.map((highlight) => <li key={highlight} className="border-l-2 border-accent-blue pl-3">{highlight}</li>)}</ul>
            </div>
          </aside>
          <article className="min-w-0">
            <div className="space-y-10">
              {monument.sections.map((section, sectionIndex) => (
                <section id={`section-${sectionIndex + 1}`} key={section.title} className="scroll-mt-28">
                  <h2 className="text-2xl leading-tight sm:text-3xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/85">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
              ))}
            </div>
            <p className="mt-12 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">Source : rapport « Description détaillée des monuments CUY — version corrigée ». Les lectures symboliques présentées sont celles du document fourni.</p>
            {next && <Link to="/monuments/$slug" params={{ slug: next.slug }} className="mt-8 flex items-center justify-between gap-4 border-y border-border py-5 font-display font-bold text-accent-red"><span><span className="mb-2 block text-xs font-normal uppercase text-muted-foreground">Monument suivant</span>{next.name}</span><ArrowRight className="h-6 w-6 shrink-0" /></Link>}
          </article>
        </div>
        <section className="mx-auto max-w-[1120px] px-5 pb-16 pt-6 sm:px-8">
          <h2 className="text-3xl">Poursuivre la découverte</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">{related.map((entry) => <MonumentCard key={entry.slug} monument={entry} index={monuments.findIndex((item) => item.slug === entry.slug)} />)}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function MonumentNotFound() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main className="mx-auto max-w-[1120px] px-6 py-20"><h1 className="text-4xl">Monument introuvable</h1><Link to="/monuments" className="mt-6 inline-flex items-center gap-2 font-bold text-accent-red"><ArrowLeft className="h-4 w-4" />Retour aux monuments</Link></main><SiteFooter /></div>;
}