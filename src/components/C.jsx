const C = (props) => {
    let {data}=props;
    console.log( data.skills.java.concepts)
    return ( 
        <div className="c">
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
            <h4>{data.address.city}</h4>
           
            {
                data.skills.java.concepts.map((x)=>{
                    return(
                        <div className="cc">
                            <h2 key={x}>{x}</h2>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default C;