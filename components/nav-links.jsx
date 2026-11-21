"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

// Enlaces del menú. El subrayado se desliza hasta la página activa.
export default function NavLinks({ id, links, className = "" }) {
  const pathname = usePathname();
  return (
    <nav className={className} aria-label="Principal">
      {links.map((link) => {
        const active = link.match.some((m) => pathname.includes(m));
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className="relative py-1 text-sm font-extrabold hover:text-royal"
          >
            {link.label}
            {active && (
              <motion.span
                layoutId={`nav-underline-${id}`}
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-1 rounded-full bg-pink"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
