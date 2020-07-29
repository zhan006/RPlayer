import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import * as actionType from '../redux/actionType'
function Setting(props){
    const [settingVisible,setVisible] = useState(false)
    const visibility = useSelector(state=>state.mouseState.settingVisible)
    const dispatch = useDispatch()
    const handleClick =()=>{
        console.log(visibility)
        dispatch({type:actionType.CLICKSETTING})
        // setVisible(!settingVisible)
    }
    
    return (
        <>  
            {visibility && <div className="menu">
                <div className="menu-item">Speed</div>
                <div className ="menu-item">Live Chat</div>
                <div className ="menu-item">Danmaku</div>
                <div className ="menu-item">Opacity for Danmaku</div>
            </div>}
            <button className = {"icon"} onClick={()=>{handleClick()}}>
                <svg  width="1.3em" height="1.3em" viewBox="0 0 16 16" className={"bi bi-gear-fill setting"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                </svg>
            </button>
        </>   
    )
}
export default Setting