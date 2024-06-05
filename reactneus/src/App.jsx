import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Component1 from './component1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to React Vite Project</h1>
        <NewComponent />
      </div>
    </>
  )
}

export default App
