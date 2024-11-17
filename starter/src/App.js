import "./App.css";
import { useState, useEffect } from "react";
import {getAll, update} from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Search from "./components/Search.js";

function App() {
  const bookShelfs = [
    { title: "Currently Reading", key: "currentlyReading" },
    { title: "Want To Read", key: "wantToRead" },
    { title: "Read", key: "read" },
  ];

  const [books, setBooks] = useState([]);
    useEffect(() => {
      const getBooks = async () => {
        const res = await getAll();
        setBooks(res);
      };

      getBooks();
    }, []);

    const updateBookShelf = async (shelf, book) => {
      await update(book, shelf);
      book.shelf = shelf;
      setBooks([...books.filter(item => item.id !== book.id), book]);
    };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            bookShelfs={bookShelfs}
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />

      <Route
        exact
        path="/search"
        element={
          <Search
            bookShelfs={bookShelfs}
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />
    </Routes>
  );
}

export default App;
