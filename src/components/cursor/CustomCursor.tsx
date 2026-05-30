"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest("button, a, input, textarea")) {
        setHovering(true);
      }
    };

    const handleMouseOut = () => {
      setHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* OUTER RING */}

      <motion.div
        animate={{
          x: position.x - (hovering ? 30 : 20),
          y: position.y - (hovering ? 30 : 20),
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          fixed
          top-0
          left-0
          rounded-full
          border
          border-white/40
          pointer-events-none
          z-[9999]
          mix-blend-difference
        "
      />

      {/* INNER DOT */}

      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 35,
        }}
        className="
          fixed
          top-0
          left-0
          h-2
          w-2
          rounded-full
          bg-white
          pointer-events-none
          z-[9999]
          mix-blend-difference
        "
      />
    </>
  );
}
