import React from 'react';
import { IoMailUnread } from 'react-icons/io5';
import Loading from './Loading';

export default function EmailOtpMsg({ email, handleSubmit, formData, setFormData ,isLoading}) {
  return (
    <div className="bg-white w-[488px] shadow-lg px-5 py-3 justify-center rounded-[16px] flex flex-col items-center gap-2">
      <IoMailUnread size={50} className="text-[#5F00D9]" />
      <h1 className="font-bold text-[20px]">Email Verification</h1>
      <p className="text-center opacity-70">
        We have sent an email verification OTP to{' '}
        <span className="opacity-100 font-semibold">{email}</span>
      </p>
      <input
        className="p-2 mt-1 rounded-md border border-[#EEEEF4] w-full"
        value={formData.otp}
        onChange={(e) => setFormData({ ...formData, otp: e.target.value })} // Sync input with state
        type="number"
        placeholder="enter otp"
      />
      <button
        className="bg-gray-300 p-2 font-semibold rounded-xl w-full"
        onClick={handleSubmit}
      >
        { isLoading ? <Loading/>: "Verify"}
      </button>
    </div>
  );
}
