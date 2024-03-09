// Playlist.js
import React, { useState } from 'react';
import TrackList from './Tracklist';
import styles from './css/Playlist.module.css';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className={styles.playlist}>
      <input className={styles.input} defaultValue={'New Playlist'} onChange={handleNameChange} value={playlistName} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className={styles.saveButton} onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;