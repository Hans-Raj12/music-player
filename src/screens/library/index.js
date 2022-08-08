import React, { useEffect, useState } from 'react' 
import { IconContext } from 'react-icons'
import {AiFillPlayCircle} from 'react-icons/ai'
import APIKit from '../../spotify'
import './library.css'
import { useNavigate } from 'react-router-dom'

export default function Library()
{
    const [playlists, setPlaylists] = useState(null)
    useEffect(()=>{
        APIKit.get("me/playlists").then(async function(response){
            setPlaylists(response.data.items)
            console.log(response.data.items)
        })    
    },[])
    const navigate = useNavigate()
    const playPlayList = (id) =>{
        navigate("/player",{state:{id:id}})
    }
    return <div className='screens-container'>
        <div className='library-body'>
        {playlists?.map(playlist=>(
        <div className='playlist-card' key={playlist.id} onClick={()=>playPlayList(playlist.id)}>
            <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Art'/>
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            <div className='playlist-fade'>
                <IconContext.Provider value={{size:"50px", color:"rgb(59, 111, 16)"}}>
                    <AiFillPlayCircle/>
                </IconContext.Provider>
            </div>

        </div>
        ))}
        </div>
    </div>
}