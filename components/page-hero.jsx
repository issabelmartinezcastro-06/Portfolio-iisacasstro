"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DisplayTitle, Heart, Sparkle, Star, Sticker } from "@/components/scrapbook";

gsap.registerPlugin(useGSAP);

// Cabecera de color de las páginas interiores, con el mismo estilo que la portada.
export default function PageHero({
  title,
  bg,
  star = "var(--color-pink)",
  sparkle = "var(--color-yellow)",
  sticker,
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
      <Heart className="float absolute right-[22%] top-24 hidden size-10 md:block" color="#ffffff" />
      <Star className="float absolute bottom-6 right-[10%] hidden size-8 md:block" color="#ffffff" spin={false} />
      {sticker && (
        <Sticker
          name={sticker}
          bob={false}
          delay={0.5}
          className="absolute -bottom-1 right-[4%] z-10 w-24 sm:w-32 md:right-[9%] md:w-44"
        />
      )}
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
