import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Components_CSS/Searchbar.css'

function Searchbar_light(props) {  

  const[song, setSong]=useState('');

  const handleSubmit = e=>{
    e.preventDefault();
    // window.location.href = "/search";
    e.target.reset();
    props.update_song(song);
    // console.log(e);
  }

  const handleChange = e=>{
    setSong(e.target.value);
    // console.log(e.target.value);
  }

  return <div className='Searchbar dark'>

<Link to={'/search'}>
  <form onSubmit={handleSubmit}>
    <input onChange={handleChange} className='search dark' type="text" placeholder="search"></input>
  </form>
  </Link>

      <div className='link dark'>
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