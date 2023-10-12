import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Chat from './components/chat'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  function Login(){
    setLoggedIn(true)
  }

  return (
    <div className='app'>
      {loggedIn === true ? <Chat /> : <Login log={Login}/>}
    </div>
  );
}

export default App;
