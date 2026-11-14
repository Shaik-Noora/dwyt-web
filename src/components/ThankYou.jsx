import React from 'react';
import { CheckCircle2, Mail, Clock, ArrowLeft, BookOpen, ShieldCheck, MessageCircle } from 'lucide-react';
import { PAYMENT_CONFIG } from '../config/payment';

export default function ThankYou({ onBackHome }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between font-sans">
      {/* Top Header */}
      <header className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button
            onClick={onBackHome}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Say What You Think</span>
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
            Order Confirmed
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[760px] mx-auto w-full px-4 sm:px-6 py-12 sm:py-16 flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-card p-6 sm:p-10 text-center">
          
          {/* Animated Success Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 border-2 border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11 text-emerald-600" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
            Thank You for Purchasing the eBook!
          </h1>

          {/* Core Message */}
          <p className="text-base sm:text-lg font-medium text-slate-700 max-w-lg mx-auto leading-relaxed mb-6">
            You will receive the instant digital PDF eBook within 2–3 minutes.
          </p>

          {/* Product & Delivery Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 max-w-md mx-auto text-left space-y-4 mb-8">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600 shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Digital Product
                </p>
                <h3 className="font-bold text-sm sm:text-base text-navy-900 leading-snug">
                  {PAYMENT_CONFIG.brandName}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  A Practical Guide to Expressing Yourself in English in this AI Era
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/70 space-y-2.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delivery: <strong>Within 2–3 minutes</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Sent directly to your registered payment email</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Check your inbox and Spam/Promotions tab</span>
              </div>
            </div>
          </div>

          {/* Back Home CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBackHome}
              className="btn-primary w-full sm:w-auto py-3 px-6 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Website</span>
            </button>
            <a
              href={PAYMENT_CONFIG.supportWhatsAppLink || 'https://wa.me/919542065232'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact support on WhatsApp at 9542065232"
              className="w-full sm:w-auto py-3 px-6 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Need Help? Contact Support</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Say What You Think. All rights reserved.
      </footer>
    </div>
  );
}
