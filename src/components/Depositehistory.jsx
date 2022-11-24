import React from "react";

function Depositehistory() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title">Deposit Statement</h1>

            <p align="right"> </p>

            <table
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="table table-bordered"
              style={{color:"#FFFFFF"}}
            >
              <thead>
                <tr>
                  <th width="15%" class="text-uppercase">
                    Date{" "}
                  </th>
                  <th width="20%" class="text-uppercase">
                    Payment Mode
                  </th>
                  <th width="20%" class="text-uppercase">
                    UTR No
                  </th>
                  <th width="16%" class="text-uppercase">
                    Amount USDT (TRC20){" "}
                  </th>
                  {/*  <th width="16%" class="text-uppercase" >Amount INR </th>
			    	
				 		<th width="12%" class="text-uppercase">&nbsp;</th>
				 		<th width="12%" class="text-uppercase" >&nbsp; </th> 
             	<th width="16%" class="text-uppercase" >&nbsp;Deposit Date </th> */}

                  <th width="9%" class="text-uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="maintxt" style={{ borderColor: "#e3dede " }}>
                  <td colspan="9" class="error" align="center" height="50">
                    Deposit request not found{" "}
                  </td>
                </tr>
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

export default Depositehistory;
