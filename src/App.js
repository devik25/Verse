import React, { Component, useState, useEffect} from 'react';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import Song_card from './Components/Song_card';
import Songs_container from './Components/Songs_container';
import Audio_player from './Components/Audio_player';
import './App.css';

// async fetch_song_list(){
//   let url = 'https://jiosaavn-api-v3.vercel.app/search?query=jubin';
//   const response = await fetch(url);
//   const data = await response.json();
//   let song = data.results[0].api_url.song;
//   const song_response = await fetch(song);
//   const song_data = await song_response.json();
//   console.log(song_data.media_url);
//   this.setState({song_link:song_data.media_url});
// }

class App extends Component {
  state = { 
    searched:'',
    queued_list:'',
    //Main playable content
    current_song_name:'',
    current_song_album:'',
    current_song:'',
    current_song_img:'',
    current_song_link:'',
    song_count:0,
    status:'play'
};

// useEffect();

update_song = async(song)=>{
  await this.setState({searched:song});
  await this.setState({song_cnt:0});
  this.update_queue();
}

update_queue = async ()=>{
  let url = 'https://jiosaavn-api-v3.vercel.app/search?query='+this.state.searched;
  const response = await fetch(url);
  const data = await response.json();
  this.setState({queued_list:data.results});
  this.song_player();
  // console.log(this.state.queued_list);
}

song_player = async ()=>{
  let song = this.state.queued_list[this.state.song_count].api_url.song;
  const response = await fetch(song);
  const data = await response.json();
  this.setState({current_song:data});
  let link = data.media_url.slice(0, data.media_url.length-7);
  link+='320.mp4';
  let img = data.image.slice(0, data.media_url.length-11);
  img+='500x500.jpg';
  console.log(data);
  this.setState({current_song_link:link});
  this.setState({current_song_img:data.image});
  this.setState({current_song_name:data.song});
  this.setState({current_song_album:data.album});
}

next_song = async ()=>{
  const l = this.state.queued_list.length;
  let cnt = this.state.song_count;
  if(cnt == l-1) cnt=0;
  else cnt++;
  await this.setState({song_count:cnt});
  this.song_player();
}

prev_song = async ()=>{
  const l = this.state.queued_list.length;
  let cnt = this.state.song_count;
  if(cnt == 0) cnt=l-1;
  else cnt--;
  await this.setState({song_count:cnt});
  this.song_player();
}

play_pause = async ()=>{
  const status = this.state.status;
  if(status === 'play'){
    this.setState({status:'pause'});
  }
  else{
    this.setState({status:'play'});
  }
  // console.log(this.state.status);
}

  render() {
        
    return (
      
      <div className='main_section'>

        <div className='left'>
          <Sidebar/>
        </div>
            
        <div className='right'> 
          <div className='black_grad'>
            <Searchbar_light 
            song={this.state.searched} 
            update_song={this.update_song}/>     
            <Songs_container fetch_songByName={this.fetch_songByName}/>
            {/* <Songs_container/> */}
          </div>
        </div>        
        
        <Audio_player 
        song_img={this.state.current_song_img} 
        song_name={this.state.current_song_name} 
        song_album={this.state.current_song_album} 
        song={this.state.current_song_link} 
        status={this.state.status} 
        play_pause={this.play_pause} 
        update_queue={this.update_queue} 
        next_song={this.next_song} 
        prev_song={this.prev_song}/>

      </div>

    );
  }
}
 
export default App;
