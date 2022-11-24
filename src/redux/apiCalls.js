import { loginStart, loginFailure, loginSuccess,logout } from "./userRedux"
import axios from "axios";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Cookie", "jwtoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE5YjBlMzg0NWMxYzJlMmFhODhhMTgiLCJpYXQiOjE2NjI2MzU1OTR9.0bjx_oCEe6T4eQz0qPL6Pbo2HN47aP6A2hkpmSFqAqc");

const BASE_URL = "http://localhost:3002";
const publicRequest = axios.create({
  baseUrl: BASE_URL
})

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("http://localhost:3002/login", user);
    dispatch(loginSuccess(res.data));
    alert("done");
  } catch (err) {
    dispatch(loginFailure());
    alert("user not exist")
  }
};

export const Logout = (dispatch) =>{
  dispatch(logout());
}