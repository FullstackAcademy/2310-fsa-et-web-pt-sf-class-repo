import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset } from "./features/counter/counterSlice"

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <h1>Counter Example</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default App
