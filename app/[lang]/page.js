import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getDictionary, isLocale } from "@/lib/i18n";
import Hero from "@/components/hero";
import {
  FadeUp,
  Marquee,
  Polaroid,
  SectionTitle,
  Sparkle,
} from "@/components/scrapbook";

const STL = "/proyectos/stl";
const shots = {
  browser: { src: `${STL}/screen-hero.webp`, width: 1440, height: 640, alt: "" },
  phone: { src: `${STL}/screen-mobile-home.webp`, width: 560, height: 1212, alt: "" },
  small: { src: `${STL}/screen-countdown.webp`, width: 1440, height: 640, alt: "" },
};
const teaser = {
  modules: { src: `${STL}/screen-modules.webp`, width: 1440, height: 640, alt: "" },
  reviews: { src: `${STL}/screen-reviews.webp`, width: 1440, height: 640, alt: "" },
};

export default async function HomePage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <Hero {...t.hero} shots={shots} />

      <Marquee
        items={t.home.marquee}
        className="-rotate-1 bg-pink/45 py-5 font-display text-3xl text-royal md:text-5xl"
      />

      <section className="relative mx-auto max-w-6xl px-6 py-28">
        <Sparkle className="absolute right-10 top-16 size-10" color="var(--color-pink)" />
        {t.home.roles.map((role, i) => (
          <FadeUp key={role} delay={i * 0.12}>
            <p
              className={`font-display text-4xl leading-tight md:text-7xl ${
                i % 2 === 0 ? "text-royal" : "text-pink md:ml-24"
              }`}
            >
              {role}
            </p>
          </FadeUp>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <SectionTitle>{t.home.workTitle}</SectionTitle>
          <FadeUp delay={0.1}>
            <Link
              href={`/${lang}/trabajo`}
              className="group mt-10 inline-flex items-center gap-2 text-xl font-extrabold text-royal"
            >
              <span className="underline decoration-pink decoration-4 underline-offset-8">
                {t.home.workLink}
              </span>
              <ArrowUpRight
                className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </FadeUp>
        </div>
        <div className="relative mx-auto h-[22rem] w-full max-w-md md:h-[26rem]">
          <div className="absolute left-0 top-0 w-[82%]">
            <Polaroid {...teaser.modules} rotate={-4} caption="STL" className="w-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-[78%]">
            <Polaroid
              {...teaser.reviews}
              rotate={5}
              delay={0.2}
              tape="var(--color-yellow)"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
