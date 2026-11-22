"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CountUp, Polaroid, Star } from "@/components/scrapbook";

// Dos tonos pastel que se alternan, de lado a lado de la pantalla.
const bands = ["bg-sky/30", "bg-pink/25"];
const stickers = [
  "var(--color-yellow)",
  "var(--color-pink)",
  "var(--color-violet)",
  "var(--color-sky)",
  "var(--color-mint)",
];

// Lista de trabajo con filtro por tipo. Cada trabajo: tipo, título, una frase, herramientas y enlaces.
export default function WorkList({ items, filters }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("all");
  const tabs = ["all", ...new Set(items.map((i) => i.category))];
  const shown = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6 pb-8 pt-10" role="group" aria-label="Filtro">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
            className={`relative py-1 font-display text-2xl transition-colors md:text-3xl ${
              active === tab ? "text-royal" : "text-ink/45 hover:text-royal"
            }`}
          >
            {filters[tab]}
            {active === tab && (
              <motion.span
                layoutId="work-filter-underline"
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-1.5 rounded-full bg-pink"
              />
            )}
          </button>
        ))}
      </div>

      <ol>
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((item, i) => {
            const rotate = i % 2 === 0 ? 3 : -3;
            return (
              <motion.li
                key={item.title}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={bands[i % bands.length]}
              >
                <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-[1fr_20rem] md:gap-14">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-royal">
                      {item.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-3xl leading-tight text-ink md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-lg text-ink/80">{item.summary}</p>

                    <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-ink/75">
                      {item.tags.map((tag, n) => (
                        <span key={tag} className="flex items-center gap-3">
                          {n > 0 && <span aria-hidden="true" className="text-pink">✦</span>}
                          {tag}
                        </span>
                      ))}
                    </p>

                    <dl className="mt-6 grid max-w-xl gap-4">
                      {item.points.map((point) => (
                        <div key={point.label}>
                          <dt className="text-xs font-extrabold uppercase tracking-widest text-royal">
                            {point.label}
                          </dt>
                          <dd className="mt-1 text-ink/85">{point.text}</dd>
                        </div>
                      ))}
                    </dl>

                    {item.links?.length > 0 && (
                      <p className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                        {item.links.map((link) => {
                          const cls =
                            "group inline-flex items-center gap-1.5 font-extrabold text-royal";
                          const inner = (
                            <>
                              <span className="underline decoration-pink decoration-4 underline-offset-8">
                                {link.label}
                              </span>
                              <ArrowUpRight
                                className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </>
                          );
                          return link.external ? (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cls}
                            >
                              {inner}
                            </a>
                          ) : (
                            <Link key={link.href} href={link.href} className={cls}>
                              {inner}
                            </Link>
                          );
                        })}
                      </p>
                    )}
                  </div>

                  <div className="mx-auto w-full max-w-xs md:max-w-none">
                    {item.thumbnail ? (
                      <Polaroid
                        {...item.thumbnail}
                        rotate={rotate}
                        sizes="320px"
                        className="w-full"
                        tape="var(--color-pink)"
                      />
                    ) : item.metric ? (
                      <div className="text-center" style={{ rotate: `${rotate}deg` }}>
                        <p className="text-sticker font-display text-6xl text-white md:text-8xl">
                          <CountUp to={item.metric.value} separator={item.metric.separator} />
                        </p>
                        <p className="mt-2 text-sm font-bold text-ink/75">{item.metric.label}</p>
                      </div>
                    ) : (
                      <Star
                        className="mx-auto size-24 md:size-32"
                        color={stickers[i % stickers.length]}
                      />
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>
    </div>
  );
}
