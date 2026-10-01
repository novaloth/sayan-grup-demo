"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import LoopVideo from "@/components/ui/LoopVideo";
import PillLink from "@/components/ui/PillLink";
import type { CompaniesContent } from "@/types/content";
import { cn } from "@/lib/utils";

/** Banner sağındaki çentikli kontur deseni. */
function LinePattern() {
  const notch = "M28 196 L373 0 L373 178 L182 286 L255 330 L28 418 L28 236 L65 218 Z";
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute top-[120px] -right-[140px] h-[600px] w-[560px] origin-top-right scale-[0.55] overflow-visible md:top-[40px] md:-right-[60px] md:scale-75 xl:top-[14px] xl:-right-[20px] xl:scale-100"
      fill="none"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="1"
    >
      <path d={notch} />
      <path
        d={notch}
        transform="translate(37 241) scale(1.35 1)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={notch}
        transform="translate(230 121) scale(1.35 1)"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Companies({ content }: { content: CompaniesContent }) {
  const companies = content.items;
  const [activeIndex, setActiveIndex] = useState(0);
  /** Geçiş sırasında çıkan önceki şirket; kayma animasyonu bitince temizlenir. */
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  /** Kullanıcı bir kez seçim yaptıktan sonra videolar beklemeden oynar, metin geçişi animasyonlu olur. */
  const [interacted, setInteracted] = useState(false);
  const active = companies[activeIndex];
  const bannerLogo = active.bannerLogo ?? active.logo;

  const select = (index: number) => {
    // Hareket azaltma açıksa kayma animasyonu olmaz; önceki katman hiç tutulmaz.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrevIndex(reduceMotion ? null : activeIndex);
    setActiveIndex(index);
    setInteracted(true);
  };

  // Aynı anahtarla (şirket id) kalan katman yeniden oluşturulmaz; eski video kesintisiz sürer.
  const layers = prevIndex === null ? [activeIndex] : [prevIndex, activeIndex];
  // Sağdaki karta geçilirse şerit sola kayar (yeni sağdan girer), soldakine dönülürse sağa.
  const slideFrom = prevIndex !== null && activeIndex < prevIndex ? "-100%" : "100%";

  return (
    <section id="sirketlerimiz" aria-labelledby="companies-title" className="relative">
      {/* Kırmızı şerit, tam genişlikteki banner videosunun üstüne biner. */}
      <div className="absolute top-0 left-0 z-10 hidden h-[663px] w-[241px] items-start rounded-r-[16px] bg-brand pt-10 pl-[27px] xl:flex">
        <Logo alt="" className="brightness-0 invert" />
      </div>

      <div className="px-(--gutter) pt-10 pb-6 md:pb-8 xl:pt-[24px] xl:pr-0 xl:pb-[32px] xl:pl-[283px]">
        <p className="text-xs leading-none md:text-base xl:text-lg">{content.eyebrow}</p>
        <h2
          id="companies-title"
          className="mt-2.5 text-[22px] leading-tight font-semibold md:text-[28px] xl:mt-[10px] xl:text-[32px] xl:leading-none"
        >
          {content.title}
        </h2>
        <p className="mt-3 max-w-[640px] text-body text-ink-deep xl:mt-[11px]">{content.text}</p>
      </div>

      <div className="relative isolate h-[540px] overflow-hidden bg-ink-deep text-white md:h-[640px] xl:h-[762px]">
        {/* Şerit geçişi: yeni video bir taraftan girerken önceki video diğer taraftan çıkar. */}
        <div
          className="absolute inset-0 -z-20 overflow-hidden"
          style={{ "--slide-from": slideFrom } as React.CSSProperties}
        >
          {layers.map((index) => {
            const incoming = prevIndex !== null && index === activeIndex;
            const outgoing = index === prevIndex;
            return (
              <div
                key={companies[index].id}
                className={cn(
                  "absolute inset-0",
                  incoming && "animate-slide-in",
                  outgoing && "animate-slide-out",
                )}
                onAnimationEnd={incoming ? () => setPrevIndex(null) : undefined}
              >
                <LoopVideo
                  src={companies[index].bannerVideo}
                  eager={interacted}
                  className="size-full object-cover"
                />
              </div>
            );
          })}
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-ink-deep/90 via-ink-deep/55 to-ink-deep/20"
        />
        <LinePattern />

        <div
          key={active.id}
          className={cn(
            "relative px-(--gutter) pt-10 md:pt-14 xl:pt-[78px] xl:pr-0 xl:pl-[282px]",
            interacted && "animate-fade-in motion-reduce:animate-none",
          )}
        >
          <Image
            src={bannerLogo.src}
            alt={active.name}
            width={bannerLogo.width}
            height={bannerLogo.height}
            className="h-[30px] w-auto md:h-[44px] xl:h-auto"
          />
          <h3 className="mt-2 text-heading font-semibold xl:mt-[4px]">
            {active.title[0]}
            <br />
            {active.title[1]}
          </h3>
          <p className="mt-3 max-w-[560px] text-[13px] leading-snug md:text-base xl:mt-[8px] xl:max-w-none xl:leading-none">
            {active.description}
          </p>
          <PillLink
            href={active.url}
            tone="light"
            className="mt-4 h-[38px] px-4 text-[15px] xl:mt-[25px] xl:px-[31px]"
          >
            {active.name}&apos;i ziyaret et
          </PillLink>
        </div>

        {/* Masaüstünde kartlar 250→345px; 1280'de dördü birden sığar. */}
        <ul className="absolute inset-x-(--gutter) bottom-5 grid grid-cols-2 gap-1.5 md:bottom-8 md:grid-cols-4 md:gap-3 xl:inset-x-auto xl:right-[43px] xl:bottom-[18px] xl:flex xl:gap-5">
          {companies.map((company, index) => {
            const selected = index === activeIndex;
            return (
              <li key={company.id}>
                <button
                  type="button"
                  onClick={() => select(index)}
                  disabled={selected}
                  aria-pressed={selected}
                  aria-label={`${company.name} bilgilerini göster`}
                  className="group relative block h-[56px] w-full overflow-hidden text-left disabled:cursor-default md:h-[110px] xl:h-[calc(117px+45*var(--fp))] xl:w-[calc(250px+95*var(--fp))]"
                >
                  <LoopVideo
                    src={company.thumbVideo ?? company.bannerVideo}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-black/60 to-black/10"
                  />
                  <Image
                    src={company.thumbLogo.src}
                    alt=""
                    width={company.thumbLogo.width}
                    height={company.thumbLogo.height}
                    className="absolute bottom-2 left-2 h-[12px] w-auto md:bottom-3 md:left-3 md:h-[22px] xl:bottom-[18px] xl:left-[15px] xl:h-auto"
                  />
                  {selected && (
                    <span aria-hidden className="absolute inset-0 border-2 border-white" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
