import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import LoginModal from './LoginModal'
function AuthBar(props){
    const {status,userID,userName} = useSelector(state=>state.authState)
    const [profileOpen,setProfileOpen] = useState(false)
    const [loginOpen,setLoginOpen] = useState(false)
    const handleClick = ()=>{
        setLoginOpen(loginOpen=>!loginOpen)
    }
    return (
        <div className="ID-bar">
            <div className="rightButton">
                {status===0 && <button className="icon" onClick={handleClick}>{loginOpen?"<":"Login"}</button>}
                {status===1 && <button className="icon">{userName}</button>}
                {status===1 && profileOpen && <div className="menu-top">
                  <div className="menu-item">Logout</div>
                </div>}
            {loginOpen && <LoginModal/>}

            </div>
        </div>
    )
}
export default AuthBar