import React from "react";
import './audioPlayer.css'
import ProgressCirlce from "./progressCircle";

export default function AudioPlayer({currentTrack}){
    return <div className="player-body flex">
        <div className="player-left-body">
            <ProgressCirlce
                percentage={75}
                isPlaying={true}
                size={300}
                color="#C96850"
            />
        </div>
        <div className="player-right-body"></div>
    </div>
}