import ReviewFormSection from "./ReviewFormSection";
import ReviewsSection from "./ReviewsSection";
import BookDetails from "./BookDetails";
import { Error, Loading } from "./MessageComponents";
import useBooks from "../hooks/useBooks";

export default function Book({ bookId }) {
    const { isPending, isError, reviews, book } = useBooks(bookId);
  
    if (isError) {
      return <Error />;
    }
  
    if (isPending) {
      return <Loading />;
    }
  
    return (
      <main className="book-detail">
        <div>
          <span className="book-cover">
            <img src={book.thumbnail} alt={book.title} />
          </span>
        </div>
        <div>
          <BookDetails book={book} />
          <ReviewFormSection bookId={bookId} />
          <ReviewsSection reviews={reviews} />
        </div>
      </main>
    );
  }