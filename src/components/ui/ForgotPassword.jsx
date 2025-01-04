import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOtpForRec, resetPassword, verifyOtp } from "../../store/authSlice";
import toast from "react-hot-toast";
import Loading from "./Loading";
import NewPassSet from "./NewPassSet";
import NewPassMsg from './NewPassMsg'

export default function ForgotPassword() {

  const [formData , setFormData] = useState({
    email: "",
    otp : ""
  })
  const [askOtp,setAskOtp] = useState(false)
  const [askNewPass,setAskNewPass] = useState(false)
  const [alertSuccess,setAlertSuccess] = useState(false)

  

  // setAskNewPass
  // setAlertSuccess

  const {otpLoading} = useSelector((state) => state.authSlice)
  
  const dispatch = useDispatch()

  const onsubmit = (e) => {
    e.preventDefault();
    // console.log("formData",formData);
    if(formData.email !== ""){
      dispatch(getOtpForRec(formData?.email))
      .then((data) => {
        console.log("data" , data.payload.success) 
        if(data.payload.success){
          toast.success(data.payload.message)
          setAskOtp(true)
        }else{
          toast.error(data.payload.message)
        }
      })
    }else{
      toast.error("Plz provide Email")
    }
    }

  const verifyOtpFun = (e) => {
    e.preventDefault();
    // console.log("formData",formData);
    if(formData.email !== "" && formData.otp !== ""){
      dispatch(verifyOtp(formData))
      .then((data) => {
        console.log("data" , data) 
        if(data.payload.success){
          toast.success(data.payload.message)
          setAskNewPass(true)
        }else{
          toast.error(data.payload.message)
        }
      })
    }else{
      toast.error("Plz provide all data ")
    }
  }

  const [newPass , setNewPass] = useState({
    password : "",
    confirmPassword : ""
  })

  const onsubmitNewPass = (e) => {
    e.preventDefault();


    if(newPass.password !== newPass.confirmPassword){
      return toast.error("Password and Confirm Password should be same")
   }

   console.log("formData?.email , newPass.password , formData?.otp" ,formData?.email , newPass.password , formData?.otp)


  const newPasswordFormData = {
    email : formData?.email ,
    password : newPass.password ,
    otp : formData?.otp
  }


    dispatch(resetPassword(newPasswordFormData))

    .then((data) => {
      console.log("data" , data)
      if(data.payload.success){
        
        toast.success(data.payload.message)
        // setAskNewPass(false)
        setAlertSuccess(true)
      }else{
        toast.error(data.payload.message)
      }
      })

}
        

  if(askNewPass){
    return(
      <>
      { alertSuccess ?  <NewPassMsg/>   :   <NewPassSet newPass ={ newPass} otpLoading={otpLoading} onsubmitNewPass={onsubmitNewPass}  setNewPass ={setNewPass} />}
      </>
    )

  }


  return (
    <div className=" bg-white w-[488px] px-[20px] py-5 shadow-lg m-3 ">
      <Link to="/authPage/login" className=" cursor-pointer" ><IoMdArrowBack size={25} className="my-2"  /></Link>
      <h1 className="font-bold text-[20px] mb-3 " >Forgot Password</h1>
      <p className="opacity-70 text-[15px] " >Enter your email address for which account you want to recover</p>

      <div className="flex flex-col " >
        <label className="font-bold text-[14px] mt-3  ">Email</label>
        <input
          value={formData.email} onChange={ (e) => setFormData({...formData , email : e.target.value}) }
          className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
          type="email"
          name="email"
          placeholder="your email"
        />

      { askOtp && <label className="font-bold text-[14px] mt-3  ">Otp</label>}
        { askOtp && <input
        value={formData.otp}
        onChange={(e) => setFormData({...formData , otp : e.target.value}) }
          className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
          type="number"
          placeholder="Otp"
        />}

        { askOtp ?  <button
          onClick={verifyOtpFun}
          disabled={otpLoading}
        className="bg-green-600 hover:bg-green-300 p-2 font-semibold rounded-xl mt-3 text-white">
          { otpLoading ? <Loading/> :"verify Otp"}
        </button>  : <button
          onClick={onsubmit}
          disabled={otpLoading}
        className="bg-green-600 hover:bg-green-300 p-2 font-semibold rounded-xl mt-3 text-white">
          { otpLoading ? <Loading/> :"Request an Otp"}
        </button>}
      </div>
    </div>
  );
}
