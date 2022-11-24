import React from "react";
import {useState,useEffect} from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Getintouch from "./pages/Getintouch";
import Faq from "./pages/Faq";
import Investmentplan from "./pages/Investmentplan";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Solu from "./pages/Solu";
import Fogotpassword from "./pages/Fogotpassword"
import Admin from "./pages/Admin";
import Dropdown from "./pages/Dropdown";
import A3 from "./pages/A3";
import Navbar11 from "./components/Navbar11";
import Autopoolinc from "./components/Autopoolinc";
import AutopoolincBR from "./components/AutopoolincBR";
import AutopoolincSI from "./components/AutopoolincSI";
import AutopoolincG from "./components/AutopoolincG";
import AutopoolincGS from "./components/AutopoolincGS";
import AutopoolincPL from "./components/AutopoolincPL";
import AutopoolincPE from "./components/AutopoolincPE";
import AutopoolincRU from "./components/AutopoolincRU";
import AutopoolincEM from "./components/AutopoolincEM";
import AutopoolincDI from "./components/AutopoolincDI";
import AutopoolincAN from "./components/AutopoolincAN";
import AutopoolincCR from "./components/AutopoolincCR";
import AutopoolincPM from "./components/AutopoolincPM";
import Star4 from "./components/Star4";
import Star16 from "./components/Star16";
import Star64 from "./components/Star64";
import Star256 from "./components/Star256";
import Star1024 from "./components/Star1024";
import Star4096 from "./components/Star4096";
import Star16324 from "./components/Star16324";
import Star32648 from "./components/Star32648";
import {useSelector} from "react-redux";

import Transfertomywallet1 from "./components/TransfertomywalletRef"
import Transfertomywallet2 from "./components/TransfertomywalletLevel"
import Transfertomywallet3 from "./components/TransfertomywalletUpgrade"
import Transfertomywallet4 from "./components/TransfertomywalletBasic"
import Transfertomywallet5 from "./components/TransfertomywalletBronze"
import Transfertomywallet6 from "./components/TransfertomywalletSilver"
import Transfertomywallet7 from "./components/TransfertomywalletGold"
import Transfertomywallet8 from "./components/TransfertomywalletGoldStar";
import Transfertomywallet9 from "./components/TransfertomywalletPla";
import Transfertomywallet10 from "./components/TransfertomywalletPer";
import Transfertomywallet11 from "./components/TransfertomywalletRu";
import Transfertomywallet12 from "./components/TransfertomywalletEm";
import Transfertomywallet13 from "./components/TransfertomywalletDim";
import Transfertomywallet14 from "./components/TransfertomywalletAnti";
import Transfertomywallet15 from "./components/TransfertomywalletCrown";
import Transfertomywallet16 from "./components/TransfertomywalletPm";
import Transfertomywallet17 from "./components/TransfertomywalletStar4";
import Transfertomywallet18 from "./components/TransfertomywalletStar16";
import Transfertomywallet19 from "./components/TransfertomywalletStar64";
import Transfertomywallet20 from "./components/TransfertomywalletStar256";
import Transfertomywallet21 from "./components/TransfertomywalletStar1024";
import Transfertomywallet22 from "./components/TransfertomywalletStar4096";
import Transfertomywallet23 from "./components/TransfertomywalletStar16324";
import Transfertomywallet24 from "./components/TransfertomywalletStar32648";
import Transfertomyaccount from "./components/Transfertomyaccount";

import Verifyotp from "./components/SendOtp";
import Verifyotp1 from "./components/Verifyotp1";



function App() {

  // const userId = useSelector(state=>state.user.currentUser.userLogin._id)
  const user = useSelector(state=>state.user.currentUser);
// //Upgrade Income****************************************
//   const ReferralUpdate=async()=>{
 
//     try{
//       const res=await fetch(`/ReferralUpdate/${userId}`,{
//         method:"GET",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },credentials:"include"
//       })
//     const data=await res.json();
  
    
//     }catch(err){
//      console.log(err)
//     }
    
//   }
  
//     useEffect(()=>{
//       ReferralUpdate();
//     },[])
//  //***************************************************** */
//  //levelUpdate Income****************************************
//  const levelUpdate=async()=>{
 
//   try{
//     const res=await fetch(`/levelUpdate/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     levelUpdate();
//   },[])
// //***************************************************** */
// //BasicSmartPool Income****************************************
// const BasicSmartPool=async()=>{
 
//   try{
//     const res=await fetch(`/BasicSmartPool/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     BasicSmartPool();
//   },[])
// //***************************************************** */
// //BronzeStatus Income****************************************
// const BronzeStatus=async()=>{
 
//   try{
//     const res=await fetch(`/BronzeStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     BronzeStatus();
//   },[])
// //***************************************************** */
// //SilverStatus Income****************************************
// const SilverStatus=async()=>{
 
//   try{
//     const res=await fetch(`/SilverStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     SilverStatus();
//   },[])
// //***************************************************** */

// //GoldStatus Income****************************************
// const GoldStatus=async()=>{
 
//   try{
//     const res=await fetch(`/GoldStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     GoldStatus();
//   },[])
// //***************************************************** */
// //GoldStarStatus Income****************************************
// const GoldStarStatus=async()=>{
 
//   try{
//     const res=await fetch(`/GoldStarStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     GoldStarStatus();
//   },[])
// //***************************************************** */
// //PlatinumStatus Income****************************************
// const PlatinumStatus=async()=>{
 
//   try{
//     const res=await fetch(`/PlatinumStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     PlatinumStatus();
//   },[])
// //***************************************************** */

// //PearlStatus Income****************************************
// const PearlStatus=async()=>{
 
//   try{
//     const res=await fetch(`/PearlStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     PearlStatus();
//   },[])
// //***************************************************** */
// //RubyStatus Income****************************************
// const RubyStatus=async()=>{
 
//   try{
//     const res=await fetch(`/RubyStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     RubyStatus();
//   },[])
// //***************************************************** */
//  //EmeraldStatus Income****************************************
// const EmeraldStatus=async()=>{
 
//   try{
//     const res=await fetch(`/EmeraldStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     EmeraldStatus();
//   },[])
// //***************************************************** */

// //DimondStatus Income****************************************
// const DimondStatus=async()=>{
 
//   try{
//     const res=await fetch(`/DimondStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     DimondStatus();
//   },[])
// //***************************************************** */

// //AntimatterStatus Income****************************************
// const AntimatterStatus=async()=>{
 
//   try{
//     const res=await fetch(`/AntimatterStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     AntimatterStatus();
//   },[])
// //***************************************************** */
// //CrownStatus Income****************************************
// const CrownStatus=async()=>{
 
//   try{
//     const res=await fetch(`/CrownStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     CrownStatus();
//   },[])
// //***************************************************** */

// //CFStatus Income****************************************
// const CFStatus=async()=>{
 
//   try{
//     const res=await fetch(`/CFStatus/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     CFStatus();
//   },[])
//***************************************************** */

//clubIncome Income****************************************
// const clubIncome=async()=>{
 
//   try{
//     const res=await fetch(`/clubIncome/${userId}`,{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },credentials:"include"
//     })
//   const data=await res.json();

  
//   }catch(err){
//    console.log(err)
//   }
  
// }

//   useEffect(()=>{
//     clubIncome();
//   },[])
//***************************************************** */


  return (
    <div>
    <Navbar11/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/investmentplan" element={<Investmentplan />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/getintouch" element={<Getintouch />} />
        <Route path="/login" element={user? <Navigate to='/a3'/>: <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/solu" element={<Solu />} />
        <Route path="/fogotpassword" element={<Fogotpassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/a3/Autopoolinc" element={<Autopoolinc />} />
        <Route path="/a3/AutopoolincBR" element={<AutopoolincBR />} />
        <Route path="/a3/AutopoolincSI" element={<AutopoolincSI />} />
        <Route path="/a3/AutopoolincG" element={<AutopoolincG />} />
        <Route path="/a3/AutopoolincGS" element={<AutopoolincGS />} />
        <Route path="/a3/AutopoolincPL" element={<AutopoolincPL />} />
        <Route path="/a3/AutopoolincPE" element={<AutopoolincPE />} />
        <Route path="/a3/AutopoolincRU" element={<AutopoolincRU />} />
        <Route path="/a3/AutopoolincEM" element={<AutopoolincEM />} />
        <Route path="/a3/AutopoolincDI" element={<AutopoolincDI />} />
        <Route path="/a3/AutopoolincAN" element={<AutopoolincAN />} />
        <Route path="/a3/AutopoolincCR" element={<AutopoolincCR />} />
        <Route path="/a3/AutopoolincPM" element={<AutopoolincPM />} />
        <Route path="/a3/Star4" element={<Star4 />} />
        <Route path="/a3/Star16" element={<Star16 />} />
        <Route path="/a3/Star64" element={<Star64 />} />
        <Route path="/a3/Star256" element={<Star256 />} />
        <Route path="/a3/Star1024" element={<Star1024 />} />
        <Route path="/a3/Star4096" element={<Star4096 />} />
        <Route path="/a3/Star16324" element={<Star16324 />} />
        <Route path="/a3/Star32648" element={<Star32648 />} />
        <Route path="/transfer1" element={<Transfertomywallet1 />} />
        <Route path="/transfer2" element={<Transfertomywallet2 />} />
        <Route path="/transfer3" element={<Transfertomywallet3 />} />
        <Route path="/transfer4" element={<Transfertomywallet4 />} />
        <Route path="/transfer5" element={<Transfertomywallet5 />} />
        <Route path="/transfer6" element={<Transfertomywallet6 />} />
        <Route path="/transfer7" element={<Transfertomywallet7 />} />
        <Route path="/transfer8" element={<Transfertomywallet8 />} />
        <Route path="/transfer9" element={<Transfertomywallet9 />} />
        <Route path="/transfer10" element={<Transfertomywallet10 />} />
        <Route path="/transfer11" element={<Transfertomywallet11 />} />
        <Route path="/transfer12" element={<Transfertomywallet12 />} />
        <Route path="/transfer13" element={<Transfertomywallet13 />} />
        <Route path="/transfer14" element={<Transfertomywallet14 />} />
        <Route path="/transfer15" element={<Transfertomywallet15 />} />
        <Route path="/transfer16" element={<Transfertomywallet16 />} />
        <Route path="/transfer17" element={<Transfertomywallet17 />} />
        <Route path="/transfer18" element={<Transfertomywallet18 />} />
        <Route path="/transfer19" element={<Transfertomywallet19 />} />
        <Route path="/transfer20" element={<Transfertomywallet20 />} />
        <Route path="/transfer21" element={<Transfertomywallet21 />} />
        <Route path="/transfer22" element={<Transfertomywallet22 />} />
        <Route path="/transfer23" element={<Transfertomywallet23 />} />
        <Route path="/transfer24" element={<Transfertomywallet24 />} />
        <Route path="/otp" element={<Verifyotp />} />
        <Route path="/account" element={<Transfertomyaccount />} />
        <Route path="/verifyotp" element={<Verifyotp1 />} />

        <Route path="/a3" element={user?<A3 />:<Login/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
