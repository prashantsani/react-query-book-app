import { delay } from '../utils/utils';
import { REVIEWS_DB } from '../mock-data/reviews';

/**
 * Fetches reviews for a specific book
 * @param {string} bookId - The unique book identifier
 * @returns {Promise<Array>} Array of review objects
 */
export default async function getReviewsForBook(bookId) {
    // Simulate network delay (200-600ms)
    await delay(Math.random() * 400 + 200);
    
    // Return reviews or empty array if none exist
    return REVIEWS_DB[bookId] || [];
  }