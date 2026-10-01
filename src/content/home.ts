import { activities } from "@/content/activities";
import { blogPosts } from "@/content/blog";
import { companies } from "@/content/companies";
import type { HomeContent } from "@/types/content";

/** Anasayfanın tüm içeriği; bölümler yukarıdan aşağı sayfadaki sırayla listelenmiştir. */
export const homeContent: HomeContent = {
  hero: {
    eyebrow: "1987’DEN BERİ",
    title: "GÜVENİN ADRESİ",
    text: "Sayan Grup, 1987 yılında Yönetim Kurulu Başkanımız Sinan Ayan'ın liderliğinde inşaat demiri ticaretiyle sektöre adım attı. Yıllar içinde edindiğimiz deneyim ve kurduğumuz güvene dayalı ilişkiler sayesinde faaliyet alanlarımızı genişleterek bugünkü yapımıza ulaştık.",
    video: "/videos/hero.mp4",
  },

  about: {
    label: "4 ŞİRKET, 37 YIL, TEK VİZYON:",
    title: ["DEMİR ÇELİK", "SEKTÖRÜNÜN", "GÜVENİLİR GÜCÜ"],
    video: "/videos/bridge.mp4",
    paragraphs: [
      "Sayan Grup’un hikayesi, 1987 yılında başlayan demir-çelik yolculuğuna dayanıyor. Yıllar içinde edindiğimiz sektör deneyimini; gelişen ürün grupları, güçlü tedarik yapısı ve yeni faaliyet alanlarıyla ileri taşıyoruz.",
      "Bugün odağımızı özellikle demir-çelik sektöründeki uzmanlığımızı derinleştirmeye, yassı çelik ve levha alanındaki çalışmalarımızı geliştirmeye yöneltiyoruz. Geçmişten aldığımız deneyimi korurken geleceğin ihtiyaçlarına bugünden hazırlanıyor, büyümemizi doğru yatırımlar ve gelişen yetkinlikler üzerine kuruyoruz.",
    ],
  },

  companies: {
    eyebrow: "GRUP ŞİRKETLERİMİZ",
    title: "BİRLİKTE BÜYÜYEN BİR YAPI",
    text: "Sayan Grup çatısı altında farklı alanlarda faaliyet gösteren şirketlerimiz, ortak bir hedef doğrultusunda grubun gelişimine katkı sağlıyor.",
    items: companies,
  },

  capabilities: {
    label: "DESSAN & SAYAN METAL İLE",
    title: ["SANAYİYE ŞEKİL VEREN", "ESNEK GÜCÜMÜZ"],
    text: "Üretimin ve ağır sanayinin kalbinde yer alan yassı metal ihtiyaçlarınız için yenilikçi, hassas ve sürdürülebilir çözümler sunuyoruz. Otomotivden beyaz eşyaya, makine imalatından inşaata kadar geniş bir yelpazede; sıcak/soğuk haddelenmiş sac, boyalı sac ve entegre metal işleme hizmetlerimizle projelerinize tam ölçülü destek sağlıyoruz. İhtiyacınız olan esneklik ve güç, tek çatı altında.",
    image: {
      src: "/images/metal-plates.png",
      width: 950,
      height: 650,
      alt: "Üst üste duran parlak metal saclar",
    },
  },

  activities: {
    label: "YATIRIMLARA YÖN VEREN",
    title: ["FAALİYET ALANLARIMIZ"],
    items: activities,
  },

  stats: {
    title: [
      [{ text: "KÖKLÜ GEÇMİŞ,", outline: true }],
      [{ text: "DİNAMİK " }, { text: "VE", outline: true }],
      [{ text: "SÜRDÜRÜLEBİLİR" }],
      [{ text: "TEDARİK", outline: true }],
    ],
    text: "37 yıllık tecrübemizi, geleceğin teknolojileri ve doğa dostu çözümlerle harmanlıyoruz. Sürdürülebilirlik ilkelerinden ödün vermeden, çeliğin sarsılmaz gücünü, 81 ile uzanan kusursuz bir lojistik ağıyla projelerinize ulaştırıyoruz.",
    items: [
      { value: 40, label: "YIL TECRÜBE", image: "/images/stat-climber.jpg" },
      { value: 15, label: "İHRACAT ÜLKESİ" },
      { value: 81, label: "İLDE HİZMET", icon: "/images/icon-building.svg" },
      { value: 800, suffix: "+", label: "İŞ ORTAĞI", image: "/images/stat-handshake.jpg" },
    ],
  },

  sustainability: {
    label: "SÜRDÜRÜLEBİLİRLİK",
    title: ["GELECEK İÇİN", "YEŞİL ÇELİK"],
    image: {
      src: "/images/green-steel.png",
      width: 449,
      height: 708,
      alt: "Bitkilerle kaplı krom Sayan logo işareti",
    },
    text: "Karbon ayak izimizi azaltmak ve yarınlara daha temiz bir dünya bırakmak için tedarik süreçlerimizi optimize ediyoruz. Geri dönüştürülebilir malzemeler ve enerji verimliliği odaklı lojistik ağımızla, çeliğin gücünü doğa ile buluşturuyoruz.",
    items: [
      {
        value: "%40",
        label: "DAHA AZ KARBON",
        caption: "Optimizasyonlu rota ve lojistik verimlilik modelleriyle.",
        icon: "leaf",
        tone: "eco",
      },
      {
        value: "%100",
        label: "GERİ DÖNÜŞÜM",
        caption: "Döngüsel ekonomi prensipleriyle yönetilen hammadde döngüsü.",
        icon: "recycle",
        tone: "ink",
      },
    ],
  },

  blog: {
    label: "BLOG & DUYURULAR",
    title: ["SEKTÖREL VİZYON", "VE İÇGÖRÜLER"],
    // TODO: "Tümünü Gör" hedef sayfası hazır olunca güncellenecek.
    allPostsHref: "#",
    posts: blogPosts,
  },

  newsletter: {
    eyebrow: "ABONE OL",
    title: "SEKTÖRÜN NABZINI BİZİMLE TUTUN",
    text: "Sayan Grup e-bültenine abone olun; demir-çelik piyasalarındaki güncel gelişmelerden, lojistik ağımızdaki yeniliklerden ve stratejik yatırımlarımızdan ilk siz haberdar olun. Tecrübemizi e-posta kutunuza taşıyın.",
    background: "/images/newsletter-bg.jpg",
  },

  social: {
    eyebrow: "GÜÇLÜ AĞIMIZA DİJİTALDE DE KATILIN",
    title: "BİZİ TAKİP EDİN",
    text: "37 yıllık sektörel tecrübemizi, yeni yatırımlarımızı ve Sayan Grup çatısı altındaki son gelişmeleri dijital platformlara taşıyoruz. Demir çelik, lojistik ve yatırım dünyasına dair güncel haberleri ilk elden öğrenmek, kurumsal vizyonumuza yakından tanık olmak için bizi sosyal medya hesaplarımızdan takip edin. İş ağımızın bir parçası olun.",
  },
};
