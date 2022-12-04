import { InsertEmoticon } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import axios from "../axios";

function Chat_footer(user) {

    const [sendingmessage, setsendingmessage] = useState({
        name: user.user,
        timestamp: new Date().toLocaleTimeString(),
        message: "",
        recieved: true
    })


    const send_message = (e) => {
        e.preventDefault();
        if (sendingmessage.message !== "") {
            axios.post("/messages/new", sendingmessage).then((response) => {
                console.log("message sended");
                setsendingmessage({ ...sendingmessage, message: "" })
            }).then(() => {
                var elem = document.getElementById('Chat_body');
                elem.scrollTop = elem.scrollHeight;
            })
        } else {
            document.getElementById("inputmessage").placeholder = "Please type a message";
        }
    }

    const changedinput = (e) => {
        setsendingmessage({
            ...sendingmessage, [e.target.name]: e.target.value
        })
    }

    function addEmoji(emoji) {
        setsendingmessage({
            ...sendingmessage, message: sendingmessage.message += emoji
        })
        console.log(sendingmessage);
    }




    function toggleEmojiDrawer() {
        let drawer = document.getElementById('drawer');
        if (drawer.classList.contains('hidden')) {
            console.log("shown");
            drawer.classList.remove('hidden');
        } else {
            console.log("hidden");
            drawer.classList.add('hidden');
        }

    }

    return (
        <div className='Chat_footer'>
            <InsertEmoticon onClick={() => {
                toggleEmojiDrawer();
                setTimeout(toggleEmojiDrawer, 2000)
            }} />
            <div id="drawer" className="emoji-drawer ">
                <div className="emoji" onClick={() => { addEmoji("😀") }}>😀</div>
                <div className="emoji" onClick={() => { addEmoji("🤣") }}>🤣</div>
                <div className="emoji" onClick={() => { addEmoji("😄") }}>😄</div>
                <div className="emoji" onClick={() => { addEmoji("😁") }}>😁</div>
                <div className="emoji" onClick={() => { addEmoji("😆") }}>😆</div>
            </div>
            <form action="">
                <input type="text" id="input" name="message" onChange={changedinput} value={sendingmessage.message} id="inputmessage" placeholder='Type a message' />
                <button type="submit" onClick={send_message}>
                    <SendIcon fontSize={"inherit"} />
                </button>
            </form>
            <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerPolicy="origin"></script>

            {/* <MicIcon />? */}
        </div>
    )
}

export default Chat_footer