import { useState } from "react";
import { search } from "../BooksAPI.js";
import Book from "./Book";
import { Link } from "react-router-dom";

const Search = ({ books, updateBookShelf }) => {
  const [booksSearch, setBooksSearch] = useState([]);
  const searchBooks = async (query) => {
    const key = query.trim();
    if (key) {
      const res = await search(key);
      const dataSearch = Array.isArray(res) ? res : [res];
      dataSearch.forEach((book) => {
        const findBook = books.find((b) => b.id === book.id);
        if (findBook) {
          book.shelf = findBook.shelf;
        }
        if (!book.shelf) {
          book.shelf = "none";
        }
      });
      setBooksSearch(dataSearch);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          {" "}
          Close{" "}
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => searchBooks(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksSearch[0] && booksSearch[0].error ? (
            <h1>No Books found</h1>
          ) : (
            booksSearch.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} updateBookShelf={updateBookShelf} />
                </li>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
