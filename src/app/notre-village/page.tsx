import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre village",
  description: "Découvrez Dornas : son histoire, ses hameaux, son camping et son cadre de vie en Ardèche.",
};

export default function NotreVillagePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Notre village
          </h1>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Dornas, commune ardéchoise nichée à 540 mètres d&apos;altitude,
            au cœur d&apos;une nature préservée.
          </p>
        </div>

        {/* Image paysage */}
        <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=85&auto=format&fit=crop"
            alt="Paysage naturel ardéchois"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Présentation */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="font-heading text-2xl font-bold text-navy">Un cadre de vie exceptionnel</h2>
          <p className="text-navy/80 leading-relaxed">
            Dornas est une petite commune de 200 habitants située dans le département de l&apos;Ardèche (07).
            Composée de 4 hameaux, elle offre un cadre de vie paisible entre montagnes et rivières.
            La Dorne, rivière qui traverse la commune, donne son caractère unique à ce territoire
            où nature et patrimoine se conjuguent harmonieusement.
          </p>
          <p className="text-navy/80 leading-relaxed">
            Le village se distingue par son plan d&apos;eau, véritable lieu de vie
            et de loisirs pour les habitants et les visiteurs. Le projet de reconstruction du barrage,
            prévu pour septembre 2026, illustre la volonté de la commune de préserver et valoriser
            cet équipement structurant.
          </p>
        </div>

        {/* Hameaux */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6">
            Les hameaux
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Le Village", "Le Chambon", "Malatrait", "Le Plagnal"].map((hameau) => (
              <div
                key={hameau}
                className="bg-white rounded-xl p-5 border border-surface shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy">{hameau}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Camping */}
        <section className="bg-teal/5 rounded-2xl p-8 border border-teal/10">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">
            Camping municipal
          </h2>
          <p className="text-navy/80 leading-relaxed">
            La commune dispose d&apos;un camping municipal en bordure de la Dorne,
            ouvert en saison estivale. Un cadre naturel idéal pour les familles
            souhaitant profiter de la fraîcheur ardéchoise et des activités
            de plein air de la région.
          </p>
          <p className="text-navy/60 text-sm mt-4">
            Renseignements au 04 75 29 07 43 ou par email à mairie@dornas.fr
          </p>
        </section>
      </div>
    </div>
  );
}
