import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site officiel de la commune de Dornas.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-4xl font-bold text-navy mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-navy/80">
          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Éditeur du site</h2>
            <p>
              Commune de Dornas<br />
              Le Village, 07160 Dornas<br />
              Téléphone : 04 75 29 07 43<br />
              Email : mairie@dornas.fr
            </p>
            <p>
              Directeur de la publication : Gaëlord Vialle, Maire de Dornas
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Hébergeur</h2>
            <p>
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              Site : vercel.com
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes)
              est la propriété de la Commune de Dornas, sauf mention contraire. Toute reproduction
              ou représentation, en tout ou partie, est interdite sans l&apos;autorisation préalable
              de la commune.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Responsabilité</h2>
            <p>
              La commune de Dornas s&apos;efforce de fournir des informations aussi précises
              que possible. Toutefois, elle ne pourra être tenue responsable des omissions,
              des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient
              de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données. Pour exercer ce droit, contactez-nous à mairie@dornas.fr.
            </p>
            <p>
              Pour plus de détails, consultez notre{" "}
              <a href="/politique-confidentialite" className="text-teal hover:text-navy underline">
                politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-navy">Crédits photographiques</h2>
            <p>
              Photographies paysages : Unsplash (licence libre).<br />
              Contenu rédactionnel : Commune de Dornas.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
