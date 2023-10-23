import { useState } from 'react'
import './BookForm.css'

export const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && author) {
      //dispatch

      setTitle('');
      setAuthor('');
    }
  }

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
