import React,{useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {PLAY,PAUSE,MOVEOVERVIDEO,CLICKONVIDEO} from '../redux/actionType'
import ProgressBar from './ProgressBar'

function ControlBar(props){    
    const {style,videoRef} = props
    const dispatch = useDispatch()
    const isplaying = useSelector(state => state.togglePlay.play)
    const visible = useSelector(state=>state.mouseState.barVisible)
    const controller = useRef(null)
    const handlePlayClick = () => {
        if(isplaying) dispatch({type:PAUSE})
        if(!isplaying) dispatch({type:PLAY})
    }
    
    return (
    <div className = {"controller"} ref = {controller} style = {{...style,visibility:visible?"visible":'hidden'}}>
        <ProgressBar videoRef = {videoRef}/>
        <div className = "buttonModule">
            <div className = {"leftButton"}>
                <button className = {"icon"} onClick = {()=>{handlePlayClick()}}>
                    {
                        isplaying?
                        <svg className="bi bi-pause-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                        </svg>:
                        <svg className="bi bi-play-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                    }
                    
                </button>
            </div>
        </div>
    </div>
    )
}
export default ControlBar