import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import {
  Arrow,
  DisplayTitle,
  FadeUp,
  ScrollText,
  SectionTitle,
  Sparkle,
  Star,
} from "@/components/scrapbook";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, "/estudio", t.nav.studio, t.studio.description);
}

export default async function StudioPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const s = getDictionary(lang).studio;

  return (
    <>
      <section className="relative mx-auto max-w-5xl px-6 pb-12 pt-16 md:pt-24">
        <Star className="absolute right-6 top-10 size-16 md:right-10 md:size-24" color="var(--color-mint)" />
        <DisplayTitle
          text={s.title}
          className="font-display text-6xl leading-none text-royal md:text-9xl"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollText
          text={s.statement}
          className="text-3xl font-bold leading-snug text-ink md:text-5xl"
        />
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <Sparkle className="absolute right-8 top-20 size-10" color="var(--color-yellow)" />
        <SectionTitle>{s.ongoingTitle}</SectionTitle>
        <ul className="mt-16 divide-y-2 divide-dashed divide-ink/20">
          {s.ongoing.map((project, i) => (
            <li key={project.title}>
              <FadeUp className="relative py-10">
                <h3
                  className={`font-display text-3xl leading-tight md:text-5xl ${
                    i % 2 === 0 ? "text-pink" : "text-royal"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-lg font-medium text-ink/75">{project.intro}</p>
                <ul className="mt-4 grid gap-2 text-lg text-ink">
                  {project.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="text-pink">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 0 && (
                  <Arrow className="absolute right-0 top-10 hidden w-24 rotate-12 md:block" />
                )}
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
