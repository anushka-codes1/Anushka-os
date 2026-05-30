"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Core() {
  return (
    <section
      id="core"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* GRID BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* AMBIENT GLOWS */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.03]
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/[0.03]
          blur-[140px]
        "
      />

      {/* HUGE TYPOGRAPHY */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[22vw]
          font-black
          tracking-tighter
          text-white/[0.03]
          select-none
          pointer-events-none
          whitespace-nowrap
          z-0
        "
      >
        ANUSHKA
      </motion.h1>

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-20
          min-h-screen
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          py-24
        "
      >
        <div
          className="
            min-h-[85vh]
            grid
            lg:grid-cols-[1fr_auto_1fr]
            gap-12
            items-center
          "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p
              className="
                text-zinc-500
                tracking-[0.35em]
                text-xs
                mb-5
              "
            >
              ANUSHKA.OS
            </p>

            <div>
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  xl:text-8xl
                  font-bold
                  leading-[0.9]
                  tracking-tight
                "
              >
                Anushka
                <br />
                Mukherjee
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-px w-12 bg-white/30" />

                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    text-zinc-400
                  "
                >
                  Aspiring Full Stack Engineer
                </p>
              </div>
            </div>

            <p
              className="
                mt-8
                text-zinc-400
                max-w-md
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              Passionate about building scalable web applications, intelligent
              software systems, and seamless digital experiences through modern
              full-stack technologies and AI-driven solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/20
                  hover:bg-white
                  hover:text-black
                  transition-all
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/10
                "
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* PHOTO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative mx-auto"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="
                relative
                h-[420px]
                w-[300px]
                md:h-[600px]
                md:w-[420px]
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
              "
            >
              <Image
                src="/images/anushka.jpg"
                alt="Anushka"
                fill
                priority
                className="object-cover object-top grayscale contrast-125"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              flex
              flex-col
              gap-5
            "
          >
            <InfoCard title="STATUS" content="ONLINE" pulse />

            <InfoCard title="LOCATION" content="Pune, Maharashtra" />

            <InfoCard
              title="FOCUS"
              content="AI Systems • Frontend Engineering • Full Stack Development"
            />

            <InfoCard title="BUILD" content="v1.0.0" />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SYSTEM BAR */}

      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          flex
          justify-between
          text-[10px]
          md:text-xs
          tracking-[0.3em]
          text-zinc-600
        "
      >
        <span>SYSTEM READY</span>
        <span>NEURAL ARCHITECTURE ACTIVE</span>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  content,
  pulse = false,
}: {
  title: string;
  content: string;
  pulse?: boolean;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
      "
    >
      <p
        className="
          text-zinc-500
          text-xs
          tracking-[0.3em]
          mb-3
        "
      >
        {title}
      </p>

      <div className="flex items-center gap-3">
        {pulse && (
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        )}

        <p className="text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
}
