import React from 'react';

export default function WhyYouShouldReadThis() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Why You Should Read This
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 sm:p-9">
        <div className="max-w-xl mx-auto space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
          <p className="font-medium text-navy-900">
            I went from noob to speaking English in front of 20,000 people.
          </p>
          <p>
            I went from struggling to speak confidently to sharing my journey with the world.
          </p>
          <p className="font-medium text-brand-700 pt-1">
            Get the exact step-by-step journey and start speaking without fear today
          </p>
        </div>
      </div>
    </section>
  );
}
