import React from 'react'
import SidebarChat from './Sidebar_chat'
import SidebarHeader from './Sidebar_header'
import SidebarSearch from './Sidebar_search'

function Sidebar() {
  return (
    <div className='sidebar'>
       <SidebarHeader/>
        <SidebarSearch/>
        <div className="sidebar_chats">
          <SidebarChat addNewChat={1}/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar