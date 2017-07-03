import React from 'react';
import Boron from 'boron';
import Modal from 'boron/FlyModal';

class ModalErrorSearch extends React.Component {
  constructor(props) {
    super(props);

    this.styles = {
      btn1: {
        margin: '1em auto',
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
        background: 'red',
        color: '#FFFFFF',
        border: 'none',
        float: 'none',
        display: 'flex',
        verticalAlign: 'middle'
      },
      container: {
        padding: '2em',
        textAlign: 'center',
        overflow: 'scroll'
      },
      title: {
        margin: 0,
        color: '#C94E50',
        fontWeight: 400
      }
    };      
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
      <Modal ref="modal" >
        <div style={this.styles.container}>
          <h3><strong>Does not exist in the public domain</strong></h3>          
  
          <button className="modalClose" onClick={this.hideModal.bind(this)} style={this.styles.btn2}>Close</button>
        </div>
      </Modal>
    )
  }
}

export default ModalErrorSearch;