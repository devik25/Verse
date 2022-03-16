import React, { Component, useState, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Searchbar_light from './Components/Searchbar_light';
import Song_card from './Components/Song_card';
import Songs_container from './Components/Songs_container';
import Searchbar_dark from './Components/Searchbar_dark'
import Navigation_content from './Components/Navigation_content';
import Audio_player from './Components/Audio_player';
import './App.css';


class App extends Component {
  state = { 
    searched:'',
    queued_list:[],
    //Main playable content
    current_song_name:'',
    current_song_album:'',
    current_song:'',
    current_song_img:'https://i1.sndcdn.com/avatars-dzNT2CdK5GL7Tj17-fo9zqQ-t500x500.jpg',
    current_song_link:'',
    //Controls
    song_count:0,
    status:'pause',
    total_duration:'',
    current_duration:0
};

// useEffect();

update_all = async(name, album, link, img)=>{
  await this.setState({current_song_link:link});
  await this.setState({current_song_img:img});
  await this.setState({current_song_name:name});
  await this.setState({current_song_album:album});
}

update_cnt = async(count, name, album, link, img)=>{
  // console.log("clicked")
  await this.setState({song_count:count-1});
  // console.log(this.state.cnt);
  await this.setState({current_song_link:link});
  await this.setState({current_song_img:img});
  await this.setState({current_song_name:name});
  await this.setState({current_song_album:album});
  await this.setState({status:'play'})
}

update_song = async(song)=>{
  await this.setState({searched:song});
  await this.setState({song_count:0});
  this.update_queue();
}

update_queue = async ()=>{
  let url = 'https://jiosaavn-api-v3.vercel.app/search?query='+this.state.searched;
  const response = await fetch(url);
  const data = await response.json();
  this.setState({queued_list:data.results});
  // this.song_player();
  // console.log(this.state.queued_list);
}

song_player = async ()=>{
  let song = this.state.queued_list[this.state.song_count].api_url.song;
  const response = await fetch(song);
  const data = await response.json();
  this.setState({current_song:data});
  let link = data.media_url.slice(0, data.media_url.length-7);
  link+='320.mp4';
  let img = data.image.slice(0, data.image.length-11);
  img+='500x500.jpg';
  // console.log(data);
  this.setState({current_song_link:link});
  this.setState({current_song_img:img});
  this.setState({current_song_name:data.song});
  this.setState({current_song_album:data.album});
}

next_song = async ()=>{
  const l = this.state.queued_list.length;
  let cnt = this.state.song_count;
  if(cnt == l-1) cnt=0;
  else cnt++;
  await this.setState({song_count:cnt});
  console.log(cnt);
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

      <Routes>
        <Route path='/search' element={<Navigation_content song={this.state.searched} update_song={this.update_song} list={this.state.queued_list} update_cnt={this.update_cnt} current_song_link={this.state.current_song_link}/>}/>
        <Route path='/' element={<Songs_container song={this.state.searched} update_song={this.update_song} update_all={this.update_all} fetch_songByName={this.fetch_songByName}/>}/>
      </Routes>
      
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
