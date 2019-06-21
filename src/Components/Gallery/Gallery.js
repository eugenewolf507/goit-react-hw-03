import React from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ items }) =>
  items.length > 0 && (
    <ul className={styles.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <PhotoCard {...item} />
        </li>
      ))}
    </ul>
  );

export default Gallery;
