import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { citation, introduction, parcours, services } from "@/content/apropos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Qui suis-je ?",
  description:
    "Giuseppina Rui, thérapeute, énergéticienne et coach de vie. Plus de 18 ans d'accompagnement, formée au Reiki et à l'Arthur Findlay College.",
  alternates: { canonical: "/qui-suis-je" },
};

export default function QuiSuisJe() {
  return (
    <>
      <Container className="pt-16 pb-12 text-center sm:pt-24">
        <h1 className="text-4xl text-ink sm:text-5xl">Qui suis-je ?</h1>
        <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-gold-400" />
      </Container>

      <Container size="wide" className="pb-20">
        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
          <div className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[612/1047] overflow-hidden rounded-sm border border-gold-100">
              <Image
                src="/images/portrait-giuseppina.jpg"
                alt="Giuseppina Rui"
                fill
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>

            <blockquote className="mt-8 border-l-2 border-gold-300 pl-5 font-serif text-lg leading-relaxed text-gold-700">
              {citation}
            </blockquote>
          </div>

          <div>
            <p className="font-serif text-2xl leading-relaxed text-ink">{introduction}</p>

            <div className="mt-8 space-y-5">
              {parcours.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-gold-100 bg-white p-8">
              <h2 className="text-2xl text-ink">Les accompagnements que je propose</h2>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/soins"
                  className="rounded-sm bg-gold-500 px-6 py-3 text-sm tracking-wide text-white transition hover:bg-gold-600"
                >
                  Voir le détail des soins
                </Link>
                <Link
                  href="/contact"
                  className="rounded-sm border border-gold-300 px-6 py-3 text-sm tracking-wide text-gold-700 transition hover:bg-gold-50"
                >
                  Me contacter
                </Link>
              </div>
            </div>

            <p className="mt-10 text-sm leading-relaxed text-ink-soft">
              Je reçois à l&apos;{site.place.name}, {site.place.street}, {site.place.postalCode}{" "}
              {site.place.city} — un institut qui accueille plusieurs praticiens — et
              j&apos;accompagne également à distance, par WhatsApp.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
