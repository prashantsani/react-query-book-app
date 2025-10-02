/**
 * Mock database for books
 * In production, these would come from a real API
 */
const BOOKS_DB = {
  "pD6arNyKyi8C": {
    id: "pD6arNyKyi8C",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy novel about the quest of home-loving Bilbo Baggins, the hobbit, to win a share of the treasure guarded by Smaug the dragon.",
    thumbnail: "https://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "1937",
    pageCount: 310,
    categories: ["Fantasy", "Adventure"],
    averageRating: 4.5
  },
  "aWZzLPhY4o0C": {
    id: "aWZzLPhY4o0C",
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    description: "The first volume of The Lord of the Rings, telling the tale of the hobbit Frodo Baggins and the Fellowship formed to destroy the One Ring.",
    thumbnail: "https://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "1954",
    pageCount: 423,
    categories: ["Fantasy", "Epic"],
    averageRating: 4.8
  },
  "12e8PJ2T7sQC": {
    id: "12e8PJ2T7sQC",
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    description: "The second volume of The Lord of the Rings, following the continuing quest to destroy the One Ring and the war of the Ring.",
    thumbnail: "https://books.google.com/books/content?id=12e8PJ2T7sQC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "1954",
    pageCount: 352,
    categories: ["Fantasy", "Epic"],
    averageRating: 4.7
  },
  "WZ0f_yUgc0UC": {
    id: "WZ0f_yUgc0UC",
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    description: "The final volume of The Lord of the Rings, chronicling the final confrontation with Sauron and the return of the king to Gondor.",
    thumbnail: "https://books.google.com/books/content?id=WZ0f_yUgc0UC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    publishedDate: "1955",
    pageCount: 416,
    categories: ["Fantasy", "Epic"],
    averageRating: 4.9
  }
};

export default BOOKS_DB;