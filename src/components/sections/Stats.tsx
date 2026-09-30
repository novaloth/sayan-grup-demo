import Image from "next/image";
import CountUp from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  image?: string;
  icon?: React.ReactNode;
};

function StatCard({ value, suffix, label, className, image, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        "relative isolate flex h-[120px] flex-col justify-end overflow-hidden bg-white pb-4 pl-4 md:h-[160px] md:pb-6 md:pl-6 xl:h-[calc(150px+16*var(--fp))] xl:pb-[27px] xl:pl-[31px]",
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1280px) 31vw, 50vw"
            className="-z-20 object-cover"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-white/55" />
        </>
      )}
      {icon}
      <p className="text-3xl leading-none font-bold md:text-4xl xl:text-[46px]">
        <CountUp value={value} suffix={suffix} />
      </p>
      <p className="mt-1.5 text-xs leading-none md:text-sm xl:mt-[10px] xl:text-[17px]">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-ink px-(--gutter) py-14 text-white md:py-20 xl:relative xl:h-[650px] xl:p-0"
    >
      <h2
        id="stats-title"
        className="text-[34px] leading-[40px] font-black md:text-[60px] md:leading-[68px] xl:absolute xl:top-[142px] xl:left-[72px] xl:text-[calc(60px+23*var(--fp))] xl:leading-[calc(70px+26*var(--fp))]"
      >
        <span className="text-outline">KÖKLÜ GEÇMİŞ,</span>
        <br />
        DİNAMİK <span className="text-outline">VE</span>
        <br />
        SÜRDÜRÜLEBİLİR
        <br />
        <span className="text-outline">TEDARİK</span>
      </h2>

      {/* Masaüstünde içerik 638→890px'ten başlar, 600→954px genişliğindedir. */}
      <div className="mt-6 md:mt-10 xl:absolute xl:top-[98px] xl:left-[calc(638px+252*var(--fp))] xl:mt-0 xl:w-[calc(600px+354*var(--fp))]">
        <p className="text-body md:max-w-[612px] xl:ml-[calc(200px+124*var(--fp))] xl:leading-6">
          37 yıllık tecrübemizi, geleceğin teknolojileri ve doğa dostu çözümlerle harmanlıyoruz.
          Sürdürülebilirlik ilkelerinden ödün vermeden, çeliğin sarsılmaz gücünü, 81 ile uzanan
          kusursuz bir lojistik ağıyla projelerinize ulaştırıyoruz.
        </p>

        {/* Mobilde 2x2; masaüstünde üst sıra geniş+dar, alt sıra dar+geniş. */}
        <div className="mt-8 grid grid-cols-2 gap-3 text-ink md:gap-4 xl:mt-[73px] xl:grid-cols-[346fr_220fr_346fr] xl:gap-x-[21px] xl:gap-y-4">
          <StatCard
            value={40}
            label="YIL TECRÜBE"
            image="/images/stat-climber.jpg"
            className="rounded-tl-[16px] xl:col-span-2"
          />
          <StatCard value={15} label="İHRACAT ÜLKESİ" />
          <StatCard
            value={81}
            label="İLDE HİZMET"
            icon={
              <Image
                src="/images/icon-building.svg"
                alt=""
                width={54}
                height={54}
                className="absolute top-3 left-4 size-8 md:top-5 md:left-6 md:size-10 xl:top-[calc(12px+6*var(--fp))] xl:left-[31px] xl:size-[calc(36px+12*var(--fp))]"
              />
            }
          />
          <StatCard
            value={800}
            suffix="+"
            label="İŞ ORTAĞI"
            image="/images/stat-handshake.jpg"
            className="rounded-br-[16px] xl:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
