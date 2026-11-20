import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { colorClasses, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) return {};
  return {
    title: `${project[lang].title} | Isabel Martínez Castro`,
    description: project[lang].summary,
  };
}

export default async function ProjectPage({ params }) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) notFound();
  const t = getDictionary(lang);
  const content = project[lang];

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href={`/${lang}#proyectos`}
        className="inline-flex items-center gap-2 font-semibold hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> {t.projects.back}
      </Link>
      <div className={`mt-8 rounded-3xl p-8 md:p-12 ${colorClasses[project.color]}`}>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-4 text-lg text-ink/80">{content.summary}</p>
      </div>
      <p className="mt-10 text-lg leading-relaxed">{content.description}</p>
      <h2 className="mt-10 text-sm font-bold uppercase tracking-widest text-ink/60">
        {t.projects.stack}
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-background">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
