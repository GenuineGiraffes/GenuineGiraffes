import React from 'react';
import Boron from 'boron';
import Modal from 'boron/OutlineModal';
import $ from 'jquery';

class ModalSearchList extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      btn1: {
        margin: 'auto',
        padding: '1em 2em',
        outline: 'none',
        fontSize: 16,
        fontWeight: '600',
        background: '#00b300',
        color: '#FFFFFF',
        border: 'none',
        float: 'right'
      },
      btn2: {
        margin: 'auto',
        padding: '1em 2em',
        outline: 'none',
        fontSize: 16,
        fontWeight: '600',
        background: '#6B7F98',
        color: '#FFFFFF',
        border: 'none',
        float: 'left'
      },
      btn3: {
        margin: 'auto',
        float: 'none',
        outline: 'none',
        color: 'black',
        border: 'none',
        zoom: 2,
        display: 'flex',
        verticalAlign: 'middle',
        textDecoration: 'none'
      },
      container: {
        padding: '2em',
        textAlign: 'center',
        height: 600,
        overflow: 'scroll'
      },
      title: {
        margin: 0,
        color: '#C94E50',
        fontWeight: 400
      }
    }

    this.removeHTMLtags = this.removeHTMLtags.bind(this);
  }

  componentWillReceiveProps(props) {
    props.isOpen ? this.showModal() : this.hideModal()
  }

  showModal() {
    this.refs.modal.show();
  }

  hideModal() {
    this.refs.modal.hide();
  }

  // https://stackoverflow.com/a/37369700
  removeHTMLtags(html) {
    return $("<p/>").html(html).text();
  }

  render() {
    return (
      <Modal ref="modal">
        <div style={this.styles.container}>
          <h3 className="bookTitle" style={this.styles.title}><strong>{this.props.book.title}</strong></h3>
          <h4 className="bookAuthor">by {this.props.book.author}</h4>
          <h5 className="bookDate">{this.props.book.yearPublished}</h5>
          <p className="bookSummary">{this.removeHTMLtags(this.props.book.description)}</p>
          <button className="modalClose" onClick={
              () => {
                this.hideModal.bind(this)();
                this.props.addBookToLibrary(this.props.book);
              }
            } style={this.styles.btn1}>Add</button>
          <button id="audioButton">
            <a href={this.props.book.audio} target="_blank" style={this.styles.btn3}><i className="material-icons headset">headset</i></a>
          </button>
          <a className="modalClose" style={this.styles.btn1} href={this.props.book.content} target="_blank" style={this.styles.btn2}>Read</a>
        </div>
      </Modal>
    )
  }
}

export default ModalSearchList;

{/*<img src='https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg' />*/}