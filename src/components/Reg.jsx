import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getOtpForReg, reg } from "../store/authSlice";
import EmailOtpMsg from "./ui/EmailOtpMsg";
import Loading from "./ui/Loading";

export default function Reg() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp : ""
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const {otpLoading ,isLoading } = useSelector(state => state.authSlice)
  const [askOtp,setAskOtp] = useState(false)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // const btnDesable = !formData.email || !formData.password
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailRegex.test(formData.email)){
      return toast.error("Invailed email");
    }
    if(formData.password !== formData.confirmPassword ){
        return toast.error("Passwords do not match");
    }

    if(!formData.otp ){
      return toast.error("Plz provide otp");
  }

    dispatch(reg(formData))
    .then((data) => {
      console.log("data",data)
      if(data?.payload?.success){
        toast.success(data?.payload?.message);
        setAskOtp(true)
      }else{
        toast.error(data?.payload?.message);
      }
    }) 
    // Add your logic here to handle form submission
    console.log(formData);
    };

//     const apiUrl = import.meta.env.VITE_API_URL;
// console.log('API URL:', apiUrl);


    const getOtp = async () => {
      if(!emailRegex.test(formData.email)){
        return toast.error("Invailed email");
      }

      
    if(formData.password !== formData.confirmPassword){
      return toast.error("Passwords do not match");
  }

      dispatch(getOtpForReg(formData?.email))
      .then((data) => {
        console.log("data",data)
        if(data?.payload?.success){
          toast.success(data?.payload?.message);
          setAskOtp(true)
        }else{
          toast.error(data?.payload?.message);
        }
      }) 

      
    }

    // console.log("import.meta.env.SERVER"  ,import.meta.env.VITE_API_URL_SERVE)

  // Check if the button should be disabled (at least one field is empty)
  const btnDisabled =
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.password.trim() ||
    !formData.confirmPassword.trim() 

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      {askOtp ? <div> <EmailOtpMsg email={formData?.email} formData={formData} setFormData={setFormData} isLoading={isLoading} handleSubmit={handleSubmit} /> </div>  : 
      <div className="bg-white w-[480px] px-[20px] py-5 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">Welcome to MIX GPT</h1>
        <p className="opacity-70">Create a free account by filling in the data below</p>

        <div className="flex flex-col mt-2">
          {/* Name Input */}
          <label className="font-bold text-[14px] mt-3">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="text"
            placeholder="Your name"
          />

          {/* Email Input */}
          <label className="font-bold text-[14px] mt-3">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="email"
            placeholder="Your email"
          />

          {/* Password Input */}
          <label className="font-bold text-[14px] mt-3">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="password"
            placeholder="Your password"
          />

          {/* Confirm Password Input */}
          <label className="font-bold text-[14px] mt-3">Repeat Password</label>
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-2 mt-1 rounded-md border border-[#EEEEF4]"
            type="password"
            placeholder="Repeat your password"
          />

          {/* Submit Button */}
          <button onClick={getOtp}
            disabled={btnDisabled || otpLoading  }
            className={`p-2 font-semibold text-white rounded-xl mt-7 ${
              btnDisabled ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {  otpLoading  ?<Loading/> : "Create Account"}
          </button>
        </div>
      </div>}
    </div>
  );
}
