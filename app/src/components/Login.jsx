import React, { useState, useEffect } from "react";
import { getDoc, doc, setDoc} from "firebase/firestore"
import { platesCollection, db } from '../firebase';


export default function Login(){
    const docRef = doc(db, "auth", "logins")

    const [accounts, setAccounts] = useState([])

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
        syncData()
    }

    function handleSubmitLog(event) {
        event.preventDefault()
        console.log(logData)
        signIn()
    }

    const [createData, setCreateData] = useState({
        user: "",
        pass: ""
    })

    //firebase

    useEffect(() => {
        readAndSetFireBaseData()
        syncData()
    }, [])


    async function readAndSetFireBaseData(){
        const dataRef = (await getDoc(docRef)); 
        const dataVin = dataRef.data();
        // setDark(dataVin.dark)
        console.log(dataVin)
    }

    function handleChangeCreate(event) {
        const {name, value} = event.target
        setCreateData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        syncData()
    }

    function handleSubmitCreate(event) {
        event.preventDefault()
        console.log(createData)
        createAccount()
    }


    //add account
    function createAccount(){
        var newArr = accounts;
        newArr.push(createData)
        setAccounts(newArr);
        console.log(accounts)
        syncData()
    }

    function signIn(){
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            console.log()
            if (account.user === logData.user && account.pass === logData.pass){
                console.log("sucsessfull login")
            }
        }
    }

    async function syncData(){
        await setDoc(docRef, {accounts})
        const data = await getDoc(docRef)
        console.log("sync")
        console.log(data.data())   
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