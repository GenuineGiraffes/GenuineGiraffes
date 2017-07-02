import React from 'react';
import Book from './Book.jsx'

const BookShelf = (props) => {
  console.log(props);
  return (
      <div>
        <h4 id="myBooks">My Books</h4>
        <div className="bookshelf">
        {props.libraryBooks.map( (libraryBook, index) => {
          return <Book key={index} 
                      libraryBook={libraryBook} 
                      deleteBookFromLibrary={props.deleteBookFromLibrary} 
                  />
        })}
        </div>
      </div>
  );
};

export default BookShelf;