import React from "react";

function Depositecrypto() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title"> Pay Crypto Currency</h1>

            <br />

            <form
              method="post"
              name="form1"
              id="form1"
              onsubmit="return validateForm(this,0,0,0,1,8);"
            >
              <table
                width="100%"
                border="0"
                cellpadding="2"
                cellspacing="2"
                class="table table-bordered text-light"
                style={{ color: "#FFFFFF;" }}
              >
                <tbody>
                  <tr>
                    
                    <td width="20%" align="right" nowrap="nowrap">
                      Amount (USDT):{" "}
                    </td>
                    <td width="60%">
                      
                      <input
                        type="text"
                        name="pay_amount"
                        class="form-control input-type-1"
                        value=""
                        alt="number|2"
                        emsg="Credit/debit amount can not be blank"
                      />{" "}
                      <span style={{color:"#fFF", fontSize:"10px"}}>
                        Note: Gas fee of coinpayments &amp; sender wallet
                        exclude{" "}
                      </span>{" "}
                    </td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td height="30" colspan="3">
                      <input type="hidden" name="action" value="Continue" />
                      <input
                        name="Submit"
                        type="submit"
                        class="small-button-blue"
                        value="Continue"
                      />
                      &nbsp;&nbsp;
                      <input
                        name="Reset"
                        type="reset"
                        class="button"
                        value=" Reset "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Depositecrypto;
