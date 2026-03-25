import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Tous les événements à venir à Dornas : conseils municipaux, fêtes, marchés et animations.",
};

const evenements = [
  { titre: "Conseil municipal", date: "2026-04-15", heure: "18h30", lieu: "Salle de la Mairie", type: "Conseil municipal" },
  { titre: "Vide-grenier annuel", date: "2026-06-08", heure: "dès 8h", lieu: "Place du Village", type: "Fête" },
  { titre: "Cinéma en plein air", date: "2026-07-05", heure: "21h30", lieu: "Plan d\u2019eau", type: "Culture" },
  { titre: "Marché des producteurs locaux", date: "2026-07-19", heure: "18h", lieu: "Place de la fontaine", type: "Marché" },
  { titre: "Fête de la Saint-Jean", date: "2026-08-16", heure: "Toute la journée", lieu: "Village", type: "Fête" },
  { titre: "Pique-nique champêtre", date: "2026-09-06", heure: "12h", lieu: "Bords de la Dorne", type: "Fête" },
];

const typeColors: Record<string, string> = {
  "Conseil municipal": "bg-navy/10 text-navy",
  "Fête": "bg-teal/10 text-teal",
  "Culture": "bg-purple-100 text-purple-700",
  "Marché": "bg-green-100 text-green-700",
};

export default function AgendaPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy mb-4">
            Agenda
          </h1>
          <p className="text-navy/60 text-lg">
            Retrouvez tous les événements de la commune
          </p>
        </div>

        <div className="space-y-4">
          {evenements.map((evt, i) => {
            const dateObj = new Date(evt.date);
            const jour = dateObj.toLocaleDateString("fr-FR", { day: "numeric" });
            const mois = dateObj.toLocaleDateString("fr-FR", { month: "short" }).toUpperCase();
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-surface shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow"
              >
                <div className="text-center flex-shrink-0 w-16">
                  <div className="text-3xl font-heading font-bold text-navy">{jour}</div>
                  <div className="text-xs font-medium text-teal uppercase">{mois}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h2 className="font-heading text-lg font-semibold text-navy">
                      {evt.titre}
                    </h2>
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${typeColors[evt.type] || "bg-surface text-navy/60"}`}>
                      {evt.type}
                    </span>
                  </div>
                  <p className="text-navy/60 text-sm mt-1">
                    {evt.heure} &middot; {evt.lieu}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
