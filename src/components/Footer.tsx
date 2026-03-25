import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-teal mb-4">
              Mairie de Dornas
            </h3>
            <address className="not-italic text-white/80 text-sm leading-relaxed">
              Le Village, 07160 Dornas
              <br />
              Tél :{" "}
              <a
                href="tel:0475290743"
                className="text-teal hover:text-white transition-colors"
              >
                04 75 29 07 43
              </a>
              <br />
              Email :{" "}
              <a
                href="mailto:mairie@dornas.fr"
                className="text-teal hover:text-white transition-colors"
              >
                mairie@dornas.fr
              </a>
            </address>
            <p className="text-white/60 text-sm mt-3">
              Lun/Mar/Jeu 9h–12h · Mer 14h–17h30
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-teal mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/vie-municipale", label: "Vie municipale" },
                { href: "/agenda", label: "Agenda" },
                { href: "/documents", label: "Documents" },
                { href: "/services", label: "Services" },
                { href: "/notre-village", label: "Notre village" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-teal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-teal mb-4">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-white/80 hover:text-teal transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-white/80 hover:text-teal transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Commune de Dornas — Tous droits
            réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
