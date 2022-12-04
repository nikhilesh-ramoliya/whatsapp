import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'

function Chat_header({ user, logout }) {

    const [seed, setseed] = useState("");
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])

    function togglesettingDrawer() {
        let drawer = document.getElementById('settings');
        if (drawer.classList.contains('logoutButton')) {
            drawer.classList.remove('logoutButton');
            drawer.classList.add('logoutButtonShown');
        } else {
            drawer.classList.add('logoutButton');
            drawer.classList.remove('logoutButtonShown');
        }

    }
    console.log(user)
    return (
        <div className="Chat_header">
            <Avatar className='avatar' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="Chat_header_info">
                <h3>{user}</h3>
            </div>
            <div className="Chat_header_right">
                {/* <IconButton  >
                    <SearchOutlined className='icons' fontSize={"inherit"} />
                </IconButton>

                <IconButton >
                    <AttachFile className='icons' fontSize={"inherit"} />
                </IconButton> */}
                <IconButton onClick={togglesettingDrawer}>
                    <MoreVert className='icons' fontSize={"inherit"} />
                </IconButton>
                <button className="logoutButton icons" id='settings' onClick={logout}>logout</button>
            </div>
        </div>
    )
}

export default Chat_header