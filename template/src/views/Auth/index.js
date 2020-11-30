import React from 'react';
import '../../App.css';
import logo from '../../logo.svg';
import {setToken} from '../../redux/actions';
import {Notify} from '../../func';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch()
  const login = () => {
    dispatch(setToken('true'))
    Notify({
      type: 'success',
      title: 'Yaaaaaay!',
      msg: 'Logged In!'
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login
        </p>
        <button
          onClick={() => login()}
          className="App-link"
        >
          Login
        </button>
        <Link
          to='/'
          className="App-link"
        >
          Home
        </Link>
      </header>
    </div>
  )
}
export default Auth
