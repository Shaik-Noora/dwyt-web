import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { PAYMENT_CONFIG } from '../config/payment';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-white py-10 px-4 sm:px-6 text-center text-xs text-slate-500">
      <div className="max-w-[760px] mx-auto space-y-3">
        <p className="font-semibold text-slate-700">
          Say What You Think
        </p>
        <p className="max-w-md mx-auto text-slate-500 leading-relaxed">
          A practical guide to expressing yourself in English, communicating confidently and improving everyday conversations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 pt-2">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Secure Payments via Razorpay
          </span>
          <a
            href={PAYMENT_CONFIG.supportWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-700 transition-colors text-slate-600"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp Support: +91 95420 65232
          </a>
        </div>
        <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
          © {currentYear} Say What You Think. All rights reserved. Digital PDF edition.
        </div>
      </div>
    </footer>
  );
}
