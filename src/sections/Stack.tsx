"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const technologies = [
  {
    name: "Python",
    category: "LANGUAGE",
    x: "50%",
    y: "12%",
  },

  {
    name: "Java",
    category: "LANGUAGE",
    x: "32%",
    y: "24%",
  },

  {
    name: "JavaScript",
    category: "LANGUAGE",
    x: "68%",
    y: "24%",
  },

  {
    name: "React",
    category: "FRONTEND",
    x: "25%",
    y: "42%",
  },

  {
    name: "TypeScript",
    category: "LANGUAGE",
    x: "75%",
    y: "42%",
  },

  {
    name: "MongoDB",
    category: "DATABASE",
    x: "28%",
    y: "72%",
  },

  {
    name: "Next.js",
    category: "FRAMEWORK",
    x: "43%",
    y: "72%",
  },

  {
    name: "FastAPI",
    category: "BACKEND",
    x: "57%",
    y: "72%",
  },

  {
    name: "Tailwind CSS",
    category: "UI",
    x: "72%",
    y: "72%",
  },

  {
    name: "MySQL",
    category: "DATABASE",
    x: "50%",
    y: "88%",
  },
];

const connections = [
  // top

  { from: "Python", to: "Java", x1: "50%", y1: "12%", x2: "32%", y2: "24%" },

  {
    from: "Python",
    to: "JavaScript",
    x1: "50%",
    y1: "12%",
    x2: "68%",
    y2: "24%",
  },

  // middle

  { from: "Java", to: "React", x1: "32%", y1: "24%", x2: "25%", y2: "42%" },

  {
    from: "JavaScript",
    to: "TypeScript",
    x1: "68%",
    y1: "24%",
    x2: "75%",
    y2: "42%",
  },

  // framework layer

  { from: "React", to: "Next.js", x1: "25%", y1: "42%", x2: "43%", y2: "72%" },

  {
    from: "TypeScript",
    to: "FastAPI",
    x1: "75%",
    y1: "42%",
    x2: "57%",
    y2: "72%",
  },

  // NEW

  {
    from: "MongoDB",
    to: "Next.js",
    x1: "28%",
    y1: "72%",
    x2: "43%",
    y2: "72%",
  },

  {
    from: "Tailwind CSS",
    to: "Next.js",
    x1: "72%",
    y1: "72%",
    x2: "43%",
    y2: "72%",
  },

  {
    from: "MongoDB",
    to: "FastAPI",
    x1: "28%",
    y1: "72%",
    x2: "57%",
    y2: "72%",
  },

  {
    from: "Tailwind CSS",
    to: "React",
    x1: "72%",
    y1: "72%",
    x2: "25%",
    y2: "42%",
  },

  // bottom

  { from: "Next.js", to: "MySQL", x1: "43%", y1: "72%", x2: "50%", y2: "88%" },

  { from: "FastAPI", to: "MySQL", x1: "57%", y1: "72%", x2: "50%", y2: "88%" },
];

const packets = connections.map((c, index) => ({
  startX: c.x1,
  startY: c.y1,
  endX: c.x2,
  endY: c.y2,
  duration: 4 + (index % 3),
}));

export default function Stack() {
  const [activeTech, setActiveTech] = useState(technologies[0]);

  return (
    <section
      id="stack"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-zinc-500 tracking-[0.3em] mb-4">/STACK</p>
        <h2 className="text-5xl md:text-8xl font-bold mb-6">
          Neural Technology Network
        </h2>
        <p className="text-zinc-400 max-w-3xl mb-16 text-lg">
          Technologies interconnected through full-stack engineering, AI
          systems, and modern software architecture.
        </p>

        <div className="lg:hidden space-y-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs text-zinc-500 mb-2">{tech.category}</p>
              <h3 className="text-xl font-semibold">{tech.name}</h3>
              <div className="mt-3 flex gap-2">
                              <span className="px-3 py-1 rounded-full border border-white/10 text-xs">
                     {tech.category}
                </span>

                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">
                  CONNECTED
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative h-[950px] rounded-3xl border border-white/10 overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[150px]" />

          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
          />

          <svg className="absolute inset-0 w-full h-full">
            {connections.map((line, i) => (
              <motion.line
                animate={{
                  opacity:
                    activeTech.name === line.from || activeTech.name === line.to
                      ? 1
                      : 0.25,
                }}
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={
                  activeTech.name === line.from || activeTech.name === line.to
                    ? "rgba(255,255,255,0.8)"
                    : "rgba(255,255,255,0.08)"
                }
                strokeWidth={
                  activeTech.name === line.from || activeTech.name === line.to
                    ? 2
                    : 1
                }
                strokeDasharray="8 8"
              />
            ))}
          </svg>

          {/* DATA PACKETS */}

          {packets.map((packet, i) => (
            <motion.div
              key={i}
              animate={{
                left: [packet.startX, packet.endX],
                top: [packet.startY, packet.endY],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 1.2, 0.8],
              }}
              transition={{
                duration: packet.duration,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6,
              }}
              className="
      absolute
      h-2
      w-2
      rounded-full
      bg-white
      shadow-[0_0_20px_rgba(255,255,255,0.8)]
      z-20
    "
            />
          ))}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-[-35px] rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-[-70px] rounded-full border border-white/5"
            />

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="h-64 w-64 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-center"
            >
              <div
                className="
    absolute
    inset-0
    rounded-full
    bg-gradient-to-br
    from-cyan-500/10
    via-violet-500/10
    to-blue-500/10
    blur-3xl
  "
              />
              <div>
                <h3 className="font-bold text-xl">ANUSHKA.OS</h3>
                <p className="text-xs text-zinc-400 mt-3">
                  Aspiring Full Stack Engineer
                </p>
                <p className="text-xs text-zinc-500">Pune, Maharashtra</p>
                <div className="mt-4 border-t border-white/10 pt-4 text-[10px]">
                  <div className="flex justify-between text-zinc-500">
                    <span>BUILD</span>
                    <span>v1.0</span>
                  </div>

                  <div className="flex justify-between text-zinc-500 mt-2">
                    <span>STATUS</span>
                    <span>ONLINE</span>
                  </div>

                  <div className="flex justify-between text-zinc-500 mt-2">
                    <span>FOCUS</span>
                    <span>AI + FULL STACK</span>
                  </div>

                  <div className="flex justify-between text-zinc-500 mt-2">
                    <span>LOCATION</span>
                    <span>PUNE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CATEGORY LABELS */}

          <div className="absolute top-[5%] left-[45%] text-xs tracking-[0.4em] text-zinc-600">
            LANGUAGES
          </div>

          <div className="absolute top-[40%] left-[6%] text-xs tracking-[0.4em] text-zinc-600">
            FRONTEND
          </div>

          <div className="absolute top-[40%] right-[6%] text-xs tracking-[0.4em] text-zinc-600">
            FRONTEND
          </div>

          <div className="absolute top-[68%] left-[50%] -translate-x-1/2 text-xs tracking-[0.4em] text-zinc-600">
            BACKEND
          </div>

          <div className="absolute bottom-[4%] left-[50%] -translate-x-1/2 text-xs tracking-[0.4em] text-zinc-600">
            DATABASES
          </div>

          {/* TECHNOLOGY NODES */}

          {technologies.map((tech, index) => (
            <motion.button
              key={tech.name}
              onMouseEnter={() => setActiveTech(tech)}
              animate={{
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 25px rgba(255,255,255,0.15)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3 + index * 0.2 }}
              whileHover={{ scale: 1.15 }}
              style={{ left: tech.x, top: tech.y }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full border backdrop-blur-xl z-30 ${
                activeTech.name === tech.name
                  ? "border-white bg-white/10 shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                  : "border-white/10 bg-black/80"
              }`}
            >
              {tech.name}
            </motion.button>
          ))}

          <motion.div
            key={activeTech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
    absolute
    bottom-8
    left-8
    w-[360px]
    rounded-3xl
    border
    border-white/10
    bg-black/80
    backdrop-blur-xl
    p-6
    z-40
  "
          >
            <p className="text-zinc-500 text-xs tracking-[0.3em] mb-2">
              NODE DETAILS
            </p>

            <h3 className="text-3xl font-bold mb-3">{activeTech.name}</h3>

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs">
                {activeTech.category}
              </span>

              <span className="px-3 py-1 rounded-full border border-white/10 text-xs">
                ACTIVE
              </span>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">STATUS</span>
                <span>ONLINE</span>
              </div>

              <div className="flex justify-between text-sm mt-3">
                <span className="text-zinc-500">NETWORK</span>
                <span>CONNECTED</span>
              </div>

              <div className="flex justify-between text-sm mt-3">
                <span className="text-zinc-500">TYPE</span>
                <span>{activeTech.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
