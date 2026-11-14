import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onPurchase }) {
  return (
    <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 text-center">
      {/* Brand / Title */}
      <div className="inline-block mb-3">
        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-600 bg-brand-50 border border-brand-100 px-3.5 py-1 rounded-full">
          Say What You Think
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15] max-w-2xl mx-auto mb-5">
        A Practical Guide to Expressing Yourself in English in this AI Era
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
        You know what you want to say, but sometimes struggle to express it in English. This book helps you turn your thoughts into words and communicate with greater confidence.
      </p>

      {/* CTA Button */}
      <div className="flex flex-col items-center justify-center gap-3">
        <button
          onClick={onPurchase}
          aria-label="Download Say What You Think ebook for ₹399"
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
    </section>
  );
}
