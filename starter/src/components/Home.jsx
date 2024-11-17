import BookList from "./BookList";
import { Link } from "react-router-dom";

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

export default Home;
