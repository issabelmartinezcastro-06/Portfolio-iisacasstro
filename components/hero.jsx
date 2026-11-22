"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { DisplayTitle, Phone, Polaroid, Sparkle, Star, Sticker } from "@/components/scrapbook";

gsap.registerPlugin(useGSAP);

export default function Hero({ eyebrow, title, subtitle, scroll, shots }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.to(".float", {
        y: "random(-14, 14)",
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
    <section ref={root} className="relative isolate overflow-hidden bg-sky/70 px-6 pb-24 pt-14 md:pb-32 md:pt-20">
      <Star className="float absolute left-[46%] top-24 -z-0 hidden size-20 md:block" />
      <Sparkle className="float absolute left-8 top-1/2 size-10" />
      <Sparkle className="float absolute bottom-16 right-1/3 size-8" color="var(--color-pink)" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="hero-fade mb-6 inline-block -rotate-2 rounded-full bg-pink px-5 py-1.5 text-sm font-extrabold uppercase tracking-widest text-ink">
            {eyebrow}
          </p>
          <DisplayTitle
            text={title}
            className="text-sticker font-display text-[3.4rem] leading-[0.98] text-white sm:text-7xl md:text-[5.6rem]"
          />
          <p className="hero-fade mt-8 max-w-md text-lg font-medium text-ink/80">{subtitle}</p>
          <div className="hero-fade mt-8 flex items-end gap-6">
            <Sticker name="saludar" rotate={-3} delay={0.8} className="w-24 sm:w-28" />
            <p className="inline-flex items-center gap-2 pb-4 text-sm font-extrabold uppercase tracking-widest text-ink/70">
              {scroll} <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </p>
          </div>
        </div>

        <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem] md:h-[34rem] md:max-w-none">
          <div className="float absolute left-0 top-0 w-[82%]">
            <Polaroid {...shots.browser} rotate={-5} priority caption="STL" className="w-full" />
          </div>
          <div className="float absolute bottom-0 right-0 w-[38%]">
            <Phone {...shots.phone} rotate={6} delay={0.25} />
          </div>
          <div className="float absolute bottom-6 left-[6%] w-[44%]">
            <Polaroid {...shots.small} rotate={4} delay={0.45} tape="var(--color-yellow)" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
