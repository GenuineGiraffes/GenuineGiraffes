import React from 'react';
import Boron from 'boron';
import Modal from 'boron/OutlineModal';
import $ from 'jquery';

class ModalBookOnShelf extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      btn1: {
        margin: '1em auto',
        padding: '1em 2em',
        outline: 'none',
        fontSize: 16,
        fontWeight: '600',
        background: '#C94E50',
        color: '#FFFFFF',
        border: 'none',
        float: 'right'
      },
      btn2: {
        margin: '1em auto',
        padding: '1em 2em',
        outline: 'none',
        fontSize: 16,
        fontWeight: '600',
        background: '#6B7F98',
        color: '#FFFFFF',
        border: 'none',
        float: 'left'
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
          <h5 className="bookAudio">Click to download audio version:  <a href={this.props.book.audio} target="_blank" style={{color:'black'}}><i className="material-icons headset">headset</i></a></h5>
          <button className="modalClose" onClick={ () =>{
            this.hideModal.bind(this)();
            this.props.deleteBookFromLibrary(this.props.book);
          }
          } style={this.styles.btn1}>Remove</button>
          <a className="modalClose" style={this.styles.btn1} href={this.props.book.content} target="_blank" style={this.styles.btn2}>Read</a>
        </div>
      </Modal>
    )
  }
}

//  <img src='https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg' />

export default ModalBookOnShelf;