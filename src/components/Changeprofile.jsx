import React from "react";
import { useState, useMemo,useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import {useSelector} from "react-redux"

function Changeprofile() {
  // using the country list
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  //Backend Coding *******************
  //Redux data start***********
  const user1 = useSelector(state=>state.user.currentUser)
 
  //Redux data end*************
  const [user, setUser] = useState(user1.userLogin);
  const handleChange = (e) => {
    // console.log(e);
    e.preventDefault();
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const updateProfile1 = async () => {
    try {
   

// console.log(data1.userLogin._id)
      const {name,phone,state,city}=user;
      const res=await fetch(`/updateProfile/${user1.userLogin._id}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
          phone,
          city,
          state,
         
        })
      })
      // console.log(`${data1.userLogin._id}`,"drturiri")
      const data = await res.json();
      if (res.status === 400 || !data) {
        alert("Invalid Details");
      } else {
        alert("Successful Updated");
       
      }
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(()=>{
  //   fectdata()

  // },[])


 
  return (
    <div className="mb-5">
      <h1 className="text-light">Change Profile</h1>
      <h6 className="text-center text-light border border-light rounded">
        General Details
      </h6>

      <div className="rounded border-light bg-light rounded">
        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 disable border border-dark"
            value={user.ReferralCode}
            placeholder="ReferralCode"
            aria-label="ReferralCode"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 disable border border-dark"
            name="name"
            value={user.name}
           
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon1"
          />
         
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="tel"
            class="form-control mb-2 disable border border-dark"
            name="phone"
            value={user.phone}
            placeholder="tel"
            aria-label="tel"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="email"
            class="form-control mb-2 disable border border-dark"
            value={user.email}
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
       
          <input
            type="text"
            class="form-control mb-2 border border-dark"
            name="city"
            value={user.city}
            onChange={handleChange}
            placeholder="city"
            aria-label="city"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 border border-dark"
            name="state"
            value={user.state}
            onChange={handleChange}
            placeholder="state"
            aria-label="state"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          {/* <input type="text" placeholder='Country' name="" /> */}
          <Select
            className="form-control mb-2 border border-dark"
            options={options}
            name="country"
            value={value}
           
            placeholder="Select Country"
            onChange={changeHandler}
          />
        </div>
      </div>

      <h6 className="text-center text-light border border-light rounded">
        Payment Details
      </h6>
      <div className="rounded border-light bg-light rounded">
        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 disable border border-dark"
            placeholder="Bitcoin Wallet"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="street"
            class="form-control mb-2 disable border border-dark"
            placeholder="USDT TRC20 Address"
            aria-label="street"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 disable border border-dark"
            placeholder="UPI ID"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 disable border border-dark"
            placeholder="Bank"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="name"
            class="form-control mb-2 border border-dark"
            placeholder="Acc Holder Name"
          
            aria-label="name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 border border-dark"
            placeholder="Account Number"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 border border-dark"
            placeholder="Branch"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group pb-2 pe-2 ps-2">
          <input
            type="text"
            class="form-control mb-2 border border-dark"
            placeholder="IFSC Code"
            aria-label="text"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className=" pt-4">
        <button type="button" onClick={updateProfile1} class="btn btn-warning">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Changeprofile;
