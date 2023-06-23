import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Login from './components/Login';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logout from './components/Logout';
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/signin' element={<Signin/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/logout' element={<Logout/>}/>
<Route path='*' element={<Error/>}/>




    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
