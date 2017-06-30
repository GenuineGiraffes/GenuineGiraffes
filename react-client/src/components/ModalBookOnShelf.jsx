import React from 'react';
import Boron from 'boron';
import Modal from 'boron/OutlineModal';

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

  render() {
    return (
      <Modal ref="modal">
        <div style={this.styles.container}>
          <h3 className="bookTitle" style={this.styles.title}><strong>Harry Potter & The Sorcerer's Stone</strong></h3>
          <img src='https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Sorcerer%27s_Stone.jpg' />
          <h4 className="bookAuthor">by J.K. Rowling</h4>
          <h5 className="bookDate">1999</h5>
          <p className="bookSummary">Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.</p>
          <h5 className="bookAudio">Click to download audio version:  <i className="material-icons headset">headset</i></h5>
          <button className="modalClose" onClick={this.hideModal.bind(this)} style={this.styles.btn1}>Remove</button>
          <button className="modalClose" onClick={this.hideModal.bind(this)} style={this.styles.btn2}>Read</button>
        </div>
      </Modal>
    )
  }
}

export default ModalBookOnShelf;