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
    console.log('this.state.term:', this.state.term);
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div id="searchArea">
        <input placeholder="Enter book" value={this.state.book} onChange={this.onChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}/>

        <button onClick={this.search.bind(this)}><i className="material-icons">search</i></button>

      </div>
    )
  }
}

export default Search;
