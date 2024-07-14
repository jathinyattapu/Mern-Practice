import { useState } from "react";

function Counter()
{
    let [counter,setCounter] = useState(0);

    return <>
    <div className="container mx-auto mt-5 text-center">
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div>
        <button className="btn btn-danger m-2" disabled={counter===0} onClick={()=>setCounter(counter-1)}>-</button> 
        <button className="btn btn-primary m-2" onClick={()=>setCounter(0)}>Reset</button>
        <button className="btn btn-success m-2" disabled={counter===10} onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    </div>
    </>
}
export default Counter;