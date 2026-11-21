import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { getProject } from "@/lib/projects";
import WorkList from "@/components/work-list";
import { DisplayTitle, Star } from "@/components/scrapbook";

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
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <Star className="absolute right-6 top-10 size-16 md:right-10 md:size-24" color="var(--color-pink)" />
      <DisplayTitle
        text={t.work.title}
        className="font-display text-6xl leading-none text-royal md:text-9xl"
      />
      <WorkList items={items} linkLabel={t.work.view} />
    </section>
  );
}
