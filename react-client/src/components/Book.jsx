import React from 'react';

const Book = (props) => {
  return (
    <div className="book book-green" onClick={ () => { props.deleteBookFromLibrary(props.libraryBook) } } >
      <h2>{props.libraryBook.author}</h2>
    </div>
  );
};


export default Book;