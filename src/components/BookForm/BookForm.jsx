import { useState } from 'react'
import { useDispatch } from 'react-redux';
import './BookForm.css'
import booksData from '../../data/books.json'
import { addBook } from '../../redux/slices/bookSlice';
import { createBook } from '../../utils/createBook';

export const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispath = useDispatch()

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
      dispath(addBook(book));

      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const index = Math.floor(
      Math.random() * booksData.length);

    const book = createBook(booksData[index]);
    dispath(addBook(book));
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
      </form>
    </div>
  )
}
