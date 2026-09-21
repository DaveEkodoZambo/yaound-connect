import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Landmark } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import andreFoudaOmgba from "@/assets/andre-fouda-omgba.jpg.asset.json";
import gilbertTsimiEvouna from "@/assets/gilbert-tsimi-evouna.jpg.asset.json";
import lucMessiAtangana from "@/assets/luc-messi-atangana.jpg.asset.json";
import nicaloAmougouNoma from "@/assets/nicalo-amougou-noma.jpg.asset.json";
import { cn } from "@/lib/utils";
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

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function FormerMayorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-brand text-brand-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-red/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-accent-blue/20 blur-3xl"
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand-foreground hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l’accueil
            </Link>
            <Reveal>
              <p className="mt-10 eyebrow text-brand-foreground/75">
                Institution et gouvernance
              </p>
              <h1 className="mt-4 max-w-[14ch] text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
                Les maires de Yaoundé
              </h1>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-brand-foreground/85 sm:text-xl">
                Une galerie des personnalités qui ont exercé la fonction de maire de la
                capitale, présentée à travers leurs périodes de mandat.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
            {MAYORS.map((mayor, index) => (
              <Reveal
                key={mayor.name}
                delay={(index % 2) * 140}
                className={cn(index % 2 === 1 && "sm:mt-16")}
              >
                <article className="group relative border-t-4 border-accent-red pt-6 transition-colors duration-300 hover:border-accent-blue">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-7 right-0 select-none font-display text-[5.5rem] font-extrabold leading-none text-surface transition-colors duration-500 group-hover:text-accent-red/10"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={mayor.image}
                      width={392}
                      height={424}
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={mayor.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-0 left-0 bg-accent-red px-4 py-2 font-display text-xs font-bold uppercase text-brand-foreground transition-transform duration-500 group-hover:-translate-y-1">
                      {mayor.status}
                    </span>
                  </div>

                  <div className="relative z-10 pt-6">
                    <p className="flex items-center gap-2 text-sm font-semibold text-accent-blue">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {mayor.years}
                    </p>
                    <h2 className="mt-3 flex items-center gap-3 text-2xl leading-tight transition-colors duration-300 group-hover:text-accent-red sm:text-3xl">
                      {mayor.name}
                      <Landmark
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-accent-red opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </h2>
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-1 w-12 bg-accent-blue transition-all duration-500 group-hover:w-24 group-hover:bg-accent-red"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
