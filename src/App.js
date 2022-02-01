import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import Song_card from './Components/Song_card';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='color'>
      
        {/* <Sidebar/> */}
        <Searchbar_light/>
        <Song_card/>
        <Song_card/>
       
      </div>
    );
  }
}
 
export default App;
