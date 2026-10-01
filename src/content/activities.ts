import type { Activity } from "@/types/content";

// TODO: Yassı Metal, Lojistik ve Yatırım sekmelerinin metin ve görselleri müşteriden bekleniyor.
export const activities: Activity[] = [
  {
    id: "demir-celik",
    label: "DEMİR ÇELİK TİCARETİ",
    title: ["Güvenle İnşa Edilen,", "Geleceğe Uzanan Yapılar"],
    paragraphs: [
      "Sektördeki yarım asra yaklaşan köklü tecrübemizle, Türkiye’nin dört bir yanındaki büyük ölçekli projelerin ve yapıların en güçlü destekçisiyiz. İnşaat demirinden çelik hasıra, filmaşinden yapısal profil ürünlerine kadar geniş bir yelpazede sunduğumuz yüksek kaliteli malzemelerle, sektörün ihtiyaçlarına anında ve eksiksiz yanıt veriyoruz.",
      "Bizim için demir çelik ticareti sadece hammadde tedariki değil; doğayla uyum içinde yükselen, sürdürülebilir ve çevre dostu bir geleceğe uzanan sağlam köprüler kurmaktır. Sektörün dinamiklerini yakından takip eden uzman kadromuz, güçlü sermaye yapımız ve kesintisiz stok yönetimimiz sayesinde, iş ortaklarımıza piyasa koşullarında her zaman en rekabetçi, en şeffaf ve en güvenilir çözümleri sunuyoruz.",
    ],
    bullets: [
      "Neler Sunuyoruz? İnşaat demiri, çelik hasır, kangal demir (filmaşin) ve yapısal çelik gruplarında standartlara tam uyumlu, geniş stoklu tedarik.",
    ],
    image: "/images/steel-coils.jpg",
  },
  {
    id: "yassi-metal",
    label: "YASSI METAL",
    title: ["Yassı Metal", "Başlık Metni Eklenecek"],
    paragraphs: ["Yassı Metal açıklama metni eklenecek."],
  },
  {
    id: "lojistik",
    label: "LOJİSTİK",
    title: ["Lojistik", "Başlık Metni Eklenecek"],
    paragraphs: ["Lojistik açıklama metni eklenecek."],
  },
  {
    id: "yatirim",
    label: "YATIRIM",
    title: ["Yatırım", "Başlık Metni Eklenecek"],
    paragraphs: ["Yatırım açıklama metni eklenecek."],
  },
];
