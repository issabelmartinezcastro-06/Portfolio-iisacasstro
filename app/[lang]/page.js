import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import Hero from "@/components/hero";
import ProjectList from "@/components/project-list";
import { SectionTitle } from "@/components/scrapbook";

const STL = "/proyectos/stl";
const shots = {
  browser: { src: `${STL}/screen-hero.webp`, width: 1440, height: 640, alt: "" },
  phone: { src: `${STL}/screen-mobile-home.webp`, width: 560, height: 1212, alt: "" },
  small: { src: `${STL}/screen-countdown.webp`, width: 1440, height: 640, alt: "" },
};

export default async function HomePage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Hero {...t.hero} shots={shots} />
      <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionTitle>{t.projects.title}</SectionTitle>
        <p className="mt-6 max-w-md text-lg text-ink/70">{t.projects.subtitle}</p>
        <ProjectList lang={lang} projects={projects} label={t.projects.view} />
      </section>
    </>
  );
}
