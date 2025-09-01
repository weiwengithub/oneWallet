'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 dark:border-white/10 light:border-slate-200 pb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between py-4 hover:text-blue-400 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold pr-4">{question}</h3>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-blue-400" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
