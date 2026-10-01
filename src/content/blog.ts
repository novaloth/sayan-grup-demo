import type { BlogPost } from "@/types/content";

// TODO: Yazı detay sayfaları hazır olunca href değerleri /medya/<slug> olarak güncellenecek.
export const blogPosts: BlogPost[] = [
  {
    slug: "sayan-lojistik-faaliyetlerine-basladi",
    title: "Sayan Lojistik, Entegre Tedarik Zinciri Yapısıyla Faaliyetlerine Başladı",
    excerpt:
      "Sayan Grup'un dördüncü iştiraki Sayan Lojistik, Kocaeli Çayırova merkezli operasyonlarıyla faaliyetlerine başlıyor. Şirket, grubun mevcut lojistik altyapısını bağımsız bir yapıya kavuşturarak karayolu taşımacılığı, depolama ve dağıtım hizmetlerini tek çatı altında sunuyor.",
    image: "/images/blog-logistics.jpg",
    href: "#",
  },
  {
    slug: "dessan-cayirova-kapasite-artisi",
    title: "Dessan Demir Çelik, Çayırova Tesisinde Kapasite Artışına Gitti",
    excerpt:
      "Dessan Demir Çelik, Kocaeli Çayırova Şekerpınar'daki ana tesisinde gerçekleştirdiği yatırımla depolama alanını genişletti. Yeni düzenlemeyle birlikte tesisin toplam stok kapasitesi önemli ölçüde artırıldı.",
    image: "/images/blog-wind.jpg",
    href: "#",
  },
];
