import React, { useState } from "react";

export default function Login(){
    const [logData, setLogData] = useState({
        user: "",
        pass: ""
    })

    function handleChangeLog(event) {
        const {name, value} = event.target
        setLogData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmitLog(event) {
        event.preventDefault()
        console.log(logData)
    }

    const [createData, setCreateData] = useState({
        user: "",
        pass: ""
    })

    function handleChangeCreate(event) {
        const {name, value} = event.target
        setCreateData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmitCreate(event) {
        event.preventDefault()
        console.log(createData)
    }

    return(
        <div className="login">
            
            <form onSubmit={handleSubmitLog}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="username"
                    onChange={handleChangeLog}
                    name="user"
                    value={logData.user}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={handleChangeLog}
                    name="pass"
                    value={logData.pass}
                />
                <button>Submit</button>
            </form>

            <form onSubmit={handleSubmitCreate}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="username"
                    onChange={handleChangeCreate}
                    name="user"
                    value={createData.user}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={handleChangeCreate}
                    name="pass"
                    value={createData.pass}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}