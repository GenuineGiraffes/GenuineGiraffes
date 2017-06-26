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
      books: []
    }
  }

  componentWillMount() {
  }

  search(term) {
    console.log(`${term} was searched`);

  }

  fetchBooks() {
  }

  render () {
    return (<div>
      <h1>PageTurner</h1>
      <h3>The public domain book manager app</h3>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));