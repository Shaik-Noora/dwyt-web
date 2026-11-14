import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function BookMockup({ coverImage = null }) {
  // If an external image cover is provided, render it inside the 3D book frame
  if (coverImage) {
    return (
      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] aspect-[1/1.4] transition-transform duration-300 hover:scale-[1.02]">
        <img
          src={coverImage}
          alt="Say What You Think Ebook Cover"
          className="w-full h-full object-cover rounded-r-lg rounded-l-sm shadow-book border border-slate-200"
          loading="eager"
        />
      </div>
    );
  }

  // Premium, typography-focused realistic 3D ebook visual
  return (
    <div className="relative mx-auto my-6 w-full max-w-[260px] sm:max-w-[300px] perspective-[1000px] group">
      {/* Soft Ambient Glow */}
      <div className="absolute -inset-2 bg-brand-500/10 rounded-2xl blur-xl -z-10 group-hover:bg-brand-500/15 transition-all duration-300" />
      
      {/* 3D Book Container */}
      <div className="relative aspect-[1/1.42] w-full bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 rounded-r-xl rounded-l-sm shadow-book border-t border-r border-b border-slate-700/40 p-6 flex flex-col justify-between text-white overflow-hidden select-none transition-transform duration-300 group-hover:-translate-y-1">
        
        {/* Book Spine Texture (Left border effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 via-white/10 to-transparent pointer-events-none" />
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 pointer-events-none" />

        {/* Top Tag */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/10 text-[10px] font-semibold tracking-wider uppercase text-blue-200">
            <Sparkles className="w-3 h-3 text-brand-400" />
            Digital Ebook • PDF
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div className="relative z-10 my-auto py-4">
          <h3 className="font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight text-white mb-3">
            Say What You Think
          </h3>
          <div className="w-8 h-1 bg-brand-500 rounded-full mb-3" />
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            A Practical Guide to Expressing Yourself in English in this AI Era
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-brand-400" />
            Instant PDF
          </span>
          <span className="font-medium text-slate-300">Complete Guide</span>
        </div>

        {/* Subtle Light Sheen Reflection */}
        <div className="absolute -inset-full top-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12 pointer-events-none" />
      </div>

      {/* Pages Edge Effect (Right side) */}
      <div className="absolute right-0 top-2 bottom-2 w-2.5 bg-gradient-to-l from-slate-200 to-slate-100 rounded-r-sm shadow-sm -z-10 translate-x-1.5 border-r border-slate-300" />
    </div>
  );
}
