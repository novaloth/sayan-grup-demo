import type { Company } from "@/types/content";

// TODO: Dessan, Sayan Investing ve Sayan Lojistik metinleri ile şirket linkleri müşteriden bekleniyor.
export const companies: Company[] = [
  {
    id: "sayan-metal",
    name: "Sayan Metal",
    logo: { src: "/images/companies/sayan-metal-metallic.png", width: 415, height: 60 },
    bannerLogo: { src: "/images/companies/sayan-metal.png", width: 444, height: 65 },
    thumbLogo: { src: "/images/companies/sayan-metal-metallic.png", width: 208, height: 30 },
    bannerVideo: "/videos/sayan-metal.mp4",
    title: ["YASSI METAL GRUBUNDA", "GÜVENİLİR TEDARİK"],
    description: "Profil, boru ve sac ürünlerinde geniş stok ve hızlı teslimat ile yanınızdayız.",
    url: "#",
  },
  {
    id: "dessan",
    name: "Dessan",
    logo: { src: "/images/companies/dessan-metallic.png", width: 273, height: 60 },
    thumbLogo: { src: "/images/companies/dessan.png", width: 137, height: 30 },
    bannerVideo: "/videos/dessan.mp4",
    thumbVideo: "/videos/dessan-thumb.mp4",
    title: ["DESSAN BAŞLIK METNİ", "EKLENECEK"],
    description: "Dessan açıklama metni eklenecek.",
    url: "#",
  },
  {
    id: "sayan-investing",
    name: "Sayan Investing",
    logo: { src: "/images/companies/sayan-investing-metallic.png", width: 530, height: 60 },
    thumbLogo: { src: "/images/companies/sayan-investing.png", width: 265, height: 30 },
    bannerVideo: "/videos/sayan-investing.mp4",
    title: ["SAYAN INVESTING BAŞLIK", "METNİ EKLENECEK"],
    description: "Sayan Investing açıklama metni eklenecek.",
    url: "#",
  },
  {
    id: "sayan-lojistik",
    name: "Sayan Lojistik",
    logo: { src: "/images/companies/sayan-lojistik-metallic.png", width: 472, height: 60 },
    thumbLogo: { src: "/images/companies/sayan-lojistik.png", width: 236, height: 30 },
    bannerVideo: "/videos/sayan-lojistik.mp4",
    title: ["SAYAN LOJİSTİK BAŞLIK", "METNİ EKLENECEK"],
    description: "Sayan Lojistik açıklama metni eklenecek.",
    url: "#",
  },
];
