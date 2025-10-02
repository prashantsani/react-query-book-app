import * as React from "react";

/**
 * Loading Component
 * Displays a loading spinner and message while data is being fetched
 */
export function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}

/**
 * Error Component
 * Displays an error message when data fetching fails
 */
export function Error() {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2>Oops! Something went wrong</h2>
      <p>We couldn't load the book information. Please try again later.</p>
    </div>
  );
}