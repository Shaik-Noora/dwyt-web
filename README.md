# Say What You Think – Official Website

A modern, responsive, high-converting digital ebook sales landing page for **"Say What You Think: A Practical Guide to Expressing Yourself in English in this AI Era"**.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory, ready to deploy to any hosting provider (Vercel, Netlify, Cloudflare Pages, AWS, etc.).

---

## 💳 Payment Integration (Razorpay)

All purchase buttons across the landing page (`Hero`, `Pricing`, `Simple Steps`, `Final CTA`, `Sticky Bottom Bar`, and `Header`) are configured to redirect directly to your Razorpay payment page:

🔗 **`https://rzp.io/rzp/sh0ivCFU`**

Defined in: 📂 `src/config/payment.js`

### 🔄 Configuring the Post-Purchase "Thank You" Page in Razorpay
To automatically redirect buyers to the Thank You page after successful payment:
1. Log in to your **[Razorpay Dashboard](https://dashboard.razorpay.com/)**.
2. Go to **Payment Pages / Payment Links** and edit your page `sh0ivCFU`.
3. In **Page Settings / Post-Payment Actions**:
   - Enable **Redirect to your website after payment**.
   - Enter your website's Thank You URL:
     - In production: `https://yourdomain.com/thank-you`
     - In local testing: `http://localhost:3000/thank-you`
4. When buyers complete payment, Razorpay will immediately redirect them to the Thank You page where they see:
   > *"Thank You for Purchasing the eBook! You will receive the instant digital PDF eBook within 2–3 minutes."*

---

## 📖 Book Cover Image Replacement

If you have a customized 3D cover or 2D artwork:
1. Place your image file in `public/cover.png` (or `public/cover.jpg`).
2. In `src/components/Hero.jsx`, pass the image path:
   ```jsx
   <BookMockup coverImage="/cover.png" />
   ```
If no external image is passed, the component automatically renders a CSS 3D book mockup.

---

## 🛠 Tech Stack
- **Framework & Bundler:** React + Vite
- **Language:** JavaScript & JSX (No TypeScript)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Inter (Sans-serif) & Lora (Editorial book excerpt)
