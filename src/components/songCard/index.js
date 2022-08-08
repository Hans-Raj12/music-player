import React from "react";
import AlbumImage from "./albumImage.js";
import AlbumInfo from "./albumInfo.js";
import './songCard.css'
export default function SongCard({album}){
    return <div className="songCard-body flex">
        <AlbumImage url={album?.images[0]?.url}/>
        <AlbumInfo album={album}/>
    </div>
}