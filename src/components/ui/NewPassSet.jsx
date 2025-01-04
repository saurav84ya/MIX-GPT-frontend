import React from 'react'
import Loading from './Loading'

export default function NewPassSet({newPass , setNewPass,onsubmitNewPass,otpLoading}) {
  return (
        <div className=" bg-white w-[488px] px-[20px] py-5 shadow-lg m-3 ">
          <h1 className="font-bold text-[20px] mb-3 " >Reset Password</h1>
          <p className="opacity-70 text-[15px] " >Enter your new password</p>
    
          <div className="flex flex-col " >
            <label className="font-bold text-[14px] mt-3  ">New Password</label>
            <input
              value={newPass.password}
              onChange={(e) => setNewPass({...newPass , password : e.target.value}) }
              className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
              type="text"
            />
    
            <label className="font-bold text-[14px] mt-3  ">Conform Password</label>
            <input
                          value={newPass.confirmPassword}
                          onChange={(e) => setNewPass({...newPass , confirmPassword : e.target.value}) }
            
              className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
              type="text"
            />
    
            <button
            disabled = {otpLoading}
            onClick={onsubmitNewPass} 
              className="bg-gray-300 p-2 font-semibold rounded-xl mt-3">
                { otpLoading ?  <Loading/>  :  "Reset Password"}
            </button>
          </div>
        </div>
  )
}
