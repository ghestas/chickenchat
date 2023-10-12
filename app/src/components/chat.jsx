import React from "react";
import { useState } from "react";
import Person from "./person.jsx";

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack'}, {name: 'steven'}])

    return(
        <div className="chat-container">
            <div className="chat">
                <div className="people-list">
                    {peopleArray.map(element => {return <Person name={element.name} lastMessage={'UHHH'} />})}
                </div>
                <div className="message-window">
                    <p>message</p>
                </div>
            </div>
        </div>
    )
}