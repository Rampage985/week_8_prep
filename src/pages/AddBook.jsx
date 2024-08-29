import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const navigate = useNavigate();

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      description,
      coverUrl,
    };
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    storedBooks.push(newBook);
    localStorage.setItem("books", JSON.stringify(storedBooks));
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
