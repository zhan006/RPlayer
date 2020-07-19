import React,{useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {PLAY,PAUSE,} from '../redux/actionType'
import ProgressBar from './ProgressBar'
import VolumeControl from './VolumeControl'
import Setting from './Setting'
import { useState } from 'react';

function ControlBar(props){    
    const {style,videoRef,playerRef} = props
    const dispatch = useDispatch()
    const isplaying = useSelector(state => state.togglePlay.play)
    const visible = useSelector(state=>state.mouseState.barVisible)
    const controller = useRef(null)
    const [isFullScreen,setFullScreen] = useState(false)
    const handlePlayClick = () => {
        if(isplaying) dispatch({type:PAUSE})
        if(!isplaying) dispatch({type:PLAY})
    }
    const handleFullScreen = ()=>{
        if(playerRef){
            if(!isFullScreen){
                playerRef.requestFullscreen()
                setFullScreen(true)
            }
            else{
                document.exitFullscreen()
                setFullScreen(false)
            }
        }
        
    }
    
    return (
    <div className = {"controller"} ref = {controller} style = {{...style,visibility:visible?"visible":'hidden'}}>
        {/* <div className = {"controllerMask"}/> */}
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
                <VolumeControl videoRef = {videoRef}/>    
            </div>
            <div className = {"rightButton"}>
                <Setting/>
                <button className = {"icon"} onClick = {()=>{handleFullScreen()}}>
                    {!isFullScreen && <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-fullscreen" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                    </svg>}
                    {isFullScreen && <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-fullscreen-exit" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
                    </svg>}
                </button>
            </div>
        </div>
    </div>
    )
}
export default ControlBar