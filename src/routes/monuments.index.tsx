import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MonumentCard } from "@/components/site/MonumentCard";
import { monuments } from "@/data/monuments";

const title = "Monuments emblématiques de Yaoundé — Patrimoine de la CUY";
const description = "Explorez cinq monuments de Yaoundé : Monument Patriote, Réunification, Charles Atangana Ntsama, Unité Nationale et Indépendance de 1960.";

export const Route = createFileRoute("/monuments/")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MonumentsPage,
});

function MonumentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-5 pb-20 pt-8 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-accent-red hover:underline"><ArrowLeft className="h-4 w-4" />Retour à l’accueil</Link>
        <div className="mt-9 border-b border-border pb-9">
          <p className="font-display text-xs font-bold uppercase text-accent-blue">Yaoundé · Patrimoine & mémoire</p>
          <h1 className="mt-4 max-w-[22ch] text-4xl leading-tight sm:text-5xl">Monuments emblématiques</h1>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <p className="max-w-[65ch] text-xl leading-relaxed text-foreground/80">Des lieux qui racontent notre histoire. Découvrez les œuvres, les symboles et les paysages qui donnent à Yaoundé son identité.</p>
            <p className="shrink-0 border-l-2 border-accent-red pl-4 font-display text-sm font-semibold">05 monuments<br /><span className="font-normal text-muted-foreground">Une mémoire commune</span></p>
          </div>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {monuments.map((monument, index) => <MonumentCard key={monument.slug} monument={monument} index={index} />)}
        </div>
        <p className="mt-12 text-sm leading-relaxed text-muted-foreground">Source des descriptions : rapport « Description détaillée des monuments CUY — version corrigée » fourni pour cette rubrique.</p>
      </main>
      <SiteFooter />
    </div>
  );
}