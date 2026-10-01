import Image from "next/image";
import { Fragment } from "react";
import CountUp from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";
import type { StatItem, StatsContent } from "@/types/content";

/** Masaüstü düzeni: 1. kart geniş (sol üst köşe yuvarlak), 4. kart geniş (sağ alt köşe yuvarlak). */
const cardLayout = ["rounded-tl-[16px] xl:col-span-2", "", "", "rounded-br-[16px] xl:col-span-2"];

function StatCard({ item, className }: { item: StatItem; className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate flex h-[120px] flex-col justify-end overflow-hidden bg-white pb-4 pl-4 md:h-[160px] md:pb-6 md:pl-6 xl:h-[calc(150px+16*var(--fp))] xl:pb-[27px] xl:pl-[31px]",
        className,
      )}
    >
      {item.image && (
        <>
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 31vw, 50vw"
            className="-z-20 object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-white/55" />
        </>
      )}
      {item.icon && (
        <Image
          src={item.icon}
          alt=""
          width={54}
          height={54}
          className="absolute top-3 left-4 size-8 md:top-5 md:left-6 md:size-10 xl:top-[calc(12px+6*var(--fp))] xl:left-[31px] xl:size-[calc(36px+12*var(--fp))]"
        />
      )}
      <p className="text-3xl leading-none font-bold md:text-4xl xl:text-[46px]">
        <CountUp value={item.value} suffix={item.suffix} />
      </p>
      <p className="mt-1.5 text-xs leading-none md:text-sm xl:mt-[10px] xl:text-[17px]">
        {item.label}
      </p>
    </div>
  );
}

export default function Stats({ content }: { content: StatsContent }) {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-ink px-(--gutter) py-14 text-white md:py-20 xl:relative xl:h-[650px] xl:p-0"
    >
      <h2
        id="stats-title"
        className="text-[34px] leading-[40px] font-black md:text-[60px] md:leading-[68px] xl:absolute xl:top-[142px] xl:left-[72px] xl:text-[calc(60px+23*var(--fp))] xl:leading-[calc(70px+26*var(--fp))]"
      >
        {content.title.map((line, lineIndex) => (
          <Fragment key={lineIndex}>
            {lineIndex > 0 && <br />}
            {line.map((segment) =>
              segment.outline ? (
                <span key={segment.text} className="text-outline">
                  {segment.text}
                </span>
              ) : (
                <Fragment key={segment.text}>{segment.text}</Fragment>
              ),
            )}
          </Fragment>
        ))}
      </h2>

      {/* Masaüstünde içerik 638→890px'ten başlar, 600→954px genişliğindedir. */}
      <div className="mt-6 md:mt-10 xl:absolute xl:top-[98px] xl:left-[calc(638px+252*var(--fp))] xl:mt-0 xl:w-[calc(600px+354*var(--fp))]">
        <p className="text-body md:max-w-[612px] xl:ml-[calc(200px+124*var(--fp))] xl:leading-6">
          {content.text}
        </p>

        {/* Mobilde 2x2; masaüstünde üst sıra geniş+dar, alt sıra dar+geniş. */}
        <div className="mt-8 grid grid-cols-2 gap-3 text-ink md:gap-4 xl:mt-[73px] xl:grid-cols-[346fr_220fr_346fr] xl:gap-x-[21px] xl:gap-y-4">
          {content.items.map((item, index) => (
            <StatCard key={item.label} item={item} className={cardLayout[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
