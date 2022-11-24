import React from "react";
import {useSelector} from "react-redux";
 
function Upgradeincome() {
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
const userId = useSelector(state=>state.user.currentUser.userLogin.UpgradeIncome_info);

  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 ref-inc">
          <div class="account_inner text-light">
            <h1 class="title">Upgrade Income Statement</h1>

            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    <form
                      name="search"
                      action=""
                      class="forms-sample"
                      method="get"
                    >
                      <table
                        width="650"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="table table-bordered"
                        style={{ color: "#FFFFFF" }}
                      >
                        <thead>
                          <tr>
                            <th colspan="4"> Search Transaction </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td width="20%" align="right">
                              {" "}
                              Date From/To :{" "}
                            </td>
                            <td width="30%">
                              <strong>
                                <input
                                  type="date"
                                  value=""
                                  name="datefrom"
                                  class="form-control"
                                />
                              </strong>
                            </td>
                            <td width="30%">
                              <strong>
                                <input
                                  type="date"
                                  value=""
                                  name="dateto"
                                  class="form-control"
                                />
                              </strong>
                            </td>
                            <td width="20%" style={{ verticalAlign: "top" }}>
                              <input
                                type="submit"
                                name="Submit"
                                value="&nbsp;Search&nbsp;"
                                class="btn btn-primary mr-2"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style={{ verticalAlign: "top" }}
                  >
                    {/* main  content table start */}
                    <form
                      method="post"
                      name="form1"
                      id="form1"
                      onsubmit="confirm_submit(this)"
                    >
                      <table
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style={{ color: "#FFFFFF" }}
                      >
                        <tbody>
                          <tr>
                            <td width="12%" align="left" nowrap="nowrap">
                              {" "}
                              Records Per Page:{" "}
                            </td>
                            <td width="5%" align="left" nowrap="nowrap">
                              <select
                                name="pagesize"
                                id="pagesize"
                                onchange="location.href='/my_incentive_statement.php?pay_group=UPGRADE_INCOME&amp;pagesize='+this.value"
                              >
                                <option value="5">5</option>
                                <option value="10" selected="">
                                  10
                                </option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="500">500</option>{" "}
                              </select>{" "}
                            </td>
                            <td width="60%" align="right">
                              <div align="right">
                                {" "}
                                Showing Records: 1 to 5 of 5{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table
                        width="100%"
                        cellpadding="1"
                        cellspacing="1"
                        class="table table-bordered"
                        style={{ color: "#FFFFFF" }}
                      >
                        <thead>
                          <tr>
                            <th align="center">Tr. No.</th>
                            <th align="center">Tr. Date</th>
                            <th align="center">&nbsp;Transaction details</th>
                            <th align="center">&nbsp;Credit</th>
                            <th align="center">&nbsp;Debit</th>
                            <th align="center">&nbsp;Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                       
                        { userId.map((val)=>{return <tr>
                       <th scope="row">{val.Txn_num}</th>
                         <td>{get_date_info(val.Txn_date)}</td>
                         <td align="center">  Upgrade Level  Income from {val.sponerId} </td>
                          <td>${val.credit_amt}</td>
                           <td>${val.debit_amt}</td>
                        <td>${val.remain_bal}</td>
                   
    </tr>
  })}
                        
                         
                          <tr>
                            <td valign="top" align="center" colspan="8"></td>
                          </tr>
                        </tbody>
                      </table>
                    </form>

                    {/*main content table end*/}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgradeincome;
