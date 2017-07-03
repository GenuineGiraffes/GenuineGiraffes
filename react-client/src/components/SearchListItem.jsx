import React from 'react';
import ModalSearchList from './ModalSearchList.jsx';

const SearchListItem = (props) => {
  return (
    <tr>
      <td onClick={ () => { props.showModalSearchList(props.book) }} className="mdl-data-table__cell--non-numeric">{props.book.title}</td>
      <td onClick={ () => { props.showModalSearchList(props.book) }} className="mdl-data-table__cell--non-numeric">{props.book.author}</td>
      <td onClick={ () => { props.showModalSearchList(props.book) }} className="mdl-data-table__cell--non-numeric">{props.book.yearPublished}</td>
      <td onClick={ () => { props.showModalSearchList(props.book) }} className="mdl-data-table__cell--non-numeric">{props.book.lang}</td>
      <td className="mdl-data-table__cell--non-numeric"><a href={props.book.audio} target="_blank" style={{color:'black'}}><i className="material-icons">headset</i></a></td>
      <td className="mdl-data-table__cell--non-numeric"><a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons addBook" onClick={ () => { props.addBookToLibrary(props.book) } }>add</i></a></td>
    </tr>
  )
};

export default SearchListItem;


//<td><img className="thumbnail" src={props.book.cover} /></td>