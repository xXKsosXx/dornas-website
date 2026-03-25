import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez la mairie de Dornas par téléphone, email ou via le formulaire en ligne.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Contact
          </h1>
          <p className="text-navy/60 text-lg">
            N&apos;hésitez pas à nous contacter pour toute question
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>

          {/* Infos + carte */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-6">
              Informations pratiques
            </h2>
            <div className="bg-white rounded-xl p-6 border border-surface shadow-sm mb-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy text-sm uppercase tracking-wider mb-1">Adresse</h3>
                  <p className="text-navy/70">Le Village, 07160 Dornas</p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm uppercase tracking-wider mb-1">Téléphone</h3>
                  <a href="tel:0475290743" className="text-teal hover:text-navy font-medium">
                    04 75 29 07 43
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:mairie@dornas.fr" className="text-teal hover:text-navy font-medium">
                    mairie@dornas.fr
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm uppercase tracking-wider mb-1">Horaires</h3>
                  <p className="text-navy/70">Lun/Mar/Jeu : 9h–12h</p>
                  <p className="text-navy/70">Mercredi : 14h–17h30</p>
                </div>
              </div>
            </div>

            {/* Carte OpenStreetMap */}
            <div className="rounded-xl overflow-hidden border border-surface shadow-sm">
              <iframe
                title="Carte de Dornas"
                width="100%"
                height="300"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.28,44.86,4.32,44.90&layer=mapnik&marker=44.8787,4.2985"
                style={{ border: 0 }}
                loading="lazy"
              />
              <div className="bg-white p-3 text-center">
                <a
                  href="https://www.openstreetmap.org/?mlat=44.8787&mlon=4.2985#map=14/44.8787/4.2985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal hover:text-navy"
                >
                  Voir en plus grand sur OpenStreetMap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
