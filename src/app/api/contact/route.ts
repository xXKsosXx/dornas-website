import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { nom, email, objet, message } = await request.json();

    if (!nom || !email || !objet || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    const resend = getResend();

    await resend.emails.send({
      from: "Mairie de Dornas <onboarding@resend.dev>",
      to: "georges.guinet@gmail.com",
      subject: `Message depuis le site mairie de Dornas : ${objet}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis le site web</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
