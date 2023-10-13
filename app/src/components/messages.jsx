import React from "react";
import { useState } from "react";

export default function Messages({chat}) {

    let messagesHtml = chat.chat.map(message => {
        return (
            <p>{message.text}</p>
        );
    })

    return (
        <div className="message-window">
            <h2>{chat.name}</h2>
            {messagesHtml}
        </div>
    );
}