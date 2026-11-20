"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { colorClasses } from "@/lib/projects";

export default function ProjectCard({ lang, project, label, index }) {
  const content = project[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
    >
      <Link
        href={`/${lang}/modulos/${project.slug}`}
        className={`group flex h-72 flex-col justify-between rounded-3xl p-7 text-ink ${colorClasses[project.color]}`}
      >
        <div>
          <h3 className="text-2xl font-extrabold">{content.title}</h3>
          <p className="mt-2 text-ink/75">{content.summary}</p>
        </div>
        <span className="flex items-center justify-between font-semibold">
          {label}
          <ArrowUpRight
            className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </motion.div>
  );
}
