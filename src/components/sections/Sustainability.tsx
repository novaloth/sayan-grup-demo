import Image from "next/image";
import { Leaf, Recycle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

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
      // Masaüstü sütunları: başlık 356→609px, görsel 330→530px, metin kalan alan (sağ kenara kadar).
      className="px-(--gutter) pt-12 md:pt-16 xl:grid xl:grid-cols-[calc(356px+253*var(--fp))_calc(330px+200*var(--fp))_1fr] xl:items-start xl:pt-0 xl:pr-0 xl:pl-[74px]"
    >
      <SectionHeading
        label="SÜRDÜRÜLEBİLİRLİK"
        id="sustainability-title"
        className="xl:mt-[156px]"
        titleClassName="xl:mt-[7px]"
      >
        GELECEK İÇİN
        <br />
        YEŞİL ÇELİK
      </SectionHeading>

      <Image
        src="/images/green-steel.png"
        alt="Bitkilerle kaplı krom Sayan logo işareti"
        width={449}
        height={708}
        sizes="(min-width: 1280px) 449px, (min-width: 768px) 240px, 150px"
        className="mx-auto mt-8 h-auto w-[150px] md:w-[240px] xl:mx-0 xl:mt-[55px] xl:w-[calc(300px+149*var(--fp))]"
      />

      <div className="mt-8 xl:mt-[calc(150px+93*var(--fp))]">
        <p className="text-body md:max-w-[645px] xl:pl-[3px]">
          Karbon ayak izimizi azaltmak ve yarınlara daha temiz bir dünya bırakmak için tedarik
          süreçlerimizi optimize ediyoruz. Geri dönüştürülebilir malzemeler ve enerji verimliliği
          odaklı lojistik ağımızla, çeliğin gücünü doğa ile buluşturuyoruz.
        </p>

        <ul className="mt-10 flex flex-col gap-10 md:gap-12 xl:mt-[64px] xl:gap-[63px]">
          {stats.map(({ value, label, caption, icon: Icon, textClass, bgClass }) => (
            <li key={value}>
              {/* Rakamın alt boşluğu şeridin altında kalır; referansta rakam şeride oturur. */}
              <p
                className={cn(
                  "-mb-[6px] text-[40px] leading-none font-bold md:text-5xl xl:-mb-[10px] xl:text-[58px]",
                  textClass,
                )}
              >
                {value}
              </p>
              {/* Şerit ekranın sağ kenarına kadar uzanır. */}
              <p
                className={cn(
                  "-mr-(--gutter) flex h-11 items-center gap-3 pl-4 text-xs font-bold text-white md:h-[49px] xl:mr-0 xl:gap-[19px] xl:pl-[23px] xl:text-sm",
                  bgClass,
                )}
              >
                <Icon aria-hidden className="size-6 xl:size-[27px]" strokeWidth={1.25} />
                {label}
              </p>
              <p className="mt-3 text-body xl:mt-[13px]">{caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
