// SearchResults.js
import React from 'react';
import TrackList from './Tracklist';
import styles from './css/SearchResults.module.css';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;

