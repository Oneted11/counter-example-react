import { useState } from "react";

function Counter () {
    //state
  const [counter, setCounter] = useState(0)

 const increment = () =>{

    setCounter(prevCounter => prevCounter + 1)
 }
 return(
    <div>
        <h1>Value:{counter}</h1> 
        <button onClick={increment}>Increment</button>
    </div>
 )
}
export default Counter