import Image from "next/image";
import { Leaf, Recycle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  {
    value: "%40",
    label: "DAHA AZ KARBON",
    caption: "Optimizasyonlu rota ve lojistik verimlilik modelleriyle.",
    icon: Leaf,
    textClass: "text-eco",
    bgClass: "bg-eco",
  },
  {
    value: "%100",
    label: "GERİ DÖNÜŞÜM",
    caption: "Döngüsel ekonomi prensipleriyle yönetilen hammadde döngüsü.",
    icon: Recycle,
    textClass: "text-ink",
    bgClass: "bg-ink",
  },
];

export default function Sustainability() {
  return (
    <section
      id="surdurulebilirlik"
      aria-labelledby="sustainability-title"
      className="relative h-[763px]"
    >
      <Image
        src="/images/green-steel.png"
        alt="Bitkilerle kaplı krom Sayan logo işareti"
        width={449}
        height={708}
        className="absolute top-[55px] left-[683px]"
      />

      <div className="absolute top-[156px] left-[74px]">
        <SectionLabel>SÜRDÜRÜLEBİLİRLİK</SectionLabel>
        <h2 id="sustainability-title" className="mt-[7px] pl-[43px] text-display font-semibold">
          GELECEK İÇİN
          <br />
          YEŞİL ÇELİK
        </h2>
      </div>

      <div className="absolute top-[243px] right-0 left-[1213px]">
        <p className="max-w-[645px] pl-[3px] text-base leading-[23px]">
          Karbon ayak izimizi azaltmak ve yarınlara daha temiz bir dünya bırakmak için tedarik
          süreçlerimizi optimize ediyoruz. Geri dönüştürülebilir malzemeler ve enerji verimliliği
          odaklı lojistik ağımızla, çeliğin gücünü doğa ile buluşturuyoruz.
        </p>

        <ul className="mt-[64px] flex flex-col gap-[63px]">
          {stats.map(({ value, label, caption, icon: Icon, textClass, bgClass }) => (
            <li key={value}>
              {/* Rakamın alt boşluğu şeridin altında kalır; referansta rakam şeride oturur. */}
              <p className={`-mb-[10px] text-[58px] leading-none font-bold ${textClass}`}>
                {value}
              </p>
              <p
                className={`flex h-[49px] items-center gap-[19px] pl-[23px] text-sm font-bold text-white ${bgClass}`}
              >
                <Icon aria-hidden className="size-[27px]" strokeWidth={1.25} />
                {label}
              </p>
              <p className="mt-[13px] text-base leading-[23px]">{caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
