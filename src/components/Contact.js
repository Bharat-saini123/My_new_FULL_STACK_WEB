import React, { useEffect, useState } from 'react';
import { FcContacts,FcCustomerSupport,FcDepartment } from "react-icons/fc";

const Contact = () => {
  const [myData,setMyData]=useState({username:"",email:"",phone:"",message:""})
  const [input,setInput]=useState({username:"",email:"",phone:"",message:""})
  const contactFunction=async()=>{
    try{
const response=await fetch("/getAuth",{
  method:"get",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include"
})
const data=await response.json();

setInput({...input,username:data.username,email:data.email,phone:data.phone})
setMyData(data)
    }catch(error){

    }



  }

  useEffect(()=>{

contactFunction()

  },[])
  const myFunc=(event)=>{
    event.preventDefault();
const name=event.target.name;
const value=event.target.value
setInput({...input,[name]:value})


  }
  const yesBoss=async(event)=>{
    event.preventDefault();
try{
  const username=input.username;
  const email=input.email;
  const phone=input.phone;
  const message=input.message
  // console.log(username,message,phone,email)
const response=await fetch("/contact",{
 method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    username:username,
    email:email,
    phone:phone,
    message:message
  })
})
const data=await response.json();
if(response.status===404){
  return  window.alert("message are not sent Please filled all the data")
 }
 if(response.status===200){
   window.alert("message sent")
   setInput({...input,message:""})
 }

}catch(error){
  console.log(error)
}

  }
  return (
 <form className="main-contact-page" method='POST'>

<div className="grid-box-3-contact">

<div className="box-1 box-contact shadow-pop-tr">
<div className="icon"><FcCustomerSupport style={{fontSize:"3rem"}}/></div>
<div className="content" style={{margin:"1rem"}}><p>Email</p><p>{myData.email}</p></div>
</div>
<div className="box-2 box-contact shadow-pop-tr">
<div className="icon"><FcContacts style={{fontSize:"3rem"}}/></div>
<div className="content" style={{margin:"1rem"}}><p>Contact</p><p>{myData.phone}</p></div>
</div>
<div className="box-3 box-contact shadow-pop-tr">
<div className="icon"><FcDepartment style={{fontSize:"3rem"}}/></div>
<div className="content" style={{margin:"1rem"}}><p>Address</p><p>High school Narnaul</p></div>
</div>


</div>

<div className='content-top-contacts'>
<div className="main-contact-content shadow-pop-tr">


<div className="content-contact-grid-box">
<div className="content-grid-box-1">
<div style={{width:"100%",height:"4rem",border:"2px solid gray"}}><input type="text" placeholder='Type Your Name Here' id='username' name='username' autoComplete='off'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.2rem 0.8rem",fontSize:"1.3rem",border:"none"}} value={input.username} onChange={myFunc}/></div>
</div>
<div className="content-grid-box-2">
<div style={{width:"100%",height:"4rem",border:"2px solid gray"}}><input type="email" placeholder='Type Your Email ' id='email' name='email' autoComplete='off'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.2rem 0.8rem",fontSize:"1.3rem",border:"none"}} value={input.email} onChange={myFunc}/></div>
</div>
<div className="content-grid-box-3">
<div style={{width:"100%",height:"4rem",border:"2px solid gray"}}><input type="text" placeholder='your phone No.' id='phone' name='phone' autoComplete='off'style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",padding:"0.2rem 0.8rem",fontSize:"1.3rem",border:"none"}} value={input.phone} onChange={myFunc}/></div>
</div>


</div>

<div className="textarea" style={{width:"100%",height:"6rem"}}><textarea name="message" id="message" cols="30" rows="10" style={{width:"100%",height:"100%",outline:"none",cursor:"pointer",fontSize:"1.3rem",padding:"2rem"}} placeholder="write message here" value={input.message} onChange={myFunc}></textarea></div>
<div><div><button type="button" class="btn btn-success" style={{margin:"2rem",fontSize:"1.5rem"}} onClick={yesBoss}>Message</button></div></div>

</div>
</div>


 </form>
  )
}

export default Contact