import PropTypes from "prop-types";

const BookShelfChanger = ({ book, updateBookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={book.shelf}
        id="select"
        onChange={(event) => updateBookShelf(event.target.value, book)}
      >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently reading</option>
        <option value="wantToRead">Want to read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default BookShelfChanger;
