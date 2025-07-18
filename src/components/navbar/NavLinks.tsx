"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = ({ links }: { links: { name: string; link: string }[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {links.map((navLink, index) => {
        const isActive =
          navLink.link === "/"
            ? pathname === navLink.link
            : pathname.startsWith(navLink.link);

        return (
          <Link
            key={index}
            href={navLink.link}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative inline-block rounded-lg px-3 py-2 text-sm transition-colors delay-150"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-zinc-800"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span
              className={`relative z-10 ${isActive
                ? "text-blue-500"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                }`}
            >
              {navLink.name}
            </span>
            {isActive && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;