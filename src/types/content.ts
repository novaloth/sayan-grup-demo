/**
 * Sitedeki tüm içeriğin tipleri.
 *
 * İçerik şu an src/content altındaki statik dosyalardan gelir. Backend veya CMS bağlandığında
 * API yanıtları bu tiplere dönüştürülür; bileşenler değişmeden çalışmaya devam eder.
 * Bu yüzden tipler yalnızca düz veri (metin, sayı, dosya yolu, anahtar) içerir; JSX, fonksiyon
 * veya CSS sınıfı içermez.
 */

/** Boyutları bilinen görsel (next/image için genişlik/yükseklik gerekir). */
export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type NavItem = {
  label: string;
  href: string;
};

/** Başlığı ve kısa açıklaması olan bölüm girişleri için ortak yapı. */
export type SectionIntro = {
  /** Başlığın üstündeki küçük etiket (ör. "SÜRDÜRÜLEBİLİRLİK"). */
  label: string;
  /** Başlık satırları; her eleman ayrı satırda gösterilir. */
  title: string[];
};

// ---------------------------------------------------------------------------
// Site geneli (header, footer)
// ---------------------------------------------------------------------------

export type SocialPlatform = "facebook" | "instagram" | "x" | "youtube" | "linkedin";

export type SiteContent = {
  /** Ana menü. Masaüstü header'da ilk 4 öğe logonun soluna, kalanlar sağına yerleşir. */
  nav: NavItem[];
  contact: { label: string; value: string; href?: string }[];
  socials: { platform: SocialPlatform; label: string; href: string }[];
  legalLinks: {
    privacy: NavItem;
    kvkk: NavItem;
    cookies: NavItem;
  };
  copyright: string;
  /** Footer'daki şirket logolarının sırası (Company.id). */
  footerCompanyIds: string[];
};

// ---------------------------------------------------------------------------
// Anasayfa bölümleri
// ---------------------------------------------------------------------------

export type HeroContent = {
  eyebrow: string;
  title: string;
  text: string;
  video: string;
};

export type AboutContent = SectionIntro & {
  video: string;
  paragraphs: string[];
};

export type Company = {
  id: string;
  name: string;
  /** 60px yüksekliğinde metalik logo; footer'da ve (bannerLogo yoksa) banner'da kullanılır. */
  logo: ImageAsset;
  bannerLogo?: ImageAsset;
  /** Küçük kartta gösterilen 30px yüksekliğinde logo. */
  thumbLogo: ImageAsset;
  bannerVideo: string;
  /** Küçük kart videosu; verilmezse bannerVideo kullanılır. */
  thumbVideo?: string;
  title: [string, string];
  description: string;
  url: string;
};

export type CompaniesContent = {
  eyebrow: string;
  title: string;
  text: string;
  items: Company[];
};

export type CapabilitiesContent = SectionIntro & {
  text: string;
  image: ImageAsset;
};

export type Activity = {
  id: string;
  /** Sekme adı. */
  label: string;
  title: [string, string];
  paragraphs: string[];
  bullets?: string[];
  /** Görsel yoksa yer tutucu gösterilir. */
  image?: string;
};

export type ActivitiesContent = SectionIntro & {
  items: Activity[];
};

/** Başlıkta bir parça; outline true ise içi boş (kontur) yazılır. */
export type TitleSegment = {
  text: string;
  outline?: boolean;
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  /** Kartın arka plan görseli (soluk gösterilir). */
  image?: string;
  /** Kartın sol üstündeki ikon. */
  icon?: string;
};

export type StatsContent = {
  /** Satır satır başlık; her satır bir veya birkaç parçadan oluşur. */
  title: TitleSegment[][];
  text: string;
  /**
   * Tam 4 kart beklenir: masaüstünde 1. ve 4. kart geniş, 2. ve 3. kart dar gösterilir.
   */
  items: StatItem[];
};

export type SustainabilityItem = {
  value: string;
  label: string;
  caption: string;
  icon: "leaf" | "recycle";
  tone: "eco" | "ink";
};

export type SustainabilityContent = SectionIntro & {
  image: ImageAsset;
  text: string;
  items: SustainabilityItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export type BlogContent = SectionIntro & {
  allPostsHref: string;
  posts: BlogPost[];
};

export type NewsletterContent = {
  eyebrow: string;
  title: string;
  text: string;
  background: string;
};

export type SocialContent = {
  eyebrow: string;
  title: string;
  text: string;
};

export type HomeContent = {
  hero: HeroContent;
  about: AboutContent;
  companies: CompaniesContent;
  capabilities: CapabilitiesContent;
  activities: ActivitiesContent;
  stats: StatsContent;
  sustainability: SustainabilityContent;
  blog: BlogContent;
  newsletter: NewsletterContent;
  social: SocialContent;
};
