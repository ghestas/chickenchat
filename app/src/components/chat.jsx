import React from "react";
import { useState } from "react";
import Person from "./person.jsx";

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack'}, {name: 'steven'}])
    const htmlArray = peopleArray.map(element => {return <div className="person"><Person name={element.name} lastMessage={'UHHH'} /></div>})

    return(
        <div className="chat-container">
            <div className="chat">
                {htmlArray}
            </div>
        </div>
    )
}