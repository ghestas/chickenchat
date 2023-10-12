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
      {/* THIS CONTITIONAL RENDERING IS NOT WORKING */}
      <Chat />
      <Login log={Login}/>
    </div>
  );
}

export default App;
