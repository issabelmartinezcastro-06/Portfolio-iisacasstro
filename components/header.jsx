import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

export default function Header({ lang, label }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70">
      <Link href={`/${lang}`} className="text-xl font-extrabold tracking-tight">
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
