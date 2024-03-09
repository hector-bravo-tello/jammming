// TrackList.js
import React from 'react';
import Track from './Track';
import styles from './css/Tracklist.module.css';

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className={styles.trackList}>
      {
        tracks.map(track => (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        ))
      }
    </div>
  );
}

export default TrackList;
