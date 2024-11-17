import BookList from "./BookList.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ bookShelfs, books, updateBookShelf }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {bookShelfs.map((bookShelf) => {
          const booksByShelf = books.filter(
            (book) => book.shelf === bookShelf.key
          );
          return (
            <BookList
              key={bookShelf.key}
              bookShelf={bookShelf}
              books={booksByShelf}
              updateBookShelf={updateBookShelf}
            />
          );
        })}
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  bookShelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Home;
