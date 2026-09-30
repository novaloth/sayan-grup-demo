import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Sayan Grup | 1987'den Beri Güvenin Adresi",
  description:
    "Sayan Grup; demir çelik ticareti, yassı metal, lojistik ve yatırım alanlarında faaliyet gösteren 4 şirketiyle 37 yıllık tecrübe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
