import React, {useState,useEffect} from 'react'
import ChatMessage from './ChatMessage'
function LiveChat(props){
    const [chatContent,setChatContent] = useState([])
    useEffect(()=>{
        let ws = new WebSocket('ws://localhost:3001/test')
        ws.onopen = ()=>{console.log('connection established');ws.send("hello")}
        ws.onmessage = (msg)=>{setChatContent(chatContent=>chatContent.concat(msg))}
        return ()=>{ws.close()}
    },[])
    console.log(chatContent)

    return (
        <div style={{position:"absolute"}}>
            <div className="livechat-header">Live Chat</div>
            <div className="chat-content">
                {chatContent.map((value)=><ChatMessage user={value.user} content={value.data} />)}
            </div>
        </div>
    )
}
export default LiveChat