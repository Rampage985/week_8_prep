import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    if (storedBooks.length === 0) {
      const defaultBooks = [
        {
          id: 1,
          title: "Life of Pi",
          author: "Yann Martel",
          genre: "Classic",
          description: "Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor Pi Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.",
          coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg",
        },
        {
          id: 2,
          title: "Roswell Johnson Saves the World!",
          author: "Chris Colfer",
          genre: "Childrens",
          description: "Eleven year old Roswell Johnson is obsessed with conspiracies about extraterrestrial life, an interest he inherited from his late father, who aptly named Roswell after the infamous UFO crash in Roswell, New Mexico.",
          coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697016370i/199385668.jpg",
        },
        {
          id: 3,
          title: "The Reapers are the Angels",
          author: "Alden Bell",
          genre: "Fantasy",
          description: "Zombies have infested a fallen America. A young girl named Temple is on the run. Haunted by her past and pursued by a killer, Temple is surrounded by death and danger, hoping to be set free.",
          coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388716938i/8051458.jpg",
        },
        {
          id: 4,
          title: "Grand Theft AI",
          author: "James Cox",
          genre: "Science Fiction",
          description:"San Francisco, 2051. Rising like neo-Shanghai over the Bay, a labyrinth of quantum accelerators, hologram dreams, and fiercely regulated androids. Forget powder, pills, or bud--kids get high slotting wafers of data under the ear, and they'll pay fat ¢rypto for the best. At the hottest nightclub in the city ... the Fang. Baz Covane is a battle-scarred thief who sticks to small-time bots. Ria Rose is the underworld fixer with a big-time score that could easily get 'em both killed. 'Cuz the Fang's psychotic kingpin Otto Rex has a vault with more security than a fusion reactor. And the glass inside is priceless--enough to set up Baz, Ria, and their crack team of cyber-misfits on the white sands of Tahiti forever. But this crime doesn't just carry infinite VR-Prison time--it's Baz and Ria's last shot at redemption. Forced to confess every last secret on their neurals, they'll have to trust each other completely if they stand any chance of infiltrating Otto's lair, raiding its spiraling rings of physical and virtual firewalls, to finally hack into his mind and crack his deepest layer of security, before the Blackhawks touch down with federal warrants--for Grand Theft AI.",
          coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685343258i/123313912.jpg",
        }
      ];
      localStorage.setItem("books", JSON.stringify(defaultBooks));
      setBooks(defaultBooks);
    } else {
      setBooks(storedBooks);
    }
  }, []);

  const handleSearch = (query) => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const filteredBooks = storedBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
