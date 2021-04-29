import React, {  useState } from 'react'
import PlaylistHolder from './components/PlaylistHolder'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [play_data, setData] = useState({tracks:[], title:''})

  const checkEnter = (e) => {
    if(e.which == 13) getSongs()
  }

  async function getSongs(){
        console.log('running function with', url);
        fetch(`http://127.0.0.1:4000?url=${url}`, {headers:{'mode': "no-cors"}})
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
      }

  return (
      <div id="app" className="flex flex-col items-stretch md:items-center">
          <p className="header text-8xl font-bold m-5">playlist thing</p>

          <input onKeyDown={checkEnter} onChange={(e) => setUrl(e.target.value)} type="text" className="text-6xl rounded ring-1 focus:ring-2 text-center mb-3"/>
          <PlaylistHolder data={play_data}/>
      </div>
  )
}

export default App
