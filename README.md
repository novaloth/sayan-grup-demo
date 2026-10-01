# Sayan Grup — Kurumsal Web Sitesi (Demo)

Sayan Grup için hazırlanan kurumsal web sitesinin anasayfası. Masaüstü tasarım 1920px referansa
birebir uyacak şekilde, mobil ve tablet görünümü ise sitenin canlı halini örnek alarak kodlanmıştır.

> Bu proje demo amaçlıdır; Sayan Grup'un resmi web sitesi değildir.

## Teknolojiler

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4
- ESLint + Prettier (Tailwind sınıf sıralama eklentisiyle)
- Husky + lint-staged (commit öncesi otomatik lint/format)

## Kurulum

Node.js 20.9+ gerekir (`.nvmrc`: 24).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Komutlar

| Komut                  | Açıklama                                     |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Geliştirme sunucusunu başlatır               |
| `npm run build`        | Production derlemesi alır                    |
| `npm run start`        | Derlenmiş uygulamayı çalıştırır              |
| `npm run lint`         | ESLint kontrolü                              |
| `npm run lint:fix`     | ESLint hatalarını otomatik düzeltir          |
| `npm run typecheck`    | TypeScript tip kontrolü                      |
| `npm run format`       | Prettier ile kodu biçimlendirir              |
| `npm run format:check` | Biçim kontrolü (dosyaları değiştirmez)       |
| `npm run check`        | Tip + lint + biçim kontrolünü birlikte yapar |

## Klasör Yapısı

```
src/
├── app/
│   ├── layout.tsx          # Kök layout: Poppins fontu, <html lang="tr">
│   ├── page.tsx            # Anasayfa: içeriği alır, bölümlere dağıtır
│   ├── globals.css         # Renkler, ölçekleme sistemi, ortak stiller (text-heading, btn-fill…)
│   └── actions/
│       └── newsletter.ts   # Bülten formunun Server Action'ı (doğrulama)
├── components/
│   ├── layout/             # SiteHeader (mobil menü dahil), Footer
│   ├── sections/           # Anasayfa bölümleri, sayfadaki sırayla
│   └── ui/                 # Tekrar kullanılan küçük bileşenler
├── content/                # Sitedeki tüm metin, görsel ve video yolları (şimdilik statik)
├── lib/
│   ├── content.ts          # İçerik erişim katmanı: getSiteContent, getHomeContent
│   ├── newsletter.ts       # Bülten servisi bağlantı noktası
│   └── utils.ts            # cn() — className birleştirme
└── types/
    └── content.ts          # Tüm içerik tipleri
public/
├── images/                 # Görseller (şirket logoları images/companies altında)
└── videos/                 # Arka plan videoları
```

## Mimari: İçerik ve Backend

Bileşenler kendi içlerinde metin veya veri tutmaz; her şeyi props ile alır. Akış şöyledir:

```
src/content/*.ts  →  src/lib/content.ts  →  src/app/page.tsx  →  components/sections/*
  (statik veri)        (erişim katmanı)       (sayfa)               (yalnızca görünüm)
```

- **İçerik değiştirmek:** Metinler `src/content/` altındadır. `home.ts` anasayfa bölümlerini,
  `site.ts` menü, iletişim, sosyal medya ve yasal linkleri, `companies.ts`, `activities.ts` ve
  `blog.ts` ise listeleri içerir.
- **Backend veya CMS bağlamak:** Yalnızca `src/lib/content.ts` içindeki fonksiyonların gövdesi
  değişir (dosyadaki yorumda örnek var). API yanıtı `src/types/content.ts` tiplerine dönüştürülür;
  bileşenlere dokunmak gerekmez. İçerik tipleri bilinçli olarak yalnızca düz veri içerir (metin,
  sayı, dosya yolu, anahtar): ikonlar `"leaf"`, renkler `"eco"` gibi anahtarlarla tutulur ve
  bileşende karşılığına çevrilir. Böylece aynı veri JSON olarak bir API'den gelebilir.
- **Bülten formu:** `components/sections/Newsletter.tsx`, `useActionState` ile
  `app/actions/newsletter.ts` içindeki Server Action'ı çağırır. Action e-posta ve onay kutusunu
  sunucuda doğrular, ardından `lib/newsletter.ts` içindeki `saveSubscription`'ı çağırır. Bu
  fonksiyon şu an isteği yalnızca sunucu günlüğüne yazar; bülten servisi belirlenince içi
  doldurulur. Erişim bilgileri için `.env.example`'a bakın.

## Responsive Yapı

Üç kademe vardır: **mobil** (varsayılan sınıflar), **tablet** (`md:`, ≥768px) ve **masaüstü**
(`xl:`, ≥1280px).

Masaüstü tasarım 1920px referansa göre ölçülmüştür. 1280–1920px arasında yatay ölçüler doğrusal
olarak ölçeklenir. Bunun için `globals.css` içinde `--fp` değişkeni vardır: 1280px ekranda `0`,
1920px ekranda `1px` değerini alır. Masaüstü ölçüleri şu kalıpla yazılır:

```
xl:w-[calc(470px+185*var(--fp))]   →  1280px'te 470px, 1920px'te 655px (470 + 185)
```

Yani ilk sayı 1280px'te sığan değer, ikinci sayı 1920px'teki tasarım değeri ile aradaki farktır.
Bir değeri değiştirirken ikisini birlikte güncelleyin. Kodda çok sayıda köşeli parantezli piksel
değeri (`h-[420px]` gibi) bulunur; bunlar tasarımdan ölçülmüş değerlerdir ve bilinçli olarak
ölçek sınıflarına (`h-105`) çevrilmemiştir. Bu yüzden Tailwind eklentisinin bu yöndeki önerisi
`.vscode/settings.json` içinde kapatılmıştır.

## Ortak Stiller ve Bileşenler

`globals.css` içinde:

| Ad               | Ne işe yarar                                                 |
| ---------------- | ------------------------------------------------------------ |
| `text-heading`   | Bölüm başlıkları (mobil 22px, tablet 36px, masaüstü 44→62px) |
| `text-body`      | Gövde metni (mobil 14px, tablet ve üstü 16px)                |
| `text-outline`   | İçi boş (kontur) başlık yazısı                               |
| `btn-fill`       | Hover'da içi soldan sağa dolan buton                         |
| `link-underline` | Hover'da altında soldan sağa çizgi beliren metin linki       |
| `--gutter`       | Mobil/tablet sayfa kenar boşluğu                             |
| `--label-indent` | Etiket çizgisi + boşluk; başlıklar bu girintiyle hizalanır   |

`components/ui/` içinde:

| Bileşen                       | Ne işe yarar                                                   |
| ----------------------------- | -------------------------------------------------------------- |
| `SectionHeading`              | "— ETİKET" + bölüm başlığı                                     |
| `PillLink` / `pillClass()`    | Yuvarlak, kenarlıklı buton (link veya diğer öğeler için sınıf) |
| `LoopVideo`                   | Sessiz döngü video; ekrana girince yüklenir, dışındayken durur |
| `CountUp`                     | Ekrana girince 0'dan hedefe sayan rakam                        |
| `Logo` / `LogoMark`           | Sayan Grup logosu / dekoratif logo işareti                     |
| `TitleLines`                  | Satır dizisini `<br />` ile yazar                              |
| `Divider`, `ImagePlaceholder` | Bölüm ayırıcı / görseli henüz gelmemiş alan                    |

## Görseller ve Videolar

- Fotoğraflar, gösterildikleri boyutun yaklaşık 2 katında JPG olarak tutulur. `next/image` her
  ekran için uygun boyutu ayrıca üretir.
- Videolar **faststart** MP4 olmalıdır (dosyanın dizin bilgisi başta). Aksi halde tarayıcı
  oynatmaya başlamadan dosyanın sonunu okumak zorunda kalır. Yeni video eklerken
  `ffmpeg -i girdi.mp4 -c copy -movflags +faststart cikti.mp4` ile dönüştürün.
- Küçük kart videoları için şu an banner videoları kullanılıyor (her biri 7–26 MB). Küçük
  boyutlu (ör. 360p) kart klipleri eklenirse sayfa yükü belirgin şekilde azalır; `companies.ts`
  içinde `thumbVideo` alanına yazmak yeterlidir.

## Bekleyen İçerikler

Kodda `TODO` ile işaretlidir (`git grep TODO`):

- Dessan, Sayan Investing ve Sayan Lojistik banner metinleri ve web sitesi linkleri
- Faaliyet Alanları: Yassı Metal, Lojistik ve Yatırım sekmelerinin metin ve görselleri
- Sosyal medya, blog yazısı ve yasal sayfa linkleri
- E-bülten servisinin bağlanması

## Kod Kalitesi

- Her commit öncesinde Husky, değişen dosyalarda `eslint --fix` ve `prettier --write` çalıştırır.
- VS Code için önerilen eklentiler `.vscode/extensions.json` içindedir; kaydederken otomatik
  biçimlendirme açıktır.
- Satır sonları `.gitattributes` ile LF olarak sabitlenmiştir.
