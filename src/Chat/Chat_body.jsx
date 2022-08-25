import React from 'react'
import Chatmessage from './Chat_message'

function Chat_body() {
  return (
    <div className='Chat_body'>
      <Chatmessage reciever={1}/>
      <Chatmessage/>
      <Chatmessage reciever={1}/>
      <Chatmessage/>
    </div>
  )
}

export default Chat_body