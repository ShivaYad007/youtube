const Demo1 = (props) => {
    let a=props.params
    return ( 
        <div className="demo1">
            {
                a.map((x)=>{
                    return (<h2 key={x.id}>{x.id} {  }{x.name}</h2>)
                    
                })
            }
        </div>
     );
}
 
export default Demo1;