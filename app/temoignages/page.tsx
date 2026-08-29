import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import TemoignageCard from "@/components/TemoignageCard";
import { temoignages } from "@/content/temoignages";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Vingt-cinq personnes racontent ce que l'accompagnement de Giuseppina Rui a changé dans leur vie.",
  alternates: { canonical: "/temoignages" },
};

export default function Temoignages() {
  return (
    <>
      <Container className="pt-16 pb-12 text-center sm:pt-24">
        <h1 className="text-4xl text-ink sm:text-5xl">Témoignages</h1>
        <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-gold-400" />
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
          Ces textes ont été écrits par les personnes que j&apos;ai accompagnées. Ils sont
          reproduits tels qu&apos;elles me les ont confiés, sans retouche.
        </p>
      </Container>

      <Container size="wide" className="pb-16">
        <div className="columns-1 gap-8 lg:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
          {temoignages.map((t) => (
            <TemoignageCard key={t.id} temoignage={t} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="leading-relaxed text-ink-soft">
            Vous aussi, vous souhaitez partager votre expérience&nbsp;?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-sm bg-gold-500 px-7 py-3 text-sm tracking-wide text-white transition hover:bg-gold-600"
          >
            M&apos;écrire
          </Link>
        </div>
      </Container>
    </>
  );
}
