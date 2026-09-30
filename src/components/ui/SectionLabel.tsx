import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  /** Etiketin solundaki çizginin rengi. */
  tone?: "brand" | "ink";
  className?: string;
};

/**
 * "— ETİKET" biçimindeki bölüm üst başlığı.
 * Metnin başladığı yer (çizgi + boşluk) globals.css'teki --label-indent ile aynıdır;
 * başlıklar ve etiket altı içerik bu girintiyle hizalanır.
 */
export default function SectionLabel({ children, tone = "brand", className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-sm leading-none font-light text-ink md:text-xl xl:gap-[11px] xl:text-2xl",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-[26px] shrink-0 md:w-[33px]",
          tone === "brand" ? "bg-brand-soft" : "bg-ink",
        )}
      />
      {children}
    </p>
  );
}
