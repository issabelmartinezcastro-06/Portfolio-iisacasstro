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
  const live = stl.links[0];

  // El primer elemento es STL: lleva su miniatura y enlaza a la web en vivo y a su caso de estudio.
  const items = t.work.items.map((item, i) =>
    i === 0
      ? {
          ...item,
          thumbnail: stl.thumbnail,
          links: [
            { label: t.work.view, href: `/${lang}/modulos/${stl.slug}` },
            { label: live.label[lang], href: live.href, external: true },
          ],
        }
      : item,
  );

  return (
    <>
      <PageHero title={t.work.title} bg="bg-pink/55" star="var(--color-sky)" sparkle="#ffffff" />
      <WorkList items={items} filters={t.work.filters} />
    </>
  );
}
