export default function SectionTitle({
  children,
  subtitle,
  align = "center",
}: {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${a} gap-4`}>
      <h2 className="text-3xl text-ink sm:text-4xl">{children}</h2>
      <span aria-hidden className="block h-px w-16 bg-gold-400" />
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{subtitle}</p>
      ) : null}
    </div>
  );
}
