import React,{useState} from 'react'
import {login,getMessage} from '../util/request'
function LoginModal(props){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const changeName = (e)=>{setUsername(e.target.value)}
    const changePwd = (e)=>{setPassword(e.target.value)}
    const submit =()=>{
        login({username,password}).then(res=>{
            console.log(res.data)
            localStorage.setItem("token",res.data)
        })
    }
    const getmsg=()=>{
        getMessage().then(msg=>console.log(msg))
    }
    return ( 
        <div style={{display:'flex'}}>
            <div className="login-box">
                <label>username: </label><input type="text" placeholder="userName" onChange={e=>{changeName(e)}}></input>
            </div>
            <div className="login-box">
                <label>password: </label><input type="password" placeholder="password" onChange={changePwd}></input>
            </div>
            <div className="login-box">
                <button onClick={submit}>login</button><button onClick={getmsg}>getmsg</button>
            </div>
        </div>
    )
}
export default LoginModal