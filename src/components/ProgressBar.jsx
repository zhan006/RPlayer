import React from 'react'
import { useEffect,useRef } from 'react'
import { useState } from 'react'
const toPercentatgeStr = (f) => (f*100).toString()+'%'
function ProgressBar(props){
    const {videoRef} = props
    const barRef = useRef(null)
    const [barX,setBarX] = useState(0)
    const [width,setWidth] = useState(0)
    const [played,setPlayed] = useState(0)
    const [loaded,setLoaded] = useState(0)
    const [duration,setDuration] = useState(0)

    const trackVideo = (video)=>{
        let duration = isNaN(video.duration)?0:video.duration;
        let current = video.currentTime;
        let loaded = video.buffered.length>1?video.buffered.end(0)-video.buffered.start(0):0
        setPlayed(current)
        setLoaded(loaded)
        setDuration(duration)
    }
    
    const handleJump = (event)=>{
        if(videoRef){
            let progress = (event.clientX - barX)/width
            let current = duration*progress
            videoRef.currentTime = current
            setPlayed(current)
        }


    }
    const jumpOverTime = ()=>{

    }
    useEffect(()=>{
        if(videoRef){
            console.log("timer set")
           var timer = setInterval(()=>trackVideo(videoRef),1000)
        }
        return ()=>clearInterval(timer);
    },[videoRef])

    useEffect(()=>{
        if(barRef){
            const {x,width} = barRef.current.getBoundingClientRect()
            setBarX(x)
            setWidth(width)
        }
    },[barRef])

    return(
        <div className = "barWrap" ref = {barRef} onClick = {(event)=>handleJump(event)}>
            <div className = "loaded" style= {{width:duration>0?toPercentatgeStr(loaded/duration):0}}></div>
            <div className = "played" style= {{width:duration>0?toPercentatgeStr(played/duration):0}}>
                <div className = "bar-thumb"/>
            </div>
        </div>
    )
}
export default ProgressBar