import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    resetFilters: () => {
      return initialState;
    },
    setOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    }
  }
})

export const selectTitle = (state) => state.filter.title;
export const selectAuthor = (state) => state.filter.author;
export const selectFavorite = (state) => state.filter.onlyFavorite;

export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavorite,
} = filterSlice.actions;

export default filterSlice.reducer;