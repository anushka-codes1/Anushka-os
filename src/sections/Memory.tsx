"use client";

import { motion } from "framer-motion";

const memories = [
  {
    year: "2025",
    title: "Started my Journey as an aspiring AI Engineer at Vedam",
    description:
      "Began exploring Artificial Intelligence and modern web development by building small projects in college.",
  },

  {
    year: "2025",
    title: "Built CampusSwap in a 24 Hour College Hackathon",
    description:
      "Developed a student-focused campus marketplace platform designed to simplify buying, selling, and exchanging items within college communities.",
  },

  {
    year: "2026",
    title: "Built my First Solo SaaS Project: AI Resume Analyzer",
    description:
      "Created an AI-powered ATS Resume Analyzer using Gemini, FastAPI, and modern full-stack technologies.",
  },

  {
    year: "2026",
    title: "Secured a Web Development Internship at ATFRO",
    description:
      "Worked on real-world development projects and gained practical industry exposure by contributing to a startup environment.",
  },

  {
    year: "NOW",
    title: "Engineering Path Active",
    description:
      "Aspiring Full Stack Engineer focused on building intelligent software systems, scalable web applications, and AI-powered products.",
  },
];

export default function Memory() {
  return (
    <section
      id="memory"
      className="relative overflow-hidden min-h-screen bg-black text-white px-6 md:px-16 py-32"
    >
      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-zinc-500 tracking-[0.3em] mb-4">/MEMORY</p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Neural Memory Archive
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-20">
          A timeline of milestones, projects, and experiences that have shaped
          my journey into software engineering and artificial intelligence.
        </p>

        {/* TIMELINE */}

        <div className="relative border-l border-white/10 ml-4">
          {/* SCANNING BEAM */}

          <motion.div
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-[-1px]
              top-0
              w-[2px]
              h-32
              bg-gradient-to-b
              from-transparent
              via-white/70
              to-transparent
              pointer-events-none
            "
          />

          {memories.map((memory, index) => (
            <motion.div
              key={memory.year + memory.title}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              whileHover={{
                x: 10,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative pl-12 pb-24"
            >
              {/* NODE */}

              {index === memories.length - 1 ? (
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    absolute
                    -left-[10px]
                    top-2
                    h-5
                    w-5
                    rounded-full
                    bg-white
                    shadow-[0_0_35px_rgba(255,255,255,0.9)]
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    -left-[10px]
                    top-2
                    h-5
                    w-5
                    rounded-full
                    bg-white
                  "
                />
              )}

              {/* YEAR */}

              <p className="text-zinc-500 mb-3 tracking-[0.25em] text-sm">
                [{memory.year}]
              </p>

              {/* TITLE */}

              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                {memory.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                {memory.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}