import React from "react";
import { useState } from "react";

export default function Person({name, lastMessage}) {
    return (    
        <div>
            <h3>{name}</h3>
            <p>{lastMessage}</p>
        </div>
    );
}