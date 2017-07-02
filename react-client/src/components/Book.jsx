import React from 'react';
// import ModalBookOnShelf from './ModalBookOnShelf.jsx';

const Book = (props) => {
  return (
    <div className="book book-green" onClick={props.showModalBookOnShelf} >
      <h2>{props.libraryBook.author}</h2>
    </div>
  );
};


export default Book;