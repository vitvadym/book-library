import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import bookReducer from './slices/bookSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
  }
})