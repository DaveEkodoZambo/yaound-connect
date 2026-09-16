import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";

import andreFoudaOmgba from "@/assets/andre-fouda-omgba.jpg.asset.json";
import gilbertTsimiEvouna from "@/assets/gilbert-tsimi-evouna.jpg.asset.json";
import lucMessiAtangana from "@/assets/luc-messi-atangana.jpg.asset.json";
import nicaloAmougouNoma from "@/assets/nicalo-amougou-noma.jpg.asset.json";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const title = "Les maires de Yaoundé — Communauté Urbaine";
const description =
  "Découvrez les maires qui ont dirigé la ville de Yaoundé, d’André Fouda Omgba à Luc Messi Atangana.";

const MAYORS = [
  {
    name: "Luc MESSI ATANGANA",
    years: "Depuis 2020",
    image: lucMessiAtangana.url,
    status: "Maire en fonction",
    alt: "Portrait de Luc Messi Atangana, maire de Yaoundé depuis 2020",
  },
  {
    name: "Gilbert TSIMI EVOUNA",
    years: "2004–2020",
    image: gilbertTsimiEvouna.url,
    status: "Ancien maire",
    alt: "Portrait de Gilbert Tsimi Evouna, maire de Yaoundé de 2004 à 2020",
  },
  {
    name: "Nicalo AMOUGOU NOMA",
    years: "2001–2004",
    image: nicaloAmougouNoma.url,
    status: "Ancien maire",
    alt: "Portrait de Nicalo Amougou Noma, maire de Yaoundé de 2001 à 2004",
  },
  {
    name: "André FOUDA OMGBA",
    years: "1964–1980",
    image: andreFoudaOmgba.url,
    status: "Ancien maire",
    alt: "Portrait d’André Fouda Omgba, maire de Yaoundé de 1964 à 1980",
  },
];

export const Route = createFileRoute("/institution/anciens-maires")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormerMayorsPage,
});

function FormerMayorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-brand text-brand-foreground">
          <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-foreground hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l’accueil
            </Link>
            <p className="mt-10 eyebrow text-brand-foreground/75">Institution et gouvernance</p>
            <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Les maires de Yaoundé
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-brand-foreground/85 sm:text-xl">
              Une galerie des personnalités qui ont exercé la fonction de maire de la capitale,
              présentée à travers leurs périodes de mandat.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {MAYORS.map((mayor, index) => (
              <article key={mayor.name} className="group border-t-4 border-accent-red pt-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={mayor.image}
                    width={392}
                    height={424}
                    loading={index === 0 ? "eager" : "lazy"}
                    alt={mayor.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-0 left-0 bg-accent-red px-4 py-2 font-display text-xs font-bold uppercase text-brand-foreground">
                    {mayor.status}
                  </span>
                </div>
                <div className="pt-6">
                  <p className="flex items-center gap-2 text-sm font-semibold text-accent-blue">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {mayor.years}
                  </p>
                  <h2 className="mt-3 text-2xl leading-tight">{mayor.name}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}