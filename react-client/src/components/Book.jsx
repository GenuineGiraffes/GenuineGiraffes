import React from 'react';
// import ModalBookOnShelf from './ModalBookOnShelf.jsx';

const Book = (props) => {
  return (
    <div className="book book-green" 
    style={{backgroundColor: '#' + Math.random().toString(16).slice(2, 8)}}
    onClick={ () => {props.showModalBookOnShelf(props.libraryBook, props.deleteBookFromLibrary) }} >
      <h2>{props.libraryBook.author}</h2>
    </div>
  );
};


export default Book;