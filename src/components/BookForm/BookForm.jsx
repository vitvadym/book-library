import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import './BookForm.css'
import { addBook } from '../../redux/books/actionCreators';

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
      const book = {
        title,
        author,
        id: uuid(),
      };

      dispath(addBook(book));

      setTitle('');
      setAuthor('');
    }
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
      </form>
    </div>
  )
}
