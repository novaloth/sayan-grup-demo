import Image from "next/image";
import type { SiteContent, SocialContent, SocialPlatform } from "@/types/content";

/**
 * Sosyal medya ikonları (basit, özgün çizgiler; lucide sürümünde marka ikonları bulunmuyor).
 * Her biri 24x24'lük ortak bir <svg> içine yerleştirilir.
 */
const socialIcons: Record<SocialPlatform, React.ReactNode> = {
  facebook: (
    <>
      <circle cx="12" cy="12" r="11" />
      <path d="M13.2 21v-7.3h2.3l.4-2.8h-2.7V9.2c0-.8.3-1.4 1.4-1.4H16V5.3a17 17 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2h-2.4v2.8h2.4V21" />
    </>
  ),
  instagram: (
    <>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="18" cy="6" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  x: <path d="M2 2h5.5L22 22h-5.5zM21.5 2l-8 8.8M10.5 13.2 2.5 22" />,
  youtube: (
    <>
      <rect x="1.5" y="4.5" width="21" height="15" rx="4" />
      <path d="M10 9v6l5-3z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="1.5" y="1.5" width="21" height="21" />
      <path d="M7 10v7M7 7v.5M11 17v-7M11 13c0-2 1.3-3 2.8-3S17 11 17 13v4" />
    </>
  ),
};

type SocialProps = {
  content: SocialContent;
  socials: SiteContent["socials"];
};

export default function Social({ content, socials }: SocialProps) {
  return (
    <section
      aria-labelledby="social-title"
      className="relative bg-brand-dark px-(--gutter) py-12 text-white md:py-16 xl:min-h-[292px] xl:px-[75px] xl:pt-[42px] xl:pb-10"
    >
      {/* Masaüstünde krom işaret 280→390px; alttan sabit, bültenin üstüne taşar. */}
      <Image
        src="/images/chrome-mark.png"
        alt=""
        width={351}
        height={553}
        sizes="390px"
        className="pointer-events-none absolute right-[79px] bottom-[12px] z-10 hidden h-auto w-[calc(280px+110*var(--fp))] xl:block"
      />

      <p className="text-sm leading-tight font-semibold md:text-lg xl:text-2xl xl:leading-none">
        {content.eyebrow}
      </p>
      <h2 id="social-title" className="mt-2 text-heading font-semibold xl:mt-[13px]">
        {content.title}
      </h2>

      <div className="mt-6 flex flex-col gap-6 xl:mt-[16px] xl:flex-row xl:items-start xl:gap-0">
        <ul className="flex gap-6 xl:mt-[23px] xl:w-[409px] xl:shrink-0 xl:gap-[30px]">
          {socials.map(({ platform, label, href }) => (
            <li key={platform}>
              <a
                href={href}
                aria-label={label}
                className="block transition-opacity hover:opacity-70"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="size-[26px]"
                  aria-hidden
                >
                  {socialIcons[platform]}
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-body md:max-w-[640px] xl:max-w-[calc(430px+485*var(--fp))]">
          {content.text}
        </p>
      </div>
    </section>
  );
}
