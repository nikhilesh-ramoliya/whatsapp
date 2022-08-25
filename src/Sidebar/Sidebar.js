import { ChatBubble, DonutLargeOutlined, MoreVertOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import Sidebar_chat from './Sidebar_chat'
import Sidebar_header from './Sidebar_header'
import Sidebar_search from './Sidebar_search'

function Sidebar() {
  return (
    <div className='sidebar'>
       <Sidebar_header/>
        <Sidebar_search/>
        <div className="sidebar_chats">
          <Sidebar_chat addNewChat={1}/>
          <Sidebar_chat/>
          <Sidebar_chat/>
          <Sidebar_chat/>
          <Sidebar_chat/>
        </div>
    </div>
  )
}

export default Sidebar