"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className="flex items-center gap-1 rounded-full bg-ink/5 p-1">
      <Languages className="ml-2 size-4" aria-hidden="true" />
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest ? `/${rest}` : ""}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase transition-colors ${
            l === lang ? "bg-ink text-background" : "hover:bg-ink/10"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
