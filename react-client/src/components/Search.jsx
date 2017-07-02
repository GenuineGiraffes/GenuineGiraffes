import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.search();
    }
  }

  onChange(e) {
    console.log(e);
    this.setState({
      term: e.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div id="searchArea">
        <input className="search" placeholder="Enter a title or author..." value={this.state.book} onChange={this.onChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    )
  }
}

export default Search;

//  <button id="searchButton" onClick={this.search.bind(this)}><i className="material-icons">search</i></button>