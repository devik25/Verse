import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import Song_card from './Components/Song_card';
import Songs_container from './Components/Songs_container';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (

      <div className='main_section'>
        <div className='left'>
          <Sidebar/>
        </div>
            
        <div className='right'> 
          <div className='black_grad'>
            <Searchbar_light/>     
            <Songs_container/>
            <Songs_container/>
          </div>
        </div>

      </div>

    );
  }
}
 
export default App;
