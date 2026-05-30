"use client";

import { motion } from "framer-motion";

const links = [
  { label: "/CORE", id: "core" },
  { label: "/STACK", id: "stack" },
  { label: "/PROJECTS", id: "projects" },
  { label: "/MEMORY", id: "memory" },
  { label: "/CONTACT", id: "contact" },
];

export default function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-2
          rounded-full
          border border-white/10
          bg-black/40
          backdrop-blur-xl
          px-3 py-2
          shadow-lg
        "
      >
        {links.map((link) => (
          <motion.button
            key={link.id}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(link.id)}
            className="
              rounded-full
              px-4 py-2
              text-xs md:text-sm
              tracking-[0.2em]
              text-zinc-400
              hover:text-white
              transition-colors
            "
          >
            {link.label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}