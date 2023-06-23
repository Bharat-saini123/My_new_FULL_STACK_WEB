import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { AppContext } from './UseContext';

const Navbar = () => {
  const {state,dispatch}=useContext(AppContext);

  const Dost=()=>{

    if(state){
     return <> <li className="nav-item">
      <NavLink to={"/"} className={"navlink"}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/about"} className={"navlink"}>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/contact"} className={"navlink"}>Contact</NavLink>
      </li>
     
      <li className="nav-item">
      <NavLink to={"/logout"} className={"navlink"}>Logout</NavLink>
      </li>
      </>
    }
    else{
      return <> 
      <li className="nav-item">
      <NavLink to={"/"} className={"navlink"}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/about"} className={"navlink"}>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/contact"} className={"navlink"}>Contact</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/signin"} className={"navlink"}>Signin</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to={"/login"} className={"navlink"}>Login</NavLink>
      </li>
     
      
      </>
    }

  }
 
  return (
   <div className="main-navbar">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{marginLeft:"5rem"}}>
<img src="https://www.freepnglogos.com/uploads/bmw-m-logo-png-4.png" width="200" alt="bmw m logo png" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0"  style={{marginRight:"5rem",gap:"1rem"}}>
     
      
   <Dost/>
      </ul>
   
    </div>
  </div>
</nav>


   </div>
  )
}

export default Navbar