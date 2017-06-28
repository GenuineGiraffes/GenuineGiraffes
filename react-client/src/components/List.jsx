import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div id="searchResults">

    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Title</th>
          <th>Author</th>
          <th>Year Published</th>
          <th>Genre</th>
          <th>Language</th>
          <th>Cover</th>
          <th>Audio</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        { props.books.map((book, index) => <ListItem key={index} book={book}/>)}
      </tbody>
    </table>

  </div>
)

export default List;
