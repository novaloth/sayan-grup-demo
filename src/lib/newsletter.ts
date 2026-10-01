/**
 * E-bülten servisi bağlantı noktası (yalnızca sunucuda çalışır).
 *
 * TODO(backend): Bülten servisi (ör. Mailchimp, Brevo veya kendi API'niz) belirlendiğinde
 * saveSubscription içini o servise istek atacak şekilde doldurun. Erişim bilgileri .env.local
 * dosyasında tutulur (bkz. .env.example: NEWSLETTER_API_URL, NEWSLETTER_API_KEY).
 *
 * Örnek:
 *   const res = await fetch(process.env.NEWSLETTER_API_URL!, {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *       Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}`,
 *     },
 *     body: JSON.stringify({ email }),
 *   });
 *   if (!res.ok) throw new Error(`Bülten servisi hatası: ${res.status}`);
 */
export async function saveSubscription(email: string): Promise<void> {
  // Servis bağlanana kadar istek yalnızca sunucu günlüğüne yazılır.
  console.info(`[newsletter] Yeni abonelik isteği: ${email}`);
}
