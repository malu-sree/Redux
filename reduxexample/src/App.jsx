import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decCount, incCount } from './counterSlice'

function App() {
  const dispatch = useDispatch();
  const countValue = useSelector((state) => state.counter.count);
  
  return (
    <>
      <div>
      <h1>Count: {countValue}</h1>
      </div>
      <div>
       <button onClick={()=>{
              dispatch(incCount())
       }}>Increment</button>
      <button onClick={()=>{
        dispatch(decCount())
      }}>Decrement</button>
       </div>
      {/* <div>
       <h2>Count:{countValue}</h2> 
      </div> */}
     
    </>
  )
}

export default App
