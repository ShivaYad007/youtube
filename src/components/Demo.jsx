import { useState } from "react";
import Demo1 from "./Demo1";

const Demo = () => {
    let [data,setData]=useState([])
    let fetchingData=(e)=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp=>resp.json())
    .then(res=>{console.log(res)
    setData(res)})
    .catch(err=>console.log(err))
    }
      return ( 
        <div className="demo">
            <button onClick={fetchingData}>users</button>
            <Demo1 params={data}/>
        </div>
     );
}
 
export default Demo;