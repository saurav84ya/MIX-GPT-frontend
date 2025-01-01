import React from 'react'

export default function NewPassSet() {
  return (
        <div className=" bg-white w-[488px] px-[20px] py-5 shadow-lg m-3 ">
          <h1 className="font-bold text-[20px] mb-3 " >Reset Password</h1>
          <p className="opacity-70 text-[15px] " >Enter your new password</p>
    
          <div className="flex flex-col " >
            <label className="font-bold text-[14px] mt-3  ">New Password</label>
            <input
              className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
              type="text"
            />
    
            <label className="font-bold text-[14px] mt-3  ">New Password</label>
            <input
              className="p-2 mt-1 rounded-md border border-[##EEEEF4] "
              type="text"
            />
    
            <button className="bg-gray-300 p-2 font-semibold rounded-xl mt-3">
                Reset Password
            </button>
          </div>
        </div>
  )
}
