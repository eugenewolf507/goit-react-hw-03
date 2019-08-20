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
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleOverlayClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) return;
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
        </div>
      </button>
    );
  }
}

export default Modal;
