import React, { Component } from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

class Gallery extends Component {
  state: {};

  showLargeImage = () => console.log('Show large image');

  render() {
    const { items } = this.props;
    return (
      items.length > 0 && (
        <ul className={styles.gallery}>
          {items.map(item => (
            <li key={item.id}>
              <PhotoCard {...item} showLargeImage={this.showLargeImage} />
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default Gallery;
