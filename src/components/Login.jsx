import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./ui/Loading";
import toast from "react-hot-toast";
import { login } from "../store/authSlice";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rec , setRec] = useState(false)
  const { isLoading } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async( e) => {
    e.preventDefault();

    if(!emailRegex.test(formData.email) || !formData.password || !formData.email ) { 
      return toast.error("Plz Fill the data properly");
    }
    // console.log("formData" ,formData)

    dispatch(login(formData))
    .then((data) => {
      console.log("data",data)
      if(data?.payload?.success){
        toast.success(data?.payload?.message);
        // setAskOtp(true)
      }else{
        toast.error(data?.payload?.message);
        setRec(true)
      }
    }) 
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" bg-white w-[480px] px-[20px] py-5 m-3 rounded-xl shadow-lg ">
        <h1 className="text-2xl font-bold">Welcome to MIX GPT</h1>
        <p className="opacity-70">
          {" "}
          Enter your credentials to access the account{" "}
        </p>

        <div className=" flex flex-col mt-2 ">
          <label className="font-bold text-[14px] mt-3  ">Email</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
            type="email"
            placeholder="your email"
          />

          <label className="font-bold text-[14px] mt-3 ">Password</label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
            placeholder="password"
            type="password"
          />

          <button
            disabled={isLoading}
            onClick={onSubmit}
            className={`p-2 font-semibold text-white rounded-xl mt-7 bg-green-500 hover:bg-green-600
            }`}
          >
            {isLoading ? <Loading /> : "Login"}
          </button>
          {
            rec && <p className="text-black opacity-55 text-sm mt-2 text-center ">Do you forgot your Password : <Link to="/authPage/rec" className="opacity-100 font-bold cursor-pointer text-blue-500 " >Need help</Link></p>
          }
        </div>
      </div>
    </div>
  );
}
