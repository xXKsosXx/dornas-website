import { defineType, defineField } from "sanity";

export default defineType({
  name: "parametre",
  title: "Paramètres",
  type: "document",
  fields: [
    defineField({ name: "horaires", title: "Horaires", type: "text" }),
    defineField({ name: "telephone", title: "Téléphone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "adresse", title: "Adresse", type: "text" }),
  ],
});
