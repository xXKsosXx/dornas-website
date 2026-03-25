"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom") as string,
      email: formData.get("email") as string,
      objet: formData.get("objet") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-navy mb-1.5">
          Nom complet
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-navy focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal min-h-[44px]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-navy focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal min-h-[44px]"
        />
      </div>
      <div>
        <label htmlFor="objet" className="block text-sm font-medium text-navy mb-1.5">
          Objet
        </label>
        <input
          type="text"
          id="objet"
          name="objet"
          required
          className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-navy focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal min-h-[44px]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-surface bg-white text-navy focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal resize-vertical"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-6 py-3 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed text-base"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {status === "sent" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
          Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
          Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
        </div>
      )}
    </form>
  );
}
