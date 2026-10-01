"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useActionState } from "react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";
import { pillClass } from "@/components/ui/PillLink";
import type { NavItem, NewsletterContent } from "@/types/content";

type NewsletterProps = {
  content: NewsletterContent;
  /** Onay kutusu metnindeki linkler. */
  consentLinks: { privacy: NavItem; kvkk: NavItem };
};

const initialState: NewsletterState = { status: "idle" };

export default function Newsletter({ content, consentLinks }: NewsletterProps) {
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);

  return (
    <section
      aria-labelledby="newsletter-title"
      className="relative isolate overflow-hidden bg-[#110809] px-(--gutter) py-14 text-white md:py-20 xl:min-h-[515px] xl:px-[74px] xl:pt-[83px] xl:pb-0"
    >
      <Image src={content.background} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      {/* Mobilde metnin okunması için arka planı koyulaştırır. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55 xl:hidden" />

      <p className="text-base leading-none font-semibold md:text-xl xl:text-[23px]">
        {content.eyebrow}
      </p>
      <h2 id="newsletter-title" className="mt-2 text-heading font-semibold xl:mt-[3px]">
        {content.title}
      </h2>
      <p className="mt-3 text-body md:max-w-[625px] xl:mt-[11px]">{content.text}</p>

      {/*
        Gönderim src/app/actions/newsletter.ts içindeki Server Action'a gider.
        Mobilde sıra: e-posta, onay, buton. md+: e-posta ve buton aynı satırda (alt kenarları hizalı),
        onay kutusu e-postanın altında.
      */}
      <form
        action={formAction}
        className="mt-8 grid gap-5 md:grid-cols-[1fr_200px] md:items-end md:gap-x-8 md:gap-y-4 xl:mt-[87px] xl:grid-cols-[calc(500px+254*var(--fp))_226px] xl:gap-x-[66px]"
      >
        <label className="block">
          <span className="sr-only">E-posta adresiniz</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-posta adresiniz"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={state.errors?.email ? "newsletter-email-error" : undefined}
            className="h-12 w-full border-b border-white/30 bg-transparent text-lg font-light outline-none placeholder:text-white/40 focus:border-white md:h-14 md:text-2xl xl:h-[60px] xl:text-[30px]"
          />
          {state.errors?.email && (
            <span id="newsletter-email-error" className="mt-2 block text-sm text-red-300">
              {state.errors.email}
            </span>
          )}
        </label>

        <div className="md:col-start-1 md:row-start-2">
          <label className="flex items-start gap-3 text-xs leading-snug text-white/85 md:text-sm">
            <span className="relative mt-px flex shrink-0">
              <input
                type="checkbox"
                name="consent"
                required
                aria-invalid={Boolean(state.errors?.consent)}
                aria-describedby={state.errors?.consent ? "newsletter-consent-error" : undefined}
                className="peer size-[18px] cursor-pointer appearance-none rounded-[4px] border border-white/70 transition-colors checked:border-white checked:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              />
              <Check
                aria-hidden
                className="pointer-events-none absolute inset-0 m-auto hidden size-3.5 text-ink-deep peer-checked:block"
                strokeWidth={3}
              />
            </span>
            <span>
              <a
                href={consentLinks.privacy.href}
                className="underline underline-offset-2 hover:text-white"
              >
                {consentLinks.privacy.label}
              </a>{" "}
              ve{" "}
              <a
                href={consentLinks.kvkk.href}
                className="underline underline-offset-2 hover:text-white"
              >
                {consentLinks.kvkk.label}
              </a>
              ’ni okudum, onaylıyorum.
            </span>
          </label>
          {state.errors?.consent && (
            <span id="newsletter-consent-error" className="mt-2 block text-sm text-red-300">
              {state.errors.consent}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className={pillClass(
            "light",
            "h-12 w-full text-lg disabled:cursor-wait disabled:opacity-60 md:col-start-2 md:row-start-1 md:h-14 md:text-2xl xl:h-[79px] xl:text-[30px]",
          )}
        >
          ABONE OL
        </button>

        {/* Başarı veya genel hata mesajı; ekran okuyuculara da duyurulur. */}
        <p
          role="status"
          aria-live="polite"
          className="text-sm empty:hidden md:col-span-2 md:text-base"
        >
          {state.message}
        </p>
      </form>
    </section>
  );
}
