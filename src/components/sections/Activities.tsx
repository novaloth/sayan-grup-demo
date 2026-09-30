"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Activity = {
  id: string;
  label: string;
  title: [string, string];
  paragraphs: string[];
  bullets?: string[];
  image?: string;
};

// TODO: Yassı Metal, Lojistik ve Yatırım sekmelerinin metin ve görselleri müşteriden bekleniyor.
const activities: Activity[] = [
  {
    id: "demir-celik",
    label: "DEMİR ÇELİK TİCARETİ",
    title: ["Güvenle İnşa Edilen,", "Geleceğe Uzanan Yapılar"],
    paragraphs: [
      "Sektördeki yarım asra yaklaşan köklü tecrübemizle, Türkiye’nin dört bir yanındaki büyük ölçekli projelerin ve yapıların en güçlü destekçisiyiz. İnşaat demirinden çelik hasıra, filmaşinden yapısal profil ürünlerine kadar geniş bir yelpazede sunduğumuz yüksek kaliteli malzemelerle, sektörün ihtiyaçlarına anında ve eksiksiz yanıt veriyoruz.",
      "Bizim için demir çelik ticareti sadece hammadde tedariki değil; doğayla uyum içinde yükselen, sürdürülebilir ve çevre dostu bir geleceğe uzanan sağlam köprüler kurmaktır. Sektörün dinamiklerini yakından takip eden uzman kadromuz, güçlü sermaye yapımız ve kesintisiz stok yönetimimiz sayesinde, iş ortaklarımıza piyasa koşullarında her zaman en rekabetçi, en şeffaf ve en güvenilir çözümleri sunuyoruz.",
    ],
    bullets: [
      "Neler Sunuyoruz? İnşaat demiri, çelik hasır, kangal demir (filmaşin) ve yapısal çelik gruplarında standartlara tam uyumlu, geniş stoklu tedarik.",
    ],
    image: "/images/steel-coils.jpg",
  },
  {
    id: "yassi-metal",
    label: "YASSI METAL",
    title: ["Yassı Metal", "Başlık Metni Eklenecek"],
    paragraphs: ["Yassı Metal açıklama metni eklenecek."],
  },
  {
    id: "lojistik",
    label: "LOJİSTİK",
    title: ["Lojistik", "Başlık Metni Eklenecek"],
    paragraphs: ["Lojistik açıklama metni eklenecek."],
  },
  {
    id: "yatirim",
    label: "YATIRIM",
    title: ["Yatırım", "Başlık Metni Eklenecek"],
    paragraphs: ["Yatırım açıklama metni eklenecek."],
  },
];

export default function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = activities[activeIndex];

  return (
    <section
      id="faaliyet-alanlari"
      aria-labelledby="activities-title"
      className="flex justify-between pt-[60px]"
    >
      <div className="pl-[72px]">
        <SectionLabel>YATIRIMLARA YÖN VEREN</SectionLabel>
        <h2 id="activities-title" className="mt-[8px] pl-[43px] text-display font-semibold">
          FAALİYET ALANLARIMIZ
        </h2>

        <div className="mt-[19px] ml-[41px] h-[263px] w-px bg-brand-soft" aria-hidden />

        <div
          role="tablist"
          aria-label="Faaliyet alanları"
          className="mt-10 flex flex-col gap-[39px] pl-[42px]"
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
                  "flex h-[44px] w-fit items-center gap-[47px] text-left leading-none transition-colors",
                  selected
                    ? "text-[42px] font-bold text-brand"
                    : "text-[43px] font-light hover:text-brand",
                )}
              >
                {activity.label}
                {selected && <MoveRight aria-hidden className="size-[54px]" strokeWidth={1.1} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Görsel sütunu; kart bu sütunun içinde akar ve 185px sola taşar. Kart uzarsa sütun da uzar. */}
      <div className="relative isolate mt-[3px] w-[887px] shrink-0 pt-[153px] pb-[96px]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {active.image ? (
            <Image src={active.image} alt="" fill sizes="887px" className="object-cover" />
          ) : (
            <ImagePlaceholder label={active.label} className="size-full" />
          )}
        </div>

        <div
          id="activity-panel"
          role="tabpanel"
          className="-ml-[185px] min-h-[627px] w-[638px] rounded-[24px] bg-black/60 pt-[45px] pr-[60px] pb-[45px] pl-[61px] text-white backdrop-blur-[2px]"
        >
          <h3 className="text-[35px] leading-[53px] font-light">
            {active.title[0]}
            <br />
            {active.title[1]}
          </h3>
          <div className="mt-[13px] text-base leading-6">
            {active.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {active.bullets && (
            <ul className="mt-6 list-disc pl-6 text-base leading-6">
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
