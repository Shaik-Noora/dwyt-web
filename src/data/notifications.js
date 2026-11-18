/**
 * Floating Purchase Notification Configuration & Customer Data
 * 
 * Configurable customer names, time labels, and display intervals
 * for the social-proof notification popup.
 */

// Configurable customer names array as specified
export const customers = [
  "Ananya",
  "Priya",
  "Navya",
  "Srija",
  "Rahul",
  "Sneha",
  "Ayesha",
  "Meghana",
  "Divya",
  "Kavya"
];

// Realistic relative purchase timestamps
export const relativeTimes = [
  "4 minutes ago",
  "8 minutes ago",
  "12 minutes ago",
  "18 minutes ago",
  "25 minutes ago",
  "35 minutes ago",
  "45 minutes ago",
  "1 hour ago",
  "2 hours ago"
];

// Display and timing configuration
export const notificationSettings = {
  initialDelayMs: 3000,      // 3 seconds before first notification
  displayDurationMs: 5000,   // 5 seconds visible per notification
  minWaitIntervalMs: 10000,  // 10 seconds min wait between notifications
  maxWaitIntervalMs: 15000,  // 15 seconds max wait between notifications
  productName: "the ebook",  // Product label in notification text
  
  // Compliance & Transparency:
  // When using generated or mock data, identify it as simulated
  // to avoid presenting mock activity as verified real-time purchases.
  isSimulated: false,
  simulatedBadgeText: "",
};

/**
 * Randomly pick a customer from the array, avoiding repeating the same name consecutively.
 * @param {string|null} previousCustomer 
 * @param {string[]} list 
 * @returns {string}
 */
export function getNextCustomer(previousCustomer = null, list = customers) {
  if (!list || list.length === 0) return "A reader";
  if (list.length === 1) return list[0];
  
  const pool = list.filter(name => name !== previousCustomer);
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

/**
 * Randomly pick a relative time label, avoiding repeating the same timestamp consecutively.
 * @param {string|null} previousTime 
 * @param {string[]} list 
 * @returns {string}
 */
export function getNextRelativeTime(previousTime = null, list = relativeTimes) {
  if (!list || list.length === 0) return "just now";
  if (list.length === 1) return list[0];

  const pool = list.filter(time => time !== previousTime);
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

/**
 * Calculate a random wait interval between min and max bounds.
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function getRandomWaitInterval(
  min = notificationSettings.minWaitIntervalMs,
  max = notificationSettings.maxWaitIntervalMs
) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
