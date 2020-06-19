import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function ProgressBar(props){
    const {videoRef} = props
    const [played,setPlayed] = useState(0)
    const [loaded,setLoaded] = useState(0)
    const [duration,setDuration] = useState(0)
    const trackVideo = (video)=>{
        let duration = video.duration;
        let current = video.currentTime;
        let loaded = video.buffered.length>1?video.buffered.end(0)-video.buffered.start(0):0
        setPlayed(current)
        setLoaded(loaded)
        setDuration(duration)
    }
    console.log(played,loaded,duration)
    useEffect(()=>{

        if(videoRef){
            console.log("timer set")
           var timer = setInterval(()=>trackVideo(videoRef),1000)
        }
        return ()=>clearInterval(timer)
    },[videoRef])
    
    return(
        <div className = "barWrap">
            <div className = "loaded"></div>
            <div className = "played"></div>
        </div>
    )
}
export default ProgressBar