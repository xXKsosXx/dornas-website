import { defineType, defineField } from "sanity";

export default defineType({
  name: "actualite",
  title: "Actualité",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "titre" }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "categorie", title: "Catégorie", type: "string", options: { list: ["Travaux", "Vie locale", "Vie municipale", "Environnement", "Culture", "Autre"] } }),
    defineField({ name: "extrait", title: "Extrait", type: "text", rows: 3 }),
    defineField({ name: "contenu", title: "Contenu", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
