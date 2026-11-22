"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  Arrow,
  CountUp,
  DisplayTitle,
  FadeUp,
  Marquee,
  Parallax,
  Phone,
  Polaroid,
  ScrollProgress,
  SectionTitle,
  Sparkle,
  Star,
  Sticker,
} from "@/components/scrapbook";
import { colorClasses } from "@/lib/projects";

function Highlight({ item, index, media }) {
  const flip = index % 2 === 1;
  const m = media[item.media];
  return (
    <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16">
      <FadeUp className={flip ? "md:order-2" : ""}>
        <span className="font-display text-7xl leading-none text-pink md:text-8xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-3xl leading-tight text-royal md:text-4xl">{item.title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">{item.text}</p>
        <Arrow className={`mt-6 hidden h-16 w-24 md:block ${flip ? "-scale-x-100" : ""}`} />
      </FadeUp>

      <Parallax distance={28} className={flip ? "md:order-1" : ""}>
        {item.media === "mobile" ? (
          <div className="relative mx-auto h-[26rem] max-w-md">
            <Phone {...media.mobileMenu} rotate={-5} className="absolute left-[4%] top-0 w-[44%]" />
            <Phone {...media.mobileHome} rotate={5} delay={0.2} className="absolute right-[4%] top-10 w-[44%]" />
            <Sparkle className="absolute bottom-2 left-1/2 size-10" color="var(--color-pink)" />
          </div>
        ) : (
          <Polaroid
            {...m}
            rotate={flip ? 3 : -3}
            tape={flip ? "var(--color-yellow)" : "var(--color-pink)"}
            className="mx-auto w-full max-w-xl"
          />
        )}
      </Parallax>
    </div>
  );
}

export default function CaseStudy({ lang, project, content, backLabel, stackLabel }) {
  const study = content.study;
  const [shortTitle, ...rest] = content.title.split(":");
  const subtitle = rest.join(":").trim();
  const media = study.media;
  const link = project.links?.[0];

  return (
    <article>
      <ScrollProgress />

      {/* Portada */}
      <header className={`relative isolate overflow-hidden px-6 pb-24 pt-10 md:pb-32 ${colorClasses[project.color]}`}>
        <Star className="absolute right-[8%] top-16 -z-0 hidden size-16 md:block" color="var(--color-background)" />
        <Sparkle className="absolute bottom-10 left-[40%] size-10" color="var(--color-background)" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href={`/${lang}/trabajo`}
            className="inline-flex items-center gap-2 font-bold hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> {backLabel}
          </Link>

          <div className="mt-10 grid items-center gap-14 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-5 inline-block -rotate-2 rounded-full bg-background px-5 py-1.5 text-sm font-extrabold uppercase tracking-widest">
                {study.kicker}
              </p>
              <DisplayTitle
                text={shortTitle}
                className="text-sticker font-display text-[6rem] leading-[0.9] text-white md:text-[9rem]"
              />
              {subtitle && (
                <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">{subtitle}</p>
              )}
              <p className="mt-6 max-w-md text-lg font-medium text-ink/85">{content.summary}</p>
              <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {study.meta.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-extrabold uppercase tracking-widest text-ink/60">{label}</dt>
                    <dd className="font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-9 inline-flex items-center gap-2 text-xl font-extrabold text-royal"
                >
                  <span className="underline decoration-pink decoration-4 underline-offset-8">
                    {link.label[lang]}
                  </span>
                  <ArrowUpRight
                    className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>

            <div className="relative mx-auto h-[24rem] w-full max-w-md sm:h-[28rem] md:h-[32rem] md:max-w-none">
              <div className="absolute left-0 top-0 w-[84%]">
                <Polaroid {...media.hero} rotate={-4} priority caption={shortTitle} className="w-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-[36%]">
                <Phone {...media.mobileHome} rotate={6} delay={0.3} />
              </div>
              <div className="absolute bottom-4 left-[4%] w-[46%]">
                <Polaroid {...media.countdown} rotate={4} delay={0.5} tape="var(--color-yellow)" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Marquee
        items={project.stack}
        className="-rotate-1 bg-pink/45 py-5 font-display text-3xl text-royal md:text-4xl"
      />

      {/* Resumen */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle>{study.labels.overview}</SectionTitle>
        <div className="mt-14 grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <FadeUp>
            {study.overview.map((p, i) => (
              <p
                key={p}
                className={i === 0 ? "text-2xl font-semibold leading-snug md:text-3xl" : "mt-6 text-lg leading-relaxed text-ink/80"}
              >
                {p}
              </p>
            ))}
          </FadeUp>
          <div className="space-y-10">
            <FadeUp delay={0.1}>
              <span className="inline-block -rotate-2 rounded-full bg-pink px-4 py-1 text-sm font-extrabold">
                {study.problem.title}
              </span>
              <p className="mt-3 text-lg leading-relaxed">{study.problem.text}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <span className="inline-block rotate-2 rounded-full bg-mint px-4 py-1 text-sm font-extrabold">
                {study.solution.title}
              </span>
              <p className="mt-3 text-lg leading-relaxed">{study.solution.text}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Lo que más cuidé */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16">
        <Sticker name="lupa" rotate={6} className="absolute right-6 top-0 hidden w-24 md:block md:w-28" />
        <SectionTitle>{study.labels.highlights}</SectionTitle>
        <div className="mt-6 divide-y-2 divide-dashed divide-ink/15">
          {study.highlights.map((item, i) => (
            <Highlight key={item.title} item={item} index={i} media={media} />
          ))}
        </div>
      </section>

      {/* Animaciones y experiencia */}
      <section className="bg-sky/70 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{study.labels.animations}</SectionTitle>
          <ul className="mt-12 divide-y-2 divide-dashed divide-ink/20">
            {study.animations.map((a, i) => (
              <li key={a.tool}>
                <FadeUp delay={i * 0.05}>
                  <div className="group grid items-center gap-4 py-8 md:grid-cols-[19rem_9rem_1fr] md:gap-12">
                    <span className="font-display text-5xl leading-none text-ink transition-all duration-300 group-hover:translate-x-3 group-hover:text-pink md:text-[3.4rem]">
                      {a.tool}
                    </span>
                    <span className="w-fit -rotate-2 rounded-full bg-background px-3 py-1 text-xs font-extrabold uppercase tracking-widest transition-transform group-hover:rotate-2">
                      {a.where}
                    </span>
                    <p className="text-lg text-ink/85">{a.text}</p>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>

          <h3 className="mt-20 font-display text-4xl text-royal md:text-5xl">{study.labels.ux}</h3>
          <ul className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
            {study.ux.map((u, i) => (
              <li key={u.title}>
                <FadeUp delay={i * 0.08} className="flex gap-4">
                  <Star className="mt-1 size-8 shrink-0" spin={false} color={i % 2 ? "var(--color-yellow)" : "var(--color-pink)"} />
                  <div>
                    <h4 className="text-xl font-extrabold">{u.title}</h4>
                    <p className="mt-1 text-ink/80">{u.text}</p>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Decisiones */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle>{study.decisions.title}</SectionTitle>
        <ol className="mt-12 divide-y-2 divide-dashed divide-ink/15">
          {study.decisions.items.map((d, i) => (
            <li key={d.title}>
              <FadeUp>
                <div className="grid gap-3 py-8 md:grid-cols-[6rem_1fr_1.4fr] md:gap-10">
                  <span className="font-display text-5xl leading-none text-pink">{i + 1}</span>
                  <h3 className="text-2xl font-extrabold leading-tight">{d.title}</h3>
                  <p className="text-lg leading-relaxed text-ink/80">{d.text}</p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ol>
      </section>

      {/* Resultado */}
      <section className="bg-pink/25 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>{study.outcome.title}</SectionTitle>
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {study.outcome.items.map((s, i) => (
              <li key={s.label}>
                <FadeUp delay={i * 0.1}>
                  <p className="font-display text-7xl leading-none text-royal md:text-8xl">
                    <CountUp to={s.value} />
                  </p>
                  <p className="mt-2 text-lg font-bold">{s.label}</p>
                </FadeUp>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-ink/70">{study.outcome.note}</p>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-sky/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <span className="inline-block rotate-2 rounded-full bg-mint px-4 py-1 text-sm font-extrabold text-ink">
              {study.role.title}
            </span>
            <p className="mt-4 max-w-2xl text-xl text-ink/85">{study.role.text}</p>
          </FadeUp>

          <h2 className="mt-20 font-display text-5xl text-royal md:text-6xl">{study.takeaways.title}</h2>
          <ul className="mt-10 space-y-8">
            {study.takeaways.items.map((t, i) => (
              <li key={t}>
                <FadeUp delay={i * 0.1}>
                  <p className="max-w-4xl text-2xl font-semibold leading-snug md:text-4xl">{t}</p>
                </FadeUp>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-2xl border-t-2 border-dashed border-ink/25 pt-6 text-ink/70">
            {study.takeaways.next}
          </p>
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 text-2xl font-extrabold text-royal"
            >
              <span className="underline decoration-pink decoration-4 underline-offset-8">
                {link.label[lang]}
              </span>
              <ArrowUpRight
                className="size-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </section>
    </article>
  );
}
