import { Link } from 'react-router-dom';
import YTimg from '../images/YTlogo.png'
import Notify from '../images/notify.png'
import video_icon from '../images/video_icon.png'
import addvideo from '../images/add-video.png'
import '../styles/link.css'
function Navbar() {
    return(
        <div className="navbar">
            <div className="logo"> 
            <img className='ytlogo' height={70} src={YTimg} alt="img not found" />
            </div>
            <div className="searchBar">
                <input type="text" height={30} placeholder='Search'/>
            </div>
            <div className="userOptions">
                <div className="navlinks">
                <Link to='/addvideo' className='link'><img src={addvideo} height={35} alt="img not found" /> </Link>
                </div>
            <img height={30} src={Notify} alt="img not found" />
            <p className="ac">S</p>
           </div>
           
        </div>
    );
    
}
export default Navbar; 