import React from 'react';

const Book = (props) => (
  <div className="book book-green">
    <h2>{props.libraryBook.title}</h2>
  </div>
);

export default Book;