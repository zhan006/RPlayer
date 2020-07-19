import React,{ useEffect,useRef,useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {PLAY,PAUSE} from '../redux/actionType'
const toPercentatgeStr = (f) => (f*100).toString()+'%'
function ProgressBar(props){
    const {videoRef} = props
    const barRef = useRef(null)
    const [played,setPlayed] = useState(0)
    const [loaded,setLoaded] = useState(0)
    const [duration,setDuration] = useState(0)
    const [dragging,setDragging] = useState(false)
    const [playing,setPlaying] = useState(null)
    const dispatch = useDispatch()
    const isplaying = useSelector(state => state.togglePlay.play)
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
            const {x,width} = barRef.current.getBoundingClientRect()
            let progress = (event.clientX - x)/width
            let current = duration*progress
            videoRef.currentTime = current
            setPlayed(current)
        }
    }
    const handleDown = (event)=>{
        if(isplaying){setPlaying(true)}
        dispatch({type:PAUSE})
        window.addEventListener('mousemove',handleJump)
        window.addEventListener('mouseup',()=>window.removeEventListener('mousemove',handleJump))
        if(isplaying)dispatch({type:PLAY})
    }

    const handleUp = (event)=>{
        if(dragging){
            window.removeEventListener("mousemove",handleJump)
            console.log('removed')
            setDragging(false)
            if(playing)dispatch({type:PLAY})
        }
    }
 

    useEffect(()=>{
        if(videoRef){
            console.log("timer set")
           var timer = setInterval(()=>trackVideo(videoRef),1000)
        }
        return ()=>clearInterval(timer);
    },[videoRef])


    return(
        <div className = "barWrap" ref = {barRef} onClick = {(event)=>handleJump(event)} onMouseDown = {(event)=>handleDown(event)}>
            <div className = "barMask" />
            <div className = "loaded" style= {{width:duration>0?toPercentatgeStr(loaded/duration):0}}></div>
            <div className = "played" style= {{width:duration>0?toPercentatgeStr(played/duration):0}}>
                <div className = "bar-thumb" />
            </div>
        </div>
    )
}
export default ProgressBar