import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import LogoMark from "@/components/ui/LogoMark";
import { companies } from "@/lib/companies";
import { mainNav } from "@/lib/site";

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
      <div className="relative isolate h-[631px] overflow-hidden bg-linear-to-b from-[#2f3438] to-[#262b2f] px-[73px] pt-[69px] text-white">
        <LogoMark
          className="absolute top-[16px] right-[38px] -z-10 h-[520px] w-[330px]"
          fill="rgba(255,255,255,0.035)"
        />

        <div className="flex items-start justify-between">
          <Logo width={339} height={162} />
          <ul className="mr-[18px] flex flex-col items-end gap-[26px]">
            {footerCompanies.map(({ id, name, logo }) => (
              <li key={id}>
                <Image src={logo.src} alt={name} width={logo.width} height={logo.height} />
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Alt menü" className="mt-[87px] mr-[30px]">
          <ul className="flex justify-between text-[43px] leading-none font-light">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-opacity hover:opacity-70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative -mt-[73px] px-[73px]">
        <address className="mr-[17px] grid h-[147px] grid-cols-[629px_262px_1fr] content-center rounded-[24px] bg-white pl-[61px] not-italic shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {contact.map(({ label, value, href }) => {
            const Value = href ? "a" : "p";
            return (
              <div key={label}>
                <p className="text-sm leading-none text-brand-dark">{label}</p>
                <Value href={href} className="mt-[7px] block text-base leading-none">
                  {value}
                </Value>
              </div>
            );
          })}
        </address>

        <div className="flex items-center justify-between pt-[28px] pr-[21px] pb-[34px] pl-[2px] text-lg">
          <p className="flex items-center gap-5">
            {/* Tasarımda "Ayrancı Grup" yazıyordu; Sayan Grup olarak düzeltildi. */}
            <span>© 2026 Sayan Grup. Tüm hakları saklıdır.</span>
            {legal.map((item) => (
              <span key={item} className="flex items-center gap-5">
                <span aria-hidden className="text-brand">
                  |
                </span>
                <Link href="#" className="hover:text-brand">
                  {item}
                </Link>
              </span>
            ))}
          </p>
          <Image src="/images/nowismedia.png" alt="nowismedia" width={147} height={29} />
        </div>
      </div>
    </footer>
  );
}
