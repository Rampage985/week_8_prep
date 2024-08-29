import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/bookpage.css';  // Assuming you put the CSS in a separate file

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const book = storedBooks.find((b) => b.id === parseInt(id));
    setBook(book);
  }, [id]);

  if (!book) return <p>Book not found</p>;

  return (
    <div className="book-page">
      <img src={book.coverUrl} alt={book.title} className="book-cover" />
      <div className="book-details">
        <h1 className="book-title">{book.title}</h1>
        <h3 className="book-author">by {book.author}</h3>
        <p className="book-genre">{book.genre}</p>
        <p className="book-description">{book.description}</p>
      </div>
    </div>
  );
}

export default BookPage;
