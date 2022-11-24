import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import Autopoolinc from "./Autopoolinc";

function Autopoolincome() {
  const userId1 = useSelector(state=>state.user.currentUser.userLogin. txn_info_BaIncome);
  const userId2 = useSelector(state=>state.user.currentUser.userLogin.txn_info_BrIncome);
  const userId3 = useSelector(state=>state.user.currentUser.userLogin.txn_info_SiIncome);
  const userId4 = useSelector(state=>state.user.currentUser.userLogin.txn_info_GIncome);
  const userId5 = useSelector(state=>state.user.currentUser.userLogin.txn_info_GSIncome);
  const userId6 = useSelector(state=>state.user.currentUser.userLogin.txn_info_PlIncome);
  const userId7 = useSelector(state=>state.user.currentUser.userLogin.txn_info_PeIncome);
  const userId8 = useSelector(state=>state.user.currentUser.userLogin.txn_info_RuIncome);
  const userId9 = useSelector(state=>state.user.currentUser.userLogin.txn_info_EmIncome);
  const userId10 = useSelector(state=>state.user.currentUser.userLogin.txn_info_DiIncome);
  const userId11 = useSelector(state=>state.user.currentUser.userLogin.txn_info_AnIncome);
  const userId12 = useSelector(state=>state.user.currentUser.userLogin.txn_info_CMIncome);
  const userId13 = useSelector(state=>state.user.currentUser.userLogin.txn_info_CFIncome);

  //basic******
  let credit=0;
  let debit=0;

  userId1.map((val)=>{
credit=val.earn;
debit= val.spend;

  })
  let amount=credit-debit;
   //Bronze******
   let credit1=0;
   let debit1=0;
 
   userId2.map((val)=>{
 credit1=val.earn;
 debit1= val.spend;
 
   })
   let amount1=credit1-debit1;
    //Silver******
  let credit2=0;
  let debit2=0;

  userId3.map((val)=>{
credit2=val.earn;
debit2= val.spend;

  })
  let amount2=credit2-debit2;
   //Gold******
   let credit3=0;
   let debit3=0;
 
   userId4.map((val)=>{
 credit3=val.earn;
 debit3= val.spend;
 
   })
   let amount3=credit3-debit3;
    //Gold star******
  let credit5=0;
  let debit5=0;

  userId5.map((val)=>{
credit5=val.earn;
debit5= val.spend;

  })
  let amount5=credit5-debit5;
   //Platinium******
   let credit6=0;
   let debit6=0;
 
   userId6.map((val)=>{
 credit6=val.earn;
 debit6= val.spend;
 
   })
   let amount6=credit6-debit6;
    //Pearl*****
  let credit7=0;
  let debit7=0;

  userId7.map((val)=>{
credit7=val.earn;
debit7= val.spend;

  })
  let amount7=credit7-debit7;
   //Rubi******
   let credit8=0;
   let debit8=0;
 
   userId8.map((val)=>{
 credit8=val.earn;
 debit8= val.spend;
 
   })
   let amount8=credit8-debit8;
//Emeerald***********
   let credit9=0;
   let debit9=0;
 
   userId9.map((val)=>{
 credit9=val.earn;
 debit9= val.spend;
 
   })
   let amount9=credit9-debit9;
//Dimond**************
   let credit10=0;
   let debit10=0;
 
   userId10.map((val)=>{
 credit10=val.earn;
 debit10= val.spend;
 
   })
   let amount10=credit10-debit10;
//Antimetter***********
   let credit11=0;
   let debit11=0;
 
   userId11.map((val)=>{
 credit11=val.earn;
 debit11= val.spend;
 
   })
   let amount11=credit11-debit11;
   //Crown*****************
   let credit12=0;
   let debit12=0;
 
   userId12.map((val)=>{
 credit12=val.earn;
 debit12= val.spend;
 
   })
   let amount12=credit12-debit12;
//Pateon********************
   let credit13=0;
   let debit13=0;
 
   userId13.map((val)=>{
 credit13=val.earn;
 debit13= val.spend;
 
   })
   let amount13=credit13-debit13;
  return (
    <div>
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <div class="account_inner text-light">
            <h1 class="title">Autopool Income</h1>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
                    style={{ color: "#FFFFFF" }}
                  >
                    <thead>
                      <tr>
                        <th
                          width="14%"
                          align="center"
                          colspan="2"
                          style={{ textAlign: "center" }}
                          class=""
                        >
                          Basic Pool&nbsp;{" "}
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
                  <Link to="./Autopoolinc">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item active">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Bronze Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincBR">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Silver Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincSI">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Gold Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincG">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item active">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Gold Star Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincGS">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Platinum Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincPL">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Pearl Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincPE">
                  
                    Pool Income Statement
                  </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Ruby Pool&nbsp;{" "}
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
                  <Link to="./AutopoolincRU">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Emerald Pool&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit9}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit9}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount9}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./AutopoolincEM">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Diamond Pool&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit10}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit10}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount10}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./AutopoolincDI">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Antimatter Pool&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit11}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit11}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount11}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./AutopoolincAN">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Crown Pool&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit12}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit12}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount12}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./AutopoolincCR">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
            <div class="col-md-4  ">
              <div class="how-item ">
                <div class="how-content">
                  <table
                    width="100%"
                    border="0"
                    class="table table-bordered "
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
                          Patreon Malaysia Pool&nbsp;{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Earned
                        </td>
                        <td align="right">${credit13}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Spend
                        </td>
                        <td align="right">${debit13}.00 </td>
                      </tr>
                      <tr align="center" class="tdOdd">
                        <td align="left" width="50%">
                          Balance
                        </td>
                        <td align="right">${amount13}.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="./AutopoolincPM">
                  
                  Pool Income Statement
                </Link>
                </div>
                Pool
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autopoolincome;
