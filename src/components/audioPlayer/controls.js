import React from "react";
import './controls.css'
import { IconContext } from "react-icons";
export default function Controls({isPlaying, setIsPlaying, handleNext, handlePrev}){
    return <IconContext.Provider value={{size:'35px', color:'#C$D0E3'}}>
        <div className="controls-wrapper">
            <div className="action-btn">
                
            </div>
        </div>
    </IconContext.Provider>
    
}