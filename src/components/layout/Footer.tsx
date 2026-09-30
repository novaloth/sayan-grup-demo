import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Sayan Grup · Demo proje
      </Container>
    </footer>
  );
}
