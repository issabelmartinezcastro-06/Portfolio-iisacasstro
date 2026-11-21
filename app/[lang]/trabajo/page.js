import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { getProject } from "@/lib/projects";
import WorkList from "@/components/work-list";
import PageHero from "@/components/page-hero";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, "/trabajo", t.nav.work, t.work.description);
}

export default async function WorkPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const stl = getProject("stl");

  // El primer elemento es STL: enlaza a su caso de estudio y lleva su miniatura.
  const items = t.work.items.map((item, i) =>
    i === 0
      ? { ...item, href: `/${lang}/modulos/${stl.slug}`, thumbnail: stl.thumbnail }
      : item,
  );

  return (
    <>
      <PageHero title={t.work.title} bg="bg-mint/70" star="var(--color-yellow)" sparkle="var(--color-pink)" />
      <WorkList items={items} linkLabel={t.work.view} />
    </>
  );
}
