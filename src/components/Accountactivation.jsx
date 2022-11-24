import React, { useState,useEffect } from "react";

import {useSelector} from "react-redux"

function Accountactivation() {
  const userId = useSelector(state=>state.user.currentUser.userLogin._id);
  
  const userWallet = useSelector(state=>state.user.currentUser.userLogin.wallet);
  const [error, setError] = useState("")
  const [user, setUser] = React.useState({
   ReferralCode:"",
   addmoney:20
  });
  const handleChange = (e) => {
    // console.log(e);
    e.preventDefault();
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
console.log(user.ReferralCode,"svdfne")
  const updateProfile1 = async () => {
    try {
      const {ReferralCode,addmoney}=user;
      const res=await fetch(`/upgrade/${userId}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ReferralCode,addmoney
        })
      })
     console.log(res,"gaerhg")
      const data = await res.json();
     setError( data);
     
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(()=>{
  //   fectdata()

  // },[])


  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title"> Activation </h1>
              <h4 style={{color:"red",border:"1px solid red", borderStyle:"dotted"}}>⚠{error}</h4>
            <form
              method="post"
              name="form1"
              id="form1"
              class="forms-sample"
              onsubmit="return validateForm(this,0,0,0,1,8);"
            >
              <p>
                <strong>Wallet Balance : ${userWallet}.00 </strong>
              </p>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="ReferralCode"
                  value={user.ReferralCode}
                  // alt="blank"
                  // emsg="User ID can not be blank"
                  placeholder="User ID"
                  onChange={handleChange}
                  // required=""
                />
                <div align="left" id="details">
                  {" "}
                </div>
              </div>
              <div class="form-group">
               
                <select
                  name="total_investment"
                  class="form-control"
                  id="total_investment"
                  required=""
                >
                
                  <option value="20" onChange={handleChange} selected="selected">
                    Activation ${user.addmoney}
                  </option>
                  
                </select>
                <input type="hidden" name="pay_group" value="CW" />
              </div>
              <button
               type="button"
                name="Submit"
                onClick={updateProfile1}
                value="Continue"
                class="btn btn-primary mr-2 mt-2"
              >
                Continue
              </button>
            </form>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountactivation;
