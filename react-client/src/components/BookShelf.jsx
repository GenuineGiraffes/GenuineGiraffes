import React from 'react';
import Book from './Book.jsx'

const BookShelf = (props) => {
  console.log('hi bookshelf props iiiiii', props);
  return (
      <div>
        <div className="bookshelf">
        {props.libraryBooks.map( (libraryBook, index) => {
          return <Book key={index}
                      libraryBook={libraryBook}
                      showModalBookOnShelf={props.showModalBookOnShelf}
                      deleteBookFromLibrary={props.deleteBookFromLibrary}
                  />
        })}
        </div>
      </div>
  );
};

export default BookShelf;