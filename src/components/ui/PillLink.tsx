import Link from "next/link";
import { cn } from "@/lib/utils";

type PillLinkProps = React.ComponentProps<typeof Link> & { tone: "light" | "dark" };

/** İnce kenarlıklı, tamamen yuvarlak bağlantı. Yatay boşluk çağıran tarafta verilir. */
export default function PillLink({ tone, className, ...props }: PillLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-[50px] items-center rounded-full border text-lg font-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        tone === "light"
          ? "border-white hover:bg-white hover:text-ink focus-visible:outline-white"
          : "border-ink hover:bg-ink hover:text-white focus-visible:outline-ink",
        className,
      )}
      {...props}
    />
  );
}
