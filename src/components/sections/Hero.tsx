import LogoMark from "@/components/ui/LogoMark";
import LoopVideo from "@/components/ui/LoopVideo";
import SiteHeader from "@/components/sections/SiteHeader";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      // İlk açılışta ekranı tam doldurur; 900px yüksek ekranda tasarımla birebir.
      className="relative isolate h-svh min-h-[600px] overflow-hidden bg-black text-white xl:min-h-[640px] xl:rounded-b-[50px]"
    >
      <LoopVideo
        src="/videos/hero.mp4"
        eager
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/25" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-transparent to-black/40 xl:bg-linear-to-r xl:from-black/55 xl:to-black/45"
      />
      <LogoMark
        className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[266px] -translate-x-1/2 -translate-y-1/2 md:h-[640px] md:w-[405px] xl:top-[25px] xl:right-[38px] xl:left-auto xl:h-[780px] xl:w-[494px] xl:translate-x-0 xl:translate-y-0"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.18)"
      />

      <SiteHeader />

      {/* Metin alttan konumlanır ki kısa ekranlarda kesilmesin (masaüstünde alt boşluk 107px). */}
      <div className="absolute inset-x-(--gutter) bottom-[88px] md:bottom-[120px] xl:inset-x-auto xl:bottom-[107px] xl:left-[72px]">
        <h1 id="hero-title">
          <span className="block text-xl leading-none font-light md:text-4xl xl:text-5xl xl:tracking-[0.01em]">
            1987’DEN BERİ
          </span>
          <span className="mt-1.5 block text-[30px] leading-none font-bold md:mt-2 md:text-[64px] xl:mt-[9px] xl:text-[94px] xl:tracking-[-0.012em]">
            GÜVENİN ADRESİ
          </span>
        </h1>
        <p className="mt-5 max-w-[560px] text-sm leading-[19px] md:text-base md:leading-6 xl:mt-[25px] xl:leading-[19px]">
          Sayan Grup, 1987 yılında Yönetim Kurulu Başkanımız Sinan Ayan&apos;ın liderliğinde inşaat
          demiri ticaretiyle sektöre adım attı. Yıllar içinde edindiğimiz deneyim ve kurduğumuz
          güvene dayalı ilişkiler sayesinde faaliyet alanlarımızı genişleterek bugünkü yapımıza
          ulaştık.
        </p>
      </div>
    </section>
  );
}
