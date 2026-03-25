"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/vie-municipale", label: "Vie municipale" },
  { href: "/agenda", label: "Agenda" },
  { href: "/documents", label: "Documents" },
  { href: "/services", label: "Services" },
  { href: "/notre-village", label: "Notre village" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 text-white no-underline"
          >
            <Image
              src="/images/logo mairie.png"
              alt="Logo Mairie de Dornas"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-heading text-lg font-semibold leading-tight">
                Mairie de Dornas
              </div>
              <div className="text-xs text-teal opacity-90">
                Ardèche — 07160
              </div>
            </div>
            <div className="sm:hidden font-heading text-base font-semibold">
              Dornas
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu de navigation"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="lg:hidden bg-navy border-t border-white/10 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-base text-white/90 hover:text-white hover:bg-white/10 min-h-[44px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
