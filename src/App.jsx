import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddBook from "./pages/AddBook";
import BookPage from "./pages/BookPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;

