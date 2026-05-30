"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-zinc-500 tracking-[0.3em] mb-4">/CONTACT</p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let's Build Something Great
        </h2>

        <p className="text-zinc-400 max-w-2xl mb-16 text-lg">
          Open to internships, freelance opportunities, collaborations, and
          exciting software engineering projects.
        </p>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-10
            md:p-14
          "
        >
          {/* Glow Background */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/10
              via-violet-500/10
              to-blue-500/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            {/* Header */}

            <div className="mb-12">
              <p className="text-zinc-500 tracking-[0.3em] text-sm mb-3">
                DIGITAL BUSINESS CARD
              </p>

              <h3 className="text-4xl md:text-5xl font-bold">
                Anushka Mukherjee
              </h3>

              <p className="text-zinc-400 mt-3 text-lg">
                Aspiring Full Stack Engineer • AI Enthusiast
              </p>
            </div>

            {/* Contact Grid */}

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:anushka.classroom@gmail.com"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  transition-all
                  hover:border-white/30
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-zinc-500 text-xs tracking-[0.3em] mb-3">
                  EMAIL
                </p>

                <p className="text-lg group-hover:text-white transition">
                  anushka.classroom@gmail.com
                </p>
              </a>

              <a
                href="https://github.com/anushka-codes1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  transition-all
                  hover:border-white/30
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-zinc-500 text-xs tracking-[0.3em] mb-3">
                  GITHUB
                </p>

                <p className="text-lg group-hover:text-white transition">
                  github.com/anushka-codes1
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/anushka-mukherjee28/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  transition-all
                  hover:border-white/30
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-zinc-500 text-xs tracking-[0.3em] mb-3">
                  LINKEDIN
                </p>

                <p className="text-lg group-hover:text-white transition">
                  linkedin.com/in/anushka-mukherjee28
                </p>
              </a>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                "
              >
                <p className="text-zinc-500 text-xs tracking-[0.3em] mb-3">
                  STATUS
                </p>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                  <span className="text-lg">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Footer */}

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-zinc-500 text-xs tracking-[0.3em]">
                  CURRENT FOCUS
                </p>

                <p className="mt-2 text-zinc-300">
                  Full Stack Development • AI Systems • SaaS Products
                </p>
              </div>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="mailto:anushka.classroom@gmail.com"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  hover:bg-white/20
                  transition
                  text-center
                "
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-zinc-600 text-sm tracking-[0.2em]">
            DESIGNED & DEVELOPED BY
          </p>

          <p className="text-zinc-300 mt-2 font-medium">Anushka Mukherjee</p>

          <p className="text-zinc-700 text-xs mt-4 tracking-[0.3em]">
            © 2026 • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
