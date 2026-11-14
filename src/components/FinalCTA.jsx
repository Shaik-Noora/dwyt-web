import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onPurchase }) {
  return (
    <section className="py-12 sm:py-20 text-center">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-card p-8 sm:p-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
          Say What You Think
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed mb-8">
          You don't need perfect English to express yourself. You just need to start.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={onPurchase}
            aria-label="Download Say What You Think for ₹399"
            className="btn-primary w-full sm:w-auto min-w-[260px] py-3.5 px-8 rounded-xl text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Download Now – ₹399</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Below CTA */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
            <span>⚡</span>
            <span>Instant download after payment</span>
          </p>
        </div>
      </div>
    </section>
  );
}
