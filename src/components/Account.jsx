import React from "react";
import "../pages/A3.css";
import {useSelector} from "react-redux";
import {publicIp} from "public-ip";
function Account() {
  //redux**********
  const user = useSelector(state=>state.user.currentUser);
  const userId = useSelector(state=>state.user.currentUser.userLogin.txn_info_Activation);
  let amount1=0;
  let Purchase=0;
  let lastP=0;
  userId.map((val)=>{
   amount1=val.amount;
   lastP=val.amount;
   Purchase=Purchase+val.amount;
  })
  //IP Address*********
  const [Ip  , setIp]= React.useState("")

  const ipadd = async () => {
    
  const ip = await publicIp({
      fallbackUrls: ["https://ifconfig.co/ip"],
  });
    setIp(ip)
    console.log(ip + "  - myip ")  ;
  }

  ipadd()
   // time and date format***********
   function get_date_info(val) {
    const d = new Date(val.createdAt);
    let date_val = d.getDate();
    const day1 = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];
    let day_val = day1[d.getDay()];
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let month_val = month[d.getMonth()];
    let year = d.getFullYear();

    return day_val + " " + date_val + " " + month_val + " " + year;
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" my-1 col-lg border border-warning">
            <h3 className="text-light text-center">
              Dear {user.userLogin.name} Welcome to Europe Tesla's account overview
            </h3>
          </div>
          <div>
            <div className=" my-1 col-lg border border-warning">
              <marquee className="text-light">
                EUROPE TESLA CLUB INCOME CLOSING EUROPEAN TIME 11:59 PM: 4 STAR
                : $36 |||| 16 STAR : $103 |||| 64 STAR : $319. |||| 256 STAR :
                $3609 |||| 1024 STAR : $37239 HAPPY EID UL ZUHA FOR ALL TESLAS.
              </marquee>
            </div>
          </div>
        </div>

        <div className="row  IP">
          <div className="col-6">
            <h1 className="text-light">DASHBOARD</h1>
          </div>
          <div className="col-6">
            <h3 className="text-light border ps-3 mt-2 bord">
              Current IP:
              <span className="text-warning fs-5 ips">{Ip}</span>
            </h3>
          </div>
        </div>

        <div className="row text-light">
          <div className="col-lg bg-col m-1 text-center fs-4">
            ACTIVATION + CLUB{" "}
            <i className="fa-solid fa-dollar-sign border border-warning bg-warning"></i>
            <br /><h4>${amount1}.00</h4> 
          </div>
          <div className="col-lg bg-col m-1 text-center fs-4">
            TOTAL PURCHASE{" "}
            <i className="fa-solid fa-briefcase border border-warning bg-warning"></i>
            <br /> ${ Purchase}.00
          </div>
          <div className="col-lg bg-col m-1 text-center fs-4">
            LAST PACKAGE{" "}
            <i className="fa-solid fa-ranking-star border border-warning bg-warning"></i>
            <br />${amount1}.00
          </div>
        </div>

        {/*<div className="row text-light">
        
          <div className= "col-8 input-group mb-3">
            <i className="fa-solid fa-link mt-3 fs-5"></i>
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
          <div className="col-4">
          <h3>YOUR REFERRAL LINK</h3>
          </div>
  </div>*/}
  <div className="row">
  <div className="col-12 mt-4">
  <form class="row g-3">
  
  <div class="col-auto">
    <label for="" class="visually-hidden"></label>
    <input type="" class="form-control IO" id="" placeholder=""/ >
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">COPY</button>
    
    <span className="mt-5 text-light p-3 fs-5 sp"><i className=" ms-4 text-light fa-solid fa-link mt-3 fs-5 pe-2"></i>YOUR REFERRAL LINK</span>
  
  </div>
</form>
  </div>
 
  
  </div>
      </div>

      {/*-----------NEXT----------*/}

      <div className="container-fluid">
        <div className="row fifth-card-Acard">
          <div className="card fifth-card mx-1 my-5">
            <img src="feat6.png" className="card-img-top fifth-img" alt="xyz" />
            <div className="card-body">
              <h3 className="card-text">{user.userLogin.ReferralCode}</h3><h6 className="card-text">ReferralCode</h6>
            </div>
          </div>

          <div className="card fifth-card mx-1 my-5">
            <img src="feat3.png" className="card-img-top fifth-img" alt="xyz" />
            <div className="card-body">
              <h3 className="card-text">{get_date_info(user.userLogin)}</h3><h6 className="card-text"> JOIN DATE</h6>
            </div>
          </div>

          <div className="card fifth-card mx-1 my-5">
            <img
              src="feat7.png"
              className="card-img-top fifth-img "
              alt="xyz"
            />
            <div className="card-body">
              <h3 className="card-text">{user.userLogin.phone} </h3><h6 className="card-text">MOBILE</h6>
            </div>
          </div>

          <div className="card fifth-card mx-1 my-5">
            <img
              src="feat8.png"
              className="card-img-top fifth-img "
              alt="xyz"
            />
            <div className="card-body">
              <h3 className="card-text">{user.userLogin.AccountStatus} </h3><h6 className="card-text" >STATUS</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
