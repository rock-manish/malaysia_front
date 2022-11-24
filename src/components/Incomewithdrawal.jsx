import React from "react";
import {Link} from "react-router-dom"
function Incomewithdrawal() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 ref-inc">
          <div class="account_inner text-light">
            <h1 class="title">Fund Withdraw </h1>

            <table
              width="99%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td align="center" valign="top">
                    <table
                      width="100%"
                      border="0"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      class="table table-bordered"
                      style={{ color: "#FFFFFF" }}
                    >
                      <thead>
                        <tr>
                          <th width="145" class="subtitle">
                            {" "}
                            Description
                          </th>
                          <th width="50" class="subtitle">
                            {" "}
                            Credit{" "}
                          </th>
                          <th width="50" class="subtitle">
                            {" "}
                            Debit{" "}
                          </th>
                          <th width="50" class="subtitle">
                            {" "}
                            Balance
                          </th>
                          <th width="154" class="subtitle">
                            {" "}
                            Transfer In My Wallet
                          </th>

                          <th width="154" class="subtitle">
                            {" "}
                            Fund Withdraw
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Referral Income </b>
                          </td>

                          <td class="td_box"> $ 51 </td>
                          <td class="td_box">$ 50</td>
                          <td class="td_box">$ 1</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer1">
                              Transfer To My Wallet</Link>
                             
                            
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                             
                              
                           
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Level Income </b>
                          </td>

                          <td class="td_box"> $ 9.5 </td>
                          <td class="td_box">$ 5</td>
                          <td class="td_box">$ 4.5</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer2">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Upgrade Income </b>
                          </td>

                          <td class="td_box"> $ 45 </td>
                          <td class="td_box">$ 45</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer3">
                              Transfer To My Wallet</Link>
                       
                          </td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                        
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Basic Pool </b>
                          </td>

                          <td class="td_box"> $ 14 </td>
                          <td class="td_box">$ 10</td>
                          <td class="td_box">$ 4</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer4">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Bronze Pool </b>
                          </td>

                          <td class="td_box"> $ 12 </td>
                          <td class="td_box">$ 10</td>
                          <td class="td_box">$ 2</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer5">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Silver Pool </b>
                          </td>

                          <td class="td_box"> $ 6 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 6</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer6">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Gold Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer7">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Gold Star Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer8">
                              Transfer To My Wallet</Link>
                          </td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Platinum Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer9">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Pearl Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer10">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Ruby Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer11">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Emerald Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer12">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Diamond Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer13">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Antimatter Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer14">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Crown Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer15">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Patreon Malaysia Pool </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer16">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>4 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 36 </td>
                          <td class="td_box">$ 35</td>
                          <td class="td_box">$ 1</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer17">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>16 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 103 </td>
                          <td class="td_box">$ 100</td>
                          <td class="td_box">$ 3</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer18">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>64 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer19">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>256 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer20">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>1024 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer21">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>4096 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer22">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>16324 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer23">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>32648 Star Club Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer24">
                              Transfer To My Wallet</Link>
                          </td>

                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/otp">
                          Fund Withdraw</Link>
                          </td>
                        </tr>

                        <tr>
                          <td
                            class="maintxt"
                            nowrap="nowrap"
                            style={{ textAlign: "left" }}
                          >
                            <b>Reward Income </b>
                          </td>

                          <td class="td_box"> $ 0 </td>
                          <td class="td_box">$ 0</td>
                          <td class="td_box">$ 0</td>
                          <td nowrap="nowrap" style={{ textAlign: "center" }}>
                          <Link to="/transfer25">
                              Transfer To My Wallet</Link>
                          </td>

                          <td
                            nowrap="nowrap"
                            style={{ textAlign: "center" }}
                          ></td>
                        </tr>

                        <tr>
                          <td class=" ">
                            <strong>Total Amount</strong>
                          </td>
                          <td class="td_box">
                            <strong>276.5 </strong>
                          </td>
                          <td class="td_box">
                            <strong>255 </strong>
                          </td>
                          <td class="td_box">
                            <strong>21.5 </strong>
                          </td>
                          <td class="td_box" colspan="3"></td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incomewithdrawal;
