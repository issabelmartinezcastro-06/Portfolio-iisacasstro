import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { contact } from "@/lib/site";
import { DisplayTitle, FadeUp, Parallax, Sparkle, Star } from "@/components/scrapbook";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, "/contacto", t.nav.contact, t.contact.description);
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getDictionary(lang).contact;

  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-32 pt-16 md:pt-24">
      <Star className="absolute right-6 top-10 size-16 md:right-10 md:size-24" color="var(--color-sky)" />
      <Sparkle className="absolute bottom-24 left-6 size-10" color="var(--color-pink)" />
      <DisplayTitle
        text={c.title}
        className="font-display text-6xl leading-none text-royal md:text-9xl"
      />
      <FadeUp delay={0.1}>
        <p className="mt-10 max-w-xl text-xl font-medium text-ink/80">{c.text}</p>
      </FadeUp>

      <Parallax distance={16} className="mt-16">
        <FadeUp>
          <p className="text-xs font-extrabold uppercase tracking-widest text-royal">{c.email}</p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-2 inline-flex items-start gap-2 break-all font-display text-2xl leading-tight text-ink sm:text-4xl md:text-6xl"
          >
            <span className="underline decoration-pink decoration-4 underline-offset-8 transition-colors group-hover:text-royal">
              {contact.email}
            </span>
            <ArrowUpRight
              className="mt-1 size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-10"
              aria-hidden="true"
            />
          </a>
        </FadeUp>
      </Parallax>

      <FadeUp delay={0.1}>
        <div className="mt-14">
          <p className="text-xs font-extrabold uppercase tracking-widest text-royal">{c.linkedin}</p>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 font-display text-3xl text-ink md:text-5xl"
          >
            <span className="underline decoration-yellow decoration-4 underline-offset-8 transition-colors group-hover:text-royal">
              isabel-martinez-castro
            </span>
            <ArrowUpRight
              className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-9"
              aria-hidden="true"
            />
          </a>
        </div>
        <p className="mt-14 text-lg font-bold text-ink/60">{c.upwork}</p>
      </FadeUp>
    </section>
  );
}
