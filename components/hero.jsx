"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero({ eyebrow, title, subtitle, cta }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.07,
      });
      gsap.from(".hero-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.to(".blob", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden px-6 pt-20 pb-28 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="blob absolute -top-10 -right-10 size-56 rounded-full bg-pink opacity-70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="blob absolute top-40 -left-16 size-48 rounded-full bg-mint opacity-70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="blob absolute bottom-0 right-1/4 size-40 rounded-full bg-yellow opacity-80 blur-2xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-background">
          <Sparkles className="size-4" aria-hidden="true" /> {eyebrow}
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
          {title.split(" ").map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-xl text-lg text-ink/75">{subtitle}</p>
        <a
          href="#proyectos"
          className="hero-fade mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-background transition-transform hover:-translate-y-1"
        >
          {cta} <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
