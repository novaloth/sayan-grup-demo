import LoopVideo from "@/components/ui/LoopVideo";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="kurumsal" aria-labelledby="about-title" className="px-[72px] pt-[103px] pb-[60px]">
      <div className="grid grid-cols-[655px_467px_1fr] items-start">
        <div>
          <SectionLabel tone="ink">4 ŞİRKET, 37 YIL, TEK VİZYON:</SectionLabel>
          <h2 id="about-title" className="mt-[5px] pl-[43px] text-display font-semibold">
            DEMİR ÇELİK
            <br />
            SEKTÖRÜNÜN
            <br />
            GÜVENİLİR GÜCÜ
          </h2>
        </div>
        <LoopVideo
          src="/videos/bridge.mp4"
          className="mt-[25px] h-[329px] w-[467px] object-cover"
        />
        {/* Metin, video kutusunun dikey ortasına hizalanır. */}
        <div className="mt-[25px] ml-5 flex h-[329px] max-w-[625px] flex-col justify-center gap-[23px] text-base leading-[23px]">
          <p>
            Sayan Grup’un hikayesi, 1987 yılında başlayan demir-çelik yolculuğuna dayanıyor. Yıllar
            içinde edindiğimiz sektör deneyimini; gelişen ürün grupları, güçlü tedarik yapısı ve
            yeni faaliyet alanlarıyla ileri taşıyoruz.
          </p>
          <p>
            Bugün odağımızı özellikle demir-çelik sektöründeki uzmanlığımızı derinleştirmeye, yassı
            çelik ve levha alanındaki çalışmalarımızı geliştirmeye yöneltiyoruz. Geçmişten aldığımız
            deneyimi korurken geleceğin ihtiyaçlarına bugünden hazırlanıyor, büyümemizi doğru
            yatırımlar ve gelişen yetkinlikler üzerine kuruyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
