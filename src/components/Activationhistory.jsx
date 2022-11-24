import React from "react";
import {useState,useEffect} from 'react';
import {useSelector} from "react-redux"
function Activationhistory() {
   // time and date format***********
   function get_date_info(val) {
    const d = new Date(val);
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
// //redux use******
const userId = useSelector(state=>state.user.currentUser.userLogin.txn_info_Activation);

  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 ref-inc">
          <div class="account_inner text-light">
            <h1 class="title">Activation Details </h1>
            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="2"
              cellspacing="1"
              class="table table-bordered"
              style={{ color: "#FFFFFF" }}
            >
              <thead>
                <tr>
                  <th width="33%" align="center">
                    Activation Date{" "}
                  </th>
                  <th width="33%" height="23" align="center">
                    &nbsp;Ref No
                  </th>
                  <th width="33%" align="center">
                    {" "}
                    Activation Amount{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
              
              { userId.map((val)=>{return <tr>
                      
                         <td>{get_date_info(val.Txn_date)}</td>
                         <th scope="row">{val.Txn_num}</th>
                          <td>{val.amount}</td>
                          
                         
                   
    </tr>
  })}
  {
  
  }
              </tbody>
            </table>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activationhistory;
