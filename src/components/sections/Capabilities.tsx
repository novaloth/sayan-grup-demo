import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Capabilities() {
  return (
    <section
      aria-labelledby="capabilities-title"
      className="py-10 md:py-14 xl:pt-[50px] xl:pb-[62px]"
    >
      {/* Masaüstünde şekil yüksekliği 411→650px; görsel yüksekliğe uyup sağa yaslanır. */}
      <div className="relative overflow-hidden bg-surface xl:ml-[26px] xl:h-[calc(411px+239*var(--fp))] xl:rounded-l-[calc(206px+119*var(--fp))]">
        <div className="relative px-(--gutter) pt-10 pb-8 md:pt-14 md:pb-10 xl:pt-[calc(60px+111*var(--fp))] xl:pr-0 xl:pb-0 xl:pl-[calc(100px+50*var(--fp))]">
          <SectionHeading
            label="DESSAN & SAYAN METAL İLE"
            id="capabilities-title"
            titleClassName="xl:mt-[7px] xl:pl-[44px]"
          >
            SANAYİYE ŞEKİL VEREN
            <br />
            ESNEK GÜCÜMÜZ
          </SectionHeading>
          <p className="mt-3 pl-(--label-indent) text-body md:max-w-[calc(612px+var(--label-indent))] xl:mt-[2px] xl:max-w-[calc(514px+142*var(--fp))] xl:pl-[44px]">
            Üretimin ve ağır sanayinin kalbinde yer alan yassı metal ihtiyaçlarınız için yenilikçi,
            hassas ve sürdürülebilir çözümler sunuyoruz. Otomotivden beyaz eşyaya, makine
            imalatından inşaata kadar geniş bir yelpazede; sıcak/soğuk haddelenmiş sac, boyalı sac
            ve entegre metal işleme hizmetlerimizle projelerinize tam ölçülü destek sağlıyoruz.
            İhtiyacınız olan esneklik ve güç, tek çatı altında.
          </p>
        </div>
        <Image
          src="/images/metal-plates.png"
          alt="Üst üste duran parlak metal saclar"
          width={950}
          height={650}
          sizes="(min-width: 1280px) 50vw, 100vw"
          className="block h-auto w-full xl:absolute xl:top-0 xl:right-0 xl:h-full xl:w-auto"
        />
      </div>
    </section>
  );
}
