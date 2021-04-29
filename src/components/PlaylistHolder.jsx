import React from 'react'
import SongListing from './SongListing'

export default function PlaylistHolder(props) {
    return (
        <>
            <p className="text-6xl text-center mb-4">{props.data.title}</p>
            <div className="song-holder grid grid-cols-4">
                {props.data.tracks.map(song => <SongListing name={song.name} artist={song.artist}/>)}
            </div>
        </>
    )
}
