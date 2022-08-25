import React, { useEffect, useState } from 'react'

function Chat_message({ reciever }) {
    const [messagetype, setmessagetype] = useState("");
    console.log(messagetype);
    useEffect(() => {
        if (reciever) {
            setmessagetype("Chat_reciever")
        } else {
            setmessagetype(" ")
        }
    }, [])
    return (
        <div className={'Chat_message' + " " + messagetype}>
            HAY GUYS
            <span className="Chat_name">
                SUNNY SHARMA
            </span>
            <span className='time_span'>3:32 PM</span>

        </div>
    )
}

export default Chat_message