import { useQueries } from "@tanstack/react-query";
import getBook from "../api/getBook";
import getReviewsForBook from "../api/getReviewsForBook";

export default function useBooks(bookId) {
    return useQueries({
      queries: [
        {
           queryKey: ["book", { bookId }],
           queryFn: ()=> getBook(bookId),  
        },
        {
           queryKey: ["reviews", { bookId }],
           queryFn: ()=> getReviewsForBook(bookId)
        }
      ],
      combine: (queries) =>{
        
      const isPending = queries.some(query => query.status === 'pending');
      const isError = queries.some(query => query.status === 'error');
        const [book, reviews] = queries.map(query => query.data)
        
          return {
           isPending, 
            isError,
            book,
            reviews
          }
      }
    });
  }