import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents",
  description: "Comptes-rendus, arrêtés et documents administratifs de la commune de Dornas.",
};

const documents = [
  { titre: "Compte-rendu du conseil municipal du 15 mars 2026", type: "compte-rendu", date: "2026-03-15" },
  { titre: "Budget prévisionnel 2026", type: "budget", date: "2026-01-10" },
  { titre: "Arrêté relatif aux travaux du plan d\u2019eau", type: "arrete", date: "2026-02-20" },
];

const typeLabels: Record<string, { label: string; color: string }> = {
  "compte-rendu": { label: "Compte-rendu", color: "bg-teal/10 text-teal" },
  budget: { label: "Budget", color: "bg-green-100 text-green-700" },
  arrete: { label: "Arrêté", color: "bg-orange-100 text-orange-700" },
  autre: { label: "Autre", color: "bg-surface text-navy/60" },
};

export default function DocumentsPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Documents
          </h1>
          <p className="text-navy/60 text-lg">
            Comptes-rendus, arrêtés et documents officiels de la commune
          </p>
        </div>

        <div className="space-y-4">
          {documents.map((doc, i) => {
            const meta = typeLabels[doc.type] || typeLabels.autre;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-surface shadow-sm flex items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-navy text-base truncate">
                      {doc.titre}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${meta.color}`}>
                        {meta.label}
                      </span>
                      <time className="text-xs text-navy/40">
                        {new Date(doc.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-navy/40 flex-shrink-0 bg-surface px-3 py-2 rounded-lg">
                  PDF bientôt disponible
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-surface rounded-xl p-8 mt-12 text-center">
          <p className="text-navy/60">
            Les documents seront téléchargeables au format PDF une fois publiés via le CMS.
          </p>
        </div>
      </div>
    </div>
  );
}
