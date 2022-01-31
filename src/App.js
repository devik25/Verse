import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='color'>
      
        <Sidebar/>
        <Searchbar_light/>
       
      </div>
    );
  }
}
 
export default App;
