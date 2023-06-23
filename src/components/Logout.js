import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './UseContext';

const Logout = () => {
    const {state,dispatch}=useContext(AppContext);
    const navigate=useNavigate();
    const myLogout=async()=>{

try{
const response=await fetch("/logout",{
    method:"get",
    "headers":{
        Accept:"application/json",
        "Content-Type":"application/json",

    }
    ,credentials:"include"

})
const data= await response.json();
navigate("/login",{replace:true});
dispatch({type:"USER",payload:false})

}catch(error){
    console.log(error)
}
    }
    useEffect(()=>{


        myLogout()
    },[])

  return (
    <div>Logout</div>
  )
}

export default Logout