import './App.css';
import React, { useState } from 'react'

import Chat from './components/chat';
import Login from './components/Login';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      {loggedIn ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
