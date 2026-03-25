"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Activer Google Analytics si consentement
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== "G-XXXXXXXXXX") {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      document.head.appendChild(script);
      const w = window as Window & { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        w.dataLayer!.push(args);
      };
      gtag("js", new Date());
      gtag("config", process.env.NEXT_PUBLIC_GA_ID);
    }
  }

  function refuse() {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy text-white p-4 sm:p-6 z-50 shadow-lg border-t-2 border-teal">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          Ce site utilise des cookies pour mesurer l&apos;audience. Vous pouvez
          accepter ou refuser leur utilisation.{" "}
          <a
            href="/politique-confidentialite"
            className="text-teal underline hover:text-white"
          >
            En savoir plus
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={refuse}
            className="px-5 py-2.5 text-sm border border-white/30 rounded-md hover:bg-white/10 transition-colors min-h-[44px]"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm bg-teal text-white rounded-md hover:bg-teal/90 transition-colors font-medium min-h-[44px]"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
