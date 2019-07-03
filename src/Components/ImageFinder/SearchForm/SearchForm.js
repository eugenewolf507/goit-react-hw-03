import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ value, onChange, onSubmit }) => (
  <form className={styles.searchForm} onSubmit={onSubmit}>
    <input
      name="searchQuery"
      value={value}
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      onChange={onChange}
    />
  </form>
);

export default SearchForm;
