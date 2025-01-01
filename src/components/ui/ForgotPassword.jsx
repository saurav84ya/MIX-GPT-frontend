import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function ForgotPassword() {
  return (
    <div className=" bg-white w-[488px] px-[20px] py-5 shadow-lg m-3 ">
      <IoMdArrowBack size={25} className="my-2"  />
      <h1 className="font-bold text-[20px] mb-3 " >Forgot Password</h1>
      <p className="opacity-70 text-[15px] " >Enter your email address for which account you want to recover</p>

      <div className="flex flex-col " >
        <label className="font-bold text-[14px] mt-3  ">Email</label>
        <input
          className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
          type="email"
          placeholder="your email"
        />

        <label className="font-bold text-[14px] mt-3  ">Otp</label>
        <input
          className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
          type="number"
          placeholder="Otp"
        />

        <button className="bg-gray-300 p-2 font-semibold rounded-xl mt-3">
          Sent Otp
        </button>
      </div>
    </div>
  );
}
