import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * İnce kenarlıklı, tamamen yuvarlak buton stili; hover'da içi soldan sağa dolar.
 * light: koyu zemin için (beyaz dolgu, koyu yazı). dark: açık zemin için (koyu dolgu, beyaz yazı).
 * Link olamayan yerlerde (ör. kart linki içindeki span, form butonu) doğrudan kullanılır.
 */
export function pillClass(tone: Tone, className?: string) {
  return cn(
    "btn-fill inline-flex h-10 items-center justify-center rounded-full border text-base font-light focus-visible:outline-2 focus-visible:outline-offset-2 xl:h-[50px] xl:text-lg",
    tone === "light"
      ? "border-white focus-visible:outline-white"
      : "border-ink [--btn-fill-text:var(--color-white)] [--btn-fill:var(--color-ink)] focus-visible:outline-ink",
    className,
  );
}

type PillLinkProps = React.ComponentProps<typeof Link> & { tone: Tone };

/** pillClass stilinde bağlantı. Yatay boşluk çağıran tarafta verilir. */
export default function PillLink({ tone, className, ...props }: PillLinkProps) {
  return <Link className={pillClass(tone, className)} {...props} />;
}
