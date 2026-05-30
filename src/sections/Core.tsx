"use client";

import { motion } from "framer-motion";

export default function Core() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#ffffff20,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="text-center z-10"
      >
        <p className="text-zinc-500 tracking-[0.4em] uppercase">
          Version 1.0
        </p>

        <h1 className="text-6xl md:text-9xl font-bold tracking-tight mt-4">
          ANUSHKA.OS
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-zinc-400">
          Neural Architecture Active
        </p>
      </motion.div>
    </section>
  );
}