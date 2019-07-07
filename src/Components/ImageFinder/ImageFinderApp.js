import React, { Component } from 'react';
import styles from './ImageFinderApp.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import * as imageAPI from '../../services/pixabay-API';

class ImageFinderApp extends Component {
  state = {
    images: [],
    error: null,
    searchQuery: '',
    pageNumber: 0,
  };

  handleSubmit = e => {
    const { searchQuery, pageNumber } = this.state;
    e.preventDefault();
    const handlePageNumber = pageNumber + 1;
    this.setState({ pageNumber: handlePageNumber });
    this.fetchImages(searchQuery, handlePageNumber);
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

  showLargeImage = () => {
    console.log('showLargeImage');
  };

  render() {
    const { images, error, searchQuery } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm
          value={searchQuery}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {error && <p>Somithing goes wrong: {error.message}</p>}
        {images.length > 0 && <Gallery items={images} />}

        <button
          type="button"
          className={styles.loadMoreBTN}
          onClick={this.handleSubmit}
        >
          Load more
        </button>
        <a href="pixabay.com">pixabay.com</a>
      </div>
    );
  }
}

export default ImageFinderApp;
