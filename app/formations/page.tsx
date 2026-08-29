import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { formations } from "@/content/formations";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Maîtrise du pendule, nettoyage énergétique des personnes et des lieux, pensée positive : les formations transmises par Giuseppina Rui.",
  alternates: { canonical: "/formations" },
};

export default function Formations() {
  return (
    <>
      <Container className="pt-16 pb-12 text-center sm:pt-24">
        <h1 className="text-4xl text-ink sm:text-5xl">Formations</h1>
        <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-gold-400" />
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink-soft">
          Au-delà des soins, je transmets les outils. L&apos;objectif est toujours le même :
          que vous puissiez, seul·e, prendre soin de votre énergie au quotidien.
        </p>
      </Container>

      <Container className="pb-16">
        <div className="space-y-6">
          {formations.map((f) => (
            <article
              key={f.id}
              id={f.id}
              className="scroll-mt-32 rounded-sm border border-gold-100 bg-white p-8"
            >
              <h2 className="text-2xl text-ink">{f.title}</h2>

              {f.description.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {f.description.map((p, i) => (
                    <p key={i} className="leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Le détail de cette formation — à qui elle s&apos;adresse, ce qu&apos;on y
                  apprend, sa durée et son format — sera publié prochainement. En attendant,
                  écrivez-moi&nbsp;: je vous répondrai personnellement.
                </p>
              )}

              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft">
                {f.pourQui ? (
                  <div>
                    <dt className="inline font-semibold text-ink">Pour qui : </dt>
                    <dd className="inline">{f.pourQui}</dd>
                  </div>
                ) : null}
                {f.duree ? (
                  <div>
                    <dt className="inline font-semibold text-ink">Durée : </dt>
                    <dd className="inline">{f.duree}</dd>
                  </div>
                ) : null}
                {f.format ? (
                  <div>
                    <dt className="inline font-semibold text-ink">Format : </dt>
                    <dd className="inline">{f.format}</dd>
                  </div>
                ) : null}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mx-auto max-w-xl leading-relaxed text-ink-soft">
            Une formation vous intéresse&nbsp;? Dites-moi laquelle et ce que vous cherchez
            à en retirer.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
        </div>
      </Container>
    </>
  );
}
