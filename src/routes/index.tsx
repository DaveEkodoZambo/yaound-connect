import { createFileRoute } from "@tanstack/react-router";
import {
  IdCard,
  Briefcase,
  Car,
  UserRound,
  Users,
  FileText,
  Trash2,
  AlertTriangle,
  Home,
  CalendarDays,
  ExternalLink,
  Paperclip,
  Clock,
  Download,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AirQuality } from "@/components/site/AirQuality";
import heroSport from "@/assets/hero-sport.jpg";
import cardTransport from "@/assets/card-transport.jpg";
import cardCantine from "@/assets/card-cantine.jpg";
import featureParc from "@/assets/feature-parc.jpg";
import cardSeniors from "@/assets/card-seniors.jpg";
import cardClub from "@/assets/card-club.jpg";

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
  { icon: IdCard, label: "Carte nationale d'identité / Passeport" },
  { icon: Briefcase, label: "Yaoundé recrute" },
  { icon: Car, label: "Stationnement résidentiel" },
  { icon: UserRound, label: "Accédez à votre compte « Mon Yaoundé »" },
  { icon: Users, label: "Yaoundé Familles" },
  { icon: FileText, label: "État civil" },
  { icon: Trash2, label: "Service des encombrants" },
  { icon: AlertTriangle, label: "Signaler une anomalie avec DansMaVille" },
  { icon: Home, label: "Logement : prise de RDV en ligne" },
  { icon: CalendarDays, label: "Demande d'organisation d'événements dans l'espace public" },
];

const FIL_INFO = [
  {
    time: "11:15",
    lead: "Visite présidentielle.",
    text: "Des restrictions de circulation sont mises en place dès le 3 septembre au boulevard du 20-Mai pour préparer la cérémonie officielle, avec un dispositif renforcé à la place Ahmadou-Ahidjo.",
    pinned: true,
  },
  {
    time: "12:56",
    lead: "Bonne lecture !",
    text: "Le dernier numéro du magazine À Yaoundé est disponible dans les mairies d'arrondissement et les principaux lieux publics de la ville.",
  },
  {
    time: "12:00",
    lead: "À table !",
    text: "Oubliez les mauvais souvenirs de la cantine : les écoles de la ville proposent désormais des repas plus variés, à base de produits locaux et de saison.",
  },
  {
    time: "11:13",
    lead: "Forums des associations.",
    text: "Envie de vous mettre au sport, de prendre des cours de théâtre ou de vous engager dans une action solidaire ? Du 5 au 19 septembre, rencontrez les associations de votre quartier.",
  },
  {
    time: "09:29",
    lead: "Deux centres de santé transformés.",
    text: "Les centres médico-sociaux de Nkolndongo et de Biyem-Assi accueillent désormais les familles dans des locaux plus spacieux et accessibles.",
  },
  {
    time: "09:15",
    lead: "Coup de Pouce recrute.",
    text: "Vous êtes disponible en soirée à partir de 16h30 ? Pour accompagner des élèves du primaire en français et en mathématiques, devenez animateur d'aide à la scolarité.",
  },
  {
    time: "01/09",
    lead: "Nouveauté aux Cours d'Adultes de Yaoundé.",
    text: "Un cours annuel de 90 h pour adultes en situation de handicap est proposé en 2026-2027 : français, langues et ateliers créatifs adaptés.",
  },
  {
    time: "01/09",
    lead: "La mairie du 3e a 50 ans !",
    text: "C'est depuis 1976 que l'administration de l'arrondissement est installée dans le quartier historique de la Briqueterie.",
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
            <img
              src={heroSport}
              width={1280}
              height={860}
              alt="Jeunes jouant au basket lors d'un forum des associations à Yaoundé"
              className="w-full object-cover"
            />
            <div className="-mt-10 ml-0 bg-background pt-6 sm:-mt-14 sm:ml-10 sm:pl-8 sm:pr-10 sm:pt-8">
              <div className="flex flex-wrap items-center gap-5">
                <span className="eyebrow text-accent-red">À la une</span>
                <span className="eyebrow text-accent-blue">Actualité</span>
              </div>
              <h1 className="mt-4 max-w-[16ch] text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                En septembre, découvrez les associations de votre quartier !
              </h1>
              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-relaxed text-foreground/85">
                Cours de théâtre, foot entre voisins, ateliers solidaires, sorties nature, cours de
                langues ou de cuisine du monde… En septembre, les forums des associations …
              </p>
            </div>
          </article>

          {/* Deux cartes */}
          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <CardArticle
              image={cardTransport}
              alt="Validation d'une carte de transport dans un bus à Yaoundé"
              kicker="Service"
              title="Dès le 3 septembre, demandez le remboursement de vos titres de transport !"
            />
            <CardArticle
              image={cardCantine}
              alt="Élèves déjeunant à la cantine d'une école de Yaoundé"
              kicker="Actualité"
              title="Des cantines scolaires locales et 100 % durables à l'horizon 2027"
              className="sm:pl-10"
            />
          </div>

          {/* Dossier */}
          <article className="mt-20">
            <span className="eyebrow text-accent-blue">Dossier</span>
            <h2 className="mt-3 max-w-[22ch] text-4xl leading-[1.08] sm:text-5xl">
              On préfère manger à la cantine ! Les recettes des écoles yaoundéennes
            </h2>
          </article>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <CardArticle
              image={cardSeniors}
              alt="Séance de gymnastique douce pour seniors dans un parc de Yaoundé"
              kicker="Service"
              title="Yaoundé Sport Seniors 2026-2027 : les inscriptions sont ouvertes !"
            />
            <CardArticle
              image={cardClub}
              alt="Habitante devant un club de quartier à Yaoundé"
              kicker="Série"
              title="C'est comment… les clubs seniors ? Réponses d'usagers !"
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
              alt="Vue aérienne d'un parc réaménagé à Yaoundé"
              className="w-full object-cover"
            />
            <div className="-mt-10 bg-background pt-6 sm:-mt-14 sm:ml-10 sm:pl-8 sm:pr-10 sm:pt-8">
              <span className="eyebrow text-accent-blue">Actualité</span>
              <h2 className="mt-3 max-w-[18ch] text-4xl leading-[1.06] sm:text-5xl">
                Protection de l'enfance : l'avancée des mesures pour renforcer l'encadrement
                périscolaire
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
