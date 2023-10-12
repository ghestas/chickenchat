import React, { useState, useEffect } from "react";
import { getDoc, doc, setDoc} from "firebase/firestore"
import { platesCollection, db } from '../firebase';


export default function Login(){
    const docRef = doc(db, "auth", "logins")

    const [accounts, setAccounts] = useState([])

    //firebase

    useEffect(() => {
        displayData()
    }, [])

    async function displayData(){
        var accountsArr = await getDoc(docRef);
        accountsArr = accountsArr.data()
        accountsArr = accountsArr.newArr
        console.log(accountsArr)
    }

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
        signIn()
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
        createAccount()
    }


    //firebase

    //add account
    async function createAccount(){
        var arr = await getDoc(docRef);
        var vin = arr.data()
        var newArr = vin.newArr
        newArr.push(createData)
        await setDoc(docRef, {newArr})
    }


    //sign in
    async function signIn(){
        var accountsArr = await getDoc(docRef);
        accountsArr = accountsArr.data()
        accountsArr = accountsArr.newArr
        for (let i = 0; i < accountsArr.length; i++) {
            const account = accountsArr[i];
            if (account.user === logData.user && account.pass === logData.pass){
                console.log("sucsessfull login")
            }
        }
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
                <h2>Sign Up</h2>
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