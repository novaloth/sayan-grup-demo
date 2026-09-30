import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          SAYAN GRUP
        </Link>
        {/* Navigasyon tasarım aşamasında eklenecek */}
      </Container>
    </header>
  );
}
