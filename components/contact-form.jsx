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
        className="mt-1 block w-full min-w-0 resize-none bg-transparent py-2 text-lg font-medium text-ink outline-none placeholder:text-ink/40"
        {...props}
      />
    </motion.div>
  );
}

// Con la clave de Web3Forms el mensaje llega directo a la bandeja; sin ella se abre el correo del visitante.
// Al pulsar enviar, el avión de papel sale volando y estallan estrellas al instante, sin esperar a la red.
export default function ContactForm({ email, text }) {
  const reduce = useReducedMotion();
  const [presses, setPresses] = useState(0); // lanza el estallido en cada pulsación
  const [flying, setFlying] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setPresses((n) => n + 1);
    setFlying(true);

    if (!accessKey) {
      const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("from")}`;
      const url = `mailto:${email}?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
      setStatus("done");
      window.location.href = url;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.get("name"),
          email: data.get("from"),
          subject: data.get("subject"),
          message: data.get("message"),
          botcheck: data.get("botcheck") || "",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error("rejected");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
      setFlying(false);
    }
  }

  const message =
    status === "sending"
      ? text.sending
      : status === "error"
        ? text.error
        : status === "done"
          ? accessKey
            ? text.sentOk
            : text.done
          : accessKey
            ? ""
            : text.hint;

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
        flying={flying}
        className="absolute -top-28 right-0 w-20 md:-top-32 md:w-24"
      />
      <Field id="name" tone="pink" label={text.name} autoComplete="name" />
      <Field id="from" tone="sky" label={text.email} type="email" autoComplete="email" />
      <Field id="subject" tone="yellow" label={text.subject} />
      <Field id="message" tone="mint" label={text.message} textarea />
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <motion.div variants={item} className="relative">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={reduce ? undefined : { y: -4, rotate: -1.5 }}
          whileTap={reduce ? undefined : { scale: 0.93, rotate: 2 }}
          className="group inline-flex items-center gap-3 rounded-full bg-royal px-8 py-4 text-xl font-extrabold text-white shadow-lg shadow-royal/30 disabled:opacity-60"
        >
          {text.send}
          <ArrowUpRight
            className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </motion.button>
        <Burst fire={presses} className="left-28 top-6" />
        <AnimatePresence mode="wait">
          {message && (
            <motion.p
              key={status}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-live="polite"
              className={`mt-4 text-sm font-semibold ${
                status === "error" ? "text-[#e8508a]" : status === "done" ? "text-royal" : "text-ink/60"
              }`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.form>
  );
}
