import { ADD_BOOK, DELETE_BOOK, TOGGLE_FAVORITE } from './actionTypes';

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook
});

export const deleteBook = (bookId) => ({
  type: DELETE_BOOK,
  payload: bookId
});

export const toggleFavorite = (bookId) => ({
  type: TOGGLE_FAVORITE,
  payload: bookId
})