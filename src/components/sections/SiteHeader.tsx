"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site";

/** Mobil ve tablette header çubuğu ile mobil menü üst çubuğunun ortak ölçüleri. */
const barClass = "flex h-20 items-center justify-between md:h-24";
const logoClass = "h-[53px] w-auto md:h-[64px]";

type NavListProps = {
  items: typeof mainNav;
  className?: string;
  onNavigate?: () => void;
};

function NavList({ items, className, onNavigate }: NavListProps) {
  return (
    <ul className={cn("flex gap-8", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} onClick={onNavigate} className="link-underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LanguageSwitch() {
  return (
    <div role="group" aria-label="Dil seçimi" className="flex items-center gap-2.5 xl:gap-5">
      <button type="button" aria-pressed="true" className="font-bold">
        TR
      </button>
      <span aria-hidden className="h-3.5 w-px bg-white/80 xl:h-[26px]" />
      <button type="button" aria-pressed="false" className="font-bold text-white/50">
        EN
      </button>
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="border-b border-brand">
      {/* Masaüstünde yan boşluk 1280'de 64px, 1920'de 240px (içerik 1440px). */}
      <div
        className={cn(
          barClass,
          "relative px-(--gutter) text-[13px] leading-none md:text-base xl:h-[139px] xl:px-[calc(64px+176*var(--fp))] xl:text-lg",
        )}
      >
        <nav aria-label="Ana menü" className="hidden xl:block">
          <NavList items={mainNav.slice(0, 4)} />
        </nav>

        {/* Referansta logo tam ortada değil, 9px solda duruyor. */}
        <Link href="/" className="xl:absolute xl:top-[28px] xl:left-1/2 xl:-ml-[96px]">
          <Logo className={cn(logoClass, "xl:h-[83px]")} />
        </Link>

        <div className="flex items-center gap-5 xl:gap-8">
          <NavList items={mainNav.slice(4)} className="hidden xl:flex" />
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="xl:hidden"
          >
            <Menu aria-hidden className="size-7" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          className="fixed inset-0 z-50 flex flex-col bg-ink-deep px-(--gutter) text-white xl:hidden"
        >
          <div className={barClass}>
            <Link href="/" onClick={close}>
              <Logo className={logoClass} />
            </Link>
            <button type="button" onClick={close} aria-label="Menüyü kapat">
              <X aria-hidden className="size-7" strokeWidth={1.5} />
            </button>
          </div>
          <nav aria-label="Mobil menü" className="mt-10">
            <NavList
              items={mainNav}
              onNavigate={close}
              className="flex-col gap-6 text-[28px] leading-none font-light md:text-4xl"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
