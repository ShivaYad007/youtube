
import './App.css';
import './styles/navbar.css'
import './styles/categories.css'
import './styles/banner.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Demo from './components/Demo';
import A from './components/A';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import B from './components/B';
import Child from './components/Child';
import Parent from './components/Parent';
import AddVideo from './components/AddVideo';
import PNF from './components/PNF';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Home/> */}

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addvideo' element={<AddVideo/>}/>
    <Route path='*' element={<PNF/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
