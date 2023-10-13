import { useState } from 'react';
import './App.css';
import Login from './components/Login.jsx';
import Chat from './components/chat'

function App() {
  const [loggedIn, setLoggedIn] = useState(1)
  const [user, setUser] = useState('')

  function Login(){
    setLoggedIn(true)
  }

  return (
    <div className='app'>
      {/* {loggedIn === 0 ? <Chat /> : <Login log={Login}/>} */}
      {/* <Login /> */}
      <Chat />
    </div>
  );
}

export default App;
