import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { FadeUp, ScrollText, SectionTitle, Sparkle } from "@/components/scrapbook";
import PageHero from "@/components/page-hero";

// Colores del barrido que aparece al pasar el ratón por cada función.
const sweeps = ["bg-pink/30", "bg-sky/40"];

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
      <PageHero title={a.title} bg="bg-sky/65" star="var(--color-pink)" sparkle="#ffffff">
        <div className="mt-12 space-y-8">
          {a.roles.map((role, i) => (
            <FadeUp key={role.name} delay={0.5 + i * 0.12}>
              <p className="font-display text-3xl leading-tight text-royal md:text-6xl">{role.name}</p>
              <p className="mt-2 max-w-xl text-lg font-medium text-ink/80">{role.text}</p>
            </FadeUp>
          ))}
        </div>
      </PageHero>

      <section className="bg-pink/25 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          {a.bio.map((paragraph) => (
            <ScrollText
              key={paragraph}
              text={paragraph}
              className="text-2xl font-bold leading-snug text-ink md:text-4xl"
            />
          ))}
        </div>
      </section>

      <section className="relative bg-sky/30 px-6 py-24">
        <Sparkle className="absolute right-8 top-16 size-10" color="var(--color-pink)" />
        <div className="mx-auto max-w-5xl">
          <SectionTitle>{a.methodTitle}</SectionTitle>
          <ol className="mt-16 divide-y-2 divide-dashed divide-ink/20">
            {a.method.map((step, i) => (
              <li key={step.title}>
                <FadeUp className="grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr] md:gap-8">
                  <span className="text-sticker font-display text-6xl text-white md:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl text-ink md:text-4xl">{step.title}</h3>
                  <p className="text-lg text-ink/80">{step.text}</p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>{a.doTitle}</SectionTitle>
        </div>
        <ul className="mx-auto mt-16 max-w-6xl">
          {a.do.map((item, i) => (
            <li key={item.title} className="border-t-2 border-dashed border-ink/20 last:border-b-2">
              <FadeUp className="group relative isolate overflow-hidden px-6 py-8 md:px-10">
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${sweeps[i % sweeps.length]}`}
                />
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="font-display text-2xl text-pink md:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-ink transition-transform duration-300 group-hover:translate-x-3 md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-lg text-ink/80">{item.text}</p>
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sky/30 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <h2 className="font-display text-5xl leading-none text-royal md:text-7xl">{a.techTitle}</h2>
          </FadeUp>
          <div className="mt-16 space-y-10">
            {a.tech.map((group, i) => (
              <FadeUp key={group.label} delay={i * 0.06}>
                <p className="text-xs font-extrabold uppercase tracking-widest text-royal">
                  {group.label}
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-2xl leading-snug text-ink sm:text-3xl md:text-4xl">
                  {group.items.map((tool, n) => (
                    <span key={tool} className="flex items-center gap-3">
                      {tool}
                      {n < group.items.length - 1 && (
                        <span aria-hidden="true" className="text-pink">
                          ✦
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
