import { ChatBubble, DonutLargeOutlined, MoreVertOutlined, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function Sidebar_search() {
    return (
        <div className="sidebar_searchContainer">
            <SearchOutlined className='sidebar_searchContainer_icon'/>
            <input type="text" className='sidebar_searchContainer_text' name="" id="" placeholder='Search or start new chat' />
        </div>

    )
}

export default Sidebar_search