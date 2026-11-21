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
  return pageMetadata(lang, "/sobre-mi", t.nav.about, t.about.description);
}

export default async function AboutPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const a = getDictionary(lang).about;

  return (
    <>
      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-16 md:pt-24">
        <Star className="absolute right-6 top-10 size-16 md:right-10 md:size-24" color="var(--color-yellow)" />
        <DisplayTitle
          text={a.title}
          className="font-display text-6xl leading-none text-royal md:text-9xl"
        />
        <div className="mt-14 space-y-8">
          {a.roles.map((role, i) => (
            <FadeUp key={role.name} delay={i * 0.12}>
              <p
                className={`font-display text-3xl leading-tight md:text-6xl ${
                  i % 2 === 0 ? "text-pink" : "text-royal"
                }`}
              >
                {role.name}
              </p>
              <p className="mt-2 max-w-xl text-lg text-ink/75">{role.text}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-14 px-6 py-24">
        {a.bio.map((paragraph) => (
          <ScrollText
            key={paragraph}
            text={paragraph}
            className="text-2xl font-bold leading-snug text-ink md:text-4xl"
          />
        ))}
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <Sparkle className="absolute right-8 top-20 size-10" color="var(--color-pink)" />
        <SectionTitle>{a.methodTitle}</SectionTitle>
        <ol className="mt-16 divide-y-2 divide-dashed divide-ink/20">
          {a.method.map((step, i) => (
            <li key={step.title}>
              <FadeUp className="grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr] md:gap-8">
                <span className="font-display text-6xl text-pink md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-ink md:text-4xl">{step.title}</h3>
                <p className="text-lg text-ink/75">{step.text}</p>
              </FadeUp>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <SectionTitle>{a.doTitle}</SectionTitle>
        <Arrow className="absolute right-4 top-24 hidden w-28 rotate-12 md:block" />
        <ul className="mt-16 divide-y-2 divide-dashed divide-ink/20">
          {a.do.map((item, i) => (
            <li key={item.title}>
              <FadeUp className="group py-8">
                <h3
                  className={`font-display text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-3 md:text-5xl ${
                    i % 2 === 0 ? "text-royal" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-lg text-ink/75">{item.text}</p>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionTitle>{a.techTitle}</SectionTitle>
        <div className="mt-16 space-y-10">
          {a.tech.map((group, i) => (
            <FadeUp key={group.label} delay={i * 0.06}>
              <p className="text-xs font-extrabold uppercase tracking-widest text-royal">
                {group.label}
              </p>
              <p className="mt-2 font-display text-3xl leading-snug text-ink md:text-4xl">
                {group.items.map((tool, n) => (
                  <span key={tool}>
                    {n > 0 && <span className="mx-3 text-pink">✦</span>}
                    {tool}
                  </span>
                ))}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
