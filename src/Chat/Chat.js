import React from 'react'
import ChatBody from './Chat_body'
import ChatFooter from './Chat_footer'
import ChatHeader from './Chat_header'
function Chat({ user, logout }) {
  return (
    <div className='Chat'>
      <ChatHeader user={user} logout={logout} />
      <ChatBody user={user} />
      <ChatFooter user={user} />
    </div>
  )
}

export default Chat