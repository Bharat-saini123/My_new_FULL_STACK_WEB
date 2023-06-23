import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { FcLock,FcPrivacy,FcInTransit,FcCustomerSupport,FcBusinessContact,FcGoogle,FcUnlock } from "react-icons/fc";



const Signin = () => {
  const navigate=useNavigate()
  const [userInput,setUserInput]=useState({
    username:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    confirmpassword:"",
  })

  const changeInput=(e)=>{
const name=e.target.name;
const value=e.target.value
setUserInput({...userInput,[name]:value})


  }

  const myRegister=async(event)=>{
event.preventDefault();

try{
const username=userInput.username;
const email=userInput.email;
const phone=userInput.phone;
const work=userInput.work;
const password=userInput.password;
const confirmpassword=userInput.confirmpassword;


const response=await fetch("/register",{
method:"post",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({
  username:username,
  email:email,
  phone:phone,
  work:work,
  password:password,
  confirmpassword:confirmpassword
})



})


const data=await response.json();
if(response.status===404){
  window.alert("plz enter right input")
}
if(response.status===408){
  window.alert("your email is already exit")
}
if(response.status===412){
  window.alert("your password not match confirm password")
}
if(response.status===200){
  window.alert("you are sucessfully register");
  navigate("/login")
  setUserInput({
    username:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    confirmpassword:"",
  })
}


}catch(error){
  console.log(error)
}

  }



  return (
   <div className="main-signin-form">
<div className="main-sign">
<form className='form-signin grid-box-sign  shadow-pop-tr' method='POST'>
<div className="box-1-sign  box-sign-main">
<div className="heading-sign"><h1 style={{fontSize:"3rem",fontWeight:"700"}}>Sign Up</h1></div>
<div className="form-box">

<div className="input-1 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="username" style={{fontSize:"2rem",cursor:"pointer"}}><FcCustomerSupport/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="text" placeholder='Username' id='username' name='username'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.username} onChange={changeInput}/></div>
</div>

<div className="input-2 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="email" style={{fontSize:"2rem",cursor:"pointer"}}><FcGoogle/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="email" placeholder='Email' id='email' name='email'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.email} onChange={changeInput}/></div>
</div>

<div className="input-3 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="phone" style={{fontSize:"2rem",cursor:"pointer"}}><FcBusinessContact/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="text" placeholder='Phone Number' id='phone' name='phone'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.phone} onChange={changeInput}/></div>
</div>

<div className="input-4 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="work" style={{fontSize:"2rem",cursor:"pointer"}}><FcInTransit/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="text" placeholder='Profession' id='work' name='work'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.work} onChange={changeInput}/></div>
</div>

<div className="input-5 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="password" style={{fontSize:"2rem",cursor:"pointer"}}><FcLock/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="password" placeholder='Password' id='password' name='password'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.password} onChange={changeInput}/></div>
</div>

<div className="input-6 inputs" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
<label htmlFor="confirmpassword" style={{fontSize:"2rem",cursor:"pointer"}}> <FcUnlock/></label>
<div style={{width:"25rem",height:"2.5rem",borderBottom:"1px solid black"}}><input type="password" placeholder='Confirmpassword' id='confirmpassword' name='confirmpassword'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.5rem",border:"none"}} value={userInput.confirmpassword} onChange={changeInput}/></div>
</div>

<button type="button" class="btn btn-primary" style={{margin:"2rem",fontSize:"1.5rem"}} onClick={myRegister}>Register</button>


</div>
</div>
<div className="grid-2-sign box-sign-main">

<figure style={{width:"20rem",height:"20rem",placeSelf:"center",margin:"auto"}}><img src="images/img5.png.jpg" alt="" style={{width:"100%",height:"100%",display:"block"}}/></figure>


</div>

</form>

</div>


   </div>
  )
}

export default Signin