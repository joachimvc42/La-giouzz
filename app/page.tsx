import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TemoignageCard from "@/components/TemoignageCard";
import { affirmations } from "@/content/apropos";
import { site, whatsappUrl } from "@/content/site";
import { temoignages } from "@/content/temoignages";

const cartes = [
  {
    href: "/soins",
    title: "Soins & accompagnements",
    text: "Coupure des liens, thérapie individuelle, Reiki, nettoyage énergétique, éclairages intuitifs. En cabine à Lausanne ou à distance.",
    image: "/images/soins-ambiance.jpg",
  },
  {
    href: "/formations",
    title: "Formations",
    text: "Transmettre les outils : maîtrise du pendule, nettoyage énergétique des personnes et des lieux, pensée positive.",
    image: "/images/accueil-relaxation.jpg",
  },
  {
    href: "/soins#creations",
    title: "Créations personnalisées",
    text: "À partir d'une de vos photos, une image lumineuse et symbolique, conçue individuellement pour vous ou pour un proche.",
    image: "/images/creation-exemple.jpg",
  },
];

const extraits = ["ingrid-ch", "coralie-d", "mariella-l"];

export default function Home() {
  const selection = extraits
    .map((id) => temoignages.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-meditation.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />

        <Container className="py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-100">Bienvenue</p>
          <h1 className="mt-6 text-balance font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Plus de joie dans votre vie
          </h1>
          <p className="mt-6 font-serif text-xl text-gold-100 sm:text-2xl">{site.baseline}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/soins"
              className="rounded-sm bg-gold-500 px-7 py-3 text-sm tracking-wide text-white transition hover:bg-gold-600"
            >
              Découvrir les soins
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-white/70 px-7 py-3 text-sm tracking-wide text-white transition hover:bg-white/10"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 sm:py-24">
        <Container className="text-center">
          <SectionTitle subtitle="Je suis thérapeute, énergéticienne et coach de vie. J'accompagne celles et ceux qui traversent une épreuve, cherchent à y voir plus clair, ou souhaitent simplement retrouver leur équilibre — à Lausanne comme à distance.">
            Retrouver son équilibre, sa confiance, sa lumière
          </SectionTitle>

          <dl className="mx-auto mt-14 grid max-w-3xl gap-10 sm:grid-cols-3">
            {[
              { n: "18 ans", l: "d'accompagnement" },
              { n: "4'000+", l: "personnes accompagnées" },
              { n: "Lausanne", l: "et à distance" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl text-gold-600">{s.n}</dt>
                <dd className="mt-2 text-sm tracking-wide text-ink-soft">{s.l}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/qui-suis-je"
            className="mt-12 inline-block border-b border-gold-400 pb-1 text-sm tracking-wide text-gold-700 transition hover:border-gold-600"
          >
            Découvrir mon parcours
          </Link>
        </Container>
      </section>

      {/* Cartes */}
      <section className="pb-20 sm:pb-24">
        <Container size="wide">
          <div className="grid gap-8 md:grid-cols-3">
            {cartes.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col overflow-hidden rounded-sm border border-gold-100 bg-white transition hover:border-gold-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl text-ink">{c.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {c.text}
                  </p>
                  <span className="mt-5 text-sm tracking-wide text-gold-600">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Affirmations */}
      <section className="relative isolate overflow-hidden py-24">
        <Image
          src="/images/bandeau-lumiere.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/45" />
        <Container className="text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-100">
            Les outils du quotidien
          </p>
          <ul className="mt-10 space-y-6">
            {affirmations.map((a) => (
              <li key={a} className="font-serif text-xl leading-relaxed sm:text-2xl">
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Témoignages */}
      <section className="py-20 sm:py-24">
        <Container size="wide">
          <SectionTitle subtitle="Vingt-cinq personnes ont pris le temps d'écrire ce que ce travail a changé pour elles.">
            Elles et ils en parlent mieux que moi
          </SectionTitle>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {selection.map((t) => (
              <TemoignageCard key={t.id} temoignage={t} clamp />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/temoignages"
              className="border-b border-gold-400 pb-1 text-sm tracking-wide text-gold-700 transition hover:border-gold-600"
            >
              Lire les 25 témoignages
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="text-center">
          <SectionTitle subtitle="Un premier échange permet souvent d'y voir plus clair. Écrivez-moi, je vous réponds personnellement.">
            Faire le premier pas
          </SectionTitle>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-gold-500 px-7 py-3 text-sm tracking-wide text-white transition hover:bg-gold-600"
            >
              Me contacter
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-gold-300 px-7 py-3 text-sm tracking-wide text-gold-700 transition hover:bg-gold-50"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
