import { useDispatch, useSelector} from 'react-redux';
import './Filter.css';
import {
  selectAuthor,
  selectTitle,
  setAuthorFilter,
  setTitleFilter,
} from '../../redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const querySearchTitle = useSelector(selectTitle);
  const querySearchAuthor = useSelector(selectAuthor);

  const handleChangeTitle = (event) => {
    dispatch(setTitleFilter(event.target.value))
  };

  const handleChangeAuthor = (event) => {
    dispatch(setAuthorFilter(event.target.value))
  };

  return (
    <div className='app-block filter filter-row'>
      <div className='filter-group'>
        <input
          type="text"
          value={querySearchTitle}
          onChange={handleChangeTitle}
          placeholder='Filter by title'
        />
      </div>

      <div className='filter-group'>
        <input
          type="text"
          value={querySearchAuthor}
          onChange={handleChangeAuthor}
          placeholder='Filter by author'
        />
      </div>
    </div>
  )
}
