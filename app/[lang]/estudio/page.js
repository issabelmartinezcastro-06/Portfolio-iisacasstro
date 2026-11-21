import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { Arrow, FadeUp, ScrollText, SectionTitle, Sparkle } from "@/components/scrapbook";
import PageHero from "@/components/page-hero";

const bands = ["bg-mint/50", "bg-pink/40"];

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
      <PageHero title={s.title} bg="bg-yellow/70" star="var(--color-pink)" sparkle="var(--color-sky)" />

      <section className="bg-royal px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <ScrollText text={s.statement} className="text-3xl font-bold leading-snug md:text-5xl" />
        </div>
      </section>

      <section className="relative pt-24">
        <Sparkle className="absolute right-8 top-20 size-10" color="var(--color-yellow)" />
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>{s.ongoingTitle}</SectionTitle>
        </div>
        <ul className="mt-16">
          {s.ongoing.map((project, i) => (
            <li key={project.title} className={bands[i % bands.length]}>
              <FadeUp className="relative mx-auto max-w-5xl px-6 py-14">
                <h3 className="font-display text-3xl leading-tight text-ink md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-lg font-medium text-ink/80">{project.intro}</p>
                <ul className="mt-4 grid gap-2 text-lg text-ink">
                  {project.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span aria-hidden="true" className="text-royal">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 0 && (
                  <Arrow className="absolute right-6 top-12 hidden w-24 rotate-12 md:block" />
                )}
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
