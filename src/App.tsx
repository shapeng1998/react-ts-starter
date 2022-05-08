import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex flex-col items-center">
      <p>{count}</p>
      <button className="btn" onClick={() => setCount(c => c + 1)}>
        add
      </button>
    </main>
  )
}

export default App
