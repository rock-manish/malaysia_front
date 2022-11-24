import React from "react";
import { useState, useMemo } from "react";
import Select from "react-select";

import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // using the country list
  const history = useNavigate();
  // using the country list
 
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value)
  };
 

  
  const [type, setType] = useState(false);
  const handleToggle = () => {
    setType(!type);
  };
  //backend link code*****
  const [user, setUser] = useState({
    ReferralCode: "",
    password: "",
    cpassword: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    upiId: "",
   
  });
 
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //for connect fronted and backend*********

  
  const register1 = async () => {
    const {
      ReferralCode,
      password,
      cpassword,
      name,
      email,
      phone,
      city,
      state,
      upiId,
     
    } = user;

    console.log(user);

    if (
      ReferralCode &&
      password &&
      cpassword &&
      name &&
      email &&
      phone &&
      city &&
      state
    ) {
      const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ReferralCode,
          password,
          cpassword,
          name,
          email,
          phone,
          city,
          state,
         
        }),
      });

      const data = await res.json();
      alert(JSON.stringify(data));
      
      // if (res.status === 422 || !data) {
      //   alert("EmailId Already Exist Plz enter another EmailId");
      // } else if (res.status === 423 || !data) {
      //   alert("Password did't match");
      // } else {
      //   alert("Successful registration");
      //   console.log("Successful registration");
      // }
    } else {
      alert("Please fill the data Properly");
    }

  };

  return (
    <div className="faq-back mb-5 pb-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8">
              <div className="card-A">
                <img src="logoo.png" alt="" />
                <h2 className="text-center mt-2 text-white">
                  Register for new account
                </h2>
                <div className="card-B">
                  <input
                    type="text"
                    placeholder="SponsorID"
                    className="fs-5 p-3 fw-bold"
                    value={user.ReferralCode}
                    name="ReferralCode"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    type={type ? "text" : "password"}
                    placeholder="TypePassword"
                    className="fs-5 p-3 fw-bold"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <span className="desk" onClick={handleToggle}>
                    {type ? (
                      <i class="fas fa-eye"></i>
                    ) : (
                      <i class="fas fa-eye-slash"></i>
                    )}
                  </span>
                  <br />
                  <br />
                  <input
                   type={type ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="fs-5 p-3 fw-bold"
                    value={user.cpassword}
                    name="cpassword"
                    onChange={handleChange}
                  />
                  <span className="desk" onClick={handleToggle}>
                    {type ? (
                      <i class="fas fa-eye"></i>
                    ) : (
                      <i class="fas fa-eye-slash"></i>
                    )}
                  </span>

                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="FullName"
                   
                    className="fs-5 p-3 fw-bold"
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Email-Id"
               
                    className="fs-5 p-3 fw-bold"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="Mobile No"
                    value={user.phone}
                    name="phone"
                    onChange={handleChange}
                    className="fs-5 p-3 fw-bold"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="City"
                    value={user.city}
                    name="city"
                    onChange={handleChange}
                    className="fs-5 p-3 fw-bold"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="State"
                    value={user.state}
                    name="state"
                    onChange={handleChange}
                    className="fs-5 p-3 fw-bold"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    placeholder="UPI ID"
                    value={user.upiId}
                    name="upiId"
                    onChange={handleChange}
                    className="fs-5 p-3 fw-bold"
                  />
                  <br />
                  <br />
                  {/* <input type="text" placeholder='Country' name="" /> */}
                  {/* <Select
                    className="size slips"
                    options={options}
                    value={location}
                  name="value"
                    onChange={changeHandler}
                  /> */}

                  <Select options={options} name="value" value={value} onChange={changeHandler} />

                  <br />
                  <br />
                </div>
                <div className="check cls">
                  <input type="checkbox"  />{" "}
                  <p>I agree with the terms and condition</p>
                  <br />
                  <button
                    type="button"
                    onClick={register1}
                    className="bump btn btn-warning button-submit fs-5 daku"
                  >
                    Register
                  </button>
                  <h5 className="text-light text-center mt-3 fs-5 pe-5 sudu">
                    Already have an account? <a href="/login">Log In</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
