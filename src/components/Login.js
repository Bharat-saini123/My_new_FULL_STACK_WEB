import React, { useContext, useState } from 'react';
import { BsFillTelephoneFill ,BsFillPersonFill,BsEnvelopeFill} from "react-icons/bs";
import { BiSolidLockOpenAlt,BiSolidLockAlt,BiSolidTruck } from "react-icons/bi";
import { FcLock,FcPrivacy,FcInTransit,FcCustomerSupport,FcBusinessContact,FcGoogle,FcUnlock } from "react-icons/fc";
import {useNavigate} from "react-router-dom"
import { AppContext } from './UseContext';
const Login = () => {
  const {state,dispatch}=useContext(AppContext);
  const navigate=useNavigate();
  const [loginInput,setLoginInput]=useState({
    email:"",
    password:"",

  })
const changeLogin=(event)=>{

const name=event.target.name;
const value=event.target.value;
setLoginInput({...loginInput,[name]:value})

}
const clickLogin=async(event)=>{
event.preventDefault();
try{const email=loginInput.email;
  const password=loginInput.password;
const response=await fetch("/login",{
  method:"post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({


    email:email,
    password:password,
  })
})
const data=await response.json();
if(response.status===404){
  window.alert("plz enter inputs");
}
if(response.status===420||response.status===408){
  window.alert("Data invalid")
}
if(response.status===200){
  window.alert("sucessfull login")
  dispatch({type:"USER",payload:true})
  console.log(state)
navigate("/")
}


}catch(error){
    console.log(error)
  }



}

  return (
    <div className="main-signin-form">
    <div className="main-sign">
    <form className='form-signin grid-box-sign shadow-pop-tr'>
    <div className="box-1-sign  box-sign-main">
    <figure style={{width:"20rem",height:"20rem",placeSelf:"center",margin:"auto"}}><img src="images/img6.jpg" alt="" style={{width:"100%",height:"100%",display:"block"}}/></figure>
    
    </div>
    <div className="grid-2-sign box-sign-main">
    
   
    <div className="heading-sign"><h1 style={{fontSize:"3rem",fontWeight:"700"}}>sign in</h1></div>
    <div className="form-box">
    
   
    
    <div className="input-2 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
    <label htmlFor="email" style={{fontSize:"2rem",cursor:"pointer"}}><FcGoogle/></label>
    <div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="email" placeholder='Email' id='email' name='email'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={loginInput.email} onChange={changeLogin}/></div>
    </div>
    
   
    
    <div className="input-5 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
    <label htmlFor="password" style={{fontSize:"2rem",cursor:"pointer"}}><FcLock/></label>
    <div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="password" placeholder='Password' id='password' name='password'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={loginInput.password} onChange={changeLogin}/></div>
    </div>
    
    
    
    <button type="button" class="btn btn-primary" style={{margin:"2rem",fontSize:"1.5rem"}} onClick={clickLogin}>Login</button>
    
    
    </div>
    
    </div>
    
    </form>
    
    </div>
    
    
       </div>
  )
}

export default Login