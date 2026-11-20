import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import Header from "@/components/header";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${bricolage.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <Header lang={lang} label={t.nav.projects} />
        <main className="flex-1">{children}</main>
        <footer className="px-6 py-10 text-center text-sm text-ink/60">
          {t.footer}
        </footer>
      </body>
    </html>
  );
}
