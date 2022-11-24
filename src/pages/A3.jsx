import React from "react";
import { useState } from "react";
import "./A3.css";
// import "../components/Tabs.css";
import { Link } from "react-router-dom";
import Account from "../components/Account";
import Changeprofile from "../components/Changeprofile";
import Changepassword from "../components/Changepassword";
import Changetxn from "../components/Changetxn";
import Directteam from "../components/Directteam";
import Levelreport from "../components/Levelreport";
import Depositefundusdt from "../components/Depositefundusdt";
import Depositecrypto from "../components/Depositecrypto";
import Depositehistory from "../components/Depositehistory";
import Accountactivation from "../components/Accountactivation";
import Accountupgradation from "../components/Accountupgradation";
import Transferfund from "../components/Transferfund";
import Activationhistory from "../components/Activationhistory";
import Mywalletstmt from "../components/Mywalletstmt";
import Referralincome from "../components/Referralincome";
import Levelincome from "../components/Levelincome";
import Autopoolincome from "../components/Autopoolincome";
import Clubincomee from "../components/Clubincomee";
import Upgradeincome from "../components/Upgradeincome";
import Rewardincome from "../components/Rewardincome";
import Incomewithdrawal from "../components/Incomewithdrawal";
import Withdrawalhistory from "../components/Withdrawalhistory";
import Newticket from "../components/Newticket";
import Ticketlist from "../components/Ticketlist";
import {useNavigate} from 'react-router-dom';
import { Logout } from "../redux/apiCalls";
import { useDispatch,useSelector } from "react-redux";


function A3() {
  const navigate=useNavigate();
  const user = useSelector(state=>state.user.currentUser);
  const [toggleState, setToggleState] = useState(1);
const dispatch=useDispatch();
  const toggleTab = (index) => {
    setToggleState(index);
  };
  //Register Date of user**********
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
  const handleClick=()=>{
    try{
Logout(dispatch);
navigate("/login");
    }catch(e){
console.log(e,"logOut");
    }
  }

  // Mobile Menu Button Start

  function myFunction() {
    var x = document.getElementById("mylink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

   // Mobile Menu Button End

  return (
    <div className="a3-bg">
    <div className="maarrgin-b">
    <div className="container-fluid">
          <div className="container ">
            <div className="row query-1-1">
              <div className="col-6 unique">
                <div className="resize-profile mekia resize-profile-hover text-warning">
                  <span>WELCOME BACK,</span>
                  <i class="fa-solid fa-user i-css"></i>
                  <h3>{user.userLogin.ReferralCode}</h3>
                   
                </div>
                <h3 className="text-light h3-logo">
                  EUROPE TESLA MAKE IDEAS INTO REALITY.
                </h3>
              </div>
              
              {/*<div className="gap">*/}
              
              <div className="col-3 my-5">
              <div className="first-div-icon my-3 " >
                <img className="icon-size" src="top_stat1.png" alt="icon-1" />
                <hr />
                <h6 style={{ color: "white", textAlign:"center" }}>
                REGISTRATION DATE <br />
                  <h6 style={{ textAlign: "center" }} className="text-warning">
                  {get_date_info(user.userLogin)}
                  </h6>
                </h6>
                </div>
                </div>
              
                <div className="col-3 my-5">
                <div className="first-div-icon my-3" >
                <img className="icon-size" src="top_stat2.png" alt="icon-2" />
                <hr />
                <h6 style={{ color: "white", textAlign:"center"  }}>
                LAST ACCESS <br />
                <h6 style={{ textAlign: "center" }} className="text-warning">
                {get_date_info(user.userLogin)}
                </h6>
                </h6>
                </div>
                </div>
              
              
                
            </div>
          </div>
        </div>
    </div>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#233B78"}}>
      {/*start .........................current changes.........................here*/}  
<div>
      
      <i class="fa-solid fa-bars fs-4 text-light mt-2 ms-3 menu-bar check1" id="checked" onClick={myFunction}></i>
      </div>

        <div className="container-fluid">
        <div className="Rechanges" id="mylink">
        {/*end .........................current changes.........................here*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* --------1. ACCOUNT Start------- */}
              <li className="nav-item">
                {" "}
                <button
                  style={{ border: "none",background:"#233B78"}}
                  className={
                    toggleState === 1
                      ? "tabs active-tabs nav-link active"
                      : "tabs"
                  }
                  onClick={() => toggleTab(1)}
                >
                  <li className="my-2 text-light" style={{background:"#233B78"}}>ACCOUNT</li>
                </button>
              </li>
              {/* --------1. ACCOUNT End------- */}

              {/* --------2. SETTING Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  SETTING{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 2
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      <h3 className="dropdown-item">Change Profile</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 3
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      <h3 className="dropdown-item">Change Password</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 4
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(4)}
                    >
                      <h3 className="dropdown-item">Change TXN Password</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------2. SETTING End------- */}

              {/* --------3. MY TEAM Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  MY TEAM{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 5
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(5)}
                    >
                      <h3 className="dropdown-item">DIRECT TEAM</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 6
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(6)}
                    >
                      <h3 className="dropdown-item">LEVEL REPORT</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------3. MY TEAM End------- */}

              {/* --------4. DEPOSIT Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  DEPOSIT{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 7
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(7)}
                    >
                      <h3 className="dropdown-item">
                        DEPOSIT FUND IN USDT (TRC20)
                      </h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 8
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(8)}
                    >
                      <h3 className="dropdown-item">DEPOSIT CRYPTO</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 9
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(9)}
                    >
                      <h3 className="dropdown-item">DEPOSIT HISTORY</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------4. DEPOSIT End------- */}

              {/* --------5. MY WALLET Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  MY WALLET{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 10
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(10)}
                    >
                      <h3 className="dropdown-item">ACCOUNT ACTIVATION</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 11
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(11)}
                    >
                      <h3 className="dropdown-item">ACCOUNT UPGRADATION</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 12
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(12)}
                    >
                      <h3 className="dropdown-item">TRANSFER FUND</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 13
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(13)}
                    >
                      <h3 className="dropdown-item">ACTIVATION HISTORY</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 14
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(14)}
                    >
                      <h3 className="dropdown-item">MY WALLET STATEMENT</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------5. MY WALLET End------- */}

              {/* --------6. MY INCOME Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  MY INCOME{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 15
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(15)}
                    >
                      <h3 className="dropdown-item">REFFERAL INCOME</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 16
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(16)}
                    >
                      <h3 className="dropdown-item">LEVEL INCOME</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 17
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(17)}
                    >
                      <h3 className="dropdown-item">AUTOPOOL INCOME</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 18
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(18)}
                    >
                      <h3 className="dropdown-item">CLUB INCOME</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 19
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(19)}
                    >
                      <h3 className="dropdown-item">UPGRADE INCOME</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 20
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(20)}
                    >
                      <h3 className="dropdown-item">REWARD INCOME</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------6. MY INCOME End------- */}

              {/* --------7. WITHDRAWAL Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  WITHDRAWAL{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 21
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(21)}
                    >
                      <h3 className="dropdown-item">INCOME WITHDRAWAL</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 22
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(22)}
                    >
                      <h3 className="dropdown-item">WITHDRAWAL HISTORY</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------7. WITHDRAWAL End------- */}

              {/* --------8. SUPPORT Start------- */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  SUPPORT{" "}
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 23
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(23)}
                    >
                      <h3 className="dropdown-item">NEW TICKET</h3>
                    </button>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <button
                      style={{ border: "none" }}
                      className={
                        toggleState === 24
                          ? "tabs active-tabs nav-link active"
                          : "tabs"
                      }
                      onClick={() => toggleTab(24)}
                    >
                      <h3 className="dropdown-item">TICKET LIST</h3>
                    </button>
                  </li>
                </ul>
              </li>
              {/* --------8. SUPPORT End------- */}

              {/* --------9. LOGOUT Start------- */}
              <li className="nav-item">
                {" "}
                <button
                  style={{ border: "none",background:"#233B78"}}
                  // className={
                  //   toggleState === 25
                  //     ? "tabs active-tabs nav-link active"
                  //     : "tabs"
                  // }
                  onClick={handleClick}
                >
                  <li className="my-2 text-light"style={{background:"#233B78"}}>LOGOUT</li>
                </button>
              </li>
              {/* --------9. LOGOUT End------- */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <Account />
        </div>
        
        
        <div
        className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <Changeprofile/>
        </div>
        
        <div
        className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <Changepassword/>
        </div>
        
        <div
        className={toggleState === 4 ? "content  active-content" : "content"}
        >
        <Changetxn/>
        </div>
        
        <div
        className={toggleState === 5 ? "content  active-content" : "content"}
        >
        <Directteam/>
        </div>
        
        <div
        className={toggleState === 6 ? "content  active-content" : "content"}
        >
        <Levelreport/>
        </div>
        
        <div
        className={toggleState === 7 ? "content  active-content" : "content"}
        >
        <Depositefundusdt/>
        </div>
        
        <div
        className={toggleState === 8 ? "content  active-content" : "content"}
        >
        <Depositecrypto/>
        </div>
        
        <div
        className={toggleState === 9 ? "content  active-content" : "content"}
        >
        <Depositehistory/>
        </div>
        
        <div
        className={toggleState === 10 ? "content  active-content" : "content"}
        >
        <Accountactivation/>
        </div>
        
        <div
        className={toggleState === 11 ? "content  active-content" : "content"}
        >
          <Accountupgradation/>
        </div>
        
        <div
          className={toggleState === 12 ? "content  active-content" : "content"}
          >
          <Transferfund/>
          </div>
          
          <div
          className={toggleState === 13 ? "content  active-content" : "content"}
          >
          <Activationhistory/>
          </div>
          
          <div
          className={toggleState === 14 ? "content  active-content" : "content"}
          >
          <Mywalletstmt/>
          </div>
          
          <div
          className={toggleState === 15 ? "content  active-content" : "content"}
          >
          <Referralincome />
          </div>
          
          <div
          className={toggleState === 16 ? "content  active-content" : "content"}
          >
          <Levelincome/>
          </div>
          
          <div
          className={toggleState === 17 ? "content  active-content" : "content"}
          >
          <Autopoolincome/>
          </div>
          
          <div
          className={toggleState === 18 ? "content  active-content" : "content"}
          >
          <Clubincomee/>
          
          </div>
          
          <div
          className={toggleState === 19 ? "content  active-content" : "content"}
          >
          <Upgradeincome/>
          </div>
          
          <div
          className={toggleState === 20 ? "content  active-content" : "content"}
          >
          <Rewardincome/>
          </div>
          
          <div
          className={toggleState === 21 ? "content  active-content" : "content"}
        >
          <Incomewithdrawal/>
          </div>
          
          <div
          className={toggleState === 22 ? "content  active-content" : "content"}
          >
          <Withdrawalhistory/>
          </div>
          
          <div
          className={toggleState === 23 ? "content  active-content" : "content"}
          >
          <Newticket/>
        </div>
        
        <div
        className={toggleState === 24 ? "content  active-content" : "content"}
        >
        <Ticketlist/>
        </div>
        </div>
    </div>
    <div className="my-5">
    
    </div>
    </div>
  );
}
export default A3;