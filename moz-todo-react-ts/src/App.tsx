import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
      </header>
      <button type="button">Click me!</button>
    </>
  );
}

export default App;