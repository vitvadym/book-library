import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

const initialState = []

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]

    case DELETE_BOOK:
      return state.filter(
        book => book.id !== action.payload);

    default:
      return state;
  }
}