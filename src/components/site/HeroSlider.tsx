import { useCallback, useEffect, useRef, useState } from "react";

import independance from "@/assets/independance.jpg.asset.json";
import lovemycountry from "@/assets/lovemycountry.jpg.asset.json";
import reunification from "@/assets/reunification.jpg.asset.json";
import unite from "@/assets/unite.jpg.asset.json";

const SLIDES = [
  {
    src: independance.url,
    alt: "Monument de l’Indépendance de Yaoundé, obélisque de 1960 et lion de bronze",
    caption: "Monument de l’Indépendance",
  },
  {
    src: lovemycountry.url,
    alt: "Monument « I Love My Country Cameroon » dans le centre de Yaoundé",
    caption: "J’aime mon pays le Cameroun",
  },
  {
    src: reunification.url,
    alt: "Monument de la Réunification de Yaoundé avec ses spirales et sa statue",
    caption: "Monument de la Réunification",
  },
  {
    src: unite.url,
    alt: "Monument de l’Unité de Yaoundé, colonnade circulaire ornée de lions",
    caption: "Monument de l’Unité",
  },
];

const DURATION = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + SLIDES.length) % SLIDES.length);
  }, []);

  const restart = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, DURATION);
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [restart]);

  const select = (i: number) => {
    goTo(i);
    restart();
  };

  return (
    <div
      className="relative aspect-[1280/860] w-full overflow-hidden bg-surface"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Monuments emblématiques de Yaoundé"
      onMouseEnter={() => {
        if (timer.current) window.clearInterval(timer.current);
      }}
      onMouseLeave={restart}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            width={1280}
            height={860}
            loading={i === 0 ? "eager" : "lazy"}
            alt={slide.alt}
            className="h-full w-full shrink-0 object-cover"
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <p className="pointer-events-none absolute bottom-4 left-0 right-0 text-center font-display text-sm font-bold uppercase tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        {SLIDES[index].caption}
      </p>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => select(i)}
            aria-label={`Afficher ${slide.caption}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full border border-white transition-colors ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
