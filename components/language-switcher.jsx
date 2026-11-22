"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";

// Selector de idioma en texto, sin botones: el activo va en azul y subrayado.
export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className="flex items-center gap-3 text-sm font-extrabold uppercase">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest ? `/${rest}` : ""}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={
            l === lang
              ? "text-royal underline decoration-pink decoration-4 underline-offset-8"
              : "text-ink/55 transition-colors hover:text-royal"
          }
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
