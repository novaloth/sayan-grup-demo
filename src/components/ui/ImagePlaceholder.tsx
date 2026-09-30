import { cn } from "@/lib/utils";

/** Görseli henüz gelmemiş alanlar için yer tutucu. */
export default function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} (görsel bekleniyor)`}
      className={cn(
        "flex items-center justify-center bg-neutral-200 text-sm text-neutral-500",
        className,
      )}
    >
      {label} · görsel bekleniyor
    </div>
  );
}
