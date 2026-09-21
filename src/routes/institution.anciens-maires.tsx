import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check } from "lucide-react";
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
  "Découvrez les maires qui ont dirigé la ville de Yaoundé, de Luc Messi Atangana à André Fouda Omgba, et leurs réalisations.";

const MAYORS = [
  {
    name: "André FOUDA OMGBA",
    years: "1964–1980",
    image: andreFoudaOmgba.url,
    status: "Pionnier de la capitale",
    alt: "Portrait d’André Fouda Omgba, maire de Yaoundé de 1964 à 1980",
    intro:
      "Premier maire de la capitale après l’indépendance, André Fouda Omgba pose les fondations de l’administration municipale yaoundéenne et accompagne la métamorphose d’une ville de garnison en capitale nationale.",
    achievements: [
      "Structuration des premiers grands axes routiers de la ville et ouverture des principales montées qui organisent encore la topographie urbaine",
      "Extension des quartiers centraux et premiers lotissements planifiés pour accueillir l’administration et la fonction publique",
      "Mise en place des services municipaux fondateurs : état civil, hygiène, police des marchés et voirie",
      "Développement des grands marchés et des équipements commerciaux structurants du centre-ville",
      "Accompagnement de Yaoundé dans son rôle de capitale politique, avec l’accueil des grandes manifestations nationales et panafricaines",
    ],
  },
  {
    name: "Nicalo AMOUGOU NOMA",
    years: "2001–2004",
    image: nicaloAmougouNoma.url,
    status: "Le maire de la transition",
    alt: "Portrait de Nicalo Amougou Noma, maire de Yaoundé de 2001 à 2004",
    intro:
      "À la tête de la ville dans une période charnière, Nicalo Amougou Noma prépare la réforme institutionnelle qui aboutit à la création de la Communauté Urbaine de Yaoundé en 2004.",
    achievements: [
      "Préparation de la transformation de la mairie de Yaoundé en Communauté Urbaine, consacrée par la réforme de la décentralisation de 2004",
      "Grandes campagnes de salubrité et d’assainissement dans les marchés et les artères principales",
      "Réfection des voiries dégradées et remise en état des principaux carrefours du centre-ville",
      "Réorganisation des services techniques municipaux et professionnalisation du personnel communal",
      "Renforcement du dialogue avec les populations à travers les consultations de quartier",
    ],
  },
  {
    name: "Gilbert TSIMI EVOUNA",
    years: "2004–2020",
    image: gilbertTsimiEvouna.url,
    status: "Seize ans à la tête de la ville",
    alt: "Portrait de Gilbert Tsimi Evouna, maire de Yaoundé de 2004 à 2020",
    intro:
      "Maire de la Communauté Urbaine pendant seize ans, Gilbert Tsimi Evouna imprime à Yaoundé sa plus longue gestion moderne : voirie, marchés, salubrité et rayonnement international de la capitale.",
    achievements: [
      "Extension et réhabilitation continues du réseau routier urbain, avec la bitumage de nombreuses rues et l’aménagement des carrefours stratégiques",
      "Modernisation des grands marchés (Marché Central, Mokolo, Mvog-Ada) et structuration de la gestion commerciale municipale",
      "Grandes opérations d’embellissement et de lutte contre l’insalubrité : jardinage, éclairage public et propreté des artères",
      "Développement de la coopération décentralisée et des jumelages avec des métropoles africaines, européennes et asiatiques",
      "Préparation de la capitale aux grandes échéances internationales, dont la Coupe d’Afrique des Nations",
      "Renforcement des communes d’arrondissement et déconcentration progressive des services de proximité",
    ],
  },
  {
    name: "Luc MESSI ATANGANA",
    years: "Depuis 2020",
    image: lucMessiAtangana.url,
    status: "Maire en fonction",
    alt: "Portrait de Luc Messi Atangana, maire de Yaoundé depuis 2020",
    intro:
      "Depuis 2020, Luc Messi Atangana conduit une municipalité tournée vers la modernisation des services, la mobilité urbaine et le numérique, dans la continuité des grands projets d’aménagement de la capitale.",
    achievements: [
      "Poursuite des grands programmes d’urbanisme et d’aménagement de la capitale, dont les projets de développement urbain financés avec l’État et les partenaires",
      "Numérisation progressive des services municipaux : géoportail, suivi des actes et dématérialisation des procédures",
      "Amélioration de la mobilité urbaine et réhabilitation des axes structurants et des carrefours encombrés",
      "Développement des espaces verts et actions d’embellissement de la ville aux sept collines",
      "Intensification des campagnes de gestion des déchets et de salubrité avec les communes d’arrondissement",
      "Écoute des populations : permanences, formulaire de requêtes et espace d’expression citoyenne",
    ],
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

function MayorRow({
  mayor,
  index,
}: {
  mayor: (typeof MAYORS)[number];
  index: number;
}) {
  const imageRight = index % 2 === 1;

  return (
    <Reveal>
      <article className="group grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Portrait */}
        <div className={cn("relative", imageRight && "lg:order-2")}>
          <div className="relative z-10 grid aspect-[4/5] place-items-center bg-surface p-6 sm:aspect-[16/10] lg:aspect-[4/5] lg:p-8">
            <img
              src={mayor.image}
              width={720}
              height={900}
              loading={index === 0 ? "eager" : "lazy"}
              alt={mayor.alt}
              className="max-h-full w-auto max-w-full object-contain shadow-md transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-0 left-0 bg-accent-red px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-brand-foreground transition-transform duration-500 group-hover:-translate-y-1">
              {mayor.status}
            </span>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -bottom-8 select-none font-display text-[7rem] font-extrabold leading-none text-accent-blue/10 transition-colors duration-500 group-hover:text-accent-red/15",
              imageRight ? "-left-2 lg:-left-10" : "-right-2 lg:-right-10",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Réalisations */}
        <div
          className={cn(
            "flex flex-col justify-center border-t-4 border-accent-red pt-6 transition-colors duration-300 hover:border-accent-blue lg:border-t-0 lg:border-l-4 lg:pl-10",
            imageRight ? "lg:order-1 lg:border-l-0 lg:border-r-4 lg:pl-0 lg:pr-10" : "",
          )}
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-accent-blue">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {mayor.years}
          </p>
          <h2 className="mt-3 text-2xl leading-tight transition-colors duration-300 group-hover:text-accent-red sm:text-3xl lg:text-4xl">
            {mayor.name}
          </h2>
          <span
            aria-hidden="true"
            className="mt-4 block h-1 w-12 bg-accent-blue transition-all duration-500 group-hover:w-24 group-hover:bg-accent-red"
          />
          <p className="mt-6 max-w-[62ch] leading-relaxed text-foreground/85">
            {mayor.intro}
          </p>

          <h3 className="mt-8 eyebrow text-foreground/60">
            Réalisations marquantes
          </h3>
          <ul className="mt-4 space-y-3">
            {mayor.achievements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent-red text-brand-foreground transition-colors duration-300 group-hover:bg-accent-blue"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="leading-relaxed text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
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
                De Luc Messi Atangana à André Fouda Omgba : les visages et les
                grandes réalisations de ceux qui ont dirigé la capitale.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-24">
          <div className="space-y-20 lg:space-y-28">
            {[...MAYORS].reverse().map((mayor, index) => (
              <MayorRow key={mayor.name} mayor={mayor} index={index} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
