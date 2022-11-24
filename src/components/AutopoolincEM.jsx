import React from "react";
import {useSelector} from "react-redux";
function Autopoolinc() {
  const userId1 = useSelector(state=>state.user.currentUser.userLogin.txn_info_EmIncome);
   // time and date format***********
   function get_date_info(val) {
    const d = new Date(val);
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

  return (
    <dir style={{ backgroundColor: "#03142c" }} className="py-2">
      <div className="container" style={{ backgroundColor: "#1D4580" }}>
        <div className="account_inner text-light">
          <h1 className="title"> Basic Pool Statement </h1>

          <table class="table border">
            <tbody>
              <tr>
                <td align="center" valign="top">
                  <form
                    name="search"
                    action=""
                    className="forms-sample"
                    method="get"
                  >
                    <table
                      width="650"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      className="table table-bordered text-light"
                      style={{ color: "#FFFFFF;" }}
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
                                className="form-control"
                              />
                            </strong>
                          </td>
                          <td width="30%">
                            <strong>
                              <input
                                type="date"
                                value=""
                                name="dateto"
                                className="form-control"
                              />
                            </strong>
                          </td>
                          <td width="20%" style={{ verticalAlign: "top;" }}>
                            <input
                              type="submit"
                              name="Submit"
                              value="&nbsp;Search&nbsp;"
                              className="btn btn-primary mr-2"
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
                  style={{ verticalAlign: "top;" }}
                >
                  {/* main  content table start  */}
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
                      style={{ color: "#FFFFFF;" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            width="12%"
                            align="left"
                            nowrap="nowrap"
                            className="text-light"
                          >
                            {" "}
                            Records Per Page:{" "}
                          </td>
                          <td width="5%" align="left" nowrap="nowrap">
                            <select
                              name="pagesize"
                              id="pagesize"
                              onchange="location.href='/my_incentive_statement.php?pay_group=POOL_BASIC&amp;pay_plan=POOL_BASIC&amp;pagesize='+this.value"
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
                            <div align="right" className="text-light">
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
                      className="table table-bordered text-light"
                      style={{ color: "#FFFFFF;" }}
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
                      { userId1.map((val)=>{return <tr>
                       <th scope="row">{val.Txn_num}</th>
                         <td>{get_date_info(val.Txn_date)}</td>
                         <td align="center">Referral Income transfered in e-Wallet</td>
                          <td>{val.earn}</td>
                           <td>{val.spend}</td>
                          
                        <td>{val.earn-val.spend}</td>
                   
    </tr>
  })}
                      
                        <tr>
                          <td valign="top" align="center" colspan="8"></td>
                        </tr>
                      </tbody>
                    </table>
                  </form>

                  {/* main content table end  */}
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </dir>
  );
}

export default Autopoolinc;
