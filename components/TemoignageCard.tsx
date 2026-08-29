import type { Temoignage } from "@/content/temoignages";

export default function TemoignageCard({
  temoignage,
  clamp = false,
}: {
  temoignage: Temoignage;
  clamp?: boolean;
}) {
  const paragraphs = clamp ? temoignage.paragraphs.slice(0, 1) : temoignage.paragraphs;

  return (
    <figure
      id={temoignage.id}
      className="flex h-full flex-col rounded-sm border border-gold-100 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
    >
      <svg viewBox="0 0 32 24" aria-hidden className="mb-4 h-5 w-7 fill-gold-300">
        <path d="M0 24V13.4C0 6 4.3 1.1 12 0l1.3 3.9C9 5.2 6.7 7.6 6.4 11H12v13H0Zm19 0V13.4C19 6 23.3 1.1 31 0l1.3 3.9C28 5.2 25.7 7.6 25.4 11H31v13H19Z" />
      </svg>

      <blockquote className="flex-1 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="preserve-breaks text-[15px] leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </blockquote>

      <figcaption className="mt-6 border-t border-gold-100 pt-4 font-serif text-lg text-gold-600">
        {temoignage.author}
      </figcaption>
    </figure>
  );
}
