import { notFound } from "next/navigation";
import { getDictionary, isLocale, pageMetadata } from "@/lib/i18n";
import { contact } from "@/lib/site";
import { Arrow, FadeUp, Marquee, Star } from "@/components/scrapbook";
import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return pageMetadata(lang, "/contacto", t.nav.contact, t.contact.description);
}

// Línea de contacto: etiqueta, dato en letra gorda y una flecha dibujada que se mueve al pasar el ratón.
// Colores de cada línea: barrido al pasar el ratón y flecha dibujada.
const lineTones = [
  { sweep: "bg-pink/30", arrow: "#e8508a" },
  { sweep: "bg-sky/50", arrow: "#3d8fd1" },
  { sweep: "bg-mint/50", arrow: "#2fae80" },
];

function ContactLine({ label, value, href, external = false, index = 0 }) {
  const tone = lineTones[index % lineTones.length];
  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 -inset-x-4 -z-10 origin-left scale-x-0 rounded-2xl transition-transform duration-500 ease-out group-hover:scale-x-100 ${tone.sweep}`}
      />
      <span className="min-w-0">
        <span className="block text-xs font-extrabold uppercase tracking-widest text-royal">{label}</span>
        <span className="mt-1 block break-words font-display text-2xl leading-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
          {value}
        </span>
      </span>
      {href && (
        <Arrow color={tone.arrow} className="hidden w-14 shrink-0 -rotate-12 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-2 sm:block" />
      )}
    </>
  );
  const cls = "group relative isolate flex items-center justify-between gap-6 py-7";
  return (
    <FadeUp delay={0.15 + index * 0.12}>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={cls}
        >
          {inner}
        </a>
      ) : (
        <div className={cls}>{inner}</div>
      )}
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
      <PageHero title={c.heading} bg="bg-sky/65" star="var(--color-pink)" sparkle="#ffffff">
        <FadeUp delay={0.6}>
          <p className="mt-8 max-w-xl text-xl font-medium text-ink/85">{c.intro}</p>
        </FadeUp>
      </PageHero>

      <section className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.15fr] md:gap-20">
        <Star
          className="absolute -top-6 right-6 size-12 md:right-1/2 md:size-16"
          color="var(--color-yellow)"
        />
        <div>
          <div className="divide-y-2 divide-dashed divide-ink/20">
            <ContactLine label={c.email} value={contact.email} href={`mailto:${contact.email}`} index={0} />
            <ContactLine
              label={c.linkedin}
              value="isabel-martinez-castro"
              href={contact.linkedin}
              external
              index={1}
            />
            <ContactLine label="Upwork" value={c.upwork.replace("Upwork: ", "")} index={2} />
          </div>
        </div>

        <FadeUp delay={0.15}>
          <h2 className="font-display text-4xl leading-none text-royal md:text-5xl">{c.form.title}</h2>
          <div className="mt-10">
            <ContactForm email={contact.email} text={c.form} />
          </div>
        </FadeUp>
      </section>

      <Marquee
        items={words}
        className="-rotate-1 bg-pink/45 py-5 font-display text-3xl text-royal md:text-5xl"
      />
      <div className="h-16" />
    </>
  );
}
