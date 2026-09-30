"use client";

import Image from "next/image";

export default function Newsletter() {
  return (
    <section
      aria-labelledby="newsletter-title"
      className="relative isolate h-[515px] overflow-hidden bg-[#110809] px-[74px] pt-[83px] text-white"
    >
      <Image
        src="/images/newsletter-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <p className="text-[23px] leading-none font-semibold">ABONE OL</p>
      <h2 id="newsletter-title" className="mt-[3px] text-display font-semibold">
        SEKTÖRÜN NABZINI BİZİMLE TUTUN
      </h2>
      <p className="mt-[11px] max-w-[625px] text-base leading-[23px]">
        Sayan Grup e-bültenine abone olun; demir-çelik piyasalarındaki güncel gelişmelerden,
        lojistik ağımızdaki yeniliklerden ve stratejik yatırımlarımızdan ilk siz haberdar olun.
        Tecrübemizi e-posta kutunuza taşıyın.
      </p>

      {/* Form şimdilik yalnızca görünüm; gönderim altyapısı belirlenince bağlanacak. */}
      <form className="mt-[87px] flex items-end gap-[66px]" onSubmit={(e) => e.preventDefault()}>
        <label className="w-[754px]">
          <span className="sr-only">E-posta adresiniz</span>
          <input
            type="email"
            required
            placeholder="E-posta adresiniz"
            className="h-[60px] w-full border-b border-white/30 bg-transparent text-[30px] font-light outline-none placeholder:text-white/40 focus:border-white"
          />
        </label>
        <button
          type="submit"
          className="h-[79px] w-[226px] rounded-full border border-white text-[30px] font-light transition-colors hover:bg-white hover:text-brand-dark"
        >
          ABONE OL
        </button>
      </form>
    </section>
  );
}
