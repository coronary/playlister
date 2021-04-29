import React, {  useState } from 'react'
import PlaylistHolder from './components/PlaylistHolder'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [usedUrl, setUsed] = useState('')
  const checkEnter = (e) => {
    if(e.which == 13) setUsed(url)
  }

  return (
      <div id="app" className="flex flex-col items-stretch md:items-center">
          <p className="header text-8xl font-bold m-5">playlist thing</p>

          <input onKeyDown={checkEnter} onChange={(e) => setUrl(e.target.value)} type="text" className="text-6xl rounded ring-1 focus:ring-2 text-center mb-3"/>
          <PlaylistHolder url={usedUrl} />
      </div>
  )
}

function test() {
  console.log(process.env.REACT_APP_TEST);
}

export default App
