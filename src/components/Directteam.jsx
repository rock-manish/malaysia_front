import React from 'react'
import {useState,useEffect} from 'react';
import {useSelector} from "react-redux"

function Directteam() {
 
  
  // time and date format***********
  function get_date_info(val) {
            const d = new Date(val.createdAt);
            let date_val = d.getDate();
            const day1 = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
            let day_val = day1[d.getDay()];
            const month = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
          
            let month_val = month[d.getMonth()];
            let year = d.getFullYear();
            return day_val + " " + date_val + " " + month_val + " " + year;
          }
  //redux use******
  const userId = useSelector(state=>state.user.currentUser.userLogin._id);
 
  //************** */
    const [userData , setUserData]=useState([]);
  
    const direct=async()=>{
      console.log(userId)
      try{
        const res=await fetch(`/referraluser/${userId}`,{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },credentials:"include"
        })
      const data=await res.json();
      console.log(res,"jhikhio");
      setUserData(data);
       
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
      
      }catch(err){
       console.log(err)
      }
      
    }
    
      useEffect(()=>{
        direct();
      },[])
  return (
    <div>

<div className="mb-5">
        <h1 className='text-light'>Referral Team</h1>

        <div className="rounded border-light bg-light">
            {/* TABLE  */}
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">SL NO.</th>
      <th scope="col">USER ID</th>
      <th scope="col">NAME</th>
      <th scope="col">JOINING DATE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">STATUS</th>
    </tr>
  </thead>
  <tbody>
  { userData.map((val,index)=>{return <tr>
    <th scope="row">{index+1}</th>
    <td>{val.ReferralCode}</td>
    <td>{val.name}</td>
    <td>{get_date_info(val)}</td>
    <td>{val.phone}</td>
    <td>{val.email}</td>
    <td>{val.AccountStatus}</td>
    </tr>
  })}
 
  </tbody>
</table>
        </div>
    </div>

    </div>
  )
}

export default Directteam