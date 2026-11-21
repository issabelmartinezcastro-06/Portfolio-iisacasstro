"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DisplayTitle, Sparkle, Star } from "@/components/scrapbook";

gsap.registerPlugin(useGSAP);

// Cabecera de color de las páginas interiores, con el mismo estilo que la portada.
export default function PageHero({
  title,
  bg,
  star = "var(--color-pink)",
  sparkle = "var(--color-yellow)",
  children,
}) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.to(".float", {
        y: "random(-12, 12)",
        rotate: "random(-5, 5)",
        duration: "random(2.5, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className={`relative isolate overflow-hidden px-6 pb-16 pt-14 md:pb-24 md:pt-20 ${bg}`}
    >
      <Star className="float absolute right-[8%] top-10 size-16 md:size-28" color={star} />
      <Sparkle className="float absolute bottom-10 left-[6%] size-10" color={sparkle} />
      <Sparkle className="float absolute bottom-14 right-[30%] size-7" color="#ffffff" />
      <div className="relative mx-auto max-w-6xl">
        <DisplayTitle
          text={title}
          className="text-sticker font-display text-6xl leading-[0.98] text-white sm:text-7xl md:text-[8rem]"
        />
        {children}
      </div>
    </section>
  );
}
