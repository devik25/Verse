import React from 'react';
import './Components_CSS/Songs_container.css'
import Searchbar_light from './Searchbar_light';
import Song_card from './Song_card';


const artists = ['Arijit', 'Shirley', 'Salman', 'Armaan', 'Darshan', 'Havana', 'chupke chupke', 'darshan', 'Soniya'];
const albums = ['Yaarian', 'Jugnoo', 'Sanam', 'Wake up sid', 'Lagaan', 'Raone'];

function Songs_container(props) {

  return <div className='right'> 
  <div className='black_grad'>
    <Searchbar_light song={props.song} update_song={props.update_song}/> 
    <div className='heading'>
        Albums
    </div>
    <div className='songs_container'>
    {artists.map(artist=>(<Song_card key={artist} name={artist} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Artists
    </div>
    <div className='songs_container'>
    {albums.map(album=>(<Song_card key={album} name={album} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Artists
    </div>
    <div className='songs_container'>
    {artists.map(artist=>(<Song_card key={artist} name={artist} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Artists
    </div>
    <div className='songs_container'>
    {artists.map(artist=>(<Song_card key={artist} name={artist} update_all = {props.update_all}/>))}      
    </div>

  </div>
  </div>;
  
}

export default Songs_container;
