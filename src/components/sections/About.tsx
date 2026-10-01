import LoopVideo from "@/components/ui/LoopVideo";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleLines from "@/components/ui/TitleLines";
import type { AboutContent } from "@/types/content";

export default function About({ content }: { content: AboutContent }) {
  return (
    <section
      id="kurumsal"
      aria-labelledby="about-title"
      className="px-(--gutter) pt-12 pb-10 md:pt-16 md:pb-14 xl:px-[72px] xl:pt-[103px] xl:pb-[60px]"
    >
      {/* Masaüstü sütunları: başlık 470→655px, video 360→467px. */}
      <div className="xl:grid xl:grid-cols-[calc(470px+185*var(--fp))_calc(360px+107*var(--fp))_1fr] xl:items-start">
        <SectionHeading
          label={content.label}
          tone="ink"
          id="about-title"
          titleClassName="xl:mt-[5px]"
        >
          <TitleLines lines={content.title} />
        </SectionHeading>
        {/* Mobil/tablette video kenar boşluğunu aşıp tam genişlik olur. */}
        <div className="-mx-(--gutter) mt-6 md:mt-8 xl:mx-0 xl:mt-[25px]">
          <LoopVideo
            src={content.video}
            className="block h-[220px] w-full object-cover md:h-[400px] xl:h-[calc(254px+75*var(--fp))]"
          />
        </div>
        {/* Masaüstünde metin, video kutusunun dikey ortasına hizalanır. */}
        <div className="mt-6 flex flex-col gap-4 text-body md:mt-8 xl:mt-[25px] xl:ml-5 xl:min-h-[calc(254px+75*var(--fp))] xl:max-w-[625px] xl:justify-center xl:gap-[23px]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
