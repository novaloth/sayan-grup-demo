import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Capabilities() {
  return (
    <section aria-labelledby="capabilities-title" className="pt-[50px] pb-[62px]">
      <div className="relative ml-[26px] h-[650px] overflow-hidden rounded-l-[325px] bg-surface">
        <Image
          src="/images/metal-plates.png"
          alt="Üst üste duran parlak metal saclar"
          width={950}
          height={650}
          className="absolute top-0 right-0"
        />
        <div className="relative pt-[171px] pl-[150px]">
          <SectionLabel>DESSAN &amp; SAYAN METAL İLE</SectionLabel>
          <div className="pl-[44px]">
            <h2 id="capabilities-title" className="mt-[7px] text-display font-semibold">
              SANAYİYE ŞEKİL VEREN
              <br />
              ESNEK GÜCÜMÜZ
            </h2>
            <p className="mt-[2px] max-w-[612px] text-base leading-[23px]">
              Üretimin ve ağır sanayinin kalbinde yer alan yassı metal ihtiyaçlarınız için
              yenilikçi, hassas ve sürdürülebilir çözümler sunuyoruz. Otomotivden beyaz eşyaya,
              makine imalatından inşaata kadar geniş bir yelpazede; sıcak/soğuk haddelenmiş sac,
              boyalı sac ve entegre metal işleme hizmetlerimizle projelerinize tam ölçülü destek
              sağlıyoruz. İhtiyacınız olan esneklik ve güç, tek çatı altında.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
