import { DeleteForeverOutlined } from '@mui/icons-material';
import axios from '../axios';
import React, { useEffect, useState } from 'react'

function Chat_message({ name, date, message, _id, user, fatchMessages }) {
    const nameofuser = user.user
    const [messagetype, setmessagetype] = useState("");
    useEffect(() => {
        if (name === nameofuser) {
            setmessagetype("Chat_reciever")
        } else {
            setmessagetype(" ")
        }
    }, [])

    const deletemenu = () => {
        const element = document.getElementById(_id);
        element.classList.toggle("messageMenu1");
    }
    const deleteMessage = (id) => {
        console.log(id);
        axios.put(`/messages/delete/${id}`, (err) => {
            !err ? console.log("deleted successfully") : console.log(err);
        }).then(() => {
            fatchMessages();
        })

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
            <div className="messageMenu" id={_id} onClick={() => { deleteMessage(_id) }}>
                <DeleteForeverOutlined fontSize={"inherit"} />
            </div>

        </div>
    )
}

export default Chat_message