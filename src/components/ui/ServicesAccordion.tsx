"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Grid2x2, Hammer, Home, ClipboardList, ChefHat, Building } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  kitchen: <ChefHat size={16} />,
  home: <Home size={16} />,
  building: <Building size={16} />,
  hammer: <Hammer size={16} />,
  grid: <Grid2x2 size={16} />,
  clipboard: <ClipboardList size={16} />,
};

interface ServicesAccordionProps {
  services: Service[];
}

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {services.map((service) => {
        const isOpen = openId === service.id;
        return (
          <div key={service.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : service.id)}
              className="w-full flex items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-expanded={isOpen}
            >
              <div className="w-9 h-9 border border-gray-200 rounded flex items-center justify-center text-gray-500 flex-shrink-0">
                {iconMap[service.icon] ?? <Grid2x2 size={16} />}
              </div>
              <span className="flex-1 text-sm font-semibold text-brand-black">
                {service.title}
              </span>
              {/* Spring-animated rotating arrow */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="flex-shrink-0 text-gray-400"
              >
                <ArrowDown size={16} />
              </motion.div>
            </button>

            {/* Animated content panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pb-5 pl-14">
                    <motion.p
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="text-sm leading-[1.8] text-gray-500 mb-3"
                    >
                      {service.description}
                    </motion.p>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs font-bold text-primary hover:text-primary-dark transition-[color] duration-200 focus-visible:outline-none"
                      >
                        Learn More →
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
