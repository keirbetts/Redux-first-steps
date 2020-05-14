import { combineReducers } from 'redux'



const songsReducer = () => {
  return [
    { title: 'Lark Ascending', duration: '19:23' },
    { title: 'Le Moribond', duration: '2:56' },
    { title: 'I Love Hot Nights', duration: '3:44' },
    { title: 'How Lucky', duration: '4:02' }

  ]
}


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}


//keys that will appear in the state object

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})