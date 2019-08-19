import React, { Component, createRef } from 'react';
import styles from './ImageFinderApp.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
// import Modal from './Modal/Modal';
import * as imageAPI from '../../services/pixabay-API';

class ImageFinderApp extends Component {
  state = {
    images: [],
    error: null,
    searchQuery: '',
    pageNumber: 0,
    // isModalOpen: false,
  };

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  //   console.log(`isModalOpen: ${this.state.isModalOpen}`);
  // };

  // closeModal = () => this.setState({ isModalOpen: false });

  handleSubmit = e => {
    const { searchQuery, pageNumber, images } = this.state;
    e.preventDefault();
    const handlePageNumber = pageNumber + 1;
    this.setState({ pageNumber: handlePageNumber });
    this.fetchImages(searchQuery, handlePageNumber);
    this.ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    console.log(`images: ${images}`);
    console.log(`this.ref.current: ${this.ref.current}`);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  fetchImages = (searchQuery, pageNumber) => {
    imageAPI
      .fetchImages(searchQuery, pageNumber)
      .then(({ data }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        })),
      )
      .catch(error => this.setState({ error }));
  };

  // showLargeImage = () => {
  //   console.log('showLargeImage');
  // };

  render() {
    const { images, error, searchQuery, isModalOpen } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm
          value={searchQuery}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <p ref={this.ref}> Ref </p>
        {error && <p>Something goes wrong: {error.message}</p>}
        {images.length > 0 && <Gallery items={images} />}

        <button
          type="button"
          className={styles.loadMoreBTN}
          onClick={this.handleSubmit}
        >
          Load more
        </button>

        <a href="http://www.pixabay.com">pixabay.com</a>
        {/* <button type="button" onClick={this.openModal}>
          OpenModal
        </button> */}

        {/* {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <h1>Lorem ipsum</h1>
            <button type="button" onClick={this.closeModal}>
              CloseModal
            </button>
          </Modal>
        )} */}
      </div>
    );
  }
}

export default ImageFinderApp;
