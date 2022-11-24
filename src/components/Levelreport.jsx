import React from "react";
import {useState,useEffect} from "react";
import {useSelector} from "react-redux"
function Levelreport() {
  //redux use******
  const userId = useSelector(state=>state.user.currentUser.userLogin._id)
  const userId1 = useSelector(state=>state.user.currentUser.userLogin.ReferralCode)
 
  //************** */
  const [userData , setUserData]=useState([]);
  
  const direct=async()=>{
 
    try{
      const res=await fetch(`/leveluser/${userId}`,{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },credentials:"include"
      })
    const data=await res.json();
    setUserData(data);
    data.map((val)=>{
      console.log(val.ReferralCode,"ghgerhhe")
    })
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
      <div className="mb-5 ref-inc">
        <h1 className="text-light">Referral Team</h1>

        <div className="rounded border-light">
          {/* TABLE  */}
          <table border="0" cellpadding="0" cellspacing="0" class="text-light table table-bordered mx-auto" style={{width:"50%"}}>
            <thead>
              <tr>
                <th colspan="4" scope="col">
                  Search
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width="30%" align="right" nowrap="nowrap" valign="middle">
                  {" "}
                  Date From/To :{" "}
                </td>
                <td width="30%">
                  <strong>
                    <input
                      type="date"
                      value=""
                      class="form-control"
                      name="datefrom"
                    />
                  </strong>
                </td>
                <td width="22%">
                  <strong>
                    <input
                      type="date"
                      value=""
                      class="form-control"
                      name="dateto"
                    />{" "}
                  </strong>
                </td>
                <td width="22%" style={{ verticalAlign: "top" }}>
                  <button
                    type="submit"
                    class="btn btn-primary text-uppercase"
                    id="send-form"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table table-bordered text-light">
  <thead>
    <tr>
      <th scope="col">Referral Level</th>
      <th scope="col">User ID</th>
      <th scope="col">Name</th>
      <th scope="col">Sponser ID</th>
      <th scope="col">Package</th>
      <th scope="col">Purchase Date</th>
    </tr>
  </thead>
  <tbody>
  { userData.map((val,index)=>{return <tr>
    <th scope="row">{val.users.length-1}</th>
    <td>{val.ReferralCode}</td>
    <td>{val.name}</td>
    <td>{userId1}</td>
    <td>{val.email}</td>
    <td>{val.AccountStatus}</td>
    </tr>
  })}
   
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
}

export default Levelreport;
