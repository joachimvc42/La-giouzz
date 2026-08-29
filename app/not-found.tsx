import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <h1 className="text-4xl text-ink">Cette page n&apos;existe pas</h1>
      <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-soft">
        Le lien que vous avez suivi ne mène nulle part. Peut-être cherchiez-vous les soins
        ou les témoignages ?
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-sm bg-gold-500 px-6 py-3 text-sm text-white transition hover:bg-gold-600"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/soins"
          className="rounded-sm border border-gold-300 px-6 py-3 text-sm text-gold-700 transition hover:bg-gold-50"
        >
          Voir les soins
        </Link>
      </div>
    </Container>
  );
}
