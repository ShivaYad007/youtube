import '../styles/videos.css'
import '../styles/shorts.css'
import { useEffect, useState } from "react";
const Videos = () => {
    let [video,setVideo]=useState([])
    let [shorts,setShorts]=useState([])

    useEffect(()=>{
        let fetchVideo = async () => {
            let response = await fetch('http://localhost:4000/videos')
            let v = await response.json()
            setVideo(v)
        }
        fetchVideo()

        let fetchShorts = async () => {
            let response = await fetch('http://localhost:4000/shorts')
            let s = await response.json()
            setShorts(s)
        }
        fetchShorts()
    },[])
    
    let removeVideo=(id,name)=>{
     fetch(`http://localhost:4000/videos/${id}`,{
        method:'DELETE'
    })
    alert( `${name} video got removed`)
    }


    return (
        <div className="videos">
            <h1>featured video</h1>
            <div className="videodata">
            {
                video.map((data)=>{
                    
                    return (
                        <div className="video">
                             <img src={data.thumbnail}  alt=""/>
                            <div className="vdata">
                            <h3>{data.title}</h3>
                            <p>{data.channel}</p>
                            <p className='views'>{data.views}</p>
                            <a onClick={()=>removeVideo(data.id,data.channel)}>remove</a>
                            </div>
                        </div>
                    )
                })
            }
            </div>

              <div className="shorts">
              <h1>Shorts</h1>
              <div className="shortsdata">
                {
                    shorts.map((data)=>{
                        return(
                            <div className="short">
                                <div className="sdata">
                                <img src={data.thumbnail} alt="" />
                                    <h3>{data.title}</h3>
                                    <p className='views'>{data.views}</p>
                                    </div>
                            </div>
                        )
                    })
                }
              </div>
        </div>
        </div>
      );
}
export default Videos;
