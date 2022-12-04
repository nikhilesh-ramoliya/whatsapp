import React, { useState } from 'react'
import Chatmessage from './Chat_message'
import axios from '../axios';
import { useEffect } from 'react';
import Pusher from 'pusher-js';

function Chat_body(user) {

  //!
  const [messages, setMessages] = useState([]);

  const fatchMessages = async () => {
    const response = await axios.get("/messages/sync")
    setMessages(response.data)
  }


  useEffect(() => {
    fatchMessages()
    setTimeout(() => {
      var elem = document.getElementById('Chat_body');
      elem.scrollTop = elem.scrollHeight;
    }, 500)
  }, [])
  // console.log(messages);


  useEffect(() => {
    //! -------------pusher------------------
    var pusher = new Pusher('68be50924cd2fba8a00f', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('message');


    channel.bind('inserted', function (data) {
      setMessages([...messages, data])
      setTimeout(() => {
        var elem = document.getElementById('Chat_body');
        elem.scrollTop = elem.scrollHeight;
      }, 50)
    })
    channel.bind("deleted", (data) => {
      console.log(
        "deleted document"
      );
    })
    channel.bind('invalidate', function (data) {
      console.log("invalidate");
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

    //! -------------pusher------------------
  }, [messages])
  //!

  return (
    <div className='Chat_body' id='Chat_body'>
      {
        messages.map((message) => {
          return (
            <Chatmessage
              fatchMessages={fatchMessages}
              reciever={message.recieved}
              key={message._id}
              _id={message._id}
              name={message.name}
              message={message.message}
              date={message.timestamp}
              user={user}
            />
          )
        })
      }
    </div>
  )
}

export default Chat_body