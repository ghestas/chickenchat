import React from "react";
import { useState } from "react";

export default function Messages({chat}) {

    let messagesHtml = chat.chat.map(message => {
        return (
            <p>{message}</p>
        );
    })

    return (
        <div>
            <h2>{chat.name}</h2>
            {messagesHtml}
        </div>
    );
}