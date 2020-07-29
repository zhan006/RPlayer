import React, { useRef, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionType from '../redux/actionType'
import ControlBar from './ControlBar'
import VideoWrap from './VideoWrap'
import {themeContext} from '../theme'
import { useState } from 'react'


function Player(props){
    const theme = useContext(themeContext)
    const playerRef = useRef(null)
    const dispatch = useDispatch()
    const [videoRef,setVideoRef] = useState(null)
    const [playerHeight,setHeight] = useState(0)
    const maskOn = useSelector(state=>state.mouseState.maskVisible)
    useEffect(()=>{
        playerRef.current.addEventListener("mousemove",()=>dispatch({type:actionType.MOVEOVERVIDEO}))
        playerRef.current.addEventListener("mouseout",()=>dispatch({type:actionType.MOVEOUTVIDEO}))
        playerRef.current.addEventListener("click",()=>dispatch({type:actionType.CLICKONVIDEO}))
        setVideoRef(playerRef.current.childNodes[0].childNodes[0]);
        setHeight(playerRef.current.offsetHeight)
    },[playerRef])
    const handleEnter = (e)=>{
        e.preventDefault()
    }
    const handleClickMask = ()=>{
        dispatch({type:actionType.CLICKMASK})
    }
    return (
        <div style={{position:"relative"}}>
            {maskOn && <div className ="player-mask" style={{maxWidth:theme.width,margin:"auto"}} onClick={()=>{handleClickMask()}}/>}
            <div className="Player" ref={playerRef} style = {{maxWidth:theme.width,margin:"auto"}} onDragEnter={(e)=>handleEnter(e)}>
                <VideoWrap srcLink = {"https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"}/>
                <ControlBar videoRef = {videoRef} playerRef = {playerRef.current}/>
            </div>
            
        </div>
    )
}
export default Player;