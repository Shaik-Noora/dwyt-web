import React, { useEffect } from 'react';
import { X, ShieldCheck, Zap, ArrowRight, CreditCard, ExternalLink } from 'lucide-react';
import { PAYMENT_CONFIG } from '../config/payment';

export default function PaymentModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePayNow = () => {
    if (PAYMENT_CONFIG.hostedPaymentLink) {
      window.location.href = PAYMENT_CONFIG.hostedPaymentLink;
    } else {
      alert(
        'Razorpay Integration Notice:\n\nTo connect live payments, simply paste your Razorpay Payment Link or Key ID in src/config/payment.js.\n\nAll buttons and checkout actions will route to your live payment flow.'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
              Checkout
            </span>
            <h3 id="modal-title" className="text-lg font-bold text-navy-900 mt-1">
              Complete Your Order
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close checkout modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Item Summary */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-sm text-navy-900">
                {PAYMENT_CONFIG.brandName}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Digital PDF Ebook • Instant Access
              </p>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Instant delivery after payment
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 line-through block">
                {PAYMENT_CONFIG.currencySymbol}{PAYMENT_CONFIG.originalPrice}
              </span>
              <span className="text-lg font-bold text-navy-900">
                {PAYMENT_CONFIG.currencySymbol}{PAYMENT_CONFIG.currentPrice}
              </span>
            </div>
          </div>

          {/* Payment Methods Info */}
          <div>
            <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Supported Payment Methods
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 p-2.5 bg-white border border-slate-200 rounded-lg">
                <span className="font-medium">UPI / GPay / PhonePe</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white border border-slate-200 rounded-lg">
                <CreditCard className="w-4 h-4 text-brand-600" />
                <span className="font-medium">Cards & Net Banking</span>
              </div>
            </div>
          </div>

          {/* Integration Status Notice */}
          {!PAYMENT_CONFIG.hostedPaymentLink && !PAYMENT_CONFIG.keyId && (
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 text-xs text-blue-900">
              <p className="font-semibold flex items-center gap-1.5 mb-1 text-brand-700">
                <ExternalLink className="w-3.5 h-3.5" />
                Razorpay Ready
              </p>
              <p className="text-blue-800 leading-relaxed">
                Add your Razorpay Payment Link or API Key in{' '}
                <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-[11px] text-brand-700">
                  src/config/payment.js
                </code>{' '}
                to connect your live checkout seamlessly.
              </p>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handlePayNow}
            className="w-full btn-primary py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-sm font-semibold shadow-md"
          >
            <span>Proceed to Pay – {PAYMENT_CONFIG.currencySymbol}{PAYMENT_CONFIG.currentPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Security guarantee */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Secure Checkout via Razorpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
