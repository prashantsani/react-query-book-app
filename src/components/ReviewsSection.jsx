import * as React from "react";

/**
 * Individual Review Card Component
 * Renders a single review with rating, author, and comment
 */
function ReviewCard({ review }) {
  // Generate star rating display
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  // Format date to readable string
  const formattedDate = new Date(review.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="review-card">
      <header className="review-header">
        <div className="review-author-info">
          <h4 className="review-author">{review.author}</h4>
          <time className="review-date">{formattedDate}</time>
        </div>
        <div className="review-rating" title={`${review.rating} out of 5 stars`}>
          {renderStars(review.rating)}
        </div>
      </header>
      <p className="review-comment">{review.comment}</p>
    </article>
  );
}

/**
 * ReviewsSection Component
 * Displays all reviews for a book or empty state message
 * 
 * @param {Object} props - Component props
 * @param {Array} props.reviews - Array of review objects
 */
export default function ReviewsSection({ reviews }) {
  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <section className="reviews-section">
      <header className="reviews-header">
        <h3>Reviews ({reviews.length})</h3>
        {reviews.length > 0 && (
          <div className="reviews-average">
            Average: ⭐ {averageRating} / 5
          </div>
        )}
      </header>

      {reviews.length === 0 ? (
        <div className="no-reviews">
          <p>No reviews yet. Be the first to review this book!</p>
        </div>
      ) : (
        <div className="reviews-list">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}