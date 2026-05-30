"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "AI Resume Analyzer",
    year: "2026",
    status: "LIVE",
    type: "AI APPLICATION",

    image: "/projects/resume-analyzer.png",

    description:
      "AI-powered resume intelligence platform designed to evaluate ATS compatibility, extract critical keywords, generate contextual summaries, identify strengths and weaknesses, and deliver actionable optimization recommendations through large language models.",

    flow: ["UPLOAD", "ANALYZE", "OPTIMIZE", "REPORT"],

    stack: ["Next.js", "FastAPI", "Gemini API", "Tailwind CSS"],

    features: [
      "ATS Compatibility Scoring",
      "AI Resume Summarization",
      "Keyword Extraction Engine",
      "Strength & Weakness Detection",
      "Optimization Recommendations",
      "Professional Feedback Generation",
    ],

    github: "https://github.com/anushka-codes1/Resume-Analyser",

    demo: "https://resume-analyser-rho-black.vercel.app/",
  },

  {
    id: "02",

    title: "Campus Swap",
    year: "2025",
    status: "HACKATHON",
    type: "FULL STACK PLATFORM",

    image: "/projects/campus-swap.png",

    description:
      "Student-focused marketplace platform that enables users to exchange, buy, and sell academic resources within a trusted campus ecosystem. Designed to simplify peer-to-peer transactions while promoting affordability and sustainability.",

    flow: ["LIST", "DISCOVER", "CONNECT", "EXCHANGE"],

    stack: ["React", "Node.js", "MongoDB", "Express"],

    features: [
      "Campus Marketplace",
      "Peer-to-Peer Listings",
      "Resource Discovery",
      "User Authentication",
      "Listing Management",
      "Student Community Exchange",
    ],

    github: "https://github.com/anushka-codes1/CampusSwap",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-black
        text-white
        px-6
        md:px-16
        py-32
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <p className="text-zinc-500 tracking-[0.3em] mb-4">/PROJECTS</p>

        <h2
          className="
            text-5xl
            md:text-8xl
            font-bold
            tracking-tight
            mb-8
          "
        >
          System
          <br />
          Archive
        </h2>

        <p
          className="
            text-zinc-400
            max-w-2xl
            text-lg
            mb-32
          "
        >
          A collection of AI systems, full-stack applications, and software
          engineering projects focused on solving real-world problems through
          intelligent design and scalable architecture.
        </p>

        {/* PROJECTS */}

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {/* PROJECT NUMBER */}

              <p
                className="
                  text-zinc-600
                  text-sm
                  tracking-[0.4em]
                  mb-6
                "
              >
                PROJECT_{project.id}
              </p>

              {/* TITLE */}

              <h3
                className="
                  text-5xl
                  md:text-8xl
                  font-bold
                  leading-none
                  mb-10
                "
              >
                {project.title}
              </h3>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-zinc-500">{project.year}</span>

                <span
                  className="
      px-3
      py-1
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      text-xs
      tracking-[0.2em]
    "
                >
                  {project.status}
                </span>
              </div>

              {/* FLOW */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-zinc-400
                  text-sm
                  md:text-base
                  tracking-[0.2em]
                  mb-12
                "
              >
                {project.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <span>{step}</span>

                    {i !== project.flow.length - 1 && (
                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                        }}
                      >
                        →
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>

              {/* SCREENSHOT */}

              <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                className="
overflow-hidden
rounded-[32px]
border
border-white/10
bg-white/[0.03]
mb-16
shadow-[0_0_60px_rgba(255,255,255,0.05)]
"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className="w-full object-cover"
                />
              </motion.div>

              {/* CONTENT */}

              <div
                className="
                  grid
                  lg:grid-cols-[1.5fr_1fr]
                  gap-16
                "
              >
                {/* LEFT */}

                <div>
                  <p
                    className="
                      text-zinc-400
                      text-lg
                      leading-relaxed
                      max-w-3xl
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* RIGHT */}

                <div>
                  {/* TYPE */}

                  <div className="mb-8">
                    <p className="text-zinc-500 text-sm mb-3">TYPE</p>

                    <p>{project.type}</p>
                  </div>

                  {/* STACK */}

                  <div className="mb-8">
                    <p className="text-zinc-500 text-sm mb-3">STACK</p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3
                            py-1
                            rounded-full
                            border
                            border-white/10
                            text-sm
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LINKS */}

                  <div className="flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5
                          py-3
                          rounded-full
                          bg-white
                          text-black
                          font-medium
                        "
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-3
                        rounded-full
                        border
                        border-white/10
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* FEATURES */}

              <div className="mt-16">
                <p
                  className="
                    text-zinc-500
                    tracking-[0.3em]
                    text-sm
                    mb-6
                  "
                >
                  CAPABILITIES
                </p>

                <div
                  className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-4
                  "
                >
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-5
transition-all
duration-300
hover:border-white/20
hover:bg-white/[0.05]
hover:-translate-y-1
"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}

              {index !== projects.length - 1 && (
                <div className="mt-32 border-t border-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
