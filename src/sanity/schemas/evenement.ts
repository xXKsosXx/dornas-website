import { defineType, defineField } from "sanity";

export default defineType({
  name: "evenement",
  title: "Événement",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "heure", title: "Heure", type: "string" }),
    defineField({ name: "lieu", title: "Lieu", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["Conseil municipal", "Fête", "Marché", "Culture", "Sport", "Autre"] } }),
  ],
});
