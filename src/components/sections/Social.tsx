import Image from "next/image";

// Basit, özgün çizgi ikonlar (lucide sürümünde marka ikonları bulunmuyor).
// TODO: Sosyal medya hesap linkleri müşteriden bekleniyor.
const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <>
        <circle cx="12" cy="12" r="11" />
        <path d="M13.2 21v-7.3h2.3l.4-2.8h-2.7V9.2c0-.8.3-1.4 1.4-1.4H16V5.3a17 17 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2h-2.4v2.8h2.4V21" />
      </>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="1.5" y="1.5" width="21" height="21" rx="6" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="18" cy="6" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: <path d="M2 2h5.5L22 22h-5.5zM21.5 2l-8 8.8M10.5 13.2 2.5 22" />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="1.5" y="4.5" width="21" height="15" rx="4" />
        <path d="M10 9v6l5-3z" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <>
        <rect x="1.5" y="1.5" width="21" height="21" />
        <path d="M7 10v7M7 7v.5M11 17v-7M11 13c0-2 1.3-3 2.8-3S17 11 17 13v4" />
      </>
    ),
  },
];

export default function Social() {
  return (
    <section aria-labelledby="social-title" className="relative h-[292px] bg-brand-dark text-white">
      <Image
        src="/images/chrome-mark.png"
        alt=""
        width={351}
        height={553}
        className="pointer-events-none absolute -top-[273px] right-[79px] z-10"
      />

      <div className="px-[75px] pt-[42px]">
        <p className="text-2xl leading-none font-semibold">GÜÇLÜ AĞIMIZA DİJİTALDE DE KATILIN</p>
        <h2 id="social-title" className="mt-[13px] text-display font-semibold">
          BİZİ TAKİP EDİN
        </h2>

        <div className="mt-[16px] flex items-start">
          <ul className="mt-[23px] flex w-[409px] gap-[30px]">
            {socials.map(({ name, href, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
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
                    {icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="max-w-[915px] text-base leading-[23px]">
            37 yıllık sektörel tecrübemizi, yeni yatırımlarımızı ve Sayan Grup çatısı altındaki son
            gelişmeleri dijital platformlara taşıyoruz. Demir çelik, lojistik ve yatırım dünyasına
            dair güncel haberleri ilk elden öğrenmek, kurumsal vizyonumuza yakından tanık olmak için
            bizi sosyal medya hesaplarımızdan takip edin. İş ağımızın bir parçası olun.
          </p>
        </div>
      </div>
    </section>
  );
}
