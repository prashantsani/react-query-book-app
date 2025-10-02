import * as React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import submitReview from "../api/submitReview";

/**
 * ReviewFormSection Component
 * Provides a form interface for users to submit book reviews
 * Handles form state, validation, and submission with React Query mutation
 * 
 * @param {Object} props - Component props
 * @param {string} props.bookId - The ID of the book being reviewed (optional, can be derived from context)
 */
export default function ReviewFormSection({ bookId }) {
  const queryClient = useQueryClient();
  
  // Form state management
  const [formData, setFormData] = React.useState({
    author: "",
    rating: 5,
    comment: ""
  });
  
  const [showForm, setShowForm] = React.useState(false);

  // React Query mutation for submitting reviews
  const mutation = useMutation({
    mutationFn: submitReview,
    onSuccess: () => {
      // Invalidate reviews query to refetch after successful submission
      queryClient.invalidateQueries({ 
        queryKey: ["reviews", { bookId }] 
      });
      
      // Reset form and hide it
      setFormData({ author: "", rating: 5, comment: "" });
      setShowForm(false);
    }
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.author.trim() || !formData.comment.trim()) {
      alert("Please fill in all fields");
      return;
    }
    
    // Submit review with bookId
    mutation.mutate({
      ...formData,
      bookId
    });
  };

  return (
    <section className="review-form-section">
      {!showForm ? (
        <button 
          className="btn-add-review"
          onClick={() => setShowForm(true)}
        >
          ✍️ Write a Review
        </button>
      ) : (
        <form className="review-form" onSubmit={handleSubmit}>
          <h3>Write Your Review</h3>
          
          {/* Author Name Input */}
          <div className="form-group">
            <label htmlFor="author">Your Name</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Rating Selection */}
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <div className="rating-input">
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
              >
                <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                <option value={4}>⭐⭐⭐⭐☆ (4 stars)</option>
                <option value={3}>⭐⭐⭐☆☆ (3 stars)</option>
                <option value={2}>⭐⭐☆☆☆ (2 stars)</option>
                <option value={1}>⭐☆☆☆☆ (1 star)</option>
              </select>
            </div>
          </div>

          {/* Review Comment Textarea */}
          <div className="form-group">
            <label htmlFor="comment">Your Review</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Share your thoughts about this book..."
              rows={4}
              required
            />
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit Review"}
            </button>
            <button 
              type="button" 
              className="btn-cancel"
              onClick={() => {
                setShowForm(false);
                setFormData({ author: "", rating: 5, comment: "" });
              }}
              disabled={mutation.isPending}
            >
              Cancel
            </button>
          </div>

          {/* Error State */}
          {mutation.isError && (
            <div className="form-error">
              Error submitting review. Please try again.
            </div>
          )}
        </form>
      )}
    </section>
  );
}