import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {


  return (
    <>
     <h1>Amit</h1>
     <p>lorem</p>
     <nav>
      <Link to='/'></Link>
      <Link to='/profile'></Link>
     </nav>
       <Routes>
        <Route path='/' Component={Home}/>n
                <Route path='/profile' Component={Profile}/>

       </Routes>
    </>
  )
}

export default App
