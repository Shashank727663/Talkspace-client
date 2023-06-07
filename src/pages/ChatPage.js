import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function ChatPage() {
    const [chats, setChats] = useState([]); //useState is used to store the data in the state
    const fetcChats = async () => {
        //fetch the data from the backend at 7000/chats 
        const { data } = await axios.get("/chat");
        setChats(data);


    }

    useEffect(()=> {
        fetcChats();
    },[])
  return (
    <div >
    {chats.map(chat => <div key= {chat._id}>{chat.chatName}</div>)}
    </div>
  )
}
