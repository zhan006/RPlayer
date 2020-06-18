import React, { useContext,useRef, useEffect } from 'react';
import { themeContext } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import {PAUSE,PLAY,MOVEOVERVIDEO,MOVEOUTVIDEO,CLICKONVIDEO} from '../redux/actionType'

export default function VideoWrap(props){
    const {srcLink} = props;
    const theme = useContext(themeContext)
    const videoRef = useRef(null)
    const dispatch = useDispatch()
    const playStatus = useSelector(state => state.togglePlay.play)
    //initial player state
    useEffect(()=>{if(videoRef.current.paused){dispatch({type:PAUSE})}},[videoRef])
    //toggle player state after rendered
    useEffect(()=>{
        if(playStatus)videoRef.current.play()
        else{videoRef.current.pause()}
    },[playStatus,videoRef])

    return  (
    <div>
        <video ref = {videoRef} src = {srcLink} style = {{width:theme.width}}/>
    </div>
    )
}