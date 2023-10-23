import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook
});

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId,
})