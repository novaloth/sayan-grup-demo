"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleLines from "@/components/ui/TitleLines";
import { cn } from "@/lib/utils";
import type { ActivitiesContent } from "@/types/content";

export default function Activities({ content }: { content: ActivitiesContent }) {
  const activities = content.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = activities[activeIndex];

  return (
    <section
      id="faaliyet-alanlari"
      aria-labelledby="activities-title"
      className="px-(--gutter) pt-12 md:pt-16 xl:flex xl:justify-between xl:px-0 xl:pt-[60px]"
    >
      <div className="xl:pl-[72px]">
        <SectionHeading label={content.label} id="activities-title" titleClassName="xl:mt-[8px]">
          <TitleLines lines={content.title} />
        </SectionHeading>

        <div
          className="mt-[19px] ml-[41px] hidden h-[263px] w-px bg-brand-soft xl:block"
          aria-hidden
        />

        {/* Masaüstünde sekme yazıları 1280'de 30px'e iner ki kart sekmelerin üstüne binmesin. */}
        <div
          role="tablist"
          aria-label="Faaliyet alanları"
          className="mt-6 flex flex-col gap-3 pl-(--label-indent) md:mt-8 md:gap-5 xl:mt-10 xl:gap-[39px] xl:pl-[42px]"
        >
          {activities.map((activity, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={activity.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="activity-panel"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex w-fit items-center gap-3 text-left text-lg leading-none transition-colors md:gap-5 md:text-3xl xl:h-[44px] xl:gap-[calc(30px+12*var(--fp))]",
                  selected
                    ? "font-bold text-brand xl:text-[calc(30px+12*var(--fp))]"
                    : "font-light hover:text-brand xl:text-[calc(31px+12*var(--fp))]",
                )}
              >
                {activity.label}
                {selected && (
                  // 62px'lik ikonun içindeki ok 46x38px; 1920'de tasarımla birebir.
                  <Image
                    src="/images/icon-arrow-right.png"
                    alt=""
                    width={62}
                    height={62}
                    className="size-7 md:size-12 xl:size-[calc(46px+16*var(--fp))]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/*
        Görsel sütunu (masaüstünde 600→887px). Kart bu sütunun içinde akar ve sola taşar;
        kart uzarsa sütun da uzar. Mobilde görsel üstte, kart onun altına biner.
      */}
      <div className="relative isolate -mx-(--gutter) mt-8 md:mt-10 xl:mx-0 xl:mt-[3px] xl:w-[calc(600px+287*var(--fp))] xl:shrink-0 xl:pt-[153px] xl:pb-[96px]">
        <div className="relative h-[240px] overflow-hidden md:h-[420px] xl:absolute xl:inset-0 xl:-z-10 xl:h-auto">
          {active.image ? (
            <Image
              src={active.image}
              alt=""
              fill
              sizes="(min-width: 1280px) 46vw, 100vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder label={active.label} className="size-full" />
          )}
        </div>

        <div
          id="activity-panel"
          role="tabpanel"
          className="relative mx-(--gutter) -mt-16 rounded-[20px] bg-ink/95 p-6 text-white md:-mt-24 md:p-10 xl:mx-0 xl:mt-0 xl:-ml-[calc(120px+65*var(--fp))] xl:min-h-[627px] xl:w-[calc(520px+118*var(--fp))] xl:rounded-[24px] xl:bg-black/60 xl:pt-[45px] xl:pr-[60px] xl:pb-[45px] xl:pl-[61px] xl:backdrop-blur-[2px]"
        >
          <h3 className="text-xl leading-snug font-light md:text-3xl xl:text-[35px] xl:leading-[53px]">
            {active.title[0]}
            <br />
            {active.title[1]}
          </h3>
          <div className="mt-3 text-body xl:mt-[13px] xl:leading-6">
            {active.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {active.bullets && (
            <ul className="mt-4 list-disc pl-5 text-body xl:mt-6 xl:pl-6 xl:leading-6">
              {active.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
