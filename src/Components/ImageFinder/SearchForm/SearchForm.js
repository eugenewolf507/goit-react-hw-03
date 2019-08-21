import React from 'react';
import PropTypes from 'prop-types';
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

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
