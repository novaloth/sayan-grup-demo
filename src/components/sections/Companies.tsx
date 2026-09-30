"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import LoopVideo from "@/components/ui/LoopVideo";
import PillLink from "@/components/ui/PillLink";
import { companies } from "@/lib/companies";

/** Banner sağındaki çentikli kontur deseni. */
function LinePattern() {
  const notch = "M28 196 L373 0 L373 178 L182 286 L255 330 L28 418 L28 236 L65 218 Z";
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute top-[14px] -right-[20px] h-[600px] w-[560px] overflow-visible"
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

export default function Companies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = companies[activeIndex];
  const bannerLogo = active.bannerLogo ?? active.logo;

  return (
    <section id="sirketlerimiz" aria-labelledby="companies-title" className="relative">
      {/* Kırmızı şerit, tam genişlikteki banner videosunun üstüne biner. */}
      <div className="absolute top-0 left-0 z-10 flex h-[663px] w-[241px] items-start rounded-r-[16px] bg-brand pt-10 pl-[27px]">
        <Logo alt="" className="brightness-0 invert" />
      </div>

      <div className="pt-[24px] pb-[32px] pl-[283px]">
        <p className="text-lg leading-none">DEMİR ÇELİKTEN LOJİSTİĞE TEK ÇATI ALTINDA</p>
        <h2 id="companies-title" className="mt-[10px] text-[32px] leading-none font-semibold">
          DENEYİMLER İLE OLUŞAN GÜÇLÜ YAPI
        </h2>
        <p className="mt-[11px] max-w-[640px] text-base leading-[23px] text-ink-deep">
          Sayan Grup çatısı altında faaliyet gösteren şirketlerimiz, farklı sektörlerde güçlü
          çözümler sunarak endüstride iz bırakmaktadır.
        </p>
      </div>

      <div className="relative isolate h-[762px] overflow-hidden bg-ink-deep text-white">
        <LoopVideo
          src={active.bannerVideo}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-ink-deep/90 via-ink-deep/55 to-ink-deep/20"
        />
        <LinePattern />

        <div className="relative pt-[78px] pl-[282px]">
          <Image
            src={bannerLogo.src}
            alt={active.name}
            width={bannerLogo.width}
            height={bannerLogo.height}
          />
          <h3 className="mt-[4px] text-display font-semibold">
            {active.title[0]}
            <br />
            {active.title[1]}
          </h3>
          <p className="mt-[8px] text-base leading-none">{active.description}</p>
          <PillLink href={active.url} tone="light" className="mt-[25px] px-[31px]">
            {active.name}&apos;i ziyaret et
          </PillLink>
        </div>

        <ul className="absolute right-[43px] bottom-[18px] flex gap-5">
          {companies.map((company, index) =>
            index === activeIndex ? null : (
              <li key={company.id}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${company.name} bilgilerini göster`}
                  className="group relative block h-[162px] w-[345px] overflow-hidden text-left"
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
                    className="absolute bottom-[18px] left-[15px]"
                  />
                </button>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
