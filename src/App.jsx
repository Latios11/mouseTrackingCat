import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="hero">
      <h1>Say hello to </h1>
      <h2>Mr Cat</h2>
      <p>He watches you wherever you go.</p>
    </div>
    </>
  )
}

export default App
