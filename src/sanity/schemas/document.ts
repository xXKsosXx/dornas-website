import { defineType, defineField } from "sanity";

export default defineType({
  name: "documentMairie",
  title: "Document",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["compte-rendu", "arrete", "budget", "autre"] }, validation: (r) => r.required() }),
    defineField({ name: "fichierUrl", title: "Fichier PDF", type: "file", options: { accept: ".pdf" } }),
  ],
});
