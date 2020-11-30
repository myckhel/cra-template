import React from 'react'
import '../../App.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link
          to='/dashboard'
          className="App-link"
        >
          Dashboard
        </Link>
      </header>
    </div>
  );
}

export default App;
