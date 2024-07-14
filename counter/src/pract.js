import { useState } from "react";

function Pract(){
    
    var [change,setChange] = useState("");


    return <>
    <div className="container m-5 text-center">
        <input type="text" onChange={(e)=>setChange(e.target.value)} value={change}/>
        <p className="m-2">{change}</p>
    </div>
    </>

}
export default Pract;