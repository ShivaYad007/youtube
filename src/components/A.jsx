import { Link } from "react-router-dom";
import B from "./B";
import C from "./C";

const A = () => {
    let x={name:"sky",
            age:"25",
            address:{
                city:"hyd",
                state:"ts",
                phno:8545854585
            },
            skills:{
                java:{concepts:["core java","collection","spring mvc"]},
                sql:{concepts:["joins","subquery","rdbms"]},
                web:{concepts:["html5","css3","js6"]}
            }
        }
    return ( 
        <div className="a">
            <center>
                <h3>a page</h3>
                <C data={x}/>
            </center>
        </div>
     );
}
 
export default A;