import React from 'react'
import {useSelector} from "react-redux"
function Mywalletstmt() {
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
const userId = useSelector(state=>state.user.currentUser.userLogin.txn_info_wallet);

  return (
    <div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 ref-inc">
             <div class="account_inner text-light">
 <h1 class="title"> 
 Cash Wallet Statement </h1>  
                                        
                        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tbody><tr>
                <td align="center" valign="top"><form method="post" name="form" id="contactform" class="forms-sample">
                    <table border="0" cellpadding="0" cellspacing="0" class="table table-bordered" style={{width:"50%", color:"#FFFFFF"}}>
                      <thead>
                        <tr>
                          <th colspan="5">                            Search Transaction </th>
                        </tr>
                      </thead>
                      <tbody><tr>
                        <td width="26%" align="right" nowrap="nowrap">
                            {/* Transaction */}
                          Date From: </td>
                        <td width="30%"><strong>
                          <input type="date" value="" name="datefrom" class="form-control"/>
                          </strong></td>
                        <td width="26%" align="right" nowrap="nowrap">
                            {/* Transaction */}
                          Date to: </td>
                        <td width="22%"><strong>
                          <input type="date" value="" name="dateto" class="form-control"/>
                          </strong></td>
                        <td width="22%" style={{verticalAlign:"top"}}><button type="submit" class="btn btn-primary mr-2" id="send-form">Search</button></td>
                      </tr>
                    </tbody></table>
                  </form></td>
              </tr>
              <tr>
                <td align="center" valign="top" style={{verticalAlign:"top"}}><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                      <td align="center" valign="top" style={{verticalAlign:"top"}}>
                          {/* main  content table start */}
                        <br/><table width="100%" border="0" cellpadding="0" cellspacing="0">
                          
                          <tbody><tr>
                            <td valign="top"><form method="post" name="form1" id="form1" onsubmit="confirm_submit(this)">
                                {/* <div align="right" style="margin-right:1000px; float:right;  padding:5px; color:#fff; width:250px; ">
              
              </div> */}
                                                                {/* <a class="site-btn" href="my_ewallet_fund_transfer.php?pay_group=" style="margin-left:840px;">
                            Fund Transfer</a> */}
<p style={{color:"#000", fontSize:"16px", textAlign:"right", float:"right", width:"350px"  }} class="site-btn text-light"> Wallet Balance :
                                  $0.00                                </p>
                                <table width="98%" border="0" cellpadding="1" cellspacing="1" class="table table-bordered" style={{color:"#FFFFFF"}}>
                                  <thead>
                                    <tr>
                                      <th width="11%" align="center">Tr. No. </th>
                                      {/* <td width="10%" height="23">Pay No. </td> */}
                                      <th width="13%" align="center">Tr. Date </th>
                                      <th width="40%" align="center">&nbsp;Transaction details </th>
                                      <th width="11%" align="center">&nbsp;Credit </th>
                                      <th width="12%" align="center">&nbsp;Debit </th>
                                      <th width="12%" align="center">&nbsp;Balance </th>
                                    </tr>
                                  </thead>
                                                                    <tbody>

                              { userId.map((val)=>{return <tr>
                       <th scope="row">{val.Txn_num}</th>
                         <td>{get_date_info(val.Txn_date)}</td>
                         <td align="center">Fund transfered to user {val.sponerId} - Fund Transfer To User</td>
                          <td>{val.credit_amt}</td>
                           <td>{val.debit_amt}</td>
                        <td>{val.remain_bal}</td>
                   
    </tr>
  })}
                              
                      
                                                                    <tr>
                                    <td valign="top" align="center" colspan="6"><link href="stylesheet/style.css" rel="stylesheet" type="text/css"/>
<table width="870px" border="0" cellspacing="2" cellpadding="0" align="center" class="">
  <tbody><tr>
    {/* <td  width="11%" align="center"><a href="/my_ewallet_statement.php?pay_group=CW&start=0" class="readmorelink"><strong>First</strong></a></td>
    <td  width="14%" height="20" align="center" nowrap class="readmorelink"><a href="/my_ewallet_statement.php?pay_group=CW&start=-10" class="readmorelink" >
          </td> */}
    <td align="center" height="20" style={{textDecoration:"none", color:"#000", fontSize:"16px"}}>Page:      <b>
      1      </b>
            <a href="/my_ewallet_statement.php?pay_group=CW&amp;start=10" style={{textDecoration:"none", color:"#000000", fontSize:"16px"}} class="error">
      2      </a>
            <a href="/my_ewallet_statement.php?pay_group=CW&amp;start=20" style={{textDecoration:"none", color:"#000000", fontSize:"16px"}} class="error">
      3      </a>
            <a href="/my_ewallet_statement.php?pay_group=CW&amp;start=30" style={{textDecoration:"none", color:"#000000", fontSize:"16px"}} class="error">
      4      </a>
            <a href="/my_ewallet_statement.php?pay_group=CW&amp;start=40" style={{textDecoration:"none", color:"#000000", fontSize:"16px"}} class="error">
      5      </a>
            <a href="/my_ewallet_statement.php?pay_group=CW&amp;start=50" style={{textDecoration:"none", color:"#000000", fontSize:"16px"}} class="error">
      6      </a>
          </td>
   {/* <td  width="13%" height="20" align="center" nowrap>      &nbsp;<a href="/my_ewallet_statement.php?pay_group=CW&start=10" class="readmorelink"><strong>Next</strong>&nbsp;
      10      &nbsp;&raquo;</a>
          </td>
    <td  width="10%" align="center">      <a href="/my_ewallet_statement.php?pay_group=CW&start=50" class="readmorelink"><strong>Last</strong></a></td> */}
  </tr>
</tbody></table>
</td>
                                  </tr>
                                </tbody></table>
                              </form></td>
                          </tr>
                        </tbody></table></td>
                    </tr>
                  </tbody></table></td>
              </tr>
            </tbody></table>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Mywalletstmt