import React from 'react';
import './Components_CSS/Searchbar.css'

function Searchbar_light(props) {

  return <div className='Searchbar'>
  
  <input className='search' type="text" placeholder="search"></input>

      <div className='link'>
        <div>
        Download
        </div>
        <div>
        <span style={{fontWeight:"600"}}>-</span>
        <span className='Share'>Share</span>
        </div>
      </div>
 
  </div>;
}

export default Searchbar_light;
