import type { SiteContent } from "@/types/content";

// TODO: Sosyal medya hesap linkleri ve yasal sayfa adresleri müşteriden bekleniyor.
export const siteContent: SiteContent = {
  nav: [
    { label: "ANASAYFA", href: "/" },
    { label: "KURUMSAL", href: "#kurumsal" },
    { label: "ŞİRKETLERİMİZ", href: "#sirketlerimiz" },
    { label: "MEDYA", href: "#medya" },
    { label: "KARİYER", href: "#kariyer" },
    { label: "İLETİŞİM", href: "#iletisim" },
  ],
  contact: [
    { label: "Adres", value: "Şekerpınar Mh. Muhsinyazıcıoğlu Cd. No:36, Çayırova / Kocaeli" },
    { label: "Telefon", value: "0 532 457 29 26", href: "tel:+905324572926" },
    { label: "E-posta", value: "info@sayangrup.com.tr", href: "mailto:info@sayangrup.com.tr" },
  ],
  socials: [
    { platform: "facebook", label: "Facebook", href: "#" },
    { platform: "instagram", label: "Instagram", href: "#" },
    { platform: "x", label: "X", href: "#" },
    { platform: "youtube", label: "YouTube", href: "#" },
    { platform: "linkedin", label: "LinkedIn", href: "#" },
  ],
  legalLinks: {
    privacy: { label: "Gizlilik Politikası", href: "#" },
    kvkk: { label: "KVKK Aydınlatma Metni", href: "#" },
    cookies: { label: "Çerez Politikası", href: "#" },
  },
  // Tasarımda "Ayrancı Grup" yazıyordu; Sayan Grup olarak düzeltildi.
  copyright: "© 2026 Sayan Grup. Tüm hakları saklıdır.",
  footerCompanyIds: ["dessan", "sayan-metal", "sayan-lojistik", "sayan-investing"],
};
