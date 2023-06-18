import { Link } from "react-router-dom";
import Child from "./Child";

const Parent = () => {
    let x=10;
    return ( 
        <div className="parent">
            <h2>Parent page</h2>
            <Link to='/child' state={{data:x}}>goto child page</Link>
        </div>
     );
}
 
export default Parent;