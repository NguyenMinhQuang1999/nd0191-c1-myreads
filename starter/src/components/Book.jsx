import BookShelfChanger from "./BookShelfChanger";

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
export default Book;
