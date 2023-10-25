import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './BookForm.css'
import booksData from '../../data/books.json'
import {
  addBook,
  fetchBook,
  selectError,
  selectIsLoading,
} from '../../redux/slices/bookSlice';
import { createBook } from '../../utils/createBook';
import { getRandomIndex } from '../../utils/getRandomIndex';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';



export const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch()
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading)

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && author) {
      const book = createBook({ title, author });
      dispatch(addBook(book));

      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const index = getRandomIndex(booksData)

    const book = createBook(booksData[index]);
    dispatch(addBook(book));
  };

  const fetchRandomBook = () => {
    if (error) {
      toast.error(error)
    }
    dispatch(fetchBook())
  };

  return (
    <div className='app-block book-form'>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>

        <div>
          <label htmlFor="author">
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleChangeAuthor}
          />
        </div>
        <button
          type='submit'>
          Add book
        </button>
        <button
          onClick={handleAddRandomBook}
          type='button'>
          Add random book
        </button>
        <button
          onClick={fetchRandomBook}
          disabled={isLoading}
          type='button'>
          {isLoading
            ? <>
              <span>
                Loading data...
              </span>
              <FaSpinner className='spinner' />
            </>
            : 'Fetch random book'}
        </button>
      </form>
    </div>
  )
}
