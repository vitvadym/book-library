import { ADD_BOOK } from './actionTypes';

const initialState = []

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]


    default:
      return state;
  }
}