import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vie municipale",
  description: "Conseil municipal de Dornas : élus, commissions et délibérations.",
};

const elus = [
  { prenom: "Gaëlord", nom: "Vialle", role: "Maire" },
  { prenom: "Elisabeth", nom: "Banc", role: "Conseillère municipale" },
  { prenom: "Georges", nom: "Guinet", role: "Conseiller municipal" },
  { prenom: "Karine", nom: "Auffeuvre", role: "Conseillère municipale" },
  { prenom: "René", nom: "Giffon", role: "Conseiller municipal" },
  { prenom: "Elise", nom: "Batail", role: "Conseillère municipale" },
  { prenom: "Joël", nom: "Batail", role: "Conseiller municipal" },
  { prenom: "Lydia", nom: "Fugier", role: "Conseillère municipale" },
  { prenom: "Bruno", nom: "Chastagnier", role: "Conseiller municipal" },
  { prenom: "Uriane", nom: "Berrien", role: "Conseillère municipale" },
  { prenom: "Rémi", nom: "Antunes Marques", role: "Conseiller municipal" },
  { prenom: "Clémence", nom: "Fabbian", role: "Conseillère municipale" },
  { prenom: "Jacques", nom: "Bourg", role: "Conseiller municipal" },
];

export default function VieMunicipalePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Vie municipale
          </h1>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Le conseil municipal de Dornas, élu le 15 mars 2026, est composé de 13 membres
            sous la liste &laquo;&nbsp;Ensemble à Dornas&nbsp;&raquo;.
          </p>
        </div>

        {/* Maire */}
        <div className="bg-navy text-white rounded-2xl p-8 mb-12 text-center">
          <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-4">
            GV
          </div>
          <h2 className="font-heading text-2xl font-bold mb-1">Gaëlord Vialle</h2>
          <p className="text-teal text-lg">Maire de Dornas</p>
        </div>

        {/* Conseil */}
        <h2 className="font-heading text-2xl font-bold text-navy mb-6">
          Conseillers municipaux
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {elus.slice(1).map((elu, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-surface shadow-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-navy font-heading font-semibold text-sm flex-shrink-0">
                {elu.prenom[0]}{elu.nom[0]}
              </div>
              <div>
                <div className="font-semibold text-navy">
                  {elu.prenom} {elu.nom}
                </div>
                <div className="text-sm text-navy/60">{elu.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Délibérations */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">
            Délibérations
          </h2>
          <div className="bg-surface rounded-xl p-8 text-center">
            <p className="text-navy/60 text-lg">
              Les comptes-rendus des conseils municipaux sont disponibles dans la rubrique{" "}
              <a href="/documents" className="text-teal hover:text-navy font-medium underline">
                Documents
              </a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
