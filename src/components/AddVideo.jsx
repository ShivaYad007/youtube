import '../styles/addvideo.css'
import img from '../images/yt-form-img.png'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const AddVideo = () => {
        let usenav=useNavigate()
        let thumbnail=useRef(null)
        let title=useRef(null)
        let channel=useRef(null)
        let views=useRef(null)



    let submitHandler=(e)=>{
        e.preventDefault()
        let data={
            thumbnail:thumbnail.current.value,
            title: title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch("http://localhost:4000/videos",{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify(data)
        })
        alert('1 video added')
        usenav('/')
    }



    return ( 
        <div className="add-video" >
        <div className="img-div">
        <img src={img} alt="" />
        </div>
            <div className="form-div">
            <form action="" onSubmit={submitHandler}>
                <div>
                    <h1>Add Videos</h1>
                </div>
                <div>
                    <input className='inpt' ref={thumbnail} type="url" placeholder="thumbnail url"/>
                </div>
                <div>
                    <input className='inpt' ref={title} type="text" placeholder="title"/>
                </div>
                <div>
                    <input className='inpt' ref={channel} type="text" placeholder="channel name"/>
                </div>
                <div>
                    <input className='inpt' ref={views} type="text" placeholder="views"/>
                </div>
                <div className="add-btn">
                    <input className='inpt' type="submit" value='add'/>
                </div>
                <div>
                <Link className='go-to-home' to='/'>Go to Home</Link>
                </div>
               
            </form>
        </div>

        </div>
     );
}
 
export default AddVideo;