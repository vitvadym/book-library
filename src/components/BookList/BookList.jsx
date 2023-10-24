import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators';
import { selectAuthor, selectTitle } from '../../redux/slices/filterSlice';
import './BookList.css';
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

export const BookList = () => {
  const querySearchTitle = useSelector(selectTitle);
  const querySearchAuthor = useSelector(selectAuthor);

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  };

  const handleToggleFavorite = (bookId) => {
    dispatch(toggleFavorite(bookId))
  };

  const visibleBooks = books.filter((book) => {
    const preparedTitleQuery = querySearchTitle.toLowerCase();
    const preparedAuthorQuery = querySearchAuthor.toLowerCase();
    
    return book.title
      .toLowerCase()
      .includes(preparedTitleQuery) &&
      book.author
        .toLowerCase()
        .includes(preparedAuthorQuery)
  });

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      {books.length > 0
        ? <ul>
          {visibleBooks.map((book) => (
            <li key={book.id}>
              <div className='book-info'>
                {book.title} by <strong>{book.title}</strong>
              </div>
              <div className='book-actions'>
                <span
                  className='book-actions'
                  onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite
                    ? <BsBookmarkHeartFill className='star-icon' />
                    : <BsBookmarkHeart className='star-icon' />}
                </span>
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
