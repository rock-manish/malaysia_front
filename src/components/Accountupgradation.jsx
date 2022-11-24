import React from "react";
import {useSelector} from "react-redux";
function Accountupgradation() {
  const userId = useSelector(state=>state.user.currentUser.userLogin._id);
  const userWallet = useSelector(state=>state.user.currentUser.userLogin.wallet);
  const [ReferralCode, setReferral] = React.useState('');
  const [tonum,setAddmoney]=React.useState();
     const addmoney = parseInt(tonum)
     const [error, setError] = React.useState("")
  console.log(addmoney ,"svdfne")
  console.log(typeof addmoney,"svdfne")
  console.log(userWallet,"gerherhje")
  const updateProfile1 = async () => {
    try {
      // const {ReferralCode,addmoney}=user;
      const res=await fetch(`/Acc_Upgradetion/${userId}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ReferralCode,
          addmoney
        })
      })

     
     console.log(res,"gaerhg");

     const data = await res.json();
     setError( data);
    
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title"> Upgrade </h1>
            <h4 style={{color:"red",border:"1px solid red", borderStyle:"dotted"}}>⚠{error}</h4>
            <form
              method="post"
              name="form1"
              id="form1"
              class="forms-sample"
              onsubmit=""
            >
              <p>
                <strong>Wallet Balance ${userWallet}.00</strong>
              </p>
              <div class="form-group">
                {/* <span> Username : </span> */}
                <input
                  type="text"
                  class="form-control"
                  name="ReferralCode"
                  value={ReferralCode}
                  onChange={(e)=>setReferral(e.target.value)}
                 
                  emsg="Username can not be blank"
                  placeholder="User ID"
                 
                  
                />
                <div align="left" id="details">
                  {" "}
                </div>
              </div>

              {/* <div class="form-group">  <input name="total_investment"  
                      type="text" class="txtbox" value=""  alt="numeric|2" 
                      emsg="Please enter minimum amount $10"     /> */}
              <select
                
                class="form-control"
                id="total_investment"
                alt="select"
                emsg="Please Select Package"
                required=""
                name="addmoney"
                value={tonum}
                onChange={(e)=>setAddmoney(e.target.value)}
              >
                <option value="">Select Package</option>
                <option value="36" >Upgrade $36.00</option>
                <option value="50">Upgrade $50.00</option>
                <option value="100">Upgrade $100.00</option>
                <option value="250">Upgrade $250.00</option>
                <option value="500">Upgrade $500.00</option>
                <option value="1000">Upgrade $1000.00</option>
                <option value="2500">Upgrade $2500.00</option>
                <option value="5000">Upgrade $5000.00</option>
                <option value="10000">Upgrade $10000.00</option>
                <option value="25000">Upgrade $25000.00</option>
                <option value="40000">Upgrade $40000.00</option>
                <option value="50000">Upgrade $50000.00</option>

               
               
              </select>
              <input type="hidden" name="pay_group" value="CW" />

              <button
                type="button"
                name="Submit"
                value="Continue"
                onClick={updateProfile1}
                class="btn btn-primary mr-2 mt-2"
              >
                Continue
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountupgradation;
