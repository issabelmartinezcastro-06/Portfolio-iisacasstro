"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

gsap.registerPlugin(useGSAP);

// Barra fina que se llena al hacer scroll.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-1.5 origin-left bg-pink"
    />
  );
}

// Estrella garabateada que gira despacio.
export function Star({ className = "", color = "var(--color-pink)", spin = true }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={`${spin ? "animate-[spin_16s_linear_infinite]" : ""} ${className}`}
    >
      <path
        d="M50 4 L61 36 L96 38 L68 59 L78 94 L50 74 L22 94 L32 59 L4 38 L39 36 Z"
        fill={color}
        stroke={color}
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "var(--color-yellow)" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={`animate-[pulse_2.4s_ease-in-out_infinite] ${className}`}>
      <path d="M20 2 Q22 18 38 20 Q22 22 20 38 Q18 22 2 20 Q18 18 20 2Z" fill={color} />
    </svg>
  );
}

// Corazón garabateado.
export function Heart({ className = "", color = "var(--color-pink)" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 90" className={className}>
      <path
        d="M50 82 C 14 56, 6 34, 20 18 C 32 6, 46 14, 50 28 C 54 14, 68 6, 80 18 C 94 34, 86 56, 50 82 Z"
        fill={color}
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Flecha dibujada a mano que se traza al entrar en pantalla.
export function Arrow({ className = "", color = "var(--color-royal)" }) {
  const reduce = useReducedMotion();
  const draw = {
    initial: reduce ? false : { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, margin: "-40px" },
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 120 90" fill="none" className={className}>
      <motion.path
        d="M8 52 C 32 8, 62 84, 104 36"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        {...draw}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <motion.path
        d="M89 40 L106 34 L101 51"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
    </svg>
  );
}

// Foto pegada con cinta: cae con un pequeño rebote y se levanta al pasar el ratón.
export function Polaroid({
  src,
  width,
  height,
  alt = "",
  caption,
  rotate = 0,
  delay = 0,
  tape = "var(--color-pink)",
  sizes = "(min-width: 768px) 560px, 90vw",
  priority = false,
  className = "",
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: -80, rotate: rotate + 12 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 13, delay }}
      whileHover={reduce ? undefined : { y: -10, rotate: rotate * 0.3, scale: 1.03 }}
      className={`relative bg-white p-2.5 pb-9 shadow-xl shadow-ink/25 sm:p-3 sm:pb-11 ${className}`}
    >
      <span
        aria-hidden="true"
        style={{ background: tape }}
        className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 opacity-70"
      />
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
      {caption && (
        <figcaption className="absolute inset-x-3 bottom-2 truncate text-center text-xs font-bold text-ink/70 sm:text-sm">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

// Teléfono con borde oscuro.
export function Phone({ src, width, height, alt = "", rotate = 0, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 70, rotate: rotate - 8 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay }}
      whileHover={reduce ? undefined : { y: -10, scale: 1.04 }}
      className={`overflow-hidden rounded-[2rem] border-[7px] border-ink bg-white shadow-xl shadow-ink/30 ${className}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes="240px"
        className="h-auto w-full"
      />
    </motion.div>
  );
}

// Mueve su contenido un poco más despacio que el scroll.
export function Parallax({ children, distance = 40, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>{children}</motion.div>
    </div>
  );
}

// Aparece subiendo al entrar en pantalla.
export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function formatNumber(n, separator) {
  const text = String(Math.round(n));
  return separator ? text.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : text;
}

// Número que cuenta hasta su valor al entrar en pantalla.
export function CountUp({ to, separator = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduce) {
      el.textContent = formatNumber(to, separator);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = formatNumber(v, separator);
      },
    });
    return () => controls.stop();
  }, [inView, to, reduce, separator]);
  return (
    <span ref={ref} className={className}>
      {formatNumber(reduce ? to : 0, separator)}
    </span>
  );
}

function ScrollWord({ children, progress, range, reduce }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity: reduce ? 1 : opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

// Párrafo cuyas palabras se van llenando de color según lo lees al hacer scroll.
export function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          reduce={reduce}
        >
          {word}
        </ScrollWord>
      ))}
    </p>
  );
}

// Cinta de palabras que se desplaza sin parar y se detiene al pasar el ratón.
export function Marquee({ items, className = "" }) {
  const list = [...items, ...items];
  return (
    <div className={`group overflow-hidden ${className}`} aria-label={items.join(", ")}>
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {list.map((t, i) => (
          <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-10">
            {t}
            <Star className="size-7 shrink-0" spin={false} color="currentColor" />
          </span>
        ))}
      </div>
    </div>
  );
}

// Título gordo cuyas palabras suben una a una al cargar (GSAP).
export function DisplayTitle({ text, className = "", as: Tag = "h1" }) {
  const root = useRef(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".dt-word", {
        y: 50,
        rotate: 5,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.6)",
        stagger: 0.09,
      });
    },
    { scope: root },
  );
  return (
    <Tag ref={root} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="dt-word mr-[0.22em] inline-block">
          {w}
        </span>
      ))}
    </Tag>
  );
}

// Subrayado ondulado dibujado a mano que se traza al entrar en pantalla.
export function Squiggle({ className = "", color = "var(--color-pink)" }) {
  const reduce = useReducedMotion();
  return (
    <svg aria-hidden="true" viewBox="0 0 200 16" fill="none" className={className} preserveAspectRatio="none">
      <motion.path
        d="M4 9 C 20 1, 28 15, 44 8 S 68 1, 84 8 S 108 15, 124 8 S 148 1, 164 8 S 188 14, 196 7"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </svg>
  );
}

// Título de sección con una estrella al lado y un subrayado dibujado a mano.
export function SectionTitle({ children, id, className = "" }) {
  return (
    <FadeUp className={`relative inline-block ${className}`}>
      <h2 id={id} className="font-display text-5xl leading-none text-royal md:text-7xl">
        {children}
      </h2>
      <Squiggle className="mt-2 h-3 w-2/3 md:h-4" />
      <Star className="absolute -right-4 -top-8 size-10 md:-right-16 md:-top-6 md:size-16" />
    </FadeUp>
  );
}

// Avión de papel: flota suave y, cuando `flying` es verdadero, sale volando.
export function PaperPlane({ className = "", flying = false, color = "var(--color-royal)" }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 120 100"
      fill="none"
      className={className}
      animate={
        flying
          ? { x: 420, y: -260, rotate: 18, opacity: 0, transition: { duration: 1.1, ease: "easeIn" } }
          : reduce
            ? { x: 0, y: 0, rotate: 0, opacity: 1 }
            : { x: 0, y: [0, -12, 0], rotate: [-4, 4, -4], opacity: 1, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
      }
    >
      <path
        d="M8 46 L112 8 L74 92 L56 58 Z"
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
        fill="#ffffff"
      />
      <path d="M56 58 L112 8" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d="M56 58 L52 82 L66 68" stroke={color} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
    </motion.svg>
  );
}

// Estallido de estrellas y corazones desde un punto. Cambia `fire` para lanzarlo de nuevo.
export function Burst({ fire, className = "" }) {
  const reduce = useReducedMotion();
  if (!fire || reduce) return null;
  const colors = [
    "var(--color-pink)",
    "var(--color-yellow)",
    "var(--color-sky)",
    "var(--color-violet)",
    "var(--color-mint)",
  ];
  const count = 14;
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute ${className}`} key={fire}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const radius = 70 + ((i * 37) % 60);
        const Shape = i % 3 === 0 ? Heart : Star;
        return (
          <motion.span
            key={i}
            className="absolute left-0 top-0 block size-6"
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
            animate={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius - 20,
              scale: [0, 1.2, 0.8],
              rotate: i % 2 ? 180 : -180,
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Shape className="size-full" color={colors[i % colors.length]} spin={false} />
          </motion.span>
        );
      })}
    </span>
  );
}
