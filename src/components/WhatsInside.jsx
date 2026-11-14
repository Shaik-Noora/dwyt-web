import React from 'react';
import {
  Lightbulb,
  ArrowRightLeft,
  MessageSquare,
  ShieldCheck,
  Smile,
  Bot,
  CalendarCheck
} from 'lucide-react';

const INSIDE_ITEMS = [
  {
    text: "Understand why you struggle to express yourself.",
    icon: Lightbulb
  },
  {
    text: "Turn your thoughts into clear sentences.",
    icon: ArrowRightLeft
  },
  {
    text: "Improve everyday English communication.",
    icon: MessageSquare
  },
  {
    text: "Express your opinions with confidence.",
    icon: ShieldCheck
  },
  {
    text: "Practise speaking more naturally.",
    icon: Smile
  },
  {
    text: "Use AI to improve your communication skills.",
    icon: Bot
  },
  {
    text: "Follow a practical 30-day challenge.",
    icon: CalendarCheck
  }
];

export default function WhatsInside() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
          What's Inside
        </h2>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 sm:p-8">
        <ul className="space-y-4">
          {INSIDE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-brand-50 text-brand-600 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug pt-1">
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
