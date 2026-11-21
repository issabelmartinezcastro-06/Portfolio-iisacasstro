import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { contact } from "@/lib/site";
import { FadeUp, Marquee } from "@/components/scrapbook";
import PageHero from "@/components/page-hero";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, "/contacto", t.nav.contact, t.contact.description);
}

// Fila de contacto de lado a lado: se llena de color al pasar el ratón.
function ContactRow({ label, value, href, band, sweep, external = false }) {
  return (
    <FadeUp>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`group relative isolate block overflow-hidden ${band}`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${sweep}`}
        />
        <span className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-10 md:py-14">
          <span className="min-w-0">
            <span className="block text-xs font-extrabold uppercase tracking-widest text-royal">
              {label}
            </span>
            <span className="mt-2 block break-words font-display text-xl leading-tight text-ink sm:text-3xl md:text-5xl">
              {value}
            </span>
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-background transition-transform duration-300 group-hover:rotate-12 md:size-16">
            <ArrowUpRight
              className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-8"
              aria-hidden="true"
            />
          </span>
        </span>
      </a>
    </FadeUp>
  );
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getDictionary(lang).contact;
  const words = [...c.marquee, ...c.marquee];

  return (
    <>
      <PageHero title={c.heading} bg="bg-violet/60" star="var(--color-yellow)" sparkle="var(--color-pink)">
        <FadeUp delay={0.6}>
          <p className="mt-8 max-w-xl text-xl font-medium text-ink/85">{c.text}</p>
        </FadeUp>
      </PageHero>

      <div>
        <ContactRow
          label={c.email}
          value={contact.email}
          href={`mailto:${contact.email}`}
          band="bg-sky/40"
          sweep="bg-pink/40"
        />
        <ContactRow
          label={c.linkedin}
          value="isabel-martinez-castro"
          href={contact.linkedin}
          band="bg-yellow/40"
          sweep="bg-mint/60"
          external
        />
        <FadeUp>
          <p className="mx-auto max-w-6xl bg-mint/40 px-6 py-8 text-lg font-bold text-ink/70">
            {c.upwork}
          </p>
        </FadeUp>
      </div>

      <Marquee
        items={words}
        className="-rotate-1 bg-ink py-5 font-display text-3xl text-background md:text-5xl"
      />
      <div className="h-16" />
    </>
  );
}
