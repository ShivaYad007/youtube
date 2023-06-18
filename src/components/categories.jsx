const Categories = () => {
    let categories =[
        {link:"All"},
        {link:"Sports"},
        {link:"Movies"},
        {link:"Trending"},
        {link:"Food"},
        {link:"Travel"},
        {link:"Music"},
        {link:"Comedy"},
        {link:"Shorts"},
        {link:"Recently Uploaded"},
        {link:"News"},
        {link:"Live"},
        {link:"Cricket"},
        {link:"Songs"},
        {link:"Game"},
        {link:"Watched"},
        {link:"Posts"},
        {link:"New to you"},
    
    ]
    return ( 
        <div className="categories">
             <ul>
            { categories.map((data) =>{
                return <li><a href="msg.html ">{data.link}</a></li>
            })
            }
            </ul>
        </div>
     );
}
 
export default Categories;