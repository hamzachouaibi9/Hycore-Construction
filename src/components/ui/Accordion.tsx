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
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

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
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {isOpen ? (
                  <Minus size={16} className="text-primary" />
                ) : (
                  <Plus size={16} className="text-gray-400" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-5 text-sm leading-[1.8] text-gray-500">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
