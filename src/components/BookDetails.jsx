import * as React from "react";

/**
 * BookDetails Component
 * Displays comprehensive book information including metadata and ratings
 * 
 * @param {Object} props - Component props
 * @param {Object} props.book - Book object containing all book details
 */
export default function BookDetails({ book }) {
  return (
    <div className="book-details">
      {/* Book Title and Author */}
      <header className="book-header">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
      </header>

      {/* Book Metadata */}
      <div className="book-metadata">
        <div className="metadata-item">
          <span className="metadata-label">Published:</span>
          <span className="metadata-value">{book.publishedDate}</span>
        </div>
        
        <div className="metadata-item">
          <span className="metadata-label">Pages:</span>
          <span className="metadata-value">{book.pageCount}</span>
        </div>
        
        {book.averageRating && (
          <div className="metadata-item">
            <span className="metadata-label">Rating:</span>
            <span className="metadata-value">
              ⭐ {book.averageRating} / 5
            </span>
          </div>
        )}
      </div>

      {/* Categories/Genres */}
      {book.categories && book.categories.length > 0 && (
        <div className="book-categories">
          {book.categories.map((category, index) => (
            <span key={index} className="category-badge">
              {category}
            </span>
          ))}
        </div>
      )}

      {/* Book Description */}
      <div className="book-description">
        <h3>About this book</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
}