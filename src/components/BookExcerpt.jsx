import React from 'react';
import { Bookmark, BookOpen } from 'lucide-react';

export default function BookExcerpt() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          A Glimpse Inside the Book
        </h2>
      </div>

      {/* Book Excerpt Card with authentic book-page aesthetic */}
      <div className="relative bg-[#FDFCFA] rounded-2xl border border-[#E9E5DC] shadow-card hover:shadow-card-hover transition-shadow duration-300 p-7 sm:p-10 md:p-12 overflow-hidden">
        {/* Subtle decorative page corner marker */}
        <div className="absolute top-0 right-8 text-brand-600/40">
          <Bookmark className="w-6 h-8 fill-brand-100 stroke-brand-500/60" />
        </div>

        {/* Subtle page top note */}
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400 mb-6">
          <BookOpen className="w-3.5 h-3.5 text-brand-500" />
          <span>Excerpt • Say What You Think</span>
        </div>

        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-6 tracking-normal leading-snug">
          The Moment I Realized I Wanted to Speak Differently
        </h3>

        {/* Content with comfortable typography and generous line spacing */}
        <div className="font-serif text-slate-700 text-base sm:text-lg leading-[1.85] sm:leading-[1.95] space-y-4">
          <p>
            I remember an Independence Day event. One girl stood up and shared her thoughts in front of everyone.
          </p>
          <p>
            She spoke so easily. She wasn't standing there worrying about every sentence. She just spoke.
          </p>
          <p className="italic text-slate-800">
            I admired that. And somewhere in my mind, I also wanted to speak like that one day.
          </p>
        </div>

        {/* Bottom subtle divider simulating a page footer */}
        <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-serif">
          <span>Chapter 1</span>
          <span>~ Page 9</span>
        </div>
      </div>
    </section>
  );
}
