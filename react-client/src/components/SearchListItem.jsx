import React from 'react';
import ModalSearchList from './ModalSearchList.jsx';

const SearchListItem = (props) => {
  return (
    <tr onClick={ () => { props.showModalSearchList(props.book) }}>
      <td className="mdl-data-table__cell--non-numeric">{props.book.title}</td>
      <td className="mdl-data-table__cell--non-numeric">{props.book.author}</td>
      <td className="mdl-data-table__cell--non-numeric">{props.book.yearPublished}</td>
      <td className="mdl-data-table__cell--non-numeric">{props.book.genre}</td>
      <td className="mdl-data-table__cell--non-numeric">{props.book.lang}</td>
      <td className="mdl-data-table__cell--non-numeric"><i className="material-icons">headset</i></td>
      <td className="mdl-data-table__cell--non-numeric"><a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons addBook" onClick={ () => { props.addBookToLibrary(props.book) } }>add</i></a></td>
    </tr>
  )
};

export default SearchListItem;


//<td><img className="thumbnail" src={props.book.cover} /></td>