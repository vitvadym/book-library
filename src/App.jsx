import './App.css';
import { BookForm } from './components/BookForm/BookForm';
import { BookList } from './components/BookList/BookList';
import { Filter } from './components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Book library</h1>
      </header>

      <main className='app-main'>
        <div className='app-left-column'>
          <BookForm />
        </div>
        <div className='app-right-column'>
          <Filter />
          <BookList />
        </div>
      </main>
      <ToastContainer position='top-right'/>
    </div>
  )
}
