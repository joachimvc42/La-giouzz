import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  nom?: string;
  email?: string;
  telephone?: string;
  message?: string;
  siteWeb?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  // Honeypot : un robot remplit ce champ, un humain ne le voit pas.
  // On répond 200 pour ne pas lui signaler qu'il a été détecté.
  if (body.siteWeb) return NextResponse.json({ ok: true });

  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide" }, { status: 400 });
  }
  if (message.length < 5) {
    return NextResponse.json({ error: "Le message est trop court" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Le message est trop long" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact: variables d'environnement manquantes");
    return NextResponse.json(
      { error: "Le formulaire n'est pas encore configuré" },
      { status: 500 },
    );
  }

  const nom = (body.nom ?? "").trim() || "Non renseigné";
  const telephone = (body.telephone ?? "").trim() || "Non renseigné";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Message du site — ${nom}`,
      text: [
        `Nom : ${nom}`,
        `E-mail : ${email}`,
        `Téléphone : ${telephone}`,
        "",
        "Message :",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend:", error);
      return NextResponse.json({ error: "Envoi impossible" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact:", err);
    return NextResponse.json({ error: "Envoi impossible" }, { status: 500 });
  }
}
