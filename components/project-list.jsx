"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Polaroid, Sparkle } from "@/components/scrapbook";
import { colorClasses } from "@/lib/projects";

// Lista de proyectos: número grande, título en letras gordas y una foto pegada.
export default function ProjectList({ lang, projects, label }) {
  const reduce = useReducedMotion();
  return (
    <ol className="mt-16 divide-y-2 divide-dashed divide-ink/20">
      {projects.map((project, i) => {
        const content = project[lang];
        const rotate = i % 2 === 0 ? 3 : -3;
        return (
          <li key={project.slug}>
            <motion.div
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/${lang}/modulos/${project.slug}`}
                className="group grid items-center gap-8 py-12 md:grid-cols-[5rem_1fr_20rem] md:gap-10"
              >
                <span className="font-display text-6xl text-pink md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-display text-4xl leading-tight text-ink transition-transform duration-300 group-hover:translate-x-3 md:text-5xl">
                    {content.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg text-ink/75">{content.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="-rotate-1 rounded-full border-2 border-ink/80 px-3 py-1 text-xs font-bold even:rotate-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-royal">
                    {label}
                    <ArrowUpRight
                      className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="mx-auto w-full max-w-xs md:max-w-none">
                  {project.thumbnail ? (
                    <Polaroid
                      {...project.thumbnail}
                      rotate={rotate}
                      sizes="320px"
                      className="w-full"
                      tape={i % 2 === 0 ? "var(--color-pink)" : "var(--color-yellow)"}
                    />
                  ) : (
                    <div
                      className={`relative grid aspect-video w-full place-items-center rounded-sm ${colorClasses[project.color]} transition-transform duration-300 group-hover:rotate-2`}
                      style={{ rotate: `${rotate}deg` }}
                    >
                      <Sparkle className="size-14" color="var(--color-background)" />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
