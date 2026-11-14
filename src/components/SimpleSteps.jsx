import React from 'react';
import { CreditCard, Download, BookOpen, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: "1",
    title: "Step 1 – Make Your Payment",
    description: "Pay ₹399 using UPI, GPay, PhonePe or card.",
    icon: CreditCard
  },
  {
    number: "2",
    title: "Step 2 – Download Your Book",
    description: "Get instant access to your digital PDF after successful payment.",
    icon: Download
  },
  {
    number: "3",
    title: "Step 3 – Start Practising",
    description: "Read, practise and apply what you learn in everyday conversations.",
    icon: BookOpen
  }
];

export default function SimpleSteps({ onPurchase }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          3 Simple Steps
        </h2>
      </div>

      <div className="space-y-4 mb-8">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-5 sm:p-6 flex items-start gap-4 transition-transform hover:-translate-y-0.5 duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold text-base flex items-center justify-center shrink-0 border border-brand-100">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={onPurchase}
          aria-label="Download Say What You Think for ₹399"
          className="btn-primary w-full sm:w-auto min-w-[260px] py-3.5 px-8 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Download Now – ₹399</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
