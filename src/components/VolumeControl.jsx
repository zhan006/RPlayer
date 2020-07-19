import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {HOVERONVOLUME,LEAVEVOLUME} from '../redux/actionType'
import { useEffect } from 'react';
import { useState,useRef } from 'react';

function VolumeControl(props){
    const {videoRef} = props
    const barVisible = useSelector(state=>state.mouseState.volumeBarVisible)
    const dispatch = useDispatch()
    const [volume,setVolume] = useState(1)
    const barRef = useRef(null)
    const [backUp,setBackup] = useState(1)
    useEffect(()=>{
        if(videoRef){
            setVolume(videoRef.volume)
        }
    },[videoRef])

    const changeVolume = (event)=>{
        const {x,width} = barRef.current.getBoundingClientRect()
        let v = ((event.clientX - x)/width).toFixed(2)
        if(v<0){v=0}
        if(v>1){v=1}
        setVolume(v)
        videoRef.volume = v
    }
    const handleMouseDown = (event)=>{
        changeVolume(event)
        barRef.current.addEventListener("mousemove",changeVolume)
        barRef.current.addEventListener("mouseup",()=>{
            barRef.current.removeEventListener("mousemove",changeVolume)
        })
        barRef.current.addEventListener("mouseleave",()=>{
            barRef.current.removeEventListener("mousemove",changeVolume)
        })
    }
    const handleIconClick = ()=>{
        if(volume>0){
            setBackup(videoRef.volume)
            console.log(backUp)
            videoRef.volume = 0
            setVolume(0)
        }
        else{
            console.log(backUp)
            videoRef.volume = backUp
            setVolume(backUp)
        }
        
    }

    return(
        <div className="volume-control" onMouseOver = {()=>{dispatch({type:HOVERONVOLUME})}} 
        onMouseLeave={()=>dispatch({type:LEAVEVOLUME})}>
            <button onClick = {handleIconClick} className = {"icon"}>
                            {volume>0&&volume<=0.7&&<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-volume-down-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                                <path d="M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z"/>
                            </svg>}
                            {volume>0.7&&<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-volume-up-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
                                {/* <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/> */}
                                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
                                <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                                </svg>}
                            {volume==0&&<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-volume-mute-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z"/>
  <path fillRule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z"/>
</svg>}
                        </button>
            <div className = "volume-padding" ref = {barRef} style={{width:barVisible?'70px':'0',padding:barVisible?"10% 5px":0}} 
            onMouseDown = {(event)=>{handleMouseDown(event)}}
            >
                <div className = "bar" >
                    <div className = "volume" style = {{width:(volume*100)+"%"}}>
                        <div className = "volume-thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VolumeControl