import React, { Component } from 'react'
import SongListing from './SongListing'

class PlaylistHolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songs: [],
            title: '',
        }
        if(this.props.url === "") return
        else {
            this.getSongs()
        }
    }
    getSongs = async () => {
                console.log('running function with', this.props.url);
                fetch(`http://127.0.0.1:4000?url=${this.props.url}`, {headers:{'mode': "no-cors"}})
                .then(res => res.json())
                .then(data => {
                    this.setState({songs: data.tracks})
                    this.setState({title: data.title})
                })
            }

    render() {
        return (
            <>
                <p className="text-6xl text-center mb-4">{this.state.title}</p>
                <div className="song-holder grid grid-cols-4">
                    {this.state.songs.map(song => <SongListing name={song.name} artist={song.artist}/>)}
                </div>
          </>
        )
    }
}

export default PlaylistHolder