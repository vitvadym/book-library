import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBook } from '../../utils/createBook';
import { getRandomIndex } from '../../utils/getRandomIndex';

const initialState = {
  books: [],
  isLoading: false,
  error: null
};

export const fetchBook = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('https://65382ed7a543859d1bb14beb.mockapi.io/books');
      const index = getRandomIndex(data);
      console.log(thunkAPI);

      return data[index];
    } catch (error) {
      throw new Error(error.message)
    }
  }
)

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      state.books = state.books.map((book) => (
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.books.push(createBook(action.payload))
      state.isLoading = false;
    });

    builder.addCase(fetchBook.pending, (state) => {
      state.isLoading = true;
    });
    
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message
    })
  },
})

export const selectBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectError = (state) => state.books.error;

export const {
  addBook,
  deleteBook,
  toggleFavorite,
} = bookSlice.actions

export default bookSlice.reducer