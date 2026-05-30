"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Initializing Neural Core...",
  "Loading Cognitive Systems...",
  "Mapping Neural Architecture...",
  "Starting ANUSHKA.OS..."
];

interface BootLoaderProps {
  onComplete: () => void;
}

export default function BootLoader({
  onComplete,
}: BootLoaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1200);

      return () => clearTimeout(timer);
    }

    const finish = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(finish);
  }, [index, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        <motion.h1
          key={messages[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-2xl font-mono text-white tracking-widest"
        >
          {messages[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}