import React from 'react';
import './Components_CSS/Songs_container.css'
import Searchbar_light from './Searchbar_light';
import Song_card from './Song_card';


const Trending = ['Raataan Lambiyan', 'Tera Hua Cash', 'Proper Patola', 'Param Sundari A.R. Rahman',
 'Lazy Lad Amit Trivedi', 'Ghana Kasoota Raftaar', 'Bad Boy X Bad Girl Badshah', 'Saawariya Aastha Gill',
'Kabhii Tumhhe Javed-Mohsin', 'Bandeya Dil Juunglee', 'Pyaar...Ek Tarfaa Amaal Mallik'];

const quicks = ['Dhoka', 'Srivalli pushpa part 1', 'Pyaar krte hona', 'Tumse pyaar karke', 'Yaad na aye', 'Meri tarah', 'Rait zara si', 'Doobey', 
'Saami saami', 'bas tum mere paas raho', 'ek tu he toh hai', 'Suna hai', 'Uff', 'kusu kusu'];

const sanam = ['Gulabi Aankhen sanam band', 'O Mere Dil Ke Chain sanam band',
 'Yeh Raaten Yeh Mausam', 'Mere Mehboob Qayamat Sanam Puri', 'Lag Ja Gale sanam band', 'Tujhse Naraz Nahi Zindagi sanam band',
'Aap Ki Nazron Ne Samjha sanam band', 'Pehla Nasha sanam band', 'Ek Ladki Ko Dekha To sanam band', 'Kuch Na Kaho Sanam band',
'Tere Bina Zindagi Se sanam band', 'Sanam Mennu sanam band', 'Ishq Bulaava sanam band', 'Roop Tera Mastana sanam band', 'Jaane Woh Kaise sanam band'];

const localTrain = ['Kaisey Jiyun local train', 'Mizaaj local train', 'Dilnawaz local train', 'Aaftab local train', 'Khudi local train',
'Dil Mere local train', 'Vaaqif local train', 'Aaoge Tum Kabhi local train', 'Choo Lo local train', 'eh Zindagi Hai local train']
function Songs_container(props) {

  return <div className='right'> 
  <div className='black_grad'>
     
    <div className='heading'>
        Today's Trending
    </div>
    <div className='songs_container'>
    {Trending.map(artist=>(<Song_card key={artist} name={artist} song={props.song} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Quick Picks
    </div>
    <div className='songs_container'>
    {quicks.map(album=>(<Song_card key={album} name={album} song={props.song} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Sanam
    </div>
    <div className='songs_container'>
    {sanam.map(artist=>(<Song_card key={artist} name={artist} song={props.song} update_all = {props.update_all}/>))}      
    </div>

    <div className='heading'>
        Local Train
    </div>
    <div className='songs_container'>
    {localTrain.map(artist=>(<Song_card key={artist} song={props.song} name={artist} update_all = {props.update_all}/>))}      
    </div>

  </div>
  </div>;
  
}

export default Songs_container;
