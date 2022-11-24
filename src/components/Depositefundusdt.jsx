import React from 'react'

function Depositefundusdt() {
  return (
    <div>
        <div class="row text-light ref-inc">
          <div class="col-lg-12 col-sm-12">
             <div class="account_inner"> 
<h1 class="title"> DEPOSIT REQUEST </h1>

 {/* Card Body  */}

<div class="dt-card__body">

 {/* Form  */}

<p align="center" style={{color:"#FF0000"}}>
   </p>
<form method="post" name="form" id="contactform" class="forms-sample" enctype="multipart/form-data" onsubmit="return validateForm(this,0,0,0,1,8);"/>

{/* <div class="form-group"> <span for="exampleInputUsername1">Receiving Company</span>
  <input name="creq_bank" type="text"  class="form-control" id="creq_bank"  value="" alt="blank" placeholder="Receiving Company" required/>
</div> */}

<div class="form-group"> <span for="exampleInputUsername1">TRC777 USDT Deposit Address</span><br/>
   MFtBhgbTZsdpHpPfgTUiXhyPPyewcD3saJ8dfmU<br/>
 <img src="deposit_address_usdt.png" alt='img' width="400"/>
</div>

<div class="form-group"> <span for="exampleInputUsername1">Receiving Address</span>
  <input name="creq_bank_acc" type="text" class="form-control" id="creq_bank_acc" value="" alt="blank" placeholder="Receiving Address" required=""/>
</div>
<div class="form-group"> <span for="exampleInputUsername1">Deposit Date (yyyy-mm-dd)</span>
    <input name="creq_bank_date" type="date" class="form-control" id="creq_bank_date" value="" placeholder="Deposit Date (yyyy-mm-dd)" required=""/>
</div>
<div class="form-group"> <span for="exampleInputUsername1">Deposit Amount</span>
  <input name="creq_amount" type="text" class="form-control" id="creq_amount" value="" alt="number" placeholder="Deposit Amount" required=""/>
</div>
 <div class="form-group"> <span for="exampleInputUsername1">Deposit Receipt (Please upload copy of your receipt)</span><br/>
  <input name="creq_receipt" type="file" class="form-control" id="creq_receipt" required=""/>
 </div>
  <div class="form-group"> <span for="exampleInputUsername1">
  <textarea name="creq_remark" cols="40" rows="3" required="" class="form-control" id="creq_remark" placeholder="Transaction ID/Hash Code"></textarea>
</span></div>

<div class="form-group"> 
 <button type="submit" name="Submit" value="Confirm Payment" class="mt-2 btn btn-primary mr-2">Confirm Deposit</button>
</div>


{/* form group */}

</div>
</div>

 </div></div>
    </div>
  )
}

export default Depositefundusdt