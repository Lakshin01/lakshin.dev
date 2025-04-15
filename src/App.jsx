import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      Let me add some tailwind styling here
      <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
  Click Me!
</button>
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-600">
  Welcome to Your Tailwind Project!
</h1>

             </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-600">
  Welcome to Your Tailwind Project!
</h1>

    </>
  )
}

export default App
