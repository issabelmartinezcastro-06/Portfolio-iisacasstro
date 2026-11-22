"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Burst, PaperPlane } from "@/components/scrapbook";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28, rotate: -1.5 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 110, damping: 16 } },
};

// Cada campo es un cuadro de un color pastel distinto. Al enfocarlo se oscurece, se eleva y le sale un aro.
const tones = {
  pink: "bg-pink/30 focus-within:bg-pink/45 focus-within:ring-pink/50",
  sky: "bg-sky/40 focus-within:bg-sky/60 focus-within:ring-sky/60",
  yellow: "bg-yellow/45 focus-within:bg-yellow/65 focus-within:ring-yellow/60",
  mint: "bg-mint/45 focus-within:bg-mint/65 focus-within:ring-mint/60",
};

function Field({ id, label, tone, textarea = false, ...props }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <motion.div
      variants={item}
      className={`group relative rounded-2xl px-5 pb-2 pt-4 ring-0 transition-all duration-300 focus-within:-translate-y-1 focus-within:ring-4 ${tones[tone]}`}
    >
      <label htmlFor={id} className="text-xs font-extrabold uppercase tracking-widest text-ink/70">
        {label} <span className="text-ink">*</span>
      </label>
      <Tag
        id={id}
        name={id}
        required
        rows={textarea ? 5 : undefined}
        className="mt-1 block w-full resize-none bg-transparent py-2 text-lg font-medium text-ink outline-none placeholder:text-ink/40"
        {...props}
      />
    </motion.div>
  );
}

// Formulario sin servidor: al enviar abre el correo del visitante con el mensaje ya escrito.
// Los campos entran uno a uno y, al enviar, el avión de papel sale volando entre estrellas.
export default function ContactForm({ email, text }) {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(0);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("from")}`;
    const url = `mailto:${email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
    setSent((n) => n + 1);
    window.location.href = url;
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="relative space-y-8"
      variants={container}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <PaperPlane
        color="#7c5ce0"
        flying={sent > 0}
        className="absolute -top-28 right-0 w-20 md:-top-32 md:w-24"
      />
      <Field id="name" tone="pink" label={text.name} autoComplete="name" />
      <Field id="from" tone="sky" label={text.email} type="email" autoComplete="email" />
      <Field id="subject" tone="yellow" label={text.subject} />
      <Field id="message" tone="mint" label={text.message} textarea />

      <motion.div variants={item} className="relative">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 text-2xl font-extrabold text-royal"
        >
          <span className="underline decoration-pink decoration-4 underline-offset-8">{text.send}</span>
          <ArrowUpRight
            className="size-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
        <Burst fire={sent} className="left-24 top-3" />
        <AnimatePresence mode="wait">
          <motion.p
            key={sent ? "done" : "hint"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-live="polite"
            className={`mt-4 text-sm font-semibold ${sent ? "text-royal" : "text-ink/60"}`}
          >
            {sent ? text.done : text.hint}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
}
