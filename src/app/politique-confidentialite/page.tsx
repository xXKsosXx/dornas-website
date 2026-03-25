import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et gestion des cookies du site de la commune de Dornas.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-4xl font-bold text-navy mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-navy/80">
          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Collecte des données</h2>
            <p>
              Le site de la commune de Dornas collecte des données personnelles
              uniquement via le formulaire de contact : nom, adresse email, objet et message.
              Ces données sont utilisées exclusivement pour répondre à vos demandes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Durée de conservation</h2>
            <p>
              Les données collectées via le formulaire de contact sont conservées
              pendant une durée maximale de 12 mois, puis supprimées.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Cookies</h2>
            <p>
              Ce site utilise des cookies à des fins de mesure d&apos;audience
              (Google Analytics). Ces cookies ne sont déposés qu&apos;après votre
              consentement explicite via le bandeau cookies affiché lors de votre
              première visite.
            </p>
            <p>
              <strong>Cookies strictement nécessaires :</strong> aucun cookie technique
              n&apos;est déposé pour le fonctionnement du site.
            </p>
            <p>
              <strong>Cookies analytiques :</strong> Google Analytics est utilisé
              pour mesurer la fréquentation du site. Ces cookies sont soumis à votre
              consentement.
            </p>
            <p>
              Vous pouvez à tout moment modifier vos préférences en supprimant
              le cookie &laquo;&nbsp;cookie-consent&nbsp;&raquo; dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous : mairie@dornas.fr
              ou par courrier à Commune de Dornas, Le Village, 07160 Dornas.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Responsable du traitement</h2>
            <p>
              Commune de Dornas<br />
              Le Village, 07160 Dornas<br />
              Téléphone : 04 75 29 07 43<br />
              Email : mairie@dornas.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
