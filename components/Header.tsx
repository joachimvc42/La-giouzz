"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-100 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" aria-label={`${site.name} — accueil`} className="block">
          <Image
            src="/logo/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1600}
            height={900}
            priority
            className="h-14 w-auto sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors hover:text-gold-600 ${
                  active ? "text-gold-600" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="rounded border border-gold-300 px-3 py-2 text-sm text-gold-700 lg:hidden"
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      <div id="menu-mobile" hidden={!open} className="border-t border-gold-100 lg:hidden">
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8" aria-label="Navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-gold-100/70 py-3 text-ink-soft last:border-0 hover:text-gold-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
