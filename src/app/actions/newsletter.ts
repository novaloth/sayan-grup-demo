"use server";

import { saveSubscription } from "@/lib/newsletter";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: {
    email?: string;
    consent?: string;
  };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Bülten formunun Server Action'ı. Tarayıcıdaki doğrulamaya güvenmeden alanları sunucuda
 * yeniden doğrular, ardından kaydı bülten servisine iletir.
 * Newsletter bileşeninde useActionState ile kullanılır.
 */
export async function subscribeToNewsletter(
  _previous: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: NewsletterState["errors"] = {};
  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Lütfen geçerli bir e-posta adresi girin.";
  }
  if (!consent) {
    errors.consent = "Devam etmek için aydınlatma metnini onaylamanız gerekiyor.";
  }
  if (errors.email || errors.consent) {
    return { status: "error", errors };
  }

  try {
    await saveSubscription(email);
  } catch (error) {
    console.error("[newsletter] Abonelik kaydedilemedi:", error);
    return {
      status: "error",
      message: "Şu anda kaydınızı alamadık. Lütfen daha sonra tekrar deneyin.",
    };
  }

  return { status: "success", message: "Teşekkürler! E-bülten aboneliğiniz alındı." };
}
