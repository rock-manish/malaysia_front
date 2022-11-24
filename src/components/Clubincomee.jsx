import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

function Clubincomee() {
  const userId1 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_4);
  const userId2 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_16);
  const userId3 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_64);
  const userId4 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_256);
  const userId5 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_1024);
  const userId6 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_4096);
  const userId7 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_16324);
  const userId8 = useSelector(state=>state.user.currentUser.userLogin.txn_info_star_32648);

  //4 star******
  let credit=0;
  let debit=0;

  userId1.map((val)=>{
credit=val.credit_amt;
debit= val.debit_amt

  })
  let amount=credit-debit;
   //16 star******
   let credit1=0;
   let debit1=0;
 
   userId2.map((val)=>{
 credit1=val.credit_amt;
 debit1= val.debit_amt
 
   })
   let amount1=credit-debit;
    //64 star******
  let credit2=0;
  let debit2=0;

  userId3.map((val)=>{
credit2=val.credit_amt;
debit2= val.debit_amt

  })
  let amount2=credit-debit;
   //256 star******
   let credit3=0;
   let debit3=0;
 
   userId4.map((val)=>{
 credit3=val.credit_amt;
 debit3= val.debit_amt
 
   })
   let amount3=credit-debit;
    //1024 star******
  let credit5=0;
  let debit5=0;

  userId5.map((val)=>{
credit5=val.credit_amt;
debit5= val.debit_amt

  })
  let amount5=credit-debit;
   //4096 star******
   let credit6=0;
   let debit6=0;
 
   userId6.map((val)=>{
 credit6=val.credit_amt;
 debit6= val.debit_amt
 
   })
   let amount6=credit-debit;
    //16324 star******
  let credit7=0;
  let debit7=0;

  userId7.map((val)=>{
credit7=val.credit_amt;
debit7= val.debit_amt

  })
  let amount7=credit-debit;
   //32648 star******
   let credit8=0;
   let debit8=0;
 
   userId8.map((val)=>{
 credit8=val.credit_amt;
 debit8= val.debit_amt
 
   })
   let amount8=credit-debit;
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title"> Club Income</h1>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{color:"#FFFFFF"}}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          4 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    
                    
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star4">
                  
                    Club Income Statement
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item active">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{color:"#FFFFFF"}}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          16 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit1}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit1}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount1}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star16">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          64 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit2}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit2}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount2}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star64">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item active">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          256 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit3}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit3}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount3}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star256">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          1024 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit5}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit5}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount5}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star1024">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item active">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          4096 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit6}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit6}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount6}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star4096">
                  
                    Club Income Statement
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          16324 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit7}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit7}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount7}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star16324">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered"
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class="text-uppercase"
                        >
                          32648 Star Club&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                     
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit8}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit8}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount8}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./Star32648">
                  
                  Club Income Statement
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubincomee;
