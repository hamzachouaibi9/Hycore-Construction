"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  /** Plays on mount instead of on scroll */
  onLoad?: boolean;
  /** Fraction of element visible before triggering (0–1) */
  amount?: number;
}

function hiddenState(direction: Direction): { opacity: number; x: number; y: number } {
  switch (direction) {
    case "up":    return { opacity: 0, y: 40,  x: 0 };
    case "down":  return { opacity: 0, y: -40, x: 0 };
    case "left":  return { opacity: 0, x: -50, y: 0 };
    case "right": return { opacity: 0, x: 50,  y: 0 };
    case "none":  return { opacity: 0, x: 0,   y: 0 };
  }
}

const VISIBLE = { opacity: 1, x: 0, y: 0 };

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  direction = "up",
  once = true,
  onLoad = false,
  amount = 0.15,
}: RevealProps) {
  const initial = hiddenState(direction);
  const transition = {
    duration,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  if (onLoad) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={VISIBLE}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={VISIBLE}
      transition={transition}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
