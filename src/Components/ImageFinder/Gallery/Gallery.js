import React, { Component, Fragment } from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';
import Modal from '../Modal/Modal';

class Gallery extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: ''
  };

  openModal = (largeImageURL) => {
    this.setState({ isModalOpen: true, largeImageURL });
    console.log(`isModalOpen: ${this.state.isModalOpen}`);
  };

  closeModal = () => this.setState({ isModalOpen: false });

  showLargeImage = () => console.log('Show large image');

  render() {
    const { items } = this.props;
    const {isModalOpen, largeImageURL} = this.state;
    return (<Fragment>
      {isModalOpen && (
        <Modal onClose={this.closeModal}>
          <img src={largeImageURL} alt="" className={styles.image} />
          <button type="button" onClick={this.closeModal} className={styles.modalBTN}>
            CloseModal
          </button>
        </Modal>
      )}
      {items.length > 0 && (
        <ul className={styles.gallery}>
          {items.map(item => (
            <li key={item.id}>
              <PhotoCard {...item} showLargeImage={this.openModal} />
            </li>
          ))}
        </ul>
      
      )}
      </Fragment>
    );
  }
}

export default Gallery;
