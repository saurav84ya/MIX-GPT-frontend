import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NewPassMsg() {
  return ( 
    <div className=" bg-white w-[488px] px-[20px] py-5 shadow-lg m-3 flex flex-col items-center ">
        <FaCheckCircle size={40} className='text-[#059669]' />
    <h1 className="font-bold text-[20px] my-2 " >Password Reset Done </h1>
    <p className="opacity-70 text-[15px] " >Now you cann access your account</p>



      <Link to="/home">
      <button className="bg-[#5F00D9] text-white p-2 font-semibold rounded-xl w-full  mt-3">
          Go to Home
      </button></Link>
  </div>
  )
}
