import { Component } from 'react';

class SearchForm extends Component {
  async submitHandler(event) {
    event.preventDefault();
    const response = await fetch(`https://api.nomoreparties.co/github-search?q=${event.target.elements[0].value}`);
    //const response = await fetch('https://api.github.com/search?q=react');
    try {
      if (response.ok) {
        const data = await response.json()
        const {total_count} = data;
        if (total_count) 
          console.log(total_count);
      } else {
        throw new Error('Fetch error');
      }
    }
    catch (error) {
      console.log("Возникла проблема с вашим fetch запросом: ", error.message);
    }
  }

  render() {
    return (
      <form className='search-form' onSubmit={this.submitHandler}>
        <input className='search-form__string-input' type='text' placeholder='Введите запрос'></input>
        <input className='search-form__search-button' type='submit' value='Поиск'></input>
      </form>
    );
  }
}

export default SearchForm;