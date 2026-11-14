import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function StickyBottomBar({ onPurchase }) {
  return (
    <aside 
      aria-label="Sticky purchase bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-3 px-4 sm:px-6"
    >
      <div className="max-w-[760px] mx-auto flex items-center justify-between gap-3">
        {/* Pricing display */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2.5">
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-xs sm:text-sm text-slate-400 line-through">₹999</span>
            <span className="text-lg sm:text-2xl font-extrabold text-navy-900 tracking-tight">₹399</span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-500 font-medium hidden sm:inline-flex items-center gap-1">
            <Zap className="w-3 h-3 text-brand-600" />
            Instant digital download
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={onPurchase}
          aria-label="Download Say What You Think for ₹399"
          className="btn-primary py-2.5 px-4 sm:py-3 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-sm hover:shadow"
        >
          <span>Download Now – ₹399</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
