/**
 * İçerik erişim katmanı.
 *
 * Sayfalar içeriğe yalnızca bu fonksiyonlarla ulaşır. Şu an src/content altındaki statik
 * dosyaları döndürürler. Backend veya CMS bağlandığında yalnızca bu dosyanın içi değişir;
 * örneğin:
 *
 *   export async function getHomeContent(): Promise<HomeContent> {
 *     const res = await fetch(`${process.env.CMS_API_URL}/pages/home`, {
 *       next: { revalidate: 300 },
 *     });
 *     if (!res.ok) throw new Error("Anasayfa içeriği alınamadı");
 *     return mapCmsHomeToContent(await res.json()); // API yanıtını HomeContent tipine dönüştür
 *   }
 *
 * Bileşenler props ile beslendiği için değişmeden çalışmaya devam eder.
 */
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import type { HomeContent, SiteContent } from "@/types/content";

/** Header ve footer gibi tüm sayfalarda ortak içerik. */
export async function getSiteContent(): Promise<SiteContent> {
  return siteContent;
}

/** Anasayfa bölümlerinin içeriği. */
export async function getHomeContent(): Promise<HomeContent> {
  return homeContent;
}
