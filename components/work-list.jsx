"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CountUp, Polaroid, Star } from "@/components/scrapbook";

const stickers = [
  "var(--color-yellow)",
  "var(--color-mint)",
  "var(--color-violet)",
  "var(--color-sky)",
  "var(--color-pink)",
];

// Lista de trabajo: número grande, título en letras gordas, métodos y una imagen o cifra.
export default function WorkList({ items, linkLabel }) {
  const reduce = useReducedMotion();
  return (
    <ol className="mt-16 divide-y-2 divide-dashed divide-ink/20">
      {items.map((item, i) => {
        const rotate = i % 2 === 0 ? 3 : -3;
        const rowClass =
          "group grid items-center gap-8 py-12 md:grid-cols-[5rem_1fr_20rem] md:gap-10";

        const inner = (
          <>
            <span className="font-display text-6xl text-pink md:text-7xl">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <h3
                className={`font-display text-3xl leading-tight text-ink md:text-5xl ${
                  item.href ? "transition-transform duration-300 group-hover:translate-x-3" : ""
                }`}
              >
                {item.title}
              </h3>
              <p className="mt-3 max-w-xl text-lg text-ink/75">{item.summary}</p>
              <dl className="mt-6 grid max-w-xl gap-4">
                {item.points.map((point) => (
                  <div key={point.label}>
                    <dt className="text-xs font-extrabold uppercase tracking-widest text-royal">
                      {point.label}
                    </dt>
                    <dd className="mt-1 text-ink/80">{point.text}</dd>
                  </div>
                ))}
              </dl>
              {item.href && (
                <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-royal">
                  {linkLabel}
                  <ArrowUpRight
                    className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
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
                  <p className="font-display text-6xl text-royal md:text-7xl">
                    <CountUp to={item.metric.value} separator={item.metric.separator} />
                  </p>
                  <p className="mt-2 text-sm font-bold text-ink/70">{item.metric.label}</p>
                </div>
              ) : (
                <Star className="mx-auto size-24 md:size-32" color={stickers[i % stickers.length]} />
              )}
            </div>
          </>
        );

        return (
          <li key={item.title}>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.href ? (
                <Link href={item.href} className={rowClass}>
                  {inner}
                </Link>
              ) : (
                <div className={rowClass}>{inner}</div>
              )}
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
