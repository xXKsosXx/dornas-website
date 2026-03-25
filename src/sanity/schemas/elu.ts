import { defineType, defineField } from "sanity";

export default defineType({
  name: "elu",
  title: "Élu",
  type: "document",
  fields: [
    defineField({ name: "nom", title: "Nom", type: "string", validation: (r) => r.required() }),
    defineField({ name: "prenom", title: "Prénom", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Rôle", type: "string", options: { list: ["Maire", "Adjoint", "Conseiller municipal"] } }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "commission", title: "Commission", type: "string" }),
  ],
});
