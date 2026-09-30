import { cn } from "@/lib/utils";

/** Bölümler arasındaki ince ayırıcı (masaüstünde 1440px). Dikey boşluk className ile verilir. */
export default function Divider({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "mx-(--gutter) h-px border-0 bg-divider xl:mx-auto xl:max-w-[1440px]",
        className,
      )}
    />
  );
}
