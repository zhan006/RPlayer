import React, { useRef, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import {MOVEOUTVIDEO,MOVEOVERVIDEO,CLICKONVIDEO} from '../redux/actionType'
import ControlBar from './ControlBar'
import VideoWrap from './VideoWrap'
import {themeContext} from '../theme'

function Player(props){
    const theme = useContext(themeContext)
    const playerRef = useRef(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        playerRef.current.addEventListener("mouseover",()=>dispatch({type:MOVEOVERVIDEO}))
        playerRef.current.addEventListener("mouseout",()=>dispatch({type:MOVEOUTVIDEO}))
        playerRef.current.addEventListener("click",()=>dispatch({type:CLICKONVIDEO}))
    },[playerRef])
    return (
        <div className="Player" ref={playerRef} style = {{maxWidth:theme.width,margin:"auto"}}>
            <VideoWrap srcLink = {"https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4"}/>
            <ControlBar/>
        </div> 
    )
}
export default Player;