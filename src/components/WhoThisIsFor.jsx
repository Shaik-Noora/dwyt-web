import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AUDIENCES = [
  "Students who understand English but hesitate to speak.",
  "People who struggle to express their thoughts in English.",
  "Job seekers preparing for interviews.",
  "Working professionals who want to communicate better.",
  "Anyone who wants to speak more naturally and confidently."
];

export default function WhoThisIsFor() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          Who This Is For
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 sm:p-8">
        <ul className="space-y-4">
          {AUDIENCES.map((audience, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="p-1 text-brand-600 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-brand-600" />
              </div>
              <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug pt-0.5">
                {audience}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
