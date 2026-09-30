import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LogoMark from "@/components/ui/LogoMark";
import { companies } from "@/lib/companies";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Footer'da şirket logolarının tasarımdaki sırası. */
const footerCompanyOrder = ["dessan", "sayan-metal", "sayan-lojistik", "sayan-investing"];
const footerCompanies = footerCompanyOrder.map((id) => companies.find((c) => c.id === id)!);

const contact = [
  { label: "Adres", value: "Şekerpınar Mh. Muhsinyazıcıoğlu Cd. No:36, Çayırova / Kocaeli" },
  { label: "Telefon", value: "0 532 457 29 26", href: "tel:+905324572926" },
  { label: "E-posta", value: "info@sayangrup.com.tr", href: "mailto:info@sayangrup.com.tr" },
];

const legal = ["Gizlilik Politikası", "KVKK Aydınlatma Metni", "Çerez Politikası"];

export default function Footer() {
  return (
    <footer id="iletisim">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-[#2f3438] to-[#262b2f] px-(--gutter) pt-12 pb-24 text-white md:pt-16 md:pb-28 xl:min-h-[631px] xl:px-[73px] xl:pt-[69px] xl:pb-0">
        <LogoMark
          className="absolute top-[40px] -right-[40px] -z-10 h-[300px] w-[190px] xl:top-[16px] xl:right-[38px] xl:h-[520px] xl:w-[330px]"
          fill="rgba(255,255,255,0.035)"
        />

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Logo width={339} height={162} className="h-auto w-[200px] md:w-[260px] xl:w-[339px]" />
          <ul className="flex flex-col items-start gap-3 md:items-end xl:mr-[18px] xl:gap-[26px]">
            {footerCompanies.map(({ id, name, logo }) => (
              <li key={id}>
                <Image
                  src={logo.src}
                  alt={name}
                  width={logo.width}
                  height={logo.height}
                  className="h-[30px] w-auto md:h-[40px] xl:h-auto"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Masaüstünde menü yazısı 1280'de 32px'e iner ki tek satıra sığsın. */}
        <nav aria-label="Alt menü" className="mt-10 md:mt-14 xl:mt-[87px] xl:mr-[30px]">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-lg leading-none font-light md:flex md:flex-wrap md:justify-between md:text-2xl xl:flex-nowrap xl:text-[calc(32px+11*var(--fp))]">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative -mt-16 px-(--gutter) md:-mt-20 xl:-mt-[73px] xl:px-[73px]">
        <address className="grid gap-5 rounded-[20px] bg-white p-6 not-italic shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:grid-cols-3 md:p-8 xl:mr-[17px] xl:h-[147px] xl:grid-cols-[calc(480px+149*var(--fp))_calc(220px+42*var(--fp))_1fr] xl:content-center xl:gap-0 xl:rounded-[24px] xl:py-0 xl:pr-0 xl:pl-[61px]">
          {contact.map(({ label, value, href }) => {
            const Value = href ? "a" : "p";
            return (
              <div key={label}>
                <p className="text-xs leading-none text-brand-dark md:text-sm">{label}</p>
                <Value
                  href={href}
                  className={cn(
                    "mt-1.5 block text-sm leading-snug md:text-base xl:mt-[7px] xl:leading-none",
                    href && "link-underline w-fit",
                  )}
                >
                  {value}
                </Value>
              </div>
            );
          })}
        </address>

        <div className="flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between xl:pt-[28px] xl:pr-[21px] xl:pb-[34px] xl:pl-[2px] xl:text-[calc(15px+3*var(--fp))]">
          <p className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
            {/* Tasarımda "Ayrancı Grup" yazıyordu; Sayan Grup olarak düzeltildi. */}
            <span>© 2026 Sayan Grup. Tüm hakları saklıdır.</span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-5">
              {legal.map((item, i) => (
                <span key={item} className="flex items-center gap-3 md:gap-5">
                  <span aria-hidden className={cn("text-brand", i === 0 && "hidden md:inline")}>
                    |
                  </span>
                  <Link href="#" className="link-underline">
                    {item}
                  </Link>
                </span>
              ))}
            </span>
          </p>
          <Image
            src="/images/nowismedia.png"
            alt="nowismedia"
            width={147}
            height={29}
            className="h-auto w-[120px] md:w-[147px]"
          />
        </div>
      </div>
    </footer>
  );
}
