# Sayan Grup — Demo Web Sitesi

Sayan Grup için hazırlanan demo kurumsal web sitesi (ana sayfa).

> Bu proje demo amaçlıdır; Sayan Grup'un resmi web sitesi değildir.

## Teknolojiler

- [Next.js](https://nextjs.org) (App Router)
- React
- TypeScript
- Tailwind CSS v4
- ESLint + Prettier (Tailwind sınıf sıralama eklentisiyle)

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Komutlar

| Komut               | Açıklama                        |
| ------------------- | ------------------------------- |
| `npm run dev`       | Geliştirme sunucusunu başlatır  |
| `npm run build`     | Production derlemesi alır       |
| `npm run start`     | Derlenmiş uygulamayı çalıştırır |
| `npm run lint`      | ESLint kontrolü                 |
| `npm run typecheck` | TypeScript tip kontrolü         |
| `npm run format`    | Prettier ile kodu biçimlendirir |

## Klasör Yapısı

```
src/
├── app/                  # Route'lar, layout ve global stiller
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Ana sayfa bölümleri (Hero, Hakkımızda...)
│   └── ui/               # Tekrar kullanılabilir küçük bileşenler
└── lib/                  # Yardımcı fonksiyonlar
```
