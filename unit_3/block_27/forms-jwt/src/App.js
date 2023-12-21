import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
function App() {
  const [token, setToken] = useState('')

  return (
    <>
    {token}
      <SignUp setToken={setToken}/>
      <Login token={token}/>
    </>
  );
}

export default App;
