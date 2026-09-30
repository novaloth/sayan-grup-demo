import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: React.ReactNode;
  tone?: "brand" | "ink";
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Etiket ile başlık arasındaki boşluk gibi bölüme özel ayarlar. */
  titleClassName?: string;
};

/** Etiket + bölüm başlığı. Başlık, etiket metniyle aynı hizadan başlar. */
export default function SectionHeading({
  label,
  tone,
  id,
  children,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2
        id={id}
        className={cn(
          "mt-2 pl-(--label-indent) text-heading font-semibold md:mt-3",
          titleClassName,
        )}
      >
        {children}
      </h2>
    </div>
  );
}
