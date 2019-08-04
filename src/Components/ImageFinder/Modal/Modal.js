import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    console.log(`e.code ${e.code}`);
    if (e.code !== 'Escape') return;
    console.log('It works too');
    this.props.onClose();
  };

  handleOverlayClick = e => {
    const { current } = this.backdropRef;
    console.log(`current: ${current}`);
    console.log(`e.target: ${e.target}`);
    if (current && e.target !== current) return;
    // if current exist (==! null) and e.target !== current
    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <button
        type="button"
        className={styles.overlay}
        ref={this.backdropRef}
        onClick={this.handleOverlayClick}
      >
        <div className={styles.modal}>
          {children}
          {/* <img src={largeImageURL} alt={tags} /> */}
        </div>
      </button>
    );
  }
}

export default Modal;
