import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import BookShelf from './components/BookShelf.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [1,2,3,4,5,6,7,8,9],
      isModalOpen: false
    }
    this.addBookToLibrary = this.addBookToLibrary.bind(this);
    this.deleteBookFromLibrary = this.deleteBookFromLibrary.bind(this);
    this.fetchLibraryBooks = this.fetchLibraryBooks.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  search(term) {
    console.log(`Submitting POST request...Searching ${term}...`)
    axios.post('/book/import', {q: term})
      .then((res) => {
        console.log('Search successful!');
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  addBookToLibrary(book) {
    console.log('Submitting POST request...Adding book to library...')
    axios.post('/library', {'book': book})
      .then((res) => {
        console.log('POST successful! Added book to library!')
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  deleteBookFromLibrary(book) {
    console.log('Submitting POST request...deleting book from library...');
    axios.post('/library', {'book': book})
      .then((res) => {
        console.log('POST successful! Deleted book from library!');
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      })
  }

  fetchLibraryBooks() {
    console.log('Submitting GET request...fetching all library books...')
    axios.get('/library')
      .then((res) => {
        console.log('GET successful! Got library books!')
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }

  render () {
    return (
      <div>
        <h1 id="appTitle">PageTurner</h1>
        <h3 id="appSubtitle">The public-domain book manager app</h3>
        <BookShelf />
        <Search onSearch={this.search} />
        <List books={this.state.books} modal={this.state.isModalOpen}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
