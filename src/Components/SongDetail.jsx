import React from 'react';
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  console.log(song)
  if (!song) {
    return <div>Select Song</div>
  }
  return (
    <div>
      <h3>Song Details</h3>
      <p>Title: {song.title}
        <br />
        Length: {song.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}


export default connect(mapStateToProps)(SongDetail);