import { InsertEmoticon } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import axios from "../axios";

function Chat_footer(user) {

    const [sendingmessage, setsendingmessage]= useState({
        name:user.user,
        timestamp: new Date().toLocaleTimeString(),
        message: "",
        recieved:true
    })


    const send_message = (e) => {
        e.preventDefault();
        axios.post("/messages/new", sendingmessage).then((response)=>{
            console.log("message sended");
        })
    }

    const changedinput = (e)=>{
        setsendingmessage({
            ...sendingmessage, [e.target.name]:e.target.value
        })
    }

    return (
        <div className='Chat_footer'>
            <InsertEmoticon />
            <form action="">
                <input type="text" name="message" onChange={changedinput} value={sendingmessage.message} id="" placeholder='Type a message' />
                <button type="submit" onClick={send_message}>
                    <SendIcon />
                </button>

            </form>
            <MicIcon />
        </div>
    )
}

export default Chat_footer