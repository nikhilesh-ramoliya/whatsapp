import { DeleteForeverOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

function Chat_message({ reciever, name, date, message, _id,user }) {
    const nameofuser =user.user
    const [messagetype, setmessagetype] = useState("");
    useEffect(() => {
        if (name===nameofuser) {
            setmessagetype("Chat_reciever")
        } else {
            setmessagetype(" ")
        }
        // eslint-disable-next-line
    }, [])

    const deletemenu = () => {
        const element = document.getElementById(_id);
        element.classList.toggle("messageMenu1");
    }
    return (
        <div
            onClick={deletemenu}
            // eslint-disable-next-line
            className={'Chat_message' + " " + messagetype}>
            {message}
            <span className="Chat_name">
                {name}
            </span>
            <span className='time_span'>{date}</span>
            <div className="messageMenu" id={_id}>
                <DeleteForeverOutlined />
            </div>

        </div>
    )
}

export default Chat_message