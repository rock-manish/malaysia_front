import React from "react";

function Withdrawalhistory() {
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 ref-inc">
          <div class="account_inner text-light">
            <h1 class="title">History </h1>

            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="2"
              cellspacing="2"
              class="td_box"
            >
              <tbody>
                <tr>
                  <td valign="top" height="250">
                    {/*<!--main  content table start -->*/}

                    <form
                      method="post"
                      name="form1"
                      id="form1"
                      onsubmit="confirm_submit(this)"
                    >
                      <table
                        width="100%"
                        border="0"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tbody>
                          <tr valign="top">
                            <td align="center">
                              <br />

                              <table
                                width="100%"
                                border="0"
                                cellpadding="1"
                                cellspacing="2"
                                class="table table-bordered"
                                style={{ color: "#FFFFFF" }}
                              >
                                <thead>
                                  <tr>
                                    <th width="14%" align="left" valign="top">
                                      {" "}
                                      Dated{" "}
                                    </th>
                                    <th width="40%" align="left" valign="top">
                                      {" "}
                                      &nbsp;Transaction Description{" "}
                                    </th>
                                    <th width="30%" align="left" valign="top">
                                      {" "}
                                      UTR/Txn No{" "}
                                    </th>
                                    <th width="10%" align="left" valign="top">
                                      {" "}
                                      Status{" "}
                                    </th>

                                    <th width="20%" align="left" valign="top">
                                      {" "}
                                      &nbsp;Amount{" "}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="maintxt">
                                    <td
                                      colspan="5"
                                      class="smalltxt"
                                      align="center"
                                      height="50"
                                    >
                                      Transaction details not found{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      valign="top"
                                      align="center"
                                      colspan="5"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                              <br />
                              <br />
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                    </form>
                    {/*main content table end */}
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

export default Withdrawalhistory;
