import React,{useEffect} from "react";
import {login} from "../redux/apiCalls"
import { useDispatch } from "react-redux";
// import {useNavigate}from 'react-router-dom';

const Login = () => {
  // const histry=useNavigate();
  const [data, setData] = React.useState("password");
  const dispatch = useDispatch();
  const[userid,setUserid] = React.useState("");
  const [pass,setPass] = React.useState("")
  const handle = () => {
    setData(!data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try{
      
      login(dispatch,{email:userid,password:pass});
  
  }catch(e){console.log(e);
   }
    
  }
  return (
    <div div className="faq-back mb-5 py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="lucy login-A">
                <img src="logoo.png" alt="" />
                <h4>Login into your account</h4>
                <div className="login-B">
                  <div className="login-C">
                    <input
                      type="text"
                      placeholder="User Id"
                      className="fs-5 fw-bold p-1 loggedd"
                      onChange={(e)=>setUserid(e.target.value)}
                      value={userid}
                    />
                    <br />
                    <br />
                    <input
                      type={data ? "text" : "password"}
                      placeholder="TypePassword"
                      className="fs-5 fw-bold p-1 loggedd"
                      onChange={(e)=>setPass(e.target.value)}
                      value={pass}
                    />
                    <span className="Remo" onClick={handle}>
                      {data ? (
                        <i class="fas fa-eye"></i>
                      ) : (
                        <i class="fas fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  <input type="checkbox" />
                  <p>Keep me logged in</p>
                  <h6 className="anchorr">
                  
                  <a className="" href="/fogotpassword">Recover Password</a>
                  </h6>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="bump btn btn-warning button-submit fs-5"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <h5>
                    Don't have an account?{" "}
                    <span className="text-warning tt-ww">
                      <a href="/register">Join Us</a>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
