import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";

export default async function HomePage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Hero {...t.hero} />
      <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-20 px-6 pb-24">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          {t.projects.title}
        </h2>
        <p className="mt-3 text-ink/70">{t.projects.subtitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              lang={lang}
              project={project}
              label={t.projects.view}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
