import React from 'react'
import "./Chat.css"
import Chat_body from './Chat_body'
import Chat_footer from './Chat_footer'
import Chat_header from './Chat_header'
function Chat() {
  return (
    <div className='Chat'>
      <Chat_header/>
      <Chat_body/>
      <Chat_footer/>
    </div>
  )
}

export default Chat