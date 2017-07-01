import React from 'react';
import Book from './Book.jsx'

const BookShelf = (props) => (
  // const bookColors = ['book-green', 'book-blue'];
    <div>
      <h4 id="myBooks">My Books</h4>
      <div className="bookshelf">
      {props.libraryBooks.map(libraryBook => <Book libraryBook={libraryBook} />)}
      </div>
    </div>
);

export default BookShelf;