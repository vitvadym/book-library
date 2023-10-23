import { deleteBook } from '../../redux/books/actionCreators';
import './BookList.css';
import { useDispatch, useSelector } from 'react-redux';

export const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  };

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      {books.length > 0
        ? <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div className='book-info'>
                {book.title} by <strong>{book.title}</strong>
              </div>
              <div className='book-actions'
              >
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        : <p>No books available</p>}
    </div>
  )
}
