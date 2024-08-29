import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <Link to={`/book/${book.id}`}>Click Here for more Detail</Link>
    </div>
  );
}

export default BookCard;
