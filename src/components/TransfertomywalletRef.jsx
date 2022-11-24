import React from 'react'
import {useSelector} from "react-redux" 



function TransfertomywalletRef() {

    const userId1 = useSelector(state=>state.user.currentUser.userLogin._id);
    const income = useSelector(state=>state.user.currentUser.userLogin.
        referral_income);
const [amount , setAmount] =React.useState("")
const [desc , setDesc] =React.useState("")
console.log(desc)
const addmoney = parseInt(amount)
console.log(addmoney)
const transferReferralIncome =async ()=>{

    const res = await fetch(`/fundtransferReferral/${userId1}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
         amount:addmoney,
         desc:desc

        })
      
    })
    const data=await res.json();
    alert(data);
}
    return (
        <div className="container-fluid y-axis pt-5">

        <div className="container">
            <div className="row">
                <h1 className='text-light'>Transfer To My Wallet</h1>
                <table class="table table-bordered">
  
  <tbody className="">
    <tr  className="text-light ">
      <th className='text-end' scope="row ">Account Balance</th>
      <td>{income}</td>
    
     
    </tr>
    <tr className="text-light text-end">
      <th scope="row">Transfer Fund</th>
      <td><select class="form-select" aria-label="Default select example" name="addmoney" value={amount} onChange={(e)=>setAmount(e.target.value)}>
  <option selected >please select</option>
                                <option value="5">
                                $5.00                        </option>
                            <option value="10">
                                $10.00                        </option>
                            <option value="15">
                                $15.00                        </option>
                            <option value="20">
                                $20.00                        </option>
                            <option value="25">
                                $25.00                        </option>
                            <option value="30">
                                $30.00                        </option>
                            <option value="35">
                                $35.00                        </option>
                            <option value="40">
                                $40.00                        </option>
                            <option value="45">
                                $45.00                        </option>
                            <option value="50">
                                $50.00                        </option>
                            <option value="55">
                                $55.00                        </option>
                            <option value="60">
                                $60.00                        </option>
                            <option value="65">
                                $65.00                        </option>
                            <option value="70">
                                $70.00                        </option>
                            <option value="75">
                                $75.00                        </option>
                            <option value="80">
                                $80.00                        </option>
                            <option value="85">
                                $85.00                        </option>
                            <option value="90">
                                $90.00                        </option>
                            <option value="95">
                                $95.00                        </option>
                            <option value="100">
                                $100.00                        </option>
                            <option value="105">
                                $105.00                        </option>
                            <option value="110">
                                $110.00                        </option>
                            <option value="115">
                                $115.00                        </option>
                            <option value="120">
                                $120.00                        </option>
                            <option value="125">
                                $125.00                        </option>
                            <option value="130">
                                $130.00                        </option>
                            <option value="135">
                                $135.00                        </option>
                            <option value="140">
                                $140.00                        </option>
                            <option value="145">
                                $145.00                        </option>
                            <option value="150">
                                $150.00                        </option>
                            <option value="155">
                                $155.00                        </option>
                            <option value="160">
                                $160.00                        </option>
                            <option value="165">
                                $165.00                        </option>
                            <option value="170">
                                $170.00                        </option>
                            <option value="175">
                                $175.00                        </option>
                            <option value="180">
                                $180.00                        </option>
                            <option value="185">
                                $185.00                        </option>
                            <option value="190">
                                $190.00                        </option>
                            <option value="195">
                                $195.00                        </option>
                            <option value="200">
                                $200.00                        </option>
                            <option value="205">
                                $205.00                        </option>
                            <option value="210">
                                $210.00                        </option>
                            <option value="215">
                                $215.00                        </option>
                            <option value="220">
                                $220.00                        </option>
                            <option value="225">
                                $225.00                        </option>
                            <option value="230">
                                $230.00                        </option>
                            <option value="235">
                                $235.00                        </option>
                            <option value="240">
                                $240.00                        </option>
                            <option value="245">
                                $245.00                        </option>
                            <option value="250">
                                $250.00                        </option>
                            <option value="255">
                                $255.00                        </option>
                            <option value="260">
                                $260.00                        </option>
                            <option value="265">
                                $265.00                        </option>
                            <option value="270">
                                $270.00                        </option>
                            <option value="275">
                                $275.00                        </option>
                            <option value="280">
                                $280.00                        </option>
                            <option value="285">
                                $285.00                        </option>
                            <option value="290">
                                $290.00                        </option>
                            <option value="295">
                                $295.00                        </option>
                            <option value="300">
                                $300.00                        </option>
                            <option value="305">
                                $305.00                        </option>
                            <option value="310">
                                $310.00                        </option>
                            <option value="315">
                                $315.00                        </option>
                            <option value="320">
                                $320.00                        </option>
                            <option value="325">
                                $325.00                        </option>
                            <option value="330">
                                $330.00                        </option>
                            <option value="335">
                                $335.00                        </option>
                            <option value="340">
                                $340.00                        </option>
                            <option value="345">
                                $345.00                        </option>
                            <option value="350">
                                $350.00                        </option>
                            <option value="355">
                                $355.00                        </option>
                            <option value="360">
                                $360.00                        </option>
                            <option value="365">
                                $365.00                        </option>
                            <option value="370">
                                $370.00                        </option>
                            <option value="375">
                                $375.00                        </option>
                            <option value="380">
                                $380.00                        </option>
                            <option value="385">
                                $385.00                        </option>
                            <option value="390">
                                $390.00                        </option>
                            <option value="395">
                                $395.00                        </option>
                            <option value="400">
                                $400.00                        </option>
                            <option value="405">
                                $405.00                        </option>
                            <option value="410">
                                $410.00                        </option>
                            <option value="415">
                                $415.00                        </option>
                            <option value="420">
                                $420.00                        </option>
                            <option value="425">
                                $425.00                        </option>
                            <option value="430">
                                $430.00                        </option>
                            <option value="435">
                                $435.00                        </option>
                            <option value="440">
                                $440.00                        </option>
                            <option value="445">
                                $445.00                        </option>
                            <option value="450">
                                $450.00                        </option>
                            <option value="455">
                                $455.00                        </option>
                            <option value="460">
                                $460.00                        </option>
                            <option value="465">
                                $465.00                        </option>
                            <option value="470">
                                $470.00                        </option>
                            <option value="475">
                                $475.00                        </option>
                            <option value="480">
                                $480.00                        </option>
                            <option value="485">
                                $485.00                        </option>
                            <option value="490">
                                $490.00                        </option>
                            <option value="495">
                                $495.00                        </option>
                            <option value="500">
                                $500.00                        </option>
                            <option value="505">
                                $505.00                        </option>
                            <option value="510">
                                $510.00                        </option>
                            <option value="515">
                                $515.00                        </option>
                            <option value="520">
                                $520.00                        </option>
                            <option value="525">
                                $525.00                        </option>
                            <option value="530">
                                $530.00                        </option>
                            <option value="535">
                                $535.00                        </option>
                            <option value="540">
                                $540.00                        </option>
                            <option value="545">
                                $545.00                        </option>
                            <option value="550">
                                $550.00                        </option>
                            <option value="555">
                                $555.00                        </option>
                            <option value="560">
                                $560.00                        </option>
                            <option value="565">
                                $565.00                        </option>
                            <option value="570">
                                $570.00                        </option>
                            <option value="575">
                                $575.00                        </option>
                            <option value="580">
                                $580.00                        </option>
                            <option value="585">
                                $585.00                        </option>
                            <option value="590">
                                $590.00                        </option>
                            <option value="595">
                                $595.00                        </option>
                            <option value="600">
                                $600.00                        </option>
                            <option value="605">
                                $605.00                        </option>
                            <option value="610">
                                $610.00                        </option>
                            <option value="615">
                                $615.00                        </option>
                            <option value="620">
                                $620.00                        </option>
                            <option value="625">
                                $625.00                        </option>
                            <option value="630">
                                $630.00                        </option>
                            <option value="635">
                                $635.00                        </option>
                            <option value="640">
                                $640.00                        </option>
                            <option value="645">
                                $645.00                        </option>
                            <option value="650">
                                $650.00                        </option>
                            <option value="655">
                                $655.00                        </option>
                            <option value="660">
                                $660.00                        </option>
                            <option value="665">
                                $665.00                        </option>
                            <option value="670">
                                $670.00                        </option>
                            <option value="675">
                                $675.00                        </option>
                            <option value="680">
                                $680.00                        </option>
                            <option value="685">
                                $685.00                        </option>
                            <option value="690">
                                $690.00                        </option>
                            <option value="695">
                                $695.00                        </option>
                            <option value="700">
                                $700.00                        </option>
                            <option value="705">
                                $705.00                        </option>
                            <option value="710">
                                $710.00                        </option>
                            <option value="715">
                                $715.00                        </option>
                            <option value="720">
                                $720.00                        </option>
                            <option value="725">
                                $725.00                        </option>
                            <option value="730">
                                $730.00                        </option>
                            <option value="735">
                                $735.00                        </option>
                            <option value="740">
                                $740.00                        </option>
                            <option value="745">
                                $745.00                        </option>
                            <option value="750">
                                $750.00                        </option>
                            <option value="755">
                                $755.00                        </option>
                            <option value="760">
                                $760.00                        </option>
                            <option value="765">
                                $765.00                        </option>
                            <option value="770">
                                $770.00                        </option>
                            <option value="775">
                                $775.00                        </option>
                            <option value="780">
                                $780.00                        </option>
                            <option value="785">
                                $785.00                        </option>
                            <option value="790">
                                $790.00                        </option>
                            <option value="795">
                                $795.00                        </option>
                            <option value="800">
                                $800.00                        </option>
                            <option value="805">
                                $805.00                        </option>
                            <option value="810">
                                $810.00                        </option>
                            <option value="815">
                                $815.00                        </option>
                            <option value="820">
                                $820.00                        </option>
                            <option value="825">
                                $825.00                        </option>
                            <option value="830">
                                $830.00                        </option>
                            <option value="835">
                                $835.00                        </option>
                            <option value="840">
                                $840.00                        </option>
                            <option value="845">
                                $845.00                        </option>
                            <option value="850">
                                $850.00                        </option>
                            <option value="855">
                                $855.00                        </option>
                            <option value="860">
                                $860.00                        </option>
                            <option value="865">
                                $865.00                        </option>
                            <option value="870">
                                $870.00                        </option>
                            <option value="875">
                                $875.00                        </option>
                            <option value="880">
                                $880.00                        </option>
                            <option value="885">
                                $885.00                        </option>
                            <option value="890">
                                $890.00                        </option>
                            <option value="895">
                                $895.00                        </option>
                            <option value="900">
                                $900.00                        </option>
                            <option value="905">
                                $905.00                        </option>
                            <option value="910">
                                $910.00                        </option>
                            <option value="915">
                                $915.00                        </option>
                            <option value="920">
                                $920.00                        </option>
                            <option value="925">
                                $925.00                        </option>
                            <option value="930">
                                $930.00                        </option>
                            <option value="935">
                                $935.00                        </option>
                            <option value="940">
                                $940.00                        </option>
                            <option value="945">
                                $945.00                        </option>
                            <option value="950">
                                $950.00                        </option>
                            <option value="955">
                                $955.00                        </option>
                            <option value="960">
                                $960.00                        </option>
                            <option value="965">
                                $965.00                        </option>
                            <option value="970">
                                $970.00                        </option>
                            <option value="975">
                                $975.00                        </option>
                            <option value="980">
                                $980.00                        </option>
                            <option value="985">
                                $985.00                        </option>
                            <option value="990">
                                $990.00                        </option>
                            <option value="995">
                                $995.00                        </option>
                            <option value="1000">
                                $1,000.00                        </option>
                            <option value="1005">
                                $1,005.00                        </option>
                            <option value="1010">
                                $1,010.00                        </option>
                            <option value="1015">
                                $1,015.00                        </option>
                            <option value="1020">
                                $1,020.00                        </option>
                            <option value="1025">
                                $1,025.00                        </option>
                            <option value="1030">
                                $1,030.00                        </option>
                            <option value="1035">
                                $1,035.00                        </option>
                            <option value="1040">
                                $1,040.00                        </option>
                            <option value="1045">
                                $1,045.00                        </option>
                            <option value="1050">
                                $1,050.00                        </option>
                            <option value="1055">
                                $1,055.00                        </option>
                            <option value="1060">
                                $1,060.00                        </option>
                            <option value="1065">
                                $1,065.00                        </option>
                            <option value="1070">
                                $1,070.00                        </option>
                            <option value="1075">
                                $1,075.00                        </option>
                            <option value="1080">
                                $1,080.00                        </option>
                            <option value="1085">
                                $1,085.00                        </option>
                            <option value="1090">
                                $1,090.00                        </option>
                            <option value="1095">
                                $1,095.00                        </option>
                            <option value="1100">
                                $1,100.00                        </option>
                            <option value="1105">
                                $1,105.00                        </option>
                            <option value="1110">
                                $1,110.00                        </option>
                            <option value="1115">
                                $1,115.00                        </option>
                            <option value="1120">
                                $1,120.00                        </option>
                            <option value="1125">
                                $1,125.00                        </option>
                            <option value="1130">
                                $1,130.00                        </option>
                            <option value="1135">
                                $1,135.00                        </option>
                            <option value="1140">
                                $1,140.00                        </option>
                            <option value="1145">
                                $1,145.00                        </option>
                            <option value="1150">
                                $1,150.00                        </option>
                            <option value="1155">
                                $1,155.00                        </option>
                            <option value="1160">
                                $1,160.00                        </option>
                            <option value="1165">
                                $1,165.00                        </option>
                            <option value="1170">
                                $1,170.00                        </option>
                            <option value="1175">
                                $1,175.00                        </option>
                            <option value="1180">
                                $1,180.00                        </option>
                            <option value="1185">
                                $1,185.00                        </option>
                            <option value="1190">
                                $1,190.00                        </option>
                            <option value="1195">
                                $1,195.00                        </option>
                            <option value="1200">
                                $1,200.00                        </option>
                            <option value="1205">
                                $1,205.00                        </option>
                            <option value="1210">
                                $1,210.00                        </option>
                            <option value="1215">
                                $1,215.00                        </option>
                            <option value="1220">
                                $1,220.00                        </option>
                            <option value="1225">
                                $1,225.00                        </option>
                            <option value="1230">
                                $1,230.00                        </option>
                            <option value="1235">
                                $1,235.00                        </option>
                            <option value="1240">
                                $1,240.00                        </option>
                            <option value="1245">
                                $1,245.00                        </option>
                            <option value="1250">
                                $1,250.00                        </option>
                            <option value="1255">
                                $1,255.00                        </option>
                            <option value="1260">
                                $1,260.00                        </option>
                            <option value="1265">
                                $1,265.00                        </option>
                            <option value="1270">
                                $1,270.00                        </option>
                            <option value="1275">
                                $1,275.00                        </option>
                            <option value="1280">
                                $1,280.00                        </option>
                            <option value="1285">
                                $1,285.00                        </option>
                            <option value="1290">
                                $1,290.00                        </option>
                            <option value="1295">
                                $1,295.00                        </option>
                            <option value="1300">
                                $1,300.00                        </option>
                            <option value="1305">
                                $1,305.00                        </option>
                            <option value="1310">
                                $1,310.00                        </option>
                            <option value="1315">
                                $1,315.00                        </option>
                            <option value="1320">
                                $1,320.00                        </option>
                            <option value="1325">
                                $1,325.00                        </option>
                            <option value="1330">
                                $1,330.00                        </option>
                            <option value="1335">
                                $1,335.00                        </option>
                            <option value="1340">
                                $1,340.00                        </option>
                            <option value="1345">
                                $1,345.00                        </option>
                            <option value="1350">
                                $1,350.00                        </option>
                            <option value="1355">
                                $1,355.00                        </option>
                            <option value="1360">
                                $1,360.00                        </option>
                            <option value="1365">
                                $1,365.00                        </option>
                            <option value="1370">
                                $1,370.00                        </option>
                            <option value="1375">
                                $1,375.00                        </option>
                            <option value="1380">
                                $1,380.00                        </option>
                            <option value="1385">
                                $1,385.00                        </option>
                            <option value="1390">
                                $1,390.00                        </option>
                            <option value="1395">
                                $1,395.00                        </option>
                            <option value="1400">
                                $1,400.00                        </option>
                            <option value="1405">
                                $1,405.00                        </option>
                            <option value="1410">
                                $1,410.00                        </option>
                            <option value="1415">
                                $1,415.00                        </option>
                            <option value="1420">
                                $1,420.00                        </option>
                            <option value="1425">
                                $1,425.00                        </option>
                            <option value="1430">
                                $1,430.00                        </option>
                            <option value="1435">
                                $1,435.00                        </option>
                            <option value="1440">
                                $1,440.00                        </option>
                            <option value="1445">
                                $1,445.00                        </option>
                            <option value="1450">
                                $1,450.00                        </option>
                            <option value="1455">
                                $1,455.00                        </option>
                            <option value="1460">
                                $1,460.00                        </option>
                            <option value="1465">
                                $1,465.00                        </option>
                            <option value="1470">
                                $1,470.00                        </option>
                            <option value="1475">
                                $1,475.00                        </option>
                            <option value="1480">
                                $1,480.00                        </option>
                            <option value="1485">
                                $1,485.00                        </option>
                            <option value="1490">
                                $1,490.00                        </option>
                            <option value="1495">
                                $1,495.00                        </option>
                            <option value="1500">
                                $1,500.00                        </option>
</select></td>
      
      
    </tr>
    <tr  className="text-light text-end">
      <th scope="row">Specification</th>
     
      <td><div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={e=>(setDesc(e.target.value))}></textarea>
  <label for="floatingTextarea"></label>
</div></td>
    </tr>
    <tr  className="text-light">
      <th scope="row"></th>
     
      <td><button type="button" class="btn btn-warning" onClick={transferReferralIncome}>Submit</button></td>

   
     
    
    </tr>
  </tbody>
</table>
            </div>
        </div>
        </div>
    )
}

export default TransfertomywalletRef;