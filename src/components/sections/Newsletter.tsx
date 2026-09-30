"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { pillClass } from "@/components/ui/PillLink";

export default function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-title"
      className="relative isolate overflow-hidden bg-[#110809] px-(--gutter) py-14 text-white md:py-20 xl:min-h-[515px] xl:px-[74px] xl:pt-[83px] xl:pb-0"
    >
      <Image
        src="/images/newsletter-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Mobilde metnin okunması için arka planı koyulaştırır. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55 xl:hidden" />

      <p className="text-base leading-none font-semibold md:text-xl xl:text-[23px]">ABONE OL</p>
      <h2 id="newsletter-title" className="mt-2 text-heading font-semibold xl:mt-[3px]">
        SEKTÖRÜN NABZINI BİZİMLE TUTUN
      </h2>
      <p className="mt-3 text-body md:max-w-[625px] xl:mt-[11px]">
        Sayan Grup e-bültenine abone olun; demir-çelik piyasalarındaki güncel gelişmelerden,
        lojistik ağımızdaki yeniliklerden ve stratejik yatırımlarımızdan ilk siz haberdar olun.
        Tecrübemizi e-posta kutunuza taşıyın.
      </p>

      {/* Form şimdilik yalnızca görünüm; gönderim altyapısı belirlenince bağlanacak. */}
      {/*
        Mobilde sıra: e-posta, onay, buton. md+: e-posta ve buton aynı satırda (alt kenarları hizalı),
        onay kutusu e-postanın altında.
      */}
      <form
        className="mt-8 grid gap-5 md:grid-cols-[1fr_200px] md:items-end md:gap-x-8 md:gap-y-4 xl:mt-[87px] xl:grid-cols-[calc(500px+254*var(--fp))_226px] xl:gap-x-[66px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block">
          <span className="sr-only">E-posta adresiniz</span>
          <input
            type="email"
            required
            placeholder="E-posta adresiniz"
            className="h-12 w-full border-b border-white/30 bg-transparent text-lg font-light outline-none placeholder:text-white/40 focus:border-white md:h-14 md:text-2xl xl:h-[60px] xl:text-[30px]"
          />
        </label>

        <label className="flex items-start gap-3 text-xs leading-snug text-white/85 md:col-start-1 md:row-start-2 md:text-sm">
          <span className="relative mt-px flex shrink-0">
            <input
              type="checkbox"
              required
              className="peer size-[18px] cursor-pointer appearance-none rounded-[4px] border border-white/70 transition-colors checked:border-white checked:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            />
            <Check
              aria-hidden
              className="pointer-events-none absolute inset-0 m-auto hidden size-3.5 text-ink-deep peer-checked:block"
              strokeWidth={3}
            />
          </span>
          <span>
            {/* TODO: Metin linkleri, sayfalar hazır olunca bağlanacak. */}
            <a href="#" className="underline underline-offset-2 hover:text-white">
              Gizlilik Politikası
            </a>{" "}
            ve{" "}
            <a href="#" className="underline underline-offset-2 hover:text-white">
              KVKK Aydınlatma Metni
            </a>
            ’ni okudum, onaylıyorum.
          </span>
        </label>

        <button
          type="submit"
          className={pillClass(
            "light",
            "h-12 w-full text-lg md:col-start-2 md:row-start-1 md:h-14 md:text-2xl xl:h-[79px] xl:text-[30px]",
          )}
        >
          ABONE OL
        </button>
      </form>
    </section>
  );
}
