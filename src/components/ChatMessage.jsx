import React, { useRef } from 'react'
function ChatMessage(props){
    const {user,content} = props
    return (
    <div>{user} : {content}</div>
    )
}
export default ChatMessage