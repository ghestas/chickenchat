import React from "react";
import { useState } from "react";
import Person from "./person.jsx";
import Messages from "./messages.jsx";

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack'}, {name: 'steven'}])
    const [selectedChat, setSelectedChat] = useState('jack')

    const selectChat = (event) => {
        if (event.target.className !== 'person') {
            setSelectedChat(event.target.parentNode.id)
        }
        else {
            setSelectedChat(event.target.id)
        }
    }

    return(
        <div className="chat-container">
            <div className="chat">
                <div className="people-list">
                    {peopleArray.map(element => {return <div onClick={selectChat}><Person name={element.name} lastMessage={'UHHH'}/></div>})}
                </div>
                <div className="message-window-container">
                    <Messages name={selectedChat} />
                </div>
            </div>
        </div>
    )
}