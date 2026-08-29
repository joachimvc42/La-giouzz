import type { Modalite } from "@/content/soins";

const label: Record<Modalite, string> = {
  cabine: "En cabine à Lausanne",
  distance: "À distance",
};

export default function ModaliteBadges({ modalites }: { modalites: readonly Modalite[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {modalites.map((m) => (
        <li
          key={m}
          className="rounded-full border border-gold-200 bg-gold-50 px-3 py-1 text-xs tracking-wide text-gold-700"
        >
          {label[m]}
        </li>
      ))}
    </ul>
  );
}
