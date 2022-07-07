import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LogInRegister from './components/LogInRegister'
import MainPage from './components/MainPage'
import SessionContext from './contexts/SessionContext'
import { Session } from 'inspector';

function App() {
  const [session, setSession] = useState<any>(null)

  return (
    <div className="App">
      <SessionContext.Provider value={ { session, setSession } }>
        {!session ? <LogInRegister /> : null}
        {session ? <MainPage/> : null}
      </SessionContext.Provider>
    </div>
  );
}

export default App;
