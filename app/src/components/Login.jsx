import React, { useState } from "react";

export default function Login(){
    const [logData, setLogData] = useState({
        user: "",
        pass: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setLogData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(logData)
    }

    return(
        <div className="login">
            
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                    name="user"
                    value={logData.user}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={handleChange}
                    name="pass"
                    value={logData.pass}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}