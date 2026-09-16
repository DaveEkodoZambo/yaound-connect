import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  UsersRound,
  Newspaper,
  Building2,
  MapPinned,
  ClipboardCheck,
  Store,
  Trash2,
  Radio,
  MessageSquareText,
  ExternalLink,
  Paperclip,
  Clock,
  Download,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AirQuality } from "@/components/site/AirQuality";
import heroPatrimoine from "@/assets/yaounde-patrimoine.jpg";
import cardMobilite from "@/assets/yaounde-mobilite.jpg";
import cardMarche from "@/assets/yaounde-marche.jpg";
import featureParc from "@/assets/yaounde-espace-vert.jpg";
import cardStade from "@/assets/yaounde-stade.jpg";
import cardEau from "@/assets/yaounde-eau.jpg";
import { HeroSlider } from "@/components/site/HeroSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Communauté Urbaine de Yaoundé — Site officiel" },
      {
        name: "description",
        content:
          "Actualités, démarches et services de la Communauté Urbaine de Yaoundé : état civil, transports, propreté, vie citoyenne et agenda de la ville.",
      },
      { property: "og:title", content: "Communauté Urbaine de Yaoundé — Site officiel" },
      {
        property: "og:description",
        content:
          "Actualités, démarches et services de la Communauté Urbaine de Yaoundé : état civil, transports, propreté, vie citoyenne et agenda de la ville.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home_,
});

const QUICK_LINKS = [
  { icon: Landmark, label: "Ma Mairie : institution et gouvernance" },
  { icon: UsersRound, label: "Maire, élus et Conseil de Communauté" },
  { icon: Newspaper, label: "Actualités et communiqués officiels" },
  { icon: Building2, label: "Grands projets et réalisations urbaines" },
  { icon: MapPinned, label: "Géoportail de la ville de Yaoundé" },
  { icon: ClipboardCheck, label: "Urbanisme et suivi des permis de construire" },
  { icon: Store, label: "Espaces commerciaux, kiosques et salles" },
  { icon: Trash2, label: "Hygiène, salubrité et fourrière municipale" },
  { icon: Radio, label: "Radio NKUL ONGOLA et agenda de la ville" },
  { icon: MessageSquareText, label: "Requêtes, signalements et assistance aux usagers" },
];

const FIL_INFO = [
  {
    time: "11:15",
    lead: "Circulation au centre-ville.",
    text: "Des travaux d’entretien sont programmés sur le boulevard du 20-Mai. Les usagers sont invités à suivre les itinéraires indiqués sur place.",
    pinned: true,
  },
  {
    time: "12:56",
    lead: "Mémoire de Yaoundé.",
    text: "Découvrez l’histoire populaire de Laboratoire Méka, Titi Garage, Madagascar, Camp Sonel et dix-sept autres lieux emblématiques.",
  },
  {
    time: "12:00",
    lead: "Marchés de proximité.",
    text: "Les opérations de salubrité se poursuivent dans les marchés de quartier pour améliorer l’accueil des commerçants et des usagers.",
  },
  {
    time: "11:13",
    lead: "Sport dans les quartiers.",
    text: "Les terrains de proximité accueillent de nouvelles activités pour les jeunes, les familles et les associations sportives de la capitale.",
  },
  {
    time: "09:29",
    lead: "Borne Fontaine, une histoire d’eau.",
    text: "À Emana, le nom du carrefour rappelle les six fontaines publiques qui alimentaient autrefois quotidiennement les habitants.",
  },
  {
    time: "09:15",
    lead: "Yaoundé ville propre.",
    text: "Les équipes municipales renforcent le nettoyage des axes, des caniveaux et des espaces publics dans les sept arrondissements.",
  },
  {
    time: "01/09",
    lead: "Appel aux archives familiales.",
    text: "Photographies, plans et récits d’anciens habitants peuvent aider à documenter l’origine des noms populaires de la ville.",
  },
  {
    time: "01/09",
    lead: "Connaissez-vous Anne Rouge ?",
    text: "La recherche continue pour retrouver l’origine exacte du nom de la célèbre montée yaoundéenne.",
  },
];

function Home_() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[300px_minmax(0,1fr)_400px]">
        {/* Accès rapides */}
        <aside className="lg:order-1">
          <h2 className="text-center text-2xl">Accès rapides</h2>
          <ul className="mt-6 space-y-2">
            {QUICK_LINKS.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  className="flex items-start gap-3 bg-surface px-4 py-4 text-[0.95rem] leading-snug text-brand transition-colors hover:bg-border/60"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="min-w-0">
                    {label} <ExternalLink className="mb-0.5 inline h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <AirQuality />
          </div>
        </aside>

        {/* Flux principal */}
        <div className="lg:order-2">
          {/* À la une */}
          <article>
            <HeroSlider />
            <div className="relative z-10 -mt-8 bg-background pt-6 sm:-mt-24 sm:ml-10 sm:pl-8 sm:pr-10 sm:pt-10">
              <div className="flex flex-wrap items-center gap-5">
                <span className="eyebrow text-accent-red">À la une</span>
                <span className="eyebrow text-accent-blue">Histoire de la ville</span>
              </div>
              <Link to="/histoire/21-lieux-emblematiques-yaounde" className="group block">
                <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.05] group-hover:text-accent-red sm:text-5xl lg:text-[3.5rem]">
                  21 lieux emblématiques qui racontent l’histoire de Yaoundé
                </h1>
              </Link>
              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-foreground/85">
                Les noms de quartiers, rues et carrefours témoignent de personnages, d’activités,
                d’événements et des grandes transformations de la capitale camerounaise…
              </p>
              <Link to="/histoire/21-lieux-emblematiques-yaounde" className="mt-5 inline-block link-more">
                Lire le dossier
              </Link>
            </div>
          </article>

          {/* Deux cartes */}
          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <CardArticle
              image={cardMobilite}
              alt="Taxis et autobus circulant sur une grande avenue de Yaoundé"
              kicker="Service"
              title="Mobilité urbaine : mieux circuler sur les grands axes de la capitale"
              className="sm:pr-10"
            />
            <CardArticle
              image={cardMarche}
              alt="Commerçantes et clientes dans un marché de Yaoundé"
              kicker="Actualité"
              title="Marchés de quartier : proximité, produits locaux et salubrité"
              className="sm:pl-10"
            />
          </div>

          {/* Dossier */}
          <article className="mt-20">
            <span className="eyebrow text-accent-blue">Dossier</span>
            <h2 className="mt-3 max-w-[22ch] text-4xl leading-[1.08] sm:text-5xl">
              Les noms populaires qui dessinent la géographie de Yaoundé
            </h2>
          </article>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <CardArticle
              image={cardStade}
              alt="Jeunes jouant au football sur un terrain de quartier à Yaoundé"
              kicker="Histoire"
              title="Stade Malien : un héritage de la CAN 1972 au cœur de Nkoldongo"
            />
            <CardArticle
              image={cardEau}
              alt="Habitants utilisant une borne-fontaine dans un quartier de Yaoundé"
              kicker="Mémoire urbaine"
              title="Borne Fontaine : quand six points d’eau donnaient leur nom à Emana"
              className="sm:pl-10"
            />
          </div>

          {/* Grande actualité */}
          <article className="mt-20">
            <img
              src={featureParc}
              width={1280}
              height={760}
              loading="lazy"
              alt="Vue d’un espace vert aménagé dans les collines de Yaoundé"
              className="w-full object-cover"
            />
            <div className="relative z-10 -mt-8 bg-background pt-6 sm:-mt-24 sm:ml-10 sm:pl-8 sm:pr-10 sm:pt-10">
              <span className="eyebrow text-accent-blue">Actualité</span>
              <h2 className="mt-3 max-w-[18ch] text-4xl leading-[1.06] sm:text-5xl">
                Espaces verts : préserver la nature au cœur de la ville aux sept collines
              </h2>
            </div>
          </article>

          {/* Newsletter */}
          <section className="mt-20 border-2 border-accent-blue px-6 py-10 text-center sm:px-12">
            <h2 className="text-3xl text-accent-blue sm:text-4xl">La newsletter de Yaoundé</h2>
            <p className="mx-auto mt-5 max-w-[40ch] font-display text-lg font-bold text-accent-blue sm:text-xl">
              Chaque vendredi, recevez directement par email toute l'actualité yaoundéenne.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-xl flex-col sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Votre adresse e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Votre adresse e-mail"
                className="min-w-0 flex-1 bg-surface px-5 py-4 text-[1.05rem] text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-accent-blue"
              />
              <button
                type="submit"
                className="bg-accent-red px-8 py-4 font-display font-bold text-brand-foreground transition-opacity hover:opacity-90"
              >
                S'inscrire
              </button>
            </form>
          </section>

          {/* Magazine */}
          <section className="mt-20 bg-brand px-6 py-14">
            <div className="mx-auto grid max-w-3xl items-center gap-10 sm:grid-cols-2">
              <div className="bg-surface p-6">
                <div className="aspect-[3/4] bg-background p-5">
                  <p className="font-display text-3xl font-black text-accent-red">À YAOUNDÉ</p>
                  <p className="mt-2 text-xs text-foreground/70">
                    Le magazine des habitantes et des habitants
                  </p>
                  <div className="mt-6 h-1/2 bg-surface" />
                  <p className="mt-6 font-display text-xl font-black text-brand">
                    À vos marques, prêts, rentrée
                  </p>
                </div>
              </div>
              <div className="text-center text-brand-foreground">
                <h2 className="text-3xl">Magazine À Yaoundé</h2>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-3 font-display font-bold text-brand-foreground hover:underline"
                >
                  <Download className="h-5 w-5" />
                  Dernier numéro
                </a>
                <p className="mt-6">
                  <a href="#" className="text-sm text-brand-foreground/85 hover:underline">
                    Voir tous les numéros
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Fil info */}
        <aside className="bg-surface p-6 lg:order-3 lg:col-span-2 xl:col-span-1">
          <h2 className="text-3xl text-accent-red">Fil info</h2>
          <ul className="mt-6 space-y-8">
            {FIL_INFO.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 text-accent-red">
                  {item.pinned ? (
                    <Paperclip className="h-5 w-5" />
                  ) : (
                    <Clock className="h-5 w-5" />
                  )}
                </span>
                <div className="min-w-0 border-l-2 border-accent-red pl-4">
                  <p className="text-[1.05rem] leading-relaxed text-accent-blue">
                    <span className="text-foreground/90">{item.time} </span>
                    <strong className="font-bold text-foreground">{item.lead}</strong> {item.text}
                  </p>
                  <a href="#" className="mt-3 inline-block link-more">
                    En savoir +
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}

function CardArticle({
  image,
  alt,
  kicker,
  title,
  className = "",
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  className?: string;
}) {
  return (
    <article className={className}>
      <img
        src={image}
        width={720}
        height={560}
        loading="lazy"
        alt={alt}
        className="aspect-[9/7] w-full object-cover"
      />
      <p className="mt-5 eyebrow text-accent-blue">{kicker}</p>
      <h3 className="mt-3 text-2xl leading-tight">{title}</h3>
    </article>
  );
}
