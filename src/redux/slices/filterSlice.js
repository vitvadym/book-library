import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: ''
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
    }
  }
})

export const selectTitle = ((state) => state.filter.title);
export const selectAuthor = ((state) => state.filter.author);

export const { setTitleFilter, setAuthorFilter } = filterSlice.actions;
export default filterSlice.reducer;