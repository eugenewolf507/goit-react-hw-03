import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';
import Modal from '../Modal/Modal';

class Gallery extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: '',
  };

  openModal = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { items } = this.props;
    const { isModalOpen, largeImageURL } = this.state;
    return (
      <Fragment>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt="" className={styles.image} />
            <button
              type="button"
              onClick={this.closeModal}
              className={styles.modalBTN}
            >
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

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Gallery;
