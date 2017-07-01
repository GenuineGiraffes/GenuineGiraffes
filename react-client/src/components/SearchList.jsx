import React from 'react';
import SearchListItem from './SearchListItem.jsx';

const SearchList = (props) => {
  console.log('Inside Search List', props.searchedBooks)
return (
  <div>
    <div id="resultsNumber">Displaying { props.searchedBooks.length } results.</div>
    <div id="searchResults">
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th>Author</th>
            <th>Year Published</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Audio</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          { props.searchedBooks.map((book, index) => <SearchListItem key={index} book={book} addBookToLibrary={props.addBookToLibrary} />)}
        </tbody>
      </table>
    </div>
  </div>
  )
};

export default SearchList;


//<th>Cover</th>