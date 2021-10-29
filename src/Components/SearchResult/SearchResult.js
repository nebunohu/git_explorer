import { Component } from 'react';

class SearchResult extends Component {
  render() {
    return (
      <li className='search-wrapper__result-wrapper'>
        <div className='search-wrapper__result-name'>
          {/*<a href={this.props.url} alt=''></a>*/}
        </div>
        <div className='search-wrapper__result-description'></div>
      </li>
    );
  }
}

export default SearchResult;
