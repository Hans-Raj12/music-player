import React, { useEffect, useState } from 'react' 
import { IconContext } from 'react-icons'
import {AiFillPlayCircle} from 'react-icons/ai'
import APIKit from '../../spotify'
import './library.css'
export default function Library()
{
    const [playlists, setPlaylists] = useState(null)
    useEffect(()=>{
        APIKit.get("me/playlists").then(async function(response){
            setPlaylists(response.data.items)
            console.log(response.data.items)
        })    
    },[])
    
    return <div className='screens-container'>
        <div className='library-body'>
        {playlists?.map(playlist=>(
        <div className='playlist-card'>
            <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Art'/>
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            <div className='playlist-fade'>
                <IconContext.Provider value={{size:"50px", color:"#E99D72"}}>
                    <AiFillPlayCircle/>
                </IconContext.Provider>
            </div>

        </div>
        ))}
        </div>
    </div>
}