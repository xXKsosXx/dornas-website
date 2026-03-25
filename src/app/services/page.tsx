import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Liens vers les services administratifs utiles pour les habitants de Dornas.",
};

const services = [
  {
    nom: "Impôts (impots.gouv.fr)",
    url: "https://www.impots.gouv.fr",
    description: "Déclaration de revenus, paiement des impôts, consultation de votre situation fiscale.",
  },
  {
    nom: "Service-Public.fr",
    url: "https://www.service-public.fr",
    description: "Démarches administratives, droits et obligations des citoyens.",
  },
  {
    nom: "Préfecture de l\u2019Ardèche",
    url: "https://www.ardeche.gouv.fr",
    description: "Services préfectoraux, titre de séjour, permis de conduire, carte grise.",
  },
  {
    nom: "CAF (Caisse d\u2019Allocations Familiales)",
    url: "https://www.caf.fr",
    description: "Allocations familiales, aides au logement, RSA, prime d\u2019activité.",
  },
  {
    nom: "Ameli (Assurance Maladie)",
    url: "https://www.ameli.fr",
    description: "Remboursements santé, carte vitale, arrêts de travail.",
  },
  {
    nom: "La Poste",
    url: "https://www.laposte.fr",
    description: "Suivi de courriers et colis, envois, services postaux.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Services pratiques
          </h1>
          <p className="text-navy/60 text-lg">
            Liens utiles vers les services administratifs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <a
              key={i}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-surface shadow-sm hover:shadow-md hover:border-teal/30 transition-all group block"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-navy group-hover:text-teal transition-colors text-base">
                    {service.nom}
                  </h2>
                  <p className="text-sm text-navy/60 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
