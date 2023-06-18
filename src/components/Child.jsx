import { useLocation } from "react-router-dom";

const Child = (props) => {
    const location=useLocation()
    const y=location.state.data

    return ( 
        <div className="child">
            <h2>Child page</h2>
            <h2>{y}</h2>
        </div>
     );
}
 
export default Child;