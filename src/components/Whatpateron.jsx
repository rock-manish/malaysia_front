import React from 'react';
import Privatecomi from './Privatecomi';


function Whatpateron() {
  return (
 
    <div className='yyyy'>
    <div className="container-fluid ">
    <div className="container">
        <div className="row mt-5">
            <div className='col-6 bottle w3-animate-left'>
                <h1 className="heading text-light fs-1"><span   className="text-primary">LET'S TALK ABOUT</span><br/>
                     EUROPE TESLA?</h1>
                <div className="cars">
                    <div className="cars-A p-1 fs-2">
                        <h4>“Europe Tesla is one of those platforms that gives you space to work with people who know you, love you, and support you.”<br />
                            No matter what,creators always control how the work comes together.</h4>
                        <p className="fs-5 mt-2">Europe Tesla Crowd-Funding is a group of people all over the world who dream, believe and make it happen. The owner of the group is the people who are associated with this group. Based on the individual and people associated with the individual makes a group and their purchase of is equally distributed automatically by the software among the group as their income/profits.</p>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-5 w3-animate-right'>
                {/* <div className="responsive"> */}
                <img src="image.png" className="aboutus" width="650px" height="400px"/>
                {/* </div> */}
            </div>
        </div>
    </div>
</div>
{/* ..............step3............. */}
<div className="container-fluid">
    <div className="step3">
        {/* <img src={image1} alt="" /> */}
    </div>
    <div className="container">
        <div className="row tubelight">
            <div className="col-4">
                <h1 className="sz text-light mt-5">PATREON<br />MALAYSIA<br /><span className="text-warning">MAKE IDEAS <br />INTO REALITY.</span></h1>
            </div>
            <div className="col-8">
                {/* <img src={image3} alt="" /> */}
                <p className="text-light mt-5 fs-5 fw-normal">It's where creators share new visions for creative work with the communities that will come together to fund them.<br /><br />

                    Europe Tesla is an online crowd-funding platform that enables anyone across India to arise funds for healthcare, education, sports, dish relief and other personal causes, with great ease.</p>
            </div>
        </div>
    </div>
</div>
{/* ................step4.......... */}
<div className="container-fluid">
    <div className="container">

        <div className="row">

            {/* using a login page like image */}
            <div className="col-3">
                <div className="incre">
                    <img src="image2.png" alt="" />
                </div>
            </div>
            {/* background image .......... */}

            <div className="col-3">
                <img src="image4.png" width="895px" height="550px" className="response res" />
            </div>

            < div className="col-3 lovguru">
                {/* REGISTRATION page in  */}
                <h1 className="decre">PRIVATE COMPANY<br />
                    <span className="text-warning">INCORPORATION</span></h1>

                <div className="column tube">
                    <div className="column1">

                        <p>REGISTRATION NO<br /> </p>
                        <h5 className='text-light fs-3  '>13446137</h5>
                        <hr  className="href"/>
                        <p>OFFICE ADDRESS<br /> </p>
                        <h6 className='text-light fs-3'>Coming soon</h6>
                        <hr className="href"/>
                        <button type="button" className="btn1 xxlg  btn-primary">DOWNLOAD CERTIFICATE</button>
                    </div>
                </div>

            </div>
            <div className="col-3">
                {/* button and content on image  */}

                <div className="top-bottom ">
                    <h1 className="text-light client seeco-11">THE SERVICE WHICH <br/>CLIENT'S TRUST</h1>
                    <button type="button" class=" btn1 wvh btn-secondary">OPEN INVESTER'S ACCOUNT</button>
                </div>
            </div>

        </div>
    </div>
</div>
    </div>
  );
}

export default Whatpateron;