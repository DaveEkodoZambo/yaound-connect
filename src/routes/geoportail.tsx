import { createFileRoute, Link, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense, useMemo, useState } from "react";
import { ArrowLeft, MapPinned, Search, X, Clock, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { pois, poiCategories, POI_COLORS, type Poi, type PoiCategory } from "@/data/geoportail";

const GeoMap = lazy(() => import("@/components/site/GeoMap"));
const title = "Géoportail de la Ville de Yaoundé — Carte interactive";
const description = "Carte interactive des centres d'intérêt de Yaoundé : monuments, hôpitaux, restaurants, supermarchés, marchés, hôtels et loisirs.";

export const Route = createFileRoute("/geoportail")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GeoPage,
});

function GeoPage() {
  const [active, setActive] = useState<Set<PoiCategory>>(new Set(poiCategories));
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Poi | null>(null);
  const items = useMemo(() => pois.filter((p) => active.has(p.category) &&
    (q === "" || `${p.name} ${p.quartier} ${p.category}`.toLowerCase().includes(q.toLowerCase()))), [active, q]);
  const toggle = (c: PoiCategory) => setActive((s) => { const n = new Set(s); n.has(c) ? n.delete(c) : n.add(c); return n; });
  const fallback = <div className="grid h-full place-items-center bg-muted text-muted-foreground">Chargement de la carte…</div>;

  return <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"><ArrowLeft className="h-4 w-4" />Retour à l’accueil</Link>
          <p className="mt-6 flex items-center gap-3 font-display text-xs font-bold uppercase"><MapPinned className="h-5 w-5" />Géoportail</p>
          <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Explorez Yaoundé sur la carte</h1>
          <p className="mt-4 max-w-[60ch] text-lg">{pois.length} centres d’intérêt répartis en {poiCategories.length} catégories. Cliquez sur un point pour tout savoir.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {poiCategories.map((c) => { const on = active.has(c); const n = pois.filter((p) => p.category === c).length;
            return <button key={c} onClick={() => toggle(c)} aria-pressed={on}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition ${on ? "border-foreground bg-card" : "border-border text-muted-foreground opacity-60"}`}>
              <span className="h-3 w-3 rounded-full" style={{ background: POI_COLORS[c] }} />{c}<span className="text-xs text-muted-foreground">{n}</span></button>; })}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="flex max-h-[640px] flex-col border border-border bg-card">
            <label className="flex items-center gap-2 border-b border-border px-3 py-3"><Search className="h-4 w-4" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher un lieu, un quartier…" className="w-full bg-transparent outline-none" /></label>
            <p className="px-3 py-2 text-xs font-bold uppercase text-muted-foreground">{items.length} résultat(s)</p>
            <ul className="flex-1 overflow-y-auto">
              {items.map((p) => <li key={p.id}><button onClick={() => setSelected(p)}
                className={`flex w-full gap-3 border-t border-border px-3 py-3 text-left transition hover:bg-muted ${selected?.id === p.id ? "bg-muted" : ""}`}>
                <img src={p.image} alt="" className="h-14 w-14 shrink-0 object-cover" loading="lazy" />
                <span><span className="block font-semibold leading-tight">{p.name}</span>
                  <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full" style={{ background: POI_COLORS[p.category] }} />{p.category} · {p.quartier}</span></span>
              </button></li>)}
            </ul>
          </aside>

          <div className="relative h-[640px] overflow-hidden border border-border">
            <ClientOnly fallback={fallback}><Suspense fallback={fallback}><GeoMap items={items} selected={selected} onSelect={setSelected} /></Suspense></ClientOnly>
            {selected && <article className="absolute bottom-4 left-4 right-4 z-[1000] max-w-md overflow-hidden bg-card shadow-2xl sm:right-auto">
              <div className="relative"><img src={selected.image} alt={selected.name} className="h-44 w-full object-cover" />
                <button onClick={() => setSelected(null)} aria-label="Fermer" className="absolute right-2 top-2 rounded-full bg-card p-1.5"><X className="h-4 w-4" /></button>
                <span className="absolute bottom-2 left-2 px-2 py-1 text-xs font-bold text-white" style={{ background: POI_COLORS[selected.category] }}>{selected.category}</span></div>
              <div className="p-4">
                <h2 className="text-xl font-bold leading-tight">{selected.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{selected.quartier} — {selected.arrondissement}</p>
                <p className="mt-3 text-sm leading-relaxed">{selected.description}</p>
                {selected.hours && <p className="mt-3 flex items-center gap-1 text-sm font-semibold"><Clock className="h-4 w-4" />{selected.hours}</p>}
                <div className="mt-3 flex flex-wrap gap-1">{selected.tags.map((t) => <span key={t} className="bg-muted px-2 py-0.5 text-xs">{t}</span>)}</div>
                <a href={`https://www.openstreetmap.org/directions?to=${selected.lat},${selected.lng}`} target="_blank" rel="noreferrer" className="link-more mt-4 inline-block text-sm font-bold">Itinéraire →</a>
              </div>
            </article>}
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Positions et horaires indicatifs. Certaines photos sont illustratives.</p>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
