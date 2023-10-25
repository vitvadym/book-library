import { deleteBook, selectBooks, toggleFavorite } from '../../redux/slices/bookSlice';
import { selectAuthor, selectFavorite, selectTitle } from '../../redux/slices/filterSlice';
import './BookList.css';
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

export const BookList = () => {
  const querySearchTitle = useSelector(selectTitle);
  const querySearchAuthor = useSelector(selectAuthor);
  const onlyFavorite = useSelector(selectFavorite);
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  console.log(books);

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId))
  };

  const handleToggleFavorite = (bookId) => {
    dispatch(toggleFavorite(bookId))
  };

  const visibleBooks = books.filter((book) => {
    const preparedTitleQuery = querySearchTitle.toLowerCase();
    const preparedAuthorQuery = querySearchAuthor.toLowerCase();

    const isTitleMatched = book.title
      .toLowerCase()
      .includes(preparedTitleQuery);

    const isAuthorMatched = book.author
      .toLowerCase()
      .includes(preparedAuthorQuery);

    const isFavoriteBook = onlyFavorite
      ? book.isFavorite
      : true;

    return isTitleMatched && isAuthorMatched && isFavoriteBook;
  });

  const highlightSearchQuery = (text, query) => {
    if (!query) {
      return text
    }
    const regex = new RegExp(`(${query})`, 'gi');

    return text.
      split(regex)
      .map((substr, i) => {
        if (substr.toLowerCase() === query.toLowerCase()) {
          return (
            <span
              key={i}
              className='highlight'>
              {substr}
            </span>
          )
        }

        return substr;
      })
  };

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      {books.length > 0
        ? <ul>
          {visibleBooks.map((book) => (
            <li key={book.id}>
              <div className='book-info'>
                {highlightSearchQuery(
                  book.title,
                  querySearchTitle,
                )} by {' '}
                <strong>
                  {highlightSearchQuery(
                    book.author,
                    querySearchAuthor,
                  )}
                </strong>
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
