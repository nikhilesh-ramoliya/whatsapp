import React from 'react'
import "./Chat.css"
import ChatBody from './Chat_body'
import ChatFooter from './Chat_footer'
import ChatHeader from './Chat_header'
function Chat({user}) {
  return (
    <div className='Chat'>
      <ChatHeader user={user}/>
      <ChatBody  user={user}/>
      <ChatFooter user={user}/>
    </div>
  )
}

export default Chat