import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Sidebar_chat({addNewChat}) {
  const [seed, setseed] = useState("");
  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000))
  }, [])


  const createChat = () =>{
    const roomName = prompt("Please enter name for chat");
    if(roomName){
      //!do some clave databes.. stuff
    }
  }

  return !addNewChat ? (
    <div className='sidebar_chat'>
      <Avatar className='chat_avatar' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar_chat_info">
        <h2>room name</h2>
        <p>last message...</p>
      </div>
    </div>
  ):(
    <div
    onClick={createChat}
    className="sidebar_chat">
      <h2>Add new chat</h2>
    </div>
  )
}

export default Sidebar_chat