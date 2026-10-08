import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Monument } from "@/data/monuments";

export function MonumentCard({ monument, index }: { monument: Monument; index: number }) {
  return (
    <Link to="/monuments/$slug" params={{ slug: monument.slug }} className="group block min-w-0 border-b border-border pb-8 focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4">
      <div className="relative overflow-hidden bg-surface">
        <img src={monument.image} alt={monument.alt} loading="lazy" className="aspect-[3/2] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
        <span aria-hidden="true" className="absolute bottom-0 left-0 bg-background px-4 py-2 font-display text-sm font-bold text-accent-red">0{index + 1}</span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-display text-xs font-bold uppercase text-accent-blue">{monument.category}</p>
          <h2 className="mt-3 text-2xl leading-tight transition-colors group-hover:text-accent-red">{monument.name}</h2>
        </div>
        <ArrowUpRight aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-accent-red transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1" />
      </div>
      <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-foreground/80">{monument.summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-accent-red">Découvrir le monument <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></span>
    </Link>
  );
}