import React, { useRef, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actionType from '../redux/actionType'
import ControlBar from './ControlBar'
import VideoWrap from './VideoWrap'
import {themeContext} from '../theme'
import { useState } from 'react'
import LiveChat from './LiveChat'
import AuthBar from './AuthBar'
import {createStore} from 'redux'
//redux
import rootReducer from '../redux/index'

const store = createStore(rootReducer)


function Player(props){
    const theme = useContext(themeContext)
    const playerRef = useRef(null)
    const dispatch = useDispatch()
    const [videoRef,setVideoRef] = useState(null)

    useEffect(()=>{
        playerRef.current.addEventListener("mousemove",()=>dispatch({type:actionType.MOVEOVERVIDEO}))
        playerRef.current.addEventListener("mouseout",()=>dispatch({type:actionType.MOVEOUTVIDEO}))
        playerRef.current.addEventListener("click",()=>dispatch({type:actionType.CLICKONVIDEO}))
        setVideoRef(playerRef.current.childNodes[1].childNodes[0]);
    },[playerRef])
    const handleEnter = (e)=>{
        e.preventDefault()
    }
    const handleClickMask = ()=>{
        dispatch({type:actionType.CLICKMASK})
    }
    return (
        <div className="Player" ref={playerRef} style = {{maxWidth:theme.width,margin:"auto"}} onDragEnter={(e)=>handleEnter(e)}>
            <AuthBar/>
            <VideoWrap srcLink = {"https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"}/>
            <ControlBar videoRef = {videoRef} playerRef = {playerRef.current}/>
            <LiveChat/>
        </div>
    )
}
export default Player;
