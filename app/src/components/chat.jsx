import React, { useEffect } from "react";
import { useState } from "react";
import Person from "./person.jsx";
import Messages from "./messages.jsx";
import { getDoc, doc, setDoc} from "firebase/firestore"
import { db } from '../firebase';

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack', chat: ['hi','hi','this was my last message!', 'I CHANGED MY LAST MESSAGE!']}, {name: 'steven', chat: ['hjkhjkh', 'jhh', 'this was also my last message!']}]) //this'll be all the chats the user is in
    const [selectedChat, setSelectedChat] = useState(1) //a chat will have a distinct name not chosen by anyone else

    const docRef = doc(db, "data", "chat")

    const selectChat = (event) => {
        let id = event.target.className !== 'person' ? event.target.parentNode.id : event.target.id

        for (let i = 0; i < peopleArray.length; i++) {
            if(peopleArray[i].name === id) {
                setSelectedChat(i)
            }
        }
    }

    useEffect(() => {
        displayData()
    }, [])

    async function displayData(){
        var accountsArr = await getDoc(docRef);
        accountsArr = accountsArr.data()
        accountsArr = accountsArr.msgs
        console.log(accountsArr)
    }

    //'msg' should be an object with time, user, content
    async function saveMsg(msg){
        var arr = await getDoc(docRef);
        var vin = arr.data()
        var newArr = vin.newArr
        newArr.push(msg)
        await setDoc(docRef, {newArr})
    }

    return(
        <div className="chat-container">
            <div className="chat">
                <div className="people-list">
                    {peopleArray.map(element => {return <div onClick={selectChat}><Person name={element.name} lastMessage={element.chat[element.chat.length - 1]}/></div>})}
                </div>
                <div className="message-window-container">
                    <Messages chat={peopleArray[selectedChat]} />
                </div>
            </div>
        </div>
    )
}