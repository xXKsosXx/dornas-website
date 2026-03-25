import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const actualites = [
  {
    titre: "Reconstruction du barrage du plan d'eau — lancement septembre 2026",
    categorie: "Travaux",
    extrait:
      "Un investissement de 300 000 € avec des subventions couvrant jusqu'à 80 % du coût. La dette résiduelle représente environ 150 € par habitant, un effort maîtrisé pour un équipement structurant.",
    date: "2026-03-20",
    image:
      "/images/barrage.png",
  },
  {
    titre: "Projet Multiservices : épicerie, bar, dépôt de pain",
    categorie: "Vie locale",
    extrait:
      "Le projet repose sur du foncier communal. Une commission participative est mise en place pour associer les habitants à la définition des services et au suivi du projet.",
    date: "2026-03-15",
    image:
      "/images/épicerie-multiservices.png",
  },
  {
    titre: "Liste Ensemble à Dornas élue — nouveau conseil municipal",
    categorie: "Vie municipale",
    extrait:
      "13 élus au service de la commune, portés par un projet collectif pour Dornas. Le nouveau conseil s'est réuni pour la première fois le 15 mars 2026.",
    date: "2026-03-15",
    image:
      "/images/liste-ensemble.PNG",
  },
];

const evenements = [
  { titre: "Conseil municipal", mois: "AVR", jour: "15", heure: "18h30", lieu: "Salle de la Mairie", faded: false },
  { titre: "Vide-grenier annuel", mois: "JUIN", jour: "08", heure: "dès 8h", lieu: "Place du Village", faded: false },
  { titre: "Cinéma en plein air", mois: "JUIL", jour: "05", heure: "21h30", lieu: "Plan d'eau", faded: false },
  { titre: "Marché des producteurs locaux", mois: "JUIL", jour: "19", heure: "18h", lieu: "Place de la fontaine", faded: true },
  { titre: "Fête de la Saint-Jean", mois: "AOÛT", jour: "16", heure: "Journée", lieu: "Village", faded: true },
  { titre: "Pique-nique champêtre", mois: "SEPT", jour: "06", heure: "12h", lieu: "Bords de la Dorne", faded: true },
];

const elus = [
  "Gaëlord Vialle (Maire)", "Elisabeth Banc", "Georges Guinet",
  "Karine Auffeuvre", "René Giffon", "Elise Batail", "Joël Batail",
  "Lydia Fugier", "Bruno Chastagnier", "Uriane Berrien",
  "Rémi Antunes Marques", "Clémence Fabbian", "Jacques Bourg",
];

const vieMunicipaleCards = [
  { icon: "description", title: "Comptes-rendus", desc: "Accédez aux délibérations et procès-verbaux des conseils municipaux.", href: "/documents" },
  { icon: "gavel", title: "Arrêtés municipaux", desc: "Consultez les arrêtés et décisions prises par la commune.", href: "/documents" },
  { icon: "account_balance", title: "Budget communal", desc: "Transparence financière : budget primitif et compte administratif.", href: "/documents" },
  { icon: "handshake", title: "Services publics", desc: "Liens vers les démarches administratives et services de l'État.", href: "/services" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* Material Symbols font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1920&q=85&auto=format&fit=crop"
          alt="Rivière ardéchoise entre falaises et forêts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f3] via-[#fdf9f3]/65 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <p className="text-teal font-semibold text-xs uppercase tracking-[0.25em] mb-4">
            Découvrir l&apos;Ardèche
          </p>
          <h1 className="font-heading text-[#002452] leading-[1.05] mb-6">
            <span className="block text-[56px] sm:text-[72px] lg:text-[80px] font-normal">
              Bienvenue à
            </span>
            <span className="block text-[56px] sm:text-[72px] lg:text-[80px] italic font-normal">
              Dornas
            </span>
          </h1>
          <p className="text-[#002452]/75 text-lg sm:text-xl max-w-lg leading-relaxed mb-10">
            Un village authentique au cœur des montagnes ardéchoises,
            bordé par les eaux claires de la Dorne.
            <br />
            200 habitants, une équipe d&apos;élus engagés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 h-14 px-7 bg-gradient-to-r from-[#002452] to-[#1B3A6B] text-white rounded-xl text-lg font-medium hover:opacity-90 transition-opacity min-h-[44px]"
            >
              <span className="material-symbols-outlined text-xl">calendar_month</span>
              Agenda &amp; Événements
            </Link>
            <Link
              href="/documents"
              className="inline-flex items-center gap-2 h-14 px-7 bg-white border-2 border-[#1B3A6B]/20 text-[#002452] rounded-xl text-lg font-medium hover:border-teal transition-colors min-h-[44px]"
            >
              <span className="material-symbols-outlined text-xl">description</span>
              Comptes-rendus
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — BANDEAU STATUT                                  */}
      {/* ============================================================ */}
      <section className="relative z-20 -mt-12 px-4 sm:px-8 mb-16">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg border-b-4 border-teal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* Statut */}
            <div className="flex items-center gap-3 p-5 lg:p-6">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <div>
                <p className="font-bold text-[#002452] text-sm">Mairie ouverte</p>
                <p className="text-[#44474f] text-xs">Lun, Mar, Jeu : 9h–12h · Mer : 14h–17h30</p>
              </div>
            </div>
            {/* Adresse */}
            <div className="flex items-center gap-3 p-5 lg:p-6">
              <span className="material-symbols-outlined text-teal text-2xl flex-shrink-0">location_on</span>
              <p className="text-[#44474f] text-sm">Le Village · 07160 Dornas</p>
            </div>
            {/* Téléphone */}
            <div className="flex items-center gap-3 p-5 lg:p-6">
              <span className="material-symbols-outlined text-teal text-2xl flex-shrink-0">call</span>
              <a href="tel:0475290743" className="font-bold text-[#002452] text-sm hover:text-teal transition-colors">
                04 75 29 07 43
              </a>
            </div>
            {/* Actu flash */}
            <div className="flex items-center gap-3 p-5 lg:p-6">
              <span className="material-symbols-outlined text-teal text-2xl flex-shrink-0">campaign</span>
              <p className="text-[#44474f] text-sm">
                Élections : liste <strong className="text-[#002452]">Ensemble à Dornas</strong> élue — Mars 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — ACTUALITÉS                                      */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-2">
                Dernières nouvelles
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#002452]">
                Actualités du village
              </h2>
            </div>
            <Link
              href="/agenda"
              className="text-teal font-medium hover:text-[#002452] transition-colors inline-flex items-center gap-1 text-sm"
            >
              Voir tout le journal
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actualites.map((actu, i) => (
              <article key={i} className="group">
                {/* Image */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={actu.image}
                    alt={actu.titre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-2">
                  {actu.categorie}
                </p>
                <h3 className="font-heading text-2xl text-[#002452] group-hover:text-teal transition-colors mb-3 leading-snug">
                  {actu.titre}
                </h3>
                <p className="text-[#44474f] text-lg leading-relaxed mb-3">
                  {actu.extrait}
                </p>
                <time className="text-[#44474f] italic text-sm">
                  {new Date(actu.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — AGENDA + VIE MUNICIPALE                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* --- Agenda (5 cols) --- */}
            <div className="lg:col-span-5">
              <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-2">
                Calendrier
              </p>
              <h2 className="font-heading text-3xl font-bold text-[#002452] mb-8">
                Agenda
              </h2>

              <div className="space-y-3">
                {evenements.map((evt, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-xl shadow-sm p-4 flex items-start gap-4 transition-opacity ${evt.faded ? "opacity-60" : ""}`}
                  >
                    {/* Badge date */}
                    <div className="w-16 h-16 bg-teal/10 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[#006b76] text-[10px] font-bold uppercase leading-none">
                        {evt.mois}
                      </span>
                      <span className="text-[#006b76] text-2xl font-bold leading-none mt-0.5">
                        {evt.jour}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#002452] text-base leading-snug">
                        {evt.titre}
                      </h3>
                      <div className="flex items-center gap-3 mt-1.5 text-[#44474f] text-sm">
                        <span className="inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-teal text-base">schedule</span>
                          {evt.heure}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="material-symbols-outlined text-teal text-base">location_on</span>
                          {evt.lieu}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/agenda"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 h-14 border-2 border-[#1B3A6B]/30 text-[#002452] rounded-xl font-medium hover:border-teal transition-colors min-h-[44px]"
              >
                Consulter l&apos;agenda complet
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>

            {/* --- Vie municipale (7 cols) --- */}
            <div className="lg:col-span-7">
              <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-2">
                Gouvernance
              </p>
              <h2 className="font-heading text-3xl font-bold text-[#002452] mb-8">
                Vie municipale
              </h2>

              {/* 4 cards 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {vieMunicipaleCards.map((card, i) => (
                  <Link
                    key={i}
                    href={card.href}
                    className="bg-white rounded-xl shadow-sm p-6 hover:-translate-y-1 transition-transform block"
                  >
                    <span className="material-symbols-outlined text-teal text-4xl mb-3 block">
                      {card.icon}
                    </span>
                    <h3 className="font-heading text-2xl text-[#002452] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#44474f] text-base leading-relaxed">
                      {card.desc}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Encart élus navy */}
              <div className="bg-[#002452] rounded-xl p-6 sm:p-8 text-white">
                <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-2">
                  Conseil élu le 15 mars 2026
                </p>
                <p className="font-heading text-xl sm:text-2xl italic text-white/90 mb-4">
                  Ensemble à Dornas — Un village pour Toutes et Tous
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {elus.join(" · ")}
                </p>
                <Link
                  href="/vie-municipale"
                  className="text-teal font-medium hover:text-white transition-colors inline-flex items-center gap-1 text-sm"
                >
                  Voir la composition du conseil
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — DÉCOUVRIR DORNAS                                */}
      {/* ============================================================ */}
      <section className="bg-[#002452] py-20 sm:py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Colonne gauche */}
            <div>
              <p className="text-teal font-bold text-xs uppercase tracking-[0.25em] mb-4">
                Notre identité
              </p>
              <h2 className="font-heading text-4xl sm:text-[56px] font-bold text-white leading-[1.1] mb-6">
                Un village,
                <br />
                quatre hameaux
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
                Dornas est une commune ardéchoise nichée à 540 mètres d&apos;altitude,
                traversée par la Dorne. Un cadre de vie exceptionnel entre montagnes,
                forêts et rivières, où nature et patrimoine se conjuguent.
              </p>

              {/* Stats 2x2 */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { value: "200", label: "Dornasiens" },
                  { value: "4", label: "Hameaux" },
                  { value: "540m", label: "Altitude" },
                  { value: "07", label: "Ardèche" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-5xl text-[#95f1ff] font-bold">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/notre-village"
                className="text-teal font-medium hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Découvrir le village
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>

            {/* Colonne droite — grille photos */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80&auto=format&fit=crop"
                  alt="Paysage ardéchois"
                  className="w-full h-64 object-cover rounded-xl"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80"
                  alt="Forêt verdoyante"
                  className="w-full h-80 object-cover rounded-xl -mt-4"
                />
              </div>
              <div className="space-y-4 mt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                  alt="Montagne"
                  className="w-full h-80 object-cover rounded-xl"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&q=80"
                  alt="Nature et forêt"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>

              {/* Encart flottant camping */}
              <div className="absolute bottom-6 right-4 bg-[#95f1ff] text-[#001f24] p-6 sm:p-8 rounded-xl max-w-xs shadow-xl">
                <p className="font-heading text-xl italic font-semibold mb-2">
                  Camping municipal du Pont
                </p>
                <p className="text-sm leading-relaxed mb-3 text-[#001f24]/80">
                  En bordure de la Dorne, un cadre naturel idéal pour les familles en saison estivale.
                </p>
                <Link
                  href="/notre-village"
                  className="text-[#006b76] font-medium text-sm hover:text-[#002452] inline-flex items-center gap-1 transition-colors"
                >
                  En savoir plus
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
