import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import BookShelf from './components/BookShelf.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [1,2,3,4,5,6,7,8,9],
      isModalOpen: false
    }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  componentWillMount() {
  }

  search(term) {
    console.log(`${term} was searched`);

  }

  addBook() {

  }

  fetchBooks() {
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