import React from "react";
import { useState } from "react";
import Person from "./person.jsx";
import Messages from "./messages.jsx";

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack', chat: [{text: 'yooo'}]}, {name: 'steven', chat: [{text: 'hiiiii'}]}]) //this'll be all the chats the user is in
    const [selectedChat, setSelectedChat] = useState(1) //a chat will have a distinct name not chosen by anyone else

    const [newMessage, setNewMessage] = useState('')

    const selectChat = (event) => {
        let id = event.target.className !== 'person' ? event.target.parentNode.id : event.target.id

        for (let i = 0; i < peopleArray.length; i++) {
            if(peopleArray[i].name === id) {
                setSelectedChat(i)
            }
        }
    }

    return(
        <div className="chat-container">
            <div className="chat">
                <div className="people-list">
                    {peopleArray.map(element => {return <div onClick={selectChat}><Person name={element.name} lastMessage={element.chat[element.chat.length - 1].text}/></div>})}
                </div>
                <div className="message-window-container">
                    <Messages chat={peopleArray[selectedChat]} />
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setPeopleArray(
                            () => {
                                let newArr = []
                                for (let i = 0; i < peopleArray.length; i++) {
                                    if (i === selectedChat) {
                                        newArr.push({name: peopleArray[i].name, chat: peopleArray[i].chat.concat({text: newMessage})})
                                    }
                                    else {
                                        newArr.push(peopleArray[i])
                                    }
                                }
                                return newArr;
                            }
                        )
                    }}>
                        <input type='text' onChange={(e) => {
                            setNewMessage(e.target.value)
                        }} value={newMessage}/>
                        <button>Send</button>
                    </form>

                </div>
            </div>
        </div>
    )
}