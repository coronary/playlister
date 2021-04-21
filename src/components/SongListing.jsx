import React, { Component } from 'react'

class SongListing extends Component {
    Search(e) {
        const searchterm = e.target.innerText.split('by').join(' ')
        fetch(`https://api.spotify.com/v1/search?q=${searchterm}&type=track`,
        {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json.tracks))
    }

    Test() {
        console.log(import.meta.env.VITE_TEST);
    }
  render(){
    return (
      <li onClick={this.Search} className="song-listing text-3xl border border-solid border-black rounded p-4 m-2">{this.props.name} by {this.props.artist}</li>
    )
  } 
}


export default SongListing