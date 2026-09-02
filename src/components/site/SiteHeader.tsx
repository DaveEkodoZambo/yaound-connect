import { Link } from "@tanstack/react-router";
import { Search, Accessibility, Menu } from "lucide-react";

const NAV = [
  { label: "Services", to: "/" },
  { label: "Vie citoyenne", to: "/" },
  { label: "Que faire à Yaoundé ?", to: "/" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 lg:flex lg:justify-between lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
            <span className="font-display text-lg font-black">Y</span>
          </span>
          <span className="truncate font-display text-2xl font-black tracking-tight text-brand lg:text-[1.75rem]">
            YAOUNDÉ
          </span>
        </Link>

        <nav className="hidden items-center lg:flex">
          {NAV.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-7 font-display text-[1.0625rem] font-semibold text-brand hover:text-accent-red ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden items-center gap-2 font-display text-[1.0625rem] font-semibold text-brand hover:text-accent-red lg:flex">
            <Search className="h-5 w-5" strokeWidth={2.5} />
            Rechercher
          </button>
          <button className="hidden items-center gap-2 border-l border-border pl-6 font-display text-[1.0625rem] font-semibold text-brand hover:text-accent-red lg:flex">
            <Accessibility className="h-5 w-5" strokeWidth={2.5} />
            Affichage
          </button>
          <button className="text-brand lg:hidden" aria-label="Menu">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  );
}
