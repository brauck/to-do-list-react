// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

type AppProps = {
  subject: string
}

function App({ subject }: AppProps) {
  return (
    <>
      <header>
        <h1>Hello, {subject}!</h1>
      </header>
      <button type="button">Click me!</button>
    </>
  );
}

export default App;