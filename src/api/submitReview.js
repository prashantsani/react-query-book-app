import { delay } from '../utils/utils';
import { REVIEWS_DB } from '../mock-data/reviews';

/**
 * Submits a new review for a book
 * @param {Object} reviewData - The review data
 * @returns {Promise<Object>} The created review
 */
export default async function submitReview(reviewData) {
    await delay(500);

    const newReview = {
        id: Date.now(),
        ...reviewData,
        date: new Date().toISOString().split('T')[0]
    };

    // In a real app, this would persist to a backend
    if (!REVIEWS_DB[reviewData.bookId]) {
        REVIEWS_DB[reviewData.bookId] = [];
    }
    REVIEWS_DB[reviewData.bookId].push(newReview);

    return newReview;
}