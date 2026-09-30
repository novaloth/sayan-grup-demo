import { cn } from "@/lib/utils";

/** Bölümler arasındaki 1440px'lik ince ayırıcı. Dikey boşluk className ile verilir. */
export default function Divider({ className }: { className?: string }) {
  return <hr className={cn("mx-auto h-px max-w-[1440px] border-0 bg-divider", className)} />;
}
