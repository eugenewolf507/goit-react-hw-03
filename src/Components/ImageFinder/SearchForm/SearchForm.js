import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = { searchQuery: '' };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form className={styles.searchForm}>
        <input
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
