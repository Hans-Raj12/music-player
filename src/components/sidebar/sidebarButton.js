import React from 'react'

import { IconContext } from 'react-icons'
import { MdPanoramaPhotosphereSelect } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './sidebarButton.css'

export default function SidebarButton(props){
    return(
        <Link to={props.to}> 
            <div className='btn-body'>
            <IconContext.Provider>
                {props.icon}
                <p className='btn-title'>{props.title}</p>
            </IconContext.Provider>

            </div>
            
        </Link>
    )
}