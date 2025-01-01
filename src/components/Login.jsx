import React from 'react'

export default function Login() {
  return (
    <div className=" bg-white w-[480px] px-[20px] py-5 m-3 rounded-xl shadow-lg ">


    <h1 className="text-2xl font-bold" >Welcome to MIX GPT</h1>
    <p className="opacity-70" > Enter your credentials to access the account </p>

    <form className=" flex flex-col mt-2 " >

      <label className="font-bold text-[14px] mt-3  " >Email</label>
      <input  className="p-2 mt-1 rounded-md border border-[##EEEEF4] " type="email" placeholder="your email" />

      <label className="font-bold text-[14px] mt-3 " >Password</label>
      <input className="p-2 mt-1 rounded-md border border-[##EEEEF4] " placeholder='password'  type="password"  />

      <button className="bg-gray-300 p-2 font-semibold rounded-xl mt-7 " >Login</button>

    </form>

    <p className="mt-4 text-center opacity-60 font-semibold text-[12px] " >Don't have account? <span className="text-[#5F00D9]  cursor-pointer ">Sign up</span> </p>
    
  </div>
  )
}
