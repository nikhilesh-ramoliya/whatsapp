import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'

function Chat_header(user) {

    const [seed, setseed] = useState("");
    useEffect(() => {
      setseed(Math.floor(Math.random() * 5000))
    }, [])


    return (
        <div className="Chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="Chat_header_info">
                <h3>{user.user}</h3>
                <p>Last seen</p>
            </div>
            <div className="Chat_header_right">
            <IconButton> 
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
            </div>
        </div>
    )
}

export default Chat_header