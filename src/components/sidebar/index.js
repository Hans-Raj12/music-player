import React, { useEffect, useState } from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
import {MdFavorite} from 'react-icons/md'
import {FaGripfire, FaPlay} from 'react-icons/fa'
import {FaSignOutAlt} from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import {MdSpaceDashboard} from 'react-icons/md'
import apiClient from '../../spotify'

export default function Sidebar(){

    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGuCqZ2u6Titq_adqM1ceg5r7JoOc-_tjhCYvmg&s'
)
    useEffect(()=>{
        apiClient.get("me").then((response)=>
        setImage(response.data.images[0].url)
    )
    },[])

    return <div className='sidebar-container'> 
    <img src={image}
    className='profile-img'
     alt='profile'/>

    <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard/>}/>
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire/>}/>
        <SidebarButton title='Player' to='/player' icon={<FaPlay/>}/>
        <SidebarButton title='Favorites' to='/favorites' icon={<MdFavorite/>}/>
        <SidebarButton title='Library' to='/' icon={<IoLibrary/>}/>
    </div>
    <SidebarButton title='Sign Out' to='/' icon={<FaSignOutAlt/>}/>


    </div>
} 