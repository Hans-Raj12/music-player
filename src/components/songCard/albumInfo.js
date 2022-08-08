import React from "react";
import './albumInfo.css'
export default function AlbumInfo({album}){
    console.log(album)
    const artists = []
    album?.artists?.forEach((artist)=>{
        artists.push(artist.name)
    })
    return (
        <div className="albumInfo-card">
            <div className="albumName-container">
                <div className="marque">
                <p>{album?.name+"-"+artists?.join(", ")}</p>

                </div>
            </div>
            <div className="album-info">
                <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(", ")} with ${album?.total_tracks } Track(s)`}</p>
            </div>
            <div className="album-release">
                <p>Release Date: {album?.release_date} </p>
            </div>
        </div>
    )

}