import { useLocation } from "react-router-dom";

const B = (props) => {
    let loc=useLocation()
    let {y}=loc.state.data
   


    return ( 
        <div className="b">
            <center>
                <h3>b page</h3>
            <h3>{y.name}</h3>
            <h3>{y.age}</h3>
            {/* {
                adr.map((x)=>{
                    return(
                        <div className="addrress">
                            <h3>{x.city}</h3>
                            <h3>{x.phno}</h3>
                            <h3>{x.state}</h3>
                        </div>
                    
                    )
                })
            } */}
            {/* {
                skills.map((x)=>{
                    return(
                        <div className="skills">
                            <h3>{x}</h3>
                        </div>
                    )
                })
            } */}

            
            </center>
        </div>
     );
}
 
export default B;