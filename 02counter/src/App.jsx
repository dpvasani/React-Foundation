import { useState } from 'react'
import './App.css'

function App() {
    let [counter,setCounter] = useState(15)
//   let counter = 5;
  const AddValue = ()=>{
    counter += 1;
    setCounter(counter)
    console.log(counter);
  }

  const Sub = ()=>{
    counter -= 1;
    setCounter(counter)
    console.log(counter);
  }
  
  return (
    <>
      <h1>Chai Or React | Counter</h1>
      <h2>Counter Default Value : {counter}</h2>
      <button
      onClick = {AddValue}
      >Add Value</button>
      <br />
      <button
      onClick={Sub}
      >Subtract Value</button>
    </>
  )
}

export default App
