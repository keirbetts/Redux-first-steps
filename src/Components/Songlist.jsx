import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions'

//To call an action creator from a component it must be passed into the connect function


class Songlist extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return <div className='item' key={song.title}>
        <div className='right floated content'>
          <button className='ui button primary' onClick={() => this.props.selectSong(song)}>Select</button>
          {/* Clicking on a button updates the state inside the Redux store */}
        </div>
        <div className='content'>{song.title}</div>
      </div>
    })
  }

  render() {
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    );
  }
}

//State in this function is all the data in a redux store
const mapStateToProps = (state) => {
  return { songs: state.songs }
  //This object will show up as props inside the component
}

//If selectSong is not passed into the connect function(called like a normal JS function) it will just return
//an object and Redux will not detect an action

export default connect(mapStateToProps, { selectSong })(Songlist);

//Connect looks at the functions inside the object(in this case selectSong) and wraps them in another JS function. 
//When this new function is called, connect will automatically call the action creator, take the actions which is returned
//and then automatically call the dispatch function.

//The connect function connects a React component to a Redux store.

// It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

// It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

//Connect returns a function. The second set of parentheses invoke the function which was returned.