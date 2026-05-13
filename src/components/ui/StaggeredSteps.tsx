"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Step {
  icon: ReactNode;
  title: string;
  description: string;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggeredSteps({ steps }: { steps: Step[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map((step, i) => (
        <motion.div
          key={i}
          variants={item}
          className="group bg-brand-white p-8 rounded hover:bg-primary transition-[background-color] duration-300 cursor-default"
        >
          <div className="w-10 h-10 border border-gray-200 group-hover:border-white/30 rounded flex items-center justify-center text-gray-500 group-hover:text-white mb-5 transition-[border-color,color] duration-300">
            {step.icon}
          </div>
          <h3 className="font-display text-sm font-bold text-brand-black group-hover:text-white mb-3 tracking-wide transition-[color] duration-300">
            {step.title}
          </h3>
          <p className="text-sm leading-[1.8] text-gray-500 group-hover:text-white/75 transition-[color] duration-300">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
