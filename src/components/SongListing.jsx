import React, { Component } from 'react'

class SongListing extends Component {
  search = () => {
      const searchterm = this.props.name + ' by ' + this.props.artist
      fetch(`https://api.spotify.com/v1/search?q=${searchterm}&type=track`,
      {
          headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`
          }
      })
      .then(response => response.json())
      .then(json => {
        let results = json.tracks.items
        if(results.length < 1) console.log('no tracks found');
        else{
          console.log(results[0]);
        }
      })
  }

  render(){
    return (
      <span 
      onClick={this.search} 
      className="song-listing border border-solid border-black rounded p-4 m-2 cursor-pointer">
        <span className="name text-2xl font-bold"> {this.props.name} </span> 
        <span className="artist text-lg block"> {this.props.artist}</span>
        </span>
    )
  } 
}


export default SongListing