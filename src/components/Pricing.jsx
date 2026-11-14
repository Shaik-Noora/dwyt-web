import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Pricing({ onPurchase }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Pricing
        </h2>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 sm:p-8">
        {/* Pricing Table / Rows */}
        <div className="divide-y divide-slate-100 mb-8">
          {/* Price Row */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-slate-600 font-medium">Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base text-slate-400 line-through">₹999</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-navy-900">₹399</span>
            </div>
          </div>

          {/* Payment Row */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-slate-600 font-medium">Payment</span>
            <span className="text-sm sm:text-base font-semibold text-slate-800">One-time</span>
          </div>

          {/* Delivery Row */}
          <div className="py-3.5 flex items-center justify-between">
            <span className="text-sm sm:text-base text-slate-600 font-medium">Delivery</span>
            <span className="text-sm sm:text-base font-semibold text-emerald-700 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              Instant digital download
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onPurchase}
          aria-label="Download Say What You Think for ₹399"
          className="btn-primary w-full py-3.5 px-6 rounded-xl text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Download Now – ₹399</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
