import { useState } from "react";
import { search } from "../BooksAPI.js";
import Book from "./Book.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { debounce } from "lodash";

const Search = ({ books, updateBookShelf }) => {
  const [countBook, setCountBook] = useState(0);
  const [booksSearch, setBooksSearch] = useState([]);
  const handleSearch = debounce(async (query) => {
    if (query) {
      const res = await search(query);
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
      setCountBook(dataSearch.length);
    } else {
      setBooksSearch([]);
      setCountBook(0);
    }
  }, 300);

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
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {(booksSearch[0] && booksSearch[0].error) || countBook === 0 ? (
          <h1>No Books found</h1>
        ) : (
          <>
            {countBook ? (
              <p className="text-center">Total: {countBook} books</p>
            ) : (
              ""
            )}
            <ol className="books-grid">
              {booksSearch.map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} updateBookShelf={updateBookShelf} />
                  </li>
                );
              })}
            </ol>
          </>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default Search;
