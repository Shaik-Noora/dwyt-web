import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import {
  customers,
  relativeTimes,
  notificationSettings,
  getNextCustomer,
  getNextRelativeTime,
  getRandomWaitInterval
} from '../data/notifications';

/**
 * PurchaseNotification
 * 
 * A floating, pill-shaped social-proof notification popup inspired by enableai.academy.
 * 
 * Placement:
 * - Position: Fixed, horizontally centered (left: 50%, transform: translateX(-50%)).
 * - Vertical: Dynamically placed immediately below the main navigation bar/header.
 * - Stays fixed in view while scrolling, floating above the hero section.
 * - Sits below the sticky header (z-25 vs z-30) so it never obscures the navigation menu.
 * - Centered on mobile with safe horizontal margins.
 * 
 * Timing & Behavior:
 * - Appears 3s after page load.
 * - Stays visible for 5s.
 * - Waits 10–15s before presenting the next notification.
 * - Non-consecutive customer names & realistic timestamps.
 * - Smooth fade-in and fade-out CSS animations.
 * - Manual close (X) button.
 */
export default function PurchaseNotification({
  customerList = customers,
  timeList = relativeTimes,
  config = notificationSettings,
  topOffset: propTopOffset,
  onPurchaseClick
}) {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dynamicTop, setDynamicTop] = useState(() => {
    if (typeof window !== 'undefined') {
      const header = document.querySelector('header');
      if (header) {
        const rect = header.getBoundingClientRect();
        return Math.round(rect.bottom + 14);
      }
      return window.innerWidth >= 640 ? 78 : 70;
    }
    return 78;
  });

  // References for active timeouts and lifecycle tracking
  const timerRef = useRef(null);
  const animTimerRef = useRef(null);
  const lastCustomerRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isMountedRef = useRef(true);

  // Clear pending timers to prevent memory leaks or overlapping schedules
  const clearAllTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current);
      animTimerRef.current = null;
    }
  };

  /**
   * Smoothly hides the current notification with fade-out animation
   * and schedules the next notification after the 10-15s wait.
   */
  const hideNotification = (scheduleNext = true) => {
    setIsAnimating(false);

    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current);
    }

    // Wait 320ms for smooth exit transition before unmounting
    animTimerRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      setIsVisible(false);

      if (scheduleNext) {
        const waitInterval = getRandomWaitInterval(
          config.minWaitIntervalMs,
          config.maxWaitIntervalMs
        );

        timerRef.current = setTimeout(() => {
          if (!isMountedRef.current) return;
          showNotification();
        }, waitInterval);
      }
    }, 320);
  };

  /**
   * Selects the next random customer & time (avoiding consecutive repeats)
   * and triggers the fade-in animation.
   */
  const showNotification = () => {
    const nextCustomer = getNextCustomer(lastCustomerRef.current, customerList);
    const nextTime = getNextRelativeTime(lastTimeRef.current, timeList);

    lastCustomerRef.current = nextCustomer;
    lastTimeRef.current = nextTime;

    setCurrentNotification({
      customer: nextCustomer,
      timeAgo: nextTime
    });

    setIsVisible(true);

    // Trigger enter transition on next animation frame
    animTimerRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      setIsAnimating(true);
    }, 20);

    // 5-second display duration
    timerRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      hideNotification(true);
    }, config.displayDurationMs);
  };

  /**
   * Manual dismiss via the close (X) button.
   */
  const handleManualClose = (e) => {
    e?.stopPropagation?.();
    clearAllTimers();
    hideNotification(true);
  };

  // Measure header dynamically to position immediately beneath it
  useEffect(() => {
    const updateHeaderPosition = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight || header.getBoundingClientRect().height;
        const headerBottom = Math.max(headerHeight, header.getBoundingClientRect().bottom);
        // Position immediately below the navigation bar with a clean 14px gap
        setDynamicTop(Math.round(headerBottom + 14));
      }
    };

    updateHeaderPosition();
    window.addEventListener('resize', updateHeaderPosition);
    window.addEventListener('scroll', updateHeaderPosition, { passive: true });

    let resizeObserver = null;
    const header = document.querySelector('header');
    if (header && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateHeaderPosition());
      resizeObserver.observe(header);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderPosition);
      window.removeEventListener('scroll', updateHeaderPosition);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Main notification lifecycle
  useEffect(() => {
    isMountedRef.current = true;

    // Initial trigger: Show the first notification 3 seconds after page load
    timerRef.current = setTimeout(() => {
      if (!isMountedRef.current) return;
      showNotification();
    }, config.initialDelayMs);

    return () => {
      isMountedRef.current = false;
      clearAllTimers();
    };
  }, []);

  if (!isVisible || !currentNotification) {
    return null;
  }

  const { customer, timeAgo } = currentNotification;
  const productName = config.productName || 'the ebook';
  const effectiveTop = propTopOffset ?? dynamicTop;

  return (
    <aside
      aria-label="Recent purchase notification"
      aria-live="polite"
      style={{ top: `${effectiveTop}px` }}
      className="fixed left-1/2 -translate-x-1/2 z-25 pointer-events-none select-none px-4 w-max max-w-[calc(100vw-2rem)] flex justify-center"
    >
      <div
        role="status"
        className={`pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] rounded-full py-1.5 px-3 sm:py-2 sm:px-4 flex items-center gap-2 sm:gap-2.5 transition-all duration-300 ease-out transform ${
          isAnimating
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        {/* Small green circular status dot on the left */}
        <span 
          className="relative flex h-2 w-2 shrink-0 items-center justify-center" 
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>

        {/* Customer notification text in dark grey */}
        <p className="text-xs sm:text-[13px] leading-tight text-slate-700 tracking-normal truncate">
          <span className="font-semibold text-slate-900">{customer}</span>
          {' '}
          <span className="text-slate-600">purchased {productName}</span>
          {' '}
          <span className="text-slate-400 font-normal whitespace-nowrap">{timeAgo}</span>
        </p>

        {/* Light grey close (X) button on the right */}
        <button
          type="button"
          onClick={handleManualClose}
          className="text-slate-400 hover:text-slate-600 transition-colors p-1 -mr-0.5 rounded-full hover:bg-slate-100 cursor-pointer focus:outline-none focus:ring-1 focus:ring-slate-300 shrink-0 ml-0.5"
          aria-label="Close notification"
          title="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
