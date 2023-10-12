import React from "react";
import { useState } from "react";

export default function Chat(){
    const [peopleArray, setPeopleArray] = useState([{name: 'jack'}, {name: 'steven'}])
    const htmlArray = peopleArray.map(element => {return <div className="person"><p>{element.name}</p></div>})

    return(
        <div className="chat-container">
            <div className="chat">
                {htmlArray}
            </div>
        </div>
    )
}