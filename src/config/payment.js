/**
 * Razorpay Payment Configuration
 * 
 * Keep all payment-related settings in this single file.
 * 
 * How to integrate:
 * Option A (Recommended & Simplest): Set `hostedPaymentLink` to your Razorpay Payment Page URL
 *   e.g. 'https://rzp.io/l/say-what-you-think' or 'https://pages.razorpay.com/...'
 * 
 * Option B: Set `keyId` to your Razorpay Key ID (rzp_live_... or rzp_test_...)
 *   for standard Razorpay Checkout integration.
 */

export const PAYMENT_CONFIG = {
  // Brand & Product Details
  brandName: 'Say What You Think',
  productName: 'Say What You Think – Digital Ebook (PDF)',
  productDescription: 'A Practical Guide to Expressing Yourself in English in this AI Era',
  
  // Pricing
  currency: 'INR',
  currencySymbol: '₹',
  originalPrice: 999,
  currentPrice: 399,
  amountInPaise: 39900, // 399 * 100 for Razorpay

  // Razorpay Hosted Payment Link (Set this URL when available)
  // If set, clicking "Download Now – ₹399" will securely direct buyers straight to this link.
  hostedPaymentLink: 'https://rzp.io/rzp/G3P61T2',

  // Razorpay Standard Checkout Key (Set when using Razorpay Checkout Modal)
  keyId: '',

  // Delivery & Support Details
  deliveryMethod: 'Instant digital download',
  supportEmail: 'support@saywhatyouthink.com',
  supportWhatsApp: '919542065232',
  supportWhatsAppLink: 'https://wa.me/919542065232?text=Hi,%20I%20need%20help%20with%20my%20Say%20What%20You%20Think%20eBook%20purchase',

  // Payment Options Supported
  supportedMethods: [
    'UPI (Google Pay, PhonePe, Paytm, BHIM)',
    'Credit & Debit Cards (Visa, Mastercard, RuPay)',
    'Net Banking (All major Indian banks)',
    'Wallets'
  ]
};

/**
 * Initiates the payment process.
 * If a hosted payment link exists, redirects to it.
 * Otherwise, opens the payment preparation checkout modal.
 */
export function initiatePayment({ onOpenModal }) {
  if (PAYMENT_CONFIG.hostedPaymentLink && PAYMENT_CONFIG.hostedPaymentLink.trim() !== '') {
    window.location.href = PAYMENT_CONFIG.hostedPaymentLink;
    return;
  }

  // If Razorpay Standard Checkout is configured
  if (PAYMENT_CONFIG.keyId && window.Razorpay) {
    const options = {
      key: PAYMENT_CONFIG.keyId,
      amount: PAYMENT_CONFIG.amountInPaise,
      currency: PAYMENT_CONFIG.currency,
      name: PAYMENT_CONFIG.brandName,
      description: PAYMENT_CONFIG.productName,
      image: '/favicon.svg',
      handler: function (response) {
        // Payment success callback for future backend webhook / delivery verification
        console.log('Payment successful. Razorpay Payment ID:', response.razorpay_payment_id);
        // Ebook delivery / redirect hook:
        // window.location.href = `/download?payment_id=${response.razorpay_payment_id}`;
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        product: 'Say What You Think Ebook'
      },
      theme: {
        color: '#2563eb'
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
    return;
  }

  // Otherwise, trigger the checkout modal for user interaction
  if (typeof onOpenModal === 'function') {
    onOpenModal();
  }
}
