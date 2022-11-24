import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Verifyotp1() {
const histry=useNavigate();
   const [otp, setOtp] = useState("")
  console.log(otp)
  const verifyOtp= async ()=>{
    const res = await fetch(`/verifyOtp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       
       otp:otp
      }),
    
      
    });
    
    if(res.status==200){
      
    
      alert("Verify Otp")
      histry("/transfer")
    }else{
      alert("Otp not match")
   
    }
  }
  
  


  return (
    <div className="container-fluid" style={{backgroundColor:"#021229"}}>
           <div className="container rounded" style={{backgroundColor:"#012C6F", height:"40vh"}} >
                <h1 className="text-light">Verify OTP</h1>
                <p className='text-center text-light'>A verification code send to your Email, please enter code below.</p>
                <p className='text-center text-light'>Enter OTP code: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"onChange={(e)=>setOtp(e.target.value)}/><br/><br/>
                <button type="button" class="btn btn-warning ms-5" onClick={verifyOtp}>Submit</button>
                </p>
                
 
                </div>
        </div>
  )
}

export default Verifyotp1;