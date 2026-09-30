import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LogoMark from "@/components/ui/LogoMark";
import LoopVideo from "@/components/ui/LoopVideo";
import { mainNav } from "@/lib/site";

function NavList({ items }: { items: typeof mainNav }) {
  return (
    <ul className="flex gap-8">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="transition-opacity hover:opacity-70">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate h-[900px] overflow-hidden rounded-b-[50px] bg-black text-white"
    >
      <LoopVideo
        src="/videos/hero.mp4"
        eager
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/25" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/55 via-transparent to-black/45"
      />
      <LogoMark
        className="absolute top-[25px] right-[38px] -z-10 h-[780px] w-[494px]"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.18)"
      />

      <header className="border-b border-brand">
        <div className="relative mx-auto flex h-[139px] max-w-[1440px] items-center justify-between text-lg leading-none">
          <nav aria-label="Ana menü">
            <NavList items={mainNav.slice(0, 4)} />
          </nav>

          {/* Referansta logo tam ortada değil, 9px solda duruyor. */}
          <Link href="/" className="absolute top-[28px] left-1/2 -ml-[96px]">
            <Logo />
          </Link>

          <div className="flex items-center gap-8">
            <NavList items={mainNav.slice(4)} />
            <div role="group" aria-label="Dil seçimi" className="flex items-center gap-5">
              <button type="button" aria-pressed="true" className="font-bold">
                TR
              </button>
              <span aria-hidden className="h-[26px] w-px bg-white/80" />
              <button type="button" aria-pressed="false" className="font-bold text-white/50">
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="absolute top-[541px] left-[72px]">
        <h1 id="hero-title">
          <span className="block text-5xl leading-none font-light tracking-[0.01em]">
            1987’DEN BERİ
          </span>
          <span className="mt-[9px] block text-[94px] leading-none font-bold tracking-[-0.012em]">
            GÜVENİN ADRESİ
          </span>
        </h1>
        <p className="mt-[25px] max-w-[560px] text-base leading-[19px]">
          Sayan Grup, 1987 yılında Yönetim Kurulu Başkanımız Sinan Ayan&apos;ın liderliğinde inşaat
          demiri ticaretiyle sektöre adım attı. Yıllar içinde edindiğimiz deneyim ve kurduğumuz
          güvene dayalı ilişkiler sayesinde faaliyet alanlarımızı genişleterek bugünkü yapımıza
          ulaştık.
        </p>
      </div>
    </section>
  );
}
