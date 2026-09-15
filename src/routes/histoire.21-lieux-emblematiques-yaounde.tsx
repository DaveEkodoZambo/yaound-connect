import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { yaoundeLandmarks } from "@/data/yaounde-landmarks";
import patrimoineImage from "@/assets/yaounde-patrimoine.jpg";

const title = "21 lieux emblématiques de Yaoundé — Histoire";
const description =
  "Découvrez l’origine de 21 noms de quartiers, rues, carrefours et lieux-dits qui racontent la mémoire populaire de Yaoundé.";

export const Route = createFileRoute("/histoire/21-lieux-emblematiques-yaounde")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandmarksPage,
});

function LandmarksPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-accent-red hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l’accueil
          </Link>

          <div className="mt-7 grid gap-10 lg:grid-cols-[250px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-t-4 border-accent-red pt-5">
                <p className="eyebrow text-accent-red">Dans ce dossier</p>
                <ol className="mt-5 space-y-2 text-sm leading-snug text-brand">
                  {yaoundeLandmarks.map((landmark, index) => (
                    <li key={landmark.name}>
                      <a href={`#lieu-${index + 1}`} className="hover:text-accent-red hover:underline">
                        {index + 1}. {landmark.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <article className="min-w-0">
              <p className="eyebrow text-accent-blue">Histoire de la ville</p>
              <h1 className="mt-4 max-w-[18ch] text-4xl leading-[1.06] sm:text-5xl lg:text-[3.5rem]">
                21 lieux emblématiques qui racontent l’histoire de Yaoundé
              </h1>
              <p className="mt-6 max-w-[58ch] text-xl leading-relaxed text-foreground/85">
                Les quartiers, rues et carrefours de la capitale constituent une véritable mémoire
                populaire, de la période coloniale aux grandes mutations de l’après-indépendance.
              </p>

              <img
                src={patrimoineImage}
                width={1536}
                height={1024}
                alt="Vue d’une avenue animée de Yaoundé entre bâtiments historiques et collines"
                className="mt-10 aspect-[3/2] w-full object-cover"
              />

              <div className="mt-12 max-w-[760px]">
                <p className="text-lg leading-relaxed">
                  À Yaoundé, les noms de quartiers, rues, carrefours et lieux-dits ne sont pas
                  toujours de simples repères géographiques. Beaucoup témoignent d’un personnage,
                  d’une activité, d’un événement ou d’une transformation urbaine.
                </p>
                <p className="mt-5 text-lg leading-relaxed">
                  Ils constituent ainsi une véritable mémoire populaire de la capitale, de la
                  période coloniale aux grandes mutations de l’après-indépendance.
                </p>

                <div className="mt-14 space-y-14">
                  {yaoundeLandmarks.map((landmark, index) => (
                    <section key={landmark.name} id={`lieu-${index + 1}`} className="scroll-mt-28">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center bg-accent-red font-display text-lg font-extrabold text-brand-foreground">
                          {index + 1}
                        </span>
                        <div>
                          <h2 className="text-2xl leading-tight sm:text-3xl">{landmark.name}</h2>
                          <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-foreground/90">
                            {landmark.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-16 border-l-4 border-accent-blue bg-surface px-6 py-7">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent-blue" />
                    <div>
                      <h2 className="text-xl">Une mémoire à enrichir ensemble</h2>
                      <p className="mt-3 leading-relaxed">
                        Vous possédez un témoignage, une archive ou une photographie sur l’origine
                        d’un nom de lieu à Yaoundé ? Partagez cette mémoire avec le Centre Éducatif
                        Bastos.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-10 border-t border-border pt-6 text-sm text-foreground/70">
                  Source : Club Journal — Centre Éducatif Bastos. {
                  <a
                    href="https://centre-educatif.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-accent-blue hover:underline"
                  >
                    centre-educatif.org <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}