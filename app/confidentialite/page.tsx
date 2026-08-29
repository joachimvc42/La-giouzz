import type { Metadata } from "next";
import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  return (
    <Container size="narrow" className="py-20">
      <h1 className="text-4xl text-ink">Politique de confidentialité</h1>
      <span aria-hidden className="mt-5 block h-px w-16 bg-gold-400" />

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="text-xl text-ink">Les données que vous transmettez</h2>
          <p className="mt-3">
            Lorsque vous utilisez le formulaire de contact, vous transmettez votre nom, votre
            adresse e-mail, éventuellement votre numéro de téléphone, ainsi que le message que
            vous écrivez. Ces informations servent uniquement à vous répondre.
          </p>
          <p className="mt-3">
            Elles ne sont ni revendues, ni louées, ni utilisées à des fins publicitaires, et
            ne sont transmises à aucun tiers en dehors du service technique qui achemine
            l&apos;e-mail (Resend).
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink">Confidentialité des échanges</h2>
          <p className="mt-3">
            Ce que vous confiez dans le cadre d&apos;un accompagnement reste strictement
            confidentiel. Aucun témoignage n&apos;est publié sur ce site sans l&apos;accord
            explicite de son auteur.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink">Cookies et mesure d&apos;audience</h2>
          <p className="mt-3">
            Ce site ne dépose aucun cookie publicitaire et n&apos;utilise aucun outil de
            traçage. La carte de la page Contact est fournie par Google Maps, qui peut
            déposer ses propres cookies lorsque la carte se charge.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-ink">Vos droits</h2>
          <p className="mt-3">
            Conformément à la loi fédérale suisse sur la protection des données (nLPD) et au
            RGPD, vous pouvez demander à consulter, corriger ou supprimer les données vous
            concernant. Il suffit de m&apos;en faire la demande par téléphone ou par WhatsApp
            au {site.phone}.
          </p>
        </section>
      </div>
    </Container>
  );
}
