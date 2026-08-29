import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ModaliteBadges from "@/components/ModaliteBadges";
import { soins } from "@/content/soins";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Soins & accompagnements",
  description:
    "Coupure des liens, thérapie individuelle, Reiki, nettoyage énergétique, cartes Lenormand, massages, créations personnalisées. À Lausanne et à distance.",
  alternates: { canonical: "/soins" },
};

export default function Soins() {
  return (
    <>
      <Container className="pt-16 pb-10 text-center sm:pt-24">
        <h1 className="text-4xl text-ink sm:text-5xl">Soins & accompagnements</h1>
        <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-gold-400" />
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
          Chaque accompagnement part de là où vous en êtes. Certains soins se vivent en
          cabine à Lausanne, d&apos;autres se font aussi bien à distance.
        </p>
      </Container>

      {/* Sommaire */}
      <Container size="wide" className="pb-16">
        <nav aria-label="Sommaire des soins">
          <ul className="flex flex-wrap justify-center gap-2">
            {soins.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded-full border border-gold-200 px-4 py-2 text-sm text-gold-700 transition hover:bg-gold-50"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="pb-10">
        <div className="space-y-16">
          {soins.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="text-3xl text-ink">{s.title}</h2>
              {s.lead ? (
                <p className="mt-2 font-serif text-lg text-gold-600">{s.lead}</p>
              ) : null}

              <div className="mt-4">
                <ModaliteBadges modalites={s.modalites} />
              </div>

              <div className="mt-6 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>

              {s.bullets ? (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>

      <section className="mt-8 bg-white py-16">
        <Container className="text-center">
          <h2 className="text-3xl text-ink">Vous ne savez pas par où commencer ?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
            C&apos;est normal, et ce n&apos;est pas à vous de choisir seul·e. Écrivez-moi ce
            que vous traversez : nous verrons ensemble ce qui vous conviendra le mieux.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
