import BookShelfChanger from "./BookShelfChanger.js";
import PropTypes from "prop-types";

const Book = ({ book, updateBookShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : "none"
            })`,
          }}
        ></div>
        <BookShelfChanger book={book} updateBookShelf={updateBookShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors &&
        book.authors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default Book;
