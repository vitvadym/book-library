import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBook } from '../../utils/createBook';
import { getRandomIndex } from '../../utils/getRandomIndex';

const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const { data } = await axios.get('https://65382ed7a543859d1bb14beb.mockapi.io/books');
      const index = getRandomIndex(data);

      return data[index];
    } catch (error) {
      console.error(error)
    }
  }
)

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      return state.map((book) => (
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.push(createBook(action.payload))
    })
  }
})

export const {
  addBook,
  deleteBook,
  toggleFavorite,
} = bookSlice.actions

export default bookSlice.reducer