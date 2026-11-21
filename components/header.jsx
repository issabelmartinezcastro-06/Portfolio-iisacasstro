import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

export default function Header({ lang, label }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70">
      <Link href={`/${lang}`} className="font-display text-2xl leading-none text-royal">
        isabel<span className="text-pink">.</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium">
        <Link href={`/${lang}#proyectos`} className="hover:underline">
          {label}
        </Link>
        <LanguageSwitcher lang={lang} />
      </nav>
    </header>
  );
}
