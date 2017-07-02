import React from 'react';
import ModalSearchList from './ModalSearchList.jsx';

const SearchListItem = (props) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.yearPublished}</td>
      <td>{props.book.genre}</td>
      <td>{props.book.lang}</td>
      <td><i className="material-icons">headset</i></td>
      <td onClick={ () => { props.addBookToLibrary(props.book) } }><a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons addBook">add</i></a></td>
    </tr>
  )
};

export default SearchListItem;


//<td><img className="thumbnail" src={props.book.cover} /></td>