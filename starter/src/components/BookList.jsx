import Book from "./Book";

const BookList = ({ bookShelf, books, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <div className="bookshelf-books">
        <h2 className="bookshelf-title">{bookShelf.title}</h2>
        <ul className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} updateBookShelf={updateBookShelf} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default BookList;
