import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    id: 'faq-1',
    question: "What will I receive after purchasing?",
    answer: "You'll receive the digital PDF of Say What You Think."
  },
  {
    id: 'faq-2',
    question: "Is this a physical book?",
    answer: "No. It's a digital book that you can read on your phone, tablet or laptop."
  },
  {
    id: 'faq-3',
    question: "Who should read this book?",
    answer: "Anyone who wants to improve their ability to express thoughts and communicate in English."
  },
  {
    id: 'faq-4',
    question: "Do I need advanced English knowledge?",
    answer: "No. This guide is intended for people who want to improve their everyday English communication."
  },
  {
    id: 'faq-5',
    question: "How will I receive my book?",
    answer: "You'll get access to your digital book after successful payment."
  },
  {
    id: 'faq-6',
    question: "Is this a one-time payment?",
    answer: "Yes. Pay just ₹399 once to get your copy. No recurring payments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-subtle overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              >
                <span className="text-sm sm:text-base font-semibold text-navy-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden`}
              >
                <div className="px-5 sm:px-6 pb-4 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
