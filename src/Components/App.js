import React from 'react';
import Songlist from './Songlist';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='column eight wide'>
          <Songlist />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>

  );
};

export default App;


//Create a reducer which contains a list of songs
//Create a reducer which shows which song is selected
//These are the two pieces of state inside the application

//Action creator which can change the currently selected song(the state)

//Provider and connect components(created by react Redux). We will pass props into them.
//Provider will be at the top of the hierarchy. Gives information to all other components in the app.

//We will create an instance of the connect component above the song list. Communicates with the provider, so it knows when the list of songs changes. Provider sends the list of songs back down to the connect component.

//The connect component also ensures, the action creator is sent down to the song list as a prop.