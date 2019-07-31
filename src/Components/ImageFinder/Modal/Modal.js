import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, tags }) =>
  (
<div className={styles.overlay}>
  <div className={styles.modal}>
    <img src={largeImageURL} alt={tags} />
  </div>
</div>
  );

export default Modal;


