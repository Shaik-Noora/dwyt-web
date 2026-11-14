import React from 'react';
import { BookMarked } from 'lucide-react';

export default function Header({ onPurchase }) {
  return (
    <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
            <BookMarked className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm sm:text-base text-navy-900 tracking-tight">
            Say What You Think
          </span>
        </div>

        {/* Quick CTA */}
        <button
          onClick={onPurchase}
          aria-label="Download Say What You Think for ₹399"
          className="text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
        >
          Download Now – ₹399
        </button>
      </div>
    </header>
  );
}
