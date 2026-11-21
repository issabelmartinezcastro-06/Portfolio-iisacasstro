import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";
import NavLinks from "@/components/nav-links";

export default function Header({ lang, nav }) {
  const links = [
    { href: `/${lang}/trabajo`, label: nav.work, match: ["/trabajo", "/modulos"] },
    { href: `/${lang}/sobre-mi`, label: nav.about, match: ["/sobre-mi"] },
    { href: `/${lang}/estudio`, label: nav.studio, match: ["/estudio"] },
    { href: `/${lang}/contacto`, label: nav.contact, match: ["/contacto"] },
  ];

  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-x-4 bg-background/70 px-6 py-1.5 backdrop-blur-md">
      <Link href={`/${lang}`} aria-label="Isabel" className="block">
        <Image
          src="/logo/isabel-logo.webp"
          alt="Isabel"
          width={715}
          height={444}
          priority
          sizes="130px"
          className="h-16 w-auto md:h-20"
        />
      </Link>
      <div className="flex items-center gap-6">
        <NavLinks id="desktop" links={links} className="hidden items-center gap-6 md:flex" />
        <LanguageSwitcher lang={lang} />
      </div>
      <NavLinks
        id="mobile"
        links={links}
        className="order-last flex w-full items-center justify-center gap-6 pb-2 md:hidden"
      />
    </header>
  );
}
