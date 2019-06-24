import React, { Component } from 'react';

import styles from './ImageFinderApp.module.css';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';

class ImageFinderApp extends Component {
  state = {
    images: [],
    error: null,
  };

  componentDidMount() {
    axios
      .get(API_URL + API_KEY)
      .then(({ data }) => this.setState({ images: data.hits }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { images, error } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm />
        {error && <p>Somithing goes wrong: {error.message}</p>}
        {images.length > 0 && <Gallery items={images} />}

        <button type="button" className={styles.loadMoreBTN}>
          Load more
        </button>
        <a href="pixabay.com">pixabay.com</a>
      </div>
    );
  }
}

export default ImageFinderApp;
