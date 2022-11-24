import React from 'react'
import {useState} from 'react';
import {useSelector} from "react-redux"
function Changepassword() {

  //Redux data start***********
  const user1 = useSelector(state=>state.user.currentUser.userLogin._id);
  //Redux data end*************
  const [user, setUser] = useState({
   
    password: "",
    newpassword: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  let pass = useSelector(state=>state.user.currentUser.userLogin.password);
  console.log(user1,"vgiuhoiho");
  //for connect fronted and backend*********
  const ChangePass = async () => {
   
    const {  password, newpassword, cpassword } = user;
    if (password && newpassword && cpassword) {
      if (pass==!password) {

        alert("EmailId not Exist");
      } 
      else if(!newpassword == cpassword){
        alert("password not match");
      }else{
      
      const res = await fetch(`/changepass/${user1}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
          password,
          newpassword,
          cpassword,
        }),
      });
      alert("Successful updated your password")
      const data = await res.json();
    }
  }
     else {
      alert("Please fill the data Properly");
    }
  
  };
  return (
    <div className="mb-5">
        <h1 className='text-light'>Change Password</h1>

        <div className="rounded border-light bg-light rounded">
            
        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="password" name="password" value={user.password} onChange={handleChange} class="form-control mb-2 border border-dark"
            placeholder=" Current Password" aria-label="password" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="password" name="newpassword" value={user.newpassword} onChange={handleChange} class="form-control mb-2 border border-dark"
            placeholder=" New Password" aria-label="password" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group pt-2 pb-2 pe-2 ps-2">
          <input
            type="password" name="cpassword" value={user.cpassword} onChange={handleChange}
            class="form-control mb-2 border border-dark" 
            placeholder=" Conform Password" aria-label="password" aria-describedby="basic-addon1" />
        </div>
        </div>
        <button
                type="submit"
                name="Submit"
                value="Continue"
                onClick={ChangePass}
                class="btn btn-warning mr-2 mt-2"
              >
                Submit
              </button>
    </div>
  )
}

export default Changepassword