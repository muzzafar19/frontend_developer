import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/reducer"

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App
