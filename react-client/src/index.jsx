import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchList from './components/SearchList.jsx';
import Search from './components/Search.jsx';
import BookShelf from './components/BookShelf.jsx';
import ModalSearchList from './components/ModalSearchList.jsx';
import ModalBookOnShelf from './components/ModalBookOnShelf.jsx';
import ModalErrorSearch from './components/ModalErrorSearch.jsx'
import Boron from 'boron';
import Modal from 'boron/OutlineModal';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalSearchBook: {},
      modalLibraryBook: {},
      libraryBooks: [],
      searchedBooks: [],
      modalSearchListOpen: false,
      modalBookOnShelfOpen: false,
      modalSearchErrorOpen: false
    }
    this.addBookToLibrary = this.addBookToLibrary.bind(this);
    this.deleteBookFromLibrary = this.deleteBookFromLibrary.bind(this);
    this.fetchLibraryBooks = this.fetchLibraryBooks.bind(this);
    this.search = this.search.bind(this);
    this.showModalSearchList = this.showModalSearchList.bind(this);
    this.showModalBookOnShelf = this.showModalBookOnShelf.bind(this);
    this.showModalSearchError = this.showModalSearchError.bind(this);
  }

  componentDidMount() {
    this.fetchLibraryBooks();
  }

  showModalSearchError() {
    this.setState({
      modalSearchErrorOpen: true,
      modalSearchListOpen: false,
      modalBookOnShelfOpen: false
    }, () => {
      console.log("error modal works!")
    });
  }

  showModalSearchList(book){
    this.setState({
      modalSearchBook: book
    }, () => {
      this.setState({
        modalSearchErrorOpen: false,
        modalSearchListOpen: true,
        modalBookOnShelfOpen: false,
      }, () => {
      console.log('DONE SONNNNNNN!!!!')
      });
    });
  }

  showModalBookOnShelf(book){
    this.setState({
      modalLibraryBook: book
    }, () => {
      this.setState({
        modalSearchListOpen: false,
        modalSearchErrorOpen: false,
        modalBookOnShelfOpen: true
      }, () => {
        console.log('DONE!!!!')
      });
    })
  }

  hideModal(){
    this.refs.modal.hide();
  }

  search(term) {
    var context = this;
    context.setState({
      searchedBooks: [],
      modalSearchErrorOpen: false,
      modalSearchListOpen: false,
      modalBookOnShelfOpen: false
    }, () => {
      console.log('reset searchedBooks state before search');
    });
    console.log(`Submitting POST request...Searching ${term}...`)
    axios.post('/book/import', { q: term }, {timeout: 5000})
      .then((res) => {
        const books = res.data.books;
        const searchedBooks = [];
        books.map((book) => {
          var bookObject = {
            //isbn: book.isbn,
            title: book.title,
            author: book.authors[0].first_name + ' ' + book.authors[0].last_name,
            cover: book.cover,
            yearPublished: book.copyright_year,
            content: book.url_text_source,
            audio: book.url_librivox,
            totaltime: book.totaltime,
            //numPages: book.,
            lang: book.language,
            genre: book.genre,
            description: book.description
          };
          //console.log(bookObject);
          searchedBooks.push(bookObject);
        });

        return this.setState({
          searchedBooks: searchedBooks
        });
      })
      .then(() => {
        console.log('Set the book state!', this.state.searchedBooks)
      })
      .catch((err) => {
        console.log('Book does not exist or is not in the public domain', this.showModalSearchError());
      });
  }

  addBookToLibrary(book) {
    console.log('Your book...', book)
    console.log('Submitting POST request...Adding book to library...')
    axios.post('/library', { 'book': book })
      .then((res) => {
        return this.setState({
          modalSearchErrorOpen: false,
          modalSearchListOpen: false,
          modalBookOnShelfOpen: false
        });
      })
      .then((res) => {
        console.log('POST successful! Added book to library!')
        this.fetchLibraryBooks();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  deleteBookFromLibrary(book) {
    console.log('Submitting POST request...deleting book from library...');
    axios.post('/library/delete', { 'book': book })
      .then((res) => {
        console.log('Deleted book from library!');
        this.fetchLibraryBooks();
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      })
  }

  fetchLibraryBooks() {
    console.log('Submitting GET request...fetching all library books...')
    axios.get('/library')
      .then((res) => {
        console.log('Got library books!')
        const libraryBooks = res.data;
        if (libraryBooks === '') {
          return this.setState({
            libraryBooks: []
          });
        } else {
          return this.setState({
            libraryBooks: libraryBooks
          });
        }
      })
      .then( () => {
        console.log('Your current library...', this.state.libraryBooks);
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  displaySearchedBooks(props) {
    if (props.searchedBooks.length > 0) {
      return <SearchList addBookToLibrary={props.addBookToLibrary} searchedBooks={props.searchedBooks} showModalSearchList={props.showModalSearchList} />
    }
    return <h1></h1>
  }

  render() {
    return (
      <div>
        <h1 id="appTitle">PageTurner</h1>
        <BookShelf libraryBooks={this.state.libraryBooks} showModalBookOnShelf={this.showModalBookOnShelf} deleteBookFromLibrary={this.deleteBookFromLibrary} />
        <ModalSearchList isOpen={this.state.modalSearchListOpen} book={this.state.modalSearchBook} addBookToLibrary={this.addBookToLibrary}/>
        <ModalBookOnShelf isOpen={this.state.modalBookOnShelfOpen} book={this.state.modalLibraryBook} deleteBookFromLibrary={this.deleteBookFromLibrary}/>
        <ModalErrorSearch isOpen={this.state.modalSearchErrorOpen}/>
        <Search onSearch={this.search} />
        <this.displaySearchedBooks addBookToLibrary={this.addBookToLibrary} searchedBooks={this.state.searchedBooks} showModalSearchList={this.showModalSearchList} />
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

