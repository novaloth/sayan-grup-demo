import Image from "next/image";
import { Building } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
  image?: string;
  icon?: React.ReactNode;
};

function StatCard({ value, label, className, image, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        "relative isolate flex h-[166px] flex-col justify-end overflow-hidden bg-white pb-[27px] pl-[31px]",
        className,
      )}
    >
      {image && (
        <>
          <Image src={image} alt="" fill sizes="587px" className="-z-20 object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-white/55" />
        </>
      )}
      {icon}
      <p className="text-[46px] leading-none font-bold">{value}</p>
      <p className="mt-[10px] text-[17px] leading-none">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section aria-labelledby="stats-title" className="relative h-[650px] bg-ink text-white">
      <h2
        id="stats-title"
        className="absolute top-[142px] left-[72px] text-[83px] leading-[96px] font-black"
      >
        <span className="text-outline">KÖKLÜ GEÇMİŞ,</span>
        <br />
        DİNAMİK <span className="text-outline">VE</span>
        <br />
        SÜRDÜRÜLEBİLİR
        <br />
        <span className="text-outline">TEDARİK</span>
      </h2>

      <div className="absolute top-[98px] left-[891px] w-[952px]">
        <p className="ml-[323px] max-w-[612px] text-base leading-6">
          37 yıllık tecrübemizi, geleceğin teknolojileri ve doğa dostu çözümlerle harmanlıyoruz.
          Sürdürülebilirlik ilkelerinden ödün vermeden, çeliğin sarsılmaz gücünü, 81 ile uzanan
          kusursuz bir lojistik ağıyla projelerinize ulaştırıyoruz.
        </p>

        <div className="mt-[73px] flex flex-col gap-4 text-ink">
          <div className="flex gap-[21px]">
            <StatCard
              value="37 +"
              label="YIL TECRÜBE"
              image="/images/stat-climber.jpg"
              className="w-[587px] rounded-tl-[16px]"
            />
            <StatCard value="81" label="İLDE HİZMET" className="w-[346px]" />
          </div>
          <div className="flex gap-[21px]">
            <StatCard
              value="4"
              label="GRUP ŞİRKETİ"
              className="w-[346px]"
              icon={
                <Building
                  aria-hidden
                  className="absolute top-[18px] left-[31px] size-[48px]"
                  strokeWidth={1.25}
                />
              }
            />
            <StatCard
              value="800+"
              label="MÜŞTERİ"
              image="/images/stat-handshake.jpg"
              className="w-[587px] rounded-br-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
