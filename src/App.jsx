import React, {  useState } from 'react'
import logo from './logo.svg'
import SongListing from './components/SongListing'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [songs, setSongs] = useState([])
  const checkEnter = (e) => {
    if(e.which == 13) getSongs()
  }
  async function getSongs() {
            console.log('running function with', url);
            fetch(`http://127.0.0.1:4000?url=${url}`, {headers:{'mode': "no-cors"}})
            .then(res => res.json())
            .then(data => setSongs(data))
        }

  return (
      <div id="app" className="flex flex-col items-stretch md:items-center">
          <p className="header text-8xl font-bold m-5">playlist thing</p>

          <input onKeyDown={checkEnter} onChange={(e) => setUrl(e.target.value)} type="text" className="text-6xl rounded ring-1 focus:ring-2 text-center mb-3"/>
          <ul className="song-holder md:w-1/2">
            {songs.map(song => <SongListing name={song.name} artist={song.artist}/>)}
          </ul>
      </div>
  )
}

function test() {
  console.log(process.env.REACT_APP_TEST);
}

export default App
