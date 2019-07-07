import React from 'react';
import styles from './PhotoCard.module.css';

const SearchForm = ({ webformatURL, likes, views, comments, downloads }) => (
  <div className={styles.photoCard}>
    <img src={webformatURL} alt="" />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
    <button
      type="button"
      className={styles.fullscreenButton}
      // onClick={showLargeImage}
    >
      <i className="material-icons">zoom_out_map</i>
    </button>
  </div>
);

export default SearchForm;
