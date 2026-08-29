import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire à Giuseppina Rui — thérapeute, énergéticienne et coach de vie à Lausanne et à distance. Formulaire, téléphone et WhatsApp.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${site.place.lat},${site.place.lng}&hl=fr&z=16&output=embed`;

export default function Contact() {
  return (
    <>
      <Container className="pt-16 pb-12 text-center sm:pt-24">
        <h1 className="text-4xl text-ink sm:text-5xl">Me contacter</h1>
        <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-gold-400" />
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
          Écrivez-moi ce que vous traversez, même en quelques lignes. Je réponds
          personnellement à chaque message.
        </p>
      </Container>

      <Container size="wide" className="pb-20">
        <div className="grid gap-12 md:grid-cols-[1fr_minmax(0,340px)]">
          <div className="rounded-sm border border-gold-100 bg-white p-8">
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="rounded-sm border border-gold-100 bg-white p-7">
              <h2 className="text-xl text-ink">Directement</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">
                <li>
                  <a href={site.phoneHref} className="hover:text-gold-600">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-600"
                  >
                    Écrire sur WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-sm border border-gold-100 bg-white p-7">
              <h2 className="text-xl text-ink">Où je reçois</h2>
              <address className="mt-4 not-italic text-[15px] leading-relaxed text-ink-soft">
                {site.place.name}
                <br />
                {site.place.street}
                <br />
                {site.place.postalCode} {site.place.city}
              </address>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Un institut qui accueille plusieurs praticiens, où je dispose de ma cabine.
                Les séances se font sur rendez-vous.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                J&apos;accompagne également <strong className="font-semibold text-ink">à distance</strong>,
                par WhatsApp, partout en Suisse romande et au-delà.
              </p>
              <a
                href={site.place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-b border-gold-400 pb-0.5 text-sm text-gold-700 transition hover:border-gold-600"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-gold-100">
          <iframe
            title="Plan de situation"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0"
          />
        </div>
      </Container>
    </>
  );
}
