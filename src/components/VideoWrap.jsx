import React, { useContext,useRef, useEffect } from 'react';
import { themeContext } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import {PAUSE,PLAY,MOVEOVERVIDEO,MOVEOUTVIDEO,CLICKONVIDEO} from '../redux/actionType'

export default function VideoWrap(props){
    const {srcLink} = props;
    const theme = useContext(themeContext)
    const videoRef = useRef(null)
    const buttonRef = useRef(null)
    const dispatch = useDispatch()
    const playStatus = useSelector(state => state.togglePlay.play)
    //initial player state
    useEffect(()=>{if(videoRef.current.paused){dispatch({type:PAUSE})}},[videoRef])
    //toggle player state after rendered
    useEffect(()=>{
        if(playStatus)videoRef.current.play()
        else{videoRef.current.pause()}
    },[playStatus,videoRef])
    //screen listener
    const handleClickScreen = ()=>{
        if(playStatus) dispatch({type:PAUSE})
        else{dispatch({type:PLAY})}
        buttonRef.current.style.display = "block"
        //buttonRef.current.style.display= "none"
        setTimeout(()=>buttonRef.current.style.display = "none",100)

    }

    return  (
    <div className = "playerWrap" onClick = {handleClickScreen}>
        <video ref = {videoRef} src = {srcLink} style = {{width:theme.width}}/>
        <button ref = {buttonRef} className = "playpause icon">
        {
            playStatus?
            <svg className="bi bi-play-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>:
            <svg className="bi bi-pause-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
                }
        </button>
    </div>
    )
}