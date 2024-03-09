// SearchBar.js
import React, { useState } from 'react';
import styles from './css/SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const search = () => {
    onSearch(term);
  };

  return (
    <div className={styles.searchBar}>
      <input className={styles.input} placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className={styles.button} onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;

