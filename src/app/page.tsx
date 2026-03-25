import Link from "next/link";
import Image from "next/image";

const actualites = [
  {
    titre: "Reconstruction du barrage du plan d'eau — lancement septembre 2026",
    categorie: "Travaux",
    extrait:
      "Un investissement de 300 000 € avec des subventions couvrant jusqu'à 80 % du coût. La dette résiduelle représente environ 150 € par habitant, un effort maîtrisé pour un équipement structurant.",
    date: "2026-03-20",
  },
  {
    titre: "Projet Multiservices : épicerie, bar, dépôt de pain",
    categorie: "Vie locale",
    extrait:
      "Le projet repose sur du foncier communal. Une commission participative est mise en place pour associer les habitants à la définition des services et au suivi du projet.",
    date: "2026-03-15",
  },
  {
    titre: "Liste Ensemble à Dornas élue — nouveau conseil municipal",
    categorie: "Vie municipale",
    extrait:
      "13 élus au service de la commune, portés par un projet collectif pour Dornas. Le nouveau conseil s'est réuni pour la première fois le 15 mars 2026.",
    date: "2026-03-15",
  },
];

const evenementsProchains = [
  { titre: "Conseil municipal", date: "15 Avril 2026", heure: "18h30", lieu: "Salle de la Mairie" },
  { titre: "Vide-grenier annuel", date: "08 Juin 2026", heure: "dès 8h", lieu: "Place du Village" },
  { titre: "Cinéma en plein air", date: "05 Juillet 2026", heure: "21h30", lieu: "Plan d'eau" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/Hero Dornas.PNG"
          alt="Vue du village de Dornas en Ardèche"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f3] via-[#fdf9f3]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-teal font-medium text-sm uppercase tracking-wider mb-2">
              Commune d&apos;Ardèche — 07160
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4">
              Bienvenue à Dornas
            </h1>
            <p className="text-navy/80 text-lg sm:text-xl mb-8 leading-relaxed">
              200 habitants · 4 hameaux · 540m d&apos;altitude
              <br />
              Un village vivant au cœur de l&apos;Ardèche
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors min-h-[44px] text-base"
              >
                Contacter la mairie
              </Link>
              <Link
                href="/notre-village"
                className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy rounded-lg font-medium hover:bg-navy hover:text-white transition-colors min-h-[44px] text-base"
              >
                Découvrir le village
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-navy text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200", label: "habitants" },
              { value: "4", label: "hameaux" },
              { value: "540m", label: "d'altitude" },
              { value: "07", label: "Ardèche" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-teal">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              Actualités
            </h2>
            <p className="text-navy/60 text-lg">
              Les dernières nouvelles de votre commune
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actualites.map((actu, i) => (
              <article
                key={i}
                className="bg-white rounded-xl shadow-sm border border-surface overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-teal/10 text-teal rounded-full mb-3">
                    {actu.categorie}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3 leading-snug">
                    {actu.titre}
                  </h3>
                  <p className="text-navy/70 text-sm leading-relaxed">
                    {actu.extrait}
                  </p>
                  <time className="block text-xs text-navy/40 mt-4">
                    {new Date(actu.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-3">
              Prochains événements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evenementsProchains.map((evt, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-surface hover:shadow-md transition-shadow"
              >
                <div className="text-teal font-medium text-sm mb-2">
                  {evt.date}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {evt.titre}
                </h3>
                <p className="text-navy/60 text-sm">
                  {evt.heure} · {evt.lieu}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/agenda"
              className="inline-flex items-center px-6 py-3 bg-teal text-white rounded-lg font-medium hover:bg-teal/90 transition-colors min-h-[44px]"
            >
              Voir tout l&apos;agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Accès rapide */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy text-center mb-12">
            Accès rapide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { href: "/vie-municipale", label: "Vie municipale", icon: "🏛️" },
              { href: "/documents", label: "Documents", icon: "📄" },
              { href: "/services", label: "Services", icon: "🔗" },
              { href: "/contact", label: "Contact", icon: "✉️" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-surface hover:shadow-md hover:border-teal/30 transition-all text-center min-h-[44px]"
              >
                <span className="text-3xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="font-medium text-navy">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Horaires de la mairie
          </h2>
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-xl mb-2">
              Lundi, Mardi, Jeudi : <strong>9h – 12h</strong>
            </p>
            <p className="text-xl mb-6">
              Mercredi : <strong>14h – 17h30</strong>
            </p>
            <p className="text-white/70">
              Tél :{" "}
              <a href="tel:0475290743" className="text-teal hover:text-white">
                04 75 29 07 43
              </a>
            </p>
            <p className="text-white/70">
              Le Village, 07160 Dornas (Ardèche)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
