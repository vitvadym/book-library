import { configureStore } from '@reduxjs/toolkit';
// import { booksReducer } from './books/reducer';
import filterReducer from './slices/filterSlice';
import bookReducer from './slices/bookSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  }
})