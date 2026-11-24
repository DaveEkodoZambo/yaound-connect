import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { POI_COLORS, type Poi } from "@/data/geoportail";

export default function GeoMap({ items, selected, onSelect }: { items: Poi[]; selected: Poi | null; onSelect: (p: Poi) => void }) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layer = useRef<L.LayerGroup | null>(null);
  const cb = useRef(onSelect);
  cb.current = onSelect;

  useEffect(() => {
    if (!el.current || map.current) return;
    map.current = L.map(el.current, { zoomControl: true }).setView([3.866, 11.516], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(map.current);
    layer.current = L.layerGroup().addTo(map.current);
    return () => { map.current?.remove(); map.current = null; };
  }, []);

  useEffect(() => {
    const g = layer.current; if (!g) return;
    g.clearLayers();
    items.forEach((p) => {
      const active = selected?.id === p.id;
      const s = active ? 22 : 16;
      const icon = L.divIcon({ className: "", iconSize: [s, s], iconAnchor: [s / 2, s / 2],
        html: `<span style="display:block;width:${s}px;height:${s}px;border-radius:50%;background:${POI_COLORS[p.category]};border:3px solid #fff;box-shadow:0 0 0 ${active ? 4 : 1}px ${POI_COLORS[p.category]}66,0 2px 6px #0005"></span>` });
      L.marker([p.lat, p.lng], { icon, title: p.name }).on("click", () => cb.current(p)).bindTooltip(p.name).addTo(g);
    });
  }, [items, selected]);

  useEffect(() => { if (selected) map.current?.flyTo([selected.lat, selected.lng], 15, { duration: 0.6 }); }, [selected]);

  return <div ref={el} className="h-full w-full" />;
}
