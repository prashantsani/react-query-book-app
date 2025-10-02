import { delay } from '../utils/utils';
import { BOOKS_DB } from '../mock-data/books';

/**
 * Fetches book details by ID
 * @param {string} bookId - The unique book identifier
 * @returns {Promise<Object>} Book object
 * @throws {Error} If book is not found
 */
export default async function getBook(bookId) {
  // Simulate network delay (300-800ms)
  await delay(Math.random() * 500 + 300);
  
  const book = BOOKS_DB[bookId];
  
  if (!book) {
    throw new Error(`Book with ID ${bookId} not found`);
  }
  
  return book;
}