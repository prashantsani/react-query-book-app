/**
 * Simulates network delay for realistic API behaviour
 * @param {number} ms - Milliseconds to delay
 */
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
