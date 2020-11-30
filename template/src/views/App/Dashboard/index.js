import React from 'react'
import '../../../App.css';
import logo from '../../../logo.svg';
import { useLogout } from '../../../redux/hooks';
import {Notify} from '../../../func';

function App() {
  const logout = useLogout()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Logged In!
        </p>
        <button
          onClick={() => {
            logout()
            Notify({
              type: 'warning',
              title: 'Huuuuuuh!',
              msg: 'Logged Out!'
            })
          }}
          className="App-link"
        >
          Logout
        </button>
      </header>
    </div>
  );
}

export default App;
