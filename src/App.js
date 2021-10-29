import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import SearchForm from './Components/search-form/search-form';
import SearchResult from './Components/SearchResult/SearchResult';

class App extends Component {
  /*constructor() {
    super();
  }*/
  

  render() {
    return (
      <div className="app-wrapper">
        <header>
          <h1>Github explorer</h1>
        </header>
        <main>
          <div className='search-wrapper'>
            <SearchForm />
            <ul className='search-wrapper__search-results'>
              <SearchResult />
            </ul>
          </div>
        </main>
        <footer>
          code: Barashkov N.
        </footer>
      </div>
    );
  } 
}

export default App;
