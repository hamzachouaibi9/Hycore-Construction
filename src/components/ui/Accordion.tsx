"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  numbered?: boolean;
}

export default function Accordion({ items, numbered = false }: AccordionProps) {
  // All questions start closed
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                {numbered && (
                  <span className="text-sm font-bold text-gray-400 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span
                  className={`text-sm font-semibold transition-[color] duration-200 ${
                    isOpen ? "text-brand-black" : "text-gray-700"
                  }`}
                >
                  {numbered ? item.question.toUpperCase() : item.question}
                </span>
              </div>

              {/* Smooth plus ↔ minus crossfade with rotation */}
              <div className="relative flex-shrink-0 w-6 h-6">
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                >
                  <Plus size={16} className="text-gray-400" />
                </span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                >
                  <Minus size={16} className="text-primary" />
                </span>
              </div>
            </button>

            {/* Smooth height animation via grid-rows trick */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pt-1 text-sm leading-[1.8] text-gray-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
