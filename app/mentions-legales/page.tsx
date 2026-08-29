import type { Metadata } from "next";
import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <Container size="narrow" className="py-20">
      <h1 className="text-4xl text-ink">Mentions légales</h1>
      <span aria-hidden className="mt-5 block h-px w-16 bg-gold-400" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xl text-ink">Éditrice du site</h2>
          <p className="mt-3">
            {site.name}, thérapeute, énergéticienne et coach de vie indépendante.
            <br />
            Lieu de consultation : {site.place.name}, {site.place.street},{" "}
            {site.place.postalCode} {site.place.city}, {site.place.country}.
            <br />
            Téléphone : {site.phone}
          </p>
          {/* TODO Giuseppina : ajouter la raison sociale exacte et, le cas échéant,
              le numéro IDE / RC de l'entreprise individuelle. */}
        </section>

        <section>
          <h2 className="text-xl text-ink">Nature des prestations</h2>
          <p className="mt-3">
            Les accompagnements proposés relèvent du bien-être, du développement personnel
            et de l&apos;harmonisation énergétique. Ils ne constituent ni un diagnostic, ni
            un avis, ni un traitement médical, et ne remplacent en aucun cas une consultation
            auprès d&apos;un professionnel de la santé. En cas de problème de santé, veuillez
            consulter votre médecin.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink">Propriété intellectuelle</h2>
          <p className="mt-3">
            L&apos;ensemble des textes, images et créations présents sur ce site sont
            protégés. Les témoignages sont publiés avec l&apos;accord de leurs auteurs. Toute
            reproduction sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink">Hébergement</h2>
          <p className="mt-3">
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis.
          </p>
        </section>
      </div>
    </Container>
  );
}
