import { v4 as uuid } from 'uuid';

export const createBook = (book) => ({
  ...book,
  isFavorite: false,
  id: uuid()
});