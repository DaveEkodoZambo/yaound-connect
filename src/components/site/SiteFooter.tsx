import { ChevronDown, Instagram, Linkedin, Youtube, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer>
      <div className="bg-surface py-14">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 text-center md:grid-cols-4 md:divide-x md:divide-border">
          <div>
            <h3 className="text-xl">Vous êtes…</h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">
              Accédez à des actualités et informations pratiques par profil
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4 eyebrow text-accent-blue">
              <a href="#" className="hover:underline">Professionnel</a>
              <a href="#" className="hover:underline">Association</a>
              <a href="#" className="hover:underline">Jeune</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl">Les newsletters de Yaoundé</h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">
              Recevez directement par email l'actualité de vos centres d'intérêt
            </p>
            <a href="#" className="mt-5 inline-block eyebrow text-accent-blue hover:underline">
              S'inscrire
            </a>
          </div>
          <div>
            <h3 className="text-xl">Sur les réseaux</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-5 text-brand">
              {[Instagram, Linkedin, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-accent-red" aria-label="Réseau social">
                  <Icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl">Une question ?</h3>
            <a href="#" className="mt-5 inline-block eyebrow text-accent-blue hover:underline">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      <div className="bg-accent-blue py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-5 px-6 text-center sm:flex-row">
          <p className="font-display text-lg font-bold text-brand-foreground sm:text-xl">
            Retrouvez les actualités de votre arrondissement
          </p>
          <button className="inline-flex items-center gap-3 bg-background px-5 py-3 eyebrow text-brand">
            Sélectionnez votre mairie
            <ChevronDown className="h-4 w-4" strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="bg-brand py-5">
        <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 text-[0.95rem] text-brand-foreground">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Accessibilité</a>
          <a href="#" className="hover:underline">Presse</a>
          <a href="#" className="hover:underline">Open Data</a>
          <a href="#" className="hover:underline">Politique de cookies</a>
          <a href="#" className="hover:underline">Plan du site</a>
        </nav>
      </div>
    </footer>
  );
}
