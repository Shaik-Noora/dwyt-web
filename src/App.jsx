import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BookExcerpt from './components/BookExcerpt';
import WhatsInside from './components/WhatsInside';
import WhyYouShouldReadThis from './components/WhyYouShouldReadThis';
import SimpleSteps from './components/SimpleSteps';
import WhoThisIsFor from './components/WhoThisIsFor';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyBottomBar from './components/StickyBottomBar';
import PaymentModal from './components/PaymentModal';
import ThankYou from './components/ThankYou';
import PurchaseNotification from './components/PurchaseNotification';
import { initiatePayment } from './config/payment';

function isThankYouRoute() {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.includes('thank-you') || search.includes('thank-you') || hash.includes('thank-you');
}

export default function App() {
  const [isThankYou, setIsThankYou] = useState(isThankYouRoute);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsThankYou(isThankYouRoute());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handlePurchase = () => {
    initiatePayment({
      onOpenModal: () => setIsCheckoutOpen(true)
    });
  };

  const handleBackHome = () => {
    window.history.pushState({}, '', '/');
    setIsThankYou(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isThankYou) {
    return <ThankYou onBackHome={handleBackHome} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <Header onPurchase={handlePurchase} />

      {/* Main Centered Column (max-width ~700-760px) */}
      <main className="flex-1 w-full max-w-[760px] mx-auto px-4 sm:px-6 pb-24 sm:pb-32">
        {/* SECTION 1: HERO */}
        <Hero onPurchase={handlePurchase} />

        {/* SECTION 2: PRICING */}
        <Pricing onPurchase={handlePurchase} />

        {/* SECTION 3: A GLIMPSE INSIDE THE BOOK */}
        <BookExcerpt />

        {/* SECTION 4: WHAT'S INSIDE */}
        <WhatsInside />

        {/* WHY YOU SHOULD READ THIS */}
        <WhyYouShouldReadThis />

        {/* SECTION 5: 3 SIMPLE STEPS */}
        <SimpleSteps onPurchase={handlePurchase} />

        {/* SECTION 6: WHO THIS IS FOR */}
        <WhoThisIsFor />

        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
        <FAQ />

        {/* SECTION 8: FINAL CTA */}
        <FinalCTA onPurchase={handlePurchase} />
      </main>

      {/* Sticky Bottom Purchase Bar */}
      <StickyBottomBar onPurchase={handlePurchase} />

      {/* Floating Social-Proof Purchase Notification */}
      <PurchaseNotification onPurchaseClick={handlePurchase} />

      {/* Payment / Checkout Modal */}
      <PaymentModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
