import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  MapPin,
  Menu,
  Minus,
  Plus,
  Search,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PanelName = "services" | "citoyenne" | "sorties" | "search" | "display";

const MENUS: Record<
  Exclude<PanelName, "search" | "display">,
  { quick: string[]; columns: string[][] }
> = {
  services: {
    quick: ["Mes démarches", "État civil", "Marchés publics", "Offres d’emploi"],
    columns: [
      ["Accessibilité et handicap", "Aides et démarches", "Commerce et attractivité"],
      ["Culture", "Emploi", "Environnement", "Famille, jeunesse et éducation"],
      ["Logement", "Mobilité et transports", "Propreté et gestion des déchets"],
      ["Santé", "Sécurité", "Solidarités", "Sport", "Urbanisme"],
    ],
  },
  citoyenne: {
    quick: ["Agir", "Signaler un problème", "Suivre une requête"],
    columns: [
      [
        "Participation citoyenne",
        "Le maire et les élus",
        "Les anciens maires de Yaoundé",
        "Le Conseil de Communauté",
        "L’Hôtel de Ville",
        "Coopération et relations internationales",
      ],
    ],
  },
  sorties: {
    quick: ["Écrans", "Concerts", "Sport", "En famille"],
    columns: [
      [
        "Que faire cette semaine ?",
        "Avec les enfants ?",
        "Ce week-end à Yaoundé ?",
        "Recevoir les idées de sorties par e-mail",
      ],
    ],
  },
};

const NAV_ITEMS: { key: PanelName; label: string }[] = [
  { key: "services", label: "Services" },
  { key: "citoyenne", label: "Vie citoyenne" },
  { key: "sorties", label: "Que faire à Yaoundé ?" },
];

function MenuLink({ children }: { children: string }) {
  if (children === "Les anciens maires de Yaoundé") {
    return (
      <Link
        to="/institution/anciens-maires"
        className="block font-display text-lg font-semibold leading-tight text-brand hover:text-accent-red"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href="#"
      className="block font-display text-lg font-semibold leading-tight text-brand hover:text-accent-red"
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [active, setActive] = useState<PanelName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("animations-off", !animations);
    document.documentElement.classList.toggle("text-large", textSize === "large");
  }, [animations, textSize]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const openPanel = (panel: PanelName) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(panel);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background"
      onMouseLeave={scheduleClose}
      onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-4 py-3 lg:px-10 lg:py-0">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3 lg:mr-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
            <span className="font-display text-lg font-black">Y</span>
          </span>
          <span className="truncate font-display text-2xl font-black text-brand lg:text-[1.75rem]">
            YAOUNDÉ
          </span>
        </Link>

        <nav className="hidden self-stretch lg:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item, index) => (
            <Button
              key={item.key}
              variant="ghost"
              onMouseEnter={() => openPanel(item.key)}
              onFocus={() => openPanel(item.key)}
              onClick={() => setActive(active === item.key ? null : item.key)}
              aria-expanded={active === item.key}
              aria-controls="desktop-navigation-panel"
              className={cn(
                "relative h-full rounded-none px-5 font-display text-[1rem] font-semibold text-brand hover:bg-transparent hover:text-accent-red xl:px-7",
                index > 0 && "border-l border-border",
                active === item.key &&
                  "text-accent-red after:absolute after:inset-x-5 after:bottom-0 after:h-1 after:bg-accent-red",
              )}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="ml-auto hidden h-[72px] items-stretch lg:flex">
          <HeaderAction
            panel="search"
            active={active}
            onOpen={openPanel}
            onToggle={() => setActive(active === "search" ? null : "search")}
            icon={Search}
            label="Rechercher"
          />
          <HeaderAction
            panel="display"
            active={active}
            onOpen={openPanel}
            onToggle={() => setActive(active === "display" ? null : "display")}
            icon={Accessibility}
            label="Affichage"
            divided
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-brand lg:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </Button>
      </div>

      {active && (
        <div
          id="desktop-navigation-panel"
          className="absolute left-0 right-0 top-full hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-surface shadow-lg animate-fade-in lg:block"
        >
          {active === "search" ? (
            <SearchPanel onClose={() => setActive(null)} />
          ) : active === "display" ? (
            <DisplayPanel
              animations={animations}
              setAnimations={setAnimations}
              textSize={textSize}
              setTextSize={setTextSize}
              onClose={() => setActive(null)}
            />
          ) : (
            <NavigationPanel menu={MENUS[active]} />
          )}
        </div>
      )}

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-border bg-background px-5 py-6 shadow-lg animate-fade-in lg:hidden">
          {NAV_ITEMS.map((item) => (
            <div key={item.key} className="border-b border-border py-2">
              <Button
                variant="ghost"
                className="h-auto w-full justify-between rounded-none px-0 py-3 font-display text-base font-bold text-brand"
                onClick={() => setActive(active === item.key ? null : item.key)}
              >
                {item.label}
                <ChevronDown className={cn("h-5 w-5 transition-transform", active === item.key && "rotate-180")} />
              </Button>
              {active === item.key && (
                <div className="space-y-3 pb-5 pl-3">
                  {MENUS[item.key].columns.flat().map((link) => (
                    <MenuLink key={link}>{link}</MenuLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-5">
            <Button variant="outline" onClick={() => setActive("search")}>
              <Search /> Rechercher
            </Button>
            <Button variant="outline" onClick={() => setActive("display")}>
              <Accessibility /> Affichage
            </Button>
          </div>
          {active === "search" && <MobileSearch />}
          {active === "display" && (
            <div className="mt-5 border-t border-border pt-5">
              <DisplayControls
                animations={animations}
                setAnimations={setAnimations}
                textSize={textSize}
                setTextSize={setTextSize}
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

function HeaderAction({
  panel,
  active,
  onOpen,
  onToggle,
  icon: Icon,
  label,
  divided = false,
}: {
  panel: PanelName;
  active: PanelName | null;
  onOpen: (panel: PanelName) => void;
  onToggle: () => void;
  icon: typeof Search;
  label: string;
  divided?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      onMouseEnter={() => onOpen(panel)}
      onFocus={() => onOpen(panel)}
      onClick={onToggle}
      aria-expanded={active === panel}
      aria-controls="desktop-navigation-panel"
      className={cn(
        "relative h-full rounded-none px-5 font-display text-[1rem] font-semibold text-brand hover:bg-transparent hover:text-accent-red",
        divided && "border-l border-border",
        active === panel && "after:absolute after:inset-x-5 after:bottom-0 after:h-1 after:bg-brand",
      )}
    >
      {active === panel ? <X className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
      {label}
    </Button>
  );
}

function NavigationPanel({ menu }: { menu: (typeof MENUS)[keyof typeof MENUS] }) {
  return (
    <div className="relative mx-auto grid min-h-[300px] max-w-[1440px] grid-cols-[220px_1fr] gap-16 overflow-hidden px-10 py-10 xl:px-16">
      <span aria-hidden="true" className="absolute -bottom-44 left-44 font-display text-[30rem] font-black leading-none text-border/40">Y</span>
      <div className="relative border-r border-border pr-8">
        <h2 className="font-display text-lg font-bold text-brand">Accès rapides</h2>
        <ul className="mt-6 space-y-4">
          {menu.quick.map((item) => (
            <li key={item}>
              <a href="#" className="flex items-start gap-3 font-semibold leading-tight text-foreground/80 hover:text-accent-red">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{item} <ExternalLink className="inline h-3 w-3" /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn("relative grid content-start gap-x-14 gap-y-5", menu.columns.length > 1 ? "grid-cols-4" : "grid-cols-1")}>
        {menu.columns.map((column, index) => (
          <div key={index} className="space-y-5">
            {column.map((link) => <MenuLink key={link}>{link}</MenuLink>)}
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative mx-auto max-w-[1440px] px-10 py-9 xl:px-16">
      <Button variant="link" className="absolute right-10 top-4 text-foreground" onClick={onClose}>Fermer</Button>
      <form className="mx-auto mt-5 flex max-w-4xl border-2 border-accent-blue bg-background p-2" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="site-search" className="sr-only">Rechercher sur le site</label>
        <Search className="mx-4 h-9 w-9 shrink-0 self-center text-brand" />
        <input id="site-search" type="search" placeholder="Rechercher à Yaoundé" className="min-w-0 flex-1 border-l border-border bg-transparent px-5 py-2 font-display text-3xl font-semibold text-brand outline-none placeholder:text-muted-foreground" autoFocus />
      </form>
      <div className="mt-9 grid grid-cols-2 gap-24">
        <div>
          <h2 className="text-2xl">Dans l’actualité</h2>
          <ul className="mt-5 space-y-3 font-semibold text-foreground/80">
            <li><a href="#" className="hover:text-accent-red">Travaux et circulation au centre-ville</a></li>
            <li><a href="#" className="hover:text-accent-red">Opérations de salubrité dans les marchés</a></li>
            <li><Link to="/histoire/21-lieux-emblematiques-yaounde" className="hover:text-accent-red">21 lieux emblématiques de Yaoundé</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">Suggestions de lieux</h2>
          <ul className="mt-5 space-y-3 font-display font-semibold text-brand">
            {["Hôtel de Ville", "Parcs et jardins", "Marchés municipaux", "Monuments historiques"].map((place) => (
              <li key={place} className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent-red" />{place}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DisplayControls({ animations, setAnimations, textSize, setTextSize }: {
  animations: boolean;
  setAnimations: (value: boolean) => void;
  textSize: "normal" | "large";
  setTextSize: (value: "normal" | "large") => void;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <fieldset>
        <legend className="font-display text-lg font-bold text-brand">Animations</legend>
        <label className="mt-4 flex cursor-pointer items-center gap-3"><input type="radio" name="animations" checked={animations} onChange={() => setAnimations(true)} /> Par défaut</label>
        <label className="mt-3 flex cursor-pointer items-center gap-3"><input type="radio" name="animations" checked={!animations} onChange={() => setAnimations(false)} /> Désactivées</label>
      </fieldset>
      <div>
        <h2 className="font-display text-lg font-bold text-brand">Taille du texte</h2>
        <p className="mt-3 text-foreground/80">Agrandissez le contenu pour améliorer votre confort de lecture.</p>
        <div className="mt-4 flex gap-3">
          <Button variant="outline" size="icon" aria-label="Taille normale" onClick={() => setTextSize("normal")}><Minus /></Button>
          <Button variant="outline" size="icon" aria-label="Agrandir le texte" onClick={() => setTextSize("large")}><Plus /></Button>
        </div>
      </div>
    </div>
  );
}

function DisplayPanel(props: Parameters<typeof DisplayControls>[0] & { onClose: () => void }) {
  const { onClose, ...controls } = props;
  return (
    <div className="relative mx-auto max-w-5xl px-10 py-10">
      <Button variant="link" className="absolute right-10 top-3 text-foreground" onClick={onClose}>Fermer</Button>
      <DisplayControls {...controls} />
    </div>
  );
}

function MobileSearch() {
  return (
    <form className="mt-5 flex border-2 border-accent-blue bg-background p-2" onSubmit={(event) => event.preventDefault()}>
      <Search className="h-5 w-5 self-center" />
      <label htmlFor="mobile-site-search" className="sr-only">Rechercher sur le site</label>
      <input id="mobile-site-search" type="search" placeholder="Rechercher à Yaoundé" className="min-w-0 flex-1 bg-transparent px-3 py-1 outline-none" />
    </form>
  );
}