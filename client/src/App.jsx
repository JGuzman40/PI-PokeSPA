import { useState } from 'react'
import pokemonLogo from './assets/pokemon-23.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
          <img src={pokemonLogo} className="logo" alt="poke logo" />
      </div>
      <h1>Poke SPA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Somos Henry
        </p>
      </div>
      <p className="read-the-docs">
        Jesu Guzman
      </p>
    </>
  )
}

export default App
