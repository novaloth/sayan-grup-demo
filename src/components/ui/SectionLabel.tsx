import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  /** Etiketin solundaki çizginin rengi. */
  tone?: "brand" | "ink";
  className?: string;
};

/** "— ETİKET" biçimindeki bölüm üst başlığı. Başlık, etiket metniyle hizalanır (pl-[43px]). */
export default function SectionLabel({ children, tone = "brand", className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-[11px] text-2xl leading-none font-light text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-[33px]", tone === "brand" ? "bg-brand-soft" : "bg-ink")}
      />
      {children}
    </p>
  );
}
