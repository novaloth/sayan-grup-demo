import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleLines from "@/components/ui/TitleLines";
import type { CapabilitiesContent } from "@/types/content";

export default function Capabilities({ content }: { content: CapabilitiesContent }) {
  const { image } = content;

  return (
    <section
      aria-labelledby="capabilities-title"
      className="py-10 md:py-14 xl:pt-[50px] xl:pb-[62px]"
    >
      {/* Masaüstünde şekil yüksekliği 411→650px; görsel yüksekliğe uyup sağa yaslanır. */}
      <div className="relative overflow-hidden bg-surface xl:ml-[26px] xl:h-[calc(411px+239*var(--fp))] xl:rounded-l-[calc(206px+119*var(--fp))]">
        <div className="relative px-(--gutter) pt-10 pb-8 md:pt-14 md:pb-10 xl:pt-[calc(60px+111*var(--fp))] xl:pr-0 xl:pb-0 xl:pl-[calc(100px+50*var(--fp))]">
          <SectionHeading
            label={content.label}
            id="capabilities-title"
            titleClassName="xl:mt-[7px] xl:pl-[44px]"
          >
            <TitleLines lines={content.title} />
          </SectionHeading>
          <p className="mt-3 pl-(--label-indent) text-body md:max-w-[calc(612px+var(--label-indent))] xl:mt-[2px] xl:max-w-[calc(514px+142*var(--fp))] xl:pl-[44px]">
            {content.text}
          </p>
        </div>
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1280px) 50vw, 100vw"
          className="block h-auto w-full xl:absolute xl:top-0 xl:right-0 xl:h-full xl:w-auto"
        />
      </div>
    </section>
  );
}
