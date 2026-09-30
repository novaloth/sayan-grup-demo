import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Ana sayfa bölümleri (Hero, Hakkımızda, Grup Şirketleri...) src/components/sections altına eklenecek */}
        <Container className="py-24">
          <h1 className="text-3xl font-semibold tracking-tight">Sayan Grup</h1>
          <p className="mt-3 text-slate-600">Ana sayfa tasarımı hazırlanıyor.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
